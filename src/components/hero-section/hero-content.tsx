const expertise = [
  "React & TypeScript",
  "Reusable UI systems",
  "Front-end architecture",
];
export function HeroContent() {
  return (
    <div className="flex flex-col items-start">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral/50 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
        </span>

        <span className="text-xs font-medium tracking-wide text-text-secondary">
          FRONT-END ENGINEER
        </span>
      </div>

      <h1 className="mt-7 max-w-2xl text-[clamp(2.75rem,6.3vw,5.25rem)] leading-[1.06] font-semibold tracking-[-0.065em] text-text-primary">
        Good interfaces are built on{" "}
        <span className="relative inline-block text-coral">
          good decisions.
          <svg
            aria-hidden="true"
            viewBox="0 0 320 12"
            fill="none"
            className="absolute -bottom-2 left-0 w-full"
          >
            <path
              d="M3 8.5C78 3 220 2 316 6"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity=".7"
            />
          </svg>
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
        I turn complex requirements into thoughtful user experiences and
        scalable front-end systems, with a focus on reusable components,
        maintainable code, and the details that make interfaces feel right.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-coral-hover"
        >
          Explore my work
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href="#about"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border-strong px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-coral/60 hover:bg-white/[0.03]"
        >
          How I think
          <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-6">
        {expertise.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-xs text-text-muted sm:text-sm"
          >
            <span aria-hidden="true" className="text-coral">
              ✳
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
