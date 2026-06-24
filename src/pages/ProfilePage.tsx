import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { BarChart3, BookOpenText, FileText, FolderOpen, ImageIcon, Lightbulb, Monitor, RefreshCcw, ShieldCheck, Sprout, UserRound } from "lucide-react";
import { Reveal } from "../components/animation";
import { IconFromSheet, RpgLabel, RpgPanel } from "../components/ui";
import { profile, type Accent } from "../data/site";

const workKinds = [
  { title: "Web・LP", icon: Monitor, accent: "blue" as Accent },
  { title: "業務ツール", icon: BarChart3, accent: "teal" as Accent },
  { title: "AI画像", icon: ImageIcon, accent: "purple" as Accent },
  { title: "資料づくり", icon: FileText, accent: "orange" as Accent },
];

const values = [
  { title: "小さく試す", body: "最初から完璧を目指さず、小さく作って確かめます。", icon: Sprout, accent: "teal" as Accent },
  { title: "見てわかる形にする", body: "専門用語よりも、見てわかる・伝わる形を大事にします。", icon: Lightbulb, accent: "blue" as Accent },
  { title: "使いながら直す", body: "使ってもらいながら、一緒に少しずつ良くしていきます。", icon: RefreshCcw, accent: "purple" as Accent },
];

const activity = [
  { title: "AI WORKSを公開", body: "名刺QRから見てもらうための、AI制作・活用の紹介ページを公開。", date: "2025.05", icon: FolderOpen, accent: "blue" as Accent },
  { title: "業務ツールを試作", body: "売上や利益を見える化する、小規模事業者向けの管理アプリを試作。", date: "2024.12", icon: RefreshCcw, accent: "teal" as Accent },
  { title: "画像生成サンプルを制作", body: "SNSやLPで使えるAI画像の制作サンプルをいくつか作成。", date: "2024.08", icon: ImageIcon, accent: "purple" as Accent },
];

const profileTags = ["試して学ぶ", "つくって改善", "ひとりでやっています"];
const footerTags = ["作品を見る", "AIでできること", "AI活用メモ"];

export function ProfilePage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="-mx-4 px-5 py-7 sm:mx-0 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_50%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,242,167,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.22)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 07 / PROFILE</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  CHARACTER STATUS
                </span>
              </div>
              <h1 className="mt-6 text-[42px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                つくっている人
              </h1>
              <div className="mt-6 rounded-md border border-[#8fdfff]/45 bg-[#0e2a3b]/80 p-4">
                <p className="text-2xl font-black leading-tight text-white sm:text-3xl">{profile.name}</p>
                <p className="mt-3 text-sm font-black leading-7 text-[#9de3ff] sm:text-base">{profile.role}</p>
                <p className="mt-4 text-sm font-semibold leading-7 text-[#d9eff6]">
                  AIを難しい技術としてではなく、仕事を少し楽にしたり、アイデアを形にしたりするための道具として使っています。
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.82fr_1fr] sm:items-stretch">
              <motion.div whileHover={{ y: -4 }} className="overflow-hidden rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
                <img src={profile.image} alt="" className="aspect-[4/5] h-full w-full object-cover object-[8%_44%]" />
              </motion.div>
              <div className="grid gap-3">
                {profileTags.map((tag, index) => (
                  <div key={tag} className="grid grid-cols-[3.5rem_1fr] items-center gap-3 rounded-sm border border-[#f2e9c6]/60 bg-[#10283b] p-3">
                    <span className="rounded-sm border border-[#fff2a7]/80 bg-[#07121b] px-2 py-1 text-center text-[11px] font-black text-[#fff2a7]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-black text-white">{tag}</p>
                  </div>
                ))}
                <div className="rounded-sm border border-[#8fdfff]/40 bg-[#0e2a3b]/90 p-4">
                  <p className="text-[11px] font-black tracking-[0.18em] text-[#9de3ff]">MAIN FIELD</p>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6]">
                    Web制作、LP制作、業務ツール、画像制作、資料づくりなどを試作しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <SectionTitle icon={ShieldCheck} label="SKILL SET" title="つくっているもの" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workKinds.map(({ title, icon, accent }, index) => (
            <Reveal key={title} delay={index * 0.04}>
              <motion.article whileHover={{ y: -4 }} className="h-full rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-center shadow-float">
                <div className="flex justify-center">
                  <IconFromSheet icon={icon} accent={accent} />
                </div>
                <RpgLabel>{`SKILL ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                <h3 className="mt-4 text-lg font-black leading-tight text-white">{title}</h3>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <SectionTitle icon={Lightbulb} label="PASSIVE SKILL" title="大切にしていること" inverted />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {values.map((value, index) => (
                <motion.article key={value.title} whileHover={{ y: -3 }} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 shadow-float">
                  <div className="flex items-center gap-3">
                    <IconFromSheet icon={value.icon} accent={value.accent} />
                    <RpgLabel>{`ABILITY ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  </div>
                  <h3 className="mt-4 text-xl font-black leading-tight text-white">{value.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6]">{value.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <SectionTitle icon={BookOpenText} label="ACTIVITY LOG" title="活動の記録" />
        <div className="space-y-4">
          {activity.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <motion.article whileHover={{ y: -3 }} className="grid gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-[#eef8ff] shadow-float sm:grid-cols-[6.5rem_1fr_auto] sm:items-center">
                <div className="flex items-center gap-4 rounded-sm border border-[#f2e9c6]/55 bg-[#10283b] p-3 sm:flex-col sm:justify-center">
                  <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] px-2 text-sm font-black text-[#fff2a7]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <IconFromSheet icon={item.icon} accent={item.accent} />
                </div>
                <div className="min-w-0">
                  <RpgLabel>{`LOG ${String(index + 1).padStart(2, "0")}`}</RpgLabel>
                  <h3 className="mt-3 text-xl font-black leading-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[#d9eff6]">{item.body}</p>
                </div>
                <time className="rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-2 text-center text-sm font-black text-[#9de3ff]">
                  {item.date}
                </time>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap gap-3">
              {footerTags.map((tag) => (
                <span key={tag} className="rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.14em] text-[#9de3ff]">
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <RpgLabel>NEXT STATUS</RpgLabel>
              <p className="mt-3 text-base font-bold leading-8 text-[#eef8ff]">
                AIを使って、仕事を少し面白く、楽に。そんな小さな一歩を一緒に探していけたらうれしいです。
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
  inverted = false,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  inverted?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 border-b-2 border-[#d7bb68] pb-3">
      <Icon className={`h-6 w-6 ${inverted ? "text-[#fff2a7]" : "text-[#d31572]"}`} strokeWidth={1.8} aria-hidden="true" />
      <div>
        <RpgLabel>{label}</RpgLabel>
        <h2 className={`mt-2 text-2xl font-black ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      </div>
    </div>
  );
}
