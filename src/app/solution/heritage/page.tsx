import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "文化財・遺跡の3D記録｜デジタルアーカイブで歴史的建造物を永久保存",
  description:
    "文化財・遺跡の3Dスキャンによるデジタルアーカイブサービス。歴史的建造物や出土品を高精度3Dデータで記録し、修復計画やVR活用まで一貫対応。精度±2mmの点群データで文化遺産を永久保存。京都・関西全域対応。無料見積もり受付中。",
  keywords: [
    "文化財 3Dスキャン",
    "遺跡 3D記録",
    "デジタルアーカイブ 文化財",
    "歴史的建造物 3D測量",
    "文化財 点群データ",
    "寺社仏閣 3Dスキャン",
  ],
  alternates: { canonical: "/solution/heritage" },
};

const challenges = [
  "老朽化が進む文化財の正確な記録が必要",
  "修復計画の基礎資料となる精密データが欲しい",
  "従来の写真記録では立体的な形状を把握できない",
  "文化財のデジタル公開・教育活用を進めたい",
];

const solutions = [
  {
    title: "建造物の高精度デジタルアーカイブ",
    desc: "地上レーザースキャナと写真測量を組み合わせ、歴史的建造物の外観・内部構造を高精度な3Dデータとして記録します。経年劣化の進行状況も数値化し、保存計画の策定に必要な基礎資料を提供いたします。",
    result: "精度±2mmの高精度3Dデジタルアーカイブを実現",
  },
  {
    title: "修復計画の3Dシミュレーション",
    desc: "取得した3Dデータを基に、修復箇所の特定や修復後の完成イメージを3Dモデル上でシミュレーションします。関係者間での合意形成や、文化庁への申請資料としても活用できます。",
    result: "3Dシミュレーションにより修復精度が向上",
  },
  {
    title: "VR/AR活用による教育・観光コンテンツ作成",
    desc: "3Dスキャンデータを活用し、VRでの仮想見学やARでの復元表示など、文化財の教育・観光コンテンツを作成します。立ち入り制限のある文化財も、デジタル空間で自由に鑑賞できる環境を実現します。",
    result: "デジタル技術で文化財の教育・観光活用を促進",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "文化財・遺跡の3D記録",
  description: "歴史的建造物・遺跡・出土品を高精度3Dスキャンで記録し、デジタルアーカイブ・修復計画・VR活用まで一貫対応するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "文化財・遺跡の3D記録",
};

export default function HeritagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="文化財・遺跡の3D記録"
        subtitle="FOR HERITAGE"
        image="/images/solution-heritage.jpg"
        breadcrumbItems={[{ name: "文化財・遺跡の3D記録", path: "/solution/heritage" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3Dスキャン技術で文化財・遺跡を<br className="hidden md:block" />
            高精度なデジタルデータとして永久保存します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            歴史的建造物や遺跡は、自然災害や経年劣化によって失われるリスクを常に抱えています。3Dスキャンによるデジタルアーカイブは、文化財の現状を精密に記録し、将来の修復計画や学術研究の基礎資料として活用できます。
            地上レーザースキャナとドローンを最適に組み合わせ、建造物の外観から細部の彫刻まで、あらゆるスケールの記録に対応いたします。
          </p>
        </div>
      </section>

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">文化財・遺跡保存でこんな課題はありませんか？</h2>
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
            <h2 className="section-title-ja">文化財保存のための3Dスキャンによる解決策</h2>
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
            <h2 className="section-title-ja">文化財3Dデジタルアーカイブの料金目安</h2>
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
                  { work: "寺社仏閣の外観記録", price: "30万円〜" },
                  { work: "建造物の内外部3D記録", price: "50万円〜" },
                  { work: "遺跡・出土品の3D記録", price: "20万円〜" },
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
            ※ 対象物の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">文化財の3D記録に関するよくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "文化財への影響なくスキャンできますか？", a: "はい、3Dスキャンは非接触で行うため、文化財に一切触れることなく計測が可能です。レーザー光も人体・建造物に無害なクラス1レーザーを使用しておりますので、重要文化財や国宝クラスの建造物にも安心してご利用いただけます。" },
              { q: "屋外の遺跡でも3Dスキャンは可能ですか？", a: "はい、対応可能です。地上レーザースキャナとドローン測量を組み合わせ、屋外の遺跡や広範囲の発掘現場も高精度に記録いたします。天候条件に応じてスケジュールを調整し、最適な計測を実施します。" },
              { q: "取得した3Dデータはどのような形式で納品されますか？", a: "点群データ（LAS/LAZ/E57）、3Dメッシュモデル（OBJ/FBX）、オルソ画像、断面図など、ご用途に応じた形式で納品いたします。VR/AR用データへの変換やCAD図面の作成にも対応しております。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">文化財の3D記録はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            文化財・遺跡の3D記録について、無料でご相談を承ります。対象物の規模・条件をお伺いし、最適な記録方法と概算費用をご提案いたします。
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
