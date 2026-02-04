import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "お問い合わせ｜株式会社SurveySolution",
  description: "株式会社SurveySolutionへのお問い合わせはこちらから。",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader title="お問い合わせ" subtitle="CONTACT" />

      <section className="py-16 md:py-24">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-sm text-center text-gray-700 mb-8 leading-loose">
            3D測量に関するご質問・ご相談は、下記フォームよりお気軽にお問い合わせください。
            <br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>

          <div className="bg-gray-50 rounded-sm p-6 mb-8 text-center">
            <p className="text-sm text-gray-600 mb-2">お電話でのお問い合わせ</p>
            <p className="text-2xl font-bold tracking-wider text-[--color-primary]">075-744-1775</p>
            <p className="text-xs text-gray-500 mt-1">受付時間：平日 9:00～18:00</p>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[--color-primary]"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-bold mb-2">
                会社名
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[--color-primary]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[--color-primary]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold mb-2">
                電話番号
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[--color-primary]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-[--color-primary] resize-vertical"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[--color-primary] text-white px-16 py-4 text-sm font-bold hover:bg-[--color-primary-dark] transition-colors rounded-sm"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
