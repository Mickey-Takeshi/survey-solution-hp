import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プラント配管の3Dモデル化｜スキャンから設計データ連携まで",
  description:
    "プラント配管の3Dモデル化とは、3Dレーザースキャナで既存配管設備をスキャンし、点群データから配管の径・ルート・接続関係を3Dモデルとして再構築するプロセスです。干渉チェック工数80%削減、修繕工期30%短縮の実績をもとに、5ステップの作業フロー・対応ソフト・費用目安を解説します。",
  keywords: ["プラント 配管 3D", "配管 3Dモデル化", "プラント 3Dスキャン", "配管 干渉チェック"],
  alternates: { canonical: "/blog/plant-piping-3d-model" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "プラント配管の3Dモデル化｜スキャンから設計データ連携まで",
  description:
    "プラント配管の3Dモデル化の作業フロー・対応設計ソフト・費用目安・導入メリットを解説。干渉チェック工数80%削減、修繕工期30%短縮の実績あり。",
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
    "@id": "https://surveysolution.pro/blog/plant-piping-3d-model",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "プラント配管の3Dモデル化にはどれくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "配管延長500m以下の標準的な案件で、現地スキャン1〜2日・データ処理およびモデル化2〜3週間・検収1週間の合計3〜4週間が目安です。配管延長1,000m以上や高密度エリアでは6〜8週間かかる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "既存の2D図面がなくても3Dモデル化は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。3Dレーザースキャナで現状を直接計測するため、図面が存在しない・図面と現況が異なるケースでも正確な3Dモデルを作成できます。むしろ図面がない設備こそ3Dスキャンによるモデル化の効果が大きく、弊社では図面なし案件の実績も多数あります。",
      },
    },
    {
      "@type": "Question",
      name: "配管の3Dモデルはどの設計ソフトで使用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AutoCAD Plant 3D、AVEVA E3D、Autodesk Navisworks、Revitなど主要なプラント設計ソフトに対応しています。納品形式はPCF、IFC、RVM、STEP、IGESなど、お客様のソフトウェア環境に合わせて選定します。",
      },
    },
  ],
};

