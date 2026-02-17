import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "BIMと3Dスキャンの連携方法｜既存建物のBIM化フロー完全ガイド",
  description:
    "既存建物のBIM化（スキャンtoBIM）の連携フローを5ステップで解説。3Dレーザースキャナで取得した点群データからRevit等でBIMモデルを構築する方法、必要機器・ソフト・LOD・費用目安まで網羅。",
  keywords: ["BIM 3Dスキャン 連携", "既存建物 BIM化", "スキャンtoBIM", "点群 BIM変換", "BIM化 フロー"],
  alternates: { canonical: "/blog/bim-3d-scan" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "BIMと3Dスキャンの連携方法｜既存建物のBIM化フロー完全ガイド",
  description:
    "既存建物のBIM化（スキャンtoBIM）の連携フローを5ステップで解説。点群データからBIMモデルを構築する方法、必要機器・ソフト・LOD・費用目安まで網羅。",
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
    "@id": "https://surveysolution.pro/blog/bim-3d-scan",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "図面がない既存建物でもBIM化は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3Dレーザースキャナで建物の現況を計測し、取得した点群データを基にBIMモデルを構築します。図面がない築50年以上の建物でも、精度±2〜3mmのBIMモデルを作成した実績があります。",
      },
    },
    {
      "@type": "Question",
      name: "BIM化にはどのくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建物規模とLODにより異なりますが、延床面積1,000㎡程度のビルでLOD300の場合、現地スキャン1〜2日、データ処理・モデリング2〜3週間、合計で約1ヶ月が目安です。LOD200であれば2週間程度に短縮できます。",
      },
    },
    {
      "@type": "Question",
      name: "BIM化の費用はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "延床面積500㎡未満・LOD200で50万〜80万円、500〜2,000㎡・LOD300で100万〜200万円、2,000㎡以上・LOD400で250万円〜が目安です（税別）。正確な費用は対象建物の規模・複雑さ・LOD要件により変動するため、個別見積もりをご依頼ください。",
      },
    },
  ],
};

