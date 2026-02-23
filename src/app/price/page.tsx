import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量の費用・料金の目安｜サービス別の価格相場と見積もりのポイント",
  description:
    "3D測量の費用は一般的な現場（500㎡程度）で15万円〜50万円が目安です。地上レーザースキャン・点群データ処理・3Dモデル作成のサービス別料金と、費用が変動するポイントを解説。無料見積もり受付中。",
  keywords: [
    "3D測量 費用",
    "3D測量 価格相場",
    "3Dスキャン 料金",
    "レーザー測量 費用",
    "点群データ 料金",
  ],
  alternates: { canonical: "/price" },
};

const pricingCategories = [
  {
    category: "地上レーザースキャン測量",
    items: [
      { service: "建物傾斜調査（1棟）", price: "15万円〜", note: "柱・壁面の傾き計測" },
      { service: "住宅の現況図面作成", price: "15万円〜30万円", note: "平面図・断面図のCADデータ納品" },
      { service: "中規模ビル・商業施設の現況測量", price: "50万円〜100万円", note: "延床面積により変動" },
      { service: "工場・倉庫の3Dスキャン", price: "30万円〜80万円", note: "敷地面積・設備の複雑さにより変動" },
      { service: "文化財・歴史的建造物のデジタルアーカイブ", price: "30万円〜", note: "対象物の規模・精度要件により変動" },
    ],
  },
  {
    category: "データ処理・モデリング",
    items: [
      { service: "点群データ処理（ノイズ除去・合成）", price: "5万円〜", note: "データ量・処理内容により変動" },
      { service: "CAD図面作成（平面図・断面図）", price: "5万円〜/枚", note: "図面の複雑さにより変動" },
      { service: "3Dモデル作成（メッシュモデル）", price: "10万円〜", note: "対象物の複雑さにより変動" },
    ],
  },
];

const factors = [
  {
    title: "対象物の規模・面積",
    desc: "計測範囲が広いほどスキャン回数が増え、データ処理量も増加するため費用が上がります。",
  },
  {
    title: "要求精度",
    desc: "高精度が必要な場合、スキャン密度を上げる必要があり、計測時間とデータ処理量が増加します。",
  },
  {
    title: "現場の複雑さ",
    desc: "障害物が多い、配管が密集している等の複雑な現場は、スキャン位置の増加や追加処理が必要になります。",
  },
  {
    title: "成果物の種類",
    desc: "点群データのみの納品と、CAD図面やBIMモデルまで作成する場合では、データ加工の工数が異なります。",
  },
  {
    title: "現場へのアクセス",
    desc: "京都・関西圏内は出張費込みの場合が多いですが、遠方の場合は出張費・宿泊費が別途発生します。",
  },
];

export default function PricePage() {
  return (
    <>
      <PageHeader
        title="3D測量の料金・費用の目安"
        subtitle="PRICING"
        image="/images/service-bg.jpg"
        breadcrumbItems={[{ name: "料金・費用の目安", path: "/price" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3D測量の費用は、一般的な現場（500㎡程度）で<br className="hidden md:block" />
            15万円〜50万円が目安です。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            料金は、対象物の規模・要求精度・成果物の種類によって変動します。
            以下はサービス別の料金目安です。正確な費用は無料見積もりにてお伝えいたしますので、お気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* サービス別料金表 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">PRICE LIST</span>
            <h2 className="section-title-ja">3D測量サービス別料金の目安</h2>
          </div>
          <div className="space-y-10">
            {pricingCategories.map((cat) => (
              <div key={cat.category}>
                <h3 className="text-lg font-bold text-primary mb-4 border-l-4 border-primary pl-3">
                  {cat.category}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-4 py-3 text-left text-gray-900">サービス内容</th>
                        <th className="px-4 py-3 text-left text-gray-900 w-36">料金目安（税別）</th>
                        <th className="px-4 py-3 text-left text-gray-900">備考</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cat.items.map((item, i) => (
                        <tr key={item.service} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                          <td className="px-4 py-3 text-gray-900">{item.service}</td>
                          <td className="px-4 py-3 text-primary font-bold whitespace-nowrap">{item.price}</td>
                          <td className="px-4 py-3 text-gray-600 text-xs">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <span className="font-bold">※</span> 上記は料金の目安です。
              実際の費用は現場の規模・条件・成果物の種類によって変動いたします。
              正確な費用は、対象物の情報をお伺いした上で無料見積もりにてお伝えいたします。
            </p>
          </div>
        </div>
      </section>

      {/* 費用が変動するポイント */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">COST FACTORS</span>
            <h2 className="section-title-ja">3D測量の費用が変動する5つのポイント</h2>
          </div>
          <div className="space-y-6">
            {factors.map((f, i) => (
              <div key={f.title} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="pt-0.5">
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* お見積もりの流れ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">ESTIMATE FLOW</span>
            <h2 className="section-title-ja">お見積もりの流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "お問い合わせ", desc: "対象物の所在地・規模・測量目的をお伝えください。電話・メール・フォームのいずれでも受け付けております。" },
              { step: "02", title: "概算見積もり", desc: "お伺いした情報をもとに、1〜3営業日以内に概算のお見積もりをご提示いたします。" },
              { step: "03", title: "正式見積もり", desc: "必要に応じて現地を確認し、正確な作業範囲・条件を反映した正式なお見積もりをお出しします。" },
            ].map((item) => (
              <div key={item.step} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">3D測量の料金に関するよくある質問</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "見積もりは無料ですか？", a: "はい、お見積もりは無料です。対象物の情報をお聞かせいただければ、概算のお見積もりをご提示いたします。現地確認が必要な場合も、初回のご相談は無料で対応しております。" },
              { q: "追加費用が発生することはありますか？", a: "お見積もり時にお伝えした金額から、追加費用が発生することは原則ありません。ただし、作業開始後に範囲の追加や成果物の変更があった場合は、事前にご相談の上で追加費用をお見積もりいたします。" },
              { q: "支払い方法を教えてください。", a: "銀行振込でのお支払いをお願いしております。納品後30日以内のお支払いが基本ですが、分割払いなどのご相談にも応じます。" },
              { q: "キャンセル料はかかりますか？", a: "作業着手前のキャンセルについては、キャンセル料はかかりません。作業着手後のキャンセルについては、進捗に応じた実費をご請求する場合がございます。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            3D測量の無料見積もりを申し込む
          </h2>
          <p className="text-sm mb-6 opacity-90">
            対象物の所在地・規模・測量目的をお伝えいただければ、1〜3営業日以内に概算のお見積もりをご提示いたします。
            「まだ検討段階」という方も、費用感を把握するためにお気軽にご利用ください。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
            >
              無料見積もりを申し込む
            </Link>
            <a
              href="tel:075-744-1775"
              className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              075-744-1775
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
