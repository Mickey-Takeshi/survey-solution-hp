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
    desc: "発注図書と適用年度のBIM/CIM関連基準を確認し、必要な詳細度・属性・座標系・フォルダ構成に合わせて3次元モデルを作成します。",
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

      <CaseStudySection
        title="点群から3Dモデルを作成した導入・活用事例"
        introduction="同じ点群でも、配管干渉、改修設計、図面作成では必要なモデル要素と詳細度が異なります。対象範囲と納品形式が分かる実案件を掲載しています。"
        cases={[
          {
            title: "化学工場の配管点群をIFCモデルへ変換",
            href: "/case/plant-piping",
            category: "導入事例｜プラント",
            summary: "800㎡の既存配管と設備を計測し、改造範囲の干渉確認に必要な形状をモデル化。汎用交換形式IFCで納品しました。",
            result: "スキャン3日＋モデル10日",
          },
          {
            title: "図面のない既存ビルを現況BIM化",
            href: "/case/renovation",
            category: "導入事例｜建築",
            summary: "延床約2,000㎡の現況点群から平面・立面・断面とBIMモデルを作成し、改修設計のベースデータとして納品しました。",
            result: "図面作成4週間→1週間",
          },
          {
            title: "地下室の形状と地上との位置関係をモデル化",
            href: "/use-case/basement-survey",
            category: "活用事例｜地下空間",
            summary: "図面のない地下室を計測し、狭所・暗所の形状と地上基準を統合。改修計画に必要な位置関係を3Dで整理しました。",
          },
          {
            title: "点群から平面図・立面図・断面図を作成",
            href: "/use-case/as-built-drawings",
            category: "活用事例｜現況図",
            summary: "増改築を含む現況を点群で保存し、必要縮尺の図面へ展開。後日の追加寸法確認にも使えるデータ構成で納品します。",
          },
        ]}
      />

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

      <TechnicalGuideSection
        heading="点群からBIMへ変換する際の自動化・LOD・互換性"
        introduction="スキャンtoBIMは、点群をボタン一つで正しいBIM要素へ変換する作業ではありません。自動抽出できる規則形状と、人が意味を判断すべき部材を分け、モデルの利用目的から必要LODと属性を決めます。"
        guides={[
          {
            title: "同じ建物でも目的により3段階の詳細度を使い分ける",
            lead: "ボリューム検討なら外形、基本設計なら床・壁・開口、施工干渉なら柱・梁・設備接続部まで必要になります。対象全体を最高詳細度にすると、作成費とファイル負荷が増え、更新も難しくなります。",
            image: "/images/service-3d-modeling-lod.png",
            imageAlt: "建物モデルを外形、開口付き、構造部材付きの3段階で比較したLOD概念図",
            caption: "同じ建物を、外形のみ・主要要素・詳細部材の3段階で表現する考え方（概念図）",
            points: [
              { title: "自動化できるのは候補抽出までと考える", body: "平面、円柱、配管中心線等は自動・半自動で抽出できますが、遮蔽、歪み、複合部材、保温材、建築的な意味の判断には人の確認が必要です。点群との偏差を確認して確定します。" },
              { title: "LODと許容差を部位ごとに定義する", body: "躯体は詳細、家具は外形、非対象設備は簡略形状など、部位ごとに優先度を変えます。モデル詳細度だけでなく、点群からの許容偏差、属性の有無、未計測部の表現もBEPや仕様書へ記載します。" },
              { title: "Revit・ArchiCADはネイティブ要素とIFCを確認する", body: "RVT/PLNなどのネイティブ形式とIFCでは、パラメータ、ファミリ、分類、形状表現が異なります。受け手のソフト・バージョンで試験読み込みし、座標・単位・要素分類を確認します。" },
              { title: "Civil 3Dでは座標系とサーフェス構造を優先する", body: "地形・土木モデルでは、ローカル原点へ安易に移動せず、測地座標、単位、TINブレークライン、縦横断の基準を確認します。建築BIMと統合する場合は共有座標の運用を決めます。" },
            ],
            note: "費用は床面積だけでなく、対象要素数、遮蔽、LOD、属性、納品形式、検証方法で変わります。サンプル範囲を先行作成し、必要品質を合意してから全体へ展開できます。",
            sources: [
              { label: "国土交通省 BIM/CIM関連基準要領等", href: "https://www.mlit.go.jp/tec/tec_fr_000115.html" },
            ],
          },
        ]}
      />

      <EditorialMeta pageName="3Dモデリング・BIM連携" path="/service/3d-modeling" />

      <FaqSection
        title="3Dモデリング・BIM連携に関するよくある質問"
        faqs={[
          { q: "点群からBIMモデルは自動作成できますか？", a: "平面・円柱等の候補抽出は自動化できますが、部材の意味、接続、遮蔽部、属性は人の確認が必要です。自動抽出後に点群との偏差を検証し、用途に必要な要素だけを確定します。" },
          { q: "LODはどのように決めますか？", a: "改修検討、干渉確認、数量、維持管理など利用目的から決めます。対象部位ごとに形状詳細、属性、許容差を定義し、不要部分を簡略化することで費用と操作性を両立します。" },
          { q: "Revit・ArchiCAD・Civil 3Dへ取り込めますか？", a: "対応可能です。ソフトとバージョン、ネイティブ形式またはIFC、共有座標、単位、分類、必要属性を確認し、可能であればサンプルで試験読み込みを行います。" },
          { q: "点群に写っていない部分もモデル化できますか？", a: "既存図や現地確認を根拠に補える場合は、計測由来と推定を区別して表現します。根拠のない形状は実測として作らず、未計測・要確認としてモデルや一覧へ残します。" },
          { q: "モデル作成費は何で決まりますか？", a: "床面積に加え、部材密度、配管本数、遮蔽、LOD、属性、許容差、納品形式、修正回数で決まります。代表範囲のサンプル作成後に全体工数を確定する方法も選べます。" },
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
            <Link href="/service/point-cloud" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 02</span>
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
