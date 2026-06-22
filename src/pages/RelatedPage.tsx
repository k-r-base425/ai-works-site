import { motion } from "framer-motion";
import { ExternalLink, FileText, Newspaper, Sprout, Users } from "lucide-react";
import { Reveal } from "../components/animation";
import { StageLabel } from "../components/ui";

const visualPack = "/assets/generated/visuals/storefront.png";
const lpPreview = "/assets/generated/visuals/local-lp-preview.png";
const iconPack = "/assets/generated/icons/storefront.png";

const relationCards = [
  { title: "伝えるページを作る", body: "LPや紹介ページなど、伝わる形に整えます。", icon: Newspaper, color: "bg-teal/18 text-teal" },
  { title: "資料を整える", body: "提案資料や説明資料を、分かりやすくまとめます。", icon: FileText, color: "bg-purple/18 text-purple" },
  { title: "小さく試す", body: "まずは小さく始めて、見ながら改善していきます。", icon: Sprout, color: "bg-orange/18 text-orange" },
] as const;

export function RelatedPage() {
  return (
    <div className="space-y-7 pb-8">
      <Reveal className="grid gap-6 rounded-card border border-line bg-white/78 p-6 shadow-soft lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-10">
        <div className="space-y-7">
          <StageLabel accent="teal">STAGE 07 / RELATED</StageLabel>
          <h1 className="text-[38px] font-semibold leading-tight tracking-normal text-ink sm:text-7xl">
            Related Activity /
            <br />
            もうひとつの活動
          </h1>
          <span className="block h-2 w-28 rounded-full bg-gradient-to-r from-teal via-blue to-line" aria-hidden="true" />
          <div className="space-y-4 text-lg leading-9 text-ink">
            <p>AI制作・活用のほか、FC代理店業にも取り組んでいます。</p>
            <p>このページは、AI WORKSとは別の活動を紹介するための案内ページです。</p>
          </div>
        </div>
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="overflow-hidden rounded-[2rem] bg-fog">
          <img src={visualPack} alt="" className="aspect-[1.2/1] w-full object-cover opacity-90" />
        </motion.div>
      </Reveal>

      <Reveal delay={0.08} className="rounded-card border border-line bg-white/86 p-6 shadow-soft sm:p-8">
        <div className="grid gap-5 sm:grid-cols-[112px_1fr] sm:items-center">
          <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-teal/12 text-blue-deep">
            <Users className="h-12 w-12" strokeWidth={1.5} aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-2xl font-semibold text-ink">活動について</h2>
            <p className="mt-4 text-base leading-8 text-ink">地域のお店や小規模事業者に向けた取り組みとして、FC代理店業にも関わっています。</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="rounded-card border border-line bg-white/82 p-6 text-center shadow-soft sm:p-8">
        <h2 className="text-3xl font-semibold text-ink">AI WORKSとの関係</h2>
        <span className="mx-auto mt-4 block h-1.5 w-20 rounded-full bg-gradient-to-r from-teal via-blue to-line" aria-hidden="true" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink">
          AIで培った制作力や整理力を活かしながら、現場で役立つ支援につなげていくことを目指しています。
        </p>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {relationCards.map(({ title, body, icon: Icon, color }) => (
            <motion.article key={title} whileHover={{ y: -5 }} className="rounded-card border border-line bg-white/86 p-5 shadow-float">
              <span className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full ${color}`}>
                <Icon className="h-10 w-10" strokeWidth={1.6} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink">{body}</p>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.16} className="grid gap-6 rounded-card border border-line bg-white/84 p-6 shadow-soft lg:grid-cols-[1fr_0.78fr] lg:items-center lg:p-8">
        <div className="overflow-hidden rounded-[1.7rem] border border-line bg-fog">
          <img src={lpPreview} alt="" className="aspect-[1.35/1] w-full object-cover" />
        </div>
        <div className="space-y-5">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal/12 text-blue-deep">
            <ExternalLink className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
          </span>
          <h2 className="text-3xl font-semibold text-ink">専用LP</h2>
          <span className="block h-1.5 w-20 rounded-full bg-gradient-to-r from-teal to-blue" aria-hidden="true" />
          <p className="text-base leading-8 text-ink">詳しい内容は専用ページでご覧ください。</p>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            href="/"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue px-8 text-base font-semibold text-white shadow-float"
          >
            専用LPを見る
            <ExternalLink className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        </div>
      </Reveal>

      <Reveal delay={0.2} className="grid items-center gap-5 rounded-card border border-line bg-white/70 p-5 shadow-float sm:grid-cols-[1fr_auto]">
        <p className="text-base leading-8 text-ink">必要な方だけ見られるよう、下部の関連活動として置いています。</p>
        <img src={iconPack} alt="" className="h-24 w-44 rounded-2xl object-contain opacity-70" />
      </Reveal>
    </div>
  );
}
