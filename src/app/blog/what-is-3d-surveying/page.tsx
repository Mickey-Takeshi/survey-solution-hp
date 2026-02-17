import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説",
  description:
    "3D測量（三次元測量）とは、レーザーやドローンで対象物を立体的にデータ化する技術です。従来測量との違い、精度・コスト・活用分野まで、初めての方にもわかりやすく解説します。",
  keywords: ["3D測量 とは", "3D測量 メリット", "三次元測量 仕組み", "3D測量 従来測量 違い"],
  alternates: { canonical: "/blog/what-is-3d-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説",
  description:
    "3D測量（三次元測量）とは、レーザーやドローンで対象物を立体的にデータ化する技術です。従来測量との違い、精度・コスト・活用分野まで解説。",
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
    "@id": "https://surveysolution.pro/blog/what-is-3d-surveying",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量の精度はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャナの場合、±1〜3mmの精度で計測できます。ドローン測量の場合は±2〜5cm程度です。対象物や計測距離により変動しますが、従来測量の手作業実測（±10〜20mm）と比較して高い精度を実現します。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の費用はいくらかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象面積・精度要件・納品物により異なりますが、地上レーザースキャンは30万円〜、ドローン測量は20万円〜が目安です。詳しくは料金ページをご覧いただくか、無料見積もりをご依頼ください。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量のデータはどのように活用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データとして取得し、CAD図面の作成、BIM/CIMモデルの構築、土量計算、干渉チェック、変位計測、3Dプリント用データなど幅広く活用できます。建設・建築・プラント・インフラ点検・文化財保存など多様な分野で利用されています。",
      },
    },
  ],
};

