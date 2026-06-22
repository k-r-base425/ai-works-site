import { motion } from "framer-motion";
import { ArrowDownUp, ChevronRight, FileText, Globe2, Image, Lightbulb, Pencil, Pin, Search, SlidersHorizontal } from "lucide-react";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, StageLabel } from "../components/ui";
import type { Accent } from "../data/site";
import { assetPath } from "../lib/paths";

const categories = [
  { label: "すべて", icon: SlidersHorizontal, active: true, accent: "blue" as Accent },
  { label: "Web", icon: Globe2, active: false, accent: "blue" as Accent },
  { label: "業務", icon: SlidersHorizontal, active: false, accent: "teal" as Accent },
  { label: "画像", icon: Image, active: false, accent: "purple" as Accent },
  { label: "文章", icon: Pencil, active: false, accent: "orange" as Accent },
];

const notes = [
  {
    date: "2026.06.10",
    title: "名刺QRから見てもらうページを作る",
    body: "はじめて見る人に、何を伝えると安心かを整理しました。",
    tag: "Web",
    accent: "blue" as Accent,
    icon: Globe2,
    pickup: true,
  },
  {
    date: "2026.06.07",
    title: "売上を見える化する小さな管理画面",
    body: "表だけでは分かりにくい数字を、画面で見られるようにする試作。",
    tag: "業務",
    accent: "teal" as Accent,
    icon: SlidersHorizontal,
  },
  {
    date: "2026.06.04",
    title: "SNS用の画像をAIで作るときの考え方",
    body: "雰囲気、用途、サイズを先に決めると使いやすくなります。",
    tag: "画像",
    accent: "purple" as Accent,
    icon: Image,
  },
  {
    date: "2026.06.01",
    title: "提案文をやさしく整える",
    body: "専門用語を減らして、相手に伝わる言葉に直します。",
    tag: "文章",
    accent: "orange" as Accent,
    icon: Pencil,
  },
  {
    date: "2026.05.28",
    title: "AIにお願いする前に決めること",
    body: "目的、見る人、使う場所を先に決めるだけで結果が変わります。",
    tag: "はじめ方",
    accent: "teal" as Accent,
    icon: Lightbulb,
  },
];

const accentText: Record<Accent, string> = {
  blue: "text-blue-deep",
  teal: "text-teal",
  purple: "text-purple",
  orange: "text-orange",
};

const accentSoft: Record<Accent, string> = {
  blue: "bg-blue/10",
  teal: "bg-teal/10",
  purple: "bg-purple/10",
  orange: "bg-orange/10",
};

export function NotesPage() {
  return (
    <div className="space-y-7 pb-8">
      <Reveal>
        <section className="relative overflow-hidden rounded-card border border-line bg-white/72 p-5 shadow-soft sm:p-8">
          <div className="grid gap-6 sm:grid-cols-[1fr_15rem] sm:items-center">
            <div>
              <StageLabel>STAGE 05 / NOTES</StageLabel>
              <h1 className="mt-6 text-[42px] font-semibold leading-tight tracking-normal text-ink sm:text-6xl">AI活用メモ</h1>
              <p className="mt-5 max-w-xl text-lg leading-9 text-ink">
                試して分かったこと、
                <br />
                仕事に使えそうなことを短く残しています。
              </p>
            </div>
            <FloatingAsset className="mx-auto h-48 w-48 opacity-90" distance={8}>
              <img src={assetPath("/assets/generated/icons/document.png")} alt="" className="h-full w-full rounded-3xl object-contain" />
            </FloatingAsset>
          </div>
          <div className="mt-7 flex max-w-sm items-center gap-4">
            {["01", "02", "03", "04", "05"].map((item, index) => (
              <div key={item} className="flex flex-col items-center gap-2 text-xs font-semibold text-muted">
                <span className={`h-4 w-4 rounded-full ${index === 4 ? "bg-blue" : "bg-muted/35"}`} />
                <span className={index === 4 ? "text-blue-deep" : ""}>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="flex flex-wrap gap-3 pb-1">
          {categories.map((category) => (
            <motion.button
              key={category.label}
              whileHover={{ y: -2 }}
              className={`inline-flex min-w-[6.5rem] flex-1 items-center justify-center gap-2 rounded-full border px-4 py-3 text-base font-semibold shadow-float sm:flex-none ${
                category.active ? "border-blue bg-blue text-white" : "border-line bg-white/82 text-ink"
              }`}
              type="button"
            >
              <category.icon className="h-5 w-5" aria-hidden="true" />
              {category.label}
            </motion.button>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="flex items-center justify-between">
          <button className="inline-flex items-center gap-2 text-base font-medium text-muted" type="button">
            <ArrowDownUp className="h-5 w-5" aria-hidden="true" />
            新しい順
          </button>
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-line bg-white/82 text-ink shadow-float" type="button" aria-label="検索">
            <Search className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </Reveal>

      <section className="space-y-4">
        {notes.map((note, index) => (
          <Reveal key={note.title} delay={index * 0.04}>
            <motion.article
              whileHover={{ y: -3 }}
              className={`relative grid gap-4 rounded-card border bg-white/86 p-4 shadow-float sm:grid-cols-[12rem_1fr_auto] sm:items-center ${
                note.pickup ? "border-orange/40 bg-orange/5" : "border-line"
              }`}
            >
              {note.pickup ? (
                <>
                  <span className="absolute left-6 top-6 rounded-md bg-orange px-4 py-1 text-sm font-bold text-white">PICK UP</span>
                  <Pin className="absolute right-6 top-6 h-6 w-6 text-orange" aria-hidden="true" />
                </>
              ) : null}
              <div className={`flex aspect-[4/3] items-center justify-center rounded-2xl ${accentSoft[note.accent]} ${note.pickup ? "mt-8 sm:mt-0" : ""}`}>
                <note.icon className={`h-16 w-16 ${accentText[note.accent]}`} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <p className="text-base font-medium text-muted">{note.date}</p>
                <h2 className="mt-2 text-xl font-semibold leading-snug text-ink sm:text-2xl">{note.title}</h2>
                <div className="mt-3">
                  <Badge accent={note.accent}>{note.tag}</Badge>
                </div>
                <p className="mt-3 text-base leading-7 text-ink">{note.body}</p>
              </div>
              <ChevronRight className="hidden h-7 w-7 text-muted sm:block" aria-hidden="true" />
            </motion.article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="grid items-center gap-4 rounded-card bg-purple/10 p-5 shadow-float sm:grid-cols-[6rem_1fr]">
          <FileText className="mx-auto h-14 w-14 text-muted" strokeWidth={1.45} aria-hidden="true" />
          <p className="text-lg font-semibold leading-8 text-ink">少しずつ試して、使える形に残していきます。</p>
        </section>
      </Reveal>
    </div>
  );
}
