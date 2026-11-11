type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start';
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <span className="eyebrow">
        <span className="h-px w-8 bg-brand-600" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl text-balance">{title}</h2>
      {description && <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>}
    </div>
  );
}
