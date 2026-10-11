export function CraftNote() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      <div className="rounded-2xl border border-border bg-surface/80 p-4">
        <p className="font-mono text-[10px] tracking-[0.15em] text-text-muted uppercase">
          Design principle
        </p>
        <p className="mt-2 text-sm font-medium text-text-primary">
          Consistency over duplication.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-surface/80 p-4">
        <p className="font-mono text-[10px] tracking-[0.15em] text-text-muted uppercase">
          Engineering focus
        </p>
        <p className="mt-2 text-sm font-medium text-text-primary">
          Flexible by design.
        </p>
      </div>
    </div>
  );
}
