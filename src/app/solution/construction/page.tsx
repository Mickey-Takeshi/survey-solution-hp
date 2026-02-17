import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "建設・土木向け3D測量｜出来形管理・土量計算・ICT施工対応",
  description:
    "建設・土木業界向けの3D測量ソリューション。i-Construction基準に準拠した出来形管理、ドローン測量による土量計算、法面測量を効率化。作業時間を最大60%削減した実績あり。京都・関西全域対応。無料見積もり受付中。",
  keywords: [
    "建設 3D測量",
    "土木 3Dスキャン",
    "出来形管理 3D",
    "ICT施工 測量",
    "土量計算 3D",
    "i-Construction 測量",
  ],
  alternates: { canonical: "/solution/construction" },
};

const challenges = [
  "従来測量では広大な現場の出来形管理に時間がかかりすぎる",
  "i-Construction基準への対応方法がわからない",
  "土量計算の精度を上げたいが、手作業では限界がある",
  "法面や急傾斜地の測量が危険で、安全確保にコストがかかる",
];

const solutions = [
  {
    title: "出来形管理の効率化",
    desc: "3Dスキャンで取得した点群データと設計データを比較し、出来形の差分を3D可視化します。i-Construction基準に準拠したデータを納品し、監督員への報告資料としても活用できます。",
    result: "出来形管理の作業時間を従来比60%削減",
  },
  {
    title: "高精度な土量計算",
    desc: "ドローン測量で造成前後の地形データを取得し、切土・盛土の土量を3Dデータから正確に算出します。メッシュ法・等高線法の両方に対応し、発注者への説明資料も作成します。",
    result: "土量計算の精度±3%以内を実現",
  },
  {
    title: "安全な法面・急傾斜地測量",
    desc: "地上レーザースキャナとドローンを組み合わせ、人が立ち入れない急傾斜地の地形データを安全に取得します。断面図・等高線図を自動生成し、防災計画の基礎資料として活用できます。",
    result: "危険区域の測量を非接触で100%安全に実施",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "建設・土木向け3D測量",
  description: "i-Construction基準に準拠した出来形管理、土量計算、法面測量を3D測量で効率化するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "建設・土木向け3D測量",
};

export default function ConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="建設・土木向け3D測量"
        subtitle="FOR CONSTRUCTION"
        image="/images/solution-construction.jpg"
        breadcrumbItems={[{ name: "建設・土木向け3D測量", path: "/solution/construction" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            建設・土木現場の測量を3D化し、<br className="hidden md:block" />
            作業時間の削減と精度の向上を同時に実現します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            i-Construction基準への対応、出来形管理の効率化、広大な敷地の土量計算など、建設・土木業界の測量課題を3D測量技術で解決します。
            地上レーザースキャナとドローンを現場の条件に応じて最適に組み合わせ、高精度なデータ取得から報告資料の作成まで一貫対応いたします。
          </p>
        </div>
      </section>

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">こんな課題はありませんか？</h2>
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
            <h2 className="section-title-ja">3D測量による解決策</h2>
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
            <h2 className="section-title-ja">料金の目安</h2>
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
                  { work: "出来形管理（1工区）", price: "30万円〜" },
                  { work: "ドローン測量＋土量計算", price: "25万円〜" },
                  { work: "法面・急傾斜地の測量", price: "20万円〜" },
                  { work: "3D点群データ＋CAD図面作成", price: "15万円〜" },
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
            <h2 className="section-title-ja">よくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "i-Construction基準に準拠したデータを納品できますか？", a: "はい、対応しております。出来形管理要領に準拠した3次元データ（TS出来形、面管理等）を納品いたします。必要なデータ形式や精度基準についても事前にご相談ください。" },
              { q: "ドローン測量に必要な許認可は取得していますか？", a: "はい、国土交通省の飛行許可・承認を取得しております。DID地区や夜間飛行等の特殊条件にも対応可能です。" },
              { q: "工事中の現場でも測量できますか？", a: "はい、対応可能です。重機の稼働スケジュールに合わせた計測計画を立案し、工事の進捗に影響を与えない時間帯に実施いたします。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            建設・土木現場の測量効率化について、無料でご相談を承ります。現場の規模・条件をお伺いし、最適な測量方法と概算費用をご提案いたします。
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
