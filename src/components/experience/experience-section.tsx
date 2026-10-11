const experiences = [
  {
    number: "01",
    phase: "THE FOUNDATION",
    title: "Angular & Production Systems",
    description:
      "Built my foundation by supporting live applications, implementing client-specific changes, and turning requirements into reliable UI.",
    highlights: [
      "Maintained and enhanced production HR systems",
      "Implemented screens, forms, and validation",
      "Worked with Angular Material and PrimeNG",
    ],
    technologies: ["Angular", "Angular Material", "PrimeNG"],
    icon: "layers",
  },
  {
    number: "02",
    phase: "BUILDING SYSTEMS",
    title: "Custom UI & Reusable Architecture",
    description:
      "Moved beyond implementing individual screens to building front-end systems from scratch, with a focus on flexibility and consistency.",
    highlights: [
      "Built reusable components without a third-party UI library",
      "Worked across complex modules and API integrations",
      "Considered technical feasibility and existing dependencies",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    icon: "blocks",
  },
  {
    number: "03",
    phase: "TAKING OWNERSHIP",
    title: "Complex Features & Collaboration",
    description:
      "Took ownership of challenging features while helping maintain code quality and supporting junior developers.",
    highlights: [
      "Implemented real-time notification features with WebSockets",
      "Built and integrated complex application flows",
      "Reviewed code and supported junior team members",
    ],
    technologies: ["React", "TypeScript", "WebSockets"],
    icon: "radio",
  },
] as const;

function ExperienceIcon({
  icon,
}: {
  icon: (typeof experiences)[number]["icon"];
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "layers") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  }

  if (icon === "blocks") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <rect x="3" y="3" width="8" height="8" rx="2" />
        <rect x="13" y="13" width="8" height="8" rx="2" />
        <path d="M13 7h3a3 3 0 0 1 3 3v3M7 11v3a3 3 0 0 0 3 3h3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" {...common}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M7 9h.01M11 9h.01M7 13h10M7 16h6" />
    </svg>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-coral uppercase">
            02 / The journey
          </p>
          <span className="font-mono text-[10px] text-text-muted">
            LEARN · BUILD · OWN
          </span>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="experience-title"
              className="max-w-xl text-4xl leading-[1.12] font-semibold tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl"
            >
              Growing through{" "}
              <span className="text-text-muted">what I build.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-text-secondary">
              From maintaining production applications to building scalable
              front-end systems, each stage has shaped how I approach
              engineering today.
            </p>

            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <span className="h-px w-10 bg-coral" />
              <span className="text-sm text-text-muted">
                A journey of increasing ownership
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-[17px] w-px bg-border"
            />

            <div className="space-y-5">
              {experiences.map((experience) => (
                <article key={experience.number} className="relative pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute top-7 left-[11px] z-10 h-[13px] w-[13px] rounded-full border-2 border-coral bg-background"
                  />

                  <div className="group rounded-2xl border border-border bg-surface/70 p-5 transition-colors duration-200 hover:border-border-strong sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-coral">
                        {experience.phase}
                      </span>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-coral">
                        <div className="h-5 w-5">
                          <ExperienceIcon icon={experience.icon} />
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-5 text-xl font-medium tracking-tight text-text-primary sm:text-2xl">
                      {experience.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-text-secondary">
                      {experience.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-text-secondary"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-border bg-background/70 px-2.5 py-1.5 font-mono text-[10px] text-text-muted"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
