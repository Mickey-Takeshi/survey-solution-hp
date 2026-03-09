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

  const jsonLd = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: uc.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

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

      {/* 課題（複数） */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">こんな課題はありませんか？</h2>
          <div className="space-y-4">
            {uc.challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-sm text-gray-700 leading-relaxed">{c}</p>
              </div>
            ))}
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

      {/* 測量の流れ */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">測量の流れ</h2>
          <div className="space-y-6">
            {uc.process.map((step, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div className="flex-1 bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D測量のメリット */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">3D測量を活用するメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {uc.benefits.map((b) => (
              <div key={b.title} className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold text-primary mb-3">{b.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 納品物 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">主な納品物</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uc.deliverables.map((d) => (
              <div key={d} className="bg-white border border-gray-200 p-4 rounded-lg text-center">
                <p className="text-sm font-bold text-gray-900">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="section-title-ja mb-8">よくある質問</h2>
          <div className="space-y-4">
            {uc.faq.map((f, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <p className="font-bold text-gray-900 text-sm">
                    <span className="text-primary mr-2">Q.</span>
                    {f.q}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="text-primary font-bold mr-2">A.</span>
                    {f.a}
                  </p>
                </div>
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
            「この現場で3Dスキャンは使えるか？」という段階でもお気軽にご相談ください。
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
