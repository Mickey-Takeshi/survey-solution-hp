import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "トンネル断面測量の3D化｜従来手法との精度・効率比較",
  description:
    "トンネル断面測量を3Dレーザースキャンで行うメリットを解説。±5mm精度で全周断面を連続取得し、計測時間を従来の1/3に短縮。巻厚不足・内空変位・余掘り量の自動算出まで、施工・点検担当者向けにまとめました。",
  keywords: ["トンネル 断面測量 3D", "トンネル 3Dスキャン", "トンネル断面測量", "トンネル レーザースキャン"],
  alternates: { canonical: "/blog/tunnel-cross-section-3d" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "トンネル断面測量の3D化｜従来手法との精度・効率比較",
  description:
    "トンネル断面測量を3Dレーザースキャンで行うメリットを解説。±5mm精度の全周断面取得、計測時間1/3短縮、巻厚不足・内空変位の自動算出を紹介。",
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
    "@id": "https://surveysolution.pro/blog/tunnel-cross-section-3d",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "トンネル内の3Dスキャンはどのくらいの時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "延長100mあたり約20〜30分で計測可能です。移動式スキャナを使用する場合は、車両走行しながらの連続計測で、延長1kmのトンネルでも1時間程度で全周の断面データを取得できます。従来のプロフィルメーター計測と比べて計測時間を約1/3に短縮できます。",
      },
    },
    {
      "@type": "Question",
      name: "既設トンネルの点検にも3Dスキャンは使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、既設トンネルの定期点検・臨時点検にも活用できます。初回スキャンを基準データとし、経年変化を定量的に比較することで、覆工コンクリートの変状進行を早期に検出できます。内空断面の変位量を全周にわたって把握できるため、目視点検の補完としても有効です。",
      },
    },
    {
      "@type": "Question",
      name: "施工中のトンネルでも計測できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、掘削直後の素掘り断面から覆工コンクリート打設後まで、各施工段階で計測可能です。粉塵が多い掘削直後は計測精度に影響する場合があるため、換気・集塵後の計測を推奨しています。弊社では施工サイクルに合わせた計測タイミングをご提案します。",
      },
    },
  ],
};

