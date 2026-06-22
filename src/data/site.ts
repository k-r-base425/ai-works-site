import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  FileText,
  Headphones,
  Image,
  Monitor,
  Pencil,
  RefreshCcw,
  Search,
  Store,
  UserRoundCheck,
} from "lucide-react";
import { assetPath } from "../lib/paths";

export type SiteRoute = {
  path: string;
  label: string;
  navLabel?: string;
  title: string;
  stage: string;
  navGroup?: "primary" | "secondary";
};

export type Accent = "blue" | "teal" | "purple" | "orange";

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

export type Work = {
  title: string;
  summary: string;
  href: string;
  tags: string[];
  accent: Accent;
  image: string;
};

export type Stage = {
  stage: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: Accent;
};

export type Memo = {
  title: string;
  body: string;
  accent: Accent;
};

export const routes: SiteRoute[] = [
  { path: "/", label: "Top", title: "AI WORKS", stage: "STAGE 01", navGroup: "secondary" },
  { path: "/works", label: "Works", navLabel: "作品", title: "Works", stage: "STAGE 02", navGroup: "primary" },
  { path: "/works/ai-works", label: "Detail", title: "AI WORKS Detail", stage: "STAGE 03", navGroup: "secondary" },
  { path: "/can-do", label: "Can Do", navLabel: "できること", title: "Can Do", stage: "STAGE 04", navGroup: "primary" },
  { path: "/process", label: "Process", title: "Process", stage: "STAGE 05", navGroup: "secondary" },
  { path: "/notes", label: "Notes", title: "Notes", stage: "STAGE 06", navGroup: "secondary" },
  { path: "/profile", label: "Profile", title: "Profile", stage: "STAGE 07", navGroup: "secondary" },
  { path: "/related", label: "Related", navLabel: "活動", title: "Related Activity", stage: "STAGE 08", navGroup: "primary" },
  { path: "/qr-guide", label: "QR Guide", title: "QR Guide", stage: "STAGE 09", navGroup: "secondary" },
];

export const features: Feature[] = [
  { title: "Web・LP制作", description: "小さく試せるページ制作。", icon: Monitor, accent: "blue" },
  { title: "業務ツール制作", description: "日々の作業に合う仕組み。", icon: BarChart3, accent: "teal" },
  { title: "画像・ビジュアル制作", description: "用途に合わせた見せ方。", icon: Image, accent: "purple" },
  { title: "資料・文章づくり", description: "伝わる形に整える補助。", icon: FileText, accent: "orange" },
  { title: "AI活用レクチャー", description: "使いながら覚える時間。", icon: UserRoundCheck, accent: "blue" },
];

export const works: Work[] = [
  {
    title: "AI WORKS",
    summary: "AI制作と活用の小さな展示室。",
    href: "/works/ai-works",
    tags: ["自主制作", "ポートフォリオ"],
    accent: "teal",
    image: assetPath("/assets/generated/visuals/hero-gallery.png"),
  },
  {
    title: "Swipe LP Demo",
    summary: "スマートフォン向けLPの試作。",
    href: "/works",
    tags: ["デモ制作", "LP"],
    accent: "purple",
    image: assetPath("/assets/generated/visuals/works-thumbnails.png"),
  },
];

export const stages: Stage[] = [
  { stage: "STAGE 1", title: "聞く", description: "目的と今ある素材を確認します。", icon: Headphones, accent: "blue" },
  { stage: "STAGE 2", title: "試す", description: "小さく作って方向を見ます。", icon: Search, accent: "teal" },
  { stage: "STAGE 3", title: "形にする", description: "使える画面や資料に整えます。", icon: Pencil, accent: "purple" },
  { stage: "STAGE 4", title: "直す", description: "使いながら必要な調整をします。", icon: RefreshCcw, accent: "orange" },
];

export const memos: Memo[] = [
  { title: "小さく始める", body: "はじめから大きく作り込まず、使う場面に合わせて整えます。", accent: "teal" },
  { title: "見せ方を揃える", body: "文章、画像、導線の調子をそろえて、無理なく伝わる形にします。", accent: "blue" },
  { title: "記録を残す", body: "試したことや直したことを残し、次の制作に活かします。", accent: "purple" },
];

export const profile = {
  name: "Ren Kawabata / 河端 蓮",
  role: "小規模事業者向け AI 制作・活用パートナー",
  image: assetPath("/assets/generated/visuals/profile-portrait.png"),
};

export const relatedActivity = {
  title: "Related Activity / もうひとつの活動",
  description: "AI制作・活用のほか、別領域の小さな活動も扱います。",
  icon: Store,
  href: "/related",
};

export const stageDots = routes.slice(0, 4).map((route) => route.stage);
