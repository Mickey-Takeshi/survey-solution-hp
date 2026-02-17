import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量の導入事例｜建設・建築・プラントの現場から",
  description:
    "3D測量・3Dスキャンの導入事例を紹介。高速道路の出来形管理で工数60%削減、築50年ビルのリノベ測量で図面作成期間75%短縮、化学工場の配管3D化で干渉チェック工数80%削減など、具体的な成果をご覧ください。",
  keywords: [
    "3D測量 事例",
    "3Dスキャン 導入事例",
    "3D測量 活用事例",
    "レーザースキャン 事例",
    "点群データ 活用事例",
  ],
  alternates: { canonical: "/case" },
};

const cases = [
  {
    slug: "highway",
    category: "土木",
    title: "高速道路の出来形管理",
    subtitle: "3Dスキャンによる出来形管理で、工数を60%削減",
    industry: "建設・土木",
    result: "出来形管理の工数60%削減",
    description: "高速道路の盛土工事において、ドローン測量と地上レーザースキャンを併用し、i-Construction基準に準拠した出来形管理を実施。従来の測量方法と比較して、出来形管理の工数を60%削減しました。",
    tags: ["出来形管理", "ICT施工", "ドローン測量"],
  },
  {
    slug: "renovation",
    category: "建築",
    title: "築50年ビルのリノベーション測量",
    subtitle: "図面のない築50年ビルを3Dスキャンで正確にデータ化",
    industry: "建築・リノベーション",
    result: "図面作成期間75%短縮",
    description: "図面が残っていない築50年の事務所ビルをリノベーションするにあたり、建物全体を3Dスキャンして現況図面を作成。従来の手作業による実測と比較して、図面作成期間を75%短縮しました。",
    tags: ["現況図面作成", "既存建物", "BIM化"],
  },
  {
    slug: "plant-piping",
    category: "プラント",
    title: "化学工場の配管3D化",
    subtitle: "複雑な配管設備を3Dモデル化し、干渉チェックを効率化",
    industry: "プラント・工場",
    result: "干渉チェック工数80%削減",
    description: "化学工場の定期修繕に際して、既存の配管設備を3Dスキャンしてモデル化。新規配管の設計時に3Dモデル上で干渉チェックを実施し、従来の現場合わせ作業と比較して工数を80%削減しました。",
    tags: ["配管3D化", "干渉チェック", "プラント"],
  },
];

export default function CasePage() {
  return (
    <>
      <PageHeader
        title="導入事例"
        subtitle="CASE STUDIES"
        image="/images/service-bg.jpg"
        breadcrumbItems={[{ name: "導入事例", path: "/case" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3D測量の導入で、<br className="hidden md:block" />
            作業効率化とコスト削減を実現した事例をご紹介します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            建設・建築・プラントなど、さまざまな業界で3D測量が活用されています。
            弊社が手がけた導入事例から、具体的な成果と活用のポイントをご覧ください。
          </p>
        </div>
      </section>

      {/* 事例一覧 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="space-y-8">
            {cases.map((c) => (
              <Link
                key={c.slug}
                href={`/case/${c.slug}`}
                className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">
                      {c.category}
                    </span>
                    <span className="text-xs text-gray-500">{c.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{c.subtitle}</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">{c.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="bg-primary/5 border border-primary/20 rounded px-4 py-2">
                      <p className="text-sm font-bold text-primary">成果：{c.result}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary">
                      詳しく見る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {c.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            貴社の現場でも3D測量を活用しませんか？
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「自社の現場でも使えるか知りたい」「費用感を把握したい」など、どのような段階でもご相談を承ります。
            現場の状況をお伺いし、最適な測量方法と概算費用をご提案いたします。
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
