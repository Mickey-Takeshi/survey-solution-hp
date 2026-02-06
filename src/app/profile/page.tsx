import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "代表プロフィール - 齋藤大輔",
  description:
    "株式会社SurveySolution 代表取締役 齋藤大輔のプロフィール。京都を拠点に3Dスキャナを用いた測量サービスを提供し、三次元の可視化・分析で課題解決に貢献します。",
  alternates: { canonical: "/profile" },
};

export default function ProfilePage() {
  return (
    <>
      <PageHeader title="プロフィール" subtitle="PROFILE" image="/images/profile-bg.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-5/12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="代表 齋藤 大輔"
                  width={400}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div className="md:w-7/12">
              <h2 className="text-2xl font-bold mb-2">齋藤 大輔</h2>
              <p className="text-sm text-gray-500 mb-6">代表取締役</p>
              <div className="space-y-4 text-sm leading-loose text-gray-700">
                <p>
                  京都を拠点に、3Dスキャナを用いた測量サービスを提供しております。測量データを2次元の図面にとどまらず、三次元での可視化・分析を通して、お客様の課題解決に貢献します。
                </p>
                <p>
                  大学で土木工学を専攻し、卒業後は大手建設コンサルタント会社にて測量・設計業務に従事。その後、3Dスキャナ技術の可能性に魅せられ、より専門的なサービスを提供するため独立を決意しました。
                </p>
                <p>
                  「お客様の困りごとを、最新技術で解決したい」という思いを胸に、日々の業務に取り組んでおります。3D測量は従来の測量では難しかった課題を解決できる技術です。「こんなことできるかな？」と思われることがあれば、どうぞお気軽にご相談ください。
                </p>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-bold text-primary mb-4">保有資格</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>測量士
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>土地家屋調査士
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>一級建築士
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">●</span>宅地建物取引士
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-bold text-primary mb-4">経歴</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex gap-4">
                    <span className="text-gray-500 shrink-0 w-20">2010年</span>
                    <span>○○大学 工学部土木工学科 卒業</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 shrink-0 w-20">2010年</span>
                    <span>大手建設コンサルタント会社 入社</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 shrink-0 w-20">2018年</span>
                    <span>3Dスキャナ測量部門にて技術リーダーを務める</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-500 shrink-0 w-20">2020年</span>
                    <span>株式会社SurveySolution 設立、代表取締役に就任</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
