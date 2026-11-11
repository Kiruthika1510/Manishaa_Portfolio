import type { CSSProperties } from 'react';
import { ArrowRight, Download, MapPin, Plane } from 'lucide-react';
import { profile } from '@/data/profile';

const rise = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:min-h-screen lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="hero-rise font-display text-2xl font-semibold tracking-[0.3em] text-ink" style={rise(0)}>
            {profile.nameUpper}
          </p>

          <h1
            className="hero-rise mt-6 text-balance font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
            style={rise(120)}
          >
            {profile.headline}
          </h1>

          <p className="hero-rise mt-5 font-display text-2xl italic text-brand-600 sm:text-3xl" style={rise(240)}>
            {profile.subheadline}
          </p>

          <p className="hero-rise mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-ink" style={rise(360)}>
            {profile.title}
          </p>
          <p className="hero-rise mt-2 text-sm text-ink-soft" style={rise(400)}>
            {profile.positioning}
          </p>

          <p className="hero-rise mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg" style={rise(480)}>
            {profile.summary}
          </p>

          <div className="hero-rise mt-10 flex flex-wrap items-center gap-3" style={rise(600)}>
            <a href="#journey" className="btn-primary" data-magnetic>
              Explore My Journey
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#experience" className="btn-outline" data-magnetic>
              View My Experience
            </a>
            <a href={profile.resumeUrl} download className="btn-outline" data-magnetic>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <p className="hero-rise mt-8 inline-flex items-center gap-2 text-sm text-ink-soft" style={rise(720)}>
            <MapPin className="h-4 w-4 text-brand-600" aria-hidden="true" />
            {profile.location}
          </p>
        </div>

        <div className="hero-rise relative lg:col-span-6" style={rise(300)}>
          <div
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift sm:aspect-[5/4] lg:aspect-[4/5]"
            data-cursor="discover"
          >
            <img
              src={profile.heroImage}
              alt="View from an aircraft window over a wing at sunrise"
              width={1800}
              height={1200}
              className="h-full w-full object-cover transition duration-[1.6s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" aria-hidden="true" />

            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <path
                d="M 10 86 C 32 52, 52 70, 90 16"
                pathLength={100}
                fill="none"
                stroke="#D71920"
                strokeWidth="0.6"
                strokeLinecap="round"
                className="route-line"
              />
            </svg>

            <span className="absolute bottom-6 left-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-card">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
              Tamil Nadu
            </span>
            <span className="absolute right-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-card">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
              Singapore
            </span>

            <div className="plane-drift absolute left-[52%] top-[44%] flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-600 shadow-card">
              <Plane className="h-5 w-5 -rotate-45" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
