import React from 'react';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Shared editorial section header: an indexed kicker, a hairline rule,
 * and a display title with an optional supporting description.
 */
const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  tone = 'light',
  className = '',
}: SectionHeadingProps) => {
  const dark = tone === 'dark';

  return (
    <div className={`border-t pt-6 ${dark ? 'border-white/15' : 'border-line'} ${className}`}>
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-6 min-w-6 items-center justify-center rounded-full px-2 text-[10px] font-semibold tabular-nums ${
            dark ? 'bg-white text-ink' : 'bg-ink text-white'
          }`}
        >
          {index}
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px] ${
            dark ? 'text-white/50' : 'text-muted'
          }`}
        >
          {eyebrow}
        </span>
        <span className={`h-px flex-1 ${dark ? 'bg-white/15' : 'bg-line'}`} aria-hidden="true" />
      </div>

      <div className="mt-7 grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h2
          className={`max-w-3xl font-heading text-[2rem] font-semibold leading-[1.06] tracking-[-0.035em] sm:text-[2.6rem] lg:col-span-8 lg:text-[3.1rem] ${
            dark ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`max-w-md text-sm leading-7 lg:col-span-4 ${
              dark ? 'text-white/55' : 'text-muted'
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default SectionHeading;
