import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, Clock3, Ear, Flag, FlaskConical, Map, MonitorCog, Pencil, RefreshCcw, Route, Sprout } from "lucide-react";
import { Reveal } from "../components/animation";
import { IconFromSheet, RpgLabel, RpgPanel } from "../components/ui";
import type { Accent } from "../data/site";

const steps = [
  { no: 1, stage: "STAGE 1", title: "聞く", body: "今の仕事、困っていること、作ってみたいものを整理します。", icon: Ear, accent: "blue" as Accent },
  { no: 2, stage: "STAGE 2", title: "試す", body: "AIでたたき台を作り、画面や文章として見える形にします。", icon: FlaskConical, accent: "teal" as Accent },
  { no: 3, stage: "STAGE 3", title: "形にする", body: "使いやすいページ、ツール、画像、資料に整えます。", icon: Pencil, accent: "purple" as Accent },
  { no: 4, stage: "STAGE 4", title: "使いながら直す", body: "実際に使ってみて、必要なところを少しずつ改善します。", icon: RefreshCcw, accent: "orange" as Accent },
];

const reasons = [
  { label: "早く見える", icon: Clock3, accent: "teal" as Accent },
  { label: "直しやすい", icon: Pencil, accent: "purple" as Accent },
  { label: "無理なく続く", icon: Sprout, accent: "orange" as Accent },
];

const sampleRoute = [
  { label: "売上を見たい", icon: MonitorCog, accent: "teal" as Accent },
  { label: "管理画面の試作", icon: MonitorCog, accent: "blue" as Accent },
  { label: "使いながら項目を調整", icon: RefreshCcw, accent: "orange" as Accent },
];

