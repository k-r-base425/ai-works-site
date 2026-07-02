import { Link } from "react-router-dom";
import { assetPath } from "../../lib/paths";

type Hotspot = {
  id: string;
  label: string;
  href: string;
  status?: string;
  x: number;
  y: number;
  size: number;
  align: "left" | "center" | "right";
};

const heroMap = assetPath("/assets/top/hero-map/home-island-map.png");

const hotspots: Hotspot[] = [
  { id: "profile", label: "プロフィール", href: "/profile", x: 12, y: 18, size: 13, align: "left" },
  { id: "related", label: "関連活動", href: "/related", x: 56, y: 17, size: 12, align: "center" },
  { id: "notes", label: "メモ", href: "/notes", x: 88, y: 28, size: 12, align: "right" },
  { id: "ai-works", label: "AI WORKS", href: "/works/ai-works", x: 30, y: 43, size: 13, align: "left" },
  { id: "can-do", label: "できること", href: "/can-do", x: 52, y: 50, size: 14, align: "center" },
  { id: "process", label: "つくり方", href: "/process", x: 71, y: 42, size: 13, align: "right" },
  { id: "works", label: "作品一覧", href: "/works", x: 17, y: 80, size: 13, align: "left" },
  { id: "mini-game", label: "ミニゲーム", href: "/works", status: "準備中", x: 44, y: 66, size: 14, align: "center" },
  { id: "guide", label: "ガイド", href: "/qr-guide", x: 86, y: 73, size: 13, align: "right" },
];

const labelOffset = {
  left: "left-0",
  center: "left-1/2 -translate-x-1/2",
  right: "right-0",
};

export function RpgWorldMap() {
  return (
    <div className="rounded-sm border-2 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-bg-deep)] p-1 shadow-[var(--rpg-shadow)] lg:h-full">
      <div className="relative aspect-[820/565] overflow-hidden rounded-sm lg:h-full lg:min-h-[31rem] lg:aspect-auto xl:min-h-[34rem]">
        <img src={heroMap} alt="" className="pixel-art h-full w-full object-cover" />
        <div className="absolute inset-0">
          {hotspots.map((spot) => (
            <Link
              key={spot.id}
              to={spot.href}
              aria-label={`${spot.label}${spot.status ? ` ${spot.status}` : ""}へ移動`}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
                height: `${spot.size}%`,
                width: `${spot.size}%`,
              }}
            >
              <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-cyan)] shadow-[0_0_16px_var(--rpg-cyan)] transition group-hover:scale-125 group-focus-visible:scale-125" />
              <span className="absolute inset-0 rounded-full border border-[color:var(--rpg-gold-light)]/70 bg-[color:var(--rpg-gold-light)]/10 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
              <span className={`pointer-events-none absolute top-full mt-1 hidden whitespace-nowrap rounded-sm border border-[color:var(--rpg-gold)] bg-[color:var(--rpg-panel)] px-2.5 py-1 text-[10px] font-black text-white shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition group-hover:block group-focus-visible:block sm:block ${labelOffset[spot.align]}`}>
                {spot.label}
                {spot.status ? <span className="ml-1 text-[color:var(--rpg-gold-light)]">{spot.status}</span> : null}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-3 grid gap-2 lg:hidden">
        <p className="text-xs font-black tracking-[0.16em] text-[color:var(--rpg-gold-light)]">マップ移動先</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {hotspots.map((spot) => (
            <Link
              key={spot.id}
              to={spot.href}
              className="rounded-sm border border-[color:var(--rpg-gold)]/60 bg-[color:var(--rpg-panel)] px-3 py-2 text-xs font-black text-white"
            >
              {spot.label}
              {spot.status ? <span className="ml-1 text-[color:var(--rpg-gold-light)]">{spot.status}</span> : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
