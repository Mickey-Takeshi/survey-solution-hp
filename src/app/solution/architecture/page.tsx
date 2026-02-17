import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "建築・リノベーション向け3D測量｜図面がない建物の現況図作成・BIM化",
  description:
    "既存建物の3Dスキャンによる現況図作成・BIMモデル化サービス。図面のない建物でもレーザースキャンで高精度な現況図を作成し、リノベーション設計を支援します。作業時間75%削減、精度±2mm。京都・関西全域対応。無料見積もり受付中。",
  keywords: [
    "既存建物 3Dスキャン",
    "リノベ 現況図",
    "建築 3D測量",
    "BIM 既存建物",
    "現況図面 作成",
    "建物 レーザースキャン",
  ],
  alternates: { canonical: "/solution/architecture" },
};

const challenges = [
  "図面のない既存建物のリノベーション計画を進めたい",
  "建物の現況を正確に把握したいが、手作業の実測では限界がある",
  "BIMモデルを作りたいが、既存建物のデータがない",
  "手作業の実測に時間がかかりすぎて、設計着手が遅れている",
];

const solutions = [
  {
    title: "図面のない建物の現況図作成",
    desc: "既存建物の3Dスキャンとは、レーザースキャナで建物内外の形状を高精度に計測し、点群データから平面図・断面図・立面図を自動生成する技術です。図面が残っていない建物でも、現況をそのまま正確に図面化します。従来の手作業実測と比較して、計測漏れや寸法誤差を大幅に削減できます。",
    result: "現況図作成の作業時間を従来比75%削減",
  },
  {
    title: "既存建物のBIM化",
    desc: "3Dスキャンで取得した点群データをもとに、Revit・ArchiCAD等のBIMモデルを作成します。柱・梁・壁・開口部などの建築要素を正確にモデリングし、リノベーション設計のベースデータとして活用できます。設計段階での干渉チェックにより、施工時の手戻りを大幅に削減します。",
    result: "BIM活用による設計手戻り50%削減",
  },
  {
    title: "建物傾斜・変位の高精度測定",
    desc: "レーザースキャナによる3D計測で、建物全体の傾斜や変位を±2mmの精度で測定します。耐震診断や劣化調査の基礎データとして活用でき、経年変化の定量的な把握にも対応します。報告書の作成まで一貫して対応いたします。",
    result: "測定精度±2mmの高精度な傾斜・変位測定を実現",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "建築・リノベーション向け3D測量",
  description: "既存建物の3Dスキャンによる現況図作成、BIMモデル化、建物傾斜調査を行うサービス。図面のない建物でも高精度な現況データを提供します。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "建築・リノベーション向け3D測量",
};

export default function ArchitecturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="建築・リノベーション向け3D測量"
        subtitle="FOR ARCHITECTURE"
        image="/images/solution-architecture.jpg"
        breadcrumbItems={[{ name: "建築・リノベーション向け3D測量", path: "/solution/architecture" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            図面がない建物でも、3Dスキャンで<br className="hidden md:block" />
            高精度な現況図・BIMモデルを作成します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            既存建物の3Dスキャンとは、レーザースキャナで建物の形状を丸ごと計測し、正確な図面やBIMモデルを作成する技術です。
            図面が残っていない建物のリノベーション計画、既存建物のBIM化、建物の傾斜・変位調査など、建築分野の測量課題を3D測量技術で解決します。
            手作業の実測では数日かかる作業を、3Dスキャンなら数時間で完了。計測漏れのない高精度なデータを提供いたします。
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
                  { work: "現況図面作成（住宅）", price: "15万円〜" },
                  { work: "現況図面作成（中規模ビル）", price: "50万円〜" },
                  { work: "BIMモデル作成", price: "50万円〜" },
                  { work: "建物傾斜調査", price: "15万円〜" },
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
            ※ 建物の規模・構造・作業条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
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
              {
                q: "図面がまったく残っていない建物でも対応できますか？",
                a: "はい、対応可能です。3Dレーザースキャナで建物の内外を丸ごと計測するため、既存の図面がなくても高精度な現況図を作成できます。築年数の古い建物や、増改築を繰り返した建物でも問題ありません。",
              },
              {
                q: "BIMモデルはどのソフトウェアに対応していますか？",
                a: "はい、主要なBIMソフトウェアに対応しております。Revit、ArchiCAD、Vectorworksなど、お客様がご使用のソフトウェアに合わせたフォーマットでBIMモデルを納品いたします。IFCファイルでの納品も可能です。",
              },
              {
                q: "入居者がいる建物でもスキャンできますか？",
                a: "はい、対応可能です。レーザースキャナは非接触で短時間に計測が完了するため、入居者の方への影響を最小限に抑えられます。計測スケジュールは入居者の方のご都合に合わせて調整いたします。",
              },
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
            図面のない建物の現況図作成やBIM化について、無料でご相談を承ります。建物の規模・用途をお伺いし、最適な測量方法と概算費用をご提案いたします。
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
