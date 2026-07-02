import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ExternalLink, FileText, MapPinned, Megaphone, Newspaper, ScrollText, Sprout, Users } from "lucide-react";
import { Reveal } from "../components/animation";
import { IconFromSheet, RpgButton, RpgLabel, RpgPanel } from "../components/ui";
import type { Accent } from "../data/site";
import { assetPath } from "../lib/paths";

const visualPack = assetPath("/assets/generated/visuals/storefront.png");
const lpPreview = assetPath("/assets/generated/visuals/local-lp-preview.png");

const relationCards = [
  { title: "伝えるページを作る", body: "LPや紹介ページなど、伝わる形に整えます。", icon: Newspaper, accent: "teal" as Accent },
  { title: "資料を整える", body: "提案資料や説明資料を、分かりやすくまとめます。", icon: FileText, accent: "purple" as Accent },
  { title: "小さく試す", body: "まずは小さく始めて、見ながら改善していきます。", icon: Sprout, accent: "orange" as Accent },
];

const questStats = [
  { label: "TYPE", value: "SIDE" },
  { label: "AREA", value: "LOCAL" },
  { label: "STATUS", value: "OPEN" },
];

export function RelatedPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="px-5 py-7 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_48%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,242,167,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.2)_1px,transparent_1px)] [background-size:24px_24px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 08 / RELATED</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <MapPinned className="h-4 w-4" aria-hidden="true" />
                  SIDE QUEST BOARD
                </span>
              </div>
              <h1 className="mt-6 text-[38px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                Related Activity /
                <br />
                もうひとつの活動
              </h1>
              <div className="mt-6 space-y-3 rounded-md border border-[#8fdfff]/45 bg-[#0e2a3b]/80 p-4 text-sm font-semibold leading-7 text-[#d9eff6] sm:text-base">
                <p>AI制作・活用のほか、FC代理店業にも取り組んでいます。</p>
                <p>このページは、AI WORKSとは別の活動を紹介するための案内ページです。</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr] sm:items-stretch">
              <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                <img src={visualPack} alt="" className="aspect-[1.2/1] h-full w-full object-cover" />
              </motion.div>
              <div className="grid gap-3">
                {questStats.map((item) => (
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

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 grid gap-4 sm:grid-cols-[5rem_1fr] sm:items-center">
            <div className="flex justify-center">
              <IconFromSheet icon={Users} accent="teal" />
            </div>
            <div>
              <RpgLabel>QUEST INFO</RpgLabel>
              <h2 className="mt-3 text-2xl font-black text-white">活動について</h2>
              <p className="mt-3 text-base font-semibold leading-8 text-[#d9eff6]">
                地域のお店や小規模事業者に向けた取り組みとして、FC代理店業にも関わっています。
              </p>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <SectionTitle icon={Megaphone} label="SUPPORT SKILL" title="AI WORKSとの関係" />
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <p className="mx-auto max-w-2xl text-center text-base font-semibold leading-8 text-[#d9eff6]">
              AIで培った制作力や整理力を活かしながら、現場で役立つ支援につなげていくことを目指しています。
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {relationCards.map((card, index) => (
                <motion.article key={card.title} whileHover={{ y: -4 }} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 text-center shadow-float">
                  <div className="flex justify-center">
                    <IconFromSheet icon={card.icon} accent={card.accent} />
                  </div>
                  <div className="mt-4">
                    <RpgLabel>{`SKILL ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight text-white">{card.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6]">{card.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] shadow-[0_18px_36px_rgba(0,0,0,0.25)]">
              <img src={lpPreview} alt="" className="aspect-[1.35/1] w-full object-cover" />
            </motion.div>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>NEXT AREA</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  DESTINATION
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white">専用LP</h2>
              <p className="mt-4 text-base font-semibold leading-8 text-[#d9eff6]">詳しい内容は専用ページでご覧ください。</p>
              <div className="mt-6">
                <RpgButton href="/" variant="secondary">
                  専用LPを見る
                </RpgButton>
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 flex items-center gap-4">
            <ScrollText className="h-10 w-10 shrink-0 text-[#fff2a7]" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <RpgLabel>BOARD NOTE</RpgLabel>
              <p className="mt-3 text-base font-bold leading-8 text-[#eef8ff]">
                必要な方だけ見られるよう、下部の関連活動として置いています。
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
}: {
  icon: LucideIcon;
  label: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-[#d7bb68] pb-3">
      <Icon className="h-6 w-6 text-[#d31572]" strokeWidth={1.8} aria-hidden="true" />
      <div>
        <RpgLabel>{label}</RpgLabel>
        <h2 className="mt-2 text-2xl font-black text-ink">{title}</h2>
      </div>
    </div>
  );
}
