import type { Metadata } from "next";
import Image from "next/image";
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
    category: "ブログ",
    image: "/images/blog-3d-surveying-main.jpeg",
  },
  {
    slug: "open",
    date: "2020.07.21",
    dateTime: "2020-07-21",
    title: "Webサイトを公開しました",
    description: "株式会社SurveySolutionのWebサイトを公開しました。3D測量に関するお問い合わせはお気軽にどうぞ。",
    category: "ニュース",
    image: "/images/blog-mv.jpg",
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
        title="ブログ"
        subtitle="BLOG"
        image="/images/blog-mv.jpg"
        breadcrumbItems={[{ name: "ブログ", path: "/blog" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          {/* 記事一覧 */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={i} className="border-b border-gray-200 pb-8">
                <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row gap-6 group">
                  {/* サムネイル画像 */}
                  <div className="md:w-1/3 shrink-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  {/* 記事情報 */}
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-3 mb-3">
                      <time dateTime={post.dateTime} className="text-sm tracking-wider text-gray-500">
                        {post.date}
                      </time>
                      <span className="text-xs bg-primary text-white px-3 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors leading-relaxed">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* カテゴリ・最新記事サイドバー（モバイルでは下部に表示） */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* カテゴリ */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">カテゴリ</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-gray-700 hover:text-primary cursor-pointer">ニュース</span>
                </li>
                <li>
                  <span className="text-sm text-gray-700 hover:text-primary cursor-pointer">ブログ</span>
                </li>
              </ul>
            </div>

            {/* 最新の記事 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">最新の記事</h3>
              <ul className="space-y-3">
                {posts.map((post, i) => (
                  <li key={i}>
                    <Link href={`/blog/${post.slug}`} className="text-sm text-gray-700 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
