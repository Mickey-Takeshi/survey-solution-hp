import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量サービスとは｜地上レーザー・点群データ・BIM連携",
  description:
    "3D測量サービスの全体像を解説。地上レーザースキャン、点群データ作成・処理、3Dモデリング・BIM連携の3つのサービスで、建設・建築・プラント・インフラの課題を解決します。全国対応。",
  keywords: [
    "3D測量 サービス",
    "三次元測量",
    "3Dスキャナ測量",
    "レーザースキャン測量",
    "点群データ",
    "BIM連携",
  ],
  alternates: { canonical: "/service" },
};

const services = [
  {
    id: "01",
    slug: "laser-scan",
    title: "地上レーザースキャン測量",
    subtitle: "LASER SCAN",
    image: "/images/service01.jpg",
    description:
      "3Dレーザースキャナを使用し、建物・構造物・地形をミリ単位の高精度で計測します。1回のスキャンで数百万点の3D座標データを取得し、複雑な形状も正確に記録できます。",
    features: [
      "計測精度±2〜5mmの高精度データ取得",
      "非接触で安全に計測可能",
      "複雑な形状も漏れなく記録",
    ],
    keywords: "レーザースキャン 測量 / 地上3Dスキャン",
  },
  {
    id: "02",
    slug: "point-cloud",
    title: "点群データ作成・処理",
    subtitle: "POINT CLOUD",
    image: "/images/service03.jpg",
    description:
      "取得した3Dスキャンデータから高品質な点群データを作成・処理します。ノイズ除去・合成・座標変換を経て、CAD図面やBIMモデルの基礎となるクリーンなデータを納品します。",
    features: [
      "LAS/E57/PTS等の各種フォーマット対応",
      "CAD図面（DXF/DWG）への変換対応",
      "断面図・平面図・立面図の自動生成",
    ],
    keywords: "点群データ 作成 / 点群処理",
  },
  {
    id: "03",
    slug: "3d-modeling",
    title: "3Dモデリング・BIM連携",
    subtitle: "3D MODELING / BIM",
    image: "/images/service04.jpg",
    description:
      "点群データから3Dモデルを作成し、BIM/CIMソフトウェアと連携します。既存建物のBIM化（スキャンtooBIM）により、改修・増築計画の精度と効率を向上させます。",
    features: [
      "Revit・ArchiCAD等のBIMソフト連携",
      "既存建物のスキャンtoBIM対応",
      "CIM（3次元モデル）データ作成",
    ],
    keywords: "3Dモデリング 測量 / BIM 3Dスキャン",
  },
];

const industries = [
  {
    title: "建設・土木",
    href: "/solution/construction",
    description: "出来形管理・土量計算・法面測量をICT施工基準に準拠して実施",
  },
  {
    title: "建築・リノベーション",
    href: "/solution/architecture",
    description: "図面のない既存建物の現況図作成・BIM化でリノベ計画を支援",
  },
  {
    title: "プラント・工場",
    href: "/solution/plant",
    description: "配管・設備の3Dモデル化でレイアウト変更や干渉チェックを効率化",
  },
  {
    title: "インフラ点検",
    href: "/solution/infrastructure",
    description: "橋梁・トンネルの変状記録と経年変化を3Dデータで管理",
  },
  {
    title: "文化財・遺跡",
    href: "/solution/heritage",
    description: "歴史的建造物・遺跡のデジタルアーカイブで文化財を永久保存",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D測量サービス",
  description:
    "3Dレーザースキャナによる高精度3Dデータ取得サービス。点群データ作成、BIM/CIM連携、CAD図面作成まで一貫対応。",
  provider: {
    "@type": "LocalBusiness",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  areaServed: { "@type": "Country", name: "日本" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3D測量サービス一覧",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `https://surveysolution.pro/service/${s.slug}/`,
      },
    })),
  },
};

export default function ServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="3D測量サービス"
        subtitle="SERVICE"
        image="/images/service-bg.jpg"
        breadcrumbItems={[{ name: "サービス概要", path: "/service" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3D測量とは、3Dレーザースキャナを使用して<br className="hidden md:block" />
            対象物の三次元座標データを取得する測量技術です。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            従来の測量が「点と線」で図面を作成するのに対し、3D測量は対象物全体を数百万〜数億の点群データとして取得します。
            これにより、ミリ単位の高精度な現況データから、CAD図面・3Dモデル・BIMデータまで、さまざまな成果物を作成できます。
            弊社では、データ取得から加工・納品まで一貫して対応いたします。
          </p>
        </div>
      </section>

      {/* サービス一覧 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">OUR SERVICES</span>
            <h2 className="section-title-ja">3D測量の3つのサービス</h2>
          </div>
          <div className="space-y-12">
            {services.map((s, index) => (
              <div
                key={s.id}
                id={`service${s.id}`}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center bg-white rounded-lg overflow-hidden shadow-sm`}
              >
                <div className="md:w-1/2">
                  <div className="relative aspect-[4/3]">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <span className="text-xs tracking-widest text-gray-400 mb-1 block">{s.subtitle}</span>
                  <h3 className="text-xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-sm leading-loose text-gray-700 mb-4">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-primary shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/service/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                  >
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 業界別ソリューション導線 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SOLUTIONS</span>
            <h2 className="section-title-ja">業界別3D測量ソリューション</h2>
            <p className="text-sm text-gray-600 mt-4">
              貴社の業界・課題に合わせた最適な3D測量の活用方法をご提案します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{industry.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{industry.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                  詳しく見る
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3D測量の流れ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">FLOW</span>
            <h2 className="section-title-ja">3D測量ご依頼の流れ</h2>
          </div>
          <div className="space-y-6">
            {[
              { step: "01", title: "お問い合わせ・ヒアリング", desc: "測量対象・目的・ご要望をお伺いし、最適な測量方法をご提案します。概算のお見積もりもこの段階でお伝えします。" },
              { step: "02", title: "現地調査・正式見積もり", desc: "必要に応じて現地を下見し、正確な作業範囲・条件を確認した上で正式なお見積もりをご提示します。" },
              { step: "03", title: "3Dスキャン・データ取得", desc: "地上レーザースキャナを使用し、現地で3Dデータを取得します。小規模な現場であれば半日〜1日で完了します。" },
              { step: "04", title: "データ処理・成果物作成", desc: "取得したデータのノイズ除去・合成処理を行い、ご要望に応じた成果物（点群データ・CAD図面・3Dモデル等）を作成します。" },
              { step: "05", title: "納品・アフターサポート", desc: "成果物を納品し、データの活用方法についてもサポートいたします。追加の断面図作成や形式変換にも対応可能です。" },
            ].map((item) => (
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

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3D測量のことなら、まずはお気軽にご相談ください
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「何から始めればいいか分からない」という段階でも大丈夫です。
            貴社の現状と課題をお伺いした上で、最適な測量方法と概算費用をご提案いたします。
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
