import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { AdvisoryArticle as ArticleInfo } from "@/data/advisory-articles";

type Faq = { question: string; answer: string };
type ArticleLink = { href: string; label: string };

export function advisoryMetadata(article: ArticleInfo): Metadata {
  const url = `/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "ja_JP",
      url,
      siteName: "株式会社SurveySolution",
      title: article.title,
      description: article.description,
      publishedTime: article.dateTime,
      modifiedTime: article.dateTime,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export function ArticleSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section aria-labelledby={id} className="mt-12">
    <h2 id={id} className="scroll-mt-28 text-xl font-bold text-primary mb-5 pb-2 border-b-2 border-primary">{title}</h2>
    {children}
  </section>;
}

export function ArticleText({ children }: { children: ReactNode }) {
  return <p className="text-base leading-loose text-gray-700 mb-5">{children}</p>;
}

export function ArticleList({ items }: { items: string[] }) {
  return <ul className="list-disc pl-6 space-y-3 text-base leading-loose text-gray-700 mb-6">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export function ArticleTable({ caption, headings, rows }: { caption: string; headings: string[]; rows: string[][] }) {
  return <>
    {headings.length > 2 && <p className="text-xs text-gray-600 mb-2 sm:hidden">表は横にスクロールしてご覧いただけます。</p>}
    <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2" role={headings.length > 2 ? "region" : undefined} aria-label={headings.length > 2 ? caption : undefined} tabIndex={headings.length > 2 ? 0 : undefined}>
    <table className={`w-full ${headings.length > 2 ? "min-w-[600px]" : ""} text-sm border-collapse`}>
      <caption className="text-left px-4 py-3 font-bold text-gray-800 bg-gray-50">{caption}</caption>
      <thead><tr className="bg-primary text-white">{headings.map(heading => <th key={heading} scope="col" className="px-4 py-3 text-left align-top">{heading}</th>)}</tr></thead>
      <tbody>{rows.map((row, i) => <tr key={row[0]} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
        {row.map((cell, j) => j === 0
          ? <th key={j} scope="row" className="px-4 py-4 text-left align-top font-bold text-gray-900 border-t border-gray-200">{cell}</th>
          : <td key={j} className="px-4 py-4 align-top leading-relaxed text-gray-700 border-t border-gray-200">{cell}</td>)}
      </tr>)}</tbody>
    </table>
    </div>
  </>;
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="text-primary underline underline-offset-4 hover:text-primary-dark">{children}</a>;
}

export function ArticleNavLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="text-primary underline underline-offset-4 hover:text-primary-dark">{children}</Link>;
}

export default function AdvisoryArticle({ article, lead, sections, faq, related, ctaTitle, ctaText, children }: {
  article: ArticleInfo;
  lead: ReactNode;
  sections: { id: string; title: string }[];
  faq: Faq[];
  related: ArticleLink[];
  ctaTitle: string;
  ctaText: string;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: `https://surveysolution.pro${article.image}`,
    datePublished: article.dateTime,
    dateModified: article.dateTime,
    inLanguage: "ja",
    author: { "@type": "Organization", name: "株式会社SurveySolution", url: "https://surveysolution.pro/about" },
    publisher: { "@type": "Organization", name: "株式会社SurveySolution", logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://surveysolution.pro/blog/${article.slug}` },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(item => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
    <PageHeader title="ブログ" subtitle="BLOG" image="/images/blog-mv.jpg" as="p" breadcrumbItems={[{ name: "ブログ", path: "/blog" }, { name: article.title, path: `/blog/${article.slug}` }]} />
    <article className="py-16 md:py-24">
      <div className="max-w-[800px] mx-auto px-6">
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time dateTime={article.dateTime} className="text-sm tracking-wider text-gray-500">{article.date}</time>
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">{article.category}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">{article.title}</h1>
        </header>
        <figure className="mb-10">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image src={article.image} alt={article.imageAlt} fill sizes="(max-width: 800px) 100vw, 752px" className="object-cover" />
          </div>
          <figcaption className="text-xs text-gray-500 mt-2">写真はイメージです。</figcaption>
        </figure>
        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8 text-base leading-loose text-gray-700">{lead}</div>
        <nav aria-label="この記事の目次" className="bg-gray-50 p-6 rounded-lg mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
          <ol className="list-decimal pl-5 space-y-3 text-sm leading-relaxed text-primary">
            {sections.map(section => <li key={section.id}><a href={`#${section.id}`} className="hover:underline">{section.title}</a></li>)}
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ol>
        </nav>
        {children}
        <ArticleSection id="faq" title="よくある質問">
          <div className="space-y-4">{faq.map(item => <div key={item.question} className="bg-gray-50 rounded-lg p-5">
            <h3 className="font-bold text-gray-900 mb-2">Q. {item.question}</h3>
            <p className="text-sm text-gray-700 leading-loose">{item.answer}</p>
          </div>)}</div>
        </ArticleSection>
        <aside className="bg-primary/5 rounded-lg p-6 md:p-8 mt-12" aria-label="ご相談窓口">
          <h2 className="text-lg font-bold text-primary mb-4">{ctaTitle}</h2>
          <p className="text-sm leading-loose text-gray-700 mb-5">{ctaText}</p>
          <p className="text-sm leading-loose text-gray-700 mb-6">土地家屋調査士でもある代表の<ArticleNavLink href="/profile">齋藤 大輔</ArticleNavLink>に、手元の図面からご相談いただけます。</p>
          <Link href="/contact" className="inline-block bg-primary text-white px-6 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors">図面・測量について相談する</Link>
        </aside>
        <div className="mt-12 pt-8 border-t">
          <h2 className="text-lg font-bold text-gray-800 mb-4">あわせて読みたい記事・サービス</h2>
          <ul className="space-y-4 text-sm leading-relaxed">{related.map(link => <li key={link.href}><ArticleNavLink href={link.href}>{link.label}</ArticleNavLink></li>)}</ul>
        </div>
        <p className="text-xs leading-relaxed text-gray-500 mt-10">制度の説明は2026年11月7日に確認した公表資料に基づきます。個別の適用は物件所在地と計画内容に応じて、設計者・管理者・行政窓口に確認します。</p>
        <div className="mt-8 pt-8 border-t"><ArticleNavLink href="/blog">← ブログ一覧に戻る</ArticleNavLink></div>
      </div>
    </article>
  </>;
}
