import { motion } from "framer-motion";
import { ArrowRight, BarChart3, FileText, Image, Lightbulb, Monitor, Pencil } from "lucide-react";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, StageDots, StageLabel } from "../components/ui";
import { features } from "../data/site";
import type { Accent } from "../data/site";

const accentText: Record<Accent, string> = {
  blue: "text-blue-deep",
  teal: "text-teal",
  purple: "text-purple",
  orange: "text-orange",
};

const accentBg: Record<Accent, string> = {
  blue: "from-blue/20 to-blue/5",
  teal: "from-teal/22 to-teal/5",
  purple: "from-purple/22 to-purple/5",
  orange: "from-orange/22 to-orange/5",
};

const accentSolid: Record<Accent, string> = {
  blue: "bg-blue-deep",
  teal: "bg-teal",
  purple: "bg-purple",
  orange: "bg-orange",
};

const chips = [
  ["名刺QR", "スマホLP"],
  ["管理表", "ダッシュボード"],
  ["SNS画像", "ブランド素材"],
  ["文章整理", "資料化"],
  ["はじめ方", "使い方"],
];

const examples = [
  { problem: "売上を見たい", result: "管理画面にする", icon: BarChart3, accent: "teal" as Accent },
  { problem: "商品を伝えたい", result: "LPや画像にする", icon: Monitor, accent: "orange" as Accent },
  { problem: "考えを整理したい", result: "文章や資料にする", icon: Pencil, accent: "purple" as Accent },
];

export function CanDoPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <section className="relative overflow-hidden rounded-card border border-line bg-white/72 px-5 py-10 text-center shadow-soft sm:px-8">
          <FloatingAsset className="absolute left-5 top-12 hidden h-16 w-16 opacity-50 sm:block" distance={6}>
            <img src="/assets/generated/icons/lightbulb.png" alt="" className="h-full w-full rounded-2xl object-contain" />
          </FloatingAsset>
          <StageDots active={2} />
          <div className="mt-7">
            <StageLabel>STAGE 03 / CAN DO</StageLabel>
          </div>
          <h1 className="mt-5 text-[42px] font-semibold leading-tight tracking-normal text-ink sm:text-6xl">AIでできること</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink sm:text-lg">
            難しい技術の話ではなく、日々の仕事で
            <br className="hidden sm:block" />
            使える形にしていきます。
          </p>
        </section>
      </Reveal>

      <section className="space-y-3">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -3, scale: 1.005 }}
              className="grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 rounded-card border border-line bg-white/86 p-4 shadow-float sm:grid-cols-[8.5rem_1fr_auto] sm:p-5"
            >
              <div className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${accentBg[feature.accent]}`}>
                <feature.icon className={`h-14 w-14 ${accentText[feature.accent]}`} strokeWidth={1.55} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-base font-bold text-white ${accentSolid[feature.accent]}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-semibold leading-tight text-ink sm:text-2xl">{feature.title}</h2>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink sm:text-base">{expandedDescription(index)}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {chips[index].map((chip) => (
                    <Badge key={chip} accent={feature.accent}>
                      {chip}
                    </Badge>
                  ))}
                </div>
              </div>
              <ArrowRight className={`h-7 w-7 ${accentText[feature.accent]}`} strokeWidth={1.7} aria-hidden="true" />
            </motion.article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="space-y-4">
          <h2 className="text-center text-2xl font-semibold text-ink">たとえば</h2>
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="rounded-2xl bg-white/80 px-4 py-2 text-center text-sm font-semibold text-ink shadow-float">困りごと</div>
            <div className="hidden text-center text-muted sm:block">...</div>
            <div className="rounded-2xl bg-white/80 px-4 py-2 text-center text-sm font-semibold text-ink shadow-float">形にするもの</div>
          </div>
          <div className="space-y-3">
            {examples.map((item) => (
              <motion.div
                key={item.problem}
                whileHover={{ x: 3 }}
                className="grid grid-cols-[1fr_2.5rem_1fr] items-center gap-2 text-sm font-semibold text-ink sm:text-base"
              >
                <div className="flex items-center gap-3 rounded-2xl bg-white/78 p-3 shadow-float">
                  <item.icon className={`h-7 w-7 ${accentText[item.accent]}`} aria-hidden="true" />
                  {item.problem}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-blue-deep">
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="rounded-2xl bg-white/78 p-3 text-center shadow-float">{item.result}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid items-center gap-4 rounded-card border border-blue/25 bg-white/78 p-5 shadow-float sm:grid-cols-[8rem_1fr]">
          <div className="flex justify-center">
            <Lightbulb className="h-16 w-16 text-blue-deep" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-deep">「これもできる？」も大歓迎です</h2>
            <p className="mt-2 text-sm leading-7 text-ink">
              うまく言葉にできなくても大丈夫。ざっくりした相談から、一緒に使える形を探していきます。
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

function expandedDescription(index: number) {
  return [
    "お店やサービスを伝えるページのたたき台から制作します。",
    "売上・予約・在庫などを見える化する小さなツール。",
    "SNS、LP、資料に使える画像や雰囲気づくり。",
    "提案書、説明文、メニュー表などの整理と作成。",
    "自分の仕事でAIを使うための基本と実践メモ。",
  ][index];
}
