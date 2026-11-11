import { Quote } from 'lucide-react';
import { aboutCards, aboutIntro } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading eyebrow="About Me" title={aboutIntro.heading} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 lg:pt-20" delay={150}>
            <figure className="relative rounded-3xl bg-mist-50 p-8 sm:p-10">
              <Quote className="h-10 w-10 text-brand-600" aria-hidden="true" />
              <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                {aboutIntro.closing}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-brand-600" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink">Manishaa B</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 100}>
                <article className="card group h-full p-7 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition duration-500 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{card.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
