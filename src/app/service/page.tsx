import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "依頼事例｜株式会社SurveySolution",
  description: "株式会社SurveySolutionの3D測量依頼事例をご紹介します。",
};

const services = [
  {
    id: "01",
    title: "工場の柱の傾き調査",
    image: "/images/service01.jpg",
    description: "工場内の柱の傾きを3Dスキャナで精密に計測し、構造物の安全性を評価します。",
  },
  {
    id: "02",
    title: "擁壁計画のための高低調査",
    image: "/images/service02.jpg",
    description: "擁壁計画に必要な高低差データを3Dスキャナで取得し、正確な計画立案を支援します。",
  },
  {
    id: "03",
    title: "急傾斜地における断面・平面図作成",
    image: "/images/service03.jpg",
    description: "急傾斜地の地形データを3Dスキャナで取得し、断面図・平面図を作成します。",
  },
  {
    id: "04",
    title: "建物丸ごと保存",
    image: "/images/service04.jpg",
    description: "歴史的建造物などを3Dスキャナで丸ごとデータ化し、デジタルアーカイブとして保存します。",
  },
  {
    id: "05",
    title: "隣接建物の窓の位置調査",
    image: "/images/service05.jpg",
    description: "隣接する建物の窓の位置関係を3Dスキャナで正確に計測し、建築計画に活用します。",
  },
  {
    id: "06",
    title: "建物の平面図・断面図作成",
    image: "/images/service06.jpg",
    description: "建物全体を3Dスキャナでスキャンし、高精度な平面図・断面図を作成します。",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHeader title="依頼事例" subtitle="SERVICE" image="/images/service-bg.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6 space-y-16">
          {services.map((s) => (
            <div key={s.id} id={`service${s.id}`} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-1/2">
                <span className="text-xs tracking-widest text-gray-400 mb-2 block">SERVICE{s.id}</span>
                <h2 className="text-xl font-bold text-[--color-primary] mb-4">{s.title}</h2>
                <p className="text-sm leading-loose text-gray-700">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
