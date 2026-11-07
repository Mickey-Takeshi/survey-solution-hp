export type AdvisoryArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  dateTime: string;
  author: "company";
  keywords: string[];
};

export const advisoryArticles = {
  renovation: {
    slug: "renovation-drawings-2025-law",
    title: "大規模リフォームで図面がないときは？2025年法改正後の準備と相談先",
    description: "2025年4月の法改正後、大規模リフォームで図面を求められた方へ。確認申請の対象、既存資料の探し方、現況図と申請図書の違い、建築士と測量会社への相談の順序を解説します。",
    category: "改修・図面準備",
    image: "/images/blog-building-architecture.jpg",
    imageAlt: "既存建物の外観イメージ",
    date: "2026.11.07",
    dateTime: "2026-11-07",
    author: "company",
    keywords: ["大規模リフォーム 図面がない", "2025年法改正 リフォーム", "現況図 確認申請", "4号特例 見直し"],
  },
  purchase: {
    slug: "property-purchase-survey-guide",
    title: "海外顧客の不動産購入前に｜図面の確認から測量まで相談するガイド",
    description: "海外顧客の日本での不動産購入を支援する国内エージェント向けに、購入前の図面確認を解説。盛り土・川沿い・斜面・進入路・旧道の確認事項と、土地・建物の測量、専門家への相談の進め方を整理します。",
    category: "不動産購入・測量",
    image: "/images/blog-business-meeting.jpg",
    imageAlt: "資料を見ながら相談する打ち合わせのイメージ",
    date: "2026.11.07",
    dateTime: "2026-11-07",
    author: "company",
    keywords: ["海外顧客 不動産購入 測量", "土地購入前 相談", "京都 不動産 エージェント 測量", "里道 盛り土 斜面"],
  },
  boundary: {
    slug: "current-condition-boundary-survey",
    title: "現況測量と境界確定測量の違い｜不動産購入前に知りたい図面の使い分け",
    description: "現況測量と境界確定測量は目的と確認範囲が異なります。公図・地積測量図・現況測量図の読み分け、塀や旧道と所有範囲の違い、購入前に確かめたい資料と依頼方法を解説します。",
    category: "不動産購入・測量",
    image: "/images/blog-checklist.jpg",
    imageAlt: "購入前の資料を確認するイメージ",
    date: "2026.11.07",
    dateTime: "2026-11-07",
    author: "company",
    keywords: ["現況測量 境界確定測量 違い", "土地購入 測量図", "公図 地積測量図", "里道 国有地 確認"],
  },
  machiya: {
    slug: "kyoto-machiya-purchase-survey",
    title: "京都の町家購入前に確認したい図面と敷地｜改修計画につなぐ現況把握",
    description: "京都の町家を購入して改修したい方と不動産エージェントへ。既存図面、増改築履歴、路地・接道、境界や旧水路、建物の現況を購入前にどう確認し、設計者と測量会社へつなぐかを解説します。",
    category: "不動産購入・測量",
    image: "/images/blog-checklist.jpg",
    imageAlt: "改修計画に向けて図面を確認するイメージ",
    date: "2026.11.07",
    dateTime: "2026-11-07",
    author: "company",
    keywords: ["京都 町家 購入 図面", "京町家 改修 現況測量", "町家 接道 境界", "古民家 図面がない"],
  },
} satisfies Record<string, AdvisoryArticle>;
