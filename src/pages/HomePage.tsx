import { CheckCircle2, Compass, Flag, Lightbulb, Map, ScrollText, Sparkles, Store, Swords, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/animation";
import { Badge, IconFromSheet, RpgButton, RpgLabel, RpgPanel, RpgQuestCard } from "../components/ui";
import { features, profile, relatedActivity, stages, works } from "../data/site";
import { assetPath } from "../lib/paths";

const rpgMapHero = assetPath("/assets/generated/visuals/rpg-map-hero.png");
const rpgCommandHero = assetPath("/assets/generated/visuals/rpg-command-hero.png");
const worksVisual = assetPath("/assets/generated/visuals/works-thumbnails.png");
const profileVisual = assetPath("/assets/generated/visuals/profile-portrait.png");
const storeVisual = assetPath("/assets/generated/visuals/storefront.png");
const localPreview = assetPath("/assets/generated/visuals/local-lp-preview.png");
const qrPreview = assetPath("/assets/generated/visuals/qr-guide.png");

const heroSamples = [
  { title: "World Map", body: "仕事の課題を見えるマップにする。", meta: "MAP 01", image: rpgMapHero },
  { title: "Quest UI", body: "Web、画像、資料をコマンドで選ぶ。", meta: "MENU 02", image: rpgCommandHero },
  { title: "Works", body: "作ったものをクエスト記録として並べる。", meta: "LOG 03", image: worksVisual },
  { title: "LP Demo", body: "地域のお店向けページを試作する。", meta: "SIDE 04", image: localPreview },
  { title: "QR Guide", body: "名刺から来た方を最初の案内へ導く。", meta: "START", image: qrPreview },
];

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
    image: localPreview,
  },
];

const commandIcons = [Swords, Map, Sparkles];
const commandLabels = ["Web LP", "Tool", "Image"];

