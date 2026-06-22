import { ArrowLeft, Eye, Heart, Home, Image as ImageIcon, Lightbulb, MonitorSmartphone, Network, PenLine, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, IconFromSheet, SoftButton, StageDots, StageLabel } from "../components/ui";
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
    title: "工夫したこと",
    body: "営業色を強くしすぎず、見てもらうサイトにしました。",
    icon: Lightbulb,
    accent: "teal" as const,
  },
  {
    title: "これから整えること",
    body: "作品を少しずつ追加して、実際の使い方が伝わる形にしていきます。",
    icon: Heart,
    accent: "orange" as const,
  },
];

const thumbs = ["AI WORKS", "AIでできること", "Works", "つくり方"];

export function WorkDetailPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <Link to="/works" className="inline-flex items-center gap-2 text-base font-semibold text-blue-deep">
          <ArrowLeft className="h-5 w-5" />
          作品にもどる
        </Link>
      </Reveal>

      <Reveal delay={0.04}>
        <section className="relative overflow-hidden rounded-card border border-line bg-white/80 shadow-soft">
          <img src={visualPack} alt="" className="h-72 w-full object-cover opacity-82 sm:h-96" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/62 to-white/20" />
          <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-12">
            <FloatingAsset className="max-w-lg" distance={6}>
              <h1 className="text-[44px] font-semibold leading-none tracking-normal text-ink sm:text-7xl">
                <span className="text-blue-deep">AI</span> WORKS
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink">AIで、仕事に使えるものをつくる。小さな展示室へ、ようこそ。</p>
              <div className="mt-6">
                <StageDots active={0} />
              </div>
            </FloatingAsset>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-5">
          <StageLabel accent="blue">STAGE 02 / DETAIL</StageLabel>
          <h2 className="text-[48px] font-semibold leading-none tracking-normal text-ink sm:text-7xl">AI WORKS</h2>
          <div className="flex flex-wrap gap-3">
            <Badge accent="teal">自主制作</Badge>
            <Badge accent="purple">ポートフォリオ</Badge>
            <Badge accent="orange">名刺QR</Badge>
          </div>
          <div className="border-t border-dashed border-line pt-5">
            <p className="text-lg leading-9 text-ink">名刺QRから見てもらうための、AI制作・活用の紹介ページ。</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="grid items-center gap-5 rounded-card border border-line bg-white/80 p-6 shadow-float sm:grid-cols-[92px_1fr]">
          <IconFromSheet icon={Home} accent="blue" />
          <div>
            <h2 className="text-2xl font-semibold text-ink">この作品について</h2>
            <p className="mt-3 text-base leading-8 text-ink">AIで作ったものや、仕事に使えそうなアイデアをまとめた小さな展示室です。</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="rounded-card border border-line bg-white/80 p-6 shadow-float">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-blue-deep" strokeWidth={1.8} />
            <h2 className="text-2xl font-semibold text-ink">AIを使ったところ</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {aiUses.map((item) => (
              <article key={item.title} className="flex items-center gap-3 rounded-2xl border border-line bg-white/75 p-4 shadow-float">
                <IconFromSheet icon={item.icon} accent={item.accent} />
                <h3 className="text-base font-semibold leading-snug text-ink">{item.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {notes.map((note, index) => (
        <Reveal key={note.title} delay={0.14 + index * 0.04}>
          <section className="grid items-center gap-5 rounded-card border border-line bg-white/80 p-6 shadow-float sm:grid-cols-[92px_1fr]">
            <IconFromSheet icon={note.icon} accent={note.accent} />
            <div>
              <h2 className="text-2xl font-semibold text-ink">{note.title}</h2>
              <p className="mt-3 text-base leading-8 text-ink">{note.body}</p>
            </div>
          </section>
        </Reveal>
      ))}

      <Reveal delay={0.22}>
        <section className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-ink">
              <ImageIcon className="h-6 w-6" strokeWidth={1.8} />
              <h2 className="text-base font-semibold">この作品の画面イメージ</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <span>タップで拡大</span>
              <Search className="h-5 w-5" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {thumbs.map((thumb) => (
              <article key={thumb} className="overflow-hidden rounded-2xl border border-line bg-white shadow-float">
                <img src={thumb === "Works" ? worksThumb : visualPack} alt="" className="h-32 w-full object-cover" />
                <p className="px-3 py-3 text-center text-sm font-semibold text-ink">{thumb}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.24}>
        <nav className="grid gap-4 sm:grid-cols-2">
          <SoftButton href="/works" accent="blue">
            作品一覧へ
          </SoftButton>
          <Link to="/can-do" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-blue px-5 text-base font-semibold text-white shadow-float transition hover:-translate-y-0.5">
            <Eye className="h-5 w-5" />
            できることを見る
          </Link>
        </nav>
      </Reveal>
    </div>
  );
}
