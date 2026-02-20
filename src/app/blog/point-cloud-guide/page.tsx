import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "点群データとは？取得方法・活用事例・必要なソフトウェアを解説",
  description:
    "点群データとは、3Dスキャナやドローンで取得した数百万〜数億個の三次元座標点（X,Y,Z）の集合体です。取得方法3種・活用事例6選・処理フロー・主要ソフトウェア・ファイル形式まで、技術者向けに体系的に解説します。",
  keywords: ["点群データ とは", "点群データ 活用", "点群データ ソフトウェア", "点群データ 取得方法"],
  alternates: { canonical: "/blog/point-cloud-guide" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "点群データとは？取得方法・活用事例・必要なソフトウェアを解説",
  description:
    "点群データとは、3Dスキャナやドローンで取得した数百万〜数億個の三次元座標点の集合体です。取得方法・活用事例・処理フロー・ソフトウェア・ファイル形式まで体系的に解説。",
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
    "@id": "https://surveysolution.pro/blog/point-cloud-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "点群データの容量はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "計測範囲と密度により異なりますが、1スキャンあたり数百MB〜数GBが一般的です。建物1棟（延床2,000㎡）をスキャンした場合、合成後の点群データは10〜30GB程度になります。LAS形式をLAZ形式に圧縮すると容量を60〜70%削減できます。",
      },
    },
    {
      "@type": "Question",
      name: "点群データの精度はどの程度ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャナの場合±1〜3mm、ドローン（写真測量）の場合±2〜5cm、ハンドヘルドスキャナの場合±5〜30mmです。計測距離・反射率・環境条件により変動しますが、従来の手計測（±10〜20mm）と比較して高い精度を実現します。",
      },
    },
    {
      "@type": "Question",
      name: "点群データを扱うにはどのようなスペックのPCが必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CPU: Intel Core i7以上、メモリ: 64GB以上、GPU: NVIDIA RTX 3060以上、ストレージ: NVMe SSD 1TB以上が推奨スペックです。数億点規模のデータを扱う場合はメモリ128GB・GPU RTX 4080以上が望ましいです。",
      },
    },
  ],
};