export default function Bim3dScanPage() {
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
          { name: "BIMと3Dスキャンの連携方法", path: "/blog/bim-3d-scan" },
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
                BIM連携
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              BIMと3Dスキャンの連携方法｜既存建物のBIM化フロー完全ガイド
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-building-architecture.jpg"
              alt="BIMと3Dスキャン連携のイメージ - 建築物"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>既存建物のBIM化（スキャンtoBIM）とは、3Dレーザースキャナで建物を計測し、取得した点群データを基にRevit等のBIMソフトで3Dモデルを構築するプロセスです。</strong>図面のない既存建物でも、精度±2〜3mmのBIMモデルを作成でき、リノベーション設計・維持管理・改修計画に活用できます。本記事では、BIMと3Dスキャンの連携フローを5つのステップで解説し、必要な機器・ソフトウェア・LOD（詳細度）・費用目安まで網羅します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. BIMと3Dスキャンの連携とは？</a></li>
                <li><a href="#flow" className="hover:underline">2. 既存建物のBIM化フロー｜5つのステップ</a></li>
                <li><a href="#tools" className="hover:underline">3. BIM化に必要な機器とソフトウェア</a></li>
                <li><a href="#lod" className="hover:underline">4. BIM化で対応できるLOD（詳細度）レベル</a></li>
                <li><a href="#merit" className="hover:underline">5. BIM化のメリット｜4つの効果</a></li>
                <li><a href="#cost" className="hover:underline">6. BIM化の費用目安</a></li>
                <li><a href="#case" className="hover:underline">7. 弊社のBIM化対応実績</a></li>
                <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">9. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. BIMと3Dスキャンの連携とは？ */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIMと3Dスキャンの連携とは？
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              BIM（Building Information Modeling）と3Dスキャンの連携とは、3Dレーザースキャナで取得した点群データをBIMソフトウェアに取り込み、建物の3次元情報モデルを構築する技術です。この手法は「スキャンtoBIM」とも呼ばれ、既存建物のデジタルツイン構築に不可欠なプロセスとして普及が進んでいます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              従来、既存建物のBIM化は手作業の実測と図面のトレースに依存しており、精度のばらつきや膨大な工数が課題でした。3Dスキャンの導入により、建物全体を精度±2〜3mmで面的に計測し、そのデータを直接BIMソフトに読み込めるようになったことで、精度と効率が飛躍的に向上しています。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>スキャンtoBIMの主な適用場面：</strong>リノベーション設計の基礎データ取得、FM（ファシリティマネジメント）用の建物情報整備、耐震診断・改修計画の現況把握、図面が消失した既存建物の現況図面・BIMモデル作成
              </p>
            </div>

            {/* 2. BIM化フロー */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              既存建物のBIM化フロー｜5つのステップ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              既存建物のBIM化は、以下の5ステップで進行します。各工程の品質が最終的なBIMモデルの精度に直結するため、ステップごとの要件定義が重要です。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "現地調査・要件定義",
                  desc: "対象建物の規模・構造・用途を確認し、必要なLOD（詳細度）・座標系・納品形式を決定します。図面の有無、スキャンの死角になりやすい箇所（天井裏・PS内部など）も事前に調査します。",
                },
                {
                  step: "STEP 2",
                  title: "3Dレーザースキャン",
                  desc: "地上レーザースキャナ（FARO Focus・Leica RTC360等）で建物内外を計測します。1スキャンポイントあたり数分で数百万点のデータを取得。延床1,000㎡のビルで30〜50スキャンポイント、1〜2日で計測完了が目安です。",
                },
                {
                  step: "STEP 3",
                  title: "点群データ処理",
                  desc: "複数のスキャンデータをレジストレーション（合成）し、ノイズ除去・座標変換を実施します。FARO SCENE・Leica Cyclone等の専用ソフトで処理し、RCP/E57形式でBIMソフトに渡せる状態にします。",
                },
                {
                  step: "STEP 4",
                  title: "BIMモデリング",
                  desc: "処理済みの点群データをRevit・ArchiCAD等に読み込み、壁・床・天井・建具・設備機器をモデリングします。点群をトレースする形で3Dオブジェクトを配置し、指定LODに準拠したBIMモデルを構築します。",
                },
                {
                  step: "STEP 5",
                  title: "検証・納品",
                  desc: "完成したBIMモデルと元の点群データを重ね合わせ、乖離がないか検証します。許容誤差内であることを確認後、RVT/IFC形式で納品。検証レポート・点群データ・座標一覧表も合わせて提出します。",
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

            {/* 3. 機器とソフトウェア */}
            <h2 id="tools" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIM化に必要な機器とソフトウェア
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              スキャンtoBIMの各工程で使用する主要な機器・ソフトウェアを以下にまとめます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">カテゴリ</th>
                    <th className="px-4 py-3 text-left">製品例</th>
                    <th className="px-4 py-3 text-left">主な役割</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "地上レーザースキャナ", product: "FARO Focus Premium / Leica RTC360 / Trimble X7", role: "建物内外の点群データ取得（精度±1〜3mm）" },
                    { cat: "ハンドヘルドスキャナ", product: "NavVis VLX / GeoSLAM ZEB Horizon", role: "狭所・階段・通路の補完スキャン" },
                    { cat: "点群処理ソフト", product: "FARO SCENE / Leica Cyclone / Autodesk ReCap Pro", role: "レジストレーション・ノイズ除去・形式変換" },
                    { cat: "BIMソフト", product: "Autodesk Revit / Graphisoft ArchiCAD", role: "点群を基にしたBIMモデル構築" },
                    { cat: "検証ソフト", product: "CloudCompare / Verity by ClearEdge3D", role: "BIMモデルと点群の乖離検証" },
                  ].map((row, i) => (
                    <tr key={row.cat} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.cat}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.product}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 4. LODレベル */}
            <h2 id="lod" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIM化で対応できるLOD（詳細度）レベル
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              LOD（Level of Development）は、BIMモデルの詳細度を示す指標です。既存建物のBIM化では、用途に応じてLOD200〜LOD400の範囲で作成するのが一般的です。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">LODレベル</th>
                    <th className="px-4 py-3 text-left">詳細度</th>
                    <th className="px-4 py-3 text-left">含まれる情報</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { lod: "LOD100", detail: "概念モデル", info: "建物のボリューム・外形のみ", use: "企画段階の概算検討" },
                    { lod: "LOD200", detail: "概略モデル", info: "壁・床・天井・開口部の位置と寸法", use: "改修計画の初期検討・FM基礎データ" },
                    { lod: "LOD300", detail: "詳細モデル", info: "建具・設備機器・配管ルートの形状と寸法", use: "リノベーション設計・干渉チェック" },
                    { lod: "LOD400", detail: "施工モデル", info: "部材の製品情報・取付方法・接合部詳細", use: "施工計画・維持管理・積算" },
                  ].map((row, i) => (
                    <tr key={row.lod} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.lod}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.detail}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.info}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>LOD選定のポイント：</strong>必要以上のLODはコストと工期の増大につながります。リノベーション設計にはLOD300、FMや維持管理の基礎データにはLOD200が費用対効果の高い選択です。弊社では用途に応じた最適なLODをご提案します。
              </p>
            </div>

            {/* 5. メリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIM化のメリット｜4つの効果
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "設計精度の向上",
                  desc: "手作業の実測（精度±10〜20mm）に対し、3Dスキャンベースのbimモデルは精度±2〜3mmを実現します。既存躯体との寸法誤差が小さく、リノベーション設計時の図面信頼性が格段に向上します。",
                },
                {
                  num: "2",
                  title: "設計手戻りの削減",
                  desc: "既存建物の正確な3D形状がBIMモデル上で把握できるため、新設部材との干渉チェックを設計段階で実施できます。弊社の実績では、干渉チェックの実施により設計変更の手戻りを約50%削減した事例があります。",
                },
                {
                  num: "3",
                  title: "維持管理の効率化",
                  desc: "BIMモデルに建物情報（部材寸法・材質・設備仕様）を紐づけることで、維持管理計画の策定・修繕履歴の管理・LCC（ライフサイクルコスト）の算出が効率化されます。FM（ファシリティマネジメント）の基盤データとして活用できます。",
                },
                {
                  num: "4",
                  title: "プロジェクトコストの削減",
                  desc: "現場の戻り計測の削減、設計手戻りの減少、干渉チェックによる施工ミス防止など、プロジェクト全体でコスト削減効果が見込めます。初期のスキャン・モデリング費用は、手戻り防止によるコスト削減で回収できるケースが多くあります。",
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">既存建物のBIM化を検討中ですか？まずは対象建物の規模・用途をお聞かせください。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 6. 費用目安 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIM化の費用目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              BIM化の費用は、対象建物の延床面積とLOD（詳細度）によって大きく変動します。以下に面積・LOD別の費用目安をまとめます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">延床面積</th>
                    <th className="px-4 py-3 text-left">LOD200</th>
                    <th className="px-4 py-3 text-left">LOD300</th>
                    <th className="px-4 py-3 text-left">LOD400</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "500㎡未満", lod200: "50万〜80万円", lod300: "80万〜120万円", lod400: "150万〜200万円" },
                    { area: "500〜2,000㎡", lod200: "80万〜150万円", lod300: "150万〜250万円", lod400: "250万〜400万円" },
                    { area: "2,000〜5,000㎡", lod200: "150万〜250万円", lod300: "250万〜400万円", lod400: "400万〜600万円" },
                    { area: "5,000㎡以上", lod200: "個別見積もり", lod300: "個別見積もり", lod400: "個別見積もり" },
                  ].map((row, i) => (
                    <tr key={row.area} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.area}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.lod200}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.lod300}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.lod400}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              ※上記は税別の目安金額です。建物の構造・複雑さ・設備密度・現場条件により変動します。スキャン費用・データ処理費用・モデリング費用を含みます。正確な金額は個別見積もりにてご確認ください。
            </p>

            {/* 7. 実績 */}
            <h2 id="case" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              弊社のBIM化対応実績
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              弊社では、図面が消失した既存建物を中心に、スキャンtoBIMの実績を積み重ねています。以下は代表的な対応事例です。
            </p>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">築50年・RC造オフィスビルのBIM化</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <p><strong>対象：</strong>都内RC造5階建て、延床面積3,200㎡。竣工図面が消失しており、リノベーション設計の基礎データが必要だった。</p>
                <p><strong>計測：</strong>FARO Focus Premiumで全フロアをスキャン。72スキャンポイント、現地作業2日間で完了。</p>
                <p><strong>成果：</strong>LOD300のRevitモデルを3週間で作成。既存設備配管のルートもモデル化し、干渉チェックに活用。設計変更の手戻りを約50%削減。</p>
              </div>
              <Link href="/case/renovation" className="text-sm text-primary hover:underline">
                → 事例の詳細を見る
              </Link>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              このほかにも、工場・倉庫・病院・学校施設など、多様な建物種別でBIM化の実績があります。対象建物に応じた最適なスキャン計画とモデリング仕様をご提案します。
            </p>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "図面がない既存建物でもBIM化は可能ですか？",
                  a: "はい、可能です。3Dレーザースキャナで建物の現況を計測し、取得した点群データを基にBIMモデルを構築します。図面がない築50年以上の建物でも、精度±2〜3mmのBIMモデルを作成した実績があります。",
                },
                {
                  q: "BIM化にはどのくらいの期間がかかりますか？",
                  a: "建物規模とLODにより異なりますが、延床面積1,000㎡程度のビルでLOD300の場合、現地スキャン1〜2日、データ処理・モデリング2〜3週間、合計で約1ヶ月が目安です。LOD200であれば2週間程度に短縮できます。",
                },
                {
                  q: "BIM化の費用はどのくらいですか？",
                  a: "延床面積500㎡未満・LOD200で50万〜80万円、500〜2,000㎡・LOD300で100万〜200万円、2,000㎡以上・LOD400で250万円〜が目安です（税別）。正確な費用は個別見積もりにてご確認ください。",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 9. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              BIMと3Dスキャンの連携（スキャンtoBIM）は、既存建物のデジタルツイン構築を実現する技術です。図面がない建物でも、3Dレーザースキャンで精度±2〜3mmの点群データを取得し、用途に応じたLODのBIMモデルを構築できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• スキャンtoBIMは「現地調査→スキャン→点群処理→BIMモデリング→検証」の5ステップで進行</li>
                <li>• LOD200（概略）〜LOD400（施工）まで、用途に応じた詳細度で作成可能</li>
                <li>• 設計精度の向上・手戻り削減・維持管理効率化・コスト削減の4つの効果</li>
                <li>• 費用は延床面積500㎡未満・LOD200で50万円〜が目安</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              既存建物のBIM化を検討されている方は、対象建物の規模・用途・求めるLODをお聞かせください。最適なスキャン計画と概算費用をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              既存建物のBIM化、まずはご相談ください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「図面がないけどBIM化できる？」「費用感を知りたい」という段階でも大丈夫です。対象建物に応じた最適プランをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/architecture"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                建築向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/no-drawings-solution" className="block text-sm text-primary hover:underline">
                → 図面がない建物の現況図を作る方法
              </Link>
              <Link href="/blog/point-cloud-guide" className="block text-sm text-primary hover:underline">
                → 点群データとは？取得方法・活用事例・ファイル形式をわかりやすく解説
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
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
