import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type RpgHomeQuestCardProps = {
  accent: "blue" | "green" | "purple" | "amber";
  href: string;
  icon: LucideIcon;
  index: number;
  title: string;
};

const accentClasses = {
  blue: "bg-[color:var(--rpg-panel-soft)]",
  green: "bg-[color:var(--rpg-green)]",
  purple: "bg-[color:var(--rpg-purple)]",
  amber: "bg-[color:var(--rpg-amber)]",
};

export function RpgHomeQuestCard({ accent, href, icon: Icon, index, title }: RpgHomeQuestCardProps) {
  return (
    <Link
      to={href}
      className={`group relative grid min-h-[8.5rem] grid-cols-[4.5rem_1fr] items-center gap-4 overflow-hidden rounded-sm border-2 border-[color:var(--rpg-gold)] p-4 text-white shadow-[var(--rpg-shadow)] transition hover:-translate-y-1 lg:min-h-[7.75rem] lg:grid-cols-[3.75rem_1fr] lg:gap-3 lg:p-3 xl:min-h-[8.25rem] xl:grid-cols-[4.25rem_1fr] xl:p-4 ${accentClasses[accent]}`}
    >
      <span className="absolute left-5 top-2 rounded-sm border border-[color:var(--rpg-gold-light)] bg-[#d8b16c] px-3 py-1 text-[10px] font-black tracking-[0.08em] text-[#1b1207]">
        QUEST {String(index).padStart(2, "0")}
      </span>
      <span className="absolute right-2 top-2 h-2 w-2 border-r-2 border-t-2 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
      <span className="mt-5 flex h-16 w-16 items-center justify-center rounded-sm border-2 border-[#f2d98a] bg-[#071522] text-[color:var(--rpg-gold-light)] shadow-[inset_0_0_0_2px_rgba(0,0,0,0.35)] lg:h-14 lg:w-14 xl:h-16 xl:w-16">
        <Icon className="h-9 w-9 lg:h-8 lg:w-8 xl:h-9 xl:w-9" strokeWidth={1.65} aria-hidden="true" />
      </span>
      <span className="mt-6 min-w-0 text-lg font-black leading-8 tracking-normal sm:text-xl lg:text-base lg:leading-7 xl:text-lg xl:leading-8">
        {title}
      </span>
      <ArrowRight className="absolute bottom-4 right-4 h-6 w-6 text-[color:var(--rpg-gold-light)] transition group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}
