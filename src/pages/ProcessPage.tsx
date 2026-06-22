import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Clock3, Ear, FlaskConical, MonitorCog, Pencil, RefreshCcw, Sprout } from "lucide-react";
import { FloatingAsset, Reveal } from "../components/animation";
import { StageLabel } from "../components/ui";
import type { Accent } from "../data/site";

const steps = [
  { no: 1, stage: "STAGE 1", title: "聞く", body: "今の仕事、困っていること、作ってみたいものを整理します。", icon: Ear, accent: "blue" as Accent },
  { no: 2, stage: "STAGE 2", title: "試す", body: "AIでたたき台を作り、画面や文章として見える形にします。", icon: FlaskConical, accent: "teal" as Accent },
  { no: 3, stage: "STAGE 3", title: "形にする", body: "使いやすいページ、ツール、画像、資料に整えます。", icon: Pencil, accent: "purple" as Accent },
  { no: 4, stage: "STAGE 4", title: "使いながら直す", body: "実際に使ってみて、必要なところを少しずつ改善します。", icon: RefreshCcw, accent: "orange" as Accent },
];

const accent = {
  blue: "text-blue-deep bg-blue-deep border-blue/35 from-blue/20",
  teal: "text-teal bg-teal border-teal/35 from-teal/20",
  purple: "text-purple bg-purple border-purple/35 from-purple/20",
  orange: "text-orange bg-orange border-orange/35 from-orange/20",
};

export function ProcessPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <section className="relative overflow-hidden rounded-card border border-line bg-white/72 px-5 py-12 text-center shadow-soft">
          <FloatingAsset className="absolute left-5 top-12 hidden h-24 w-24 rotate-[-4deg] opacity-60 sm:block" distance={7}>
            <img src="/assets/generated/visuals/hero-gallery.png" alt="" className="h-full w-full rounded-2xl object-cover" />
          </FloatingAsset>
          <FloatingAsset className="absolute right-5 top-16 hidden h-24 w-24 rotate-[5deg] opacity-60 sm:block" distance={5}>
            <img src="/assets/generated/icons/refresh.png" alt="" className="h-full w-full rounded-2xl object-contain" />
          </FloatingAsset>
          <StageLabel>STAGE 04 / PROCESS</StageLabel>
          <h1 className="mt-5 text-[44px] font-semibold leading-tight tracking-normal text-ink sm:text-6xl">つくり方</h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-ink sm:text-lg">
            最初から大きく作り込むよりも、
            <br />
            小さく試して、見て、直すことを
            <br />
            大切にしています。
          </p>
        </section>
      </Reveal>

      <section className="relative space-y-4">
        <motion.div
          className="absolute bottom-12 left-8 top-8 hidden border-l-2 border-dotted border-blue/45 sm:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />
        {steps.map((step, index) => (
          <Reveal key={step.stage} delay={index * 0.05}>
            <motion.article
              whileHover={{ y: -3 }}
              className="relative grid gap-4 rounded-card border border-line bg-white/86 p-5 shadow-float sm:grid-cols-[4rem_10rem_1fr] sm:items-center"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-full text-2xl font-bold text-white ${accent[step.accent].split(" ")[1]}`}>
                {step.no}
              </span>
              <div className={`flex aspect-square max-w-36 items-center justify-center rounded-full bg-gradient-to-br ${accent[step.accent].split(" ")[3]} to-white`}>
                <step.icon className={`h-16 w-16 ${accent[step.accent].split(" ")[0]}`} strokeWidth={1.45} aria-hidden="true" />
              </div>
              <div>
                <span className={`inline-flex rounded-lg px-4 py-1 text-sm font-bold text-white ${accent[step.accent].split(" ")[1]}`}>
                  {step.stage}
                </span>
                <h2 className="mt-3 text-3xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-2 text-base leading-8 text-ink">{step.body}</p>
              </div>
            </motion.article>
          </Reveal>
        ))}
        <div className="hidden pl-8 text-blue/60 sm:block">
          <ArrowDown className="h-8 w-8" aria-hidden="true" />
        </div>
      </section>

      <Reveal>
        <section className="rounded-card bg-teal/10 p-5 shadow-float">
          <h2 className="flex items-center justify-center gap-4 text-xl font-semibold text-teal">
            <span className="h-px flex-1 border-t border-dotted border-teal/50" />
            小さく始める理由
            <span className="h-px flex-1 border-t border-dotted border-teal/50" />
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { label: "早く見える", icon: Clock3 },
              { label: "直しやすい", icon: Pencil },
              { label: "無理なく続く", icon: Sprout },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-3 font-semibold text-ink shadow-float">
                <item.icon className="h-6 w-6 text-teal" aria-hidden="true" />
                {item.label}
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-card border border-orange/25 bg-orange/10 p-5 shadow-float">
          <StageLabel accent="orange">たとえば</StageLabel>
          <div className="mt-5 grid gap-3 text-center font-semibold text-ink sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            <Example icon={MonitorCog} label="売上を見たい" />
            <ArrowRight className="mx-auto hidden h-6 w-6 text-muted sm:block" aria-hidden="true" />
            <Example icon={MonitorCog} label="管理画面の試作" />
            <ArrowRight className="mx-auto hidden h-6 w-6 text-muted sm:block" aria-hidden="true" />
            <Example icon={RefreshCcw} label="使いながら項目を調整" />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <p className="rounded-card border border-line bg-white/86 p-5 text-base font-semibold leading-8 text-ink shadow-float">
          完璧を目指すより、まず動くこと。一緒に、小さくてちょうどいい形を見つけていきましょう。
        </p>
      </Reveal>
    </div>
  );
}

function Example({ icon: Icon, label }: { icon: typeof MonitorCog; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-float">
        <Icon className="h-8 w-8 text-orange" aria-hidden="true" />
      </span>
      {label}
    </div>
  );
}
