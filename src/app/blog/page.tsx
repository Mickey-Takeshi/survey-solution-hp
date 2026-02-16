import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量ブログ｜技術コラム・活用事例・最新情報",
  description:
    "3D測量・3Dスキャナ測量の専門家が解説するブログ。測量技術の基礎知識、活用事例、業界最新情報、点群データの活用方法などをわかりやすく紹介。建設・土木・文化財保存に携わる方必見。",
  keywords: ["3D測量 ブログ", "3Dスキャナ 技術", "測量 コラム", "点群データ 活用", "測量技術"],
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "3d-surveying",
    date: "2021.01.21",
    dateTime: "2021-01-21",
    title: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
    description: "3D測量（三次元測量）の基本から活用方法まで詳しく解説。建設・土木・文化財保存など様々な分野での活用事例を紹介します。",
    category: "技術解説",
  },
  {
    slug: "open",
    date: "2020.07.21",
    dateTime: "2020-07-21",
    title: "Webサイトを公開しました",
    description: "株式会社SurveySolutionのWebサイトを公開しました。3D測量に関するお問い合わせはお気軽にどうぞ。",
    category: "お知らせ",
  },
];

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "3D測量ブログ｜株式会社SurveySolution",
  description: "3D測量・3Dスキャナ測量の専門家が解説するブログ。測量技術の基礎知識、活用事例、業界最新情報を発信。",
  url: "https://surveysolution.pro/blog",
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: {
      "@type": "ImageObject",
      url: "https://surveysolution.pro/images/logo.png",
    },
  },
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.dateTime,
    author: {
      "@type": "Person",
      name: "齋藤 大輔",
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <PageHeader
        title="3D測量ブログ"
        subtitle="BLOG"
        breadcrumbItems={[{ name: "ブログ", path: "/blog" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="text-sm text-gray-600 mb-8 text-center">
            3D測量・3Dスキャナ測量の専門家が、技術解説や活用事例をわかりやすく紹介します。
          </p>
          <div className="divide-y">
            {posts.map((post, i) => (
              <article
                key={i}
                className="py-6"
              >
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="flex items-center gap-3 mb-2">
                    <time dateTime={post.dateTime} className="text-sm tracking-wider text-gray-500">
                      {post.date}
                    </time>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary text-sm mt-3 group-hover:underline">
                    続きを読む <span>&rarr;</span>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
