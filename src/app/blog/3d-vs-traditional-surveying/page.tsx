import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較",
  description:
    "3D測量と従来のTS測量を精度・コスト・スピード・データ活用の4軸で徹底比較。計測時間1/3〜1/5、精度±1〜3mm、データ量100万倍以上。導入判断に必要な情報を総合比較表付きで解説します。",
  keywords: ["3D測量 従来測量 違い", "3D測量 精度", "3D測量 比較", "3D測量 コスト", "3D測量 スピード"],
  alternates: { canonical: "/blog/3d-vs-traditional-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較",
  description:
    "3D測量と従来のTS測量を精度・コスト・スピード・データ活用の4軸で徹底比較。導入判断に必要な情報を総合比較表付きで解説。",
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
    logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://surveysolution.pro/blog/3d-vs-traditional-surveying",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量と従来測量はどちらが精度が高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャナを用いた3D測量の精度は±1〜3mmで、従来のTS測量（±2〜5mm）と同等以上の精度を実現します。さらに面的にデータを取得するため、計測漏れが起きにくく、結果として現場全体の精度が向上します。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量は従来測量よりコストが高いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1回あたりの計測費用は3D測量の方が高くなる傾向があります。ただし、計測時間の短縮、手戻りの削減、追加測量の不要化を含めた工程全体で見ると、3D測量の方がトータルコストを削減できるケースが多くあります。特に大規模現場や複数回計測が必要な案件では費用対効果が高くなります。",
      },
    },
    {
      "@type": "Question",
      name: "従来測量から3D測量に切り替えるタイミングはいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "以下のような場合に3D測量への切り替えが有効です。①計測対象が複雑な形状の場合、②BIM/CIMデータが必要な場合、③手戻り・追加測量が頻発している場合、④工期短縮が求められる場合。まずは1案件で試験的に導入し、効果を検証してから本格導入するのがおすすめです。",
      },
    },
  ],
};

