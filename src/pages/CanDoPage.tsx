import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Command, Lightbulb, Monitor, Pencil, Sparkles } from "lucide-react";
import { Reveal } from "../components/animation";
import { Badge, IconFromSheet, RpgLabel, RpgPanel } from "../components/ui";
import { features } from "../data/site";
import type { Accent } from "../data/site";

const accentText: Record<Accent, string> = {
  blue: "text-blue-deep",
  teal: "text-teal",
  purple: "text-purple",
  orange: "text-orange",
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
        <RpgPanel className="px-5 py-7 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_50%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,242,167,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.22)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 04 / CAN DO</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <Command className="h-4 w-4" aria-hidden="true" />
                  COMMAND MENU
                </span>
              </div>
              <h1 className="mt-6 text-[42px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                AIでできること
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                難しい技術の話ではなく、日々の仕事で使える形にしていきます。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Web", "Tool", "Image", "Text", "Lesson"].map((label, index) => (
                  <span
                    key={label}
                    className={`rounded-md border-2 px-3 py-3 text-center text-sm font-black shadow-[0_5px_0_rgba(0,0,0,0.3)] ${
                      index === 0
                        ? "border-[#fff2a7] bg-[#d31572] text-white"
                        : "border-[#8fdfff]/75 bg-[#07121b]/70 text-[#9de3ff]"
                    }`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-3 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={feature.title} className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-sm border border-[#f2e9c6]/60 bg-[#10283b] p-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-xs font-black text-[#fff2a7]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-black leading-tight text-white">{feature.title}</p>
                      <p className="mt-1 text-xs font-semibold text-[#b9d6df]">{feature.description}</p>
                    </div>
                    <feature.icon className={`h-6 w-6 ${accentText[feature.accent]}`} strokeWidth={1.7} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4 border-b-2 border-[#d7bb68] pb-3">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-[#d31572]" strokeWidth={1.8} />
            <div>
              <RpgLabel>SKILL SLOT</RpgLabel>
              <h2 className="mt-2 text-2xl font-black text-ink">使えるコマンド</h2>
            </div>
          </div>
          <div className="hidden gap-2 sm:flex">
            {["bg-teal", "bg-[#d31572]", "bg-orange"].map((color) => (
              <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -3 }}
                className="grid h-full gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-[#eef8ff] shadow-float sm:grid-cols-[6rem_1fr]"
              >
                <div className="flex flex-col items-center justify-center gap-3 rounded-sm border border-[#f2e9c6]/55 bg-[#10283b] p-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-sm font-black text-[#fff2a7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <IconFromSheet icon={feature.icon} accent={feature.accent} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-black leading-tight text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6] sm:text-base">{expandedDescription(index)}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {chips[index].map((chip) => (
                      <Badge key={chip} accent={feature.accent}>
                        {chip}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <ArrowRight className="h-7 w-7 text-[#fff2a7]" strokeWidth={1.8} aria-hidden="true" />
              <div>
                <RpgLabel>REQUEST -&gt; RESULT</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-white">たとえば</h2>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {examples.map((item, index) => (
                <motion.div
                  key={item.problem}
                  whileHover={{ x: 3 }}
                  className="grid gap-3 rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-3 text-sm font-black text-[#eef8ff] sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:text-base"
                >
                  <div className="flex items-center gap-3 rounded-sm border border-[#f2e9c6]/55 bg-[#07121b] p-3">
                    <item.icon className={`h-7 w-7 ${accentText[item.accent]}`} aria-hidden="true" />
                    <span>{item.problem}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-[#fff2a7]">
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="rounded-sm border border-[#8fdfff]/55 bg-[#07121b] p-3 text-center text-[#9de3ff]">
                    {String(index + 1).padStart(2, "0")} / {item.result}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 grid items-center gap-4 sm:grid-cols-[84px_1fr]">
            <span className="flex h-16 w-16 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#10283b] text-[#fff2a7]">
              <Lightbulb className="h-9 w-9" strokeWidth={1.6} aria-hidden="true" />
            </span>
            <div>
              <RpgLabel>EXTRA COMMAND</RpgLabel>
              <h2 className="mt-3 text-xl font-black text-white">「これもできる？」も大歓迎です</h2>
              <p className="mt-2 text-sm font-semibold leading-7 text-[#d9eff6]">
                うまく言葉にできなくても大丈夫。ざっくりした相談から、一緒に使える形を探していきます。
              </p>
            </div>
          </div>
        </RpgPanel>
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
