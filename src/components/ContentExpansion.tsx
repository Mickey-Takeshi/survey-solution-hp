import Image from "next/image";
import Link from "next/link";

export type CaseStudy = {
  title: string;
  href: string;
  category: string;
  summary: string;
  result?: string;
};

export type SourceLink = {
  label: string;
  href: string;
};

export type TechnicalGuide = {
  title: string;
  lead: string;
  points: { title: string; body: string }[];
  image: string;
  imageAlt: string;
  caption: string;
  sources?: SourceLink[];
  note?: string;
};

export type Faq = { q: string; a: string };

export function CaseStudySection({
  title,
  introduction,
  cases,
}: {
  title: string;
  introduction: string;
  cases: CaseStudy[];
}) {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label">CASE STUDIES</span>
          <h2 className="section-title-ja">{title}</h2>
          <p className="text-sm leading-loose text-gray-600 mt-4 max-w-[760px] mx-auto">
            {introduction}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col bg-white border border-gray-200 rounded-lg p-6 hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <span className="text-[11px] tracking-widest font-bold text-primary mb-2">
                {item.category}
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">{item.summary}</p>
              {item.result && (
                <p className="mt-4 pt-4 border-t border-gray-100 text-sm font-bold text-primary">
                  {item.result}
                </p>
              )}
              <span className="mt-4 text-xs font-bold text-primary">詳しい事例を見る →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnicalGuideSection({
  heading,
  introduction,
  guides,
}: {
  heading: string;
  introduction: string;
  guides: TechnicalGuide[];
}) {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label">PRACTICAL GUIDE</span>
          <h2 className="section-title-ja">{heading}</h2>
          <p className="text-sm leading-loose text-gray-600 mt-4 max-w-[800px] mx-auto">
            {introduction}
          </p>
        </div>

        <div className="space-y-16">
          {guides.map((guide, guideIndex) => (
            <article key={guide.title} className="scroll-mt-24">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start ${guideIndex % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <figure>
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-200 bg-[#F8F9FA]">
                    <Image
                      src={guide.image}
                      alt={guide.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 480px, 100vw"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="text-xs text-gray-500 leading-relaxed mt-3">
                    {guide.caption}
                  </figcaption>
                </figure>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-loose mb-6">{guide.lead}</p>
                  <div className="space-y-5">
                    {guide.points.map((point) => (
                      <div key={point.title}>
                        <h4 className="font-bold text-gray-900 text-sm mb-1.5 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                          {point.title}
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed pl-3.5">{point.body}</p>
                      </div>
                    ))}
                  </div>
                  {guide.note && (
                    <p className="mt-6 rounded-md border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-950">
                      {guide.note}
                    </p>
                  )}
                  {guide.sources && guide.sources.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-xs font-bold text-gray-500 mb-2">公的資料・参考資料</p>
                      <ul className="space-y-1.5">
                        {guide.sources.map((source) => (
                          <li key={source.href} className="text-xs">
                            <a
                              href={source.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-primary underline underline-offset-2 hover:no-underline"
                            >
                              {source.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ title, faqs }: { title: string; faqs: Faq[] }) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="section-label">FAQ</span>
          <h2 className="section-title-ja">{title}</h2>
        </div>
        <div className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 md:p-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
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
  );
}

export function EditorialMeta({
  pageName,
  path,
  updated = "2026-08-19",
}: {
  pageName: string;
  path: string;
  updated?: string;
}) {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://surveysolution.pro${path}#webpage`,
    name: pageName,
    url: `https://surveysolution.pro${path}`,
    dateModified: updated,
    author: {
      "@type": "Organization",
      name: "株式会社SurveySolution",
      url: "https://surveysolution.pro",
    },
    reviewedBy: {
      "@type": "Person",
      name: "齋藤 大輔",
      jobTitle: "土地家屋調査士・株式会社SurveySolution代表取締役",
    },
  };

  return (
    <section className="py-8 border-y border-gray-200 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <div className="max-w-[800px] mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-gray-600">
        <div>
          <p className="font-bold text-gray-900">計測手法・点群データ処理に関する記述の監修</p>
          <p>齋藤 大輔（土地家屋調査士／株式会社SurveySolution 代表取締役）</p>
        </div>
        <time dateTime={updated}>最終更新：{updated.replaceAll("-", ".")}</time>
      </div>
    </section>
  );
}
