import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Webサイトを公開しました",
  description:
    "株式会社SurveySolutionのWebサイトを公開しました。京都市を拠点に3Dスキャナによる測量サービスを提供しています。3D測量に関するお問い合わせはお気軽にどうぞ。",
  alternates: { canonical: "/blog/open" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Webサイトを公開しました",
  description: "株式会社SurveySolutionのWebサイトを公開しました。3D測量に関するお問い合わせはお気軽にどうぞ。",
  datePublished: "2020-07-21",
  dateModified: "2020-07-21",
  author: {
    "@type": "Person",
    name: "齋藤 大輔",
    jobTitle: "代表取締役・土地家屋調査士",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: {
      "@type": "ImageObject",
      url: "https://surveysolution.pro/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://surveysolution.pro/blog/open",
  },
};

export default function ArticleOpenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "Webサイトを公開しました", path: "/blog/open" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2020-07-21" className="text-sm tracking-wider text-gray-500">
                2020.07.21
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                お知らせ
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              Webサイトを公開しました
            </h1>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-loose text-gray-700 mb-6">
              株式会社SurveySolutionのWebサイトを公開しました。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              当社は京都市中京区を拠点に、3Dスキャナを用いた測量サービスを提供しております。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量により、建物や構造物、土地の形状を高精度な三次元データとして取得。傾き調査、図面作成、歴史的建造物のデジタルアーカイブなど、様々なご要望にお応えいたします。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-8">
              3D測量に関するご相談・お見積りは、お気軽にお問い合わせください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              お電話またはお問い合わせフォームより、お気軽にご連絡ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                お問い合わせ・無料見積り
              </Link>
              <a
                href="tel:075-744-1775"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                <span>TEL: 075-744-1775</span>
              </a>
            </div>
          </div>

          {/* 記事ナビゲーション */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <span>&larr;</span>
              <span>ブログ一覧に戻る</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
