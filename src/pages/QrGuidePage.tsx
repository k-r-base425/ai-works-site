import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BookOpenCheck, BriefcaseBusiness, CircleHelp, Coffee, ImageIcon, Laptop, Lightbulb, Map, Search, Sparkles, UserRound } from "lucide-react";
import { Reveal } from "../components/animation";
import { IconFromSheet, RpgLabel, RpgPanel } from "../components/ui";
import type { Accent } from "../data/site";
import { assetPath } from "../lib/paths";

const visualPack = assetPath("/assets/generated/visuals/qr-guide.png");

const firstLinks = [
  { title: "作品を見る", body: "AIでどんなものを作っているか見られます。", icon: ImageIcon, accent: "teal" as Accent },
  { title: "できることを見る", body: "Web、業務ツール、画像、資料などの例をまとめています。", icon: BriefcaseBusiness, accent: "blue" as Accent },
  { title: "つくっている人を見る", body: "どんな人が作っているか、考え方を紹介しています。", icon: UserRound, accent: "purple" as Accent },
];

const audiences = [
  { title: "AIに興味がある", icon: Search, accent: "teal" as Accent },
  { title: "仕事を少し楽にしたい", icon: Laptop, accent: "blue" as Accent },
  { title: "アイデアを形にしたい", icon: Lightbulb, accent: "purple" as Accent },
  { title: "まずは見てみたい", icon: Coffee, accent: "orange" as Accent },
];

const questions = [
  { title: "AIに詳しくなくても大丈夫？", body: "大丈夫です。仕事の言葉で一緒に整理していきます。", icon: CircleHelp, accent: "teal" as Accent },
  { title: "何が作れるの？", body: "ページ、画像、資料、小さな業務ツールなどを試作しています。", icon: Sparkles, accent: "purple" as Accent },
];

const guideStats = [
  { label: "START", value: "QR" },
  { label: "ROUTES", value: String(firstLinks.length).padStart(2, "0") },
  { label: "HELP", value: String(questions.length).padStart(2, "0") },
];

export function QrGuidePage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="-mx-4 px-5 py-7 sm:mx-0 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_48%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,242,167,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.2)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 09 / QR GUIDE</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
                  START GUIDE
                </span>
              </div>
              <h1 className="mt-6 text-[42px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                名刺から来た方へ
              </h1>
              <div className="mt-6 space-y-3 rounded-md border border-[#8fdfff]/45 bg-[#0e2a3b]/80 p-4 text-sm font-semibold leading-7 text-[#d9eff6] sm:text-base">
                <p>見に来てくださってありがとうございます。</p>
                <p>このサイトでは、AIで作ったものや、仕事に使えそうなアイデアを紹介しています。</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr] sm:items-stretch">
              <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                <img src={visualPack} alt="" className="aspect-[1.08/1] h-full w-full object-cover" />
              </motion.div>
              <div className="grid gap-3">
                {guideStats.map((item) => (
                  <div key={item.label} className="rounded-sm border border-[#f2e9c6]/60 bg-[#10283b] p-4 text-center">
                    <p className="text-[11px] font-black tracking-[0.18em] text-[#9de3ff]">{item.label}</p>
                    <p className="mt-3 text-xl font-black leading-tight text-[#fff2a7]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <SectionTitle icon={Map} label="FIRST ROUTE" title="まず見るなら" />
        <div className="grid gap-4 md:grid-cols-3">
          {firstLinks.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <motion.article whileHover={{ y: -4 }} className="h-full rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-center shadow-float">
                <div className="flex justify-center">
                  <IconFromSheet icon={item.icon} accent={item.accent} />
                </div>
                <div className="mt-4">
                  <RpgLabel>{`ROUTE ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                </div>
                <h3 className="mt-4 text-xl font-black leading-tight text-white">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6]">{item.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <SectionTitle icon={Sparkles} label="PLAYER TYPE" title="こんな方に向いています" inverted />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audiences.map((item, index) => (
                <motion.article key={item.title} whileHover={{ y: -3 }} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 shadow-float">
                  <div className="flex items-center gap-3">
                    <IconFromSheet icon={item.icon} accent={item.accent} />
                    <RpgLabel>{`TYPE ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  </div>
                  <h3 className="mt-4 text-lg font-black leading-tight text-white">{item.title}</h3>
                </motion.article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <SectionTitle icon={CircleHelp} label="HELP LOG" title="よくある質問" />
        <div className="space-y-4">
          {questions.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <motion.article whileHover={{ y: -3 }} className="grid gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-[#eef8ff] shadow-float sm:grid-cols-[6rem_1fr] sm:items-center">
                <div className="flex items-center gap-4 rounded-sm border border-[#f2e9c6]/55 bg-[#10283b] p-3 sm:flex-col sm:justify-center">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] px-2 text-sm font-black text-[#fff2a7]">
                    Q{index + 1}
                  </span>
                  <IconFromSheet icon={item.icon} accent={item.accent} />
                </div>
                <div className="min-w-0">
                  <RpgLabel>{`HELP ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  <h3 className="mt-3 text-xl font-black leading-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[#d9eff6]">{item.body}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 flex items-center gap-4">
            <Sparkles className="h-10 w-10 shrink-0 text-[#fff2a7]" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <RpgLabel>NEXT ACTION</RpgLabel>
              <p className="mt-3 text-base font-bold leading-8 text-[#eef8ff]">
                気になったことがあれば、名刺記載の連絡先から気軽に聞いてください。
              </p>
            </div>
          </div>
        </RpgPanel>
      </Reveal>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  label,
  title,
  inverted = false,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-[#d7bb68] pb-3">
      <Icon className={`h-6 w-6 ${inverted ? "text-[#fff2a7]" : "text-[#d31572]"}`} strokeWidth={1.8} aria-hidden="true" />
      <div>
        <RpgLabel>{label}</RpgLabel>
        <h2 className={`mt-2 text-2xl font-black ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      </div>
    </div>
  );
}
