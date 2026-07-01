import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  Flag,
  Gem,
  Image as ImageIcon,
  Laptop,
  Mail,
  Map,
  PenLine,
  ScrollText,
  Shield,
  Sparkles,
  Sword,
  Trophy,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/animation";
import { assetPath } from "../lib/paths";

const questPreview = assetPath("/assets/work-detail/ai-works/quest-preview-map.png");
const visualPack = assetPath("/assets/generated/visuals/hero-gallery.png");
const worksThumb = assetPath("/assets/generated/visuals/works-thumbnails.png");
const homeMap = assetPath("/assets/top/hero-map/home-island-map.png");

const navItems = [
  { label: "作品", href: "/works", icon: Shield, active: true },
  { label: "できること", href: "/can-do", icon: Sword },
  { label: "プロフィール", href: "/profile", icon: BookOpen },
  { label: "メモ", href: "/notes", icon: ScrollText },
  { label: "ガイド", href: "/qr-guide", icon: Mail },
];

const statusRows = [
  { label: "分類", value: "Webサイト / AI活用サポート", icon: Shield },
  { label: "公開日", value: "2025/05/28", icon: Check },
  { label: "担当", value: "企画、デザイン、実装、AI活用支援", icon: ScrollText },
  { label: "使用技術", value: "React, TypeScript, Tailwind CSS, GitHub", icon: Code2 },
];

const usedFor = [
  { title: "構成づくり", icon: ScrollText },
  { title: "画面デザイン", icon: ImageIcon },
  { title: "コード作成", icon: Code2 },
  { title: "文章作成", icon: PenLine },
  { title: "見直し支援", icon: Trophy },
];

const featureTags = [
  { label: "スマホ対応", className: "border-[#2d8ee8] bg-[#0b3459] text-[#d9f1ff]" },
  { label: "更新しやすい", className: "border-[#35b86a] bg-[#123f27] text-[#ddffe9]" },
  { label: "高速表示", className: "border-[#9e74d7] bg-[#312049] text-[#f0e8ff]" },
  { label: "読みやすい", className: "border-[#3ed5c2] bg-[#083f44] text-[#e0fffb]" },
  { label: "AI活用", className: "border-[var(--rpg-gold)] bg-[#593913] text-[#fff1b8]" },
];

const screens = [
  { title: "AI WORKS", image: visualPack },
  { title: "トップマップ", image: homeMap },
  { title: "作品一覧", image: worksThumb },
  { title: "できること", image: visualPack },
];

const timeline = [
  { label: "開始", value: "2025/05/10", icon: ScrollText, done: false },
  { label: "設計", value: "構成", icon: Map, done: true },
  { label: "画面", value: "デザイン", icon: PenLine, done: true },
  { label: "実装", value: "制作", icon: Wrench, done: true },
  { label: "公開", value: "完了", icon: Flag, done: true },
];

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function QuestPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section
      className={joinClasses(
        "relative overflow-hidden rounded-md border-2 border-[var(--rpg-gold)] bg-[var(--rpg-panel)] text-[#f4fbff] shadow-[var(--rpg-shadow)]",
        "before:pointer-events-none before:absolute before:inset-x-3 before:top-2 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--rpg-gold-light),transparent)]",
        "after:pointer-events-none after:absolute after:inset-x-3 after:bottom-2 after:h-px after:bg-[linear-gradient(90deg,transparent,var(--rpg-gold),transparent)]",
        className,
      )}
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,240,167,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,240,167,0.2)_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}

function QuestTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[13px] font-black uppercase tracking-[0.22em] text-[var(--rpg-gold-light)]">
      <Sparkles className="h-4 w-4 text-[var(--rpg-gold)]" aria-hidden="true" />
      <span>{children}</span>
      <Sparkles className="h-4 w-4 text-[var(--rpg-gold)]" aria-hidden="true" />
    </div>
  );
}

