import { motion } from "framer-motion";
import { BriefcaseBusiness, ChevronDown, CircleHelp, Coffee, ImageIcon, Laptop, Lightbulb, Search, Sparkles, UserRound } from "lucide-react";
import { Reveal } from "../components/animation";
import { StageLabel } from "../components/ui";
import { assetPath } from "../lib/paths";

const visualPack = assetPath("/assets/generated/visuals/qr-guide.png");
const iconPack = assetPath("/assets/generated/icons/sparkle.png");

const firstLinks = [
  { number: "1", title: "作品を見る", body: "AIでどんなものを作っているか見られます。", icon: ImageIcon, color: "teal" },
  { number: "2", title: "できることを見る", body: "Web、業務ツール、画像、資料などの例をまとめています。", icon: BriefcaseBusiness, color: "blue" },
  { number: "3", title: "つくっている人を見る", body: "どんな人が作っているか、考え方を紹介しています。", icon: UserRound, color: "purple" },
] as const;

const audiences = [
  { title: "AIに興味がある", icon: Search, color: "text-teal bg-teal/12" },
  { title: "仕事を少し楽にしたい", icon: Laptop, color: "text-blue-deep bg-blue/12" },
  { title: "アイデアを形にしたい", icon: Lightbulb, color: "text-purple bg-purple/12" },
  { title: "まずは見てみたい", icon: Coffee, color: "text-orange bg-orange/12" },
] as const;

const questions = [
  { title: "AIに詳しくなくても大丈夫？", body: "大丈夫です。仕事の言葉で一緒に整理していきます。", icon: CircleHelp },
  { title: "何が作れるの？", body: "ページ、画像、資料、小さな業務ツールなどを試作しています。", icon: Sparkles },
] as const;

export function QrGuidePage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal className="grid gap-6 rounded-card border border-line bg-white/78 p-6 shadow-soft lg:grid-cols-[1fr_0.94fr] lg:items-center lg:p-10">
        <div className="space-y-7">
          <StageLabel accent="teal">STAGE 00 / QR GUIDE</StageLabel>
          <h1 className="text-[40px] font-semibold leading-tight tracking-normal text-ink sm:text-7xl">名刺から来た方へ</h1>
          <div className="space-y-3 text-lg leading-9 text-ink">
            <p>見に来てくださってありがとうございます。</p>
            <p>このサイトでは、AIで作ったものや、仕事に使えそうなアイデアを紹介しています。</p>
          </div>
          <div className="flex items-end gap-3 pt-2">
            <span className="mb-8 h-6 w-6 border-y-[12px] border-l-[18px] border-y-transparent border-l-teal" aria-hidden="true" />
            {["00", "01", "02", "03", "04"].map((label, index) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className={`h-5 w-5 rounded-full ${index === 0 ? "bg-teal" : "bg-line"}`} />
                <span className={`text-lg font-semibold ${index === 0 ? "text-teal" : "text-muted"}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }} className="overflow-hidden rounded-[2rem] bg-fog">
          <img src={visualPack} alt="" className="aspect-[1.08/1] w-full object-cover" />
        </motion.div>
      </Reveal>

      <Reveal delay={0.08} className="space-y-5">
        <h2 className="text-center text-3xl font-semibold text-ink">＼ まず見るなら ／</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {firstLinks.map(({ number, title, body, icon: Icon, color }) => (
            <motion.article key={title} whileHover={{ y: -6 }} className="relative overflow-hidden rounded-card border border-line bg-white/86 p-6 text-center shadow-soft">
              <span className={`absolute left-0 top-0 flex h-16 w-16 items-center justify-center rounded-br-[2rem] text-3xl font-bold text-white ${color === "teal" ? "bg-teal" : color === "purple" ? "bg-purple" : "bg-blue"}`}>
                {number}
              </span>
              <span className={`mx-auto mt-2 flex h-24 w-24 items-center justify-center rounded-full ${color === "teal" ? "bg-teal/12 text-teal" : color === "purple" ? "bg-purple/12 text-purple" : "bg-blue/12 text-blue-deep"}`}>
                <Icon className="h-12 w-12" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-ink">{title}</h3>
              <span className={`mx-auto mt-3 block h-1 w-20 rounded-full ${color === "teal" ? "bg-teal" : color === "purple" ? "bg-purple" : "bg-blue"}`} aria-hidden="true" />
              <p className="mt-4 text-base leading-8 text-ink">{body}</p>
              <span className={`mx-auto mt-5 flex h-12 w-12 items-center justify-center rounded-full border ${color === "teal" ? "border-teal text-teal" : color === "purple" ? "border-purple text-purple" : "border-blue text-blue-deep"}`}>
                <ChevronDown className="-rotate-90" aria-hidden="true" />
              </span>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12} className="space-y-5">
        <h2 className="flex items-center gap-3 text-3xl font-semibold text-ink">
          <Sparkles className="h-8 w-8 text-teal" strokeWidth={1.6} aria-hidden="true" />
          こんな方に向いています
        </h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {audiences.map(({ title, icon: Icon, color }) => (
            <motion.article key={title} whileHover={{ y: -4 }} className="grid grid-cols-[64px_1fr] items-center gap-3 rounded-2xl border border-line bg-white/82 p-4 shadow-float">
              <span className={`flex h-14 w-14 items-center justify-center rounded-full ${color}`}>
                <Icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="text-base font-semibold leading-7 text-ink">{title}</h3>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.16} className="space-y-5">
        <h2 className="text-center text-3xl font-semibold text-ink">よくある質問</h2>
        <div className="space-y-4">
          {questions.map(({ title, body, icon: Icon }) => (
            <motion.article key={title} whileHover={{ y: -3 }} className="grid grid-cols-[64px_1fr_auto] items-center gap-4 rounded-card border border-line bg-white/86 p-5 shadow-float">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/12 text-teal">
                <Icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-7 text-ink">{body}</p>
              </div>
              <ChevronDown className="h-6 w-6 text-ink" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="grid items-center gap-5 overflow-hidden rounded-card border border-line bg-white/72 p-6 shadow-soft sm:grid-cols-[0.42fr_0.58fr]">
        <img src={iconPack} alt="" className="h-32 w-full rounded-2xl object-contain opacity-75" />
        <p className="text-2xl font-semibold leading-relaxed text-ink">気になったことがあれば、名刺記載の連絡先から気軽に聞いてください。</p>
      </Reveal>
    </div>
  );
}
