import type { Project } from "./project-data";

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "realtime") {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] tracking-widest text-text-muted uppercase">
              Workspace / Overview
            </p>
            <p className="mt-2 text-sm font-medium text-text-primary">
              Appointment dashboard
            </p>
          </div>

          <span className="flex items-center gap-2 rounded-full border border-border-strong px-2.5 py-1.5 text-[10px] text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Live updates
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            ["Sessions", "24"],
            ["Pending", "08"],
            ["Updates", "Live"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-border bg-background/80 p-3"
            >
              <p className="text-[10px] text-text-muted">{label}</p>
              <p className="mt-2 text-lg font-semibold text-text-primary">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-background/80 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-text-primary">
              Notification stream
            </p>
            <span className="font-mono text-[9px] text-coral">WEBSOCKET</span>
          </div>

          {[
            ["Appointment updated", "Just now"],
            ["New notification received", "Live event"],
          ].map(([label, time]) => (
            <div
              key={label}
              className="mt-3 flex items-center gap-3 border-t border-border pt-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-plum/40 text-coral">
                <span aria-hidden="true">↗</span>
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-text-secondary">{label}</p>
                <p className="mt-1 text-[10px] text-text-muted">{time}</p>
              </div>
              <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const visuals = {
    architecture: {
      eyebrow: "COMPONENT ARCHITECTURE",
      title: "Built to scale.",
      rows: [
        ["Shared components", "Reusable"],
        ["Business modules", "Flexible"],
        ["Design consistency", "Unified"],
      ],
    },
    angular: {
      eyebrow: "APPLICATION MODULES",
      title: "Structured workflows.",
      rows: [
        ["Forms & validation", "Reactive"],
        ["Tables & filters", "Modular"],
        ["API integration", "Connected"],
      ],
    },
    production: {
      eyebrow: "PRODUCTION SYSTEM",
      title: "Reliable by design.",
      rows: [
        ["Client customizations", "Supported"],
        ["Issue investigation", "Resolved"],
        ["Application stability", "Maintained"],
      ],
    },
  } as const;

  const visual = visuals[type];

  return (
    <div className="flex min-h-64 flex-col justify-center">
      <p className="text-[10px] tracking-widest text-text-muted uppercase">
        {visual.eyebrow}
      </p>
      <h4 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
        {visual.title}
      </h4>

      <div className="mt-6 space-y-2">
        {visual.rows.map(([label, value], index) => (
          <div
            key={label}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/70 px-3 py-3"
          >
            <span className="flex items-center gap-3 text-xs text-text-secondary">
              <span className="font-mono text-[10px] text-text-muted">
                0{index + 1}
              </span>
              {label}
            </span>
            <span className="text-[10px] text-coral">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group overflow-hidden rounded-2xl border border-border bg-surface/70 transition-colors duration-200 hover:border-border-strong ${
        project.featured ? "lg:grid lg:grid-cols-[1fr_0.95fr]" : ""
      }`}
    >
      <div
        className={`flex flex-col p-5 sm:p-7 ${
          project.featured ? "lg:p-8" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-xs text-coral">
            PROJECT / {project.number}
          </span>
          <span className="text-right text-[9px] tracking-wider text-text-muted uppercase sm:text-[10px]">
            {project.category}
          </span>
        </div>

        <h3 className="mt-6 text-2xl leading-tight font-semibold tracking-tight text-text-primary sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-2 text-xs text-text-muted">{project.role}</p>

        <p className="mt-5 text-sm leading-7 text-text-secondary">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-border bg-background/70 px-2.5 py-1.5 font-mono text-[10px] text-text-muted"
            >
              {technology}
            </span>
          ))}
        </div>

        <details className="mt-6 border-t border-border pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-2 text-sm font-medium text-text-primary marker:hidden [&::-webkit-details-marker]:hidden">
            <span>My contributions</span>
            <span
              aria-hidden="true"
              className="text-lg text-coral transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>

          <ul className="mt-3 space-y-3 pb-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-text-secondary"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div
        className={`border-t border-border bg-background/40 p-4 sm:p-6 ${
          project.featured ? "flex items-center lg:border-t-0 lg:border-l" : ""
        }`}
      >
        <div className="w-full rounded-xl border border-border bg-[#1b171d] p-4 sm:p-5">
          <ProjectVisual type={project.visual} />
          <p className="mt-4 border-t border-border pt-3 text-[9px] leading-5 text-text-muted">
            Illustrative interface concept · Not an actual project screenshot
          </p>
        </div>
      </div>
    </article>
  );
}
