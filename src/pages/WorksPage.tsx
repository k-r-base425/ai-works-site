import { ArrowRight, Image as ImageIcon, Menu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, StageDots, StageLabel } from "../components/ui";
import { works } from "../data/site";
import { assetPath } from "../lib/paths";

const worksVisual = assetPath("/assets/generated/visuals/works-thumbnails.png");

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
    image: assetPath("/assets/generated/visuals/local-lp-preview.png"),
  },
  {
    title: "Menu Draft Kit",
    description: "提案書やメニュー表などのたたき台テンプレート集。",
    href: "/works",
    tags: ["資料・文章"],
    accent: "blue" as const,
    image: assetPath("/assets/generated/visuals/qr-guide.png"),
  },
  {
    title: "Local Shop LP",
    description: "地域のお店・サービス向けLPの試作サンプル。",
    href: "/works",
    tags: ["試作中"],
    accent: "orange" as const,
    image: assetPath("/assets/generated/visuals/storefront.png"),
  },
];

export function WorksPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <section className="relative overflow-hidden rounded-card border border-line bg-white/78 p-6 shadow-soft sm:p-8">
          <FloatingAsset className="absolute right-8 top-8 text-teal" distance={6}>
            <Sparkles className="h-7 w-7" strokeWidth={1.8} />
          </FloatingAsset>
          <div className="absolute right-16 top-24 grid grid-cols-4 gap-2 opacity-40">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-purple" />
            ))}
          </div>
          <StageLabel accent="purple">STAGE 01 / WORKS</StageLabel>
          <div className="mt-5">
            <StageDots active={0} count={8} />
          </div>
          <h1 className="mt-8 text-[52px] font-semibold leading-none tracking-normal text-ink sm:text-7xl">
            Works <span className="mt-3 block text-3xl sm:inline sm:text-4xl">/ 作品一覧</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-ink">AIを使って作ったもの、試しているもの、これから整えていくものを並べています。</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={
                  index === 0
                    ? "rounded-full bg-blue px-7 py-3 text-sm font-semibold text-white shadow-float"
                    : "rounded-full border border-line bg-white/78 px-7 py-3 text-sm font-semibold text-ink shadow-float"
                }
              >
                {category}
              </button>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-5">
          <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
            <div className="flex items-center gap-3 text-purple">
              <ImageIcon className="h-5 w-5" strokeWidth={1.8} />
              <h2 className="text-sm font-semibold tracking-[0.18em]">GALLERY SHELF</h2>
            </div>
            <div className="flex gap-4">
              <span className="h-3 w-3 rounded-full bg-teal" />
              <span className="h-3 w-3 rounded-full bg-purple" />
              <span className="h-3 w-3 rounded-full bg-orange" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {galleryWorks.map((work, index) => (
              <Reveal key={work.title} delay={0.04 * (index % 4)}>
                <article className="rounded-card border border-line bg-white/84 p-4 shadow-float">
                  <img src={work.image} alt="" className="h-48 w-full rounded-2xl object-cover object-center" />
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-ink">{work.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Badge key={tag} accent={work.accent}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-3 min-h-14 text-base leading-8 text-ink">{work.description}</p>
                  <Link to={work.href} className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full border border-blue/45 bg-white/75 px-5 py-3 text-base font-semibold text-blue-deep">
                    詳しく見る
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-line bg-white/64 px-5 py-4 text-center shadow-float">
          <Sparkles className="h-8 w-8 text-purple" strokeWidth={1.8} />
          <p className="text-base leading-7 text-ink">新しい試作や改善中のものも追加していきます。</p>
          <Menu className="h-7 w-7 text-blue-deep" strokeWidth={1.8} />
        </section>
      </Reveal>
    </div>
  );
}
