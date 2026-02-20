import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "インフラ点検向け3D測量｜橋梁・トンネルの変状記録と経年変化管理",
  description:
    "橋梁点検・トンネル断面測量を3D化し、変状記録の効率化と経年変化の定量管理を実現。非接触計測で高所作業を削減し、点検の安全性と精度を両立します。断面精度±5mm。京都・関西全域対応。無料見積もり受付中。",
  keywords: [
    "橋梁点検 3D",
    "トンネル 断面測量",
    "インフラ点検 3Dスキャン",
    "変状記録 3D",
    "経年変化 3D比較",
    "橋梁 レーザースキャン",
  ],
  alternates: { canonical: "/solution/infrastructure" },
};

const challenges = [
  "橋梁点検の変状記録を効率化したい",
  "トンネル断面の変位を定量的に管理したい",
  "点検作業の安全性を向上させたい",
  "経年変化を3Dデータで比較管理したい",
];

const solutions = [
  {
    title: "橋梁の変状記録・経年比較",
    desc: "3Dレーザースキャンで橋梁全体の形状データを取得し、ひび割れ・剥離・変形などの変状を3Dモデル上に正確に記録します。過去データとの比較により、変状の進行状況を定量的に把握でき、補修計画の立案に必要な根拠資料を効率的に作成できます。",
    result: "点検効率50%向上",
  },
  {
    title: "トンネル断面測量の3D化",
    desc: "地上レーザースキャナでトンネル内部を高密度にスキャンし、設計断面との差分を3Dで可視化します。内空断面の変位量や覆工コンクリートの変状を高精度に計測し、維持管理台帳への反映や報告資料の作成まで一貫対応いたします。",
    result: "断面精度±5mm",
  },
  {
    title: "非接触計測で安全性向上",
    desc: "地上レーザースキャナとドローンを活用し、橋梁の高欄部や橋脚、トンネル天端など高所・危険箇所のデータを非接触で取得します。足場設置や高所作業車が不要となり、作業員の安全を確保しながら高精度なデータ取得を実現します。",
    result: "高所作業0に",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "インフラ点検向け3D測量",
  description: "橋梁・トンネルなどのインフラ構造物を3Dスキャンし、変状記録の効率化と経年変化の定量管理を実現するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "インフラ点検向け3D測量",
};

export default function InfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="インフラ点検向け3D測量"
        subtitle="FOR INFRASTRUCTURE"
        image="/images/solution-infrastructure.jpg"
        breadcrumbItems={[{ name: "インフラ点検向け3D測量", path: "/solution/infrastructure" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            橋梁・トンネルの点検を3D化し、<br className="hidden md:block" />
            変状記録の効率化と経年変化の定量管理を実現します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            インフラ構造物の維持管理には、変状の正確な記録と経年変化の把握が不可欠です。
            3Dレーザースキャンにより、橋梁やトンネルの形状データを高精度に取得し、変状の位置・規模・進行状況を3Dモデル上で一元管理します。
            非接触計測で高所作業を削減し、安全性と点検精度の両立を実現いたします。
          </p>
        </div>
      </section>

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">インフラ点検でこんな課題はありませんか？</h2>
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
            <h2 className="section-title-ja">インフラ点検での3D測量による解決策</h2>
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
            <h2 className="section-title-ja">インフラ点検向け3D測量の料金目安</h2>
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
                  { work: "橋梁3D計測（1橋あたり）", price: "40万円〜" },
                  { work: "トンネル断面測量（100m）", price: "30万円〜" },
                  { work: "擁壁変位測量", price: "20万円〜" },
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
            ※ 構造物の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">インフラ点検の3D測量に関するよくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "橋梁点検で取得した3Dデータはどのように活用できますか？", a: "3Dモデル上にひび割れや剥離などの変状を記録し、位置・規模を正確に管理できます。過去の計測データと比較することで経年変化を定量的に把握でき、補修の優先度判定や長寿命化計画の策定にご活用いただけます。" },
              { q: "トンネル断面測量の精度はどの程度ですか？", a: "地上レーザースキャナを使用し、断面精度±5mm以内での計測が可能です。設計断面との差分解析により、内空断面の変位量を高精度に把握できます。計測密度や精度要件に応じた機材選定もご提案いたします。" },
              { q: "交通規制が必要な箇所でも計測できますか？", a: "はい、対応可能です。道路管理者との協議に必要な規制計画の立案を含め、夜間計測や片側交互通行での計測など、現場条件に合わせた計測計画をご提案いたします。計測時間の短縮により規制時間の最小化にも配慮します。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">インフラ点検の3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            橋梁・トンネルなどインフラ構造物の点検効率化について、無料でご相談を承ります。構造物の種類や規模をお伺いし、最適な計測方法と概算費用をご提案いたします。
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
