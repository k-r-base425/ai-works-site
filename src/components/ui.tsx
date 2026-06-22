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
        "inline-flex h-14 w-14 items-center justify-center rounded-2xl border bg-white shadow-float",
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
