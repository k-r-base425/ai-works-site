import type { LucideIcon } from "lucide-react";

type RpgHomeStatusBarProps = {
  items: Array<{
    icon: LucideIcon;
    label: string;
  }>;
};

export function RpgHomeStatusBar({ items }: RpgHomeStatusBarProps) {
  return (
    <div className="grid gap-3 border-t border-[color:var(--rpg-gold)]/40 px-4 py-5 text-sm font-black text-[#f8edd0] sm:grid-cols-4 sm:px-8">
      {items.map((item) => (
        <div key={item.label} className="flex items-center justify-center gap-3">
          <item.icon className="h-7 w-7 text-[color:var(--rpg-gold-light)]" strokeWidth={1.7} aria-hidden="true" />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
