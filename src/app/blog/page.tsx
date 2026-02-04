import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ブログ｜株式会社SurveySolution",
  description: "株式会社SurveySolutionのブログ記事一覧です。",
};

const posts = [
  {
    date: "2021.01.21",
    title: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
    slug: "#",
  },
  {
    date: "2020.07.21",
    title: "Webサイトを公開しました",
    slug: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader title="ブログ" subtitle="BLOG" />

      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="divide-y">
            {posts.map((post, i) => (
              <Link
                key={i}
                href={post.slug}
                className="flex items-start gap-4 py-6 hover:text-[--color-primary] transition-colors group"
              >
                <time className="text-sm tracking-wider text-gray-500 shrink-0 pt-0.5">
                  {post.date}
                </time>
                <h2 className="text-base group-hover:text-[--color-primary] transition-colors">
                  {post.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
