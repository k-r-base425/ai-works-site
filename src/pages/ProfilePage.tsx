import { motion } from "framer-motion";
import { BarChart3, FileText, FolderOpen, ImageIcon, Lightbulb, Monitor, RefreshCcw, Sprout, Users } from "lucide-react";
import { FloatingAsset, Reveal } from "../components/animation";
import { Badge, StageDots, StageLabel } from "../components/ui";
import { profile } from "../data/site";
import { assetPath } from "../lib/paths";

const visualPack = assetPath("/assets/generated/visuals/hero-gallery.png");
const iconPack = assetPath("/assets/generated/icons/document.png");

const workKinds = [
  { title: "Web・LP", icon: Monitor, accent: "blue" },
  { title: "業務ツール", icon: BarChart3, accent: "teal" },
  { title: "AI画像", icon: ImageIcon, accent: "purple" },
  { title: "資料づくり", icon: FileText, accent: "orange" },
] as const;

const values = [
  { title: "小さく試す", body: "最初から完璧を目指さず、小さく作って確かめます。", icon: Sprout, color: "text-blue-deep bg-blue/12" },
  { title: "見てわかる形にする", body: "専門用語よりも、見てわかる・伝わる形を大事にします。", icon: Lightbulb, color: "text-teal bg-teal/14" },
  { title: "使いながら直す", body: "使ってもらいながら、一緒に少しずつ良くしていきます。", icon: RefreshCcw, color: "text-purple bg-purple/14" },
] as const;

const activity = [
  { title: "AI WORKSを公開", body: "名刺QRから見てもらうための、AI制作・活用の紹介ページを公開。", date: "2025.05", icon: FolderOpen },
  { title: "業務ツールを試作", body: "売上や利益を見える化する、小規模事業者向けの管理アプリを試作。", date: "2024.12", icon: RefreshCcw },
  { title: "画像生成サンプルを制作", body: "SNSやLPで使えるAI画像の制作サンプルをいくつか作成。", date: "2024.08", icon: ImageIcon },
] as const;

export function ProfilePage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal className="relative overflow-hidden rounded-card border border-line bg-white/76 p-6 shadow-soft sm:p-10">
        <FloatingAsset className="absolute right-4 top-2 hidden w-72 opacity-70 sm:block" distance={6}>
          <img src={visualPack} alt="" className="h-full w-full rounded-[2rem] object-cover object-[70%_8%]" />
        </FloatingAsset>
        <div className="relative z-10 space-y-5">
          <StageLabel accent="purple">STAGE 06 / PROFILE</StageLabel>
          <h1 className="text-[40px] font-semibold leading-tight tracking-normal text-ink sm:text-7xl">つくっている人</h1>
          <StageDots count={6} active={5} />
        </div>
      </Reveal>

      <Reveal delay={0.08} className="rounded-card border border-line bg-white/86 p-5 shadow-soft sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-[2rem] bg-fog">
            <img src={profile.image} alt="" className="aspect-[4/5] w-full object-cover object-[8%_44%]" />
          </motion.div>
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-semibold tracking-normal text-ink sm:text-5xl">{profile.name}</h2>
              <p className="mt-3 text-base font-semibold text-purple">{profile.role}</p>
            </div>
            <p className="text-base leading-9 text-ink">
              個人事業主として日々の業務にAIを取り入れながら、Web制作、LP制作、業務ツール、画像制作、資料づくりなどを試作しています。
            </p>
            <p className="text-base leading-9 text-ink">
              AIを難しい技術としてではなく、仕事を少し楽にしたり、アイデアを形にしたりするための道具として使っています。
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge accent="teal">試して学ぶ</Badge>
              <Badge accent="purple">つくって改善</Badge>
              <Badge accent="blue">ひとりでやっています</Badge>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-ink">
          <span className="h-4 w-4 rounded bg-blue" aria-hidden="true" />
          つくっているもの
        </h2>
        <div className="grid gap-4 sm:grid-cols-4">
          {workKinds.map(({ title, icon: Icon, accent }) => (
            <motion.article key={title} whileHover={{ y: -5 }} className="rounded-card border border-line bg-white/82 p-5 text-center shadow-float">
              <Icon className={`mx-auto h-14 w-14 ${accent === "teal" ? "text-teal" : accent === "purple" ? "text-purple" : accent === "orange" ? "text-orange" : "text-blue-deep"}`} strokeWidth={1.6} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.16} className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-ink">
          <span className="h-4 w-4 rounded bg-teal" aria-hidden="true" />
          大切にしていること
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map(({ title, body, icon: Icon, color }) => (
            <motion.article key={title} whileHover={{ y: -4 }} className="rounded-card border border-line bg-white/82 p-5 shadow-float">
              <span className={`inline-flex h-16 w-16 items-center justify-center rounded-full ${color}`}>
                <Icon className="h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink">{body}</p>
            </motion.article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2} className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-ink">
          <span className="h-4 w-4 rounded bg-orange" aria-hidden="true" />
          活動の記録
        </h2>
        <div className="space-y-3 border-l-2 border-dashed border-blue/35 pl-5">
          {activity.map(({ title, body, date, icon: Icon }) => (
            <article key={title} className="relative rounded-2xl border border-line bg-white/78 p-4 shadow-float">
              <span className="absolute -left-[1.85rem] top-6 h-4 w-4 rounded-full border-4 border-white bg-blue shadow" />
              <div className="grid gap-3 sm:grid-cols-[56px_1fr_auto] sm:items-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue/10 text-blue-deep">
                  <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                </div>
                <time className="text-sm text-muted">{date}</time>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.24} className="rounded-card border border-line bg-white/78 p-4 shadow-float">
        <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
          <div className="flex flex-wrap gap-3">
            <Badge accent="blue">作品を見る</Badge>
            <Badge accent="teal">AIでできること</Badge>
            <Badge accent="purple">AI活用メモ</Badge>
          </div>
          <img src={iconPack} alt="" className="h-20 w-44 rounded-2xl object-contain opacity-75" />
        </div>
        <p className="mt-4 text-sm leading-7 text-muted">AIを使って、仕事を少し面白く、楽に。そんな小さな一歩を一緒に探していけたらうれしいです。</p>
      </Reveal>

      <div className="sr-only">
        <Users />
      </div>
    </div>
  );
}