export default function ThreeDVsTraditionalSurveyingPage() {
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
        as="p"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "3D測量 vs 従来測量", path: "/blog/3d-vs-traditional-surveying" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-02-17" className="text-sm tracking-wider text-gray-500">
                2026.02.17
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                比較解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-compare-choice.jpg"
              alt="3D測量と従来測量の比較イメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量は従来のTS（トータルステーション）測量と比較して、計測時間1/3〜1/5、精度±1〜3mm、データ量100万倍以上という性能差があります。</strong>1回あたりの計測コストは3D測量の方が高くなりますが、手戻り削減・工期短縮・追加測量の不要化を含めた工程全体では、コスト削減になるケースが多くあります。本記事では、精度・コスト・スピード・データ活用の4軸で両者を徹底比較し、どちらを選ぶべきかの判断基準を解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#basics" className="hover:underline">1. 3D測量と従来測量の基本的な違い</a></li>
                <li><a href="#precision" className="hover:underline">2. 精度で比較する</a></li>
                <li><a href="#cost" className="hover:underline">3. コストで比較する</a></li>
                <li><a href="#speed" className="hover:underline">4. スピードで比較する</a></li>
                <li><a href="#data" className="hover:underline">5. データ活用で比較する</a></li>
                <li><a href="#comprehensive" className="hover:underline">6. 総合比較表</a></li>
                <li><a href="#recommend-3d" className="hover:underline">7. こんな場合は3D測量がおすすめ</a></li>
                <li><a href="#recommend-ts" className="hover:underline">8. こんな場合は従来測量で十分</a></li>
                <li><a href="#faq" className="hover:underline">9. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">10. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 基本的な違い */}
            <h2 id="basics" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量と従来測量の基本的な違い
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量と従来測量の最大の違いは「計測のアプローチ」にあります。従来のTS測量が測りたいポイントを1つずつ計測する「点の測量」であるのに対し、3D測量はレーザーやカメラで対象物全体を「面」として一括計測します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">3D測量</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>・レーザーやカメラで面的に計測</li>
                  <li>・1秒間に数十万〜数百万点を取得</li>
                  <li>・点群データとして3D空間を再現</li>
                  <li>・後からデータ上で任意の寸法を抽出可能</li>
                  <li>・BIM/CIMとの連携が容易</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">従来測量（TS測量）</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>・トータルステーションで1点ずつ計測</li>
                  <li>・1点あたり数秒〜数分</li>
                  <li>・座標値を記録し2D図面を作成</li>
                  <li>・追加計測には再度現場訪問が必要</li>
                  <li>・2D CAD図面が主な成果物</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ポイント：</strong>どちらが優れているかは一概には言えません。重要なのは、プロジェクトの規模・精度要件・予算・工期に応じて最適な手法を選ぶことです。以下、4つの軸で詳しく比較していきます。
              </p>
            </div>

            {/* 2. 精度比較 */}
            <h2 id="precision" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              精度で比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              精度は測量手法を選ぶ際の最重要指標の一つです。手法ごとの精度を比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">計測手法</th>
                    <th className="px-4 py-3 text-left">精度</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "地上レーザースキャナ", precision: "±1〜3mm", note: "面的計測で計測漏れなし" },
                    { method: "ドローン測量（写真）", precision: "±2〜5cm", note: "広域を短時間で面的に取得" },
                    { method: "ドローン測量（LiDAR）", precision: "±1〜3cm", note: "植生下の地形も計測可能" },
                    { method: "ハンドヘルドスキャナ", precision: "±5〜30mm", note: "狭所・補完計測に最適" },
                    { method: "TS測量（従来）", precision: "±2〜5mm", note: "点の精度は高いが点数が限定的" },
                    { method: "手作業実測（従来）", precision: "±10〜20mm", note: "人的誤差が大きい" },
                  ].map((row, i) => (
                    <tr key={row.method} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.method}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.precision}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>精度のポイント：</strong>TS測量の「1点の精度」は±2〜5mmと高水準ですが、計測点数が数十〜数百点に限られます。一方、3D測量は数億点のデータを取得するため、計測漏れがなく、現場全体としての精度が向上します。「点の精度」と「面の精度」の違いを理解することが重要です。
              </p>
            </div>

            {/* 3. コスト比較 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              コストで比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              コスト比較では「1回の計測費用」と「プロジェクト全体のトータルコスト」を分けて考える必要があります。
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3">1回あたりの計測費用</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">項目</th>
                    <th className="px-4 py-3 text-left">3D測量</th>
                    <th className="px-4 py-3 text-left">従来測量（TS）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測費用", a: "30万〜80万円", b: "15万〜40万円" },
                    { item: "データ処理費", a: "10万〜30万円", b: "5万〜15万円" },
                    { item: "図面作成費", a: "15万〜50万円", b: "10万〜30万円" },
                    { item: "合計目安", a: "55万〜160万円", b: "30万〜85万円" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.a}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">※1,000〜2,000㎡規模の現場を想定した目安金額です。</p>

            <h3 className="text-lg font-bold text-gray-800 mb-3">プロジェクト全体のトータルコスト（ROI分析）</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              1回の計測費用だけを見ると従来測量の方が安価ですが、プロジェクト全体で見ると3D測量がコストメリットを生むケースが多くあります。
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "手戻りコストの削減", desc: "3D測量は面的データを取得するため、設計段階での計測漏れによる手戻りを大幅に削減します。弊社実績では設計手戻りを平均50%削減しています。" },
                { title: "追加測量の不要化", desc: "従来測量では「測り忘れ」のたびに現場再訪問が必要でした。3D測量はデータ上で後から任意の箇所を計測できるため、追加測量費用がかかりません。" },
                { title: "人件費の削減", desc: "3D測量は1〜2名で作業可能なのに対し、従来測量は2〜3名が必要です。計測日数も短縮されるため、人件費が抑えられます。" },
                { title: "工期短縮による間接費削減", desc: "現場作業時間が1/3〜1/5に短縮されるため、足場代・交通費・宿泊費などの間接費も削減できます。" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">+</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">3D測量と従来測量、どちらが適しているか迷っていませんか？現場条件に合わせた最適な手法をご提案します。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. スピード比較 */}
            <h2 id="speed" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              スピードで比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              現場作業時間とデータ処理時間の両面で比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">対象規模</th>
                    <th className="px-4 py-3 text-left">3D測量</th>
                    <th className="px-4 py-3 text-left">従来測量（TS）</th>
                    <th className="px-4 py-3 text-left">短縮率</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scale: "100㎡（1室）", a: "30分〜1時間", b: "2〜4時間", rate: "約1/4" },
                    { scale: "500㎡（1フロア）", a: "2〜3時間", b: "1〜2日", rate: "約1/4" },
                    { scale: "2,000㎡（ビル全体）", a: "1〜2日", b: "5〜10日", rate: "約1/5" },
                    { scale: "10ha（土木現場）", a: "半日（ドローン）", b: "3〜5日", rate: "約1/8" },
                  ].map((row, i) => (
                    <tr key={row.scale} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.scale}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.a}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.b}</td>
                      <td className="px-4 py-3 font-bold text-primary border-b">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-4">※現場条件・計測密度により変動します。</p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>注意点：</strong>3D測量は現場作業は短時間ですが、取得後のデータ処理（点群合成・ノイズ除去・モデリング）に時間がかかります。データ処理を含めた総所要時間は、現場作業だけの比較ほど大きな差にはなりません。ただし、現場の拘束時間が短い点は工程管理上の大きなメリットです。
              </p>
            </div>

            {/* 5. データ活用比較 */}
            <h2 id="data" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              データ活用で比較する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              計測後のデータ活用範囲は、3D測量と従来測量で大きく異なります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-primary mb-3">3D測量のデータ活用</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>・点群データからの任意断面抽出</li>
                  <li>・BIM/CIMモデルの構築</li>
                  <li>・土量計算・出来形管理</li>
                  <li>・干渉チェック・クリアランス確認</li>
                  <li>・経年変化の定量比較</li>
                  <li>・VR/ARによる現場の遠隔確認</li>
                  <li>・3Dプリント用データの生成</li>
                  <li>・デジタルツインの構築</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-3">従来測量のデータ活用</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>・2D CAD図面の作成</li>
                  <li>・面積・距離の算出</li>
                  <li>・境界確定資料の作成</li>
                  <li>・基本的な土量計算</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">※計測した点のみが利用可能なため、活用範囲は限定的です。</p>
              </div>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>データ資産としての価値：</strong>3D測量で取得した点群データは、計測時点の現場を丸ごとデジタル保存したものです。将来の改修・増築・点検時にも活用でき、長期的なデータ資産となります。
              </p>
            </div>

            {/* 6. 総合比較表 */}
            <h2 id="comprehensive" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              総合比較表
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ここまでの比較を1つの表にまとめます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">3D測量</th>
                    <th className="px-4 py-3 text-left">従来測量（TS）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測方式", a: "面的（レーザー/写真）", b: "点的（1点ずつ手動）" },
                    { item: "精度", a: "±1〜3mm（レーザー）", b: "±2〜5mm" },
                    { item: "計測速度", a: "100万点/秒以上", b: "1点/数秒〜数分" },
                    { item: "現場作業時間", a: "従来の1/3〜1/5", b: "基準（1倍）" },
                    { item: "データ量", a: "数億〜数十億点", b: "数十〜数百点" },
                    { item: "1回の計測費用", a: "高い（55万〜160万円）", b: "安い（30万〜85万円）" },
                    { item: "トータルコスト", a: "削減傾向", b: "手戻りで増加リスク" },
                    { item: "必要人数", a: "1〜2名", b: "2〜3名" },
                    { item: "追加計測", a: "データ上で対応可", b: "現場再訪問が必要" },
                    { item: "成果物", a: "点群・3Dモデル・BIM/CIM", b: "2D図面（CAD）" },
                    { item: "BIM/CIM対応", a: "直接連携可", b: "別途モデリングが必要" },
                    { item: "データ資産性", a: "高い（将来活用可能）", b: "限定的" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.a}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 7. 3D測量おすすめケース */}
            <h2 id="recommend-3d" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              こんな場合は3D測量がおすすめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              以下の4つのケースでは、3D測量の導入メリットが特に大きくなります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "複雑な形状の構造物を計測する場合", desc: "プラント配管・鉄骨構造・曲面を持つ建築物など、従来測量では計測点数が膨大になる対象物は、3D測量で面的に取得する方が圧倒的に効率的です。" },
                { num: "2", title: "BIM/CIMデータが求められる場合", desc: "i-Constructionや設計BIM化が求められるプロジェクトでは、3D測量で取得した点群データからダイレクトにBIM/CIMモデルを構築できます。" },
                { num: "3", title: "大規模現場・広域地形の計測", desc: "数千㎡〜数十haの現場では、ドローンやレーザースキャナの面的計測が威力を発揮します。従来測量と比べて計測時間を1/5〜1/8に短縮できます。" },
                { num: "4", title: "定期計測・経年変化の管理", desc: "橋梁・トンネル・法面などの定期点検では、点群データ同士の差分比較により、ミリメートル単位の変位を定量的に把握できます。" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 8. 従来測量で十分なケース */}
            <h2 id="recommend-ts" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              こんな場合は従来測量で十分
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              一方、以下のケースでは従来測量の方がコストパフォーマンスが高い場合があります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "小規模な境界測量・確定測量", desc: "数十㎡の敷地境界確定など、計測点数が少なく2D図面のみで完結する案件では、従来のTS測量の方がシンプルかつ低コストです。" },
                { num: "2", title: "基準点測量・水準測量", desc: "国家基準点との整合性が求められる基準点測量や精密水準測量は、従来手法の方が確立された精度管理体制を持っています。" },
                { num: "3", title: "単純な地形測量（小面積）", desc: "500㎡以下の単純な地形で、2D平面図のみが必要な場合は、3D測量のデータ処理工程を省ける従来測量の方が効率的なこともあります。" },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 9. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3D測量と従来測量はどちらが精度が高いですか？", a: "地上レーザースキャナを用いた3D測量の精度は±1〜3mmで、従来のTS測量（±2〜5mm）と同等以上です。さらに面的にデータを取得するため、計測漏れが起きにくく、現場全体としての精度が向上します。" },
                { q: "3D測量は従来測量よりコストが高いですか？", a: "1回あたりの計測費用は3D測量の方が高くなる傾向があります。ただし、手戻り削減・工期短縮・追加測量の不要化を含めたトータルコストでは、3D測量の方がコスト削減になるケースが多くあります。" },
                { q: "従来測量から3D測量に切り替えるタイミングはいつですか？", a: "計測対象が複雑な形状の場合、BIM/CIMデータが必要な場合、手戻り・追加測量が頻発している場合、工期短縮が求められる場合に切り替えが有効です。まずは1案件で試験導入し、効果を検証するのがおすすめです。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 10. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量と従来測量はそれぞれに強みがあり、プロジェクトの条件に応じた使い分けが重要です。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・3D測量は面的計測、従来測量は点的計測というアプローチの違いがある</li>
                <li>・精度は地上レーザーで±1〜3mm、データ量は従来の100万倍以上</li>
                <li>・1回の計測コストは3D測量が高いが、トータルコストでは削減につながるケースが多い</li>
                <li>・現場作業時間は1/3〜1/5に短縮可能</li>
                <li>・大規模・複雑形状・BIM/CIM必須の案件では3D測量が最適</li>
                <li>・小規模境界測量・基準点測量では従来測量がコスト効率良好</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              どちらの手法が最適かは、対象物の規模・形状・精度要件・納品物によって異なります。弊社では両方の手法に対応しており、現場条件に合わせた最適なご提案が可能です。まずはお気軽にご相談ください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              最適な測量手法をご提案します
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「3D測量と従来測量のどちらが適しているか」は現場条件次第です。まずはお気軽にご相談ください。
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
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                → 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
              </Link>
              <Link href="/blog/drone-surveying-cost" className="block text-sm text-primary hover:underline">
                → ドローン測量の費用はいくら？地上レーザーとのコスト比較
              </Link>
            </div>
          </div>

          {/* 記事ナビ */}
          <div className="mt-8 pt-8 border-t">
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
