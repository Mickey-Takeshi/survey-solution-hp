import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "【土木】高速道路の出来形管理｜3D測量で工数60%削減した事例",
  description:
    "高速道路の盛土工事において、ドローン測量と地上レーザースキャンを併用し、i-Construction基準に準拠した出来形管理を実施。従来の測量方法と比較して出来形管理の工数を60%削減した事例を紹介。",
  keywords: ["出来形管理 3D", "ICT施工 測量 事例", "高速道路 3D測量", "i-Construction 事例"],
  alternates: { canonical: "/case/highway" },
};

export default function HighwayCasePage() {
  return (
    <>
      <PageHeader
        title="高速道路の出来形管理"
        subtitle="CASE STUDY"
        image="/images/case-highway.jpg"
        breadcrumbItems={[
          { name: "導入事例", path: "/case" },
          { name: "高速道路の出来形管理", path: "/case/highway" },
        ]}
      />

      {/* 概要 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">土木</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">出来形管理</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">ICT施工</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">ドローン測量</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3Dスキャンによる出来形管理で、工数を60%削減
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            高速道路の盛土工事において、ドローン測量と地上レーザースキャンを併用し、i-Construction基準に準拠した出来形管理を実施しました。
            従来の測量方法（TS測量＋手作業の計算）と比較して、出来形管理の工数を60%削減しました。
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
                  { label: "業種", value: "高速道路建設（土木工事）" },
                  { label: "工事内容", value: "盛土工事の出来形管理" },
                  { label: "施工延長", value: "約500m" },
                  { label: "使用機器", value: "ドローン（UAV）＋地上3Dレーザースキャナ" },
                  { label: "計測回数", value: "月2回（施工進捗に合わせて実施）" },
                  { label: "納品物", value: "点群データ・出来形管理図・土量計算書" },
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
              "TS測量による出来形管理は、1回の計測に2日以上かかっていた",
              "計測点数が限られるため、面的な管理ができず、局所的な変状を見落とすリスクがあった",
              "土量計算を手作業で行っており、計算ミスや精度不足が懸念されていた",
              "i-Construction基準への対応が求められていたが、対応方法がわからなかった",
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
              { title: "ドローン測量による面的データ取得", desc: "施工区間全体をドローンで上空から計測し、面的な出来形データを取得。計測時間を1回あたり半日に短縮しました。" },
              { title: "地上レーザースキャンによる高精度補完", desc: "構造物周辺や法面など、ドローンでは精度が不足する箇所を地上レーザースキャナで補完。全域で設計精度基準を満たすデータを取得しました。" },
              { title: "3Dデータによる自動土量計算", desc: "取得した点群データと設計データを3D上で比較し、切土・盛土の土量を自動算出。手計算によるミスをゼロにしました。" },
              { title: "i-Construction基準に準拠した帳票作成", desc: "出来形管理基準に準拠した管理図・管理表を自動生成し、監督員への報告資料として納品しました。" },
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
              { metric: "60%", label: "出来形管理の工数削減", detail: "計測2日→半日、帳票作成3日→1日" },
              { metric: "±3cm", label: "面的な計測精度を確保", detail: "TS測量の点管理から面管理へ移行" },
              { metric: "0件", label: "土量計算のミス", detail: "3Dデータからの自動算出で人的ミスゼロ" },
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
            <Link href="/solution/construction" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SOLUTION</span>
              <p className="font-bold text-gray-900 mt-1">建設・土木向け3D測量</p>
            </Link>
            <Link href="/service/drone" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE</span>
              <p className="font-bold text-gray-900 mt-1">ドローン3D測量</p>
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
            建設・土木現場の出来形管理やICT施工対応について、無料でご相談を承ります。
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
