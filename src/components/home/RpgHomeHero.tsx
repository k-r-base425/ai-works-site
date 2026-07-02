import {
  BarChart3,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  FlaskConical,
  Globe2,
  Headphones,
  Image,
  Map,
  Monitor,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Swords,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { RpgHomeQuestCard } from "./RpgHomeQuestCard";
import { RpgHomeStatusBar } from "./RpgHomeStatusBar";
import { RpgWorldMap } from "./RpgWorldMap";

const navItems = [
  { href: "/", icon: Swords, label: "ホーム" },
  { href: "/can-do", icon: ScrollText, label: "できること" },
  { href: "/works", icon: BriefcaseBusiness, label: "活用シーン" },
  { href: "/process", icon: ShieldCheck, label: "サポート" },
  { href: "/profile", icon: Headphones, label: "会社情報" },
];

const serviceItems = [
  { icon: Monitor, label: "Web・LP制作" },
  { icon: Wrench, label: "業務ツール開発" },
  { icon: Image, label: "画像・資料制作" },
  { icon: FileText, label: "AI活用支援" },
];

const statItems = [
  { label: "実績", value: "99+" },
  { label: "対応範囲", value: "広域" },
  { label: "伴走サポート", value: "安心" },
  { label: "相談無料", value: "OK" },
];

const questCards = [
  { title: "ホームページ制作", href: "/works", icon: Monitor, accent: "blue" as const },
  { title: "業務ツール開発", href: "/can-do", icon: BarChart3, accent: "green" as const },
  { title: "画像・資料制作", href: "/can-do", icon: Image, accent: "purple" as const },
  { title: "AI活用コンサル", href: "/process", icon: BookOpenText, accent: "amber" as const },
  { title: "運用サポート・保守管理", href: "/related", icon: ShieldCheck, accent: "blue" as const },
];

const footerItems = [
  { icon: Swords, label: "相談無料" },
  { icon: FlaskConical, label: "オンライン対応" },
  { icon: Globe2, label: "全国対応" },
  { icon: Star, label: "初めてでも安心" },
];

export function RpgHomeHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden border-4 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-bg)] text-[#fff9df] shadow-[var(--rpg-shadow)]">
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(255,240,167,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,167,0.12)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_32%,rgba(57,223,243,0.16),transparent_30rem),radial-gradient(circle_at_12%_78%,rgba(215,169,71,0.12),transparent_24rem)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-2 border border-[color:var(--rpg-gold)]/70" aria-hidden="true" />
      <div className="pointer-events-none absolute left-2 top-2 h-8 w-8 border-l-4 border-t-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-2 top-2 h-8 w-8 border-r-4 border-t-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-8 w-8 border-b-4 border-l-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-8 w-8 border-b-4 border-r-4 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />

      <div className="relative z-10">
        <header className="hidden items-center justify-between border-b-2 border-[color:var(--rpg-gold)]/70 px-6 py-4 lg:flex xl:px-8">
          <Link to="/" className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-sm border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-panel)] text-[color:var(--rpg-cyan)] shadow-[inset_0_0_0_3px_rgba(0,0,0,0.4)]">
              <Sparkles className="h-8 w-8" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="text-[2rem] font-black tracking-[0.04em] text-white">AI WORKS</span>
          </Link>

          <nav className="flex items-center gap-5 text-sm font-black text-[#f8edd0] xl:gap-7" aria-label="RPG top navigation">
            {navItems.map((item, index) => (
              <Link key={item.href} to={item.href} className="relative flex items-center gap-2 transition hover:text-[color:var(--rpg-gold-light)]">
                <item.icon className="h-6 w-6 text-[color:var(--rpg-gold-light)]" strokeWidth={1.7} aria-hidden="true" />
                {item.label}
                {index === 0 ? <span className="absolute -bottom-5 left-1/2 h-1 w-16 -translate-x-1/2 bg-[color:var(--rpg-gold-light)] shadow-[0_0_14px_var(--rpg-gold-light)]" /> : null}
              </Link>
            ))}
          </nav>

          <Link
            to="/qr-guide"
            className="inline-flex min-h-12 items-center gap-3 rounded-sm border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-magenta)] px-5 text-sm font-black text-white shadow-[0_5px_0_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5"
          >
            <Sparkles className="h-5 w-5 text-[color:var(--rpg-gold-light)]" aria-hidden="true" />
            お問い合わせ
          </Link>
        </header>

        <div className="grid gap-4 border-b-2 border-[color:var(--rpg-gold)]/60 p-4 sm:p-6 lg:grid-cols-[38%_1fr] lg:gap-5 lg:p-5 xl:grid-cols-[40%_1fr] xl:p-6">
          <div className="relative rounded-sm border-2 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-panel)] p-5 shadow-[var(--rpg-shadow)] sm:p-6 lg:p-5 xl:p-6">
            <div className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />
            <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-[color:var(--rpg-gold-light)]" aria-hidden="true" />

            <span className="inline-flex items-center gap-2 rounded-sm border-2 border-[color:var(--rpg-gold)] bg-[color:var(--rpg-panel-soft)] px-4 py-2 text-xs font-black tracking-[0.12em] text-white">
              <Sparkles className="h-4 w-4 text-[color:var(--rpg-gold-light)]" aria-hidden="true" />
              QUEST 01
            </span>

            <p className="mt-5 text-xl font-black leading-9 tracking-normal text-white sm:text-2xl lg:mt-4">
              小規模事業者のための
            </p>
            <h1 className="mt-3 text-[2.7rem] font-black leading-tight tracking-normal text-white sm:text-[3.5rem] lg:text-[2.75rem] xl:text-[3.2rem] 2xl:text-[3.6rem]">
              <span className="mr-3 text-[color:var(--rpg-cyan)] drop-shadow-[0_4px_0_rgba(0,0,0,0.5)]">AI</span>
              制作・活用
              <span className="block text-[2.35rem] sm:text-[3rem] lg:text-[2.25rem] xl:text-[2.7rem] 2xl:text-[3rem]">サポートパートナー</span>
            </h1>

            <div className="mt-5 grid grid-cols-2 border border-[color:var(--rpg-gold)]/50 sm:grid-cols-4 lg:mt-4">
              {serviceItems.map((item) => (
                <div key={item.label} className="grid min-h-[5rem] place-items-center gap-1 border border-[color:var(--rpg-gold)]/35 bg-[color:var(--rpg-bg-deep)] px-2 py-3 text-center text-xs font-black lg:min-h-[4.5rem]">
                  <item.icon className="h-7 w-7 text-[color:var(--rpg-gold-light)]" strokeWidth={1.6} aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link to="/works" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border-2 border-[color:var(--rpg-gold-light)] bg-[color:var(--rpg-magenta)] px-5 text-base font-black text-white shadow-[0_5px_0_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5">
                <Swords className="h-5 w-5" aria-hidden="true" />
                クエストをはじめる
              </Link>
              <Link to="/can-do" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border-2 border-[color:var(--rpg-gold)] bg-[#0d7692] px-5 text-base font-black text-white shadow-[0_5px_0_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5">
                <Map className="h-5 w-5" aria-hidden="true" />
                できることを見る
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-2 border border-[color:var(--rpg-gold)]/45 sm:grid-cols-4">
              {statItems.map((item) => (
                <div key={item.label} className="border border-[color:var(--rpg-gold)]/30 bg-[color:var(--rpg-bg-deep)] px-3 py-3 text-center">
                  <p className="text-[11px] font-black text-[#f8edd0]">{item.label}</p>
                  <p className="mt-1 text-xl font-black text-[color:var(--rpg-gold-light)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <RpgWorldMap />
        </div>

        <div className="px-4 py-5 sm:px-8 lg:px-6 lg:py-4 xl:px-8">
          <div className="mb-4 flex items-center justify-center gap-3 text-[color:var(--rpg-gold-light)]">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
            <h2 className="text-xl font-black tracking-[0.1em]">人気のクエスト</h2>
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-[repeat(5,82%)] gap-4 overflow-x-auto pb-2 sm:grid-cols-2 lg:grid-cols-5 lg:overflow-visible">
            {questCards.map((card, index) => (
              <RpgHomeQuestCard key={card.title} {...card} index={index + 1} />
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} className={`h-3 w-3 rounded-full ${index === 0 ? "bg-[color:var(--rpg-cyan)]" : "bg-[#d9c6a1]"}`} />
            ))}
          </div>
        </div>

        <RpgHomeStatusBar items={footerItems} />
      </div>
    </section>
  );
}
