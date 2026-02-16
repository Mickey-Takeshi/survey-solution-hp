import type { Metadata } from "next";
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
  },
  {
    date: "2020.07.21",
    dateTime: "2020-07-21",
    title: "Webサイトを公開しました",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        breadcrumbItems={[{ name: "ブログ", path: "/blog" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="divide-y">
            {posts.map((post, i) => (
              <article
                key={i}
                className="flex items-start gap-4 py-6"
              >
                <time dateTime={post.dateTime} className="text-sm tracking-wider text-gray-500 shrink-0 pt-0.5">
                  {post.date}
                </time>
                <h2 className="text-base text-gray-800">
                  {post.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
