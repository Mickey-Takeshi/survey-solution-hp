import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "橋梁点検における3D測量の活用｜変状記録と経年変化の管理",
  description:
    "橋梁点検に3D測量（3Dスキャン）を活用する方法を解説。変状箇所の点群記録・断面計測・経年変化の定量比較から、点検報告書の効率化まで、インフラ点検担当者向けに具体的な活用フローをまとめました。",
  keywords: ["橋梁点検 3D測量", "橋梁 3Dスキャン", "橋梁 点群データ", "橋梁 変状記録", "インフラ点検 3D"],
  alternates: { canonical: "/blog/bridge-inspection-3d" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "橋梁点検における3D測量の活用｜変状記録と経年変化の管理",
  description:
    "橋梁点検に3D測量を活用する方法を解説。変状記録・断面計測・経年変化の定量管理・点検報告書の効率化まで、インフラ点検担当者向けにまとめました。",
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
    "@id": "https://surveysolution.pro/blog/bridge-inspection-3d",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "橋梁点検で3Dスキャンを行うには通行止めが必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャナによる桁下・橋脚の計測は、橋梁点検車と同様の交通規制で対応可能です。ドローンによる上部工の撮影は、橋面上の規制が不要なケースもあります。現場条件に応じて最小限の規制計画をご提案します。",
      },
    },
    {
      "@type": "Question",
      name: "既存の点検調書データと3D点群データは連携できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。点群データ上の変状箇所に点検調書の損傷番号を紐付けることで、2Dの調書情報と3Dの空間情報を統合管理できます。過去の点検記録との比較も、座標系を統一すれば実施できます。",
      },
    },
    {
      "@type": "Question",
      name: "1橋あたりの3Dスキャン費用と所要日数はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "橋長・形式・アクセス条件により異なりますが、延長50m程度の単純桁橋の場合、現地計測1日・データ処理2〜3日が目安です。費用は現地調査を踏まえてお見積もりしますので、まずはお気軽にご相談ください。",
      },
    },
  ],
};

