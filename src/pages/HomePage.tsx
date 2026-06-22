import { ArrowRight, BarChart3, FileText, Image, Lightbulb, Monitor, Store, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, IconFromSheet, SectionHeader, SoftButton, StageDots, StageLabel } from "../components/ui";
import { features, profile, relatedActivity, stages, works } from "../data/site";

const heroVisual = "/assets/generated/visuals/hero-gallery.png";
const worksVisual = "/assets/generated/visuals/works-thumbnails.png";
const profileVisual = "/assets/generated/visuals/profile-portrait.png";
const storeVisual = "/assets/generated/visuals/storefront.png";
const galleryIcon = "/assets/generated/icons/image.png";

const extraWorks = [
  {
    title: "Sales Management App",
    summary: "売上や利益を見える化する管理アプリ試作。",
    href: "/works",
    tags: ["自主活用", "業務ツール"],
    accent: "teal" as const,
    image: worksVisual,
  },
  {
    title: "AI Visual Works",
    summary: "SNSやLPに使えるAI画像サンプル。",
    href: "/works",
    tags: ["自主制作", "画像生成"],
    accent: "orange" as const,
    image: "/assets/generated/visuals/local-lp-preview.png",
  },
];

export function HomePage() {
  return (
    <div className="space-y-9 pb-8">
      <Reveal>
        <section className="relative -mx-4 overflow-hidden rounded-b-[30px] border-b border-line bg-white/70 px-6 pb-8 pt-10 shadow-soft sm:mx-0 sm:rounded-card sm:border sm:px-8">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden sm:block">
            <img src={heroVisual} alt="" className="h-full w-full object-cover object-center opacity-75" />
          </div>
          <div className="relative z-10 max-w-xl">
            <StageLabel accent="blue">STAGE 01</StageLabel>
            <h1 className="mt-6 text-[48px] font-semibold leading-none tracking-normal text-ink sm:text-7xl">AI WORKS</h1>
            <p className="mt-5 text-2xl font-semibold leading-relaxed text-ink">
              小規模事業者向け
              <span className="block text-blue-deep">AI制作・活用パートナー</span>
            </p>
            <p className="mt-5 text-lg font-semibold text-ink">AIで、仕事に使えるものをつくる。</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-muted">Web・LP・業務ツール・画像制作など、AIを使った制作と活用の記録です。</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <SoftButton href="/works" accent="blue" variant="solid">
                作品を見る
              </SoftButton>
              <SoftButton href="/can-do" accent="blue">
                AIでできることを見る
              </SoftButton>
            </div>
            <div className="mt-8">
              <StageDots active={0} />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="grid items-center gap-5 rounded-card border border-line bg-white/78 p-5 shadow-float sm:grid-cols-[140px_1fr] sm:p-7">
          <FloatingAsset className="mx-auto h-24 w-24 overflow-hidden rounded-3xl border border-blue/30 bg-blue/10 p-2" distance={5}>
            <img src={galleryIcon} alt="" className="h-full w-full object-contain" />
          </FloatingAsset>
          <div>
            <h2 className="text-2xl font-semibold text-ink">このページについて</h2>
            <p className="mt-3 text-base leading-8 text-ink">AIを使って作ったものや、仕事に使えそうなアイデアをまとめた小さな展示室です。</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-5">
          <SectionHeader label="AIでできること" title="AIでできること" accent="blue" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-card border border-line bg-white/82 p-4 text-center shadow-float">
                <div className="flex justify-center">
                  <IconFromSheet icon={feature.icon} accent={feature.accent} />
                </div>
                <h3 className="mt-3 text-sm font-semibold leading-snug text-ink">{feature.title}</h3>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-5">
          <SectionHeader
            title="Works / 作品を見る"
            description="AIを使って作ったもの、試しているもの、これから整えていくものを並べています。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[...works, ...extraWorks].map((work) => (
              <Link key={work.title} to={work.href} className="grid grid-cols-[112px_1fr] gap-4 rounded-card border border-line bg-white/82 p-3 shadow-float transition hover:-translate-y-0.5">
                <img src={work.image} alt="" className="h-28 w-28 rounded-2xl object-cover" />
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-tight text-ink">{work.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Badge key={tag} accent={work.accent}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-blue/45 px-4 py-2 text-sm font-semibold text-blue-deep">
                    詳しく見る <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="space-y-5">
          <SectionHeader label="つくり方" title="つくり方" accent="blue" />
          <div className="grid gap-3 sm:grid-cols-4">
            {stages.map((stage) => (
              <article key={stage.stage} className="rounded-card border border-line bg-white/78 p-4 text-center shadow-float">
                <StageLabel accent={stage.accent}>{stage.stage}</StageLabel>
                <div className="mt-4 flex justify-center">
                  <IconFromSheet icon={stage.icon} accent={stage.accent} />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{stage.title}</h3>
              </article>
            ))}
          </div>
          <p className="text-center text-sm leading-7 text-muted">小さく試して、見て、直すことを大切にしています。</p>
        </section>
      </Reveal>

      <Reveal delay={0.14}>
        <section className="grid gap-4">
          <article className="grid items-center gap-4 rounded-card border border-line bg-white/80 p-5 shadow-float sm:grid-cols-[112px_1fr]">
            <img src={profileVisual} alt="" className="h-24 w-24 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-semibold text-ink">つくっている人</h2>
              <p className="mt-2 text-base font-semibold text-ink">{profile.name}</p>
              <p className="mt-1 text-sm text-muted">{profile.role}</p>
            </div>
          </article>
          <article className="grid items-center gap-4 rounded-card border border-purple/35 bg-purple/10 p-5 shadow-float sm:grid-cols-[92px_1fr_auto]">
            <img src={storeVisual} alt="" className="h-20 w-20 rounded-2xl object-cover" />
            <div>
              <h2 className="text-lg font-semibold text-ink">{relatedActivity.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">AI制作・活用のほか、FC代理店業にも取り組んでいます。</p>
            </div>
            <SoftButton href={relatedActivity.href} accent="purple">
              専用LPを見る
            </SoftButton>
          </article>
          <article className="flex items-center justify-between gap-4 rounded-card border border-teal/40 bg-teal/10 p-5 shadow-float">
            <div>
              <h2 className="text-xl font-semibold text-ink">気になったら</h2>
              <p className="mt-2 text-sm text-muted">名刺記載の連絡先から気軽に聞いてください。</p>
            </div>
            <Lightbulb className="h-12 w-12 text-teal" strokeWidth={1.6} />
          </article>
        </section>
      </Reveal>
    </div>
  );
}
