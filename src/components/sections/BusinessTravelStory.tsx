import type { CSSProperties } from 'react';
import { BriefcaseBusiness, Luggage, Plane, Ticket, Stamp } from 'lucide-react';
import { journeyImages } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const departures = [
  { destination: 'Kashmir', desk: 'Itinerary planning' },
  { destination: 'Andaman', desk: 'Logistics coordination' },
  { destination: 'Singapore', desk: 'Traveler queries' },
  { destination: 'Goa', desk: 'Group travel planning' },
];

const stamps = [
  { label: 'Kashmir', tilt: -10 },
  { label: 'Singapore', tilt: 8 },
  { label: 'Andaman', tilt: -6 },
];

export default function BusinessTravelStory() {
  return (
    <section id="journey" className="relative overflow-hidden bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Journey"
            title="Where Business Meets Travel."
            description="Every itinerary is a small business project: clear planning, dependable communication and a customer at the centre of every decision."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="card relative h-full overflow-hidden p-0">
              <div className="grid h-full sm:grid-cols-5">
                <div className="relative min-h-64 sm:col-span-2" data-cursor="discover">
                  <img
                    src={journeyImages.airport}
                    alt="Airport lounge with seating and large windows overlooking the runway"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1.2s] hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 sm:col-span-3">
                  <div>
                    <p className="eyebrow">Departures Board</p>
                    <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Current Coordination</h3>
                  </div>
                  <ul className="divide-y divide-mist text-sm" aria-label="Coordination areas by destination">
                    {departures.map((row) => (
                      <li key={row.destination} className="flex items-center justify-between gap-4 py-3">
                        <span className="font-semibold text-ink">{row.destination}</span>
                        <span className="text-right text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                          {row.desk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="card relative h-full overflow-hidden bg-brand-600 p-8 text-white sm:p-10">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/20" aria-hidden="true" />
              <div className="absolute -right-4 top-4 h-28 w-28 rounded-full border border-white/20" aria-hidden="true" />
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">Boarding Pass</span>
                <Ticket className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div className="relative mt-10">
                <p className="font-display text-4xl font-semibold">Manishaa B</p>
                <p className="mt-2 text-sm text-white/90">Business & Travel Coordinator</p>
              </div>
              <dl className="relative mt-10 grid grid-cols-3 gap-4 border-t border-dashed border-white/40 pt-6 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/80">From</dt>
                  <dd className="mt-1 font-semibold">Tamil Nadu</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/80">Focus</dt>
                  <dd className="mt-1 font-semibold">Operations</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.14em] text-white/80">Class</dt>
                  <dd className="mt-1 font-semibold">Customer First</dd>
                </div>
              </dl>
              <div className="relative mt-8 flex items-center gap-3 text-sm text-white/90">
                <Plane className="h-4 w-4 -rotate-45" aria-hidden="true" />
                <span className="h-px flex-1 border-t border-dashed border-white/50" aria-hidden="true" />
                <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6">
            <div className="card group relative h-full overflow-hidden p-0" data-cursor="discover">
              <img
                src={journeyImages.meeting}
                alt="Two professionals in a business discussion in a modern office"
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover transition duration-[1.2s] group-hover:scale-105"
              />
              <div className="p-8">
                <p className="eyebrow">Customer Interaction</p>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">
                  Business conversations, customer interactions and on-ground guidance shape every trip I coordinate.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={120}>
            <div className="card relative flex h-full flex-col justify-between overflow-hidden p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">Passport Notes</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-ink">Destinations in My Itineraries</h3>
                </div>
                <Luggage className="h-8 w-8 shrink-0 text-brand-600" aria-hidden="true" />
              </div>
              <div className="relative mt-10 flex flex-wrap gap-6">
                {stamps.map((stamp, index) => (
                  <div
                    key={stamp.label}
                    className="stamp flex h-28 w-28 flex-col items-center justify-center rounded-full border-2 border-brand-600 text-center text-brand-600"
                    style={{ '--stamp-tilt': `${stamp.tilt}deg`, '--stamp-delay': `${index * 150}ms` } as CSSProperties}
                  >
                    <Stamp className="mb-1 h-4 w-4" aria-hidden="true" />
                    <span className="font-display text-lg font-semibold uppercase leading-none">{stamp.label}</span>
                    <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em]">Itinerary</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-sm leading-relaxed text-ink-soft">
                Planning, coordination and customer support across Indian and Southeast Asian destinations.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