export default function BridgeInspection3DPage() {
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
          { name: "橋梁点検における3D測量の活用", path: "/blog/bridge-inspection-3d" },
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
                インフラ
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              橋梁点検における3D測量の活用｜変状記録と経年変化の管理
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-bridge-infrastructure.jpg"
              alt="橋梁点検における3D測量のイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>橋梁点検に3D測量を活用すると、変状箇所を点群データ上で3D記録でき、経年変化を定量的に管理できます。</strong>従来の目視＋スケッチによる記録と比較して、変状記録の精度・効率が大幅に向上し、点検報告書の作成時間を50%削減できます。本記事では、橋梁点検における3D測量の具体的な活用方法・メリット・計測手法・点検フローを、インフラ点検担当者向けにまとめました。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#current" className="hover:underline">1. 橋梁点検の現状と課題</a></li>
                <li><a href="#usage" className="hover:underline">2. 3D測量の活用方法（変状記録・断面計測・変位計測）</a></li>
                <li><a href="#merit" className="hover:underline">3. 4つのメリット</a></li>
                <li><a href="#methods" className="hover:underline">4. 使用する計測手法</a></li>
                <li><a href="#flow" className="hover:underline">5. 3D測量を用いた点検フロー</a></li>
                <li><a href="#comparison" className="hover:underline">6. 従来点検との比較</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 橋梁点検の現状と課題 */}
            <h2 id="current" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              橋梁点検の現状と課題
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              日本国内の道路橋は約72万橋にのぼり、その多くが高度経済成長期に建設されたものです。2014年の道路法改正により、すべての道路橋に対して5年に1回の近接目視点検が義務化されましたが、点検を担う技術者の不足と老朽化橋梁の増加が深刻な課題となっています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              従来の橋梁点検では、技術者が橋梁点検車や足場を使って近接目視し、変状箇所をスケッチ・写真で記録します。この方法には以下の課題があります。
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "変状の位置・寸法の記録が点検者の技量に依存し、定量性に欠ける",
                "スケッチの精度にばらつきがあり、経年変化の比較が困難",
                "点検報告書の作成に膨大な時間がかかる（写真整理・調書作成）",
                "高所・狭隘部の点検では足場設置に時間とコストが発生する",
                "過去の点検結果と現在の状態を同一座標系で比較する手段がない",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
                  <span className="text-primary mt-0.5">--</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-loose text-gray-700 mb-4">
              これらの課題に対し、3D測量（3Dスキャン）を活用することで、変状記録の定量化・経年比較の自動化・報告書作成の効率化が実現できます。
            </p>

            {/* 2. 3D測量の活用方法 */}
            <h2 id="usage" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の活用方法（変状記録・断面計測・変位計測）
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              橋梁点検における3D測量の活用は、大きく3つの用途に分類できます。
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">活用1：変状箇所の3D記録</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              ひび割れ・剥離・鉄筋露出・漏水跡などの変状箇所を、点群データ上に3次元座標つきで記録します。従来のスケッチでは位置の特定が曖昧になりがちですが、点群データ上であれば変状の位置・形状・寸法をmm単位で記録でき、次回点検時にまったく同じ座標で確認できます。
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">活用2：断面計測</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              点群データから任意の位置で断面を切り出し、部材の寸法や形状を計測します。コンクリート床版の厚さ変化、鋼部材の断面欠損、桁のたわみ量などを定量的に把握できます。設計図面の断面と重ね合わせることで、当初設計からの変化量を数値で確認できる点が大きな強みです。
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">活用3：変位計測・経年変化の管理</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              定期点検のたびに同一条件で3Dスキャンを実施し、点群データ同士を比較することで、橋梁全体の変位や変状の進行を定量的に追跡します。たとえば、橋脚の傾斜量の変化、床版下面のひび割れ幅の拡大、支承部のずれ量などを過去データとの差分で可視化できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ポイント：</strong>3D測量による変状記録は、点検調書のデジタル化にもつながります。点群データに変状情報を紐付けることで、BIM/CIMとの連携や維持管理データベースへの統合が可能になります。
              </p>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">橋梁点検への3D測量導入をお考えですか？まずはお気軽にご相談ください。</p>
              <Link href="/solution/infrastructure" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                インフラ向け3D測量サービスを見る
              </Link>
            </div>

            {/* 3. 4つのメリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              橋梁点検に3D測量を導入する4つのメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量を橋梁点検に導入することで、以下の4つのメリットが得られます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "変状記録の定量化",
                  desc: "ひび割れの位置・長さ・幅、剥離の面積、断面欠損量などを数値データとして記録できます。点検者の主観に依存しない定量的な記録が可能になり、健全度評価の客観性が向上します。",
                },
                {
                  num: "2",
                  title: "経年変化の定量比較",
                  desc: "同一座標系で取得した異なる時期の点群データを重ね合わせることで、変状の進行度を色分け表示（ヒートマップ）で可視化できます。補修の優先順位判断や予防保全計画の策定に役立ちます。",
                },
                {
                  num: "3",
                  title: "点検報告書の作成時間を50%削減",
                  desc: "点群データから自動的に展開図・断面図・寸法情報を生成できるため、手作業でのスケッチ清書や写真整理の工数が大幅に削減されます。報告書作成時間の50%削減が期待できます。",
                },
                {
                  num: "4",
                  title: "点検時の安全性向上",
                  desc: "ドローンや地上レーザースキャナを活用することで、足場の設置範囲を縮小し、高所作業のリスクを低減できます。橋梁点検車が進入できない箇所でも、非接触で3D計測が可能です。",
                },
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

            {/* 4. 使用する計測手法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              使用する計測手法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              橋梁点検における3D測量では、主に地上レーザースキャナとドローンの2つの手法を組み合わせて使用します。
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">地上レーザースキャナ</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              橋脚・桁下面・床版下面・支承部など、近距離で高精度な計測が求められる箇所に適しています。計測精度は±1〜3mmと高く、ひび割れや断面欠損の詳細な記録に有効です。複数のスキャン位置からデータを取得し、合成することで橋梁全体の3Dモデルを構築します。
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">ドローン（UAV）</h3>
            <p className="text-base leading-loose text-gray-700 mb-4">
              橋梁上部工（橋面・高欄・地覆）や、橋梁点検車では到達困難な桁側面・桁下面の撮影に活用します。写真測量（SfM）による点群生成のほか、LiDAR搭載ドローンによる直接的な点群取得も可能です。広範囲を短時間で計測できる点が強みです。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">地上レーザースキャナ</th>
                    <th className="px-4 py-3 text-left">ドローン（UAV）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", laser: "±1〜3mm", drone: "±5〜20mm" },
                    { item: "適した部位", laser: "橋脚・桁下面・支承・床版下面", drone: "橋面・高欄・桁側面・全景" },
                    { item: "計測距離", laser: "近距離（〜100m）", drone: "中距離（自由な視点）" },
                    { item: "1橋あたりの作業時間", laser: "半日〜1日", drone: "1〜2時間（飛行）" },
                    { item: "天候制約", laser: "雨天以外は概ね可能", drone: "風速5m/s以上・雨天は不可" },
                    { item: "交通規制", laser: "桁下設置時に必要な場合あり", drone: "橋面上の規制不要なケースあり" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.laser}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.drone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              実際の橋梁点検では、地上レーザースキャナで橋脚・桁下面を高精度に計測し、ドローンで上部工や全景を撮影する併用パターンが最も効果的です。弊社では現場条件を踏まえ、最適な機器構成をご提案しています。
            </p>

            {/* 5. 点検フロー */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量を用いた点検フロー
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              橋梁点検に3D測量を導入する場合の標準的なフローを5ステップで示します。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "事前調査・計測計画",
                  desc: "対象橋梁の設計図書・過去の点検調書を確認し、重点計測箇所と使用機器を決定します。交通規制計画やドローンの飛行許可申請もこの段階で準備します。",
                },
                {
                  step: "STEP 2",
                  title: "基準点設置・現地計測",
                  desc: "橋梁周辺に基準点（ターゲット）を設置し、地上レーザースキャナとドローンで計測を実施します。橋脚・桁・床版・支承など、部位ごとに計測条件を最適化します。",
                },
                {
                  step: "STEP 3",
                  title: "点群データ処理・3Dモデル構築",
                  desc: "取得した点群データのノイズ除去・座標統合を行い、橋梁全体の高密度3Dモデルを構築します。過去データがある場合は同一座標系での位置合わせも行います。",
                },
                {
                  step: "STEP 4",
                  title: "変状抽出・経年変化分析",
                  desc: "3Dモデル上でひび割れ・剥離・変形などの変状箇所を特定し、寸法を計測します。過去の点群データとの差分解析で、変状の進行度を定量的に評価します。",
                },
                {
                  step: "STEP 5",
                  title: "報告書・データ納品",
                  desc: "変状展開図・断面図・経年変化ヒートマップ・計測数値一覧を含む点検報告書を作成します。点群データ（LAS形式等）も納品し、発注者側での追加解析にも対応します。",
                },
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

            {/* 6. 従来点検との比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来点検との比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              従来の目視点検と3D測量を活用した点検を比較すると、以下のような違いがあります。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">従来点検（目視＋スケッチ）</th>
                    <th className="px-4 py-3 text-left">3D測量活用の点検</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "変状記録の精度", traditional: "点検者の技量に依存", modern: "mm単位の定量記録" },
                    { item: "経年変化の比較", traditional: "写真・スケッチの目視比較", modern: "点群差分による定量比較" },
                    { item: "報告書作成時間", traditional: "現地作業の2〜3倍", modern: "従来比50%削減" },
                    { item: "記録の再現性", traditional: "同一箇所の特定が困難", modern: "座標系で完全に一致" },
                    { item: "データの二次利用", traditional: "紙・PDF（活用が限定的）", modern: "3Dデータ（BIM/CIM連携可）" },
                    { item: "高所作業のリスク", traditional: "足場・点検車が必須", modern: "非接触計測で低減" },
                    { item: "点検範囲", traditional: "アクセス可能な範囲に限定", modern: "ドローンで到達困難部も対応" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.traditional}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.modern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量は従来の近接目視点検を完全に置き換えるものではなく、目視点検と組み合わせて活用することで最大の効果を発揮します。目視では把握しにくい微細な変状の定量化や、点検結果の客観的な記録・比較に特に威力を発揮します。
            </p>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "橋梁点検で3Dスキャンを行うには通行止めが必要ですか？",
                  a: "地上レーザースキャナによる桁下・橋脚の計測は、橋梁点検車と同様の交通規制で対応可能です。ドローンによる上部工の撮影は、橋面上の規制が不要なケースもあります。現場条件に応じて最小限の規制計画をご提案します。",
                },
                {
                  q: "既存の点検調書データと3D点群データは連携できますか？",
                  a: "はい、可能です。点群データ上の変状箇所に点検調書の損傷番号を紐付けることで、2Dの調書情報と3Dの空間情報を統合管理できます。過去の点検記録との比較も、座標系を統一すれば実施できます。",
                },
                {
                  q: "1橋あたりの3Dスキャン費用と所要日数はどのくらいですか？",
                  a: "橋長・形式・アクセス条件により異なりますが、延長50m程度の単純桁橋の場合、現地計測1日・データ処理2〜3日が目安です。費用は現地調査を踏まえてお見積もりしますので、まずはお気軽にご相談ください。",
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
              橋梁点検に3D測量を活用することで、変状記録の定量化・経年変化の自動比較・報告書作成の大幅な効率化が実現します。老朽化が進む国内インフラの維持管理において、3Dスキャンによる客観的なデータ蓄積は今後ますます重要になります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 橋梁点検の3D測量は変状記録・断面計測・経年変化管理の3用途で活用</li>
                <li>・ 変状記録の定量化により、点検者の技量に依存しない客観的な評価が可能</li>
                <li>・ 経年変化を点群の差分解析で自動比較し、補修優先度の判断を支援</li>
                <li>・ 点検報告書の作成時間を50%削減できる</li>
                <li>・ 地上レーザーとドローンの併用が最も効果的</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              橋梁点検への3D測量導入をご検討中の方は、対象橋梁の概要をお聞かせください。最適な計測手法と点検計画をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              橋梁点検の3D測量はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              変状記録の3D化から経年変化の定量管理まで一貫して対応します。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/infrastructure"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                インフラ向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/tunnel-cross-section-3d" className="block text-sm text-primary hover:underline">
                → トンネル断面計測における3D測量の活用
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-use-cases" className="block text-sm text-primary hover:underline">
                → 3D測量の活用事例まとめ｜建設・インフラ・不動産の導入効果
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
