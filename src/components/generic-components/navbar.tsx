import { Brand } from "./brand";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[76px] shrink-0 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        <Brand />

        <div className="flex items-center gap-5 sm:gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm text-sm text-text-secondary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coral"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
