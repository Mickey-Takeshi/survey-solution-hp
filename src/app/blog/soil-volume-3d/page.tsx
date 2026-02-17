import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "土量計算を3Dスキャンで効率化する方法｜精度と工数の改善効果",
  description:
    "3Dスキャンによる土量計算は従来の断面法と比較して精度±3%以内、計算工数を70%削減できます。点群データから地形メッシュモデルを自動生成し、切土・盛土量を3D上で算出する方法を施工管理者向けに解説します。",
  keywords: ["土量計算 3D", "土量計算 効率化", "3Dスキャン 土量", "点群 土量計算", "切土盛土 3D"],
  alternates: { canonical: "/blog/soil-volume-3d" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "土量計算を3Dスキャンで効率化する方法｜精度と工数の改善効果",
  description:
    "3Dスキャンによる土量計算は従来の断面法と比較して精度±3%以内、計算工数を70%削減。点群データから切土・盛土量を3D上で自動算出する方法を解説。",
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
    "@id": "https://surveysolution.pro/blog/soil-volume-3d",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3Dスキャンによる土量計算の精度はどの程度ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3Dスキャンによる土量計算の精度は、従来の平均断面法と比較して±3%以内です。点群データから地形全体をメッシュモデル化するため、断面間の地形変化も正確に反映されます。検証点を設置して精度管理を行えば、i-Construction基準（標高値±50mm以内）にも対応可能です。",
      },
    },
    {
      "@type": "Question",
      name: "既存の断面法データから3D土量計算に移行できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、移行可能です。既存の横断測量データをインポートし、3Dスキャンで取得した点群データと組み合わせることで、段階的に3D土量計算へ移行できます。弊社では過去データとの整合性を確認しながら移行をサポートしています。",
      },
    },
    {
      "@type": "Question",
      name: "土量計算の3D化にはどのような機材が必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "計測にはドローン（UAV）または地上型レーザースキャナを使用します。データ処理にはTREND-POINT、EL.Point、CloudCompareなどの点群処理ソフトウェアが必要です。弊社に外注いただく場合は、機材・ソフトウェアの準備は不要で、現場の計測から土量算出・帳票作成まで一貫して対応します。",
      },
    },
  ],
};

