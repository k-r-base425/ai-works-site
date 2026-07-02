import { ArrowLeft, Eye, Heart, Home, Image as ImageIcon, Lightbulb, MonitorSmartphone, Network, PenLine, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/animation";
import { Badge, IconFromSheet, RpgButton, RpgLabel, RpgPanel } from "../components/ui";
import { assetPath } from "../lib/paths";

const visualPack = assetPath("/assets/generated/visuals/hero-gallery.png");
const worksThumb = assetPath("/assets/generated/visuals/works-thumbnails.png");

const aiUses = [
  { title: "構成づくり", icon: Network, accent: "teal" as const },
  { title: "文章のたたき台", icon: PenLine, accent: "purple" as const },
  { title: "UI案", icon: MonitorSmartphone, accent: "blue" as const },
  { title: "画像制作", icon: ImageIcon, accent: "orange" as const },
];

const notes = [
  {
    label: "NOTE 01",
    title: "工夫したこと",
    body: "営業色を強くしすぎず、見てもらうサイトにしました。",
    icon: Lightbulb,
    accent: "teal" as const,
  },
  {
    label: "NOTE 02",
    title: "これから整えること",
    body: "作品を少しずつ追加して、実際の使い方が伝わる形にしていきます。",
    icon: Heart,
    accent: "orange" as const,
  },
];

const screens = [
  { title: "AI WORKS", image: visualPack },
  { title: "AIでできること", image: visualPack },
  { title: "Works", image: worksThumb },
  { title: "つくり方", image: visualPack },
];

export function WorkDetailPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <Link
          to="/works"
          className="inline-flex min-h-11 items-center gap-2 rounded-md border-2 border-[#8fdfff] bg-[#07121b] px-4 text-sm font-black text-[#9de3ff] shadow-[0_5px_0_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          作品にもどる
        </Link>
      </Reveal>

      <Reveal delay={0.04}>
        <RpgPanel className="px-5 py-7 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_48%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,242,167,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.22)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 03 / DETAIL</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  ITEM DATA
                </span>
              </div>
              <h1 className="mt-6 text-[44px] font-black leading-none tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-7xl">
                AI WORKS
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                AIで、仕事に使えるものをつくる。小さな展示室へ、ようこそ。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Badge accent="teal">自主制作</Badge>
                <Badge accent="purple">ポートフォリオ</Badge>
                <Badge accent="orange">名刺QR</Badge>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["TYPE", "紹介ページ"],
                  ["ROLE", "AI制作記録"],
                  ["STATUS", "公開中"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-md border border-[#d7bb68]/75 bg-[#10283b] p-3">
                    <p className="text-[11px] font-black tracking-[0.18em] text-[#fff2a7]">{label}</p>
                    <p className="mt-2 text-sm font-black text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-1 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                <img src={visualPack} alt="" className="aspect-[1.45/1] w-full rounded-sm object-cover object-center" />
              </div>
              <div className="mt-3 rounded-md border-2 border-[#f2e9c6] bg-[#07121b]/92 p-3 shadow-[0_14px_28px_rgba(0,0,0,0.28)]">
                <p className="text-sm font-black leading-6 text-[#eef8ff]">名刺QRから見てもらうための、AI制作・活用の紹介ページ。</p>
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.08}>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 grid items-center gap-5 sm:grid-cols-[92px_1fr]">
            <IconFromSheet icon={Home} accent="blue" />
            <div>
              <RpgLabel>ITEM INFO</RpgLabel>
              <h2 className="mt-3 text-2xl font-black text-white">この作品について</h2>
              <p className="mt-3 text-base font-semibold leading-8 text-[#d9eff6]">AIで作ったものや、仕事に使えそうなアイデアをまとめた小さな展示室です。</p>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.1}>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-[#fff2a7]" strokeWidth={1.8} />
              <div>
                <RpgLabel>EFFECT</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-white">AIを使ったところ</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-4">
              {aiUses.map((item, index) => (
                <article key={item.title} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 text-center shadow-float">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-xs font-black text-[#fff2a7]">
                    {index + 1}
                  </span>
                  <div className="mt-4 flex justify-center">
                    <IconFromSheet icon={item.icon} accent={item.accent} />
                  </div>
                  <h3 className="mt-3 text-base font-black leading-snug text-white">{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="grid gap-4 md:grid-cols-2">
        {notes.map((note, index) => (
          <Reveal key={note.title} delay={0.12 + index * 0.04}>
            <RpgPanel as="article" className="h-full p-5">
              <div className="relative z-10 grid gap-4 sm:grid-cols-[76px_1fr] sm:items-center">
                <IconFromSheet icon={note.icon} accent={note.accent} />
                <div>
                  <RpgLabel>{note.label}</RpgLabel>
                  <h2 className="mt-3 text-2xl font-black text-white">{note.title}</h2>
                  <p className="mt-3 text-base font-semibold leading-8 text-[#d9eff6]">{note.body}</p>
                </div>
              </div>
            </RpgPanel>
          </Reveal>
        ))}
      </section>

      <Reveal delay={0.2}>
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-4 border-b-2 border-[#d7bb68] pb-3">
            <div className="flex items-center gap-3">
              <ImageIcon className="h-6 w-6 text-[#d31572]" strokeWidth={1.8} />
              <div>
                <RpgLabel>SCREEN LOG</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-ink">この作品の画面イメージ</h2>
              </div>
            </div>
            <Eye className="hidden h-7 w-7 text-teal sm:block" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {screens.map((screen) => (
              <article key={screen.title} className="overflow-hidden rounded-md border-2 border-[#d7bb68] bg-[#07121b] shadow-float">
                <img src={screen.image} alt="" className="h-32 w-full object-cover" />
                <p className="px-3 py-3 text-center text-sm font-black text-[#fff2a7]">{screen.title}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.24}>
        <nav className="grid gap-4 sm:grid-cols-2">
          <RpgButton href="/works" variant="secondary">
            作品一覧へ
          </RpgButton>
          <RpgButton href="/can-do">できることを見る</RpgButton>
        </nav>
      </Reveal>
    </div>
  );
}
