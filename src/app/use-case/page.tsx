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
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3Dレーザースキャナ測量は、
            <br className="hidden md:block" />
            幅広いニーズに対応できます。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            「こんな測量もできるの？」というお問い合わせを多くいただきます。
            山林の地形測量から建物の傾き調査、庭園の図化まで、
            3Dレーザースキャナ測量が活用できる具体的なシーンをご紹介します。
          </p>
        </div>
      </section>

      {/* カテゴリ別一覧 */}
      {useCategories.map((cat) => {
        const items = useCases.filter((uc) => uc.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="py-10 md:py-12 odd:bg-gray-50">
            <div className="max-w-[1000px] mx-auto px-6">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-6 border-l-4 border-primary pl-4">
                {cat}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {items.map((uc) => (
                  <Link
                    key={uc.slug}
                    href={`/use-case/${uc.slug}`}
                    className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-primary/30 transition-all"
                  >
                    <span className="text-xs text-primary font-bold">{uc.category}</span>
                    <h3 className="font-bold text-gray-900 mt-1 mb-2">{uc.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                      {uc.subtitle}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-primary mt-3">
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
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            「こんな測量もできる？」まずはご相談ください
          </h2>
          <p className="text-sm mb-6 opacity-90">
            ここに掲載のないニーズにも対応可能な場合があります。
            現場の状況をお伺いし、3D測量で解決できるかをご提案いたします。
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
