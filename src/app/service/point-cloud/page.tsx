import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

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
    desc: "複数のスキャンデータの座標を一致させ、1つの統合データに合成します。基準点を用いた高精度な位置合わせにより、合成精度±2mm以内を実現します。",
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
