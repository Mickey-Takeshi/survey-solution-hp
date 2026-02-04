import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ブログ - 3D測量の最新情報・技術コラム",
  description:
    "株式会社SurveySolutionのブログ。3D測量・3Dスキャナに関する最新情報、技術コラム、活用事例などをお届けします。",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    date: "2021.01.21",
    dateTime: "2021-01-21",
    title: "3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！",
    slug: "#",
  },
  {
    date: "2020.07.21",
    dateTime: "2020-07-21",
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
                className="flex items-start gap-4 py-6 hover:text-primary transition-colors group"
              >
                <time dateTime={post.dateTime} className="text-sm tracking-wider text-gray-500 shrink-0 pt-0.5">
                  {post.date}
                </time>
                <h2 className="text-base group-hover:text-primary transition-colors">
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
