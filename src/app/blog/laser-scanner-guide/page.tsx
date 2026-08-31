import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "レーザースキャナーとは？種類・原理・価格・測量での使い方を解説",
  description:
    "【2026年7月更新】レーザースキャナーとは、レーザー光で対象物の三次元座標を取得する計測機器です。ToF・位相差方式の原理、4種類の特徴、購入・レンタル・外注の価格比較、測量現場での使い方まで実務者が解説します。",
  keywords: ["レーザースキャナー", "レーザースキャナーとは", "レーザースキャナー 測量", "3Dレーザースキャナー", "レーザースキャナー 種類", "レーザースキャナー 原理", "レーザースキャナー 価格"],
  alternates: { canonical: "/blog/laser-scanner-guide" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "レーザースキャナーとは？種類・原理・価格・測量での使い方を解説",
  description:
    "レーザースキャナーとは、レーザー光で対象物の三次元座標を取得する計測機器です。ToF・位相差方式の原理、4種類の特徴、価格、測量現場での使い方を解説。",
  datePublished: "2026-02-17",
  dateModified: "2026-07-23",
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
    "@id": "https://surveysolution.pro/blog/laser-scanner-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "レーザースキャナーの精度はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上据置型レーザースキャナーの場合、±1〜3mmの精度で計測できます。ハンドヘルド型は±5〜30mm、車載型MMSは±10〜50mm、航空LiDARは±5〜15cm程度です。計測距離や環境条件により変動しますが、対象物に応じて適切な機種を選定することで高精度な三次元データを取得できます。",
      },
    },
    {
      "@type": "Question",
      name: "レーザースキャナーの導入費用はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "機器本体の価格は、ハンドヘルド型で300〜800万円、地上据置型で500〜2,000万円程度です。計測業務を外注する場合は1日あたり30万円〜が目安です。自社導入のハードルが高ければ、レンタルや計測代行サービスを使う手もあります。",
      },
    },
    {
      "@type": "Question",
      name: "レーザースキャナーはレンタルできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、レンタル可能です。地上据置型で1日5万〜15万円が目安です。ただし操作と点群処理には専門技術が必要で、処理ソフトのライセンス費用も別途かかります。図面やBIMモデルなどの成果物まで必要な場合は、データ処理込みの計測外注と総額で比較することをおすすめします。",
      },
    },
    {
      "@type": "Question",
      name: "レーザースキャナーで取得したデータはどう活用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取得した点群データはCAD図面の作成、BIM/CIMモデルの構築、土量計算、干渉チェック、変位計測、施工シミュレーションなどに使えます。建設・建築・プラント・インフラ点検・文化財保存など、活用の場は広がり続けています。",
      },
    },
  ],
};

