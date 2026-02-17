import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ドローン（UAV）3D測量｜広範囲を効率的に3Dデータ化",
  description:
    "ドローン3D測量は、UAVに搭載したカメラ・LiDARで上空から広範囲を効率的に計測する技術です。従来測量の1/3の時間で広大な敷地のデータ取得が可能。土量計算・出来形管理・災害調査に対応。京都・関西全域対応。",
  keywords: [
    "ドローン測量",
    "UAV測量 3D",
    "ドローン 3D測量",
    "UAV測量 費用",
    "ドローン 点群",
    "空撮測量",
  ],
  alternates: { canonical: "/service/drone" },
};

const features = [
  {
    title: "広範囲を短時間で計測",
    desc: "数ヘクタール規模の敷地でも、ドローンなら数時間でデータ取得が完了します。従来の地上測量と比較して作業時間を最大70%削減できます。",
  },
  {
    title: "高所・危険区域も安全に",
    desc: "人が立ち入れない急傾斜地、河川敷、災害現場でも安全にデータを取得できます。足場や重機が不要なため、コストも削減できます。",
  },
  {
    title: "地上レーザーとの併用で死角ゼロ",
    desc: "ドローンが苦手とする建物直下や室内は、地上レーザースキャナで補完します。上空と地上の両方からデータを取得することで、対象物全体をカバーします。",
  },
];

const specs = [
  { label: "写真測量（SfM）精度", value: "水平±2〜3cm / 高さ±3〜5cm" },
  { label: "LiDAR測量精度", value: "水平±1〜2cm / 高さ±2〜3cm" },
  { label: "対応面積", value: "数百㎡〜数十ヘクタール" },
  { label: "飛行高度", value: "地上高30m〜150m（対象に応じて調整）" },
  { label: "成果物", value: "オルソ画像 / DSM / 点群データ / 3Dモデル" },
];

const useCases = [
  {
    title: "土量計算・出来形管理",
    description: "造成工事や盛土・切土の土量を3Dデータから正確に算出します。ICT施工の出来形管理にも対応し、i-Construction基準に準拠したデータを納品します。",
  },
  {
    title: "広大な敷地の現況測量",
    description: "工場敷地・太陽光発電所・農地などの広範囲を効率的に計測し、現況図面や3Dモデルを作成します。",
  },
  {
    title: "災害調査・被災状況記録",
    description: "土砂崩れ・河川氾濫などの被災状況を上空から安全に記録します。被災前後の地形データを比較し、被害規模を定量的に把握できます。",
  },
  {
    title: "法面・急傾斜地の測量",
    description: "人が立ち入ることが危険な急傾斜地の地形データを安全に取得します。防災計画や斜面安定性評価の基礎資料として活用できます。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ドローン（UAV）3D測量",
  description:
    "ドローンに搭載したカメラ・LiDARで上空から広範囲を効率的に3D計測するサービス。土量計算・出来形管理・災害調査に対応。",
  provider: {
    "@type": "LocalBusiness",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "ドローン測量・UAV測量",
};

export default function DronePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="ドローン（UAV）3D測量"
        subtitle="DRONE SURVEY"
        image="/images/service02.jpg"
        breadcrumbItems={[
          { name: "サービス概要", path: "/service" },
          { name: "ドローン3D測量", path: "/service/drone" },
        ]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="relative aspect-[21/9] mb-10 rounded-lg overflow-hidden">
            <Image src="/images/service-drone.jpg" alt="ドローン3D測量の空撮イメージ" fill className="object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            ドローン3D測量とは、UAV（無人航空機）に搭載したカメラやLiDARセンサーで<br className="hidden md:block" />
            上空から地形・構造物の三次元データを取得する測量技術です。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            従来の地上測量では数日かかる広大な敷地の計測を、数時間で完了できます。
            写真測量（SfM）方式では精度±2〜5cm、LiDAR方式では精度±1〜3cmのデータ取得が可能です。
            取得したデータは、オルソ画像・DSM（数値表面モデル）・点群データ・3Dモデルなど、多様な成果物に加工できます。
          </p>
        </div>
      </section>

      {/* 特長 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">FEATURES</span>
            <h2 className="section-title-ja">ドローン測量の特長</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary mb-3">{f.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 地上レーザーとの比較 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">COMPARISON</span>
            <h2 className="section-title-ja">地上レーザースキャンとの比較</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">項目</th>
                  <th className="px-4 py-3 text-center">ドローン測量</th>
                  <th className="px-4 py-3 text-center">地上レーザースキャン</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "精度", drone: "±1〜5cm", laser: "±2〜5mm" },
                  { item: "対応範囲", drone: "数百㎡〜数十ヘクタール", laser: "数十㎡〜数千㎡" },
                  { item: "得意な対象", drone: "広い敷地・屋外地形", laser: "建物・構造物・室内" },
                  { item: "計測時間", drone: "広範囲でも数時間", laser: "現場規模に応じて半日〜数日" },
                  { item: "天候の影響", drone: "風・雨に影響あり", laser: "雨以外は影響小" },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 font-bold text-gray-900 border-r border-gray-200">{row.item}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.drone}</td>
                    <td className="px-4 py-3 text-center text-gray-700">{row.laser}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            弊社では、現場の条件に応じてドローン測量と地上レーザースキャンを最適に組み合わせてご提案いたします。
          </p>
        </div>
      </section>

      {/* スペック */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SPECIFICATIONS</span>
            <h2 className="section-title-ja">計測スペック・成果物</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <th className="text-left px-6 py-4 font-bold text-gray-900 w-1/3 border-r border-gray-200">
                      {spec.label}
                    </th>
                    <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 活用シーン */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">USE CASES</span>
            <h2 className="section-title-ja">活用シーン</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="font-bold text-primary mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連サービス */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">関連サービス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/service/laser-scan" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 01</span>
              <p className="font-bold text-gray-900 mt-1">地上レーザースキャン測量</p>
            </Link>
            <Link href="/service/point-cloud" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 03</span>
              <p className="font-bold text-gray-900 mt-1">点群データ作成・処理</p>
            </Link>
            <Link href="/service/3d-modeling" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 04</span>
              <p className="font-bold text-gray-900 mt-1">3Dモデリング・BIM連携</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「ドローン測量でどのくらい効率化できるか知りたい」「費用の目安を知りたい」など、どのような段階でもご相談を承ります。
            現場の状況をお伺いし、最適な計測方法をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/price"
              className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors"
            >
              料金の目安を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
