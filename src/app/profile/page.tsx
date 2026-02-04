import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プロフィール｜株式会社SurveySolution",
  description: "株式会社SurveySolution 代表 齋藤大輔のプロフィールをご紹介します。",
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
              <p className="text-sm leading-loose text-gray-700 mb-6">
                当社代表「齋藤 大輔」のご紹介です。今までの生い立ちやキャリアなどについて書いていますので、ぜひご覧ください。
              </p>
              <div className="space-y-4 text-sm leading-loose text-gray-700">
                <p>
                  京都を拠点に、3Dスキャナを用いた測量サービスを提供しております。測量データを2次元の図面にとどまらず、三次元での可視化・分析を通して、お客様の課題解決に貢献します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
