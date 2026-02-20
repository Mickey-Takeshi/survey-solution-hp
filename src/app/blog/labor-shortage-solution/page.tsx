import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "測量の人手不足を解決する3つの方法｜3D測量による省人化事例",
  description:
    "測量業界の人手不足を3D測量で解決する3つの方法を解説。計測要員の削減、現場作業時間の短縮、データ処理の自動化で省人化を実現した事例を紹介します。",
  keywords: ["測量 人手不足 対策", "測量 効率化", "3D測量 省人化", "測量 人手不足"],
  alternates: { canonical: "/blog/labor-shortage-solution" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "測量の人手不足を解決する3つの方法｜3D測量による省人化事例",
  description:
    "測量業界の人手不足を3D測量で解決する3つの方法を解説。計測要員の削減、現場作業時間の短縮、データ処理の自動化による省人化事例を紹介。",
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
    "@id": "https://surveysolution.pro/blog/labor-shortage-solution",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量を導入すれば、測量未経験者でも作業できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "基本的な操作は2〜3日間の研修で習得できます。3Dスキャナはボタン操作で自動計測するため、従来測量のような長年の経験が不要です。ただし、基準点測量の知識やデータ処理には専門スキルが必要なため、当社では導入後の技術サポートも提供しています。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の導入費用はどれくらいかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自社で機材を購入する場合、3Dレーザースキャナは1,000万〜3,000万円程度です。外注する場合は1現場あたり30万円〜が目安です。人件費削減効果を考慮すると、年間10件以上の測量案件がある企業では2〜3年での投資回収が見込めます。",
      },
    },
    {
      "@type": "Question",
      name: "既存のCADソフトとデータ連携できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、点群データはAutoCAD、Civil 3D、Revitなど主要なCADソフトにインポートできます。LAS、E57、PTSなど汎用的なフォーマットで納品するため、お使いのソフトウェア環境に合わせた連携が可能です。",
      },
    },
  ],
};

