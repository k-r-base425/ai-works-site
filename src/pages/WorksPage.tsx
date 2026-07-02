import { ArrowRight, ClipboardList, Compass, Image as ImageIcon, Menu, ScrollText, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/animation";
import { Badge, RpgButton, RpgLabel, RpgPanel, RpgQuestCard } from "../components/ui";
import { works } from "../data/site";
import { assetPath } from "../lib/paths";

const worksVisual = assetPath("/assets/generated/visuals/works-thumbnails.png");
const localPreview = assetPath("/assets/generated/visuals/local-lp-preview.png");
const qrPreview = assetPath("/assets/generated/visuals/qr-guide.png");
const storeVisual = assetPath("/assets/generated/visuals/storefront.png");

const categories = ["すべて", "Web・LP", "業務ツール", "画像生成", "資料"];

const galleryWorks = [
  ...works.map((work, index) => ({
    ...work,
    description: index === 0 ? "名刺QRから見てもらうための紹介ページ。" : "スマホで見やすいカード型LPサンプル。",
  })),
  {
    title: "Sales Management App",
    description: "売上や利益を見える化する管理アプリ試作。",
    href: "/works",
    tags: ["自主活用", "業務ツール"],
    accent: "teal" as const,
    image: worksVisual,
  },
  {
    title: "AI Visual Works",
    description: "SNSやLPに使えるAI画像サンプル。",
    href: "/works",
    tags: ["自主制作", "画像生成"],
    accent: "purple" as const,
    image: localPreview,
  },
  {
    title: "Menu Draft Kit",
    description: "提案書やメニュー表などのたたき台テンプレート集。",
    href: "/works",
    tags: ["資料・文章"],
    accent: "blue" as const,
    image: qrPreview,
  },
  {
    title: "Local Shop LP",
    description: "地域のお店・サービス向けLPの試作サンプル。",
    href: "/works",
    tags: ["試作中"],
    accent: "orange" as const,
    image: storeVisual,
  },
];

export function WorksPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="px-5 py-7 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_52%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,242,167,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.22)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 02 / WORKS</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <Trophy className="h-4 w-4" aria-hidden="true" />
                  {galleryWorks.length} QUESTS
                </span>
              </div>
              <h1 className="mt-6 text-[46px] font-black leading-none tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-7xl">
                Works
                <span className="mt-3 block text-3xl text-[#7ee7ff] sm:text-4xl">/ 作品一覧</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                AIを使って作ったもの、試しているもの、これから整えていくものをクエスト掲示板のように並べています。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={
                      index === 0
                        ? "min-h-11 rounded-md border-2 border-[#fff2a7] bg-[#d31572] px-3 text-sm font-black text-white shadow-[0_5px_0_rgba(75,20,48,0.85)]"
                        : "min-h-11 rounded-md border-2 border-[#8fdfff]/75 bg-[#07121b]/70 px-3 text-sm font-black text-[#9de3ff] shadow-[0_5px_0_rgba(0,0,0,0.28)]"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-1 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                <img src={worksVisual} alt="" className="aspect-[1.58/1] w-full rounded-sm object-cover" />
              </div>
              <div className="mt-3 rounded-md border-2 border-[#f2e9c6] bg-[#07121b]/92 p-3 shadow-[0_14px_28px_rgba(0,0,0,0.28)]">
                <div className="flex items-center gap-3">
                  <Compass className="h-6 w-6 shrink-0 text-[#fff2a7]" aria-hidden="true" />
                  <p className="text-sm font-black leading-6 text-[#eef8ff]">気になるクエストから、制作の方向を見ていきます。</p>
                </div>
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.06}>
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-4 border-b-2 border-[#d7bb68] pb-3">
            <div className="flex items-center gap-3">
              <ScrollText className="h-6 w-6 text-[#d31572]" strokeWidth={1.8} />
              <div>
                <RpgLabel>QUEST BOARD</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-ink">依頼書一覧</h2>
              </div>
            </div>
            <div className="hidden gap-2 sm:flex">
              {["bg-teal", "bg-[#d31572]", "bg-orange"].map((color) => (
                <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {galleryWorks.map((work, index) => (
              <Reveal key={work.title} delay={0.035 * (index % 4)}>
                <article className="grid h-full gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-3 text-[#eef8ff] shadow-float transition hover:-translate-y-0.5 md:grid-cols-[10rem_1fr]">
                  <div className="overflow-hidden rounded-sm border border-[#f2e9c6]/60 bg-[#10283b]">
                    <img src={work.image} alt="" className="aspect-[1.35/1] h-full w-full object-cover md:aspect-square" />
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <div className="flex flex-wrap items-center gap-2">
                      <RpgLabel>{`QUEST ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                      <span className="rounded-sm border border-[#8fdfff]/55 bg-[#10283b] px-2.5 py-1 text-[11px] font-black text-[#9de3ff]">
                        {index === 0 ? "MAIN" : "SUB"}
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">{work.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <Badge key={tag} accent={work.accent}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-3 flex-1 text-sm font-semibold leading-7 text-[#d9eff6]">{work.description}</p>
                    <Link
                      to={work.href}
                      className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md border-2 border-[#8fdfff] bg-[#0e2a3b] px-4 text-sm font-black text-[#9de3ff] shadow-[0_5px_0_rgba(0,0,0,0.34)] transition hover:-translate-y-0.5"
                    >
                      詳しく見る
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid gap-4 lg:grid-cols-[1fr_0.72fr]">
          <RpgPanel className="p-5">
            <div className="relative z-10 flex items-center gap-4">
              <Sparkles className="h-8 w-8 shrink-0 text-[#fff2a7]" strokeWidth={1.8} />
              <div>
                <RpgLabel>NEXT QUEST</RpgLabel>
                <p className="mt-3 text-base font-bold leading-7 text-[#eef8ff]">新しい試作や改善中のものも追加していきます。</p>
              </div>
            </div>
          </RpgPanel>
          <RpgQuestCard
            title="AI WORKSの進行ログ"
            body="トップから順番に、各ページをRPG風UIへ整えていきます。"
            meta="UPDATE"
            image={worksVisual}
          />
        </div>
      </Reveal>

      <div className="sr-only">
        <ImageIcon />
        <Menu />
        <ClipboardList />
      </div>
    </div>
  );
}