export default function SoilVolume3DPage() {
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
          { name: "土量計算を3Dスキャンで効率化", path: "/blog/soil-volume-3d" },
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
                土木応用
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              土量計算を3Dスキャンで効率化する方法｜精度と工数の改善効果
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-earthwork.jpg"
              alt="土量計算のための3Dスキャン - 土木現場"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3Dスキャンによる土量計算は、従来の断面法と比較して精度±3%以内、計算工数を70%削減できます。</strong>点群データから地形のメッシュモデルを自動生成し、設計面との差分から切土・盛土量を3D上で自動算出します。本記事では、従来の土量計算が抱える課題から3Dスキャンによる解決方法、精度と工数の改善効果まで、施工管理者が押さえるべきポイントを解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#issues" className="hover:underline">1. 従来の土量計算の課題</a></li>
                <li><a href="#mechanism" className="hover:underline">2. 3Dスキャンによる土量計算の仕組み</a></li>
                <li><a href="#comparison" className="hover:underline">3. 断面法 vs 3D土量計算の比較</a></li>
                <li><a href="#improvement" className="hover:underline">4. 精度と工数の改善効果</a></li>
                <li><a href="#methods" className="hover:underline">5. 対応する計測手法（ドローン/レーザー）</a></li>
                <li><a href="#iconstruction" className="hover:underline">6. i-Constructionへの対応</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 従来の土量計算の課題 */}
            <h2 id="issues" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来の土量計算の課題
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              従来の土量計算は「平均断面法」が主流です。平均断面法とは、測量した横断面の面積を隣接する断面間で平均し、断面間距離を掛けて土量を算出する方法です。この手法は計算が比較的簡単ですが、以下の課題があります。
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  title: "断面間の地形変化を反映できない",
                  desc: "横断測量は20m間隔で実施するのが一般的です。しかし断面間に窪みや突起があっても、隣接する2断面の平均値で算出するため、実際の地形変化が土量に反映されません。断面間隔が広いほど、誤差は大きくなります。",
                },
                {
                  title: "測量工数が大きい",
                  desc: "横断測量では、各断面上の地盤高を1点ずつトータルステーションで計測します。延長500mの現場で20m間隔の場合、26断面の測量が必要で、1断面あたり10〜20点を計測すると260〜520点の測量作業が発生します。",
                },
                {
                  title: "手計算・Excel処理でミスが発生しやすい",
                  desc: "断面積の算出と平均断面法の計算は、手計算またはExcelで行うケースが多く、入力ミスや計算式の誤りが品質リスクになります。再計算のたびに手作業が発生し、修正に時間がかかります。",
                },
                {
                  title: "設計変更時の再計算が非効率",
                  desc: "施工中に設計面が変更された場合、影響する全断面の土量を再計算する必要があります。横断図の修正から始まるため、設計変更のたびに数日の工数が発生することもあります。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 2. 3Dスキャンによる土量計算の仕組み */}
            <h2 id="mechanism" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dスキャンによる土量計算の仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dスキャンによる土量計算は、現況地形を点群データとして面的に取得し、3Dメッシュモデル（TIN：不整三角形網）を生成した上で、設計面との差分体積を自動算出する手法です。断面ではなく「面と面の差分」で土量を算出するため、地形の凹凸を正確に反映できます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "現況地形の3Dスキャン",
                  desc: "ドローンまたは地上レーザースキャナで現場全体をスキャンし、数百万〜数千万点の点群データを取得します。1m^2あたり数十〜数百点の密度で地盤高を記録するため、横断測量では捉えきれない微細な地形変化も把握できます。",
                },
                {
                  step: "STEP 2",
                  title: "点群データの処理・メッシュモデル生成",
                  desc: "取得した点群データからノイズ（植生・車両・作業員など）を除去し、地盤面の点群のみを抽出します。その後、TINメッシュモデルを自動生成し、現況地形の3Dサーフェスを構築します。",
                },
                {
                  step: "STEP 3",
                  title: "設計面データとの重ね合わせ",
                  desc: "3次元設計データ（LandXML等）を読み込み、現況メッシュモデルと設計面を同一座標系上で重ね合わせます。座標系は公共座標（平面直角座標系）を使用し、GNSSまたは基準点測量で位置精度を担保します。",
                },
                {
                  step: "STEP 4",
                  title: "切土・盛土量の自動算出",
                  desc: "現況面と設計面の差分体積を3D上で自動計算します。現況面が設計面より高い箇所は切土、低い箇所は盛土として分類され、それぞれの体積がm^3単位で出力されます。ヒートマップ形式で差分を可視化することも可能です。",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 3 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. 断面法 vs 3D土量計算の比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              断面法 vs 3D土量計算の比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              平均断面法と3D土量計算の違いを項目別に比較します。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">平均断面法</th>
                    <th className="px-4 py-3 text-left">3D土量計算</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計算精度", section: "断面間隔に依存（誤差5〜15%）", threeD: "面的算出で±3%以内" },
                    { item: "データ取得方法", section: "横断測量（1断面10〜20点）", threeD: "3Dスキャン（数百万点）" },
                    { item: "地形の再現性", section: "断面間の変化を反映できない", threeD: "微細な凹凸まで再現" },
                    { item: "計算工数", section: "手計算・Excel（数日）", threeD: "ソフトウェアで自動算出（数時間）" },
                    { item: "設計変更対応", section: "全断面の再計算が必要", threeD: "設計面の差し替えで即時再計算" },
                    { item: "成果の可視化", section: "横断図・数量表", threeD: "3Dヒートマップ・差分カラーマップ" },
                    { item: "i-Construction対応", section: "面的管理に非対応", threeD: "面的管理に完全対応" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.section}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.threeD}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              平均断面法は計算が簡易な反面、断面間隔が広い場合や地形変化が激しい場合に精度が低下します。3D土量計算は初期の計測コストはかかりますが、精度・工数・設計変更対応の全てで優位性があります。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">土量計算の3D化をご検討中ですか？現場条件に合わせた最適な計測方法をご提案します。</p>
              <Link href="/solution/construction" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                建設向け3D測量サービスを見る
              </Link>
            </div>

            {/* 4. 精度と工数の改善効果 */}
            <h2 id="improvement" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              精度と工数の改善効果
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンによる土量計算を導入することで、精度と工数の両面で改善効果が得られます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "計算精度：誤差±3%以内を実現",
                  desc: "平均断面法では断面間隔20mの場合、地形変化の大きい現場で5〜15%の誤差が生じます。3D土量計算では、地形全体をメッシュモデル化して体積を算出するため、誤差を±3%以内に抑えることが可能です。数量精度の向上により、資材発注量の最適化や設計変更時の数量根拠の明確化にもつながります。",
                },
                {
                  num: "2",
                  title: "計算工数：従来比70%削減",
                  desc: "横断測量＋手計算で3〜5日かかっていた土量算出が、3Dスキャン＋ソフトウェア処理で1日以内に完了します。特に設計変更時の再計算は、設計面データを差し替えるだけで即時に再算出できるため、従来のような全断面の再計算が不要です。",
                },
                {
                  num: "3",
                  title: "手戻り削減：計測ミスの早期発見",
                  desc: "3Dヒートマップで切土・盛土の分布を可視化できるため、施工計画段階で数量の偏りや異常値を発見しやすくなります。平均断面法では数値表でしか確認できなかった土量バランスが、直感的に把握できるようになります。",
                },
                {
                  num: "4",
                  title: "合意形成の迅速化：3D可視化で関係者間の認識統一",
                  desc: "切土・盛土の差分カラーマップは、発注者・設計者・施工者の間で数量の根拠を共有する際に有効です。数値表だけでは伝わりにくい土量の空間的な分布を、3Dモデル上で視覚的に説明できるため、設計変更時の合意形成がスムーズになります。",
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

            {/* 5. 対応する計測手法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              対応する計測手法（ドローン/レーザー）
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D土量計算に使用する点群データの取得方法は、主にドローン（UAV）測量と地上レーザースキャンの2種類です。現場の規模や精度要件に応じて使い分けます。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">ドローン（UAV）測量</th>
                    <th className="px-4 py-3 text-left">地上レーザースキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", drone: "±2〜5cm", laser: "±1〜3mm" },
                    { item: "適した現場規模", drone: "1ha以上の広域土工現場", laser: "構造物周辺・法面・狭隘部" },
                    { item: "土量計算への適性", drone: "広範囲の切土・盛土量算出に最適", laser: "高精度な局所的土量計算に適合" },
                    { item: "計測時間", drone: "撮影15〜30分（1ha）", laser: "2〜4時間/箇所（設置含む）" },
                    { item: "点群密度", drone: "50〜200点/m^2", laser: "1,000〜10,000点/m^2" },
                    { item: "植生の影響", drone: "地表面取得が困難", laser: "レーザーが植生を透過しやすい" },
                    { item: "天候制約", drone: "風速5m/s以上・雨天は不可", laser: "雨天以外は概ね作業可能" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.drone}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.laser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              土工現場の土量計算ではドローン測量が主流です。1フライトで広範囲をカバーでき、定期的な出来形管理にも対応しやすいためです。法面の詳細計測や構造物との取り合い部分では地上レーザースキャンを併用し、両手法の点群データを統合して精度の高い土量計算を実現します。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>弊社の対応：</strong>ドローン測量と地上レーザースキャンの両方に対応しています。現場の規模・精度要件・工期に応じて最適な計測方法をご提案します。両手法を組み合わせた計測も可能です。
              </p>
            </div>

            {/* 6. i-Constructionへの対応 */}
            <h2 id="iconstruction" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              i-Constructionへの対応
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              国土交通省が推進するi-Constructionでは、土量算出に3次元データの活用が求められています。3Dスキャンによる土量計算は、i-Constructionの成果物要件に対応しています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              i-Constructionにおける土量計算の要件と、3Dスキャンでの対応方法は以下の通りです。
            </p>
            <div className="space-y-3 mb-6">
              {[
                {
                  title: "起工測量との連携",
                  desc: "起工測量で取得した点群データをそのまま土量計算の基準面として使用できます。従来のように横断図を別途作成する工程が不要になり、測量から土量算出までのデータが一貫します。",
                },
                {
                  title: "面的な土量管理",
                  desc: "i-Constructionでは面的な出来形管理が求められますが、3D土量計算は面的管理と完全に整合します。施工の各段階で点群データを取得し、設計面との差分から残土量・必要盛土量をリアルタイムに把握できます。",
                },
                {
                  title: "土量計算書の作成",
                  desc: "3Dメッシュモデルから算出した切土量・盛土量は、i-Construction基準の土量計算書として出力可能です。ヒートマップ形式の差分図も添付でき、検査時の説明資料として活用できます。",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">-</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              i-Construction対応の土量計算について詳しく知りたい方は、以下の記事もご覧ください。
            </p>
            <p className="mb-4">
              <Link href="/blog/i-construction-3d-surveying" className="text-sm text-primary hover:underline">
                → i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ
              </Link>
            </p>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "3Dスキャンによる土量計算の精度はどの程度ですか？",
                  a: "従来の平均断面法と比較して±3%以内の精度です。点群データから地形全体をメッシュモデル化するため、断面間の地形変化も正確に反映されます。検証点を設置して精度管理を行えば、i-Construction基準（標高値±50mm以内）にも対応可能です。",
                },
                {
                  q: "既存の断面法データから3D土量計算に移行できますか？",
                  a: "はい、移行可能です。既存の横断測量データをインポートし、3Dスキャンで取得した点群データと組み合わせることで、段階的に3D土量計算へ移行できます。弊社では過去データとの整合性を確認しながら移行をサポートしています。",
                },
                {
                  q: "土量計算の3D化にはどのような機材が必要ですか？",
                  a: "計測にはドローン（UAV）または地上型レーザースキャナ、データ処理にはTREND-POINTやEL.Pointなどの点群処理ソフトウェアが必要です。弊社に外注いただく場合は機材・ソフトウェアの準備は不要で、現場の計測から土量算出・帳票作成まで一貫して対応します。",
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
              3Dスキャンによる土量計算は、従来の平均断面法が抱える精度・工数・再計算の課題を解決する手法です。点群データから地形を面的に把握し、設計面との差分体積を自動算出することで、施工管理の効率と品質を向上させます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 3D土量計算は従来の断面法に対して精度±3%以内を実現</li>
                <li>・ 計算工数は従来比70%削減（3〜5日 → 1日以内）</li>
                <li>・ 設計変更時は設計面データの差し替えで即時再計算が可能</li>
                <li>・ ドローンと地上レーザーを現場条件に応じて使い分ける</li>
                <li>・ i-Constructionの面的土量管理にも完全対応</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              土量計算の3D化をご検討中の方は、まずは対象現場の規模・精度要件をお聞かせください。最適な計測方法と費用感をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              土量計算の3D化はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              現場の計測から土量算出・帳票作成まで一貫して対応します。i-Construction対応もサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/construction"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                建設向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/i-construction-3d-surveying" className="block text-sm text-primary hover:underline">
                → i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                → 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
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