export default function LaborShortageSolutionPage() {
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
          { name: "測量の人手不足を解決する3つの方法", path: "/blog/labor-shortage-solution" },
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
                課題解決
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              測量の人手不足を解決する3つの方法｜3D測量による省人化事例
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-business-meeting.jpg"
              alt="測量の人手不足対策を検討するビジネスミーティング"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>建設業界の測量技術者は過去10年で約30%減少し、人手不足が深刻化しています。</strong>3D測量の導入により、(1)計測要員を3名から1名に削減、(2)現場作業時間を1/3に短縮、(3)データ処理の自動化で事務工数を50%削減、の3つの方法で省人化を実現できます。本記事では、各方法の具体的な手順と導入事例をもとに、測量の人手不足を解決するための実践的なアプローチを解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#current" className="hover:underline">1. 測量業界の人手不足の現状</a></li>
                <li><a href="#method1" className="hover:underline">2. 方法1：3Dスキャナで計測要員を削減する</a></li>
                <li><a href="#method2" className="hover:underline">3. 方法2：ドローン測量で現場作業時間を短縮する</a></li>
                <li><a href="#method3" className="hover:underline">4. 方法3：データ処理の自動化で事務工数を削減する</a></li>
                <li><a href="#cases" className="hover:underline">5. 3D測量による省人化の成功事例</a></li>
                <li><a href="#cost" className="hover:underline">6. 導入に必要なコストと回収期間</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 現状 */}
            <h2 id="current" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              測量業界の人手不足の現状
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              国土交通省の統計によると、測量業に従事する技術者数は減少傾向が続いています。特に建設測量の現場では、経験豊富なベテラン技術者の退職と若手の採用難が重なり、多くの企業が人材確保に苦労しています。
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">指標</th>
                    <th className="px-4 py-3 text-left">数値</th>
                    <th className="px-4 py-3 text-left">出典・備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "測量技術者数の減少率", value: "過去10年で約30%減", note: "国土地理院調べ" },
                    { item: "55歳以上の割合", value: "約45%", note: "建設業全体での技術者高齢化率" },
                    { item: "29歳以下の割合", value: "約10%", note: "若手人材の参入が低迷" },
                    { item: "有効求人倍率", value: "5〜7倍", note: "測量士・測量士補の求人難" },
                    { item: "人手不足を実感する企業", value: "約70%", note: "建設業団体アンケート" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.value}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-base leading-loose text-gray-700 mb-4">
              こうした状況のなか、限られた人員で測量品質を維持するために注目されているのが、3Dスキャナやドローンを活用した省人化です。以下に、具体的な3つの方法を解説します。
            </p>

            {/* 2. 方法1 */}
            <h2 id="method1" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              方法1：3Dスキャナで計測要員を削減する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              従来のトータルステーション（TS）測量では、計測者・ミラーマン・記録係の最低3名が必要でした。3Dレーザースキャナを導入すると、スキャナをセットしてボタンを押すだけで自動的に360度の計測が完了するため、1〜2名での作業が可能になります。
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">従来測量（TS）</th>
                    <th className="px-4 py-3 text-left">3Dスキャナ測量</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "必要人数", a: "3名（計測・ミラー・記録）", b: "1〜2名" },
                    { item: "1地点の計測時間", a: "30分〜1時間", b: "3〜5分（自動スキャン）" },
                    { item: "計測漏れリスク", a: "高い（手動選点）", b: "低い（面的に取得）" },
                    { item: "経験の必要度", a: "高い（5年以上の実務経験）", b: "低い（2〜3日の研修で操作可能）" },
                    { item: "再測の発生頻度", a: "10〜15%の現場で発生", b: "ほぼゼロ" },
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

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ワンマン計測のポイント：</strong>3Dスキャナは自動で計測を行うため、1人でも複数の測定ポイントを順番に回ることで広範囲の計測が可能です。スキャン中は別作業を並行できるため、現場全体の作業効率が向上します。
              </p>
            </div>

            {/* 3. 方法2 */}
            <h2 id="method2" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              方法2：ドローン測量で現場作業時間を短縮する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              広域の地形測量において、従来は複数の測量班が数日かけて行っていた作業を、ドローン測量では1チーム（1〜2名）が半日で完了できます。特に土木現場の出来形管理や土量計算において効果を発揮します。
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">広域計測の効率化</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ドローンは1フライト（約15〜20分）で10ha以上の範囲を上空から撮影し、フォトグラメトリ処理によって3D地形モデルを生成します。従来のTS測量で同範囲を計測する場合、3〜4名体制で3〜5日かかっていた作業が、1〜2名で半日に短縮されます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">作業時間：従来の1/3以下</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">人員：3〜4名から1〜2名</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">定期計測の自動化</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  飛行ルートをプリセットしておけば、毎回同じ条件で計測できます。造成工事の進捗管理では、週1回の定期フライトで土量変化を自動追跡する運用が可能です。手動測量では毎回の段取りに時間がかかりますが、ドローンなら準備から撤収まで2時間以内で完了します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">飛行ルートの再利用が可能</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">進捗管理の自動化</span>
                </div>
              </div>
            </div>

            <p className="text-base leading-loose text-gray-700 mb-4">
              ドローン測量の精度は±2〜5cm程度のため、高精度が求められる場合は地上レーザースキャナとの併用が効果的です。広域はドローン、詳細部分は3Dスキャナという使い分けにより、精度と効率を両立できます。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">御社の現場に最適な省人化プランをご提案します。まずは無料相談から。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 方法3 */}
            <h2 id="method3" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              方法3：データ処理の自動化で事務工数を削減する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              測量の人手不足は現場作業だけでなく、データ整理や図面作成などの内業にも及びます。3D測量で取得した点群データは、専用ソフトウェアによる自動処理で内業工数を大幅に削減できます。
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  title: "自動土量計算",
                  desc: "点群データ同士を比較するだけで、切土・盛土の土量を自動算出します。従来は断面図を1本ずつ作成し手計算で算出していた作業が、ソフトウェア上で数分で完了します。計算精度も向上し、数量の手戻りが減少します。",
                  effect: "工数削減：約60%",
                },
                {
                  title: "帳票・報告書の自動作成",
                  desc: "計測データから出来形管理帳票や横断図を自動生成します。i-Constructionに対応したフォーマットで出力でき、監督員への提出書類の作成時間を大幅に短縮します。",
                  effect: "工数削減：約50%",
                },
                {
                  title: "3Dモデルの自動生成",
                  desc: "点群データからメッシュモデルや地形モデルを自動生成し、設計データとの差分を可視化します。目視確認では見落としがちな微小な変位も自動検出でき、品質管理の精度が向上します。",
                  effect: "工数削減：約40%",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 p-5 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{item.effect}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-base leading-loose text-gray-700 mb-4">
              これら3つの自動化を組み合わせることで、内業全体の事務工数を約50%削減できます。その結果、限られた技術者が現場作業に集中でき、人手不足の影響を最小限に抑えられます。
            </p>

            {/* 5. 成功事例 */}
            <h2 id="cases" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量による省人化の成功事例
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              実際に3D測量を導入し、人手不足の解消に成功した事例を紹介します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">事例1</span>
                  <h3 className="text-lg font-bold text-gray-800">高速道路の出来形管理</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">計測人員</p>
                    <p className="text-sm font-bold text-gray-900">4名 → 1名</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">作業時間</p>
                    <p className="text-sm font-bold text-gray-900">2日 → 半日</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">年間コスト削減</p>
                    <p className="text-sm font-bold text-gray-900">約40%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dスキャナとドローンを併用し、高速道路の路面出来形管理を省人化。従来4名体制で2日かかっていた計測を1名で半日に短縮しました。
                </p>
                <Link href="/case" className="inline-block text-sm text-primary hover:underline mt-2">→ 導入事例の詳細を見る</Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">事例2</span>
                  <h3 className="text-lg font-bold text-gray-800">大規模造成工事の土量管理</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">計測頻度</p>
                    <p className="text-sm font-bold text-gray-900">月1回 → 週1回</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">人員</p>
                    <p className="text-sm font-bold text-gray-900">3名 → 1名</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">土量計算の精度向上</p>
                    <p className="text-sm font-bold text-gray-900">誤差±5%→±1%</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ドローン測量による定期フライトで、造成工事の土量変化をリアルタイムに把握。計測頻度を増やしながら人員を削減し、残土処分の精度も改善しました。
                </p>
                <Link href="/case" className="inline-block text-sm text-primary hover:underline mt-2">→ 導入事例の詳細を見る</Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">事例3</span>
                  <h3 className="text-lg font-bold text-gray-800">河川構造物の定期点検</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">点検人員</p>
                    <p className="text-sm font-bold text-gray-900">5名 → 2名</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">報告書作成</p>
                    <p className="text-sm font-bold text-gray-900">3日 → 1日</p>
                  </div>
                  <div className="text-center bg-gray-50 rounded p-3">
                    <p className="text-xs text-gray-500 mb-1">安全性</p>
                    <p className="text-sm font-bold text-gray-900">接近不要</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dスキャナで河川護岸の変状を非接触計測。危険箇所への人の立ち入りを不要にしながら、点検精度を向上させました。経年変化の比較もデータ上で自動化しています。
                </p>
                <Link href="/case" className="inline-block text-sm text-primary hover:underline mt-2">→ 導入事例の詳細を見る</Link>
              </div>
            </div>

            {/* 6. コストと回収期間 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              導入に必要なコストと回収期間
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量の導入には初期投資が必要ですが、人件費削減と作業効率化により投資回収が可能です。自社導入と外注の2パターンで試算を示します。
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">項目</th>
                    <th className="px-4 py-3 text-left">自社導入</th>
                    <th className="px-4 py-3 text-left">外注活用</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "初期費用", a: "1,000万〜3,000万円（機材）", b: "0円" },
                    { item: "ランニングコスト", a: "保守費 年50万〜100万円", b: "1現場あたり30万〜100万円" },
                    { item: "人件費削減効果", a: "年間300万〜600万円", b: "案件ごとに変動" },
                    { item: "投資回収期間", a: "2〜3年（年10件以上の場合）", b: "初回から効果あり" },
                    { item: "向いている企業", a: "年間測量件数が多い企業", b: "スポット利用・導入検討段階" },
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

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>まずは外注で効果を実感：</strong>3D測量の導入を検討中の企業には、まず外注で1〜2現場を試し、省人化の効果を実感した上で自社導入を判断する方法をお勧めしています。当社では初回のトライアル測量もご相談いただけます。
              </p>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "3D測量を導入すれば、測量未経験者でも作業できますか？",
                  a: "基本的な操作は2〜3日間の研修で習得できます。3Dスキャナはボタン操作で自動計測するため、従来測量のような長年の経験が不要です。ただし、基準点測量の知識やデータ処理には専門スキルが必要なため、当社では導入後の技術サポートも提供しています。",
                },
                {
                  q: "3D測量の導入費用はどれくらいかかりますか？",
                  a: "自社で機材を購入する場合、3Dレーザースキャナは1,000万〜3,000万円程度です。外注する場合は1現場あたり30万円〜が目安です。人件費削減効果を考慮すると、年間10件以上の測量案件がある企業では2〜3年での投資回収が見込めます。",
                },
                {
                  q: "既存のCADソフトとデータ連携できますか？",
                  a: "はい、点群データはAutoCAD、Civil 3D、Revitなど主要なCADソフトにインポートできます。LAS、E57、PTSなど汎用的なフォーマットで納品するため、お使いのソフトウェア環境に合わせた連携が可能です。",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 8. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              測量業界の人手不足は今後も続くことが予想されますが、3D測量の導入によって限られた人員でも高品質な測量を実現できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">本記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 方法1：3Dスキャナの導入で計測要員を3名から1〜2名に削減できる</li>
                <li>・ 方法2：ドローン測量で広域計測の作業時間を1/3以下に短縮できる</li>
                <li>・ 方法3：データ処理の自動化で内業の事務工数を約50%削減できる</li>
                <li>・ 外注活用なら初期投資ゼロで省人化効果を実感できる</li>
                <li>・ 自社導入の場合も年間10件以上の案件があれば2〜3年で投資回収が可能</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              人手不足でお悩みの建設会社の管理者の方は、まずは1現場でのトライアル導入から始めてみてはいかがでしょうか。当社では、現場の状況に合わせた最適な省人化プランをご提案しています。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              測量の人手不足、3D測量で解決しませんか？
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              御社の現場に最適な省人化プランをご提案します。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/case"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                導入事例を見る
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
              <Link href="/blog/surveying-dx" className="block text-sm text-primary hover:underline">
                → 測量DXの進め方｜中小測量会社が取り組むべきステップ
              </Link>
              <Link href="/blog/3d-surveying-use-cases" className="block text-sm text-primary hover:underline">
                → 3D測量の活用事例10選｜建設・土木・インフラでの導入効果
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
