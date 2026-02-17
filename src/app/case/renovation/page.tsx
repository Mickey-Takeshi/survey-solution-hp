import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "【建築】築50年ビルのリノベ測量｜3Dスキャンで図面作成期間75%短縮",
  description:
    "図面が残っていない築50年の事務所ビルを3Dスキャンして現況図面を作成。従来の手作業実測と比較して図面作成期間を75%短縮。リノベーション計画の精度向上にも貢献した導入事例を紹介。",
  keywords: ["古い建物 図面 3D", "リノベ 測量 事例", "既存建物 現況図面", "3Dスキャン リノベーション"],
  alternates: { canonical: "/case/renovation" },
};

export default function RenovationCasePage() {
  return (
    <>
      <PageHeader
        title="築50年ビルのリノベーション測量"
        subtitle="CASE STUDY"
        image="/images/case-renovation.jpg"
        breadcrumbItems={[
          { name: "導入事例", path: "/case" },
          { name: "築50年ビルのリノベ測量", path: "/case/renovation" },
        ]}
      />

      {/* 概要 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">建築</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">現況図面作成</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">既存建物</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">BIM化</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            図面のない築50年ビルを3Dスキャンで正確にデータ化し、<br className="hidden md:block" />
            図面作成期間を75%短縮
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            図面が残っていない築50年の事務所ビルをリノベーションするにあたり、建物全体を3Dスキャンして現況図面を作成しました。
            従来の手作業による実測と比較して、図面作成期間を75%短縮。BIMモデルの作成にも対応し、設計の精度向上に貢献しました。
          </p>
        </div>
      </section>

      {/* プロジェクト概要 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">プロジェクト概要</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: "建物概要", value: "鉄骨造5階建て事務所ビル（築50年）" },
                  { label: "延床面積", value: "約2,000㎡" },
                  { label: "課題", value: "竣工図面が残っておらず、リノベーション設計の基礎データがない" },
                  { label: "使用機器", value: "地上3Dレーザースキャナ（ハンドヘルド型併用）" },
                  { label: "作業期間", value: "現地スキャン2日＋データ処理・図面作成5日" },
                  { label: "納品物", value: "各階平面図・断面図（CADデータ）＋点群データ＋BIMモデル" },
                ].map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <th className="text-left px-6 py-4 font-bold text-gray-900 w-1/3 border-r border-gray-200">{row.label}</th>
                    <td className="px-6 py-4 text-gray-700">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 課題 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">導入前の課題</h2>
          <div className="space-y-4">
            {[
              "竣工図面が紛失しており、建物の正確な寸法情報がない",
              "手作業の実測では4週間以上かかり、設計スケジュールに間に合わない",
              "手測りでは壁の湾曲や柱の傾きなど、微細な変形を把握できない",
              "リノベーション設計にBIMモデルを使いたいが、元データがない",
            ].map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-sm text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">弊社の解決策</h2>
          <div className="space-y-6">
            {[
              { title: "建物内外の3Dスキャン", desc: "地上レーザースキャナとハンドヘルドスキャナを併用し、各階のフロア・階段室・外壁を2日間でスキャン。狭い設備室や天井裏もハンドヘルドスキャナで計測しました。" },
              { title: "高精度な現況図面の作成", desc: "点群データから各階の平面図・断面図をCADデータで作成。壁の湾曲や柱の傾きも精度±3mmで記録し、図面に反映しました。" },
              { title: "BIMモデルの構築", desc: "点群データを参照しながらRevitでBIMモデルを構築。柱・壁・梁・床・開口部を3Dモデル化し、リノベーション設計の基礎データとして提供しました。" },
            ].map((s) => (
              <div key={s.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成果 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">導入効果</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "75%", label: "図面作成期間の短縮", detail: "従来4週間→1週間に短縮" },
              { metric: "±3mm", label: "現況図面の精度", detail: "手測りの±10〜20mmから大幅に向上" },
              { metric: "50%", label: "設計手戻りの削減", detail: "BIMモデル上での事前検討が可能に" },
            ].map((r) => (
              <div key={r.label} className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{r.metric}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{r.label}</p>
                <p className="text-xs text-gray-600">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8 text-center">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/solution/architecture" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SOLUTION</span>
              <p className="font-bold text-gray-900 mt-1">建築・リノベ向け3D測量</p>
            </Link>
            <Link href="/service/3d-modeling" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE</span>
              <p className="font-bold text-gray-900 mt-1">3Dモデリング・BIM連携</p>
            </Link>
            <Link href="/case" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">CASE</span>
              <p className="font-bold text-gray-900 mt-1">その他の導入事例</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">まずはお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            図面のない既存建物の現況図面作成やBIM化について、無料でご相談を承ります。
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