export function HomePage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="-mx-4 px-5 pb-8 pt-9 sm:mx-0 sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_46%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,242,167,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.24)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-xl">
              <RpgLabel>QUEST 01</RpgLabel>
              <p className="mt-7 text-xl font-bold leading-relaxed text-[#eef8ff] sm:text-2xl">
                小規模事業者のための冒険拠点
                <span className="block text-[#9de3ff]">AI制作・活用ギルド</span>
              </p>
              <h1 className="mt-3 text-[42px] font-black leading-[1.08] tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl lg:text-[66px]">
                仕事の課題を
                <span className="block whitespace-nowrap">クエスト化して</span>
                <span className="block whitespace-nowrap text-[#7ee7ff]">小さく攻略。</span>
              </h1>
              <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                Web・LP・業務ツール・画像・資料づくりを、マップを進めるように見える形で試して整えます。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <RpgButton href="/works">冒険を見る</RpgButton>
                <RpgButton href="/can-do" variant="secondary">
                  コマンドを見る
                </RpgButton>
              </div>
              <div className="mt-7 grid gap-3 text-sm font-bold text-[#eef8ff] sm:grid-cols-3">
                {["相談をマップ化", "スマホで確認", "小さく攻略"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2 rounded-md border border-[#e8d88c]/60 bg-[#07121b]/66 px-3 py-2 shadow-float">
                    <CheckCircle2 className="h-4 w-4 text-[#fff2a7]" aria-hidden="true" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[350px] lg:min-h-[480px]">
              <div className="absolute right-0 top-2 z-20 hidden h-28 w-28 items-center justify-center rounded-full border-[5px] border-[#fff2a7] bg-[#07121b] text-center shadow-soft sm:flex">
                <div>
                  <p className="text-[11px] font-bold text-[#9de3ff]">AI QUEST</p>
                  <p className="text-4xl font-black text-[#fff2a7]">9</p>
                  <p className="text-[11px] font-bold text-[#d9eff6]">STAGES</p>
                </div>
              </div>
              <div className="relative ml-auto max-w-2xl pt-8">
                <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-1 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                  <div className="overflow-hidden rounded-sm border-2 border-[#07121b] bg-[#07121b]">
                    <img src={rpgMapHero} alt="" className="aspect-[16/9] w-full object-cover object-center" />
                  </div>
                </div>
                <div className="absolute -left-1 bottom-2 w-[46%] min-w-[180px] rounded-md border-4 border-[#f2e9c6] bg-[#07121b] p-1 shadow-[0_18px_30px_rgba(0,0,0,0.34)] sm:-left-7 sm:w-[40%]">
                  <div className="grid grid-cols-[3.5rem_1fr] gap-3 p-3">
                    <div className="grid gap-2">
                      {commandIcons.map((Icon, index) => (
                        <span key={index} className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#f2e9c6]/70 bg-[#10283b] text-[#fff2a7]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {commandLabels.map((item) => (
                        <span key={item} className="block rounded-sm border border-[#f2e9c6]/70 bg-[#10283b] px-3 py-1.5 text-xs font-black text-[#eef8ff]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -right-1 bottom-1 w-[34%] min-w-[128px] rounded-md border-4 border-[#f2e9c6] bg-[#07121b] p-1 shadow-[0_18px_30px_rgba(0,0,0,0.34)] sm:-right-5 sm:w-[30%]">
                  <div className="overflow-hidden rounded-sm">
                    <img src={rpgCommandHero} alt="" className="aspect-[9/12] w-full object-cover object-left-top" />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <span key={index} className={`h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-[#fff2a7]" : "bg-white/30"}`} />
                ))}
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.05}>
        <RpgPanel className="-mx-4 px-4 py-5 sm:mx-0">
          <div className="relative z-10 flex items-center justify-between gap-4 pb-4">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-[#fff2a7]" aria-hidden="true" />
              <h2 className="text-sm font-black tracking-[0.18em] text-[#fff2a7]">STAGE SELECT</h2>
            </div>
            <div className="hidden gap-2 sm:flex">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index} className={`h-3 w-3 rounded-full ${index === 0 ? "bg-[#7ee7ff]" : "bg-white/25"}`} />
              ))}
            </div>
          </div>
          <div className="relative z-10 grid grid-cols-[repeat(5,72%)] gap-4 overflow-x-auto pb-1 sm:grid-cols-5 sm:overflow-visible">
            {heroSamples.map((sample) => (
              <RpgQuestCard key={sample.title} {...sample} />
            ))}
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <RpgLabel>COMMAND</RpgLabel>
              <h2 className="mt-3 text-2xl font-black text-ink sm:text-3xl">AIでできること</h2>
            </div>
            <Swords className="hidden h-9 w-9 text-[#d31572] sm:block" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-center shadow-float">
                <div className="flex justify-center">
                  <IconFromSheet icon={feature.icon} accent={feature.accent} />
                </div>
                <h3 className="mt-3 text-sm font-black leading-snug text-[#eef8ff]">{feature.title}</h3>
                <p className="mt-2 text-xs leading-6 text-[#b9d6df]">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <RpgLabel>QUEST BOARD</RpgLabel>
              <h2 className="mt-3 text-2xl font-black text-ink sm:text-3xl">Works / 作品を見る</h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-muted">AIを使って作ったもの、試しているもの、これから整えていくものを並べています。</p>
            </div>
            <ScrollText className="hidden h-9 w-9 text-teal sm:block" aria-hidden="true" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[...works, ...extraWorks].map((work, index) => (
              <Link key={work.title} to={work.href} className="grid gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-3 shadow-float transition hover:-translate-y-0.5 sm:grid-cols-[128px_1fr]">
                <img src={work.image} alt="" className="aspect-square w-full rounded-sm border border-[#f2e9c6]/50 object-cover sm:w-32" />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <RpgLabel>{`QUEST ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-tight text-white">{work.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#d9eff6]">{work.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <Badge key={tag} accent={work.accent}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <Flag className="h-6 w-6 text-[#fff2a7]" aria-hidden="true" />
              <div>
                <RpgLabel>ROUTE</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-white">つくり方</h2>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-4">
              {stages.map((stage, index) => (
                <article key={stage.stage} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 text-center shadow-float">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-sm font-black text-[#fff2a7]">
                    {index + 1}
                  </span>
                  <div className="mt-4 flex justify-center">
                    <IconFromSheet icon={stage.icon} accent={stage.accent} />
                  </div>
                  <h3 className="mt-3 text-lg font-black text-white">{stage.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[#b9d6df]">{stage.description}</p>
                </article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal delay={0.14}>
        <section className="grid gap-4">
          <article className="grid items-center gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-5 text-[#eef8ff] shadow-float sm:grid-cols-[112px_1fr]">
            <img src={profileVisual} alt="" className="h-24 w-24 rounded-sm border border-[#f2e9c6]/60 object-cover" />
            <div>
              <div className="flex items-center gap-2">
                <UserRound className="h-5 w-5 text-[#fff2a7]" aria-hidden="true" />
                <RpgLabel>STATUS</RpgLabel>
              </div>
              <h2 className="mt-3 text-2xl font-black text-white">つくっている人</h2>
              <p className="mt-2 text-base font-bold text-[#9de3ff]">{profile.name}</p>
              <p className="mt-1 text-sm leading-6 text-[#d9eff6]">{profile.role}</p>
            </div>
          </article>
          <article className="grid items-center gap-4 rounded-md border-2 border-[#d7bb68] bg-[#0e2a3b] p-5 text-[#eef8ff] shadow-float sm:grid-cols-[92px_1fr_auto]">
            <img src={storeVisual} alt="" className="h-20 w-20 rounded-sm border border-[#f2e9c6]/60 object-cover" />
            <div>
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5 text-[#fff2a7]" aria-hidden="true" />
                <RpgLabel>SIDE QUEST</RpgLabel>
              </div>
              <h2 className="mt-3 text-lg font-black text-white">{relatedActivity.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#d9eff6]">AI制作・活用のほか、FC代理店業にも取り組んでいます。</p>
            </div>
            <RpgButton href={relatedActivity.href} variant="secondary">
              専用LPを見る
            </RpgButton>
          </article>
          <article className="flex items-center justify-between gap-4 rounded-md border-2 border-[#d7bb68] bg-[#10283b] p-5 text-[#eef8ff] shadow-float">
            <div>
              <RpgLabel>INFO</RpgLabel>
              <h2 className="mt-3 text-xl font-black text-white">気になったら</h2>
              <p className="mt-2 text-sm leading-6 text-[#d9eff6]">名刺記載の連絡先から気軽に聞いてください。</p>
            </div>
            <Lightbulb className="h-12 w-12 shrink-0 text-[#fff2a7]" strokeWidth={1.6} />
          </article>
        </section>
      </Reveal>
    </div>
  );
}
