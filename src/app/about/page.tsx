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

      {/* 企業理念 */}
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

      {/* 事業内容 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">BUSINESS</span>
            <h2 className="section-title-ja text-primary mt-2">事業内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">3Dスキャナ測量</h3>
              <p className="text-sm leading-loose text-gray-700">
                最新の3Dレーザースキャナを使用し、建物・構造物・地形を高精度にデータ化。ミリ単位の精密な計測で、従来の測量では難しかった複雑な対象物も正確に記録します。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">図面作成・CADデータ化</h3>
              <p className="text-sm leading-loose text-gray-700">
                取得した点群データから、平面図・断面図・立面図などの各種図面を作成。CADデータ（DXF/DWG）での納品に対応し、設計・施工にすぐに活用いただけます。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">傾き・変位調査</h3>
              <p className="text-sm leading-loose text-gray-700">
                建物や構造物の傾き・変位を高精度で計測。経年変化のモニタリングや、地震後の安全診断、補修計画の立案に必要なデータを提供します。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">デジタルアーカイブ</h3>
              <p className="text-sm leading-loose text-gray-700">
                歴史的建造物や文化財を3Dデータとして保存。将来の修復・復元のための基礎資料として、また教育・研究用コンテンツとしても活用いただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 保有機器 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">EQUIPMENT</span>
            <h2 className="section-title-ja text-primary mt-2">保有機器</h2>
          </div>
          <div className="bg-white rounded-lg p-8">
            <p className="text-sm leading-loose text-gray-700 mb-6">
              当社では、用途に応じた複数の3Dスキャナを保有し、最適な機器を選定して測量を行います。広範囲の建物から細部の計測まで、あらゆるニーズに対応いたします。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b">
                <span className="text-primary font-bold shrink-0">●</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">地上型3Dレーザースキャナ</h4>
                  <p className="text-sm text-gray-600">長距離計測に対応し、建物全体や大規模構造物の計測に使用。毎秒100万点以上の高速スキャンで効率的にデータを取得します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b">
                <span className="text-primary font-bold shrink-0">●</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">ハンドヘルド3Dスキャナ</h4>
                  <p className="text-sm text-gray-600">狭所や複雑な形状の計測に最適。手持ちで自由に動き回りながらスキャンできるため、室内や設備周りの計測に威力を発揮します。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-primary font-bold shrink-0">●</span>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">トータルステーション・GNSS</h4>
                  <p className="text-sm text-gray-600">基準点測量や境界確定に使用。3Dスキャナと組み合わせることで、より高精度な測量を実現します。</p>
                </div>
              </div>
            </div>
          </div>
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
