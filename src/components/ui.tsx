import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Accent, Feature, Memo, Stage, Work } from "../data/site";

const accentStyles: Record<Accent, { text: string; bg: string; border: string; soft: string }> = {
  blue: {
    text: "text-blue-deep",
    bg: "bg-blue",
    border: "border-blue/45",
    soft: "bg-blue/10",
  },
  teal: {
    text: "text-teal",
    bg: "bg-teal",
    border: "border-teal/45",
    soft: "bg-teal/10",
  },
  purple: {
    text: "text-purple",
    bg: "bg-purple",
    border: "border-purple/45",
    soft: "bg-purple/10",
  },
  orange: {
    text: "text-orange",
    bg: "bg-orange",
    border: "border-orange/45",
    soft: "bg-orange/10",
  },
};

function joinClasses(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function StageLabel({ children, accent = "blue" }: { children: string; accent?: Accent }) {
  return (
    <span
      className={joinClasses(
        "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.18em]",
        accentStyles[accent].border,
        accentStyles[accent].soft,
        accentStyles[accent].text,
      )}
    >
      {children}
    </span>
  );
}

export function StageDots({ count = 4, active = 0 }: { count?: number; active?: number }) {
  return (
    <div className="flex items-center gap-3" aria-label="stage select">
      <span className="mr-1 text-[10px] font-semibold tracking-[0.16em] text-muted">STAGE SELECT</span>
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={joinClasses(
            "h-3 w-3 rounded-full transition-colors",
            index === active ? "bg-blue" : "bg-line",
          )}
        />
      ))}
    </div>
  );
}

export function Badge({ children, accent = "blue" }: { children: string; accent?: Accent }) {
  return (
    <span
      className={joinClasses(
        "inline-flex rounded-md px-2.5 py-1 text-xs font-semibold",
        accentStyles[accent].soft,
        accentStyles[accent].text,
      )}
    >
      {children}
    </span>
  );
}

type SoftButtonProps = {
  children: string;
  href?: string;
  accent?: Accent;
  variant?: "solid" | "outline";
};

export function SoftButton({ children, href = "/", accent = "blue", variant = "outline" }: SoftButtonProps) {
  return (
    <Link
      to={href}
      className={joinClasses(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold shadow-float transition hover:-translate-y-0.5",
        variant === "solid"
          ? `${accentStyles[accent].bg} text-white`
          : `border bg-white/75 ${accentStyles[accent].border} ${accentStyles[accent].text}`,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  accent = "blue",
}: {
  label?: string;
  title: string;
  description?: string;
  accent?: Accent;
}) {
  return (
    <div className="space-y-3">
      {label ? <StageLabel accent={accent}>{label}</StageLabel> : null}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-normal text-ink sm:text-3xl">{title}</h2>
        {description ? <p className="max-w-2xl text-sm leading-7 text-muted">{description}</p> : null}
      </div>
    </div>
  );
}

export function IconFromSheet({ icon: Icon, accent = "blue" }: { icon: LucideIcon; accent?: Accent }) {
  return (
    <span
      className={joinClasses(
        "inline-flex h-14 w-14 items-center justify-center rounded-sm border-2 bg-[#10283b] shadow-[inset_0_0_0_2px_rgba(255,242,167,0.08),0_12px_24px_rgba(0,0,0,0.2)]",
        accentStyles[accent].border,
        accentStyles[accent].text,
      )}
    >
      <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}

export function AssetTile({ icon, accent = "blue" }: { icon: LucideIcon; accent?: Accent }) {
  return (
    <div className="flex aspect-square items-center justify-center rounded-card border border-line bg-white/82 shadow-float">
      <IconFromSheet icon={icon} accent={accent} />
    </div>
  );
}

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="rounded-card border border-line bg-white/78 p-4 shadow-float">
      <IconFromSheet icon={feature.icon} accent={feature.accent} />
      <h3 className="mt-4 text-base font-semibold leading-snug text-ink">{feature.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{feature.description}</p>
    </article>
  );
}

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="grid gap-4 rounded-card border border-line bg-white/82 p-3 shadow-float sm:grid-cols-[128px_1fr]">
      <div className="aspect-square overflow-hidden rounded-2xl bg-fog">
        <img src={work.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="flex min-w-0 flex-col justify-between gap-4 py-1">
        <div>
          <h3 className="text-lg font-semibold leading-tight text-ink">{work.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{work.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {work.tags.map((tag) => (
              <Badge key={tag} accent={work.accent}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <SoftButton href={work.href} accent="blue">
          詳しく見る
        </SoftButton>
      </div>
    </article>
  );
}

export function MemoCard({ memo }: { memo: Memo }) {
  return (
    <article className={joinClasses("rounded-card border bg-white/78 p-5 shadow-float", accentStyles[memo.accent].border)}>
      <h3 className="text-base font-semibold text-ink">{memo.title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{memo.body}</p>
    </article>
  );
}

export function StageTimeline({ stages }: { stages: Stage[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {stages.map((item) => (
        <article
          key={item.stage}
          className={joinClasses(
            "rounded-card border bg-white/78 p-4 text-center shadow-float",
            accentStyles[item.accent].border,
          )}
        >
          <StageLabel accent={item.accent}>{item.stage}</StageLabel>
          <div className="mt-4 flex justify-center">
            <IconFromSheet icon={item.icon} accent={item.accent} />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
          <p className="mt-2 text-xs leading-6 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

type RpgPanelProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "article" | "div";
};

export function RpgPanel({ children, className, as: Component = "section" }: RpgPanelProps) {
  return (
    <Component
      className={joinClasses(
        "relative overflow-hidden rounded-md border-2 border-[#d7bb68] bg-[#07121b] text-[#eef8ff] shadow-[0_18px_36px_rgba(7,18,27,0.22)]",
        "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#8e6519] before:via-[#fff2a7] before:to-[#d5a62e]",
        "after:absolute after:inset-x-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-[#d5a62e] after:via-[#fff2a7] after:to-[#8e6519]",
        className,
      )}
    >
      {children}
    </Component>
  );
}

export function RpgLabel({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-[#e8d88c] bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.18em] text-[#fff2a7]">
      {children}
    </span>
  );
}

export function RpgButton({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      to={href}
      className={joinClasses(
        "inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-md border-2 px-5 py-3 text-sm font-black shadow-[0_6px_0_rgba(0,0,0,0.42)] transition hover:-translate-y-0.5",
        variant === "primary"
          ? "border-[#fff2a7] bg-[#d31572] text-white"
          : "border-[#8fdfff] bg-[#0e2a3b] text-[#9de3ff]",
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function RpgQuestCard({
  title,
  body,
  meta,
  image,
  href,
}: {
  title: string;
  body: string;
  meta: string;
  image?: string;
  href?: string;
}) {
  const content = (
    <article className="h-full overflow-hidden rounded-md border border-[#d7bb68]/80 bg-[#10283b] shadow-float transition hover:-translate-y-0.5">
      {image ? <img src={image} alt="" className="aspect-[1.62/1] w-full object-cover" /> : null}
      <div className="space-y-3 p-4">
        <RpgLabel>{meta}</RpgLabel>
        <h3 className="text-lg font-black leading-tight text-white">{title}</h3>
        <p className="text-sm font-semibold leading-7 text-[#d9eff6]">{body}</p>
      </div>
    </article>
  );

  return href ? (
    <Link to={href} className="block h-full">
      {content}
    </Link>
  ) : (
    content
  );
}
