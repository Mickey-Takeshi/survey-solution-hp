import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
  description:
    "3D測量（三次元測量）とは何か？レーザースキャナやドローンを使った測量方法、メリット、住宅・工場・遺跡・文化財など活用場所を詳しく解説。京都の3D測量専門会社が分かりやすく紹介します。",
  keywords: ["3D測量", "三次元測量", "レーザースキャナ", "点群データ", "3D測量 メリット", "3D測量 活用"],
  alternates: { canonical: "/blog/3d-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
  description: "3D測量（三次元測量）の基本から活用方法まで詳しく解説。建設・土木・文化財保存など様々な分野での活用事例を紹介します。",
  datePublished: "2021-01-21",
  dateModified: "2021-01-21",
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
    "@id": "https://surveysolution.pro/blog/3d-surveying",
  },
};

export default function Article3DSurveyingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        as="p"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "3D測量で出来ることは？", path: "/blog/3d-surveying" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2021-01-21" className="text-sm tracking-wider text-gray-500">
                2021.01.21
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                技術解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-3d-surveying-main.jpeg"
              alt="3D測量のイメージ - 3Dレーザースキャナによる高精度測量"
              fill
              className="object-cover"
            />
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-loose text-gray-700 mb-6">
              近年、建設・土木業界を中心に注目を集めている「3D測量」。従来の測量方法と比べて、より詳細なデータを効率的に取得できることから、様々な分野で活用が広がっています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-8">
              本記事では、3D測量の基本的な仕組みから、具体的な方法、メリット、そして活用場所まで詳しく解説します。
            </p>

            <h2 className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量とは？
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              <strong>3D測量（三次元測量）</strong>とは、土地や建物、構造物を立体的にデータ化する測量技術です。従来の平面的な測量と異なり、対象物の形状を無数の三次元座標データ（点群データ）として取得できます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-8">
              取得したデータは、図面作成はもちろん、シミュレーションや変位解析など、様々な用途に活用できます。
            </p>

            <h2 className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の方法
            </h2>

            <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
              1. レーザースキャナによる測量
            </h3>
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-3d-surveying-01.jpeg"
                alt="3Dレーザースキャナによる測量の様子"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              <strong>3Dレーザースキャナ</strong>は、レーザー光を対象物に照射し、その反射を検出することで距離を計測します。1秒間に数十万〜数百万点もの情報を取得できるため、短時間で高密度なデータを得られます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              スキャナには以下のタイプがあります：
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>地上型（設置型）</strong>：三脚に設置して使用。広範囲の建物や構造物の計測に最適</li>
              <li><strong>ハンドヘルド型</strong>：手持ちで移動しながら計測。狭所や複雑な形状の計測に威力を発揮</li>
              <li><strong>車載型・MMS</strong>：車両に搭載して走行しながら計測。道路や街区の広域計測に使用</li>
            </ul>

            <h3 className="text-lg font-bold text-gray-800 mt-8 mb-3">
              2. ドローンによる測量
            </h3>
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-3d-surveying-02.jpeg"
                alt="ドローンによる3D測量"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base leading-loose text-gray-700 mb-8">
              ドローンにカメラを搭載し、上空から大量の写真を撮影。それらの画像を合成・解析（フォトグラメトリ）することで3Dモデルを作成します。広大な土地や屋根など、地上からアクセスしにくい場所の計測に適しています。
            </p>

            <h2 className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量のメリット
            </h2>
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-3d-surveying-03.jpeg"
                alt="3D測量のメリット - 高精度なデータ取得"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">広範囲を短時間で計測</strong>
                    <p className="text-sm text-gray-600 mt-1">従来の測量では数日かかる現場も、数時間で完了できるケースがあります</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">最小限の人員で実施可能</strong>
                    <p className="text-sm text-gray-600 mt-1">1〜2名のオペレーターで効率的にデータ取得が可能</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">高精度なデータ</strong>
                    <p className="text-sm text-gray-600 mt-1">ミリメートル単位の精度で計測。複雑な形状も正確に記録</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">デジタルデータとして活用</strong>
                    <p className="text-sm text-gray-600 mt-1">CAD図面作成、3Dモデル化、BIM/CIM連携など幅広い活用が可能</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <strong className="text-gray-800">危険な場所も安全に計測</strong>
                    <p className="text-sm text-gray-600 mt-1">非接触で計測できるため、崖や老朽化した構造物も離れた位置から測量</p>
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の活用場所
            </h2>
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-3d-surveying-04.jpeg"
                alt="3D測量の活用場所 - 建設現場での活用"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は、以下のような様々な分野で活用されています：
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">建設・建築</h4>
                <p className="text-sm text-gray-600">住宅配置計測、既存建物の図面作成、建物の傾き調査</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">工場・プラント</h4>
                <p className="text-sm text-gray-600">設備配置の現況把握、配管ルート計画、改修工事の事前調査</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">土木・インフラ</h4>
                <p className="text-sm text-gray-600">道路・橋梁の点検、トンネル内空計測、堤防の変位監視</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">文化財・遺跡</h4>
                <p className="text-sm text-gray-600">歴史的建造物のデジタルアーカイブ、遺跡調査、修復計画</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">災害対策</h4>
                <p className="text-sm text-gray-600">土砂災害警戒区域の計測、被災状況の記録、復旧計画</p>
              </div>
              <div className="bg-white border rounded-lg p-4">
                <h4 className="font-bold text-gray-800 mb-2">森林・農業</h4>
                <p className="text-sm text-gray-600">森林資源量調査、地形解析、農地の高低差測量</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
              <Image
                src="/images/blog-3d-surveying-05.jpeg"
                alt="3D測量のまとめ - 点群データの活用"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は、従来の測量では難しかった複雑な形状の計測や、広範囲のデータ取得を可能にする技術です。建設・土木はもちろん、文化財保存や災害対策など、様々な分野で活用が広がっています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-8">
              「こんなことに使えるの？」「うちの現場でも対応できる？」といったご質問がございましたら、お気軽にお問い合わせください。専門スタッフが丁寧にご説明いたします。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              株式会社SurveySolutionでは、お客様の課題に合わせた最適な3D測量をご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                お問い合わせ・無料見積り
              </Link>
              <Link
                href="/service"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                依頼事例を見る
              </Link>
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
