import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ・無料見積り｜3D測量のご相談はこちら",
  description:
    "3D測量・3Dスキャナ測量の無料相談・お見積りはこちら。建物傾斜調査、図面作成、点群データ取得など何でもご相談ください。24時間フォーム受付中。お電話は075-744-1775（平日9:00〜18:00）。京都・大阪・関西全域対応。",
  keywords: ["3D測量 見積もり", "3D測量 相談", "測量 依頼", "3Dスキャナ測量 問い合わせ", "無料見積り"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="3D測量の無料相談・お問い合わせ"
        subtitle="CONTACT"
        breadcrumbItems={[{ name: "お問い合わせ", path: "/contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-sm text-center text-gray-700 mb-8 leading-loose">
            3D測量に関するご質問・ご相談は、下記フォームよりお気軽にお問い合わせください。
            <br />
            内容を確認の上、担当者よりご連絡いたします。
          </p>

          <div className="bg-gray-50 rounded-sm p-6 mb-8 text-center">
            <p className="text-sm text-gray-600 mb-2">お電話でのお問い合わせ</p>
            <p className="text-2xl font-bold tracking-wider text-primary">075-744-1775</p>
            <p className="text-xs text-gray-500 mt-1">受付時間：平日 9:00～18:00</p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
