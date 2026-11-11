import { useState } from 'react';
import { skillCategories } from '@/data/profile';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);
  const active = skillCategories.find((category) => category.id === activeId) ?? skillCategories[0];
  const ActiveIcon = active.icon;

  return (
    <section id="skills" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Professional Strengths."
            description="The capabilities I bring to coordination, research and customer-facing work."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div role="tablist" aria-label="Skill categories" aria-orientation="vertical" className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                const isActive = category.id === active.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    id={`skill-tab-${category.id}`}
                    aria-selected={isActive}
                    aria-controls="skill-panel"
                    data-magnetic
                    onClick={() => setActiveId(category.id)}
                    className={`group flex shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 text-left transition duration-300 ${
                      isActive
                        ? 'border-brand-600 bg-brand-600 text-white shadow-lift'
                        : 'border-mist bg-white text-ink hover:border-brand-200 hover:bg-brand-50'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl transition duration-300 ${
                        isActive ? 'bg-white/15' : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="whitespace-nowrap text-sm font-semibold">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8" delay={120}>
            <div
              id="skill-panel"
              role="tabpanel"
              aria-labelledby={`skill-tab-${active.id}`}
              className="card relative h-full overflow-hidden p-8 sm:p-12"
            >
              <span className="absolute -right-6 -top-6 flex h-40 w-40 items-center justify-center rounded-full bg-brand-50 text-brand-600/20" aria-hidden="true">
                <ActiveIcon className="h-16 w-16" />
              </span>
              <p className="eyebrow">{active.label}</p>
              <ul key={active.id} className="relative mt-8 grid gap-3 sm:grid-cols-2">
                {active.skills.map((skill, index) => (
                  <li
                    key={skill}
                    className="group flex items-center gap-3 rounded-xl border border-mist bg-white px-5 py-4 text-sm font-medium text-ink transition duration-300 hover:-translate-y-0.5 hover:border-brand-600 hover:shadow-card"
                    style={{ animation: `hero-rise 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms both` }}
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-brand-600 transition duration-300 group-hover:scale-150" aria-hidden="true" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
