import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { useCases, useCategories } from "@/data/use-cases";

export const metadata: Metadata = {
  title: "3D測量の活用事例18選｜山林・建物・敷地・文化財の測量",
  description:
    "3Dレーザースキャナ測量の活用事例を紹介。山林の地形測量、建物の傾き調査、床の不陸調査、図面のない建物の図面作成、庭園の図化、日影シミュレーションなど、18の具体的なニーズと解決方法を解説。",
  keywords: [
    "3D測量 活用事例",
    "3Dスキャン 事例",
    "レーザースキャン 活用",
    "3D測量 ニーズ",
  ],
  alternates: { canonical: "/use-case" },
};

export default function UseCaseIndexPage() {
  return (
    <>
      <PageHeader
        title="3D測量の活用事例"
        subtitle="USE CASES"
        image="/images/service-bg.jpg"
        breadcrumbItems={[{ name: "活用事例", path: "/use-case" }]}
      />

      {/* リード文 */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            3Dレーザースキャナ測量は、
            <br className="hidden md:block" />
            幅広いニーズに対応できます。
          </h2>
          <p className="text-base leading-relaxed text-gray-600 max-w-[720px]">
            「こんな測量もできるの？」というお問い合わせを多くいただきます。山林の地形測量から建物の傾き調査、庭園の図化まで、3Dレーザースキャナ測量が活用できる具体的なシーンをご紹介します。
          </p>
        </div>
      </section>

      {/* カテゴリ別一覧 */}
      {useCategories.map((cat, index) => {
        const items = useCases.filter((uc) => uc.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className={`py-12 md:py-16 ${index % 2 === 1 ? "bg-gray-50" : ""}`}>
            <div className="max-w-[1100px] mx-auto px-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
                {cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((uc) => (
                  <Link
                    key={uc.slug}
                    href={`/use-case/${uc.slug}`}
                    className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span className="inline-block text-xs text-primary font-bold bg-primary/5 px-2 py-0.5 rounded">{uc.category}</span>
                    <h3 className="font-bold text-gray-900 mt-3 mb-2 group-hover:text-primary transition-colors">{uc.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {uc.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-4 group-hover:gap-2 transition-all">
                      詳しく見る
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            「こんな測量もできる？」
            <br className="sm:hidden" />
            まずはご相談ください
          </h2>
          <p className="text-sm md:text-base mb-8 opacity-90 leading-relaxed">
            ここに掲載のないニーズにも対応可能な場合があります。
            <br className="hidden md:block" />
            現場の状況をお伺いし、3D測量で解決できるかをご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/price"
              className="inline-flex items-center gap-2 text-white border-2 border-white/80 px-8 py-4 text-sm font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              料金の目安を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
