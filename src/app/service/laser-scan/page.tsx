import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CaseStudySection,
  EditorialMeta,
  FaqSection,
  TechnicalGuideSection,
} from "@/components/ContentExpansion";

export const metadata: Metadata = {
  title: "地上レーザースキャン測量｜3Dレーザースキャナで高精度データ取得",
  description:
    "地上レーザースキャン測量は、3Dレーザースキャナを使用して建物・構造物・地形をミリ単位で計測する技術です。精度±2〜5mm、1秒間に最大200万点のデータを取得。建物傾斜調査・図面作成・文化財保存に対応。京都・関西全域対応。",
  keywords: [
    "レーザースキャン 測量",
    "地上3Dスキャン",
    "3Dレーザースキャナ",
    "レーザー測量",
    "点群測量",
    "建物測量",
  ],
  alternates: { canonical: "/service/laser-scan" },
};

const specs = [
  { label: "計測精度", value: "±2〜5mm（対象物との距離により変動）" },
  { label: "計測速度", value: "最大200万点/秒" },
  { label: "計測範囲", value: "0.6m〜350m" },
  { label: "対応環境", value: "屋内・屋外いずれも対応" },
  { label: "データ形式", value: "LAS / E57 / PTS / DXF / DWG" },
];

const useCases = [
  {
    title: "建物傾斜調査",
    description: "工場・倉庫・ビルの柱や壁面の傾きを計測し、建築士・技術者が安全性を評価するための基礎データを作成します。定期測定で経年変化のモニタリングにも対応します。",
  },
  {
    title: "既存建物の図面作成",
    description: "図面が残っていない建物を3Dスキャンし、平面図・断面図・立面図を作成します。リノベーションや増改築計画の基礎資料として活用できます。",
  },
  {
    title: "文化財のデジタルアーカイブ",
    description: "寺社仏閣・歴史的建造物の外観・内部を記録し、長期保存を想定した複数形式で納品します。修復計画の基礎資料にも活用できます。",
  },
  {
    title: "構造物の変位測量",
    description: "橋梁・トンネル・擁壁などの変位を3Dデータで記録し、経年変化を定量的に管理します。インフラの維持管理に活用できます。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "地上レーザースキャン測量",
  description:
    "3Dレーザースキャナを使用して建物・構造物・地形をミリ単位の高精度で計測するサービス。精度±2〜5mm、最大200万点/秒のデータ取得が可能。",
  provider: {
    "@type": "LocalBusiness",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "3D測量・レーザースキャン測量",
};

export default function LaserScanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <PageHeader
        title="地上レーザースキャン測量"
        subtitle="LASER SCAN"
        image="/images/service01.jpg"
        breadcrumbItems={[
          { name: "サービス概要", path: "/service" },
          { name: "地上レーザースキャン測量", path: "/service/laser-scan" },
        ]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="relative aspect-[21/9] mb-10 rounded-lg overflow-hidden">
            <Image src="/images/service-laser-scan.jpg" alt="地上3Dレーザースキャンによる建物計測の様子" fill className="object-cover" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            地上レーザースキャン測量とは、3Dレーザースキャナを地上に設置し、<br className="hidden md:block" />
            対象物にレーザーを照射して三次元座標データを取得する測量技術です。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            1秒間に最大200万点のデータを取得でき、建物・構造物・地形の形状を精度±2〜5mmで記録します。
            非接触で計測するため対象物に触れず、安全な設置位置から見通せる高所・危険箇所の形状も取得できます。
            取得したデータは点群データとして蓄積され、後から任意の位置での寸法確認や断面図作成が可能です。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="地上レーザースキャンを使った導入・活用事例"
        introduction="機器スペックだけでは分からない、対象物、設置条件、納品物まで確認できる事例です。計測距離や遮蔽に応じて設置点を増やし、目的に必要な面を取得します。"
        cases={[
          {
            title: "高速道路500mの出来形管理を面管理へ移行",
            href: "/case/highway",
            category: "導入事例｜出来形管理",
            summary: "施工進捗に合わせて月2回地上スキャンを実施。点群と設計面を比較し、出来形管理図と土量計算書を作成しました。",
            result: "出来形管理工数60%削減",
          },
          {
            title: "建物外壁面から傾斜を面的に把握",
            href: "/use-case/building-tilt",
            category: "活用事例｜傾斜調査",
            summary: "点の測定だけでなく壁面全体の鉛直差を確認し、位置ごとの傾斜量を図面とカラーマップにまとめます。",
          },
          {
            title: "起伏の激しい山林を複数地点から計測",
            href: "/use-case/mountain-forest-survey",
            category: "活用事例｜地形",
            summary: "見通しと安全な設置位置を確認して点群を統合し、立入りを抑えながら等高線・断面作成に必要な地形データを取得します。",
          },
        ]}
      />

      {/* 特長 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">FEATURES</span>
            <h2 className="section-title-ja">地上3Dレーザースキャン測量の特長</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ミリ単位の高精度",
                desc: "精度±2〜5mmで対象物の形状を記録します。従来測量では困難だった複雑な曲面や装飾も正確にデータ化できます。",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "非接触で安全に計測",
                desc: "安全な設置位置から見通せる面を非接触で計測できます。遮蔽部の確認や点検内容によっては足場・近接作業が必要です。",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "後から何度でも活用",
                desc: "取得した点群データから、後日追加の断面図や寸法情報を抽出できます。現場への再訪が不要になり、工期短縮とコスト削減に貢献します。",
                icon: (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 機器スペック */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SPECIFICATIONS</span>
            <h2 className="section-title-ja">機器スペック・対応データ</h2>
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
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">USE CASES</span>
            <h2 className="section-title-ja">地上レーザースキャン測量の活用シーン</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary mb-2">{uc.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalGuideSection
        heading="機器スペックを現場の計測計画へ落とし込む"
        introduction="最大距離や毎秒の点数は、機器の性能上限を示す値です。実務では対象材、距離、入射角、周囲光、雨、振動、要求成果によって設定を変えます。必要な精度と密度を満たす範囲で、設置点数と計測時間を最適化します。"
        guides={[
          {
            title: "レーザーの往復時間から距離を測り、角度と組み合わせて座標化する",
            lead: "地上レーザースキャナは、レーザー光の飛行時間や位相差から対象面までの距離を測り、水平・鉛直角と組み合わせてXYZ座標を生成します。取得点数が多くても、表面から安定した反射が得られなければ品質は上がりません。",
            image: "/images/service-laser-scan-principle.png",
            imageAlt: "地上レーザースキャナがレーザーの往復から距離と点群を取得する原理",
            caption: "レーザーの照射・反射と回転角から三次元座標を取得する仕組み（概念図）",
            points: [
              { title: "0.6〜350mは同じ精度で測れる範囲ではない", body: "距離が長くなるほど点間隔が広がり、入射角や大気条件の影響も増えます。遠方の全体形状と近距離の詳細形状で設置点を分け、要求精度に合う距離を選びます。" },
              { title: "200万点/秒は成果の品質を直接保証しない", body: "高密度設定はデータ量と計測時間を増やします。図面縮尺、最小部材、断面間隔、モデリングLODを確認し、必要以上の密度を避けます。" },
              { title: "オクルージョンは設置点の重なりで減らす", body: "柱・梁・設備・植栽の裏側は一方向から見えません。現地写真と平面図で死角を予測し、隣接スキャンに十分な重複を持たせてレジストレーションと欠測補完を行います。" },
              { title: "雨・鏡面・黒色面・振動を計画に入れる", body: "雨粒や水面はノイズを生み、鏡面や黒色材は反射が不安定になることがあります。交通振動や動く設備も点群を乱すため、時間帯変更、追加ターゲット、別手法との併用を検討します。" },
            ],
          },
        ]}
      />

      <EditorialMeta pageName="地上レーザースキャン測量" path="/service/laser-scan" />

      <FaqSection
        title="地上レーザースキャン測量に関するよくある質問"
        faqs={[
          { q: "計測精度は必ず±2〜5mmですか？", a: "いいえ。機器仕様の目安であり、対象までの距離、入射角、材質、基準点、温度、振動、点群統合で変わります。必要精度を確認し、機器設定と検証方法を案件ごとに決めます。" },
          { q: "レーザーが届けば裏側も計測できますか？", a: "できません。レーザーは直進するため、柱・設備・植栽等で遮られた面は欠測します。複数の設置点から重複して計測し、それでも見えない範囲は未計測として明示します。" },
          { q: "屋外で雨の日も計測できますか？", a: "機器の防塵防水性能内でも、雨粒や濡れた面は点群品質に影響します。成果要求に応じて延期、養生、短時間計測、後処理を判断します。強風や雷など安全上の条件も優先します。" },
          { q: "現場に電源は必要ですか？", a: "多くの計測はバッテリーで行えますが、長時間作業、PC確認、照明、充電のために電源を相談する場合があります。持込み機器の制限がある工場等では事前申請を行います。" },
          { q: "点群だけでなく図面まで依頼できますか？", a: "はい。平面図・立面図・断面図、傾斜図、差分図、CAD、BIMモデル等に対応します。必要縮尺、レイヤー、寸法、座標、納品ソフトのバージョンを事前に確認します。" },
        ]}
      />

      {/* 関連サービス */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">3D測量の関連サービス</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/service/point-cloud" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 02</span>
              <p className="font-bold text-gray-900 mt-1">点群データ作成・処理</p>
            </Link>
            <Link href="/service/3d-modeling" className="block bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <span className="text-xs text-gray-500">SERVICE 03</span>
              <p className="font-bold text-gray-900 mt-1">3Dモデリング・BIM連携</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            レーザースキャン測量のご相談はお気軽に
          </h2>
          <p className="text-sm mb-6 opacity-90">
            「この現場で3Dスキャンは使えるか？」「費用の目安を知りたい」など、どのような段階でもご相談を承ります。
            現地の状況をお伺いし、最適な計測方法と概算費用をご提案いたします。
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
