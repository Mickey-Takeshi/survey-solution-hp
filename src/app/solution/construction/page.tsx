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
  title: "建設・土木向け3D測量｜出来形管理・土量計算・ICT施工対応",
  description:
    "建設・土木業界向けの3D測量ソリューション。i-Construction基準に準拠した出来形管理、3Dスキャンによる土量計算、法面測量を効率化。作業時間を最大60%削減した実績あり。全国対応。無料見積もり受付中。",
  keywords: [
    "建設 3D測量",
    "土木 3Dスキャン",
    "出来形管理 3D",
    "ICT施工 測量",
    "土量計算 3D",
    "i-Construction 測量",
  ],
  alternates: { canonical: "/solution/construction" },
};

const challenges = [
  "従来測量では広大な現場の出来形管理に時間がかかりすぎる",
  "i-Construction基準への対応方法がわからない",
  "土量計算の精度を上げたいが、手作業では限界がある",
  "法面や急傾斜地の測量が危険で、安全確保にコストがかかる",
];

const solutions = [
  {
    title: "出来形管理の効率化",
    desc: "3Dスキャンで取得した点群データと設計データを比較し、出来形の差分を3D可視化します。i-Construction基準に準拠したデータを納品し、監督員への報告資料としても活用できます。",
    result: "出来形管理の作業時間を従来比60%削減",
  },
  {
    title: "高精度な土量計算",
    desc: "3Dスキャンで造成前後の地形データを取得し、切土・盛土の土量を3Dデータから正確に算出します。メッシュ法・等高線法の両方に対応し、発注者への説明資料も作成します。",
    result: "算出条件と除去処理を記録し、説明可能な土量計算書を作成",
  },
  {
    title: "安全な法面・急傾斜地測量",
    desc: "地上レーザースキャナを活用し、人が立ち入れない急傾斜地の地形データを安全に取得します。断面図・等高線図を自動生成し、防災計画の基礎資料として活用できます。",
    result: "立入範囲を抑えた非接触計測で現場リスクを低減",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "建設・土木向け3D測量",
  description: "i-Construction基準に準拠した出来形管理、土量計算、法面測量を3D測量で効率化するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "建設・土木向け3D測量",
};

export default function ConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="建設・土木向け3D測量"
        subtitle="FOR CONSTRUCTION"
        image="/images/solution-construction.jpg"
        breadcrumbItems={[{ name: "建設・土木向け3D測量", path: "/solution/construction" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            建設・土木現場の測量を3D化し、<br className="hidden md:block" />
            作業時間の削減と精度の向上を同時に実現します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            i-Construction基準への対応、出来形管理の効率化、広大な敷地の土量計算など、建設・土木業界の測量課題を3D測量技術で解決します。
            地上レーザースキャナを現場の条件に応じて最適に活用し、高精度なデータ取得から報告資料の作成まで一貫対応いたします。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="建設・土木分野の導入事例"
        introduction="出来形管理の効果は現場条件と作業範囲を伴って示します。共通ナビからでは分からない、計測対象・納品物・工程の詳細までご確認いただけます。"
        cases={[
          {
            title: "高速道路の盛土工事で出来形管理工数を60%削減",
            href: "/case/highway",
            category: "導入事例｜高速道路",
            summary: "施工延長約500mを月2回計測。従来のTS測量と手作業の帳票作成を、地上レーザースキャンによる面管理へ切り替えました。",
            result: "計測2日→半日、帳票作成3日→1日",
          },
          {
            title: "山林の起伏を非接触で詳細に把握",
            href: "/use-case/mountain-forest-survey",
            category: "活用事例｜地形測量",
            summary: "人が入りにくい急斜面を複数地点から計測し、植生や遮蔽を確認しながら点群を統合。等高線図や断面図の基礎データを作成します。",
          },
          {
            title: "災害現場の現況図・断面図を短納期で作成",
            href: "/use-case/disaster-survey",
            category: "活用事例｜災害対応",
            summary: "二次災害のリスクがある範囲への立入りを抑えつつ、被災形状を面的に記録。復旧計画や災害査定に必要な図面へ展開します。",
          },
        ]}
      />

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">こんな課題はありませんか？</h2>
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
            <h2 className="section-title-ja">建設・土木現場での3D測量による解決策</h2>
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
        heading="i-Construction 2.0と3次元出来形管理の実務"
        introduction="3D計測は、点群を取ること自体ではなく、起工測量・設計照査・施工・出来形検査のどこで使うかを先に定めることで効果が出ます。発注図書と適用要領を確認し、必要精度、座標系、納品形式から逆算して計測計画を組みます。"
        guides={[
          {
            title: "起工測量から完成検査までを一つの座標系でつなぐ",
            lead: "国土交通省は2024年4月にi-Construction 2.0を策定し、2040年度までに建設現場の省人化を少なくとも3割、生産性を1.5倍へ高める目標を示しました。BIM/CIMは2023年度から直轄土木業務・工事で原則適用されており、3次元データを後工程へ引き渡せる設計が重要です。",
            image: "/images/solution-construction-iconstruction-flow.png",
            imageAlt: "起工測量、設計面との比較、完成出来形確認までの3次元測量フロー",
            caption: "現況地形、設計面、完成形を同一座標系で比較する3段階の流れ（概念図）",
            points: [
              { title: "TS出来形と面管理を使い分ける", body: "構造物や工種によって求められる管理方法は異なります。対象工種の出来形管理要領を確認し、計測密度や評価単位を決めます。すべてを点群化するのではなく、検査で説明しやすい方法を選びます。" },
              { title: "提出物から計測仕様を逆算する", body: "監督員との事前協議で、座標系、オリジナル点群、グリッドデータ、設計面との差分、帳票の形式を確定します。現場独自のファイル命名やフォルダ構成も計測前に共有します。" },
              { title: "検査時に再現できる処理記録を残す", body: "植生・重機・仮設物の除去範囲、点群の間引き、TINやメッシュの生成条件を記録します。成果値だけでなく処理条件を残すことで、発注者が土量や出来形の根拠を追えるようにします。" },
            ],
            sources: [
              { label: "国土交通省「i-Construction 2.0」を策定しました", href: "https://www.mlit.go.jp/report/press/kanbo08_hh_001085.html" },
              { label: "国土交通省 BIM/CIM関連基準要領等（令和5年3月）", href: "https://www.mlit.go.jp/tec/tec_fr_000115.html" },
            ],
          },
          {
            title: "土量計算の精度を左右する3つの要素",
            lead: "土量の信頼性は、計測機器の公称精度だけでは決まりません。表面モデルの作り方、対象外物の除去、計測時点の統一が結果を左右します。弊社では条件を計算書に残し、同じデータから再計算できる状態で納品します。",
            image: "/images/solution-construction-volume-method.png",
            imageAlt: "メッシュ法と等高線法による土量計算方法の比較",
            caption: "規則格子で差分を積算するメッシュ法と、等高線間の面積から積算する方法の比較（概念図）",
            points: [
              { title: "目的に合うモデルとピッチを選ぶ", body: "細かいピッチほど常に正確とは限りません。地形の起伏、計測密度、要求精度、データ容量のバランスを取り、メッシュ法・TIN・等高線法の選定理由を明示します。" },
              { title: "植生・仮設物・水面を分類する", body: "草木、重機、資材、足場が残った点群は土量を過大にします。自動分類だけに頼らず断面表示でも確認し、除去した範囲と補間の有無を記録します。" },
              { title: "比較時点と基準面を固定する", body: "造成前後の測量日、工区境界、基準面が異なると差分に施工以外の要因が混ざります。再計測しやすい基準点配置と、工区ごとの締め時点を計画段階で定めます。" },
            ],
            note: "『±3%』などの一律な精度保証は、メッシュピッチ・地表条件・比較範囲を伴わないため掲載していません。必要精度は案件条件を確認して個別に定めます。",
          },
        ]}
      />

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">建設・土木向け3D測量の料金目安</h2>
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
                  { work: "出来形管理（1工区）", price: "30万円〜" },
                  { work: "3Dスキャン＋土量計算", price: "25万円〜" },
                  { work: "法面・急傾斜地の測量", price: "20万円〜" },
                  { work: "3D点群データ＋CAD図面作成", price: "15万円〜" },
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

      <EditorialMeta pageName="建設・土木向け3D測量" path="/solution/construction" />

      <FaqSection
        title="建設・土木の3D測量に関するよくある質問"
        faqs={[
          { q: "i-Constructionの出来形管理要領に合わせて納品できますか？", a: "はい。対象工種と発注図書を確認し、面管理・TS出来形など必要な管理方法、座標系、データ形式、帳票を事前協議したうえで納品します。適用要領は年度や発注機関で異なるため、案件ごとに確認します。" },
          { q: "土量計算の精度はどの程度ですか？", a: "一律の数値ではなく、計測密度、メッシュまたはTINの生成条件、植生・仮設物の除去範囲、基準面によって決まります。見積時に必要精度を伺い、算出条件を記録した計算書をご用意します。" },
          { q: "工事中の現場でも測量できますか？", a: "はい。重機の稼働、搬入動線、朝礼や休工時間を踏まえて計測区画を分けます。動く重機や作業員はノイズになるため、施工管理者と停止時間・立入範囲を調整します。" },
          { q: "急傾斜地や立入制限区域は計測できますか？", a: "安全区域に設置した地上レーザースキャナから見通せる範囲は非接触で計測できます。遮蔽が多い場合は設置点を増やし、それでも見えない範囲は未計測として明示します。現場の安全管理者の指示を優先します。" },
          { q: "監督員との事前協議から支援できますか？", a: "可能です。必要な成果物、検査方法、座標系、ファイル形式、計測時期を整理するための資料を作成し、測量・点群処理の範囲で協議を支援します。" },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">建設・土木の3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            建設・土木現場の測量効率化について、無料でご相談を承ります。現場の規模・条件をお伺いし、最適な測量方法と概算費用をご提案いたします。
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
