import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { useCases } from "@/data/use-cases";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return {};
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    keywords: uc.keywords,
    alternates: { canonical: `/use-case/${uc.slug}` },
  };
}

export default async function UseCaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: uc.title,
    description: uc.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "株式会社SurveySolution",
      url: "https://surveysolution.pro",
    },
    areaServed: { "@type": "Country", name: "日本" },
    serviceType: "3D測量・レーザースキャン測量",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title={uc.title}
        subtitle="USE CASE"
        image="/images/service-bg.jpg"
        breadcrumbItems={[
          { name: "活用事例", path: "/use-case" },
          { name: uc.title, path: `/use-case/${uc.slug}` },
        ]}
      />

      {/* リード */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="text-xs bg-primary/10 text-primary font-bold px-3 py-1 rounded-full">
              {uc.category}
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
              {uc.method}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            {uc.subtitle}
          </h2>
          <p className="text-sm leading-loose text-gray-700">{uc.leadText}</p>
        </div>
      </section>

      {/* ニーズ（課題） */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">こんなお悩みに対応します</h2>
          <div className="flex items-start gap-3 bg-red-50 p-5 rounded-lg">
            <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
              !
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{uc.needs}</p>
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">3D測量による解決方法</h2>
          <div className="bg-white border border-gray-200 p-6 rounded-lg">
            <p className="text-sm text-gray-700 leading-loose">{uc.solution}</p>
          </div>
        </div>
      </section>

      {/* 納品物 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">主な納品物</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {uc.deliverables.map((d) => (
              <div
                key={d}
                className="bg-white border border-gray-200 p-4 rounded-lg text-center"
              >
                <p className="text-sm font-bold text-gray-900">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用する測量手法 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">使用する測量手法</h2>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="font-bold text-primary text-lg">{uc.method}</p>
          </div>
        </div>
      </section>

      {/* 関連ページ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8 text-center">関連ページ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {uc.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <span className="text-xs text-gray-500">{link.tag}</span>
                <p className="font-bold text-gray-900 mt-1">{link.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            {uc.title}のご相談はお気軽に
          </h2>
          <p className="text-sm mb-6 opacity-90">
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
