import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません（404）",
  description: "お探しのページは見つかりませんでした。URLが変更されたか、ページが削除された可能性があります。",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-xl mx-auto px-6 text-center">
        <p className="text-7xl font-bold text-blue-600 mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          ページが見つかりません
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          お探しのページは、移動または削除された可能性があります。
          <br />
          URLをご確認いただくか、以下のリンクからお進みください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors"
          >
            トップページへ
          </Link>
          <Link
            href="/service"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-sm font-medium hover:bg-gray-50 transition-colors"
          >
            サービス一覧
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-sm font-medium hover:bg-gray-50 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
