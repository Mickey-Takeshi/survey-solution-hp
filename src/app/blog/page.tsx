import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量ブログ｜技術コラム・活用事例・最新情報",
  description:
    "3D測量・3Dスキャナ測量の専門家が解説するブログ。測量技術の基礎知識、費用相場、業者選び、BIM連携、i-Construction対応など、発注者・技術者に役立つ情報をわかりやすく紹介。",
  keywords: ["3D測量 ブログ", "3Dスキャナ 技術", "測量 コラム", "点群データ 活用", "測量技術"],
  alternates: { canonical: "/blog" },
};

const posts: {
  slug: string;
  date: string;
  dateTime: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}[] = [
  // ★★★ 基礎知識
  {
    slug: "what-is-3d-surveying",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説",
    description: "3D測量（三次元測量）の定義・仕組み・3つの計測手法・5つのメリット・活用分野を、初めての方にもわかりやすく解説します。",
    category: "基礎知識",
    image: "/images/blog-construction-survey.jpg",
  },
  // ★★★ 費用・相場
  {
    slug: "3d-surveying-cost",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント",
    description: "3D測量の費用相場を種類別に解説。地上レーザースキャンは30万円〜、ドローン測量は20万円〜。料金を左右する5つの要因と見積もりのポイントを紹介。",
    category: "費用・相場",
    image: "/images/blog-cost-estimate.jpg",
  },
  {
    slug: "drone-surveying-cost",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "ドローン測量の費用はいくら？地上レーザーとのコスト比較",
    description: "ドローン測量と地上レーザースキャンの費用を徹底比較。面積別の料金目安、それぞれが向いているケース、費用を抑えるポイントを解説します。",
    category: "費用・相場",
    image: "/images/blog-drone-aerial.jpg",
  },
  // ★★★ 業者選び
  {
    slug: "choose-3d-surveying-company",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量業者の選び方｜失敗しない5つのチェックポイント",
    description: "3D測量業者を選ぶ際の5つのチェックポイントを解説。保有機器・実績・納品物・見積もり・サポート体制の確認方法を具体的に紹介します。",
    category: "業者選び",
    image: "/images/blog-checklist.jpg",
  },
  // ★★★ 比較解説
  {
    slug: "3d-vs-traditional-surveying",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較",
    description: "3D測量と従来のTS測量を精度・コスト・スピード・データ活用の4軸で徹底比較。どちらが自社の現場に最適か判断できます。",
    category: "比較解説",
    image: "/images/blog-compare-choice.jpg",
  },
  // ★★★ i-Con対応
  {
    slug: "i-construction-3d-surveying",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ",
    description: "i-Constructionで求められる3D測量の基準・成果物・対応工程を解説。初めてのICT施工対応でも安心のガイド記事です。",
    category: "i-Con対応",
    image: "/images/blog-construction-site.jpg",
  },
  // ★★ 技術解説
  {
    slug: "point-cloud-guide",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "点群データとは？取得方法・活用事例・必要なソフトウェアを解説",
    description: "点群データの基本の仕組み、3つの取得方法、6つの活用事例、処理フロー、主要ソフトウェア、ファイル形式を網羅的に解説します。",
    category: "技術解説",
    image: "/images/blog-data-points.jpg",
  },
  {
    slug: "laser-scanner-guide",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "レーザースキャナーとは？種類・原理・測量での使い方を解説",
    description: "3Dレーザースキャナーの基本原理（ToF方式・位相差方式）、4つの種類、用途別の選び方、主要メーカーを解説します。",
    category: "技術解説",
    image: "/images/blog-laser-light.jpg",
  },
  // ★★ 比較解説
  {
    slug: "drone-vs-laser",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "ドローン測量 vs 地上レーザースキャン｜精度・コスト・用途の違い",
    description: "ドローン測量と地上レーザースキャンの精度・コスト・計測速度・現場条件を徹底比較。併用が効果的なケースも紹介します。",
    category: "比較解説",
    image: "/images/blog-drone-aerial.jpg",
  },
  // ★★ BIM連携
  {
    slug: "bim-3d-scan",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "BIMと3Dスキャンの連携方法｜既存建物のBIM化フロー完全ガイド",
    description: "既存建物のBIM化（スキャンtoBIM）の5ステップ、必要な機器・ソフト、LODレベル、費用目安を実績に基づいて解説します。",
    category: "BIM連携",
    image: "/images/blog-building-architecture.jpg",
  },
  // ★★ 課題解決
  {
    slug: "labor-shortage-solution",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "測量の人手不足を解決する3つの方法｜3D測量による省人化事例",
    description: "建設業界の測量人手不足を3D測量で解決する3つの方法を紹介。計測要員削減・作業時間短縮・データ処理自動化の具体的な事例を解説。",
    category: "課題解決",
    image: "/images/blog-business-meeting.jpg",
  },
  {
    slug: "no-drawings-solution",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現",
    description: "図面がない既存建物の現況図面を3Dスキャンで作成する方法を解説。手作業実測との比較、費用・期間の目安、事例を紹介します。",
    category: "課題解決",
    image: "/images/blog-building-architecture.jpg",
  },
  // ★★ DX推進
  {
    slug: "surveying-dx",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "測量DXの進め方｜中小建設会社が始める3つのステップ",
    description: "中小建設会社でも無理なく始められる測量DXの3ステップを解説。外注から始めて段階的に内製化する方法と補助金活用を紹介します。",
    category: "DX推進",
    image: "/images/blog-office-dx.jpg",
  },
  // ★★ 活用事例
  {
    slug: "3d-surveying-use-cases",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量の活用事例10選｜建設・建築・プラントの現場から",
    description: "3D測量の代表的な活用事例10選を紹介。各事例の課題・解決方法・成果を具体的な数値とともに解説します。",
    category: "活用事例",
    image: "/images/blog-construction-site.jpg",
  },
  // ★ 土木応用
  {
    slug: "soil-volume-3d",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "土量計算を3Dスキャンで効率化する方法｜精度と工数の改善効果",
    description: "3Dスキャンによる土量計算は従来の断面法と比較して精度±3%以内、計算工数を70%削減。仕組みと導入効果を解説します。",
    category: "土木応用",
    image: "/images/blog-earthwork.jpg",
  },
  {
    slug: "slope-3d-surveying",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "法面測量を3Dレーザーで行うメリットと注意点",
    description: "法面測量に3Dレーザースキャンを活用するメリット（安全性・精度・面管理・経年変化）と導入時の注意点を解説します。",
    category: "土木応用",
    image: "/images/blog-hillside-slope.jpg",
  },
  // ★ インフラ
  {
    slug: "bridge-inspection-3d",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "橋梁点検における3D測量の活用｜変状記録と経年変化の管理",
    description: "橋梁点検に3D測量を活用するメリットと具体的な方法を解説。変状記録の効率化、経年変化の定量管理を実現します。",
    category: "インフラ",
    image: "/images/blog-bridge-infrastructure.jpg",
  },
  {
    slug: "tunnel-cross-section-3d",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "トンネル断面測量の3D化｜従来手法との精度・効率比較",
    description: "トンネル断面測量を3Dレーザースキャンで行うメリットと従来手法との比較を解説。精度±5mm、計測時間1/3を実現します。",
    category: "インフラ",
    image: "/images/blog-tunnel.jpg",
  },
  // ★ プラント
  {
    slug: "plant-piping-3d-model",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "プラント配管の3Dモデル化｜スキャンから設計データ連携まで",
    description: "プラント配管の3Dモデル化プロセスを解説。スキャン→点群→3Dモデル→設計連携の流れと干渉チェック工数80%削減の実績を紹介。",
    category: "プラント",
    image: "/images/blog-piping-industrial.jpg",
  },
  {
    slug: "factory-layout-3d",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "工場レイアウト変更を3D測量で効率化する方法",
    description: "工場のレイアウト変更に3D測量を活用する方法を解説。既存設備の正確な配置データ取得から3D上でのレイアウト検討までの流れを紹介。",
    category: "プラント",
    image: "/images/blog-warehouse-factory.jpg",
  },
  // ★ 文化財
  {
    slug: "cultural-heritage-3d-archive",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "文化財の3Dデジタルアーカイブ｜事例と技術の最新動向",
    description: "文化財の3Dデジタルアーカイブの必要性、使用技術、活用事例4選、作成フロー、費用目安を解説します。",
    category: "文化財",
    image: "/images/blog-temple-heritage.jpg",
  },
  // ★ 用語解説
  {
    slug: "3d-surveying-glossary",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "3D測量で使われる用語集｜点群・メッシュ・BIM/CIMまで網羅",
    description: "3D測量の現場で使われる専門用語30以上をカテゴリ別にわかりやすく解説。初心者〜中級者向けの用語辞典です。",
    category: "用語解説",
    image: "/images/blog-glossary-book.jpg",
  },
  // ★ 最新動向
  {
    slug: "3d-surveying-trends-2026",
    date: "2026.02.17",
    dateTime: "2026-02-17",
    title: "2026年版 3D測量の最新トレンド｜AI活用・自動化の進化",
    description: "2026年の3D測量業界で注目すべき6つのトレンドを解説。AI自動分類、リアルタイムスキャン、クラウド処理、デジタルツインなど。",
    category: "最新動向",
    image: "/images/blog-ai-robot.jpg",
  },
  // 既存記事
  {
    slug: "3d-surveying",
    date: "2021.01.21",
    dateTime: "2021-01-21",
    title: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
    description: "3D測量（三次元測量）の基本から活用方法まで詳しく解説。建設・土木・文化財保存など様々な分野での活用事例を紹介します。",
    category: "技術解説",
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

const categories = [...new Set(posts.map((p) => p.category))];

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
          {/* 記事数 */}
          <p className="text-sm text-gray-500 mb-8">全 {posts.length} 件の記事</p>

          {/* 記事一覧 */}
          <div className="space-y-8">
            {posts.map((post, i) => (
              <article key={i} className="border-b border-gray-200 pb-8">
                <Link href={`/blog/${post.slug}`} className="flex flex-col md:flex-row gap-6 group">
                  {/* サムネイル画像（ある場合のみ） */}
                  {post.image ? (
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
                  ) : (
                    <div className="md:w-1/3 shrink-0">
                      <div className="aspect-[16/10] overflow-hidden rounded bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                        <svg className="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* 記事情報 */}
                  <div className={post.image ? "md:w-2/3" : "md:w-2/3"}>
                    <div className="flex items-center gap-3 mb-3">
                      <time dateTime={post.dateTime} className="text-sm tracking-wider text-gray-500">
                        {post.date}
                      </time>
                      <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded">
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

          {/* カテゴリ・最新記事 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* カテゴリ */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">カテゴリ</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{cat}</span>
                    <span className="text-xs text-gray-400">{posts.filter((p) => p.category === cat).length}件</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 最新の記事 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 pb-2 border-b border-gray-300">最新の記事</h3>
              <ul className="space-y-3">
                {posts.slice(0, 8).map((post, i) => (
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
