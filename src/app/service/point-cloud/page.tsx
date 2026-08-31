import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CaseStudySection,
  EditorialMeta,
  FaqSection,
  TechnicalGuideSection,
} from "@/components/ContentExpansion";

export const metadata: Metadata = {
  title: "点群データ作成・処理｜3Dスキャンデータの加工・CAD変換・図面作成",
  description:
    "点群データとは、3Dスキャンで取得した数百万〜数億の三次元座標の集合です。ノイズ除去・合成・座標変換から、CAD図面（DXF/DWG）・断面図・平面図の作成まで一貫対応。LAS/E57/PTS等の各種フォーマットに対応。",
  keywords: [
    "点群データ 作成",
    "点群処理",
    "点群データ とは",
    "点群 CAD変換",
    "点群データ 活用",
    "3Dスキャン データ処理",
  ],
  alternates: { canonical: "/service/point-cloud" },
};

const processes = [
  {
    step: "01",
    title: "データ取得",
    desc: "地上レーザースキャナで現場の3Dデータを取得します。複数のスキャン位置から取得したデータを統合するための基準点も設置します。",
  },
  {
    step: "02",
    title: "レジストレーション（合成）",
    desc: "複数のスキャンデータの座標を一致させ、1つの統合データに合成します。ターゲットや既知点、重複形状を用いて位置合わせし、残差と検証点から案件ごとの精度を確認します。",
  },
  {
    step: "03",
    title: "ノイズ除去・フィルタリング",
    desc: "不要な点（通行人・車両・植栽等の一時的な障害物）を除去し、対象物のみのクリーンなデータに仕上げます。",
  },
  {
    step: "04",
    title: "座標変換・間引き処理",
    desc: "必要に応じて測地座標系への変換や、データ量の最適化（間引き処理）を行います。後工程のソフトウェアに適したデータ密度に調整します。",
  },
  {
    step: "05",
    title: "成果物作成・納品",
    desc: "ご要望に応じて、点群データ（LAS/E57）、CAD図面（DXF/DWG）、断面図・平面図・立面図、3Dモデルなどの成果物を作成・納品します。",
  },
];

