import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "依頼事例 - 3D測量・3Dスキャナの活用事例",
  description:
    "工場の柱の傾き調査、擁壁計画の高低調査、急傾斜地の断面図作成、歴史的建造物の保存など、株式会社SurveySolutionの3Dスキャナ測量の依頼事例をご紹介します。",
  alternates: { canonical: "/service" },
};

const services = [
  {
    id: "01",
    title: "工場の柱の傾き調査",
    image: "/images/service01.jpg",
    description:
      "工場内の柱の傾きを3Dスキャナで精密に計測し、構造物の安全性を評価します。経年劣化や地震の影響による柱の傾きは、建物全体の安全性に直結する重要な問題です。",
    details: [
      "ミリ単位の高精度計測で微細な傾きも検出",
      "複数の柱を一度にスキャンし、建物全体の傾向を把握",
      "定期的な計測による経年変化のモニタリングにも対応",
      "計測データをもとに補修・補強計画の立案をサポート",
    ],
    useCase:
      "製造工場、倉庫、商業施設など、大型構造物の安全点検や、地震後の建物診断にご活用いただいています。",
  },
  {
    id: "02",
    title: "擁壁計画のための高低調査",
    image: "/images/service02.jpg",
    description:
      "擁壁計画に必要な高低差データを3Dスキャナで取得し、正確な計画立案を支援します。従来の測量では困難だった複雑な地形も、点群データとして正確に記録できます。",
    details: [
      "広範囲の高低差を短時間で計測",
      "複雑な地形形状も点群データで正確に記録",
      "設計に必要な断面図・等高線図を自動生成",
      "土量計算や施工計画の基礎データとして活用可能",
    ],
    useCase:
      "宅地造成、道路建設、河川護岸工事など、擁壁設計が必要な土木・建築プロジェクトでご利用いただいています。",
  },
  {
    id: "03",
    title: "急傾斜地における断面・平面図作成",
    image: "/images/service03.jpg",
    description:
      "急傾斜地の地形データを3Dスキャナで取得し、断面図・平面図を作成します。人が立ち入りにくい危険な斜面でも、離れた場所から安全に計測が可能です。",
    details: [
      "危険な急傾斜地でも安全に計測可能",
      "樹木や障害物があっても地形を把握",
      "任意の位置での断面図を自由に作成",
      "土砂災害対策や防災計画の基礎資料として活用",
    ],
    useCase:
      "山間部の宅地開発、急傾斜地崩壊対策、土砂災害ハザードマップ作成など、防災・減災関連の調査でご活用いただいています。",
  },
  {
    id: "04",
    title: "建物丸ごと保存",
    image: "/images/service04.jpg",
    description:
      "歴史的建造物などを3Dスキャナで丸ごとデータ化し、デジタルアーカイブとして保存します。建物の外観・内部構造を精密に記録し、将来の修復や研究に活用できます。",
    details: [
      "外観から内部まで建物全体を3Dデータ化",
      "装飾や彫刻などの細部も高精度で記録",
      "BIM/CIMデータへの変換にも対応",
      "VR・AR用コンテンツとしても活用可能",
    ],
    useCase:
      "文化財建造物、寺社仏閣、近代建築、町家などの保存記録や、解体前の建物のデジタルアーカイブとしてご利用いただいています。",
  },
  {
    id: "05",
    title: "隣接建物の窓の位置調査",
    image: "/images/service05.jpg",
    description:
      "隣接する建物の窓の位置関係を3Dスキャナで正確に計測し、建築計画に活用します。プライバシーへの配慮や日照権の確認など、近隣トラブル防止に役立ちます。",
    details: [
      "隣地に立ち入らずに窓位置を正確に計測",
      "自敷地と隣地の高低差・離隔距離も同時に把握",
      "目隠し設置位置や高さの検討資料として活用",
      "建築確認申請の添付資料としても使用可能",
    ],
    useCase:
      "住宅新築・増改築時の近隣配慮、マンション建設時の日照・眺望調査、境界トラブル解決のための現況記録などにご活用いただいています。",
  },
  {
    id: "06",
    title: "建物の平面図・断面図作成",
    image: "/images/service06.jpg",
    description:
      "建物全体を3Dスキャナでスキャンし、高精度な平面図・断面図を作成します。図面が残っていない既存建物のリノベーションや増改築計画に最適です。",
    details: [
      "図面のない建物でも正確な現況図面を作成",
      "任意の高さ・位置での断面図を自由に出力",
      "CADデータ（DXF/DWG）での納品に対応",
      "設備配管ルートの検討資料としても活用",
    ],
    useCase:
      "既存建物のリノベーション、用途変更に伴う確認申請、設備更新工事の計画、不動産売買時の現況記録などでご利用いただいています。",
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
                <h2 className="text-xl font-bold text-primary mb-4">{s.title}</h2>
                <p className="text-sm leading-loose text-gray-700 mb-4">{s.description}</p>
                <ul className="space-y-2 mb-4">
                  {s.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary shrink-0">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-loose text-gray-600 bg-gray-50 p-4 rounded">
                  <span className="font-bold text-primary">活用事例：</span>{s.useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
