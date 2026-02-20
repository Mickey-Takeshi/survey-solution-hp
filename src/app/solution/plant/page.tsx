import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プラント・工場向け3D測量｜配管・設備の3Dモデル化でレイアウト変更を効率化",
  description:
    "プラント・工場向けの3D測量ソリューション。配管・設備の3Dモデル化で干渉チェック工数80%削減、レイアウト変更シミュレーションで計画精度向上、定期修繕の事前検討効率化で修繕工期30%短縮。京都・関西全域対応。無料見積もり受付中。",
  keywords: [
    "プラント 3D測量",
    "工場 レイアウト 3D",
    "配管 3Dモデル",
    "設備 干渉チェック",
    "工場 3Dスキャン",
  ],
  alternates: { canonical: "/solution/plant" },
};

const challenges = [
  "配管が複雑で既存図面が実態と一致しない",
  "設備改修の干渉チェックが困難",
  "工場レイアウト変更の検討に正確な現況データが必要",
  "定期修繕時の配管ルート検討に時間がかかる",
];

const solutions = [
  {
    title: "配管・設備の3Dモデル化",
    desc: "地上レーザースキャナで取得した点群データから、配管・ダクト・設備を3Dモデル化します。既存図面との差異を可視化し、現況を正確に把握。設備改修やレイアウト変更時の干渉チェックをPC上で実施でき、現場での手戻りを大幅に削減します。",
    result: "干渉チェック工数80%削減",
  },
  {
    title: "レイアウト変更シミュレーション",
    desc: "3Dスキャンで取得した工場内の現況データをもとに、設備移設やライン増設のシミュレーションを実施します。搬入経路の確認、天井高・通路幅の検証、ユーティリティ接続の検討まで、計画段階で精度の高い検証が可能です。",
    result: "計画精度向上・設計変更の手戻りゼロを実現",
  },
  {
    title: "定期修繕の事前検討効率化",
    desc: "定期修繕前に対象エリアを3Dスキャンし、配管ルートや仮設足場の設置計画をデジタル上で事前検討します。関係者間での情報共有がスムーズになり、修繕期間中の作業効率が大幅に向上します。",
    result: "修繕工期30%短縮",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "プラント・工場向け3D測量",
  description: "配管・設備の3Dモデル化、レイアウト変更シミュレーション、定期修繕の事前検討効率化を3D測量で実現するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "プラント・工場向け3D測量",
};

export default function PlantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="プラント・工場向け3D測量"
        subtitle="FOR PLANT & FACTORY"
        image="/images/solution-plant.jpg"
        breadcrumbItems={[{ name: "プラント・工場向け3D測量", path: "/solution/plant" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            プラント・工場内の複雑な配管や設備を3Dスキャンし、<br className="hidden md:block" />
            正確な現況データで設備改修・レイアウト変更を効率化します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            プラントや工場では、長年の増改築により配管・ダクト・設備が複雑に入り組み、既存図面と実態が一致していないケースが多くあります。
            3Dレーザースキャナで現況を丸ごとデジタル化することで、配管ルートや設備配置を正確に把握。干渉チェックやレイアウト変更の検討をPC上で行えるようになり、計画精度の向上と工期短縮を同時に実現します。
          </p>
        </div>
      </section>

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">プラント・工場でこんな課題はありませんか？</h2>
          </div>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-sm text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SOLUTIONS</span>
            <h2 className="section-title-ja">プラント・工場での3D測量による解決策</h2>
          </div>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                <div className="bg-primary/5 border border-primary/20 rounded px-4 py-3">
                  <p className="text-sm font-bold text-primary">導入効果：{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">プラント・工場向け3D測量の料金目安</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">作業内容</th>
                  <th className="px-4 py-3 text-left">料金目安（税別）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { work: "配管3Dモデル化（1エリア）", price: "40万円〜" },
                  { work: "工場レイアウト測量", price: "50万円〜" },
                  { work: "設備更新の干渉チェック", price: "30万円〜" },
                ].map((row, i) => (
                  <tr key={row.work} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">{row.work}</td>
                    <td className="px-4 py-3 text-gray-700 font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 現場の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">プラント・工場の3D測量に関するよくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "稼働中のプラントでも3Dスキャンは可能ですか？", a: "はい、稼働中でも対応可能です。非接触のレーザースキャナを使用するため、設備の運転を停止する必要はありません。定期修繕のタイミングに合わせた計測計画もご提案いたします。" },
              { q: "3Dモデルはどのようなソフトで活用できますか？", a: "はい、主要なCAD・BIMソフト（AutoCAD、Revit、PDMS、Smart 3Dなど）に対応した形式で納品可能です。お客様がご利用のソフトウェアに合わせたデータ変換もお任せください。" },
              { q: "防爆エリアでの測量にも対応していますか？", a: "はい、対応しております。防爆認証を取得した測量機器を使用し、安全管理基準を遵守した上で計測を実施いたします。事前に安全計画書を提出し、ご承認いただいた上で作業を行います。" },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="flex items-start gap-3 text-base font-bold mb-3">
                  <span className="text-primary text-xl font-bold shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="flex items-start gap-3 text-sm leading-loose text-gray-700">
                  <span className="text-red-500 text-xl font-bold shrink-0">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">プラント・工場の3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            プラント・工場の3D測量について、無料でご相談を承ります。対象エリアの規模・条件をお伺いし、最適な測量方法と概算費用をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
              無料相談を申し込む
            </Link>
            <Link href="/case" className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors">
              導入事例を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
