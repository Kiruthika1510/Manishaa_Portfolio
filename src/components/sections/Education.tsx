import { GraduationCap, School, Users } from 'lucide-react';
import { education } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Education() {
  const { college, school } = education;

  return (
    <section id="education" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic Journey." />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-brand-200 sm:left-[15px]" aria-hidden="true" />

          <Reveal>
            <div className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 ring-8 ring-white sm:h-8 sm:w-8" aria-hidden="true">
                <GraduationCap className="h-3.5 w-3.5 text-white" />
              </span>
              <article className="card relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-y-0 left-0 w-1 bg-brand-600" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{college.period}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-ink">{college.institution}</h3>
                <p className="mt-2 text-base text-ink-soft">{college.degree}</p>

                <div className="mt-8 grid gap-6 border-t border-mist pt-8 sm:grid-cols-2">
                  <div>
                    {college.results.map((result) => (
                      <p key={result.label} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-ink-soft">{result.label}</span>
                        <span className="font-display text-2xl font-semibold text-ink">{result.value}</span>
                      </p>
                    ))}
                  </div>
                  <div className="rounded-2xl bg-brand-50 p-6">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                      <Users className="h-4 w-4" aria-hidden="true" />
                      Leadership
                    </p>
                    <p className="mt-3 font-semibold text-ink">{college.leadership.title}</p>
                    <p className="text-sm text-ink-soft">{college.leadership.organisation}</p>
                    <p className="mt-2 text-xs text-ink-soft">{college.leadership.period}</p>
                  </div>
                </div>
              </article>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-10">
            <div className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-brand-600 bg-white ring-8 ring-white sm:h-8 sm:w-8" aria-hidden="true">
                <School className="h-3 w-3 text-brand-600" />
              </span>
              <article className="card relative overflow-hidden p-8 sm:p-10">
                <div className="absolute inset-y-0 left-0 w-1 bg-brand-200" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">{school.period}</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-ink">{school.institution}</h3>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-mist pt-8">
                  {school.results.map((result) => (
                    <div key={result.label} className="rounded-2xl border border-mist p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">{result.label}</p>
                      <p className="mt-2 font-display text-4xl font-semibold text-ink">{result.value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