export function ProcessPage() {
  return (
    <div className="space-y-8 pb-8">
      <Reveal>
        <RpgPanel className="-mx-4 px-5 py-7 sm:mx-0 sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#07121b_0%,#10283b_50%,#173a28_100%)]" aria-hidden="true" />
          <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,242,167,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,242,167,0.22)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden="true" />
          <div className="relative z-10 grid gap-7 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <RpgLabel>STAGE 05 / PROCESS</RpgLabel>
                <span className="inline-flex items-center gap-2 rounded-sm border border-[#8fdfff]/70 bg-[#0e2a3b] px-3 py-1.5 text-[11px] font-black tracking-[0.16em] text-[#9de3ff]">
                  <Route className="h-4 w-4" aria-hidden="true" />
                  ROUTE MAP
                </span>
              </div>
              <h1 className="mt-6 text-[44px] font-black leading-tight tracking-normal text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:text-6xl">
                つくり方
              </h1>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#d9eff6] sm:text-lg">
                最初から大きく作り込むよりも、小さく試して、見て、直すことを大切にしています。
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {steps.map((step) => (
                  <span key={step.stage} className="rounded-md border-2 border-[#8fdfff]/75 bg-[#07121b]/70 px-3 py-3 text-center text-sm font-black text-[#9de3ff] shadow-[0_5px_0_rgba(0,0,0,0.3)]">
                    {step.no}. {step.title}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-md border-[7px] border-[#d7bb68] bg-[#07121b] p-4 shadow-[0_24px_48px_rgba(0,0,0,0.34)]">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] sm:items-center">
                {steps.map((step, index) => (
                  <RouteNode key={step.stage} step={step} showArrow={index < steps.length - 1} />
                ))}
              </div>
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <section className="space-y-5">
        <div className="flex items-center justify-between gap-4 border-b-2 border-[#d7bb68] pb-3">
          <div className="flex items-center gap-3">
            <Map className="h-6 w-6 text-[#d31572]" strokeWidth={1.8} />
            <div>
              <RpgLabel>STAGE ROUTE</RpgLabel>
              <h2 className="mt-2 text-2xl font-black text-ink">制作の進め方</h2>
            </div>
          </div>
          <div className="hidden gap-2 sm:flex">
            {["bg-teal", "bg-[#d31572]", "bg-orange"].map((color) => (
              <span key={color} className={`h-3 w-3 rounded-full ${color}`} />
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.stage} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -3 }}
                className="grid h-full gap-4 rounded-md border-2 border-[#d7bb68] bg-[#07121b] p-4 text-[#eef8ff] shadow-float sm:grid-cols-[6rem_1fr]"
              >
                <div className="flex flex-col items-center justify-center gap-3 rounded-sm border border-[#f2e9c6]/55 bg-[#10283b] p-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-sm font-black text-[#fff2a7]">
                    {step.no}
                  </span>
                  <IconFromSheet icon={step.icon} accent={step.accent} />
                </div>
                <div className="min-w-0">
                  <RpgLabel>{step.stage}</RpgLabel>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-white">{step.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#d9eff6] sm:text-base">{step.body}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-7 w-7 text-[#fff2a7]" strokeWidth={1.8} aria-hidden="true" />
              <div>
                <RpgLabel>ROUTE BONUS</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-white">小さく始める理由</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {reasons.map((reason) => (
                <article key={reason.label} className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4 text-center shadow-float">
                  <div className="flex justify-center">
                    <IconFromSheet icon={reason.icon} accent={reason.accent} />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-white">{reason.label}</h3>
                </article>
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <Flag className="h-7 w-7 text-[#fff2a7]" strokeWidth={1.8} aria-hidden="true" />
              <div>
                <RpgLabel>SAMPLE ROUTE</RpgLabel>
                <h2 className="mt-2 text-2xl font-black text-white">たとえば</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-center font-black text-[#eef8ff] lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
              {sampleRoute.map((item, index) => (
                <SampleNode key={item.label} item={item} showArrow={index < sampleRoute.length - 1} />
              ))}
            </div>
          </div>
        </RpgPanel>
      </Reveal>

      <Reveal>
        <RpgPanel className="p-5 sm:p-6">
          <div className="relative z-10 flex items-center gap-4">
            <Sprout className="h-10 w-10 shrink-0 text-[#fff2a7]" strokeWidth={1.6} aria-hidden="true" />
            <div>
              <RpgLabel>NEXT STEP</RpgLabel>
              <p className="mt-3 text-base font-bold leading-8 text-[#eef8ff]">
                完璧を目指すより、まず動くこと。一緒に、小さくてちょうどいい形を見つけていきましょう。
              </p>
            </div>
          </div>
        </RpgPanel>
      </Reveal>
    </div>
  );
}

function RouteNode({
  step,
  showArrow,
}: {
  step: (typeof steps)[number];
  showArrow: boolean;
}) {
  return (
    <>
      <div className="rounded-sm border border-[#f2e9c6]/60 bg-[#10283b] p-3 text-center">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-sm border border-[#fff2a7] bg-[#07121b] text-sm font-black text-[#fff2a7]">
          {step.no}
        </span>
        <div className="mt-3 flex justify-center">
          <step.icon className="h-7 w-7 text-[#9de3ff]" strokeWidth={1.7} aria-hidden="true" />
        </div>
        <p className="mt-2 text-sm font-black text-white">{step.title}</p>
      </div>
      {showArrow ? (
        <div className="flex justify-center text-[#fff2a7]">
          <ArrowRight className="hidden h-6 w-6 sm:block" aria-hidden="true" />
          <span className="h-6 border-l border-[#fff2a7]/70 sm:hidden" aria-hidden="true" />
        </div>
      ) : null}
    </>
  );
}

function SampleNode({
  item,
  showArrow,
}: {
  item: { label: string; icon: LucideIcon; accent: Accent };
  showArrow: boolean;
}) {
  return (
    <>
      <div className="rounded-md border border-[#d7bb68]/80 bg-[#10283b] p-4">
        <div className="flex justify-center">
          <IconFromSheet icon={item.icon} accent={item.accent} />
        </div>
        <p className="mt-3 text-sm leading-6 text-white">{item.label}</p>
      </div>
      {showArrow ? (
        <div className="flex justify-center text-[#fff2a7]">
          <ArrowRight className="hidden h-6 w-6 lg:block" aria-hidden="true" />
          <span className="h-6 border-l border-[#fff2a7]/70 lg:hidden" aria-hidden="true" />
        </div>
      ) : null}
    </>
  );
}