export default function TunnelCrossSection3DPage() {
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
          { name: "トンネル断面測量の3D化", path: "/blog/tunnel-cross-section-3d" },
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
              トンネル断面測量の3D化｜従来手法との精度・効率比較
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-tunnel.jpg"
              alt="トンネル断面測量のイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>トンネル断面測量を3Dレーザースキャンで行うと、全周の断面形状を±5mmの精度で連続的に取得でき、従来のプロフィルメーター計測と比較して計測時間を1/3に短縮できます。</strong>巻厚不足・内空変位・余掘り量の自動算出が可能になり、施工管理と点検業務の両方で大幅な効率化を実現します。本記事では、トンネル断面測量の3D化について、従来手法との比較を交えて詳しく解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#issues" className="hover:underline">1. 従来のトンネル断面測量の課題</a></li>
                <li><a href="#mechanism" className="hover:underline">2. 3Dスキャンによる断面測量の仕組み</a></li>
                <li><a href="#data" className="hover:underline">3. 取得できるデータと成果物</a></li>
                <li><a href="#comparison" className="hover:underline">4. 従来手法との精度・効率比較</a></li>
                <li><a href="#usage" className="hover:underline">5. 施工時と点検時の活用方法</a></li>
                <li><a href="#notes" className="hover:underline">6. 導入時の注意点</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 従来の課題 */}
            <h2 id="issues" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来のトンネル断面測量の課題
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              トンネルの断面測量は、施工管理や定期点検で欠かせない作業です。しかし、従来のプロフィルメーターやトータルステーション（TS）を使った断面計測には、いくつかの課題があります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "計測点数の限界",
                  desc: "プロフィルメーターは1断面あたり数十点を計測しますが、点と点の間の形状は補間に頼ります。覆工コンクリートの局所的な変状や微小な内空変位を捉えきれないことがあります。",
                },
                {
                  title: "計測に時間がかかる",
                  desc: "1断面あたりの計測に約10〜15分かかり、トンネル延長が長い場合は断面間隔を広げざるを得ません。施工中のサイクルタイムに影響し、計測頻度が制限される要因になります。",
                },
                {
                  title: "人的誤差と再現性の問題",
                  desc: "計測器の設置位置やオペレーターの技量によって結果にばらつきが生じます。経年変化の比較では、同一断面での再計測精度が課題となります。",
                },
                {
                  title: "データの二次利用が困難",
                  desc: "従来計測では断面図（2D）として成果が残りますが、3次元モデルへの展開やBIM/CIMとの連携が難しく、データの活用範囲が限定されます。",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. 3Dスキャンの仕組み */}
            <h2 id="mechanism" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dスキャンによる断面測量の仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dレーザースキャナは、レーザー光をトンネル内壁に照射し、反射光の到達時間から三次元座標を算出します。毎秒数十万点の計測が可能で、トンネル全周の形状を高密度な点群データとして取得できます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              トンネル断面測量で使用されるスキャナには主に2つのタイプがあります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "据置型レーザースキャナ",
                  desc: "トンネル内に三脚で設置し、360度回転しながら計測します。1スキャンあたり半径約50〜100mの範囲を高密度に取得でき、精度は±1〜3mmです。高精度が求められる覆工出来形管理に適しています。",
                },
                {
                  title: "移動式（MMS/SLAM）スキャナ",
                  desc: "車両や台車に搭載して走行しながら連続計測します。SLAM技術により自己位置を推定しながらスキャンするため、移動しながらでも±5〜10mmの精度で計測可能です。長延長トンネルの効率的な全線計測に適しています。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              取得した点群データから任意の位置で断面を切り出すことができるため、計測後に断面間隔を自由に設定できます。従来のように「現場で断面位置を決めて計測する」必要がなく、データ取得後にデスクで解析作業を行える点が大きな利点です。
            </p>

            {/* 3. 取得データと成果物 */}
            <h2 id="data" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              取得できるデータと成果物
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンによるトンネル断面測量では、以下のデータと成果物を取得・作成できます。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">成果物</th>
                    <th className="px-4 py-3 text-left">内容</th>
                    <th className="px-4 py-3 text-left">活用用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "3次元点群データ", content: "トンネル内壁全体の三次元座標データ（LAS/E57形式）", use: "BIM/CIMモデル作成、各種解析の基礎データ" },
                    { name: "任意断面図", content: "点群から切り出した断面図（任意間隔で抽出可能）", use: "出来形管理、設計断面との比較" },
                    { name: "内空変位図", content: "設計断面と実測断面の差分をカラーマップで表示", use: "巻厚不足・余掘り量の把握" },
                    { name: "展開図", content: "トンネル内壁をカラー濃淡で平面展開した図面", use: "変状の位置把握、点検記録" },
                    { name: "土量・巻厚計算書", content: "設計値と実測値の差分から算出した数量", use: "コンクリート打設量管理、余掘り量算出" },
                    { name: "経年変化比較図", content: "複数時期のスキャンデータの差分表示", use: "覆工変状の進行管理、内空変位の監視" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.name}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.content}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              これらの成果物は、設計断面データ（DXF/LandXML）との重ね合わせにより自動算出されます。巻厚不足や余掘り量は断面全周にわたって数値化されるため、従来の数点計測では見落としがちだった局所的な課題を検出できます。
            </p>

            {/* 4. 従来手法との比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来手法との精度・効率比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              従来のプロフィルメーター計測と3Dレーザースキャンの主要指標を比較します。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">プロフィルメーター</th>
                    <th className="px-4 py-3 text-left">3Dレーザースキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", profile: "±10〜20mm", scan: "±1〜5mm" },
                    { item: "1断面の計測点数", profile: "30〜50点", scan: "数万〜数十万点" },
                    { item: "1断面の計測時間", profile: "約10〜15分", scan: "約3〜5分（据置型）" },
                    { item: "100m区間の所要時間", profile: "約3〜4時間", scan: "約1〜1.5時間" },
                    { item: "断面間隔の自由度", profile: "現場で事前設定が必要", scan: "計測後に任意間隔で抽出可能" },
                    { item: "内空変位の検出", profile: "計測点間の補間に依存", scan: "全周を面的に把握可能" },
                    { item: "巻厚管理", profile: "数点の手計測で判断", scan: "全周の差分を自動算出" },
                    { item: "データの再利用", profile: "2D断面図のみ", scan: "3Dモデル・BIM/CIM連携可能" },
                    { item: "経年変化比較", profile: "同一点での再計測が困難", scan: "点群同士の高精度比較が可能" },
                    { item: "必要人員", profile: "2〜3名", scan: "1〜2名" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.profile}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.scan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dレーザースキャンは精度・計測密度・効率のいずれにおいても従来手法を上回ります。特に、断面間隔を事後的に自由に設定できる点と、全周の巻厚・変位を自動算出できる点は、施工管理・点検業務において大きなメリットです。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">トンネル断面測量の3D化をご検討中ですか？まずはお気軽にご相談ください。</p>
              <Link href="/solution/infrastructure" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                インフラ向け3D測量サービスを見る
              </Link>
            </div>

            {/* 5. 施工時と点検時の活用 */}
            <h2 id="usage" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              施工時と点検時の活用方法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンによる断面測量は、トンネルの施工段階と供用後の点検段階の双方で活用されています。
            </p>

            <h3 className="text-lg font-bold text-gray-800 mb-3">施工時の活用</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "掘削直後の素掘り断面計測",
                  desc: "掘削サイクルごとに素掘り断面を3Dスキャンし、設計断面との差分から余掘り量を算出します。過掘削の抑制とコンクリート打設量の正確な見積もりに活用できます。",
                },
                {
                  step: "STEP 2",
                  title: "覆工コンクリート出来形管理",
                  desc: "覆工コンクリート打設後の内空断面をスキャンし、設計断面との差分から巻厚を全周にわたって算出します。巻厚不足箇所の早期検出と是正が可能になります。",
                },
                {
                  step: "STEP 3",
                  title: "インバート・路盤の出来形確認",
                  desc: "インバートコンクリートや路盤の施工完了後にスキャンし、設計値との照合を行います。路面の平坦性や勾配の確認にも活用します。",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 2 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-gray-800 mb-3">点検時の活用</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "定期点検での内空変位監視",
                  desc: "供用中のトンネルを定期的にスキャンし、前回計測との差分から内空断面の変位量を全周にわたって把握します。変状の進行速度を定量化できるため、補修・補強の優先度判断に活用されます。",
                },
                {
                  title: "覆工コンクリートの変状記録",
                  desc: "ひび割れや剥離が確認された箇所を3D座標で記録し、展開図上にマッピングします。変状の位置・規模を正確に記録できるため、経年の進行管理と補修計画の策定に役立ちます。",
                },
                {
                  title: "建築限界の確認",
                  desc: "内空断面の3Dデータから建築限界との干渉を自動検出します。路面の隆起や覆工の変形により建築限界を侵す箇所がないかを効率的に確認できます。",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-2 h-2 bg-primary rounded-full mt-2" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. 導入時の注意点 */}
            <h2 id="notes" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              導入時の注意点
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンによるトンネル断面測量を導入する際には、以下の点に注意が必要です。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "トンネル内の環境条件",
                  desc: "粉塵・水蒸気・高湿度はレーザー光の反射に影響し、計測精度を低下させる場合があります。掘削直後の計測では十分な換気・集塵を行ってからスキャンすることが推奨されます。また、暗所での作業となるため照明条件は問いませんが、車両や重機の振動による三脚のブレには注意が必要です。",
                },
                {
                  num: "2",
                  title: "基準点の設置と座標管理",
                  desc: "3Dスキャンの精度を担保するためには、トンネル坑内に適切な間隔で基準点（ターゲット）を設置し、坑外の既知点と座標を結合させる必要があります。基準点の設置間隔や配置計画は事前に検討してください。",
                },
                {
                  num: "3",
                  title: "データ容量と処理環境",
                  desc: "長延長トンネルの全線スキャンでは数十GBの点群データが発生します。データ処理には高性能なPCと専用ソフトウェアが必要になるため、自社で解析環境を整備するか、測量会社にデータ処理まで一括して依頼するかを事前に判断しておくことが重要です。",
                },
                {
                  num: "4",
                  title: "施工サイクルとの調整",
                  desc: "施工中のトンネルでは、掘削・支保工・覆工のサイクルに合わせた計測タイミングの調整が必要です。計測のために施工を長時間停止させることは現実的でないため、スキャン作業の所要時間と工程への影響を事前に協議してください。",
                },
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

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "トンネル内の3Dスキャンはどのくらいの時間がかかりますか？",
                  a: "延長100mあたり約20〜30分で計測可能です。移動式スキャナを使用する場合は、車両走行しながらの連続計測で、延長1kmのトンネルでも1時間程度で全周の断面データを取得できます。従来のプロフィルメーター計測と比べて計測時間を約1/3に短縮できます。",
                },
                {
                  q: "既設トンネルの点検にも3Dスキャンは使えますか？",
                  a: "はい、既設トンネルの定期点検・臨時点検にも活用できます。初回スキャンを基準データとし、経年変化を定量的に比較することで、覆工コンクリートの変状進行を早期に検出できます。内空断面の変位量を全周にわたって把握できるため、目視点検の補完としても有効です。",
                },
                {
                  q: "施工中のトンネルでも計測できますか？",
                  a: "はい、掘削直後の素掘り断面から覆工コンクリート打設後まで、各施工段階で計測可能です。粉塵が多い掘削直後は計測精度に影響する場合があるため、換気・集塵後の計測を推奨しています。弊社では施工サイクルに合わせた計測タイミングをご提案します。",
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
              3Dレーザースキャンによるトンネル断面測量は、従来のプロフィルメーター計測と比較して、精度・効率・データ活用性のすべてにおいて優れています。施工管理では余掘り量や巻厚の全周管理を実現し、点検業務では内空変位の経年比較を定量化できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 3Dスキャンで全周断面を±5mm精度で連続取得できる</li>
                <li>・ 計測時間を従来手法の約1/3に短縮可能</li>
                <li>・ 巻厚不足・内空変位・余掘り量を自動算出できる</li>
                <li>・ 施工時の出来形管理と点検時の経年変化比較の両方に活用可能</li>
                <li>・ 点群データはBIM/CIMとの連携にも対応</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              トンネル断面測量の3D化をご検討中の方は、対象トンネルの延長・施工段階・計測目的をお聞かせください。現場条件に応じた最適な計測手法と成果物をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              トンネル断面測量の3D化はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              据置型・移動式スキャナの使い分けから成果物作成まで一貫して対応します。まずはお気軽にご相談ください。
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
              <Link href="/blog/bridge-inspection-3d" className="block text-sm text-primary hover:underline">
                → 橋梁点検の3D化｜従来手法との精度・効率比較
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/i-construction-3d-surveying" className="block text-sm text-primary hover:underline">
                → i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ
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
