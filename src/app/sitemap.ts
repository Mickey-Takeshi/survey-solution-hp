import type { MetadataRoute } from "next";
import { useCases } from "@/data/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://surveysolution.pro";
  const blogDate = new Date("2026-02-17");
  const useCaseDate = new Date("2026-03-09");

  // 活用事例を動的生成
  const useCaseEntries: MetadataRoute.Sitemap = useCases.map((uc) => ({
    url: `${baseUrl}/use-case/${uc.slug}`,
    lastModified: useCaseDate,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    // トップ
    { url: baseUrl, lastModified: new Date("2026-03-09"), changeFrequency: "monthly", priority: 1 },

    // サービス
    { url: `${baseUrl}/service`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/service/laser-scan`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service/point-cloud`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service/3d-modeling`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },

    // 業界別ソリューション
    { url: `${baseUrl}/solution/construction`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/architecture`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/plant`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/infrastructure`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/heritage`, lastModified: new Date("2026-08-19"), changeFrequency: "monthly", priority: 0.8 },

    // 料金
    { url: `${baseUrl}/price`, lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.8 },

    // 導入事例
    { url: `${baseUrl}/case`, lastModified: new Date("2026-02-24"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case/highway`, lastModified: new Date("2026-02-24"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/case/renovation`, lastModified: new Date("2026-02-20"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/case/plant-piping`, lastModified: new Date("2026-02-20"), changeFrequency: "yearly", priority: 0.7 },

    // 活用事例（データファイルから動的生成）
    { url: `${baseUrl}/use-case`, lastModified: new Date("2026-04-15"), changeFrequency: "monthly", priority: 0.8 },
    ...useCaseEntries,

    // その他
    { url: `${baseUrl}/faq`, lastModified: new Date("2026-03-09"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date("2026-02-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/profile`, lastModified: new Date("2026-02-23"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-02-23"), changeFrequency: "yearly", priority: 0.9 },

    // ブログ一覧
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-07-23"), changeFrequency: "weekly", priority: 0.7 },

    // ブログ記事 ★★★
    { url: `${baseUrl}/blog/3d-surveying`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.9 },
    { url: `${baseUrl}/blog/building-3d-scan`, lastModified: new Date("2026-08-19"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/3d-surveying-cost`, lastModified: new Date("2026-08-19"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/drone-surveying-cost`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/choose-3d-surveying-company`, lastModified: new Date("2026-08-19"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/3d-vs-traditional-surveying`, lastModified: new Date("2026-08-19"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/i-construction-3d-surveying`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.7 },

    // ブログ記事 ★★
    { url: `${baseUrl}/blog/point-cloud-guide`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/laser-scanner-guide`, lastModified: new Date("2026-07-23"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/drone-vs-laser`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/bim-3d-scan`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/labor-shortage-solution`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/no-drawings-solution`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/renovation-3d-scan`, lastModified: new Date("2026-04-15"), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/surveying-dx`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/3d-surveying-use-cases`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },

    // ブログ記事 ★
    { url: `${baseUrl}/blog/3d-surveying-glossary`, lastModified: new Date("2026-08-31"), changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/3d-surveying-trends-2026`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },

  ];
}