function PixelIcon({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={joinClasses(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border-2 border-[var(--rpg-gold)] bg-[#0a1825] text-[var(--rpg-gold-light)] shadow-[inset_0_0_0_2px_rgba(255,240,167,0.08)]",
        className,
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

function ActionButton({
  href,
  children,
  variant = "primary",
  icon: Icon,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "wide";
  icon: LucideIcon;
}) {
  return (
    <Link
      to={href}
      className={joinClasses(
        "group inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border-2 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] shadow-[0_6px_0_rgba(0,0,0,0.45)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--rpg-cyan)] focus:ring-offset-2 focus:ring-offset-[var(--rpg-bg)]",
        variant === "primary" && "border-[var(--rpg-gold-light)] bg-[var(--rpg-magenta)] text-white",
        variant === "secondary" && "border-[var(--rpg-gold)] bg-[#0b3f5a] text-[#dff8ff]",
        variant === "wide" && "border-[var(--rpg-gold)] bg-[#102236] text-[var(--rpg-gold-light)]",
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function WorkDetailPage() {
  return (
    <div className="space-y-5 pb-8 text-[#f4fbff]">
      <Reveal>
        <QuestPanel className="p-3 sm:p-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-sm border-2 border-[var(--rpg-gold)] bg-[#092238] text-[var(--rpg-cyan)]">
                <Gem className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="text-3xl font-black leading-none tracking-normal text-white sm:text-4xl">AI WORKS</span>
            </Link>

            <nav className="flex gap-2 overflow-x-auto pb-1 lg:overflow-visible lg:pb-0" aria-label="作品詳細ページ内ナビ">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={joinClasses(
                      "inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm border px-3 text-sm font-black text-[#f6f4e8] transition hover:-translate-y-0.5",
                      item.active
                        ? "border-[var(--rpg-gold)] bg-[#152536] text-[var(--rpg-gold-light)]"
                        : "border-transparent bg-transparent hover:border-[var(--rpg-gold)] hover:bg-[#102236]",
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-[var(--rpg-gold)] bg-[#102236] px-4 text-sm font-black text-[#a9efff]">
                <Gem className="h-5 w-5 text-[var(--rpg-cyan)]" aria-hidden="true" />
                公開中
              </span>
              <span className="inline-flex min-h-12 items-center gap-2 rounded-sm border-2 border-[var(--rpg-gold)] bg-[#102236] px-4 text-sm font-black text-[var(--rpg-gold-light)]">
                <Shield className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                AI制作サポート
              </span>
            </div>
          </div>
        </QuestPanel>
      </Reveal>

      <Reveal delay={0.03}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/works"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#f2df9a] transition hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            作品一覧にもどる
          </Link>
          <div className="mx-auto inline-flex min-h-12 items-center justify-center rounded-sm border-2 border-[var(--rpg-gold)] bg-[#0a1825] px-8 text-sm font-black uppercase tracking-[0.32em] text-[var(--rpg-gold-light)] shadow-[0_8px_0_rgba(0,0,0,0.32)] sm:mx-0">
            クエスト詳細
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <QuestPanel className="p-4 sm:p-5">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1fr)_152px] xl:items-stretch">
            <div className="relative">
              <div className="overflow-hidden rounded-sm border-2 border-[var(--rpg-gold)] bg-[#06111c] p-2 shadow-[inset_0_0_0_2px_rgba(255,240,167,0.08)]">
                <img
                  src={questPreview}
                  alt="AI WORKSの冒険マップ風プレビュー"
                  className="pixel-art aspect-[2.03/1] w-full rounded-sm object-cover"
                />
              </div>
              <button
                type="button"
                aria-label="前の作品プレビュー"
                className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-sm border-2 border-[var(--rpg-gold)] bg-[#081522] text-[var(--rpg-gold-light)] sm:grid"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="次の作品プレビュー"
                className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 place-items-center rounded-sm border-2 border-[var(--rpg-gold)] bg-[#081522] text-[var(--rpg-gold-light)] sm:grid"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="flex min-w-0 flex-col justify-center rounded-sm border border-[var(--rpg-gold)]/50 bg-[#081522]/70 p-5">
              <QuestTitle>代表作品</QuestTitle>
              <h1 className="mt-4 break-words text-[44px] font-black leading-none tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.55)] sm:text-7xl">
                AI WORKS
              </h1>
              <div className="mt-4 flex items-center gap-3 text-xl font-black text-[#68e15b]">
                <Shield className="h-7 w-7 text-[var(--rpg-gold)]" strokeWidth={1.8} aria-hidden="true" />
                公開中
              </div>
              <dl className="mt-5 space-y-3 border-t border-[#2b6a91]/70 pt-4">
                {statusRows.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:items-start">
                      <dt className="flex items-center gap-2 text-sm font-black text-[#fff0a7]">
                        <Icon className="h-4 w-4 text-[var(--rpg-gold)]" aria-hidden="true" />
                        {row.label}
                      </dt>
                      <dd className="min-w-0 text-sm font-semibold leading-6 text-[#f4fbff]">{row.value}</dd>
                    </div>
                  );
                })}
              </dl>
            </div>

            <aside className="hidden rounded-sm border-2 border-[var(--rpg-gold)] bg-[#06315e] p-4 xl:flex xl:flex-col xl:items-center xl:justify-center" aria-label="AI WORKS emblem">
              <div className="grid h-28 w-24 place-items-center border-b-2 border-[var(--rpg-gold)] text-[var(--rpg-gold-light)]">
                <Sparkles className="h-14 w-14" strokeWidth={1.6} aria-hidden="true" />
              </div>
              <p className="mt-4 text-center text-xs font-black tracking-[0.18em] text-[#fff0a7]">AI活用サポート</p>
            </aside>
          </div>
        </QuestPanel>
      </Reveal>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.35fr]">
        <Reveal delay={0.1}>
          <QuestPanel className="h-full p-5">
            <QuestTitle>この作品について</QuestTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-[64px_1fr]">
              <PixelIcon icon={Sparkles} className="text-[var(--rpg-cyan)]" />
              <p className="text-sm font-semibold leading-7 text-[#f4fbff]">
                AI WORKSは、小規模事業者のためのAI制作・活用サポートを紹介するサイトです。サービス、作品、メモ、進め方をひとつの冒険ログのように見られる形にしています。
              </p>
            </div>

            <div className="mt-6 border-t border-[var(--rpg-gold)]/45 pt-5">
              <QuestTitle>AIを使ったところ</QuestTitle>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {usedFor.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="rounded-sm border border-[var(--rpg-gold)]/60 bg-[#0a1825] p-3 text-center">
                      <PixelIcon icon={Icon} className="mx-auto h-11 w-11" />
                      <h3 className="mt-3 text-xs font-bold leading-snug text-[#f4fbff]">{item.title}</h3>
                    </article>
                  );
                })}
              </div>
            </div>
          </QuestPanel>
        </Reveal>

        <Reveal delay={0.12}>
          <QuestPanel className="h-full p-5">
            <QuestTitle>特徴・タグ</QuestTitle>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
              {featureTags.map((tag) => (
                <span
                  key={tag.label}
                  className={joinClasses(
                    "inline-flex min-h-11 w-full items-center justify-center rounded-sm border-2 px-3 py-2 text-center text-sm font-black leading-tight",
                    tag.className,
                  )}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-[var(--rpg-gold)]/45 pt-5">
              <QuestTitle>画面イメージ</QuestTitle>
              <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {screens.map((screen) => (
                  <article key={screen.title} className="overflow-hidden rounded-sm border-2 border-[var(--rpg-gold)] bg-[#06111c]">
                    <img src={screen.image} alt={`${screen.title}の画面イメージ`} className="aspect-[1.45/1] w-full object-cover" />
                    <p className="px-2 py-2 text-center text-xs font-black text-[#fff0a7]">{screen.title}</p>
                  </article>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-2" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <span key={dot} className={joinClasses("h-2.5 w-2.5 rounded-full", dot === 0 ? "bg-[var(--rpg-gold)]" : "bg-[#2b6a91]")} />
                ))}
              </div>
            </div>
          </QuestPanel>
        </Reveal>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_0.96fr]">
        <Reveal delay={0.16}>
          <QuestPanel className="p-4 sm:p-5">
            <div className="grid gap-4 md:grid-cols-5">
              {timeline.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.label} className="relative rounded-sm border border-[var(--rpg-gold)]/50 bg-[#0a1825] p-3 text-center">
                    {index > 0 ? (
                      <span className="absolute -left-4 top-1/2 hidden h-px w-7 border-t border-dashed border-[var(--rpg-gold)] md:block" aria-hidden="true" />
                    ) : null}
                    <PixelIcon icon={Icon} className="mx-auto" />
                    <p className="mt-3 text-xs font-black uppercase tracking-[0.08em] text-[#fff0a7]">{step.label}</p>
                    <p className="mt-1 text-xs font-semibold text-[#f4fbff]">{step.value}</p>
                    {step.done ? (
                      <span className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-[#48c450] text-[#06111c]">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                      </span>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </QuestPanel>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="grid h-full content-start gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <ActionButton href="/" icon={Gem}>
                サイトを見る
              </ActionButton>
              <ActionButton href="/works" icon={Box} variant="secondary">
                作品一覧へ
              </ActionButton>
            </div>
            <ActionButton href="/qr-guide" icon={Mail} variant="wide">
              この作品について相談
            </ActionButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
