import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title:
    "ドローン測量 vs 地上レーザースキャン｜精度・コスト・用途の違い",
  description:
    "ドローン測量と地上レーザースキャンの精度・費用・計測速度・対応現場を徹底比較。現場条件と精度要件に応じた最適な測量手法の選び方を、3D測量の専門家が解説します。",
  keywords: [
    "ドローン測量 地上レーザー 違い",
    "測量方法 比較",
    "ドローン測量 精度",
    "地上レーザースキャン 費用",
    "3D測量 比較",
  ],
  alternates: { canonical: "/blog/drone-vs-laser" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "ドローン測量 vs 地上レーザースキャン｜精度・コスト・用途の違い",
  description:
    "ドローン測量と地上レーザースキャンの精度・費用・計測速度・対応現場を徹底比較。現場条件に応じた最適な測量手法の選び方を解説。",
  datePublished: "2026-02-17",
  dateModified: "2026-02-17",
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
    "@id": "https://surveysolution.pro/blog/drone-vs-laser",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ドローン測量と地上レーザースキャンはどちらが精度が高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャンの方が精度は高く、±1〜3mmの計測精度を実現します。ドローン測量は±2〜5cm程度です。ただし、広域の地形測量ではドローンのコストパフォーマンスが優れており、精度要件と現場条件に応じて使い分けるのが最適です。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量と地上レーザーの費用差はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ドローン測量は20万円〜、地上レーザースキャンは30万円〜が目安です。1ha以上の広域地形測量ではドローンが費用対効果に優れ、建物・構造物の高精度計測では地上レーザーが適しています。対象面積と精度要件により最適な手法が変わります。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量と地上レーザーを併用するメリットはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、併用は効果的です。広域の地形をドローンで計測し、建物・構造物の詳細を地上レーザーで補完することで、広範囲かつ高精度なデータを効率的に取得できます。大規模造成現場や工場全体の現況測量などで併用が採用されています。",
      },
    },
  ],
};

