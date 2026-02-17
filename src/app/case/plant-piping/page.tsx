import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "【プラント】化学工場の配管3D化｜干渉チェック工数80%削減した事例",
  description:
    "化学工場の定期修繕に際して既存配管設備を3Dスキャンしてモデル化。新規配管の設計時に3Dモデル上で干渉チェックを実施し、従来の現場合わせ作業と比較して工数を80%削減した事例を紹介。",
  keywords: ["配管 3Dスキャン 事例", "プラント 3D", "配管 干渉チェック", "プラント 3Dモデル化"],
  alternates: { canonical: "/case/plant-piping" },
};

export default function PlantPipingCasePage() {
  return (
    <>
      <PageHeader
        title="化学工場の配管3D化"
        subtitle="CASE STUDY"
        image="/images/case-plant-piping.jpg"
        breadcrumbItems={[
          { name: "導入事例", path: "/case" },
          { name: "化学工場の配管3D化", path: "/case/plant-piping" },
        ]}
      />

      {/* 概要 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">プラント</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">配管3D化</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">干渉チェック</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">定期修繕</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            複雑な配管設備を3Dモデル化し、<br className="hidden md:block" />
            干渉チェック工数を80%削減
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            化学工場の定期修繕に際して、既存の配管設備を3Dスキャンしてモデル化しました。
            新規配管の設計時に3Dモデル上で干渉チェックを実施し、従来の現場合わせ作業と比較して工数を80%削減しました。
            修繕工期の短縮とコスト削減に大きく貢献しました。
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
                  { label: "施設概要", value: "化学工場（配管プラント区画）" },
                  { label: "対象エリア", value: "約800㎡の配管密集区画" },
                  { label: "課題", value: "既存図面と実態の不一致、新規配管の干渉リスク" },
                  { label: "使用機器", value: "地上3Dレーザースキャナ＋ハンドヘルドスキャナ" },
                  { label: "作業期間", value: "現地スキャン3日＋3Dモデル作成10日" },
                  { label: "納品物", value: "点群データ・配管3Dモデル（IFC形式）・干渉チェック報告書" },
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
              "竣工時の配管図面が実態と大きく異なっており、設計の基礎データとして使えない",
              "配管が密集しているため、手作業での実測では正確な位置関係を把握できない",
              "新規配管の設計を現場合わせで行っており、施工段階での干渉が頻発していた",
              "修繕工期が長期化し、プラント停止期間のコストが増大していた",
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
              { title: "配管密集区画の3Dスキャン", desc: "地上レーザースキャナとハンドヘルドスキャナを併用し、配管が密集する区画を3日間でスキャン。配管の背面や狭隘部もハンドヘルドスキャナで漏れなく計測しました。" },
              { title: "配管の3Dモデル化", desc: "点群データから配管の径・ルート・接続関係を読み取り、3Dモデルを構築。バルブ・フランジ・サポートなどの付属品も含めてモデル化しました。" },
              { title: "3Dモデル上での干渉チェック", desc: "新規配管の設計データと既存設備の3Dモデルを重ね合わせ、干渉箇所を自動検出。施工前に全ての干渉を解消し、現場での手戻りをゼロにしました。" },
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
              { metric: "80%", label: "干渉チェック工数の削減", detail: "現場合わせ→3Dモデル上での事前検証" },
              { metric: "30%", label: "修繕工期の短縮", detail: "施工時の手戻りゼロで工期圧縮" },
              { metric: "0件", label: "施工時の干渉発生", detail: "事前の3D干渉チェックで完全防止" },
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
            <Link href="/solution/plant" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SOLUTION</span>
              <p className="font-bold text-gray-900 mt-1">プラント・工場向け3D測量</p>
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
            プラント・工場の配管3D化や設備改修の効率化について、無料でご相談を承ります。
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </>
  );
}
