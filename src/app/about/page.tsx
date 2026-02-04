import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "当社について - 3Dスキャナで情報を見える化",
  description:
    "京都市三条烏丸の3D測量会社 株式会社SurveySolution。3Dスキャナによるあらゆる情報の見える化で、安心・安全・利益を提供。企業理念とアクセス情報をご紹介します。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="当社について" subtitle="ABOUT" image="/images/hero-bg2.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-primary text-2xl md:text-3xl font-bold leading-relaxed mb-8 text-center">
            あらゆる情報の「見える化」で<br />安心・安全・利益をあなたに
          </h2>
          <p className="text-sm leading-loose text-gray-700 mb-6">
            京都市の三条烏丸にある【株式会社SurveySolution】は、測量により取得したデータを2次元の図面作成だけにとどまらず、多角的な視野から分析をすることを得意としております。
          </p>
          <p className="text-sm leading-loose text-gray-700 mb-6">
            測量に際しては、3Dスキャナを用いて土地や建物、構造物のデータを取得。三次元での現状把握、事前のリスク把握、シミュレーション、歴史的建造物の保存などを行うことで、対象物の安心や安全性を提供し、新たな付加価値を提供いたします。
          </p>
          <p className="text-sm leading-loose text-gray-700 mb-6">
            また土地、建物、構造物で「こんなことできないか」といったお悩みがございましたら、どんなことでもぜひご相談ください。
          </p>
          <p className="text-sm leading-loose text-gray-700">
            3Dスキャナによるあらゆる情報の「見える化」を通して、お客様の最大限の安心・安全・利益につなげることを目指しています。
          </p>
        </div>
      </section>

      {/* ACCESS */}
      <section id="access" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">ACCESS</span>
            <h2 className="section-title-ja text-primary mt-2">アクセス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image
                src="/images/access.jpg"
                alt="株式会社SurveySolution 京都市中京区オフィス外観"
                width={500}
                height={350}
                className="rounded-sm w-full object-cover"
              />
            </div>
            <div className="text-sm leading-loose">
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <th className="py-3 text-left font-bold w-24">会社名</th>
                    <td className="py-3">株式会社SurveySolution</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left font-bold">代表</th>
                    <td className="py-3">齋藤 大輔</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left font-bold">所在地</th>
                    <td className="py-3">〒604-8155<br />京都府京都市中京区錦小路通烏丸西入占出山町312 ケイズビル6F</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left font-bold">TEL</th>
                    <td className="py-3">075-744-1775</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-3 text-left font-bold">営業時間</th>
                    <td className="py-3">平日 9:00～18:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.0!2d135.758!3d35.004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5qCq5byP5Lya56S-U3VydmV5U29sdXRpb24!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="300"
              className="border-0 rounded-sm w-full h-[250px] md:h-[400px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社SurveySolution 京都市中京区錦小路通烏丸西入の所在地 Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