export default function DroneVsLaserPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          {
            name: "ドローン測量 vs 地上レーザースキャン",
            path: "/blog/drone-vs-laser",
          },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time
                dateTime="2026-02-17"
                className="text-sm tracking-wider text-gray-500"
              >
                2026.02.17
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                比較解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              ドローン測量 vs
              地上レーザースキャン｜精度・コスト・用途の違い
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-drone-aerial.jpg"
              alt="ドローン測量と地上レーザースキャンの比較"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>
                ドローン測量は広域（1ha以上）の地形計測に強く、費用20万円〜、精度±2〜5cm。地上レーザースキャンは建物・構造物の高精度計測に強く、費用30万円〜、精度±1〜3mm。
              </strong>
              どちらが優れているかではなく、現場条件と精度要件で使い分けるのが最適解です。本記事では、3D測量の専門家の視点から両手法の違いを精度・コスト・速度・対応現場の4軸で徹底比較し、現場責任者が最適な手法を選定できるよう解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li>
                  <a href="#mechanism" className="hover:underline">
                    1. それぞれの基本的な仕組み
                  </a>
                </li>
                <li>
                  <a href="#accuracy" className="hover:underline">
                    2. 精度で比較する
                  </a>
                </li>
                <li>
                  <a href="#cost" className="hover:underline">
                    3. コストで比較する
                  </a>
                </li>
                <li>
                  <a href="#speed" className="hover:underline">
                    4. 計測速度・効率で比較する
                  </a>
                </li>
                <li>
                  <a href="#condition" className="hover:underline">
                    5. 対応できる現場条件で比較する
                  </a>
                </li>
                <li>
                  <a href="#comprehensive" className="hover:underline">
                    6. 総合比較表
                  </a>
                </li>
                <li>
                  <a href="#drone-best" className="hover:underline">
                    7. ドローン測量が最適な5つのケース
                  </a>
                </li>
                <li>
                  <a href="#laser-best" className="hover:underline">
                    8. 地上レーザーが最適な5つのケース
                  </a>
                </li>
                <li>
                  <a href="#combined" className="hover:underline">
                    9. 併用が効果的なケース
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:underline">
                    10. よくある質問
                  </a>
                </li>
                <li>
                  <a href="#summary" className="hover:underline">
                    11. まとめ
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 仕組み */}
            <h2
              id="mechanism"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              それぞれの基本的な仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン測量と地上レーザースキャンは、3Dデータを取得するという目的は同じですが、計測原理が根本的に異なります。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  ドローン測量の仕組み｜フォトグラメトリ
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ドローンに搭載したカメラで上空から大量の写真（200〜500枚以上）を撮影し、フォトグラメトリ（写真測量）技術で3Dモデルを生成します。複数の写真に写った同一地点を自動認識し、三角測量の原理で三次元座標を算出します。GCP（地上基準点）を設置することで、精度±2〜5cmのオルソ画像・DSM（数値表面モデル）・点群データを作成できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    原理：フォトグラメトリ（写真測量）
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    取得データ：オルソ画像・DSM・点群
                  </span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  地上レーザースキャンの仕組み｜ToF / 位相差方式
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に設置した3Dレーザースキャナからレーザー光を360度に照射し、反射光の戻り時間（ToF：Time of
                  Flight）または位相差で距離を計測します。1秒間に最大200万点の座標を取得し、対象物を高密度な点群データとして記録します。ToF方式は長距離（最大350m）に強く、位相差方式は近距離（100m以内）で高速・高密度な計測が可能です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    原理：ToF / 位相差レーザー計測
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    取得データ：高密度点群（±1〜3mm）
                  </span>
                </div>
              </div>
            </div>

            {/* 2. 精度比較 */}
            <h2
              id="accuracy"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              精度で比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              精度面では地上レーザースキャンが優位です。水平精度・垂直精度・点密度の3指標で比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">精度指標</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                    <th className="px-4 py-3 text-left">
                      地上レーザースキャン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "水平精度",
                      drone: "±2〜5cm（GCP使用時）",
                      laser: "±1〜3mm",
                    },
                    {
                      item: "垂直精度",
                      drone: "±3〜10cm",
                      laser: "±1〜3mm",
                    },
                    {
                      item: "点密度",
                      drone: "数十〜数百点/m2",
                      laser: "数千〜数万点/m2",
                    },
                    {
                      item: "精度の安定性",
                      drone: "気象条件・飛行高度に依存",
                      laser: "環境条件の影響が小さい",
                    },
                    {
                      item: "精度保証範囲",
                      drone: "対地高度50〜150m推奨",
                      laser: "スキャナから100m以内が最適",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.drone}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.laser}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ポイント：</strong>
                土木現場の出来形管理（i-Construction基準）では±5cmの精度で十分な場合が多く、ドローン測量で対応可能です。一方、建築の竣工図作成やプラントの配管モデリングではmm単位の精度が求められるため、地上レーザースキャンが必須となります。
              </p>
            </div>

            {/* 3. コスト比較 */}
            <h2
              id="cost"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              コストで比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              費用は対象面積によって逆転します。広域ではドローン、狭域・高精度では地上レーザーのコストパフォーマンスが優れます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">
                      対象面積
                    </th>
                    <th className="px-4 py-3 text-left">
                      ドローン測量（税別）
                    </th>
                    <th className="px-4 py-3 text-left">
                      地上レーザー（税別）
                    </th>
                    <th className="px-4 py-3 text-left">
                      推奨手法
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      area: "500m2未満",
                      drone: "15〜25万円",
                      laser: "30〜50万円",
                      recommend: "規模による",
                    },
                    {
                      area: "500m2〜1ha",
                      drone: "20〜40万円",
                      laser: "50〜100万円",
                      recommend: "ドローン有利",
                    },
                    {
                      area: "1〜5ha",
                      drone: "30〜60万円",
                      laser: "100〜300万円",
                      recommend: "ドローン有利",
                    },
                    {
                      area: "5ha以上",
                      drone: "50〜100万円",
                      laser: "300万円〜",
                      recommend: "ドローン有利",
                    },
                    {
                      area: "建物1棟（延床1,000m2）",
                      drone: "対応困難",
                      laser: "50〜80万円",
                      recommend: "地上レーザー",
                    },
                    {
                      area: "プラント設備",
                      drone: "対応困難",
                      laser: "80〜200万円",
                      recommend: "地上レーザー",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.area}
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">
                        {row.area}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.drone}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.laser}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b font-bold">
                        {row.recommend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>注意：</strong>
                上記は計測・データ処理費の概算です。成果物（CAD図面、BIMモデル等）の作成費は別途発生します。正確な費用は現場条件・精度要件・納品物により異なるため、個別見積もりをご依頼ください。
              </p>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">
                具体的な費用を知りたい方へ。現場条件に応じた最適プランと概算費用をご提案します。
              </p>
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 計測速度 */}
            <h2
              id="speed"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              計測速度・効率で比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              計測速度ではドローンが圧倒的に有利です。ただし、データ処理時間を含めたトータル工数は用途によって異なります。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                    <th className="px-4 py-3 text-left">
                      地上レーザースキャン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "1haあたりの現場作業",
                      drone: "15〜30分（1フライト）",
                      laser: "2〜4時間（4〜8スキャン）",
                    },
                    {
                      item: "5haの現場作業",
                      drone: "1〜2時間",
                      laser: "1〜2日",
                    },
                    {
                      item: "データ処理時間",
                      drone: "数時間〜1日",
                      laser: "数時間〜1日",
                    },
                    {
                      item: "必要人数",
                      drone: "1〜2名",
                      laser: "1〜2名",
                    },
                    {
                      item: "段取り・設置時間",
                      drone: "10〜20分",
                      laser: "30〜60分/スキャン地点",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.drone}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.laser}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 5. 現場条件 */}
            <h2
              id="condition"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              対応できる現場条件で比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              現場条件の対応力は地上レーザーの方が幅広いです。ドローンは屋外の広域地形に特化し、地上レーザーは屋内外を問わず対応できます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">現場条件</th>
                    <th className="px-4 py-3 text-center">ドローン</th>
                    <th className="px-4 py-3 text-center">地上レーザー</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "屋外・広域地形", drone: "◎", laser: "△" },
                    { item: "屋内", drone: "×", laser: "◎" },
                    { item: "雨天・強風時", drone: "×", laser: "○" },
                    {
                      item: "DID（人口集中地区）",
                      drone: "△（飛行許可必要）",
                      laser: "◎",
                    },
                    { item: "建物外壁・屋根", drone: "○", laser: "△" },
                    { item: "トンネル・地下空間", drone: "×", laser: "◎" },
                    { item: "植生が多い場所", drone: "△", laser: "○" },
                    { item: "狭所・配管内部", drone: "×", laser: "○" },
                  ].map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b text-center">
                        {row.drone}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b text-center">
                        {row.laser}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>飛行規制について：</strong>
                2022年12月の航空法改正（レベル4飛行解禁）以降もDID上空や夜間飛行には国土交通省の許可・承認が必要です。弊社はすべての飛行許可を取得した上で業務を実施しています。
              </p>
            </div>

            {/* 6. 総合比較表 */}
            <h2
              id="comprehensive"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              総合比較表
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ここまでの比較内容を総合的に整理します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                    <th className="px-4 py-3 text-left">
                      地上レーザースキャン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "計測原理",
                      drone: "フォトグラメトリ",
                      laser: "ToF / 位相差レーザー",
                    },
                    {
                      item: "精度",
                      drone: "±2〜5cm",
                      laser: "±1〜3mm",
                    },
                    {
                      item: "点密度",
                      drone: "数十〜数百点/m2",
                      laser: "数千〜数万点/m2",
                    },
                    {
                      item: "費用目安",
                      drone: "20万円〜",
                      laser: "30万円〜",
                    },
                    {
                      item: "得意な対象",
                      drone: "広域地形（1ha以上）",
                      laser: "建物・構造物・プラント",
                    },
                    {
                      item: "現場作業時間",
                      drone: "短い（分単位/ha）",
                      laser: "長い（時間単位/ha）",
                    },
                    {
                      item: "天候制限",
                      drone: "雨天・強風は不可",
                      laser: "ほぼ制限なし",
                    },
                    {
                      item: "屋内対応",
                      drone: "不可",
                      laser: "対応可",
                    },
                    {
                      item: "法的規制",
                      drone: "航空法の飛行許可が必要",
                      laser: "特になし",
                    },
                    {
                      item: "成果物",
                      drone: "オルソ画像・DSM・点群",
                      laser: "高密度点群・3Dモデル",
                    },
                  ].map((row, i) => (
                    <tr
                      key={row.item}
                      className={i % 2 === 0 ? "bg-gray-50" : ""}
                    >
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">
                        {row.item}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.drone}
                      </td>
                      <td className="px-4 py-3 text-gray-700 border-b">
                        {row.laser}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 7. ドローン最適 */}
            <h2
              id="drone-best"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              ドローン測量が最適な5つのケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              以下のケースではドローン測量のコストパフォーマンスと効率が優れます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "1ha以上の造成地・土木現場の地形測量",
                  desc: "広大な敷地の現況測量・土量計算に最適です。1フライト15〜30分で10ha以上の範囲をカバーでき、従来の地上測量と比べて工期を大幅に短縮します。",
                },
                {
                  num: "2",
                  title: "定期的な進捗管理・出来形管理",
                  desc: "i-Constructionの出来形管理要領に対応した精度（±5cm以内）で計測できます。毎月の進捗確認を低コスト・短時間で実施可能です。",
                },
                {
                  num: "3",
                  title: "法面・急斜面の地形計測",
                  desc: "人が立ち入りにくい法面や急斜面を、上空から安全に計測できます。崩壊リスクの高い斜面の現況把握や、のり面保護工の出来形管理に適しています。",
                },
                {
                  num: "4",
                  title: "災害現場の緊急測量",
                  desc: "土砂崩れ・浸水被害の現場を迅速に3Dデータ化できます。被災直後でも上空からアクセスでき、被害範囲と土量の把握を短時間で実施します。",
                },
                {
                  num: "5",
                  title: "太陽光発電所の設計・管理",
                  desc: "広大な用地の地形データを取得し、パネル配置の最適設計に活用できます。施工後の定期点検（パネルの傾き・破損確認）にも有効です。",
                },
              ].map((m) => (
                <div
                  key={m.num}
                  className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg"
                >
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {m.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 8. 地上レーザー最適 */}
            <h2
              id="laser-best"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              地上レーザーが最適な5つのケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              以下のケースでは地上レーザースキャンの精度と対応力が求められます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "建物の竣工図・現況図の作成",
                  desc: "±1〜3mmの精度で建物の内外を計測し、正確な竣工図面やBIMモデルを作成します。リノベーション前の既存建物の現況把握にも欠かせません。",
                },
                {
                  num: "2",
                  title: "プラント・工場の配管3Dモデル化",
                  desc: "複雑に入り組んだ配管・設備をmmの精度で3Dモデル化し、干渉チェックや増設設計に活用します。図面がない既存設備のデジタルツイン構築に最適です。",
                },
                {
                  num: "3",
                  title: "トンネル・地下構造物の計測",
                  desc: "ドローンが飛行できない屋内空間や地下構造物を高精度に計測できます。トンネルの覆工コンクリートの変位計測や断面形状の把握に使用されます。",
                },
                {
                  num: "4",
                  title: "文化財・歴史的建造物のデジタル記録",
                  desc: "彫刻や装飾の細部まで忠実に3Dデータ化し、デジタルアーカイブを構築します。修復計画の基礎資料やVR展示用データの作成にも対応します。",
                },
                {
                  num: "5",
                  title: "橋梁・インフラ構造物の点検",
                  desc: "橋梁の桁下やコンクリート表面のひび割れをmmレベルで記録し、経年変化を定量的に管理します。点検データの蓄積により、維持管理計画の精度が向上します。",
                },
              ].map((m) => (
                <div
                  key={m.num}
                  className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg"
                >
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {m.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {m.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 9. 併用 */}
            <h2
              id="combined"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              併用が効果的なケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローンと地上レーザーの併用は、広域性と高精度を両立させたい場合に効果的です。弊社でも併用提案を行うケースが増えています。
            </p>
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  事例1：大規模造成現場の全体管理
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  10ha規模の造成現場で、広域の地形変化をドローンで毎月モニタリングし、擁壁や構造物の出来形を地上レーザーで高精度に計測します。広域データと詳細データを統合することで、現場全体の進捗を一元管理できます。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  事例2：工場敷地全体の現況測量
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  工場敷地の外構・道路・緑地をドローンで計測し、建屋内部・設備・配管を地上レーザーでスキャンします。屋外と屋内のデータを統合し、敷地全体のデジタルツインを構築した事例では、増設計画の検討期間を従来の半分に短縮できました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  事例3：河川護岸工事の施工管理
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  河川の広域地形（水際から堤防まで）をドローンで計測し、護岸ブロックの据付精度を地上レーザーで検証します。工期全体を通じて、広域の土量管理と構造物の品質管理を同時に実現します。
                </p>
              </div>
            </div>

            {/* 10. FAQ */}
            <h2
              id="faq"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "ドローン測量と地上レーザースキャンはどちらが精度が高いですか？",
                  a: "地上レーザースキャンの方が精度は高く、±1〜3mmの計測精度を実現します。ドローン測量は±2〜5cm程度です。ただし、土木の出来形管理など±5cmで十分な用途ではドローン測量のコストパフォーマンスが優れます。精度要件に応じた選定が重要です。",
                },
                {
                  q: "ドローン測量と地上レーザーの費用差はどのくらいですか？",
                  a: "ドローン測量は20万円〜、地上レーザースキャンは30万円〜が目安です。1ha以上の広域地形ではドローンの費用対効果が高く、建物1棟の高精度計測では地上レーザーが適しています。正確な費用は現場条件により異なるため、無料見積もりをご利用ください。",
                },
                {
                  q: "ドローン測量と地上レーザーを併用するメリットはありますか？",
                  a: "はい、併用は効果的です。広域の地形データをドローンで効率的に取得し、構造物の詳細を地上レーザーで補完することで、広範囲かつ高精度なデータを取得できます。大規模造成現場や工場全体の現況測量で多く採用されています。",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Q. {item.q}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            {/* 11. まとめ */}
            <h2
              id="summary"
              className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary"
            >
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              ドローン測量と地上レーザースキャンは、それぞれ異なる強みを持つ測量手法です。どちらが優れているかではなく、現場条件と精度要件に応じて最適な手法を選定することが、コスト削減と品質確保の鍵となります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">
                この記事のポイント：
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>
                  ドローン測量は広域地形（1ha以上）の計測に強く、費用20万円〜、精度±2〜5cm
                </li>
                <li>
                  地上レーザーは建物・構造物の高精度計測に強く、費用30万円〜、精度±1〜3mm
                </li>
                <li>
                  1haを超える現場ではドローン、mm精度が必要な現場では地上レーザーが最適
                </li>
                <li>
                  大規模現場や屋内外を含む案件では併用が効果的
                </li>
                <li>
                  最適な手法は現場条件・精度要件・予算の3つで判断する
                </li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              測量手法の選定でお悩みの方は、現場の状況をお聞かせください。3D測量の専門家が最適な計測プランと概算費用をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              測量手法の選定でお悩みですか？
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「ドローンと地上レーザーどちらが適切か分からない」という段階でも大丈夫です。現場条件をお聞かせいただければ、最適な計測プランをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/service"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              関連記事
            </h3>
            <div className="space-y-3">
              <Link
                href="/blog/drone-surveying-cost"
                className="block text-sm text-primary hover:underline"
              >
                → ドローン測量の費用相場｜面積別の料金目安と見積もりのポイント
              </Link>
              <Link
                href="/blog/laser-scanner-guide"
                className="block text-sm text-primary hover:underline"
              >
                → レーザースキャナーとは？仕組み・種類・選び方をわかりやすく解説
              </Link>
              <Link
                href="/blog/what-is-3d-surveying"
                className="block text-sm text-primary hover:underline"
              >
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
            </div>
          </div>

          {/* 記事ナビ */}
          <div className="mt-8 pt-8 border-t">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <span>&larr;</span>
              <span>ブログ一覧に戻る</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
