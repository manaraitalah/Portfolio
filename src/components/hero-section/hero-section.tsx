import HeroReveal from "../animation/hero-reveal";
import ButtonPlayground from "../buttons/button-playground";
import { CraftNote } from "./craft-note";
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section id="home" className="relative isolate flex min-h-screen flex-col">
      {/* Plum ambient glow */}
      <div
        aria-hidden="true"
        className="hero-glow-drift pointer-events-none absolute -top-20 right-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(139,75,130,0.34)_0%,_rgba(68,36,63,0.2)_38%,_transparent_72%)] blur-3xl"
      />

      {/* Coral ambient glow */}
      <div
        aria-hidden="true"
        className="hero-glow-breathe pointer-events-none absolute bottom-[-5rem] left-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(223,121,104,0.2)_0%,_rgba(105,69,95,0.12)_42%,_transparent_72%)] blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-12 lg:py-10">
        <HeroReveal delay={0.15} direction="left">
          <HeroContent />
        </HeroReveal>

        <div className="mx-auto w-full max-w-xl lg:ml-auto">
          <HeroReveal delay={0.35} direction="right">
            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <p className="text-sm font-medium text-text-primary">
                  A little of how I build
                </p>

                <p className="mt-1 text-xs text-text-muted">
                  Explore the component below
                </p>
              </div>

              <span className="font-mono text-[10px] tracking-wider text-text-muted">
                PLAYGROUND / 01
              </span>
            </div>

            <ButtonPlayground />
          </HeroReveal>

          <HeroReveal delay={0.55}>
            <CraftNote />
          </HeroReveal>
        </div>
      </div>

      <HeroReveal delay={0.7}>
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-border/70 px-5 py-5 sm:px-8 lg:px-12">
          <p className="text-xs text-text-muted">
            Thoughtful interfaces. Intentional engineering.
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs text-text-secondary transition-colors hover:text-coral"
          >
            Scroll to explore
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </HeroReveal>
    </section>
  );
}