const deliverables = [
  { format: "点群データ", extensions: "LAS / E57 / PTS / XYZ", desc: "3D座標＋色情報を含む生データ。各種ビューワーで閲覧可能" },
  { format: "CAD図面", extensions: "DXF / DWG", desc: "平面図・断面図・立面図のCADデータ。AutoCAD等で編集可能" },
  { format: "3Dモデル", extensions: "OBJ / FBX / IFC", desc: "メッシュモデルやBIMモデル。Revit等のBIMソフトで活用可能" },
  { format: "オルソ画像", extensions: "TIFF / JPEG", desc: "真上から見た正射投影画像。GIS・図面作成の下地として活用" },
  { format: "PDF報告書", extensions: "PDF", desc: "断面図・寸法情報・写真を含む報告書。非専門家にも共有可能" },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "点群データ作成・処理",
  description:
    "3Dスキャンで取得したデータのノイズ除去・合成・座標変換からCAD図面作成まで一貫対応するサービス。",
  provider: {
    "@type": "LocalBusiness",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "点群データ処理・CAD図面作成",
};

export default function PointCloudPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="点群データ作成・処理"
        subtitle="POINT CLOUD"
        image="/images/service03.jpg"
        breadcrumbItems={[
          { name: "サービス概要", path: "/service" },
          { name: "点群データ作成・処理", path: "/service/point-cloud" },
        ]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="relative aspect-[21/9] mb-10 rounded-lg overflow-hidden">
            <Image src="/images/service-point-cloud.jpg" alt="点群データ処理のイメージ" fill className="object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            点群データとは、3Dスキャンで取得した数百万〜数億の<br className="hidden md:block" />
            三次元座標（X・Y・Z）の集合です。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            3Dレーザースキャナで取得した生データは、そのままではノイズや不要な情報を含んでいます。
            弊社では、データの合成・ノイズ除去・座標変換といった処理工程を経て、CAD図面やBIMモデルの基礎となるクリーンな点群データを作成します。
            成果物は、LAS/E57等の点群フォーマット、DXF/DWGのCAD図面、PDF報告書など、貴社の用途に合わせた形式で納品します。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="点群処理・図面化・モデル化の実例"
        introduction="点群処理は、点を減らす作業ではなく、利用目的に必要な形状と座標を残す品質管理です。IFCモデル、ヒートマップ、越境調査など、異なる納品目的の事例をご覧いただけます。"
        cases={[
          {
            title: "化学工場の点群から配管IFCモデルを作成",
            href: "/case/plant-piping",
            category: "導入事例｜点群→IFC",
            summary: "800㎡を3日でスキャンし、複数地点の点群を統合・ノイズ処理。改造範囲の配管と設備を10日でモデル化しました。",
            result: "IFC納品、干渉確認工数80%削減",
          },
          {
            title: "敷地点群から高低差ヒートマップを作成",
            href: "/use-case/site-heatmap",
            category: "活用事例｜解析",
            summary: "地盤面を抽出し、基準高さとの差を色分け。水の流れや水溜まりリスクを、設計者が確認しやすい図へ加工しました。",
          },
          {
            title: "空中越境物を抽出して位置と高さを図面化",
            href: "/use-case/aerial-encroachment",
            category: "活用事例｜越境調査",
            summary: "電線、樹木、庇など上空の点群を境界参考線と比較し、平面位置だけでなく高さと離隔を報告書へまとめました。",
          },
        ]}
      />

      {/* データ処理の流れ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">PROCESS</span>
            <h2 className="section-title-ja">点群データ処理の流れ</h2>
          </div>
          <div className="space-y-6">
            {processes.map((item) => (
              <div key={item.step} className="flex gap-4 md:gap-6 items-start">
                <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 納品可能な成果物 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">DELIVERABLES</span>
            <h2 className="section-title-ja">点群データから納品可能な成果物</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">形式</th>
                  <th className="px-4 py-3 text-left">ファイル拡張子</th>
                  <th className="px-4 py-3 text-left">用途・特長</th>
                </tr>
              </thead>
              <tbody>
                {deliverables.map((d, i) => (
                  <tr key={d.format} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 font-bold text-gray-900">{d.format}</td>
                    <td className="px-4 py-3 text-gray-700">{d.extensions}</td>
                    <td className="px-4 py-3 text-gray-700">{d.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 弊社の強み */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">STRENGTHS</span>
            <h2 className="section-title-ja">3D測量データ処理の強み</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "取得から加工まで一貫対応",
                desc: "現場での3Dスキャンからデータ処理・図面作成まで、すべて自社で完結します。外注による品質低下やコスト増のリスクがありません。",
              },
              {
                title: "用途に応じた最適な納品",
                desc: "「BIMソフトで使いたい」「施主への報告書が必要」など、貴社の用途に合わせたフォーマットと精度で納品します。",
              },
              {
                title: "追加加工にも柔軟に対応",
                desc: "納品後に「別の位置の断面図が必要になった」等の追加要望にも対応可能です。元データを保管しているため、再スキャン不要で対応できます。",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalGuideSection
        heading="レジストレーション・ノイズ除去・納品形式の判断基準"
        introduction="点群の見た目がきれいでも、座標がずれていたり必要部材を削除していれば成果として使えません。位置合わせの残差、除去ルール、間引き条件、座標系、単位、ファイル形式を処理記録として残します。"
        guides={[
          {
            title: "生データから利用可能な点群へ整える3段階",
            lead: "最初に各スキャンを統合し、次に外れ値や一時物を分類し、最後に用途別の密度と範囲へ書き出します。自動フィルタは補助として使い、対象物まで消していないか断面と画像で確認します。",
            image: "/images/service-point-cloud-pipeline.png",
            imageAlt: "ノイズを含む点群から外れ値を識別しクリーンな点群へ処理する3段階",
            caption: "生点群、外れ値確認、クリーンアップ後の点群という3段階の処理（概念図）",
            points: [
              { title: "ターゲット法とターゲットレス法を使い分ける", body: "ターゲット法は既知点や標識で結合精度を検証しやすく、長い通路や繰返し形状に向きます。ターゲットレス法は重複形状で効率よく統合できますが、十分な重複と特徴形状が必要です。案件によって併用します。" },
              { title: "残差は平均値だけで判断しない", body: "全体の平均残差が小さくても、一部区間にねじれや累積誤差が残ることがあります。結合ごとの残差、閉合、独立した検証点、断面の二重化を確認します。" },
              { title: "ノイズ除去は対象物の定義から始める", body: "通行人や車両でも、交通動線の記録が目的なら削除対象ではありません。植生、反射ノイズ、浮遊点、仮設物を自動で一括削除せず、成果目的と範囲に応じてレイヤー分けまたは除去します。" },
              { title: "形式とファイルサイズを利用環境に合わせる", body: "交換性を重視するならE57/LAS、Autodesk環境ならRCP/RCS、軽量閲覧なら範囲分割やWebビューを検討します。点数だけでなく色情報、強度、法線、座標桁、圧縮方式が容量を左右します。" },
            ],
            note: "ファイルサイズの目安は対象範囲・密度・属性で大きく変わります。納品先PCのメモリ、ソフトウェア、ネットワークを確認し、原本と軽量版を分ける方法をご提案します。",
          },
        ]}
      />

      <EditorialMeta pageName="点群データ作成・処理" path="/service/point-cloud" />

      <FaqSection
        title="点群データ作成・処理に関するよくある質問"
        faqs={[
          { q: "他社や自社で取得した点群も処理できますか？", a: "可能です。まずサンプルで形式、座標系、単位、点密度、色情報、欠測、結合状態を確認します。元データやスキャン位置情報がない場合は、可能な処理と精度検証の範囲を明示します。" },
          { q: "レジストレーション精度はどのように確認しますか？", a: "ターゲット・既知点・重複形状の残差、独立検証点、閉合、断面での二重化を確認します。単一の平均値だけでなく、局所的なずれと累積誤差も報告します。" },
          { q: "不要な人や車をすべて削除できますか？", a: "多くは除去または別レイヤー化できますが、対象物を隠していた部分の形状は復元できません。別設置点のデータで補えるか確認し、補えない箇所は欠測として残します。" },
          { q: "どの点群形式を選べばよいですか？", a: "利用ソフトと目的で決めます。交換用にはE57/LAS、Autodesk製品ではRCP/RCS、単純な座標列にはPTS/XYZが候補です。座標系・単位・色情報・強度属性の必要性も確認します。" },
          { q: "大容量で開けない場合はどうしますか？", a: "原本を保存したうえで、エリア分割、密度の段階化、不要属性の除外、軽量形式への変換を行います。断面作成用と閲覧用など、用途別に複数版を納品できます。" },
        ]}
      />

      {/* 関連サービス */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">3D測量の関連サービス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/service/laser-scan" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 01</span>
              <p className="font-bold text-gray-900 mt-1">地上レーザースキャン測量</p>
            </Link>
            <Link href="/service/3d-modeling" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 03</span>
              <p className="font-bold text-gray-900 mt-1">3Dモデリング・BIM連携</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            点群データ処理のご相談はお気軽に
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「既存の点群データを図面化したい」「どの形式で納品すればいいか分からない」など、データ処理に関するご相談を承ります。
            貴社の用途をお伺いし、最適な成果物をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/price"
              className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors"
            >
              料金の目安を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
