import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CaseStudySection,
  EditorialMeta,
  FaqSection,
  TechnicalGuideSection,
} from "@/components/ContentExpansion";

export const metadata: Metadata = {
  title: "プラント・工場向け3D測量｜配管・設備の3Dモデル化でレイアウト変更を効率化",
  description:
    "プラント・工場向けの3D測量ソリューション。配管・設備の3Dモデル化、干渉チェック、レイアウト変更、定期修繕の事前検討に対応。化学工場800㎡をスキャン3日・モデル10日でIFC納品した事例あり。",
  keywords: [
    "プラント 3D測量",
    "工場 レイアウト 3D",
    "配管 3Dモデル",
    "設備 干渉チェック",
    "工場 3Dスキャン",
  ],
  alternates: { canonical: "/solution/plant" },
};

const challenges = [
  "配管が複雑で既存図面が実態と一致しない",
  "設備改修の干渉チェックが困難",
  "工場レイアウト変更の検討に正確な現況データが必要",
  "定期修繕時の配管ルート検討に時間がかかる",
];

const solutions = [
  {
    title: "配管・設備の3Dモデル化",
    desc: "地上レーザースキャナで取得した点群データから、配管・ダクト・設備を3Dモデル化します。既存図面との差異を可視化し、現況を正確に把握。設備改修やレイアウト変更時の干渉チェックをPC上で実施でき、現場での手戻りを大幅に削減します。",
    result: "干渉チェック工数80%削減",
  },
  {
    title: "レイアウト変更シミュレーション",
    desc: "3Dスキャンで取得した工場内の現況データをもとに、設備移設やライン増設のシミュレーションを実施します。搬入経路の確認、天井高・通路幅の検証、ユーティリティ接続の検討まで、計画段階で精度の高い検証が可能です。",
    result: "搬入経路・設備干渉を着工前に可視化",
  },
  {
    title: "定期修繕の事前検討効率化",
    desc: "定期修繕前に対象エリアを3Dスキャンし、配管ルートや仮設足場の設置計画をデジタル上で事前検討します。関係者間での情報共有がスムーズになり、修繕期間中の作業効率が大幅に向上します。",
    result: "停止期間前に配管ルートと仮設計画を共有",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "プラント・工場向け3D測量",
  description: "配管・設備の3Dモデル化、レイアウト変更シミュレーション、定期修繕の事前検討効率化を3D測量で実現するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "プラント・工場向け3D測量",
};

export default function PlantPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="プラント・工場向け3D測量"
        subtitle="FOR PLANT & FACTORY"
        image="/images/solution-plant.jpg"
        breadcrumbItems={[{ name: "プラント・工場向け3D測量", path: "/solution/plant" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            プラント・工場内の複雑な配管や設備を3Dスキャンし、<br className="hidden md:block" />
            正確な現況データで設備改修・レイアウト変更を効率化します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            プラントや工場では、長年の増改築により配管・ダクト・設備が複雑に入り組み、既存図面と実態が一致していないケースが多くあります。
            3Dレーザースキャナで現況を丸ごとデジタル化することで、配管ルートや設備配置を正確に把握。干渉チェックやレイアウト変更の検討をPC上で行えるようになり、計画精度の向上と工期短縮を同時に実現します。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="プラント・工場分野の導入事例"
        introduction="実在する化学工場案件の計測範囲・工程・納品形式を公開しています。概念図と実案件の成果を区別し、数値効果は条件を確認できる事例に限って掲載します。"
        cases={[
          {
            title: "化学工場800㎡の既存配管を3Dモデル化",
            href: "/case/plant-piping",
            category: "導入事例｜化学工場",
            summary: "定期修繕に合わせて既存配管と設備をスキャンし、IFCモデルを作成。新設配管のルートをモデル上で検討しました。",
            result: "スキャン3日＋モデル作成10日、干渉確認工数80%削減",
          },
          {
            title: "敷地高低差をヒートマップ化し排水計画に活用",
            href: "/use-case/site-heatmap",
            category: "活用事例｜外構・排水",
            summary: "工場敷地を面的に計測し、微細な高低差と水の流れを色分け。設備基礎や外構改修の検討資料を作成します。",
          },
          {
            title: "電線・樹木・庇など空中越境物を3Dで把握",
            href: "/use-case/aerial-encroachment",
            category: "活用事例｜上空支障物",
            summary: "搬入経路や設備更新で支障となる上空物を同じ座標系で記録し、平面図だけでは分からない高さと離隔を確認します。",
          },
        ]}
      />

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">プラント・工場でこんな課題はありませんか？</h2>
          </div>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-sm text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SOLUTIONS</span>
            <h2 className="section-title-ja">プラント・工場での3D測量による解決策</h2>
          </div>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                <div className="bg-primary/5 border border-primary/20 rounded px-4 py-3">
                  <p className="text-sm font-bold text-primary">導入効果：{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalGuideSection
        heading="防爆エリアと定期修繕での3D計測実務"
        introduction="プラント計測では、精度より先に安全条件と停止計画を確認します。市販の地上型レーザースキャナを危険場所内で安易に使わず、危険区域外からの長距離計測、ガスフリー化した停止期間、既存開口からの計測など、設備管理者が承認した方法を選びます。"
        guides={[
          {
            title: "防爆エリア外から非接触で計測する",
            lead: "労働安全衛生規則280条は、爆発の危険がある場所で使用する電気機械器具に防爆構造を求めています。レーザースキャナの使用可否は、現場の危険場所区分、機器の認証、作業許可、ガス検知などを設備管理者と確認して決定します。",
            image: "/images/solution-plant-remote-measurement.png",
            imageAlt: "爆発危険場所の外側にレーザースキャナを置いて遠隔計測する概念図",
            caption: "色付きの危険区域には機器を持ち込まず、安全区域から見通せる面を遠隔計測する計画例（概念図）",
            points: [
              { title: "危険場所区分と機器仕様を照合する", body: "0種・1種・2種等の区分、対象ガス、温度等級、現場ルールを確認します。一般の地上型スキャナを『防爆認定機』とみなさず、機器の証明書を設備管理者へ提示して判断を仰ぎます。" },
              { title: "安全区域からの見通しを事前確認する", body: "長距離計測でも、配管や塔槽に遮られた裏側は取得できません。配置図と現場写真から設置候補点を決め、必要な面が見えない場合は停止期間中の追加計測へ分けます。" },
              { title: "作業許可と安全計画を工程に組み込む", body: "入構教育、KY、ガス測定、立会い、電気機器の持込申請、作業範囲の養生を含めます。計測の都合で安全ルールを変更せず、承認された時間と場所の中で計画します。" },
            ],
            note: "当社は『防爆認証を取得したレーザースキャナを使用する』とは一律に案内しません。使用機器と作業方法は、案件ごとの危険場所区分と現場管理者の承認に基づいて決定します。",
            sources: [
              { label: "e-Gov 労働安全衛生規則（第280条）", href: "https://laws.e-gov.go.jp/law/347M50002000032" },
            ],
          },
          {
            title: "定期修繕（SDM）の前に3Dデータを揃える",
            lead: "停止期間に入ってから現場合わせを始めると、配管製作、足場、揚重、作業員配置が競合します。SDM前に現況点群を取得し、改造範囲を関係会社と共有することで、停止期間は施工と検証に集中できます。",
            image: "/images/solution-plant-sdm-timeline.png",
            imageAlt: "プラントの定期修繕前に3Dスキャンを行う工程タイムライン",
            caption: "長い稼働期間中に事前スキャンを行い、短い停止期間へ足場・施工計画を引き渡す流れ（概念図）",
            points: [
              { title: "配管アイソメ図と現況点群を突き合わせる", body: "既存図面を点群へ重ね、改造対象付近のルート、フランジ位置、支持金物、弁、計装品の差異を洗い出します。見えない箇所は推定せず、追加確認リストに分けます。" },
              { title: "必要範囲だけを目的に合うLODでモデル化する", body: "全設備を精密モデル化すると費用と期間が増えます。干渉確認に必要な外形、中心線、接続部、支持部を優先し、施工図や製作図に必要な属性は別途定義します。" },
              { title: "仮設足場・揚重・搬入を同じモデルで確認する", body: "恒久設備だけでなく、足場支柱、作業床、吊り代、搬入物の包絡形状を配置します。施工会社ごとのモデルを統合し、停止期間中の空間競合を事前に確認します。" },
            ],
            sources: [
              { label: "化学工場の配管3D化 導入事例", href: "/case/plant-piping" },
            ],
          },
        ]}
      />

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">プラント・工場向け3D測量の料金目安</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">作業内容</th>
                  <th className="px-4 py-3 text-left">料金目安（税別）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { work: "配管3Dモデル化（1エリア）", price: "40万円〜" },
                  { work: "工場レイアウト測量", price: "50万円〜" },
                  { work: "設備更新の干渉チェック", price: "30万円〜" },
                ].map((row, i) => (
                  <tr key={row.work} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">{row.work}</td>
                    <td className="px-4 py-3 text-gray-700 font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 現場の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      <EditorialMeta pageName="プラント・工場向け3D測量" path="/solution/plant" />

      <FaqSection
        title="プラント・工場の3D測量に関するよくある質問"
        faqs={[
          { q: "稼働中のプラントでも3Dスキャンは可能ですか？", a: "安全区域で設備管理者の許可を得られる範囲は計測できます。ただし危険場所、可動設備、蒸気、振動、立入制限によっては停止期間へ分けます。『非接触だから停止不要』とは一律に判断しません。" },
          { q: "防爆エリア内にレーザースキャナを持ち込めますか？", a: "機器仕様と現場の危険場所区分を照合し、設備管理者が承認した場合に限ります。一般機器は安全区域から使用し、危険区域内はガスフリー化した停止期間の計測等を検討します。" },
          { q: "3Dモデルはどのソフトで活用できますか？", a: "IFC、RVT、DWG、DXF、OBJ等、利用目的に合わせて調整します。PDMSやSmart 3D等へ取り込む場合は、座標系、属性、配管中心線、口径情報の必要範囲を事前に確認します。" },
          { q: "配管モデルは自動で作成できますか？", a: "点群から配管候補を抽出する支援機能はありますが、遮蔽、保温材、複雑な継手、近接配管は人の確認が必要です。干渉確認に必要な範囲とLODを定め、品質確認を行って納品します。" },
          { q: "定期修繕まで時間がありません。優先順位を付けられますか？", a: "はい。改造範囲、接続点、搬入経路、足場干渉など停止期間に直結する箇所を先行処理し、周辺設備は簡略化する段階納品をご提案できます。" },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">プラント・工場の3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            プラント・工場の3D測量について、無料でご相談を承ります。対象エリアの規模・条件をお伺いし、最適な測量方法と概算費用をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
              無料相談を申し込む
            </Link>
            <Link href="/case" className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors">
              導入事例を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