export default function PointCloudGuidePage() {
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
          { name: "点群データとは？", path: "/blog/point-cloud-guide" },
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
                技術解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              点群データとは？取得方法・活用事例・必要なソフトウェアを解説
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-data-points.jpg"
              alt="点群データのイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>点群データとは、3Dスキャナやドローンで取得した数百万〜数億個の三次元座標点（X,Y,Z）の集合体です。</strong>建物・地形・設備の形状をmm単位で正確に再現でき、CAD図面作成・BIMモデル構築・土量計算・干渉チェック・変位計測など幅広い用途に活用されています。本記事では、点群データの基本的な仕組みから取得方法、活用事例、処理フロー、主要ソフトウェア、ファイル形式まで体系的に解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#basic" className="hover:underline">1. 点群データとは？｜基本の仕組み</a></li>
                <li><a href="#methods" className="hover:underline">2. 点群データの3つの取得方法</a></li>
                <li><a href="#cases" className="hover:underline">3. 点群データの活用事例6選</a></li>
                <li><a href="#flow" className="hover:underline">4. 点群データの処理フロー</a></li>
                <li><a href="#software" className="hover:underline">5. 点群データ処理に使用する主要ソフトウェア</a></li>
                <li><a href="#format" className="hover:underline">6. 点群データのファイル形式</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 基本の仕組み */}
            <h2 id="basic" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データとは？｜基本の仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              点群データ（Point Cloud）とは、3Dレーザースキャナやドローンで計測した三次元座標（X・Y・Z）を持つ点の集合体です。各点には座標情報に加え、色情報（RGB）や反射強度（Intensity）が付与されます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              1回のスキャンで取得する点の数は数百万〜数億に達し、対象物の形状を忠実に再現します。従来の2D図面が「線」で建物を表現するのに対し、点群データは「点の集合」で3次元形状を表現する点が最大の特徴です。
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-3">点群データを構成する4つの要素：</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・<strong>三次元座標（X, Y, Z）</strong>：各点の空間上の位置を定義。座標系は現場基準（ローカル座標）または測地座標系（JGD2011等）を使用</li>
                <li>・<strong>色情報（RGB）</strong>：スキャナ搭載カメラで取得した色をR（赤）G（緑）B（青）の3値で記録。視覚的に現場を再現</li>
                <li>・<strong>反射強度（Intensity）</strong>：レーザー光の反射率を0〜255の数値で記録。材質の識別や分類に使用</li>
                <li>・<strong>点密度</strong>：1㎡あたりの点数（pts/㎡）。地上レーザースキャナでは1,000〜10,000pts/㎡、ドローン測量では100〜500pts/㎡が一般的</li>
              </ul>
            </div>

            {/* 2. 取得方法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データの3つの取得方法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              点群データの取得方法は主に3つあり、対象物の規模・精度要件・現場条件に応じて最適な手法を選定します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">① 地上レーザースキャン（TLS）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に設置した3Dレーザースキャナから360度にレーザーを照射し、反射光の往復時間から距離を算出して三次元座標を取得する方法です。1秒間に最大200万点を計測でき、建物・プラント・トンネルなどの高精度計測に最適です。複数地点からスキャンしたデータを「レジストレーション（合成）」で1つの点群に統合します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±1〜3mm</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">計測速度：最大200万点/秒</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">建物・プラント・構造物向き</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">② ドローン測量（UAV写真測量 / UAV LiDAR）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ドローンに搭載したカメラまたはLiDARセンサで上空から計測する方法です。写真測量（フォトグラメトリ）は大量の重複写真から3D点群を生成し、UAV LiDARはレーザーで直接計測します。1フライト（15〜20分）で10ha以上の広域を計測でき、土木現場の地形計測や土量算出に適しています。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±2〜5cm（写真測量）/ ±1〜3cm（LiDAR）</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">広域地形・土木現場向き</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">③ ハンドヘルド（モバイル）スキャン</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  手持ち型のスキャナで歩行しながらリアルタイムで点群データを取得する方法です。SLAM（Simultaneous Localization and Mapping）技術により、移動しながら自己位置を推定しつつ周囲の3Dマップを生成します。狭い通路・階段・配管裏など、据置型スキャナでは死角になる場所の計測に有効です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±5〜30mm</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">計測速度：30万点/秒</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">狭所・屋内・補完計測向き</span>
                </div>
              </div>
            </div>

            {/* 3. 活用事例6選 */}
            <h2 id="cases" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データの活用事例6選
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              点群データは取得して終わりではなく、目的に応じた加工・分析を経て設計・施工・維持管理の各工程で活用されます。代表的な活用事例を6つ紹介します。
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  num: "1",
                  title: "CAD図面作成（2D/3D）",
                  desc: "点群データから平面図・断面図・立面図を作成します。従来は現場で1箇所ずつ手計測していた寸法取りを、点群データ上で任意の箇所を計測できるため、作図工数を50〜70%削減できます。既存建物の改修・リノベーション案件で特に効果を発揮します。",
                },
                {
                  num: "2",
                  title: "BIMモデル構築（スキャン to BIM）",
                  desc: "点群データをRevitやArchiCADにインポートし、3D建築モデル（BIM）を構築します。既存建物のBIM化では、点群を下敷きにして壁・床・天井・設備をモデリングするため、実測値に基づいた高精度なBIMモデルが完成します。",
                },
                {
                  num: "3",
                  title: "土量計算",
                  desc: "ドローン測量で取得した点群データから地形のメッシュモデルを生成し、切土・盛土の土量を自動計算します。従来の横断測量（断面法）と比較して、面的に計測するため精度が向上し、計算工数も1/5以下に短縮できます。i-Constructionの出来形管理にも対応します。",
                },
                {
                  num: "4",
                  title: "干渉チェック",
                  desc: "既存設備の点群データと新規設計の3Dモデルを重ね合わせ、配管・ダクト・構造材の干渉（ぶつかり）を事前に検出します。プラントや工場の改修工事では、施工前に干渉を発見することで手戻り工事を80%以上削減した実績があります。",
                },
                {
                  num: "5",
                  title: "変位計測（経年変化モニタリング）",
                  desc: "同一対象を定期的にスキャンし、異なる時期の点群データを比較することで、構造物の変形・沈下・ひび割れの進行を定量的に把握します。橋梁・ダム・トンネルなどインフラ構造物の維持管理に活用されています。",
                },
                {
                  num: "6",
                  title: "デジタルアーカイブ",
                  desc: "文化財・歴史的建造物を点群データで3Dデジタル記録として保存します。災害・経年劣化による消失リスクに備えるだけでなく、VR/AR展示、修復計画の基礎資料、教育コンテンツとしても活用されています。",
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">点群データの活用について、具体的な案件でのご相談を承ります。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 処理フロー */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データの処理フロー
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              現場で取得した生データからCAD図面やBIMモデルなどの成果物を作成するまで、5つのステップで処理を行います。
            </p>

            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "データ取得（スキャン）", desc: "レーザースキャナ・ドローン・ハンドヘルドスキャナで現場を計測します。複数地点からスキャンし、対象物全体をカバーします。ターゲット球やチェッカーボードを設置して、後工程の合成精度を確保します。" },
                { step: "STEP 2", title: "レジストレーション（合成）", desc: "複数スキャンデータを共通の座標系に統合します。ターゲット合わせ（精度：±1mm以内）またはクラウドトゥクラウド（点群同士のマッチング）で位置合わせを行い、1つの統合点群を生成します。" },
                { step: "STEP 3", title: "ノイズ除去・クリーニング", desc: "計測時に発生した不要な点（通行人・車両・反射ノイズ・飛び点）を除去します。自動フィルタリングと手動クリーニングを併用し、成果物の品質を確保します。" },
                { step: "STEP 4", title: "座標変換・ジオリファレンス", desc: "ローカル座標で取得したデータを、公共座標系（平面直角座標・JGD2011）に変換します。GCP（地上基準点）との整合を取り、他のGISデータや設計データとの重ね合わせを可能にします。" },
                { step: "STEP 5", title: "成果物作成", desc: "処理済み点群データを基に、用途に応じた成果物（CAD図面・BIMモデル・メッシュモデル・オルソ画像・土量計算書等）を作成します。納品形式はお客様のソフトウェア環境に合わせて選定します。" },
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

            {/* 5. ソフトウェア */}
            <h2 id="software" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データ処理に使用する主要ソフトウェア
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              点群データの処理には専用ソフトウェアが必要です。用途・対応形式・価格帯が異なるため、プロジェクトの要件に応じて選定します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">ソフト名</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                    <th className="px-4 py-3 text-left">対応形式</th>
                    <th className="px-4 py-3 text-left">価格帯</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Autodesk ReCap Pro", use: "点群合成・閲覧・RCP変換", format: "E57, RCP, LAS, PLY", price: "年額約8万円" },
                    { name: "FARO SCENE", use: "FAROスキャナ用合成・処理", format: "FLS, E57, LAS, XYZ", price: "約60万円（買切）" },
                    { name: "Leica Cyclone", use: "Leicaスキャナ用合成・計測", format: "E57, LAS, PTS, PTX", price: "約100万円〜" },
                    { name: "CloudCompare", use: "点群閲覧・比較・解析", format: "LAS, E57, PLY, XYZ等", price: "無料（オープンソース）" },
                    { name: "Autodesk Revit", use: "BIMモデリング（点群下敷き）", format: "RCP, RCS", price: "年額約50万円" },
                    { name: "Trimble RealWorks", use: "点群合成・3Dモデル作成", format: "E57, LAS, TZF", price: "約80万円〜" },
                    { name: "DJI Terra", use: "ドローン写真測量・点群生成", format: "LAS, OBJ, TIFF", price: "年額約20万円" },
                    { name: "Metashape (Agisoft)", use: "写真測量・点群生成", format: "LAS, PLY, OBJ, E57", price: "約6万円〜（買切）" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b whitespace-nowrap">{row.name}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.format}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ソフトウェア選定のポイント：</strong>使用するスキャナのメーカーとの互換性、必要な成果物の形式、チーム内のライセンス共有方法を事前に確認することが重要です。弊社では、お客様のソフトウェア環境に合わせた形式で点群データを納品しています。
              </p>
            </div>

            {/* 6. ファイル形式 */}
            <h2 id="format" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              点群データのファイル形式
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              点群データには複数のファイル形式が存在し、用途やソフトウェアとの互換性に応じて使い分けます。主要な5形式を比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">形式</th>
                    <th className="px-4 py-3 text-left">特徴</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                    <th className="px-4 py-3 text-left">対応ソフト</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { format: "LAS / LAZ", feature: "業界標準。LAZはLASの圧縮版（容量60〜70%削減）", use: "汎用的なデータ交換・保存", support: "ほぼ全ソフト対応" },
                    { format: "E57", feature: "ISO標準規格。メタ情報・画像を格納可能", use: "異なるメーカー間のデータ交換", support: "ReCap, SCENE, Cyclone等" },
                    { format: "RCP / RCS", feature: "Autodesk独自形式。高速描画に最適化", use: "Revit・AutoCADでのBIM活用", support: "Autodesk製品" },
                    { format: "PLY", feature: "軽量。メッシュデータも格納可能", use: "3Dプリント・CG・研究用途", support: "CloudCompare, MeshLab等" },
                    { format: "XYZ / CSV", feature: "テキスト形式。座標値の直接記述", use: "データ変換・簡易確認", support: "テキストエディタ・表計算ソフト" },
                  ].map((row, i) => (
                    <tr key={row.format} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b whitespace-nowrap">{row.format}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.feature}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.support}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "点群データの容量はどれくらいですか？",
                  a: "計測範囲と密度により異なりますが、1スキャンあたり数百MB〜数GBが一般的です。建物1棟（延床2,000㎡）をスキャンした場合、合成後の点群データは10〜30GB程度になります。LAS形式をLAZ形式に圧縮すると容量を60〜70%削減できます。",
                },
                {
                  q: "点群データの精度はどの程度ですか？",
                  a: "地上レーザースキャナの場合±1〜3mm、ドローン（写真測量）の場合±2〜5cm、ハンドヘルドスキャナの場合±5〜30mmです。計測距離・反射率・環境条件により変動しますが、従来の手計測（±10〜20mm）と比較して高い精度を実現します。",
                },
                {
                  q: "点群データを扱うにはどのようなスペックのPCが必要ですか？",
                  a: "CPU: Intel Core i7以上、メモリ: 64GB以上、GPU: NVIDIA RTX 3060以上、ストレージ: NVMe SSD 1TB以上が推奨スペックです。数億点規模のデータを扱う場合はメモリ128GB・GPU RTX 4080以上が望ましいです。",
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
              点群データは、3Dスキャナやドローンで取得した三次元座標点の集合体であり、建物・地形・設備の形状をmm単位で正確に再現できる技術です。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 点群データは三次元座標（X,Y,Z）＋色情報＋反射強度で構成される</li>
                <li>・ 取得方法は地上レーザースキャン（±1〜3mm）・ドローン（±2〜5cm）・ハンドヘルド（±5〜30mm）の3種</li>
                <li>・ CAD図面作成・BIM構築・土量計算・干渉チェック・変位計測・デジタルアーカイブの6分野で活用</li>
                <li>・ 処理フローは取得→合成→ノイズ除去→座標変換→成果物作成の5ステップ</li>
                <li>・ ファイル形式はLAS/LAZ（業界標準）、E57（ISO標準）、RCP（Autodesk）が主流</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              点群データの取得から成果物作成までワンストップで対応できる業者を選ぶことで、データの品質と活用効果を最大化できます。弊社では、計測計画の立案から点群データの取得・処理・成果物作成まで一貫して対応しています。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              点群データの取得・活用のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「どの計測手法が最適か分からない」「既存データを活用したい」という段階でも大丈夫です。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/service/point-cloud"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                点群データサービスを見る
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
              <Link href="/blog/laser-scanner-guide" className="block text-sm text-primary hover:underline">
                → レーザースキャナーとは？種類・精度・選び方を徹底解説
              </Link>
              <Link href="/blog/bim-3d-scan" className="block text-sm text-primary hover:underline">
                → BIMと3Dスキャンの連携方法｜スキャンtoBIMの手順と活用事例
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