export default function LaserScannerGuidePage() {
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
          { name: "レーザースキャナーとは？", path: "/blog/laser-scanner-guide" },
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
              <time dateTime="2026-07-23" className="text-sm tracking-wider text-gray-500">
                （2026.07.23更新）
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                技術解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              レーザースキャナーとは？種類・原理・価格・測量での使い方を解説
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-laser-light.jpg"
              alt="レーザースキャナーのイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3Dレーザースキャナーとは、レーザー光を対象物に照射し、反射光の到達時間から距離を計測して三次元座標データを取得する計測機器です。</strong>1秒間に最大200万点のデータを取得でき、±1〜3mmの精度で対象物を立体的にデータ化できます。ここでは、レーザースキャナーの基本原理から種類ごとの使いどころ、測量現場での実際のワークフローまで、現場経験をもとにまとめました。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#principle" className="hover:underline">1. レーザースキャナーとは？｜基本原理</a></li>
                <li><a href="#types" className="hover:underline">2. レーザースキャナーの4つの種類</a></li>
                <li><a href="#workflow" className="hover:underline">3. 測量でのレーザースキャナーの使い方</a></li>
                <li><a href="#selection" className="hover:underline">4. レーザースキャナーの選び方｜用途別おすすめ</a></li>
                <li><a href="#price" className="hover:underline">5. レーザースキャナーの価格｜購入・レンタル・外注の比較</a></li>
                <li><a href="#manufacturers" className="hover:underline">6. レーザースキャナーの主要メーカーと機種</a></li>
                <li><a href="#vs-drone" className="hover:underline">7. レーザースキャン vs ドローン測量</a></li>
                <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">9. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 基本原理 */}
            <h2 id="principle" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャナーとは？｜基本原理
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              レーザースキャナーは、レーザー光を対象物に照射し、その反射光を受光することで対象物までの距離と方向を高速に計測する装置です。取得した大量の三次元座標データ（点群データ）から、対象物の形状を精密に再現できます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              距離計測の方式は大きく2つに分類されます。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">ToF（タイム・オブ・フライト）方式</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  レーザーパルスを発射し、対象物に反射して戻ってくるまでの時間を計測して距離を算出します。光速（約30万km/秒）と往復時間から距離＝（光速×時間）÷2で求めます。長距離計測（数百m〜数km）に強く、屋外の大規模構造物やインフラ計測に多く使用されます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">計測距離：数百m〜数km</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">屋外・大規模構造物向き</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">位相差方式</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  連続的なレーザー波を照射し、発射波と反射波の位相のずれ（位相差）から距離を算出します。ToF方式よりも高速にデータ取得が可能で、1秒間に最大200万点を計測できます。計測距離は中距離（〜350m程度）ですが、短時間で高密度なデータを取得できるため、建物内部やプラントの計測に適しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">計測距離：〜350m程度</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">屋内・プラント・高密度計測向き</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ポイント：</strong>最近の機種では、ToF方式と位相差方式を組み合わせたハイブリッド型も登場しています。長距離の計測精度と高速スキャン性能を両立し、屋内外を問わず幅広い現場で使用できます。
              </p>
            </div>

            {/* 2. 4つの種類 */}
            <h2 id="types" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャナーの4つの種類
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              レーザースキャナーは搭載プラットフォームによって4タイプに分かれます。特徴・精度・得意分野が異なるため、現場条件に合った機種選びが成果を左右します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">1. 地上据置型（TLS: Terrestrial Laser Scanner）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に据え付けて使用する最も一般的なタイプです。回転ミラーにより360度の範囲をスキャンし、1秒間に最大200万点のデータを取得します。測量・建設現場で最も多く採用されており、高精度が求められる構造物計測の標準的な手法です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±1〜3mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">計測範囲：〜350m（位相差） / 〜数km（ToF）</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">主な用途：建物現況計測、プラント配管、トンネル出来形管理、文化財記録</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">2. ハンドヘルド型（モバイルスキャナー）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  手持ちで歩行しながらスキャンできるタイプです。SLAM（Simultaneous Localization and Mapping）技術により、移動しながらリアルタイムで点群を生成します。据置型では死角になる狭い通路や階段、配管裏なども効率的に計測可能です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±5〜30mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">計測範囲：〜100m</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">主な用途：屋内空間、狭所補完計測、不動産・施設管理、簡易現況記録</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">3. 車載型MMS（Mobile Mapping System）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  レーザースキャナー・GNSS・IMU（慣性計測装置）・カメラを車両に搭載し、走行しながら周辺の三次元データを連続取得するシステムです。道路や街並みを高速に広範囲スキャンでき、インフラ管理やスマートシティ関連のデータ整備に活用されています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±10〜50mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">計測範囲：走行ルート沿い数十m</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">主な用途：道路台帳、舗装管理、電柱・標識管理、自動運転用地図</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">4. 航空LiDAR（Airborne Laser Scanner）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  航空機やヘリコプターにレーザースキャナーを搭載し、上空から地表面を広域にスキャンするシステムです。樹木の下の地形データ（DEM）も取得できる点が写真測量との大きな違いです。近年はドローン搭載型LiDARの普及により、中規模エリアでも航空LiDAR計測が身近になっています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±5〜15cm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">計測範囲：数km〜数百km</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">主な用途：広域地形測量、森林調査、災害調査、送電線点検</p>
              </div>
            </div>

            {/* 3. 測量での使い方 */}
            <h2 id="workflow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              測量でのレーザースキャナーの使い方
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              地上据置型レーザースキャナーを使った測量の流れを紹介します。現場ではスキャンとターゲット設置が中心。データの合成・処理は事務所に戻ってからの作業になります。
            </p>

            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "現場踏査・スキャン計画", desc: "現場の規模・形状を確認し、スキャナーの設置位置と台数を計画します。死角が生じないよう、設置ポイント間のオーバーラップ（重複範囲）を確保するのがコツです。" },
                { step: "STEP 2", title: "基準点・ターゲット設置", desc: "測量基準点（既知点）とスキャン合成用のターゲット（球体や平面ターゲット）を設置します。ターゲットは隣接するスキャン間で3点以上共有されるよう配置します。" },
                { step: "STEP 3", title: "スキャン実行", desc: "スキャナーを三脚に据え付け、各設置ポイントでスキャンを実行します。1回のスキャンは数分〜十数分で完了します。屋内では照明条件、屋外では天候（雨天時は計測精度が低下）に注意が必要です。" },
                { step: "STEP 4", title: "データ合成（レジストレーション）", desc: "複数のスキャンデータをターゲットや特徴点を基準に位置合わせし、1つの統合点群データに合成します。専用ソフトウェア（FARO SCENE、Leica Cyclone、Trimble RealWorksなど）を使用します。" },
                { step: "STEP 5", title: "ノイズ除去・座標変換", desc: "不要な点（通行人、車両、反射ノイズなど）を除去し、測量座標系（公共座標や現場座標）に変換します。この工程でデータの品質が決まるため、経験豊富な技術者の手腕が問われます。" },
                { step: "STEP 6", title: "成果物作成・納品", desc: "クリーニング済みの点群データから、CAD図面・3Dモデル・BIMモデル・断面図・土量計算書など、発注者が求める成果物を作成して納品します。" },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 5 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">レーザースキャン計測のご依頼・ご相談はお気軽にどうぞ。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 選び方 */}
            <h2 id="selection" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャナーの選び方｜用途別おすすめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              レーザースキャナーは用途・現場条件・要求精度によって最適な種類が変わります。下の表を参考に、自社の業務に合った機種タイプを見極めてください。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">用途</th>
                    <th className="px-4 py-3 text-left">おすすめの種類</th>
                    <th className="px-4 py-3 text-left">理由</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { use: "建物・構造物の現況計測", type: "地上据置型", reason: "±1〜3mmの高精度で建物全体を網羅的に計測可能" },
                    { use: "プラント・工場の配管計測", type: "地上据置型 + ハンドヘルド型", reason: "据置型で全体を、ハンドヘルドで死角を補完" },
                    { use: "屋内空間・不動産計測", type: "ハンドヘルド型", reason: "短時間で部屋ごとのスキャンが完了、持ち運びも容易" },
                    { use: "道路・インフラの広域計測", type: "車載型MMS", reason: "走行しながら連続取得、交通規制を最小限に抑制" },
                    { use: "広域地形・森林調査", type: "航空LiDAR", reason: "樹木下の地形も取得可、広範囲を短期間で計測" },
                    { use: "トンネル出来形管理", type: "地上据置型", reason: "高精度な断面データを短時間で取得可能" },
                  ].map((row, i) => (
                    <tr key={row.use} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.use}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.type}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 5. 価格 */}
            <h2 id="price" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャナーの価格｜購入・レンタル・外注の比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              レーザースキャナーを使う方法は「購入」「レンタル」「計測外注」の3つです。本体購入は据置型で500万〜2,000万円と高額なため、利用頻度に応じた選択が費用対効果を左右します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">導入形態</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">向いているケース</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { form: "本体購入（地上据置型）", price: "500万〜2,000万円＋処理ソフト年50万〜100万円", fit: "年間を通して計測業務がある測量・建設会社" },
                    { form: "本体購入（ハンドヘルド型）", price: "300万〜800万円", fit: "屋内計測・施設管理を内製化したい企業" },
                    { form: "レンタル", price: "5万〜15万円/日（処理ソフト・PC別途）", fit: "操作・点群処理のスキルが社内にある場合" },
                    { form: "計測外注", price: "20万〜60万円/日（データ処理・成果物込み）", fit: "スポット利用、図面やBIMなど成果物まで欲しい場合" },
                  ].map((row, i) => (
                    <tr key={row.form} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.form}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              注意したいのは、レンタルでは機器代のほかに操作と点群処理の技術が必要になる点です。レジストレーションやノイズ除去に不慣れだと、せっかく計測しても使えるデータになりません。図面・BIMモデルなどの成果物まで必要なら、処理込みの外注と総額で比べてみてください。計測から納品までの具体的な料金は<Link href="/price" className="text-primary hover:underline">料金ページ</Link>で公開しています。
            </p>

            {/* 6. 主要メーカー */}
            <h2 id="manufacturers" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャナーの主要メーカーと機種
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              測量・建設分野で実績の多い主要メーカーと代表機種をまとめました。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">メーカー</th>
                    <th className="px-4 py-3 text-left">代表機種</th>
                    <th className="px-4 py-3 text-left">タイプ</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { maker: "Leica Geosystems", model: "RTC360 / BLK360", type: "据置型", feature: "自動レジストレーション機能搭載、現場での作業効率が高い" },
                    { maker: "FARO Technologies", model: "Focus Premium", type: "据置型", feature: "最大350m計測、IP54防塵防水、屋外現場に強い" },
                    { maker: "Trimble", model: "X7 / X12", type: "据置型", feature: "自動水平調整・レジストレーション、測量精度とスピードを両立" },
                    { maker: "NavVis", model: "VLX", type: "ハンドヘルド型", feature: "ウェアラブル型で広範囲の屋内スキャンに最適" },
                    { maker: "GeoSLAM", model: "ZEB Horizon RT", type: "ハンドヘルド型", feature: "軽量・SLAM技術で狭所や暗所の計測に対応" },
                    { maker: "RIEGL", model: "VZ-400i", type: "据置型", feature: "長距離ToF方式、測量・鉱山・地形計測に強い" },
                  ].map((row, i) => (
                    <tr key={row.model} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.maker}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.model}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.type}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 6. vs ドローン */}
            <h2 id="vs-drone" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レーザースキャン vs ドローン測量
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              レーザースキャンとドローン測量はどちらも3Dデータを取得する技術ですが、得意分野がまったく違います。現場条件に応じた使い分けがカギです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">地上レーザースキャン</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "精度", a: "±1〜3mm", b: "±2〜5cm" },
                    { item: "計測範囲", a: "中規模（建物・構造物単位）", b: "広域（数ha〜数百ha）" },
                    { item: "得意な対象", a: "建物内部・構造物・プラント", b: "屋外の地形・土工現場" },
                    { item: "天候の影響", a: "雨天時は精度低下", b: "強風・雨天時は飛行不可" },
                    { item: "法規制", a: "特になし", b: "航空法の許可・承認が必要" },
                    { item: "データ処理時間", a: "中程度", b: "フォトグラメトリ処理に時間がかかる" },
                    { item: "コスト目安", a: "30万円〜/日", b: "20万円〜/フライト" },
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
                <strong>実務でのポイント：</strong>建物内部や高精度が求められる構造物はレーザースキャン、広域の地形や土量計算はドローン測量が適しています。大規模現場では両者を併用し、それぞれの強みを活かすケースが増えています。
              </p>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "レーザースキャナーの精度はどのくらいですか？", a: "地上据置型の場合、±1〜3mmの精度で計測できます。ハンドヘルド型は±5〜30mm、車載型MMSは±10〜50mm、航空LiDARは±5〜15cm程度です。計測距離や環境条件により変動しますが、対象物に合った機種を選定することで高精度な三次元データを取得できます。" },
                { q: "レーザースキャナーの導入費用はどのくらいですか？", a: "機器本体はハンドヘルド型で300〜800万円、地上据置型で500〜2,000万円程度。計測業務を外注する場合は1日あたり30万円〜が目安です。自社導入のハードルが高ければ、レンタルや計測代行サービスを使う手もあります。" },
                { q: "レーザースキャナーはレンタルできますか？", a: "はい、レンタル可能です。地上据置型で1日5万〜15万円が目安。ただし操作と点群処理には専門技術が必要で、処理ソフトのライセンス費用も別途かかります。図面やBIMモデルまで必要なら、データ処理込みの計測外注と総額で比較するのがおすすめです。" },
                { q: "レーザースキャナーで取得したデータはどう活用できますか？", a: "点群データとして取得し、CAD図面の作成、BIM/CIMモデルの構築、土量計算、干渉チェック、変位計測、施工シミュレーションなどに使えます。建設・建築・プラント・インフラ点検・文化財保存など、活用の場は広がり続けています。" },
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
              レーザースキャナーは、レーザー光の反射を利用して対象物の三次元座標を高速・高精度に取得する計測機器です。ToF方式と位相差方式の2つの原理があり、地上据置型・ハンドヘルド型・車載型MMS・航空LiDARの4タイプを現場条件に応じて使い分けます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• ToF方式は長距離向き、位相差方式は高速・高密度計測向き</li>
                <li>• 地上据置型（±1〜3mm）が測量現場での標準、ハンドヘルド型は狭所補完に有効</li>
                <li>• 現場設置→スキャン→データ合成→ノイズ除去→成果物作成がワークフローの基本</li>
                <li>• 建物・構造物はレーザースキャン、広域地形はドローン測量が得意</li>
                <li>• 大規模現場ではレーザースキャンとドローンの併用が効果的</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              レーザースキャン計測の導入や外注をご検討中の方は、まずはお気軽にご相談ください。対象物や現場条件に応じた最適な計測プランをご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              レーザースキャン計測のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「どの機種が合うか分からない」「まずは費用感を知りたい」など、どんな段階でもお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/service/laser-scan"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                レーザースキャンサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/building-3d-scan" className="block text-sm text-primary hover:underline">→ 建物の3D計測とは？費用相場・精度・活用シーンを解説</Link>
              <Link href="/blog/point-cloud-guide" className="block text-sm text-primary hover:underline">→ 点群データとは？</Link>
              <Link href="/blog/drone-vs-laser" className="block text-sm text-primary hover:underline">→ ドローン測量 vs 地上レーザースキャン</Link>
              <Link href="/blog/3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？</Link>
              <Link href="/use-case/mountain-forest-survey" className="block text-sm text-primary hover:underline">
                → 【活用事例】山林の詳細な地形測量
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
