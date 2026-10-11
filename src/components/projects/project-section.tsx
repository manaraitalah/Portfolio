import ScrollReveal from "../animation/scroll-reveal";
import ProjectCard from "./project-card";
import { projects } from "./project-data";

export default function ProjectsSection() {
  const [featuredProject, ...otherProjects] = projects;

  if (!featuredProject) return null;

  return (
    <section
      id="work"
      aria-labelledby="projects-title"
      className="relative border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-coral uppercase">
            03 / Selected work
          </p>
          <span className="font-mono text-[10px] text-text-muted">
            ENGINEERING IN PRACTICE
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="projects-title"
              className="max-w-2xl text-4xl leading-[1.12] font-semibold tracking-[-0.05em] text-text-primary sm:text-5xl lg:text-6xl"
            >
              A closer look at{" "}
              <span className="text-text-muted">how I build.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              Selected projects that reflect my approach to reusable
              architecture, complex workflows, and thoughtful front-end
              engineering.
            </p>
          </div>

          <span className="shrink-0 font-mono text-xs text-text-muted">
            04 PROJECTS
          </span>
        </div>

        <div className="mt-12 space-y-5 sm:mt-16">
          <ScrollReveal>
            <ProjectCard project={featuredProject} />
          </ScrollReveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.number} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-text-muted">
            Some project details are generalized to respect client
            confidentiality.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-coral"
          >
            Discuss a project
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
