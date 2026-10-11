"use client";

import { useState } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: { value: ButtonVariant; label: string }[] = [
  { value: "primary", label: "Primary" },
  { value: "secondary", label: "Secondary" },
  { value: "ghost", label: "Ghost" },
];

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border border-coral bg-coral text-background hover:bg-coral-hover hover:border-coral-hover",
  secondary:
    "border border-border-strong bg-transparent text-text-primary hover:bg-white/5",
  ghost: "border border-transparent bg-coral/10 text-coral hover:bg-coral/15",
};

export default function ButtonPlayground() {
  const [variant, setVariant] = useState<ButtonVariant>("primary");

  return (
    <section
      aria-label="Interactive button component playground"
      className="relative overflow-hidden rounded-2xl border border-border bg-surface p-5 shadow-2xl shadow-black/10 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-plum/50 blur-3xl"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Button playground
            </p>
            <p className="mt-1 text-xs text-text-muted">
              One component. Different variants.
            </p>
          </div>

          <span className="rounded-lg border border-border bg-background px-2.5 py-1 font-mono text-[10px] text-coral">
            UI / 001
          </span>
        </div>

        <div
          aria-label="Select button variant"
          className="mt-6 grid grid-cols-3 gap-1 rounded-xl border border-border bg-background p-1"
        >
          {variants.map((item) => {
            const isActive = variant === item.value;

            return (
              <button
                key={item.value}
                type="button"
                aria-pressed={isActive}
                onClick={() => setVariant(item.value)}
                className={`rounded-lg px-2 py-2 text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-surface-raised text-text-primary shadow-sm"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex min-h-36 flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border-strong bg-background/60 px-4 py-6">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-200 ${variantStyles[variant]}`}
          >
            Let&apos;s build something
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </button>

          <p className="font-mono text-[11px] text-text-muted">
            variant=&quot;{variant}&quot;
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 text-xs">
          <span className="text-text-secondary">Live component preview</span>
          <span className="flex items-center gap-1.5 text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
            Interactive
          </span>
        </div>
      </div>
    </section>
  );
}