export default function PlantPiping3dModelPage() {
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
          { name: "プラント配管の3Dモデル化", path: "/blog/plant-piping-3d-model" },
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
                プラント
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              プラント配管の3Dモデル化｜スキャンから設計データ連携まで
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-piping-industrial.jpg"
              alt="プラント配管の3Dモデル化イメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>プラント配管の3Dモデル化とは、3Dレーザースキャナで既存配管設備をスキャンし、点群データから配管の径・ルート・接続関係を3Dモデルとして再構築するプロセスです。</strong>干渉チェック工数を80%削減し、修繕工期を30%短縮した実績があります。本記事では、3Dスキャンから設計データ連携までの作業フロー、対応する設計ソフト・ファイル形式、費用と期間の目安をプラント設計・保全のエンジニア向けに解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 配管3Dモデル化とは</a></li>
                <li><a href="#flow" className="hover:underline">2. 3Dスキャンから設計データ連携までの流れ（5ステップ）</a></li>
                <li><a href="#software" className="hover:underline">3. 対応する設計ソフトとファイル形式</a></li>
                <li><a href="#merit" className="hover:underline">4. 配管3Dモデル化の4つのメリット</a></li>
                <li><a href="#cost" className="hover:underline">5. 費用と期間の目安</a></li>
                <li><a href="#case" className="hover:underline">6. 事例紹介</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 配管3Dモデル化とは */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              配管3Dモデル化とは
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              配管3Dモデル化とは、プラントに敷設された既存の配管設備を3Dレーザースキャナで計測し、取得した点群データ（三次元座標点の集合体）から配管の径・ルート・接続関係・サポート位置を3次元のデジタルモデルとして再構築する技術です。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              従来のプラント改修では、既存設備の現況把握に2D図面と現場目視に頼っていました。しかし、プラントは竣工後の改修・増設が繰り返されるため、図面と現況の不一致が常態化しています。3Dスキャンによるモデル化は、現場の「今」を正確にデジタルデータ化するため、図面不一致による設計手戻りを根本的に解消します。
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-3">配管3Dモデル化で取得・再構築する情報：</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・<strong>配管径・肉厚</strong>：点群データから配管外径を自動抽出し、規格径（JIS/ANSI）を特定</li>
                <li>・<strong>配管ルート</strong>：エルボ・ティー・レデューサなど継手の種類と接続関係をモデル化</li>
                <li>・<strong>サポート・架台</strong>：配管支持構造物の位置と形状を3Dモデルに反映</li>
                <li>・<strong>バルブ・機器</strong>：バルブ種類・機器ノズル位置を含む設備全体のモデル化に対応</li>
              </ul>
            </div>

            {/* 2. 5ステップフロー */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dスキャンから設計データ連携までの流れ（5ステップ）
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              現地スキャンから設計ソフトへのデータ連携まで、5つのステップで作業を進めます。各ステップの内容と所要期間の目安を解説します。
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "現地調査・計測計画",
                  desc: "対象エリアの図面確認（あれば）・現地踏査を行い、スキャナの設置位置・計測範囲・ターゲット配置を計画します。高所配管や狭所エリアのアクセス方法、プラント稼働中の安全対策も事前に確認します。所要期間：0.5〜1日。",
                },
                {
                  step: "STEP 2",
                  title: "3Dレーザースキャン（現地計測）",
                  desc: "地上レーザースキャナ（FARO Focus / Leica RTC360等）を用いて、対象エリアを多方向からスキャンします。1スキャンあたり数百万点の座標データを取得し、配管の裏側・死角もカバーするために30〜100箇所から計測を実施します。所要期間：1〜3日。",
                },
                {
                  step: "STEP 3",
                  title: "点群データ処理（合成・クリーニング）",
                  desc: "複数スキャンデータをレジストレーション（位置合わせ）で統合し、1つの高密度点群データを生成します。不要点（足場・仮設物・通行者）の除去、ノイズフィルタリングを行い、モデル化に最適な点群データを整備します。所要期間：2〜5日。",
                },
                {
                  step: "STEP 4",
                  title: "配管モデリング（3Dモデル構築）",
                  desc: "処理済み点群データを基に、専用ソフト（EdgeWise / ClearEdge3D等）で配管を自動認識・モデル化します。自動抽出後に手動で精度検証・修正を行い、エルボ・ティー・バルブなどの継手情報を付与して設計データとして完成させます。所要期間：1〜3週間。",
                },
                {
                  step: "STEP 5",
                  title: "設計ソフト連携・納品",
                  desc: "完成した3DモデルをPCF・IFC・RVM・STEP等のファイル形式でエクスポートし、お客様の設計ソフト（AutoCAD Plant 3D / AVEVA E3D / Navisworks等）にインポート可能な状態で納品します。干渉チェック用のNavisworksモデルも合わせて提供可能です。所要期間：2〜3日。",
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">配管3Dモデル化の作業フローについて、詳しいご説明を承ります。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 3. 対応ソフト・ファイル形式 */}
            <h2 id="software" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              対応する設計ソフトとファイル形式
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              配管3Dモデルは、お客様が使用する設計ソフトに合わせた形式で納品します。主要な対応ソフトと推奨ファイル形式を一覧にまとめました。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">設計ソフト</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                    <th className="px-4 py-3 text-left">推奨形式</th>
                    <th className="px-4 py-3 text-left">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AutoCAD Plant 3D", use: "配管設計・アイソメ図作成", format: "PCF, IDF", note: "配管スペック情報を保持" },
                    { name: "AVEVA E3D / PDMS", use: "大規模プラント設計", format: "RVM, DATAL", note: "属性情報の一括連携が可能" },
                    { name: "Autodesk Navisworks", use: "干渉チェック・4Dシミュレーション", format: "NWC, NWD, FBX", note: "点群との重畳表示に対応" },
                    { name: "Autodesk Revit", use: "BIMモデリング・設備設計", format: "IFC, RCP", note: "MEP機能で配管モデリング" },
                    { name: "Bentley OpenPlant", use: "配管・機器レイアウト設計", format: "STEP, IGES", note: "iModel連携に対応" },
                    { name: "Intergraph Smart 3D", use: "統合プラント設計", format: "STEP, SAT", note: "大規模データに対応" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b whitespace-nowrap">{row.name}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.format}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>納品形式について：</strong>上記以外のソフトウェア・ファイル形式にも対応可能です。納品前にお客様のソフトウェア環境を確認し、最適な形式をご提案します。点群データ（E57/LAS）と3Dモデルデータのセット納品が標準です。
              </p>
            </div>

            {/* 4. 4つのメリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              配管3Dモデル化の4つのメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              プラント配管の3Dモデル化を導入することで、設計・施工・保全の各フェーズで具体的な効果が得られます。
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  num: "1",
                  title: "干渉チェック工数を80%削減",
                  desc: "3Dモデル上で配管・ダクト・鉄骨・機器の干渉（ぶつかり）を自動検出できるため、従来の現場目視＋図面突合による確認作業が不要になります。Navisworksによるクラッシュ検出を活用すれば、数千箇所の干渉チェックを数時間で完了できます。",
                },
                {
                  num: "2",
                  title: "修繕・改修工期を30%短縮",
                  desc: "既存設備の正確な3Dモデルがあることで、新規配管のルート設計を事前にデスクトップ上で完結できます。現場合わせによる手戻り工事を排除し、プレファブ配管の精度も向上するため、トータル工期を30%短縮した実績があります。",
                },
                {
                  num: "3",
                  title: "図面不一致リスクの解消",
                  desc: "プラントは竣工後の改修・増設で図面と現況の不一致が蓄積されます。3Dスキャンは現場の「今」を直接計測するため、図面の有無や精度に依存しません。As-Built（現況）モデルとして、以降の改修計画の基盤データになります。",
                },
                {
                  num: "4",
                  title: "設備台帳・デジタルツインへの展開",
                  desc: "3Dモデルに配管仕様（径・材質・保温厚）、バルブ情報、機器番号などの属性を付与することで、設備台帳のデジタル化が実現します。プラント全体のデジタルツイン構築の基盤として、予防保全や設備ライフサイクル管理に活用できます。",
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

            {/* 5. 費用と期間の目安 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用と期間の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              配管3Dモデル化の費用は、対象エリアの広さ・配管密度・モデル化の精度要件により変動します。代表的な規模別の目安を下表にまとめました。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">規模</th>
                    <th className="px-4 py-3 text-left">配管延長</th>
                    <th className="px-4 py-3 text-left">スキャン日数</th>
                    <th className="px-4 py-3 text-left">モデル化期間</th>
                    <th className="px-4 py-3 text-left">費用目安</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scale: "小規模", length: "〜200m", scan: "1日", model: "1〜2週間", cost: "80〜150万円" },
                    { scale: "中規模", length: "200〜500m", scan: "1〜2日", model: "2〜3週間", cost: "150〜350万円" },
                    { scale: "大規模", length: "500〜1,000m", scan: "2〜3日", model: "3〜6週間", cost: "350〜700万円" },
                    { scale: "超大規模", length: "1,000m以上", scan: "3〜5日", model: "6〜10週間", cost: "700万円〜" },
                  ].map((row, i) => (
                    <tr key={row.scale} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b whitespace-nowrap">{row.scale}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.length}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.scan}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.model}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>費用変動の要因：</strong>配管密度（本数/㎡）、高所・狭所の割合、モデル化の詳細度（LOD200〜LOD400）、属性情報の付与範囲により費用が変動します。正式なお見積もりは現地調査後にご提示しますので、まずはお気軽にお問い合わせください。
              </p>
            </div>

            {/* 6. 事例紹介 */}
            <h2 id="case" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例紹介
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">化学プラント｜配管改修に伴う既存設備の3Dモデル化</h3>
              <div className="space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
                <p>
                  <strong>課題：</strong>築30年の化学プラントで配管改修を計画していたが、過去の増設・改修で図面と現況が大幅に不一致。現場目視による干渉確認に多大な工数がかかり、手戻り工事が頻発していた。
                </p>
                <p>
                  <strong>対応：</strong>対象エリア（配管延長約400m）を3Dレーザースキャナで計測し、点群データから配管・バルブ・サポートを含む3Dモデルを構築。Navisworksで新規配管設計との干渉チェックを実施。
                </p>
                <p>
                  <strong>成果：</strong>干渉チェック工数を80%削減（従来40人日→8人日）、手戻り工事ゼロを達成し、トータル修繕工期を30%短縮。As-Builtモデルは以降の保全計画にも活用。
                </p>
              </div>
              <Link href="/case/plant-piping" className="text-sm text-primary font-bold hover:underline">
                この事例の詳細を見る →
              </Link>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "プラント配管の3Dモデル化にはどれくらいの期間がかかりますか？",
                  a: "配管延長500m以下の標準的な案件で、現地スキャン1〜2日・データ処理およびモデル化2〜3週間・検収1週間の合計3〜4週間が目安です。配管延長1,000m以上や高密度エリアでは6〜8週間かかる場合があります。",
                },
                {
                  q: "既存の2D図面がなくても3Dモデル化は可能ですか？",
                  a: "可能です。3Dレーザースキャナで現状を直接計測するため、図面が存在しない・図面と現況が異なるケースでも正確な3Dモデルを作成できます。むしろ図面がない設備こそ3Dスキャンによるモデル化の効果が大きく、弊社では図面なし案件の実績も多数あります。",
                },
                {
                  q: "配管の3Dモデルはどの設計ソフトで使用できますか？",
                  a: "AutoCAD Plant 3D、AVEVA E3D、Autodesk Navisworks、Revitなど主要なプラント設計ソフトに対応しています。納品形式はPCF、IFC、RVM、STEP、IGESなど、お客様のソフトウェア環境に合わせて選定します。",
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
              プラント配管の3Dモデル化は、既存設備を3Dレーザースキャナで正確に計測し、設計ソフトで活用できる3Dモデルとして再構築する技術です。図面と現況の不一致を解消し、設計・施工・保全の各フェーズで大幅な効率化を実現します。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 配管3Dモデル化は、3Dスキャン→点群処理→モデリング→設計ソフト連携の5ステップで実施</li>
                <li>・ AutoCAD Plant 3D・AVEVA E3D・Navisworks等の主要設計ソフトに対応した形式で納品</li>
                <li>・ 干渉チェック工数80%削減、修繕工期30%短縮の実績あり</li>
                <li>・ 図面がない・図面と現況が異なるケースでも3Dスキャンにより正確にモデル化が可能</li>
                <li>・ 費用目安は配管延長200m以下で80〜150万円、中規模（200〜500m）で150〜350万円</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              弊社では、プラント配管の3Dスキャンからモデル化・設計データ連携までワンストップで対応しています。配管改修・増設計画の基盤データとして、まずは対象エリアの3Dスキャンからご検討ください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              プラント配管の3Dモデル化のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「対象エリアの規模感を伝えて概算が知りたい」「図面がない設備でも対応できるか確認したい」という段階でも大丈夫です。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/plant"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                プラント向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/factory-layout-3d" className="block text-sm text-primary hover:underline">
                → 工場レイアウトの3D化｜現況把握から設備配置最適化まで
              </Link>
              <Link href="/blog/point-cloud-guide" className="block text-sm text-primary hover:underline">
                → 点群データとは？取得方法・活用事例・必要なソフトウェアを解説
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
