const workflow = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "I review the requirements, explore the existing system, and clarify edge cases before jumping into implementation.",
    focus: ["Business requirements", "Existing behavior", "Edge cases"],
  },
  {
    number: "02",
    title: "Evaluate the solution",
    description:
      "I assess technical feasibility, dependencies, and potential conflicts to choose an approach that fits the system.",
    focus: ["Technical trade-offs", "Dependencies", "Component design"],
  },
  {
    number: "03",
    title: "Build with intention",
    description:
      "I turn the solution into reusable components and clear, maintainable code without adding unnecessary complexity.",
    focus: ["Reusable components", "API integration", "Clean code"],
  },
  {
    number: "04",
    title: "Validate and refine",
    description:
      "I test different scenarios, investigate unexpected behavior, and refine the result before considering the task complete.",
    focus: ["Testing", "Bug fixing", "Code review"],
  },
];

export default function HowIWorkSection() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="relative border-t border-border bg-background-soft"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-coral uppercase">
            04 / How I work
          </p>

          <span className="font-mono text-[10px] text-text-muted">
            FROM REQUIREMENTS TO DELIVERY
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2
              id="approach-title"
              className="max-w-xl text-4xl leading-[1.12] font-semibold tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl"
            >
              Good code starts{" "}
              <span className="text-text-muted">before coding.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              Every task comes with a problem to understand and decisions to
              make. My process is about finding the right solution, building it
              thoughtfully, and making sure it works in the real world.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5 sm:p-6">
              <p className="font-mono text-[10px] tracking-[0.16em] text-coral uppercase">
                My priority
              </p>

              <p className="mt-3 text-lg leading-7 font-medium tracking-tight text-text-primary">
                Solve the right problem, not just complete the task.
              </p>

              <p className="mt-2 text-sm leading-6 text-text-muted">
                With a clear understanding of the requirements, the existing
                system, and the impact of each decision.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute top-7 bottom-7 left-[19px] w-px bg-border"
            />

            <div className="space-y-3">
              {workflow.map((step) => (
                <article
                  key={step.number}
                  className="relative grid grid-cols-[40px_minmax(0,1fr)] gap-4 rounded-2xl border border-border bg-surface p-4 transition-colors duration-200 hover:border-border-strong sm:gap-5 sm:p-5"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface-raised font-mono text-xs text-coral">
                    {step.number}
                  </div>

                  <div className="min-w-0 py-0.5">
                    <h3 className="text-base font-semibold text-text-primary sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {step.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {step.focus.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-border bg-background px-2.5 py-1.5 text-[11px] text-text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
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
