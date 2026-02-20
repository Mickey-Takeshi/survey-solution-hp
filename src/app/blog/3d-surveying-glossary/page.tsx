import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量で使われる用語集｜点群・メッシュ・BIM/CIMまで網羅",
  description:
    "3D測量の初心者〜中級者に向けて、点群データ・メッシュ・BIM/CIMなど現場で使われる用語30以上をカテゴリ別にわかりやすく解説。基本用語・計測機器・データ処理・ファイル形式・BIM/CIM関連を網羅した用語集です。",
  keywords: ["3D測量 用語", "点群 用語集", "3D測量 用語集", "BIM CIM 用語", "点群データ 用語"],
  alternates: { canonical: "/blog/3d-surveying-glossary" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量で使われる用語集｜点群・メッシュ・BIM/CIMまで網羅",
  description:
    "3D測量の初心者〜中級者に向けて、点群データ・メッシュ・BIM/CIMなど現場で使われる用語30以上をカテゴリ別にわかりやすく解説する用語集です。",
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
    "@id": "https://surveysolution.pro/blog/3d-surveying-glossary",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量の用語を効率よく学ぶにはどうすればいいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まず「点群データ」「メッシュ」「座標系」の3つの基本用語を理解することが重要です。この3つを押さえた上で、計測機器の用語（レーザースキャナ・LiDAR等）→データ処理の用語（レジストレーション・フィルタリング等）→ファイル形式（LAS・E57等）の順で学ぶと、3D測量のワークフロー全体を体系的に理解できます。",
      },
    },
    {
      "@type": "Question",
      name: "BIMとCIMの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BIM（Building Information Modeling）は建築分野の3Dモデル技術で、建物の設計・施工・維持管理に使用します。CIM（Construction Information Modeling/Management）は土木分野の3Dモデル技術で、橋梁・道路・トンネルなどのインフラ構造物を対象とします。いずれも3D測量データを活用して構築しますが、対象分野と使用するソフトウェアが異なります。",
      },
    },
    {
      "@type": "Question",
      name: "点群データとメッシュデータの違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データは三次元座標を持つ点の集合体で、スキャナやドローンで直接取得した「生データ」に近い形式です。メッシュデータは点群の点同士を三角形（ポリゴン）で結んで面を生成したもので、体積計算・断面表示・3Dプリントなどに使用します。点群→メッシュへの変換は「メッシュ化」と呼ばれるデータ処理工程で行います。",
      },
    },
  ],
};

