import type { ReactNode } from "react";

export function RpgPageFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden bg-[color:var(--rpg-bg)] px-3 py-4 text-[#eef8ff] sm:px-5 sm:py-6 lg:px-6 lg:py-7">
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,240,167,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,167,0.12)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_8%,rgba(57,223,243,0.13),transparent_28rem),radial-gradient(circle_at_8%_80%,rgba(215,169,71,0.1),transparent_24rem)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="relative overflow-hidden border-2 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-bg)]/88 p-3 shadow-[var(--rpg-shadow)] sm:p-4 lg:p-5">
          <div className="pointer-events-none absolute inset-2 border border-[color:var(--rpg-gold)]/55" aria-hidden="true" />
          <div className="pointer-events-none absolute left-2 top-2 h-7 w-7 border-l-4 border-t-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
          <div className="pointer-events-none absolute right-2 top-2 h-7 w-7 border-r-4 border-t-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-2 left-2 h-7 w-7 border-b-4 border-l-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-2 right-2 h-7 w-7 border-b-4 border-r-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />

          <div className="relative z-10 [&_.text-ink]:text-[#f4fbff] [&_.text-muted]:text-[#b9d6df]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