export default function WhatIs3DSurveyingPage() {
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
          { name: "3D測量とは？", path: "/blog/what-is-3d-surveying" },
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
                基礎知識
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-construction-survey.jpg"
              alt="3D測量の現場イメージ - 建設現場での測量作業"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量（三次元測量）とは、レーザーやドローンを使って対象物の形状を立体的にデータ化する測量技術です。</strong>従来のトータルステーション（TS）測量が「点」で計測するのに対し、3D測量は1秒間に数十万〜数百万の座標点（点群データ）を取得し、対象物を「面」で捉えます。精度±1〜3mm、計測時間は従来の1/3〜1/5に短縮でき、建設・建築・プラント・インフラ点検・文化財保存など幅広い分野で導入が進んでいます。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 3D測量とは？｜定義と基本の仕組み</a></li>
                <li><a href="#methods" className="hover:underline">2. 3D測量の3つの方法</a></li>
                <li><a href="#comparison" className="hover:underline">3. 従来測量との違いを比較</a></li>
                <li><a href="#merit" className="hover:underline">4. 3D測量の5つのメリット</a></li>
                <li><a href="#fields" className="hover:underline">5. 3D測量の活用分野</a></li>
                <li><a href="#flow" className="hover:underline">6. 3D測量の一般的な流れ</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 定義 */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量とは？｜定義と基本の仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量（三次元測量）とは、レーザー光やカメラ映像を用いて、対象物の三次元座標（X・Y・Z）を高密度に取得する測量技術です。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              取得したデータは「点群データ」と呼ばれ、数百万〜数億個の座標点の集合体として対象物の形状を忠実に再現します。この点群データを基に、CAD図面・3Dモデル・BIM/CIMデータなど、設計・施工に必要な成果物を作成します。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>従来測量との最大の違い：</strong>従来のTS測量は測りたい「点」を1つずつ計測するのに対し、3D測量はレーザーを360度照射して対象物全体を「面」として計測します。計測漏れが起きにくく、後から任意の場所の寸法をデータ上で確認できる点が大きな特徴です。
              </p>
            </div>

            {/* 2. 方法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の3つの方法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量には主に3つの手法があり、対象物の規模・精度要件・現場条件に応じて使い分けます。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">① 地上レーザースキャン</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に設置した3Dレーザースキャナから360度にレーザーを照射し、1秒間に最大200万点の座標データを取得します。精度は±1〜3mmで、建物・プラント・トンネルなどの高精度計測に最適です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±1〜3mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">建物・プラント・構造物向き</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">② ドローン（UAV）測量</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ドローンに搭載したカメラで上空から大量の写真を撮影し、フォトグラメトリ技術で3Dモデルを生成します。広大な土地の地形測量に適しており、1フライト（約15〜20分）で10ha以上の範囲を計測できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±2〜5cm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">広域地形・土木現場向き</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">③ ハンドヘルド（モバイル）スキャン</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  手持ち型のスキャナで歩行しながら計測します。狭い通路・階段・配管裏など、据置型スキャナでは死角になる場所の補完計測に使用します。SLAM技術により、移動しながらリアルタイムで点群を生成します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±5〜30mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">狭所・屋内・補完計測向き</span>
                </div>
              </div>
            </div>

            {/* 3. 比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来測量との違いを比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量と従来のTS（トータルステーション）測量を主要な指標で比較すると、以下の通りです。
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
                    { item: "計測方法", a: "レーザー/写真で面的に取得", b: "1点ずつ手動で計測" },
                    { item: "計測速度", a: "100万点/秒以上", b: "1点/数秒〜数分" },
                    { item: "精度", a: "±1〜3mm（レーザー）", b: "±2〜5mm" },
                    { item: "データ量", a: "数億〜数十億点", b: "数十〜数百点" },
                    { item: "現場作業時間", a: "従来の1/3〜1/5", b: "基準（1倍）" },
                    { item: "後から追加計測", a: "データ上で任意箇所を計測可", b: "再度現場へ行く必要あり" },
                    { item: "成果物", a: "点群・3Dモデル・BIM/CIM", b: "2D図面（CAD）" },
                    { item: "必要人数", a: "1〜2名", b: "2〜3名" },
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

            {/* 4. メリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の5つのメリット
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "計測時間を1/3〜1/5に短縮", desc: "レーザースキャナは1秒間に100万点以上のデータを取得するため、従来数日かかる計測を数時間で完了します。弊社の実績では、2,000㎡のビル全体を2日間でスキャン完了した事例があります。" },
                { num: "2", title: "面的データで計測漏れを防止", desc: "点ではなく面で計測するため、「測り忘れ」がありません。取得したデータから後日、任意の場所の寸法や断面を抽出できます。現場への戻り作業が不要になり、プロジェクト全体のスケジュール短縮に貢献します。" },
                { num: "3", title: "ミリメートル精度の高品質データ", desc: "地上レーザースキャナの計測精度は±1〜3mmです。手作業の実測（±10〜20mm）と比較して格段に精度が高く、設計の手戻りを削減します。弊社の事例では、設計手戻りを50%削減した実績があります。" },
                { num: "4", title: "BIM/CIMへのデータ連携", desc: "点群データはRevit・ArchiCAD・Civil 3Dなど主要なBIM/CIMソフトにインポートできます。既存建物のBIM化（スキャンtoBIM）や、i-Constructionの3次元データ活用にも対応します。" },
                { num: "5", title: "安全性の向上", desc: "非接触で計測できるため、高所・法面・老朽化した構造物など、人が近づきにくい場所も安全に計測できます。ドローンを併用すれば、足場や高所作業車なしで屋根や外壁のデータを取得できます。" },
              ].map((m) => (
                <div key={m.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{m.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">3D測量の導入を検討中ですか？まずは無料相談から始められます。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 5. 活用分野 */}
            <h2 id="fields" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の活用分野
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は建設・土木を中心に、以下の分野で導入が進んでいます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { field: "建設・土木", detail: "出来形管理、土量計算、施工シミュレーション", link: "/solution/construction", linkText: "建設・土木向け3D測量" },
                { field: "建築・リノベーション", detail: "既存建物の現況図面作成、BIMモデル構築", link: "/solution/architecture", linkText: "建築・リノベ向け3D測量" },
                { field: "プラント・工場", detail: "配管3Dモデル化、干渉チェック、設備台帳", link: "/solution/plant", linkText: "プラント・工場向け3D測量" },
                { field: "インフラ点検", detail: "橋梁・トンネルの変状記録、経年変化管理", link: "/solution/infrastructure", linkText: "インフラ点検向け3D測量" },
                { field: "文化財・遺跡", detail: "デジタルアーカイブ、修復計画、VR展示", link: "/solution/heritage", linkText: "文化財の3D記録" },
                { field: "災害対策", detail: "被災状況の記録、土砂崩壊リスク評価", link: "/contact", linkText: "お問い合わせ" },
              ].map((f) => (
                <div key={f.field} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{f.field}</h3>
                  <p className="text-xs text-gray-600 mb-2">{f.detail}</p>
                  <Link href={f.link} className="text-xs text-primary hover:underline">→ {f.linkText}</Link>
                </div>
              ))}
            </div>

            {/* 6. 流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の一般的な流れ
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "ヒアリング・現地調査", desc: "計測対象・精度要件・納品物をヒアリングし、最適な計測手法を選定します。" },
                { step: "STEP 2", title: "現場スキャン", desc: "レーザースキャナやドローンで現場を計測します。対象規模にもよりますが、1日〜数日で完了します。" },
                { step: "STEP 3", title: "データ処理・点群作成", desc: "複数のスキャンデータを合成・不要ノイズを除去し、高品質な点群データを作成します。" },
                { step: "STEP 4", title: "成果物作成", desc: "点群データを基にCAD図面、3Dモデル、BIMモデルなどご要望の成果物を作成します。" },
                { step: "STEP 5", title: "納品・アフターサポート", desc: "成果物を納品し、データの活用方法についてサポートします。追加計測や修正にも対応します。" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 4 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3D測量の精度はどれくらいですか？", a: "地上レーザースキャナの場合、±1〜3mmの精度で計測できます。ドローン測量の場合は±2〜5cm程度です。対象物や計測距離により変動しますが、従来の手作業実測（±10〜20mm）と比較して高い精度を実現します。" },
                { q: "3D測量の費用はいくらかかりますか？", a: "対象面積・精度要件・納品物により異なりますが、地上レーザースキャンは30万円〜、ドローン測量は20万円〜が目安です。詳しくは料金ページをご覧ください。" },
                { q: "3D測量のデータはどのように活用できますか？", a: "CAD図面の作成、BIM/CIMモデルの構築、土量計算、干渉チェック、変位計測など幅広く活用できます。建設・建築・プラント・インフラ点検・文化財保存など多様な分野で利用されています。" },
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
              3D測量は、レーザーやドローンで対象物を立体的にデータ化する技術です。従来測量と比較して、計測時間を1/3〜1/5に短縮し、±1〜3mmの高精度データを取得できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 3D測量は「点」ではなく「面」で計測し、計測漏れを防止できる</li>
                <li>• 地上レーザー・ドローン・ハンドヘルドの3手法を対象に応じて使い分ける</li>
                <li>• BIM/CIMへのデータ連携でi-Constructionにも対応</li>
                <li>• 建設・建築・プラント・インフラ・文化財など幅広い分野で活用が進んでいる</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量の導入を検討されている方は、まずは現場の課題をお聞かせください。対象物に適した計測手法と概算費用をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「何から始めればいいか分からない」という段階でも大丈夫です。まずはお気軽にご相談ください。
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
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">→ 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント</Link>
              <Link href="/blog/3d-vs-traditional-surveying" className="block text-sm text-primary hover:underline">→ 3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較</Link>
              <Link href="/blog/choose-3d-surveying-company" className="block text-sm text-primary hover:underline">→ 3D測量業者の選び方｜失敗しない5つのチェックポイント</Link>
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
