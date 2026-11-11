import { useState } from 'react';
import { Award, ChevronDown, Trophy } from 'lucide-react';
import { achievements, certifications } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

function AchievementCard({ title, detail, year }: { title: string; detail: string; year: string }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="card group overflow-hidden p-0 hover:-translate-y-1 hover:shadow-lift">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
        data-magnetic
        className="flex w-full items-start gap-5 p-6 text-left sm:p-7"
      >
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-lift transition duration-500 group-hover:rotate-12">
          <Trophy className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">{year}</span>
          <span className="mt-2 block font-display text-2xl font-semibold leading-snug text-ink">{title}</span>
        </span>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-ink transition duration-300 ${expanded ? 'rotate-180 text-brand-600' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-500 ${expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="space-y-4 border-t border-mist px-6 pb-6 pt-5 sm:px-7">
            <p className="text-sm leading-relaxed text-ink-soft">{detail}</p>
            <CertificatePlaceholder label="Certificate image" />
          </div>
        </div>
      </div>
    </article>
  );
}

function CertificatePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-brand-200 bg-brand-50/50 text-brand-600">
      <Award className="h-8 w-8" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.16em]">{label}</span>
    </div>
  );
}

export default function Achievements() {
  const years = [...new Set(achievements.map((item) => item.year))];

  return (
    <section id="achievements" className="bg-mist-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements & Recognition"
            title="Recognition Along the Way."
            description="Competitions, summits and public speaking milestones from my entrepreneurship and communication journey."
          />
        </Reveal>

        <div className="mt-16 space-y-14">
          {years.map((year) => (
            <Reveal key={year}>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <p className="font-display text-6xl font-semibold text-brand-600">{year}</p>
                  <span className="mt-3 block h-px w-16 bg-brand-600" aria-hidden="true" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:col-span-10">
                  {achievements
                    .filter((item) => item.year === year)
                    .map((item) => (
                      <AchievementCard key={item.id} title={item.title} detail={item.detail} year={item.year} />
                    ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-28">
          <Reveal>
            <SectionHeading
              eyebrow="Certifications"
              title="Certificate Gallery."
              description="Professional certifications across travel operations, entrepreneurship, language and analytics."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <Reveal key={certification.name} delay={index * 80} className="h-full">
                <article className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-lift">
                  <CertificatePlaceholder label="Certificate image" />
                  <h3 className="mt-6 font-display text-2xl font-semibold leading-snug text-ink">{certification.name}</h3>
                  {certification.issuer && (
                    <p className="mt-2 text-sm text-ink-soft">Issued by {certification.issuer}</p>
                  )}
                  {certification.verifyUrl && (
                    <a
                      href={certification.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-5 text-sm font-semibold text-brand-600 underline-offset-4 hover:underline"
                    >
                      Verify certificate
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
