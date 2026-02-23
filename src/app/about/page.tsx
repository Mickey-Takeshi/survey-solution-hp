import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "会社概要・企業理念・アクセス｜京都の3D測量会社",
  description:
    "株式会社SurveySolutionの会社概要・企業理念・アクセス情報。京都市中京区を拠点に、3Dレーザースキャナによる高精度測量サービスを提供。地上型・ハンドヘルド3Dスキャナ、トータルステーション完備。烏丸駅徒歩3分。",
  keywords: ["3D測量会社", "京都 測量会社", "3Dスキャナ測量", "会社概要", "企業理念", "アクセス", "株式会社SurveySolution"],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="3D測量の専門会社｜会社概要"
        subtitle="ABOUT"
        image="/images/hero-bg2.jpg"
        breadcrumbItems={[{ name: "当社について", path: "/about" }]}
      />

      {/* 企業理念 */}
      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label text-gray-500">PHILOSOPHY</span>
            <h2 className="text-primary text-2xl md:text-3xl font-bold leading-relaxed mt-2">
              企業理念｜3D測量で世の中を変える
            </h2>
          </div>
          <p className="text-primary text-xl md:text-2xl font-bold leading-relaxed mb-8 text-center">
            あらゆる情報の「見える化」で<br />安心・安全・利益をあなたに
          </p>
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
            <h2 className="section-title-ja text-primary mt-2">3D測量の事業内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">3Dレーザースキャナ測量・点群データ取得</h3>
              <p className="text-sm leading-loose text-gray-700">
                最新の3Dレーザースキャナを使用し、建物・構造物・地形を高精度にデータ化。ミリ単位の精密な計測で、従来の測量では難しかった複雑な対象物も正確に記録します。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">図面作成・CADデータ化（DXF/DWG）</h3>
              <p className="text-sm leading-loose text-gray-700">
                取得した点群データから、平面図・断面図・立面図などの各種図面を作成。CADデータ（DXF/DWG）での納品に対応し、設計・施工にすぐに活用いただけます。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">建物傾斜調査・床の凹凸調査</h3>
              <p className="text-sm leading-loose text-gray-700">
                建物や構造物の傾き・変位を高精度で計測。床の凹凸（不陸）や、地震後の安全診断、補修計画の立案に必要なデータを提供します。
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded">
              <h3 className="font-bold text-primary mb-3">文化財・歴史的建造物のデジタルアーカイブ</h3>
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
            <h2 className="section-title-ja text-primary mt-2">3D測量の保有機器</h2>
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
      <section id="access" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">ACCESS</span>
            <h2 className="section-title-ja text-primary mt-2">アクセス｜京都市中京区 烏丸駅徒歩3分</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* 左側：オフィス画像 */}
            <div>
              <Image
                src="/images/office.jpg"
                alt="株式会社SurveySolution 京都市中京区オフィス内観"
                width={600}
                height={400}
                className="w-full object-cover shadow-md"
              />
            </div>
            {/* 右側：会社情報テーブル */}
            <div className="bg-white">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold w-32 align-top">名称</th>
                    <td className="py-4 text-gray-800">株式会社SurveySolution</td>
                  </tr>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold align-top">代表者</th>
                    <td className="py-4 text-gray-800">齋藤 大輔</td>
                  </tr>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold align-top">所在地</th>
                    <td className="py-4 text-gray-800 leading-relaxed">
                      〒604-8241<br />
                      京都市中京区釜座町22番地<br />
                      ストークビル三条烏丸608
                    </td>
                  </tr>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold align-top">電話番号</th>
                    <td className="py-4">
                      <a href="tel:075-744-1775" className="text-primary underline hover:no-underline">075-744-1775</a>
                    </td>
                  </tr>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold align-top">FAX番号</th>
                    <td className="py-4 text-gray-800">075-744-1776</td>
                  </tr>
                  <tr className="border-b-2 border-primary">
                    <th className="py-4 text-left text-primary font-bold align-top">メールアドレス</th>
                    <td className="py-4 text-gray-800">surveysolution.jp@gmail.com</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-500 mt-4">※営業・勧誘のお電話はすべてお控えください。</p>
            </div>
          </div>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.0!2d135.758!3d35.004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5qCq5byP5Lya56S-U3VydmV5U29sdXRpb24!5e0!3m2!1sja!2sjp!4v1"
              width="100%"
              height="300"
              className="border-0 w-full h-[300px] md:h-[400px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="株式会社SurveySolution 京都市中京区の所在地 Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
