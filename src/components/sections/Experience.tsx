import { ArrowUpRight, Check, FlaskConical, MapPin, Building2 } from 'lucide-react';
import { airSaaiExperience, tickYourTourExperience, profile } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

const airSaai = airSaaiExperience;
const tickYourTour = tickYourTourExperience;

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Professional Experience"
            title="Coordinating Journeys, Learning Through Research."
            description="Hands-on roles in travel operations and tourism research, shaped by direct customer contact and corporate analysis."
          />
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-brand-600 via-brand-200 to-transparent sm:left-[15px]" aria-hidden="true" />

          <Reveal>
            <div className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 ring-8 ring-white sm:h-8 sm:w-8" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <article className="card overflow-hidden p-0">
                <div className="grid lg:grid-cols-5">
                  <div className="flex flex-col justify-between gap-10 bg-brand-600 p-8 text-white sm:p-10 lg:col-span-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/85">{airSaai.period}</p>
                      <h3 className="mt-4 font-display text-4xl font-semibold leading-tight">{airSaai.organization}</h3>
                      <p className="mt-3 text-base text-white/90">{airSaai.role}</p>
                    </div>
                    <div className="border-t border-white/30 pt-8">
                      <p className="font-display text-7xl font-semibold leading-none sm:text-8xl">500+</p>
                      <p className="mt-3 text-lg font-semibold uppercase tracking-[0.12em]">Customers Coordinated</p>
                    </div>
                  </div>

                  <div className="space-y-10 p-8 sm:p-10 lg:col-span-3">
                    <div>
                      <h4 className="eyebrow">My Responsibilities</h4>
                      <ul className="mt-5 space-y-4">
                        {airSaai.responsibilities.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-mist-50 p-6">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                        <Building2 className="h-4 w-4 text-brand-600" aria-hidden="true" />
                        About the Company
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{airSaai.companyOverview}</p>
                      <h5 className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-ink">Company Services</h5>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {airSaai.companyServices.map((service) => (
                          <li key={service} className="rounded-full border border-mist bg-white px-3 py-1.5 text-xs text-ink-soft">
                            {service}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={profile.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-magnetic
                        className="btn-outline mt-6 !px-5 !py-2.5"
                      >
                        Company Website
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <div className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-600 bg-white ring-8 ring-white sm:h-8 sm:w-8" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brand-600" />
              </span>

              <article className="card relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-x-0 top-0 h-1 bg-brand-600" aria-hidden="true" />
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <FlaskConical className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">Research Internship</p>
                    </div>
                    <h3 className="mt-5 font-display text-4xl font-semibold text-ink">{tickYourTour.organization}</h3>
                    <p className="mt-2 text-base text-ink-soft">{tickYourTour.role}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {tickYourTour.period}
                  </span>
                </div>

                <ul className="mt-10 grid gap-x-10 gap-y-5 border-t border-mist pt-10 sm:grid-cols-2">
                  {tickYourTour.responsibilities.map((item, index) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                      <span className="font-display text-xl font-semibold leading-none text-brand-600">{String(index + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
