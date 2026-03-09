import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://surveysolution.pro";
  const now = new Date();
  const blogDate = new Date("2026-02-17");

  return [
    // トップ
    { url: baseUrl, lastModified: now, changeFrequency: "monthly", priority: 1 },

    // サービス
    { url: `${baseUrl}/service`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/service/laser-scan`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service/point-cloud`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service/3d-modeling`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // 業界別ソリューション
    { url: `${baseUrl}/solution/construction`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/architecture`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/plant`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/infrastructure`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/solution/heritage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // 料金
    { url: `${baseUrl}/price`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // 導入事例
    { url: `${baseUrl}/case`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/case/highway`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/case/renovation`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/case/plant-piping`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },

    // 活用事例
    { url: `${baseUrl}/use-case`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/use-case/mountain-forest-survey`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/tree-branch-mapping`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/tree-burial-cemetery`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/garden-mapping`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/basement-survey`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/floor-levelness`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/column-tilt`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/building-tilt`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/as-built-drawings`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/rooftop-survey`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/adjacent-window-survey`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/underground-connection`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/disaster-survey`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/shadow-simulation`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/simplified-site-plan`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/aerial-encroachment`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/site-heatmap`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/use-case/climbing-kiln-mesh`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },

    // その他
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/profile`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },

    // ブログ一覧
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

    // ブログ記事 ★★★
    { url: `${baseUrl}/blog/what-is-3d-surveying`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/3d-surveying-cost`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/drone-surveying-cost`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/choose-3d-surveying-company`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/3d-vs-traditional-surveying`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/i-construction-3d-surveying`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.7 },

    // ブログ記事 ★★
    { url: `${baseUrl}/blog/point-cloud-guide`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/laser-scanner-guide`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/drone-vs-laser`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/bim-3d-scan`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/labor-shortage-solution`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/no-drawings-solution`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/surveying-dx`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/3d-surveying-use-cases`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.6 },

    // ブログ記事 ★
    { url: `${baseUrl}/blog/soil-volume-3d`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/slope-3d-surveying`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/bridge-inspection-3d`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/tunnel-cross-section-3d`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/plant-piping-3d-model`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/factory-layout-3d`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/cultural-heritage-3d-archive`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/3d-surveying-glossary`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/blog/3d-surveying-trends-2026`, lastModified: blogDate, changeFrequency: "yearly", priority: 0.5 },

    // 既存ブログ記事
    { url: `${baseUrl}/blog/3d-surveying`, lastModified: new Date("2021-01-21"), changeFrequency: "yearly", priority: 0.6 },
    { url: `${baseUrl}/blog/open`, lastModified: new Date("2020-07-21"), changeFrequency: "yearly", priority: 0.5 },
  ];
}
