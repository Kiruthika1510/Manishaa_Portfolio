import { useEffect, useRef, useState } from 'react';

const POINTER_QUERY = '(hover: hover) and (pointer: fine)';
const MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const CLICKABLE = 'a, button, [role="button"], input, textarea, select, label, [data-cursor]';
const TRAIL_LENGTH = 22;
const PLANE_PATH =
  'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z';

type TrailPoint = { x: number; y: number; life: number };

export default function AirplaneCursor() {
  const [enabled] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia(POINTER_QUERY).matches &&
      !window.matchMedia(MOTION_QUERY).matches,
  );
  const layerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const plane = planeRef.current;
    const tilt = tiltRef.current;
    const label = labelRef.current;
    const canvas = canvasRef.current;
    if (!enabled || !layer || !plane || !tilt || !label || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const root = document.documentElement;
    const pos = { x: 0, y: 0, angle: 0 };
    const target = { x: 0, y: 0 };
    const trail: TrailPoint[] = [];
    let visible = false;
    let raf = 0;
    let lastHit: Element | null = null;
    let currentLabel = '';
    let magneticEl: HTMLElement | null = null;
    let landingTimer = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const setVisible = (value: boolean) => {
      visible = value;
      plane.style.opacity = value ? '1' : '0';
      root.classList.toggle('plane-cursor-active', value);
      if (value) plane.classList.add('is-takeoff');
    };

    const spawnPulse = (x: number, y: number) => {
      const ring = document.createElement('div');
      ring.className = 'plane-cursor-pulse';
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.addEventListener('animationend', () => ring.remove());
      document.body.appendChild(ring);
    };

    const setMagnetic = (next: HTMLElement | null, event: PointerEvent) => {
      if (next !== magneticEl && magneticEl) magneticEl.style.transform = '';
      magneticEl = next;
      if (!next) return;
      const rect = next.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) * 0.22;
      const dy = (event.clientY - (rect.top + rect.height / 2)) * 0.22;
      next.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    };

    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        pos.x = event.clientX;
        pos.y = event.clientY;
        setVisible(true);
      }

      const el = event.target instanceof Element ? event.target : null;
      const hit = el?.closest(CLICKABLE) ?? null;
      if (hit !== lastHit) {
        lastHit = hit;
        if (hit) spawnPulse(event.clientX, event.clientY);
      }

      const labelText = el?.closest('[data-cursor]')?.getAttribute('data-cursor') ?? '';
      if (labelText !== currentLabel) {
        currentLabel = labelText;
        label.textContent = labelText;
        label.style.opacity = labelText ? '1' : '0';
      }

      setMagnetic(el?.closest<HTMLElement>('[data-magnetic]') ?? null, event);
    };

    const onLeaveWindow = () => setVisible(false);

    const tick = () => {
      const dx = target.x - pos.x;
      const dy = target.y - pos.y;
      pos.x += dx * 0.18;
      pos.y += dy * 0.18;

      const speed = Math.hypot(dx, dy);
      if (speed > 0.6) {
        const heading = (Math.atan2(dy, dx) * 180) / Math.PI;
        let diff = heading - pos.angle;
        diff = ((diff + 540) % 360) - 180;
        pos.angle += diff * 0.2;
      }

      const bank = Math.max(-14, Math.min(14, dx * 0.12));
      tilt.style.transform = `rotateX(${bank}deg)`;
      plane.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${pos.angle + 90}deg)`;
      label.style.transform = `translate3d(${pos.x + 22}px, ${pos.y + 18}px, 0)`;

      if (speed > 0.3) {
        trail.push({ x: pos.x, y: pos.y, life: 1 });
        if (trail.length > TRAIL_LENGTH) trail.shift();
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = trail.length - 1; i >= 0; i -= 1) {
        const point = trail[i];
        point.life -= 0.045;
        if (point.life <= 0) {
          trail.splice(i, 1);
          continue;
        }
        const next = trail[i + 1];
        if (next) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = `rgba(215, 25, 32, ${point.life * 0.45})`;
          ctx.lineWidth = Math.max(0.6, point.life * 2.4);
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const landingObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        plane.classList.remove('is-landing');
        void plane.offsetWidth;
        plane.classList.add('is-landing');
        window.clearTimeout(landingTimer);
        landingTimer = window.setTimeout(() => plane.classList.remove('is-landing'), 1100);
      },
      { threshold: 0.45 },
    );
    const contact = document.getElementById('contact');
    if (contact) landingObserver.observe(contact);

    const onTakeoffEnd = () => plane.classList.remove('is-takeoff');
    plane.addEventListener('animationend', onTakeoffEnd);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('resize', resize);
    root.addEventListener('mouseleave', onLeaveWindow);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(landingTimer);
      landingObserver.disconnect();
      plane.removeEventListener('animationend', onTakeoffEnd);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', resize);
      root.removeEventListener('mouseleave', onLeaveWindow);
      if (magneticEl) magneticEl.style.transform = '';
      root.classList.remove('plane-cursor-active');
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={layerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <canvas ref={canvasRef} className="absolute left-0 top-0" />
      <div ref={planeRef} className="plane-cursor-plane">
        <div ref={tiltRef} className="plane-cursor-tilt" style={{ transformStyle: 'preserve-3d' }}>
          <svg viewBox="0 0 24 24" className="h-full w-full drop-shadow-sm" fill="#B5121B">
            <path d={PLANE_PATH} />
          </svg>
        </div>
      </div>
      <span ref={labelRef} className="plane-cursor-label" style={{ opacity: 0 }} />
    </div>
  );
}
