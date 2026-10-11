const principles = [
  {
    number: "01",
    icon: "layers" as const,
    title: "Systems over shortcuts",
    description:
      "I build reusable components with flexible APIs, clear responsibilities, and room to evolve instead of repeating code.",
    tag: "REUSABILITY",
  },
  {
    number: "02",
    icon: "workflow" as const,
    title: "Decisions before implementation",
    description:
      "I evaluate requirements, existing architecture, and dependencies before deciding how a feature should be built.",
    tag: "PROBLEM SOLVING",
  },
  {
    number: "03",
    icon: "scan" as const,
    title: "Details that earn their place",
    description:
      "I care about pixel-conscious UI, responsive behavior, meaningful states, and maintainable code.",
    tag: "CRAFT & QUALITY",
  },
];

function PrincipleIcon({ name }: { name: "layers" | "workflow" | "scan" }) {
  if (name === "layers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    );
  }

  if (name === "workflow") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="7" height="6" rx="1.5" />
        <rect x="14" y="15" width="7" height="6" rx="1.5" />
        <path d="M10 6h3a3 3 0 0 1 3 3v6M16 12v3h-3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5M8 10.5l1.7 1.7 3.5-3.5" />
    </svg>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-coral uppercase">
            01 / About my approach
          </p>
          <span className="hidden font-mono text-[10px] text-text-muted sm:block">
            BEHIND THE INTERFACE
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2
              id="about-title"
              className="max-w-xl text-4xl leading-[1.12] font-semibold tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl"
            >
              I don&apos;t just build interfaces.
              <span className="mt-2 block text-text-muted">
                I think about what holds them together.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-text-secondary">
              Good front-end development is more than making a design look
              right. It&apos;s understanding the requirements, making thoughtful
              technical decisions, and building something that stays flexible as
              it grows.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-px w-10 bg-coral" />
              <span className="text-sm text-text-secondary">
                Thoughtful by design. Structured by intent.
              </span>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {principles.map((principle) => (
              <article key={principle.number} className="group py-7 sm:py-8">
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="pt-1 font-mono text-xs text-text-muted">
                    {principle.number}
                  </span>

                  <div className="flex min-w-0 flex-1 flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-coral transition-colors duration-200 group-hover:border-coral/40 group-hover:bg-plum/30">
                      <PrincipleIcon name={principle.icon} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-medium tracking-tight text-text-primary sm:text-xl">
                        {principle.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-7 text-text-secondary">
                        {principle.description}
                      </p>

                      <span className="mt-4 inline-flex rounded-md border border-border px-2 py-1 font-mono text-[9px] tracking-wider text-text-muted">
                        {principle.tag}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="hidden text-lg text-text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-coral sm:block"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 rounded-2xl border border-border bg-surface/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="text-xs tracking-[0.15em] text-coral uppercase">
              My workflow
            </p>
            <p className="mt-3 text-lg font-medium text-text-primary sm:text-xl">
              Understand <span className="text-coral">→</span> Architect{" "}
              <span className="text-coral">→</span> Build{" "}
              <span className="text-coral">→</span> Refine
            </p>
          </div>

          <span className="text-sm text-text-muted">
            Every decision has a reason.
          </span>
        </div>
      </div>
    </section>
  );
}
