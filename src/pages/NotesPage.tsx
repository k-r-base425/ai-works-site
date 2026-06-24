import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowDownUp, BookOpenText, FileText, Globe2, Image, Lightbulb, Pencil, Pin, Search, SlidersHorizontal } from "lucide-react";
import { Reveal } from "../components/animation";
import { IconFromSheet, RpgLabel, RpgPanel } from "../components/ui";
import type { Accent } from "../data/site";

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

const statusItems = [
  { label: "LOGS", value: String(notes.length).padStart(2, "0") },
  { label: "TABS", value: String(categories.length).padStart(2, "0") },
  { label: "LATEST", value: notes[0].date },
];

export function NotesPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="-mx-4 px-5 py-7 sm:mx-0 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_48%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,242,167,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.2)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 06 / NOTES</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <BookOpenText className="h-4 w-4" aria-hidden="true" />
                  QUEST LOG
                </span>
              </div>
              <h1 className="mt-6 text-[42px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                AI活用メモ
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                試して分かったこと、仕事に使えそうなことを短く残しています。
              </p>
            </div>

            <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
              <div className="grid gap-3 sm:grid-cols-3">
                {statusItems.map((item) => (
                  <div key={item.label} className="rounded-sm border border-[#f2e9c6]/60 bg-[#10283b] p-4 text-center">
                    <p className="text-[11px] font-black tracking-[0.18em] text-[#9de3ff]">{item.label}</p>
                    <p className="mt-3 text-xl font-black leading-tight text-[#fff2a7]">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3">
                {notes.slice(0, 3).map((note, index) => (
                  <div key={note.title} className="grid grid-cols-[4.25rem_1fr] items-center gap-3 rounded-sm border border-[#8fdfff]/35 bg-[#0e2a3b]/90 p-3">
                    <span className="rounded-sm border border-[#fff2a7]/80 bg-[#07121b] px-2 py-1 text-center text-[11px] font-black text-[#fff2a7]">
                      LOG {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="truncate text-sm font-black text-white">{note.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal>
        <RpgPanel className="p-4 sm:p-5">
          <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              {categories.map((category) => (
                <motion.button
                  key={category.label}
                  whileHover={{ y: -2 }}
                  className={`inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-md border-2 px-3 py-2 text-sm font-black shadow-[0_5px_0_rgba(0,0,0,0.3)] ${
                    category.active
                      ? "border-[#fff2a7] bg-[#d31572] text-white"
                      : "border-[#8fdfff]/70 bg-[#0e2a3b] text-[#9de3ff]"
                  }`}
                  type="button"
                >
                  <category.icon className="h-4 w-4" aria-hidden="true" />
                  {category.label}
                </motion.button>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto] gap-3">
              <button className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-md border-2 border-[#8fdfff]/70 bg-[#0e2a3b] px-4 py-2 text-sm font-black text-[#9de3ff] shadow-[0_5px_0_rgba(0,0,0,0.3)]" type="button">
                <ArrowDownUp className="h-4 w-4" aria-hidden="true" />
                新しい順
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-[#fff2a7] bg-[#10283b] text-[#fff2a7] shadow-[0_5px_0_rgba(0,0,0,0.3)]" type="button" aria-label="検索">
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-4">
        {notes.map((note, index) => (
          <Reveal key={note.title} delay={index * 0.04}>
            <LogCard note={note} index={index} />
          </Reveal>
        ))}
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 flex items-center gap-4">
            <FileText className="h-10 w-10 shrink-0 text-[#fff2a7]" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <RpgLabel>NEXT LOG</RpgLabel>
              <p className="mt-3 text-base font-bold leading-8 text-[#eef8ff]">
                少しずつ試して、使える形に残していきます。
              </p>
            </div>
          </div>
        </RpgPanel>
      </Reveal>
    </div>
  );
}

function LogCard({
  note,
  index,
}: {
  note: {
    date: string;
    title: string;
    body: string;
    tag: string;
    accent: Accent;
    icon: LucideIcon;
    pickup?: boolean;
  };
  index: number;
}) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className={`relative grid gap-4 rounded-md border-2 bg-[#07121b] p-4 text-[#eef8ff] shadow-float sm:grid-cols-[7rem_1fr] sm:items-center ${
        note.pickup ? "border-[#f4b33d]" : "border-[#d7bb68]"
      }`}
    >
      {note.pickup ? (
        <div className="absolute right-4 top-4 flex items-center gap-2 rounded-sm border border-[#fff2a7] bg-[#8e4a12] px-3 py-1 text-[11px] font-black tracking-[0.14em] text-white">
          <Pin className="h-3.5 w-3.5" aria-hidden="true" />
          PICK UP
        </div>
      ) : null}

      <div className="flex items-center gap-4 rounded-sm border border-[#f2e9c6]/55 bg-[#10283b] p-3 sm:flex-col sm:justify-center">
        <span className="inline-flex h-12 min-w-12 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] px-2 text-sm font-black text-[#fff2a7]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <IconFromSheet icon={note.icon} accent={note.accent} />
      </div>

      <div className="min-w-0 pr-0 sm:pr-20">
        <div className="flex flex-wrap items-center gap-2">
          <RpgLabel>{`LOG ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
          <span className="rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.14em] text-[#9de3ff]">
            {note.tag}
          </span>
          <time className="text-sm font-black text-[#d9eff6]">{note.date}</time>
        </div>
        <h2 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl">{note.title}</h2>
        <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6] sm:text-base">{note.body}</p>
      </div>
    </motion.article>
  );
}