export default function SurveyingGlossaryPage() {
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
          { name: "3D測量で使われる用語集", path: "/blog/3d-surveying-glossary" },
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
                用語解説
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量で使われる用語集｜点群・メッシュ・BIM/CIMまで網羅
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-glossary-book.jpg"
              alt="3D測量用語集のイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              3D測量では「点群データ」「メッシュ」「BIM/CIM」など、専門的な用語が多く使われます。本記事では、3D測量の初心者〜中級者に向けて、現場でよく使われる<strong>用語30以上をカテゴリ別にわかりやすく解説</strong>します。基本用語・計測機器・データ処理・ファイル形式・BIM/CIM関連の5分野を網羅しているため、辞書的にご活用ください。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#basic" className="hover:underline">1. 基本用語</a></li>
                <li><a href="#equipment" className="hover:underline">2. 計測機器の用語</a></li>
                <li><a href="#processing" className="hover:underline">3. データ処理の用語</a></li>
                <li><a href="#file-format" className="hover:underline">4. ファイル形式の用語</a></li>
                <li><a href="#bim-cim" className="hover:underline">5. BIM/CIM関連の用語</a></li>
                <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">7. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 基本用語 */}
            <h2 id="basic" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              基本用語
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量を理解するうえで最初に押さえるべき基礎的な用語です。計測データの構造や3D空間の表現方法に関する用語を解説します。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">点群データ（Point Cloud）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dスキャナやドローンで取得した、三次元座標（X・Y・Z）を持つ点の集合体です。各点には座標に加え、色情報（RGB）や反射強度（Intensity）が付与されます。1回のスキャンで数百万〜数億点を取得でき、対象物の形状をmm単位で再現します。3D測量で最も基本となるデータ形式です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">メッシュ（Mesh）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  点群データの点同士を三角形や四角形で結び、面（サーフェス）を生成した3Dモデルです。点群は「点の集合」であるのに対し、メッシュは「面の集合」で形状を表現します。体積計算・断面表示・3Dプリント・CG表現など、面として扱う必要がある用途に使用します。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">ポリゴン（Polygon）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  メッシュを構成する個々の多角形（主に三角形）のことです。3D測量では三角形ポリゴン（トライアングル）が標準的に使われます。ポリゴン数が多いほど形状の再現精度が高くなりますが、データ容量も増加するため、用途に応じた適切なポリゴン数の設定が重要です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">テクスチャ（Texture）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  メッシュモデルの表面に貼り付ける画像情報です。スキャナ搭載カメラや別途撮影した写真から色情報を取得し、メッシュの各面に対応する画像をマッピングします。テクスチャを適用することで、3Dモデルが現実に近い外観を持ちます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">ボクセル（Voxel）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3D空間を均等な立方体の格子で分割したときの最小単位です。2D画像の「ピクセル」に相当する3D版の概念です。点群データをボクセル化すると、空間内の密度分布や占有状態を効率的に解析でき、樹木の体積推定や建物内部の空間解析に活用されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">座標系（Coordinate System）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3D空間内の位置を定義するための基準体系です。3D測量では、現場独自の「ローカル座標系」と、日本測地系2011（JGD2011）などの「測地座標系（グローバル座標系）」を使い分けます。異なるデータを重ね合わせるには、同一の座標系に変換する必要があります。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">原点（Origin）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  座標系の基準となるX=0、Y=0、Z=0の位置です。スキャナで取得した点群データの原点はスキャナの設置位置となり、複数スキャンデータを合成（レジストレーション）する際には共通の原点に統合します。
                </p>
              </div>
            </div>

            {/* 2. 計測機器の用語 */}
            <h2 id="equipment" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              計測機器の用語
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量で使用するスキャナ・センサ・計測技術に関する用語です。機器選定や計測手法の理解に役立ちます。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">レーザースキャナ（Laser Scanner）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  レーザー光を照射し、反射光の情報から対象物までの距離と方向を計測して三次元座標を取得する計測機器です。据置型（三脚設置）、ハンドヘルド型（手持ち）、車載型（MMS）、航空機搭載型の4種類があります。1秒間に数十万〜200万点を計測できます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">ToF方式（Time of Flight）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  レーザー光を照射してから反射光が戻るまでの「時間（Time of Flight）」を計測し、距離を算出する方式です。計測距離が長く（最大350m以上）、屋外の広域計測に適しています。計測速度は位相差方式より遅い傾向がありますが、長距離での精度に優れます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">位相差方式（Phase Shift）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  照射したレーザー光と反射光の「位相のずれ」を計測して距離を算出する方式です。ToF方式より計測速度が速く（最大200万点/秒）、屋内や近距離（100m以内）での高密度スキャンに適しています。建物内部やプラント設備の計測で多く採用されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">SLAM（Simultaneous Localization and Mapping）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  移動しながら自己位置の推定と周囲の3Dマップ生成を同時に行う技術です。ハンドヘルドスキャナやロボット、自動運転車に搭載されています。GNSSが使えない屋内や地下空間でもリアルタイムで点群データを取得できるため、狭所や複雑な構造の計測に有効です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">フォトグラメトリ（Photogrammetry）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  複数枚の重複した写真から三次元形状を復元する技術です。写真間の共通点（特徴点）をマッチングし、三角測量の原理で各点の三次元座標を算出します。ドローン測量で広く使われ、点群データとオルソ画像（正射投影画像）を同時に生成できます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">LiDAR（Light Detection and Ranging）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  レーザー光を使用して対象物までの距離を計測するリモートセンシング技術の総称です。レーザースキャナはLiDAR技術を応用した計測機器の一種です。航空LiDAR、地上LiDAR、モバイルLiDAR、UAV LiDARなど、プラットフォーム別に分類されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">GCP（Ground Control Point：地上基準点）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ドローン測量やフォトグラメトリで、点群データの位置精度を担保するために地上に設置する基準点です。GNSSやトータルステーションで高精度に座標を取得し、写真測量で生成した点群データの座標補正（ジオリファレンス）に使用します。通常、計測範囲に5〜10点を配置します。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">IMU（Inertial Measurement Unit：慣性計測装置）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  加速度センサとジャイロセンサを組み合わせた装置で、機器の姿勢（傾き・回転）と加速度を計測します。ハンドヘルドスキャナやドローン搭載LiDARに内蔵され、移動中のスキャナの位置と姿勢をリアルタイムで補正することで点群データの精度を維持します。
                </p>
              </div>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">3D測量の基本を体系的に学びたい方はこちらの記事もご覧ください。</p>
              <Link href="/blog/what-is-3d-surveying" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                3D測量の基礎知識を読む
              </Link>
            </div>

            {/* 3. データ処理の用語 */}
            <h2 id="processing" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              データ処理の用語
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              スキャナで取得した生データを成果物に加工するまでの処理工程で使われる用語です。データの品質と精度に直結する重要な工程を解説します。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">レジストレーション（Registration：合成）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  複数の位置からスキャンした点群データを、共通の座標系に統合する処理です。ターゲット球やチェッカーボードを基準にした「ターゲットベース方式」と、点群同士の形状マッチングによる「クラウドトゥクラウド方式」があります。合成精度は成果物全体の品質を左右するため、±1mm以内の精度が求められます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">ノイズ除去（Noise Removal）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  点群データに含まれる不要な点を除去する処理です。計測時に発生する反射ノイズ（ガラス面・水面の乱反射）、飛び点（異常値）、不要物（通行人・車両・植生）を自動フィルタと手動クリーニングの組み合わせで除去します。成果物の品質を確保するために不可欠な工程です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">フィルタリング（Filtering）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  条件を設定して点群データから特定の点を抽出・除外する処理です。地表面フィルタリング（地面と建物・植生を分離）、高さフィルタリング（特定高さの点のみ抽出）、反射強度フィルタリング（特定材質の点を抽出）など、目的に応じて使い分けます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">ダウンサンプリング（Downsampling：間引き）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  点群データの点数を意図的に減らす処理です。数億点規模のデータはPCのメモリやGPUの限界を超える場合があるため、ボクセルグリッド法や均等間引きで点密度を下げます。例えば1mm間隔の点群を5mm間隔に間引くことで、データ量を大幅に削減しつつ形状を維持できます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">メッシュ化（Meshing）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  点群データの点同士を三角形ポリゴンで接続し、面（サーフェス）を生成する処理です。ドロネー三角形分割やポアソン再構成などのアルゴリズムを使用します。メッシュ化により、体積計算・断面表示・テクスチャ適用・3Dプリントが可能になります。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">テクスチャマッピング（Texture Mapping）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  メッシュモデルの各面に、対応する写真の色情報を貼り付ける処理です。スキャナ搭載カメラや別途撮影した写真を使用し、UV座標（テクスチャ座標）を設定してメッシュ面と画像を対応づけます。テクスチャを適用することで、3Dモデルがフォトリアルな外観を持ちます。
                </p>
              </div>
            </div>

            {/* 4. ファイル形式の用語 */}
            <h2 id="file-format" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ファイル形式の用語
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量データの保存・交換に使用するファイル形式です。ソフトウェアとの互換性や用途に応じて適切な形式を選定します。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">LAS / LAZ</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  LAS（LASer）は、点群データの業界標準ファイル形式です。ASPRS（米国写真測量学会）が策定し、座標・色・反射強度・分類情報を格納できます。LAZはLASの圧縮版で、データ容量を60〜70%削減しながら情報の損失がない可逆圧縮形式です。ほぼ全ての点群処理ソフトウェアが対応しています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">E57</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ASTM（米国材料試験協会）が策定した3D計測データのISO標準規格（ISO/ASTM 52642:2024）です。点群データに加え、カメラ画像やメタ情報（スキャナ情報・計測条件等）を1ファイルに格納できます。異なるメーカーのスキャナ間でデータを交換する際の共通形式として広く使用されます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">RCP / RCS</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Autodesk独自の点群ファイル形式です。RCS（ReCap Scan）は個々のスキャンデータ、RCP（ReCap Project）は複数のRCSをまとめたプロジェクトファイルです。Revit・AutoCAD・Navisworksなど、Autodesk製品で点群を活用する際に使用します。高速描画に最適化されています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">PLY（Polygon File Format）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  点群データとメッシュデータの両方を格納できる軽量なファイル形式です。ASCII形式とバイナリ形式があり、バイナリ形式は容量が小さくなります。3Dプリント、CG、研究用途で広く使用され、CloudCompareやMeshLabなど多くのオープンソースソフトウェアが対応しています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">OBJ（Wavefront OBJ）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dメッシュモデルの標準的なファイル形式で、頂点座標・面情報・テクスチャ座標を記述します。MTL（マテリアル）ファイルと組み合わせてテクスチャ情報を付与できます。CADソフト・CGソフト・3Dビューアなど対応ソフトウェアが多く、メッシュデータの交換形式として汎用的です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">IFC（Industry Foundation Classes）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  buildingSMART Internationalが策定したBIM/CIMデータの国際標準形式（ISO 16739）です。建物の3D形状だけでなく、部材の名称・材質・性能・コストなどの属性情報を格納できます。異なるBIMソフトウェア間（Revit、ArchiCAD、Tekla等）でデータを交換する際に使用します。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">DXF / DWG</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Autodeskが開発した2D/3D CADデータのファイル形式です。DWGはAutoCADのネイティブ形式、DXFはテキストベースの交換形式です。3D測量では、点群データから作成した平面図・断面図・立面図をDXF/DWGで納品するケースが多く、建設業界で最も普及しているCAD形式です。
                </p>
              </div>
            </div>

            {/* 5. BIM/CIM関連の用語 */}
            <h2 id="bim-cim" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              BIM/CIM関連の用語
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              建築・土木分野の3Dモデリング技術であるBIM/CIMに関する用語です。3D測量データの主要な活用先であり、i-Constructionの推進に伴い重要性が高まっています。
            </p>

            <div className="space-y-5 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">BIM（Building Information Modeling）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  建物の3Dモデルに、部材の名称・寸法・材質・コスト・工程などの属性情報を付与した「情報付き3Dモデル」を中心に、設計・施工・維持管理を一元管理する手法です。Revit、ArchiCAD、Tekla Structuresなどのソフトウェアで構築し、3D測量データ（点群）を下敷きにしたBIM化が増えています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">CIM（Construction Information Modeling/Management）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  土木分野における3Dモデル活用の概念で、橋梁・道路・トンネル・ダムなどのインフラ構造物を対象とします。設計段階から3Dモデルを作成し、施工シミュレーション・数量算出・維持管理に活用します。国土交通省が推進するi-ConstructionにおいてCIM活用が原則化されています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">LOD（Level of Detail / Level of Development）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  BIM/CIMモデルの詳細度を示す指標です。LOD 100（概念レベル）からLOD 500（竣工・実測レベル）まで5段階で定義されます。3D測量データからBIMモデルを構築する場合、通常LOD 300〜400（設計〜施工レベル）の詳細度で作成します。発注者との仕様合意に使用される重要な概念です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">スキャン to BIM（Scan to BIM）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dスキャナで取得した点群データを基にBIMモデルを構築するワークフローです。点群データをRevit等のBIMソフトに取り込み、壁・床・天井・柱・設備を点群に合わせてモデリングします。既存建物の改修・リノベーション・ファシリティマネジメントで特に活用されています。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">i-Construction（アイ・コンストラクション）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省が2016年から推進する建設現場のICT（情報通信技術）活用施策です。3D測量・3D設計・ICT建機施工・3D出来形管理の一連のプロセスをデジタル化し、建設業の生産性を2025年度までに20%向上させることを目標としています。3D測量はi-Constructionの起点となる技術です。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2">出来形管理（As-built Management）</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  施工後の構造物が設計図どおりに仕上がっているかを検査・記録する管理工程です。i-Constructionでは、3D測量（ドローンやレーザースキャナ）で施工面の点群データを取得し、3D設計データとの差分を面的に比較する「3D出来形管理」が標準化されています。従来の断面計測と比較して検査効率が大幅に向上します。
                </p>
              </div>
            </div>

            {/* 6. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "3D測量の用語を効率よく学ぶにはどうすればいいですか？",
                  a: "まず「点群データ」「メッシュ」「座標系」の3つの基本用語を理解することが重要です。この3つを押さえた上で、計測機器の用語（レーザースキャナ・LiDAR等）→データ処理の用語（レジストレーション・フィルタリング等）→ファイル形式（LAS・E57等）の順で学ぶと、3D測量のワークフロー全体を体系的に理解できます。",
                },
                {
                  q: "BIMとCIMの違いは何ですか？",
                  a: "BIM（Building Information Modeling）は建築分野の3Dモデル技術で、建物の設計・施工・維持管理に使用します。CIM（Construction Information Modeling/Management）は土木分野の3Dモデル技術で、橋梁・道路・トンネルなどのインフラ構造物を対象とします。いずれも3D測量データを活用して構築しますが、対象分野と使用するソフトウェアが異なります。",
                },
                {
                  q: "点群データとメッシュデータの違いは何ですか？",
                  a: "点群データは三次元座標を持つ点の集合体で、スキャナやドローンで直接取得した「生データ」に近い形式です。メッシュデータは点群の点同士を三角形（ポリゴン）で結んで面を生成したもので、体積計算・断面表示・3Dプリントなどに使用します。点群→メッシュへの変換は「メッシュ化」と呼ばれるデータ処理工程で行います。",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 7. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量で使われる用語を「基本用語」「計測機器」「データ処理」「ファイル形式」「BIM/CIM関連」の5カテゴリに分けて解説しました。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 基本用語：点群データ・メッシュ・ポリゴン・テクスチャ・ボクセル・座標系・原点の7語</li>
                <li>・ 計測機器：レーザースキャナ・ToF/位相差方式・SLAM・フォトグラメトリ・LiDAR・GCP・IMUの8語</li>
                <li>・ データ処理：レジストレーション・ノイズ除去・フィルタリング・ダウンサンプリング・メッシュ化・テクスチャマッピングの6語</li>
                <li>・ ファイル形式：LAS/LAZ・E57・RCP/RCS・PLY・OBJ・IFC・DXF/DWGの7形式</li>
                <li>・ BIM/CIM：BIM・CIM・LOD・スキャンtoBIM・i-Construction・出来形管理の6語</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量は用語を理解することで、業者との打ち合わせや仕様書の読解がスムーズになります。まずは基本用語を押さえた上で、自社の業務に関連する分野の用語を深掘りしていくことをおすすめします。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量についてもっと詳しく知りたい方へ
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「3D測量の導入を検討している」「用語は分かったが具体的な進め方が分からない」という段階でも大丈夫です。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/blog/what-is-3d-surveying"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                3D測量の基礎知識を読む
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
              <Link href="/blog/point-cloud-guide" className="block text-sm text-primary hover:underline">
                → 点群データとは？取得方法・活用事例・必要なソフトウェアを解説
              </Link>
              <Link href="/blog/laser-scanner-guide" className="block text-sm text-primary hover:underline">
                → レーザースキャナーとは？種類・精度・選び方を徹底解説
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
