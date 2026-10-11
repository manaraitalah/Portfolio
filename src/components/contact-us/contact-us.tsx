const contactMethods = [
  {
    label: "Email",
    value: "manaraitallah2510@email.com",
    href: "mailto:your.email@example.com",
    note: "For opportunities & collaboration",
  },
  {
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/manaraitalah",
    note: "Code, experiments & side projects",
  },
  {
    label: "LinkedIn",
    value: "Let's connect professionally",
    href: "https://www.linkedin.com/in/manar-aitallah-15a40a229?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    note: "Professional background & updates",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-plum/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-medium tracking-[0.18em] text-coral uppercase">
            05 / Get in touch
          </p>

          <span className="font-mono text-[10px] text-text-muted">
            OPEN TO MEANINGFUL WORK
          </span>
        </div>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <h2
              id="contact-title"
              className="max-w-2xl text-5xl leading-[1.08] font-semibold tracking-[-0.055em] text-text-primary sm:text-6xl lg:text-7xl"
            >
              Have a good problem
              <span className="text-coral"> to solve?</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
              I’m interested in thoughtful products, challenging front-end
              problems, and working with people who care about the details. If
              that sounds like your kind of work, let’s talk.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {contactMethods.map((method, index) => (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "Email" ? undefined : "_blank"}
                rel={method.label === "Email" ? undefined : "noreferrer"}
                className="group rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-border-strong hover:bg-surface-raised sm:p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-coral uppercase">
                      0{index + 1} / {method.label}
                    </p>

                    <p className="mt-3 text-sm font-medium text-text-primary transition-colors group-hover:text-coral sm:text-base">
                      {method.value}
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-text-muted">
                      {method.note}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="text-lg text-text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-coral"
                  >
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-border pt-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            Designed & built with intention.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs text-text-secondary transition-colors hover:text-coral"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </div>
    </section>
  );
}
