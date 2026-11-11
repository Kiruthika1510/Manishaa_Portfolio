import { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinationNote, destinations } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const LON_MIN = 68;
const LON_MAX = 108;
const LAT_MIN = 0;
const LAT_MAX = 40;

const project = (lon: number, lat: number) => ({
  x: ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * 100,
  y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100,
});

const points = destinations.map((destination) => ({ ...destination, ...project(destination.lon, destination.lat) }));

const routes = points.slice(1).map((to, index) => {
  const from = points[index];
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - 14;
  return { id: `${from.name}-${to.name}`, d: `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}` };
});

export default function Destinations() {
  const [activeName, setActiveName] = useState(destinations[0].name);
  const active = destinations.find((destination) => destination.name === activeName) ?? destinations[0];

  return (
    <section id="destinations" className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Destinations" title="Journeys Across Destinations." description={destinationNote} />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <div
              className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-mist bg-white shadow-card"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(181, 18, 27, 0.22) 1.2px, transparent 1.6px)',
                backgroundSize: '18px 18px',
              }}
            >
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
                {routes.map((route, index) => (
                  <path
                    key={route.id}
                    d={route.d}
                    pathLength={100}
                    fill="none"
                    stroke="#D71920"
                    strokeWidth="0.5"
                    strokeLinecap="round"
                    strokeDasharray="4 3"
                    className="route-line"
                    style={{ animationDelay: `${index * 250}ms`, opacity: 0.85 }}
                  />
                ))}
              </svg>

              {points.map((point) => {
                const isActive = point.name === active.name;
                return (
                  <button
                    key={point.name}
                    type="button"
                    onClick={() => setActiveName(point.name)}
                    aria-pressed={isActive}
                    aria-label={`Show ${point.name}`}
                    data-cursor="discover"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    className="group absolute -translate-x-1/2 -translate-y-1/2 p-2"
                  >
                    <span
                      className={`relative flex h-4 w-4 items-center justify-center rounded-full transition duration-300 ${
                        isActive ? 'scale-125 bg-brand-600 pin-pulse' : 'bg-white ring-2 ring-brand-600 group-hover:scale-125'
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white transition duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
                      }`}
                    >
                      {point.name}
                    </span>
                  </button>
                );
              })}

              <p className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-soft">
                Stylised route map
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={120}>
            <article className="card flex h-full flex-col overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                <img
                  key={active.image}
                  src={active.image}
                  alt={`${active.name}, ${active.region}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700"
                  data-cursor="discover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  {active.region}
                </p>
                <h3 className="font-display text-4xl font-semibold text-ink">{active.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  Featured in itinerary planning and coordination.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:-mx-8 sm:px-8 [scrollbar-width:thin]">
          {destinations.map((destination) => {
            const isActive = destination.name === active.name;
            return (
              <button
                key={destination.name}
                type="button"
                onClick={() => setActiveName(destination.name)}
                aria-pressed={isActive}
                data-cursor="discover"
                className={`group relative w-72 shrink-0 snap-start overflow-hidden rounded-2xl text-left transition duration-500 sm:w-80 ${
                  isActive ? 'ring-2 ring-brand-600 ring-offset-4' : 'hover:-translate-y-1'
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={destination.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16 text-white">
                  <div>
                    <p className="font-display text-2xl font-semibold">{destination.name}</p>
                    <p className="text-xs text-white/90">{destination.region}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
