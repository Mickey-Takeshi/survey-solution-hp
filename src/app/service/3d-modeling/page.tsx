import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3Dモデリング・BIM連携｜点群データからBIM/CIMモデルを作成",
  description:
    "3Dモデリング・BIM連携サービスは、3Dスキャンで取得した点群データからBIM/CIMモデルを作成するサービスです。Revit・ArchiCAD対応。既存建物のスキャンtoBIMで改修・増築計画の精度を向上。京都・関西全域対応。",
  keywords: [
    "3Dモデリング 測量",
    "BIM 3Dスキャン",
    "スキャンtoBIM",
    "CIM モデル作成",
    "既存建物 BIM化",
    "点群 BIM変換",
  ],
  alternates: { canonical: "/service/3d-modeling" },
};

const bimFlows = [
  {
    step: "01",
    title: "3Dスキャン・点群データ取得",
    desc: "地上レーザースキャナで対象建物の内外を3Dスキャンし、高精度な点群データを取得します。",
  },
  {
    step: "02",
    title: "点群データの処理・最適化",
    desc: "ノイズ除去・合成・座標変換を行い、BIMモデリングに適したクリーンな点群データに仕上げます。",
  },
  {
    step: "03",
    title: "BIMモデル作成",
    desc: "Revit・ArchiCAD等のBIMソフトウェア上で、点群データを参照しながら柱・壁・梁・床・設備等の3Dモデルを作成します。",
  },
  {
    step: "04",
    title: "属性情報の付与",
    desc: "各要素に材質・寸法・仕様等の属性情報を付与し、施設管理や改修計画に活用できるBIMモデルに仕上げます。",
  },
  {
    step: "05",
    title: "納品・活用サポート",
    desc: "IFC/RVT/PLN等の形式で納品し、BIMソフトでの活用方法についてもサポートいたします。",
  },
];

const advantages = [
  {
    title: "改修・増築計画の精度向上",
    desc: "既存建物の正確な3Dモデルがあることで、新規設備の干渉チェックや納まりの検討を事前にシミュレーションできます。施工段階での手戻りを削減します。",
  },
  {
    title: "施設管理の効率化",
    desc: "BIMモデルに設備情報を紐づけることで、維持管理の台帳として活用できます。設備更新や修繕計画の検討にも役立ちます。",
  },
  {
    title: "i-Construction・CIM対応",
    desc: "国土交通省が推進するi-Construction/CIM基準に準拠した3次元モデルを作成します。公共工事の納品基準に対応したデータを提供します。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3Dモデリング・BIM連携",
  description:
    "3Dスキャンで取得した点群データからBIM/CIMモデルを作成するサービス。Revit・ArchiCAD対応。既存建物のBIM化に対応。",
  provider: {
    "@type": "LocalBusiness",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "3Dモデリング・BIM/CIMモデル作成",
};

export default function ModelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="3Dモデリング・BIM連携"
        subtitle="3D MODELING / BIM"
        image="/images/service04.jpg"
        breadcrumbItems={[
          { name: "サービス概要", path: "/service" },
          { name: "3Dモデリング・BIM連携", path: "/service/3d-modeling" },
        ]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="relative aspect-[21/9] mb-10 rounded-lg overflow-hidden">
            <Image src="/images/service-3d-modeling.jpg" alt="3Dモデリング・BIM連携のイメージ" fill className="object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3Dモデリング・BIM連携とは、3Dスキャンで取得した点群データから<br className="hidden md:block" />
            BIM/CIMソフトウェアで活用可能な3Dモデルを作成するサービスです。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            既存建物のBIM化（スキャンtoBIM）により、図面のない建物でも正確な3Dモデルを構築できます。
            Revit・ArchiCAD等の主要BIMソフトウェアに対応し、改修・増築計画の設計精度向上や、
            施設管理の効率化を実現します。
            i-Construction/CIM基準に準拠したデータ作成にも対応しています。
          </p>
        </div>
      </section>

      {/* スキャンtoBIMの流れ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SCAN TO BIM FLOW</span>
            <h2 className="section-title-ja">3Dスキャンから BIMモデル作成の流れ</h2>
          </div>
          <div className="space-y-6">
            {bimFlows.map((item) => (
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

      {/* BIM化のメリット */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">ADVANTAGES</span>
            <h2 className="section-title-ja">3Dスキャンによる BIM化のメリット</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div key={adv.title} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-3">{adv.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応ソフトウェア・納品形式 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">COMPATIBILITY</span>
            <h2 className="section-title-ja">3Dモデリングの対応ソフトウェア・納品形式</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">カテゴリ</th>
                  <th className="px-4 py-3 text-left">対応ソフト・形式</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: "BIMソフトウェア", val: "Autodesk Revit / GRAPHISOFT ArchiCAD / Vectorworks" },
                  { cat: "CIMソフトウェア", val: "Autodesk Civil 3D / InfraWorks" },
                  { cat: "BIMデータ形式", val: "IFC / RVT / PLN" },
                  { cat: "3Dモデル形式", val: "OBJ / FBX / 3DS / SKP" },
                  { cat: "点群データ形式", val: "LAS / E57 / PTS / RCP" },
                  { cat: "CAD図面形式", val: "DXF / DWG / PDF" },
                ].map((row, i) => (
                  <tr key={row.cat} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 font-bold text-gray-900 border-r border-gray-200 w-1/3">{row.cat}</td>
                    <td className="px-4 py-3 text-gray-700">{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            <Link href="/service/drone" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 02</span>
              <p className="font-bold text-gray-900 mt-1">ドローン3D測量</p>
            </Link>
            <Link href="/service/point-cloud" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 03</span>
              <p className="font-bold text-gray-900 mt-1">点群データ作成・処理</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3Dモデリング・BIM連携のご相談はお気軽に
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「既存建物をBIM化したい」「i-Construction基準に準拠したCIMモデルが必要」など、3Dモデリングに関するご相談を承ります。
            貴社の設計環境や活用目的をお伺いし、最適なモデリング方法をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/solution/architecture"
              className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors"
            >
              建築・リノベ向けソリューション
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
