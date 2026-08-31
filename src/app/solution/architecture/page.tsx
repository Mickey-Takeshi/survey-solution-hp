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
  title: "建築・リノベーション向け3D測量｜図面がない建物の現況図作成・BIM化",
  description:
    "既存建物の3Dスキャンによる現況図作成・BIMモデル化サービス。図面のない建物でもレーザースキャンで高精度な現況図を作成し、リノベーション設計を支援します。図面作成期間75%削減・現況図精度±3mmの実績。京都・関西全域対応。",
  keywords: [
    "既存建物 3Dスキャン",
    "リノベ 現況図",
    "建築 3D測量",
    "BIM 既存建物",
    "現況図面 作成",
    "建物 レーザースキャン",
  ],
  alternates: { canonical: "/solution/architecture" },
};

const challenges = [
  "図面のない既存建物のリノベーション計画を進めたい",
  "建物の現況を正確に把握したいが、手作業の実測では限界がある",
  "BIMモデルを作りたいが、既存建物のデータがない",
  "手作業の実測に時間がかかりすぎて、設計着手が遅れている",
];

const solutions = [
  {
    title: "図面のない建物の現況図作成",
    desc: "既存建物の3Dスキャンとは、レーザースキャナで建物内外の形状を高精度に計測し、点群データから平面図・断面図・立面図を自動生成する技術です。図面が残っていない建物でも、現況をそのまま正確に図面化します。従来の手作業実測と比較して、計測漏れや寸法誤差を大幅に削減できます。",
    result: "現況図作成の作業時間を従来比75%削減",
  },
  {
    title: "既存建物のBIM化",
    desc: "3Dスキャンで取得した点群データをもとに、Revit・ArchiCAD等のBIMモデルを作成します。柱・梁・壁・開口部などの建築要素を正確にモデリングし、リノベーション設計のベースデータとして活用できます。設計段階での干渉チェックにより、施工時の手戻りを大幅に削減します。",
    result: "BIM活用による設計手戻り50%削減",
  },
  {
    title: "建物傾斜・変位の高精度測定",
    desc: "レーザースキャナによる3D計測で、建物全体の傾斜や変位を面的に測定します。精度は機器からの距離、入射角、表面材、基準点配置によって変わるため、要求精度に合わせて計測条件を設計します。報告書の作成まで一貫して対応します。",
    result: "既存建物の現況図作成案件で±3mmの精度を確保",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "建築・リノベーション向け3D測量",
  description: "既存建物の3Dスキャンによる現況図作成、BIMモデル化、建物傾斜調査を行うサービス。図面のない建物でも高精度な現況データを提供します。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "建築・リノベーション向け3D測量",
};

export default function ArchitecturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="建築・リノベーション向け3D測量"
        subtitle="FOR ARCHITECTURE"
        image="/images/solution-architecture.jpg"
        breadcrumbItems={[{ name: "建築・リノベーション向け3D測量", path: "/solution/architecture" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            図面がない建物でも、3Dスキャンで<br className="hidden md:block" />
            高精度な現況図・BIMモデルを作成します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            既存建物の3Dスキャンとは、レーザースキャナで建物の形状を丸ごと計測し、正確な図面やBIMモデルを作成する技術です。
            図面が残っていない建物のリノベーション計画、既存建物のBIM化、建物の傾斜・変位調査など、建築分野の測量課題を3D測量技術で解決します。
            手作業の実測では数日かかる作業を、3Dスキャンなら数時間で完了。計測漏れのない高精度なデータを提供いたします。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="建築・リノベーション分野の導入事例"
        introduction="建物の規模、計測範囲、作図レベルを明示した事例です。図面作成期間や精度の数値は、下記の個別案件で確認できる条件付き実績として掲載しています。"
        cases={[
          {
            title: "築50年のオフィスビルを3Dスキャンして現況図を作成",
            href: "/case/renovation",
            category: "導入事例｜リノベーション",
            summary: "図面が残っていない延床約2,000㎡の建物を2日で計測し、平面図・立面図・断面図とBIMモデルを作成しました。",
            result: "図面作成4週間→1週間、現況図精度±3mm",
          },
          {
            title: "図面のない建物の平面図・立面図等を作製",
            href: "/use-case/as-built-drawings",
            category: "活用事例｜現況図",
            summary: "増改築の履歴を含む現況を点群で記録し、平面・断面・立面を同じデータから作図。後日の追加寸法確認にも使える状態で納品します。",
          },
          {
            title: "床の不陸を面的なヒートマップで可視化",
            href: "/use-case/floor-levelness",
            category: "活用事例｜不陸調査",
            summary: "限られた測点だけでなく床面全体を評価し、補修範囲やレベル調整の検討に使える色分け図と数値データを作成します。",
          },
          {
            title: "建物全体の傾きを外壁面から定量化",
            href: "/use-case/building-tilt",
            category: "活用事例｜傾斜調査",
            summary: "面データから鉛直方向との差を評価し、測線ごとの結果とカラーマップを作成。再計測時に比較できる基準も残します。",
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
            <h2 className="section-title-ja">建築・リノベーションでの3D測量による解決策</h2>
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
        heading="図面がない建物の現況把握と傾斜調査の実務"
        introduction="建築向けの3D計測では、見える面を高密度に取得できる一方、天井裏・床下・パイプスペースなどレーザーが届かない範囲は計測できません。計測範囲と図面上の表現を先に合意し、調査目的に必要な情報だけを確実に揃えます。"
        guides={[
          {
            title: "増改築を繰り返した建物で『現況』を定義する",
            lead: "現況図の精度を高める第一歩は、作図範囲を明確にすることです。仕上げ面、躯体面、設備を含むか、閉鎖空間をどう表現するかを決めずに計測すると、点群が精細でも設計に使えない図面になります。",
            image: "/images/solution-architecture-scan-coverage.png",
            imageAlt: "建物断面におけるレーザースキャナの計測可能範囲と死角",
            caption: "レーザーが届く範囲と、天井裏・床下・PSなど遮蔽される範囲の違い（概念図）",
            points: [
              { title: "図面の基準面を決める", body: "壁の仕上げ面か躯体面か、柱型や巾木をどこまで表現するか、図面縮尺と必要寸法を打合せます。BIM化する場合は、モデル要素とLODも同時に決めます。" },
              { title: "不可視部は推定と実測を分ける", body: "天井裏や床下を点検口から追加計測できる場合でも、すべてが見えるとは限りません。未計測、既存図参照、目視確認、推定を図面上で区別し、確定情報と混同しないようにします。" },
              { title: "確認申請・既存不適格調査の役割を分ける", body: "3D計測は現況形状の資料を提供しますが、法適合性の判断は建築士や特定行政庁の領域です。必要な部位・寸法・変位を専門家と相談し、判断に使える基礎資料として整えます。" },
            ],
            sources: [
              { label: "関連記事：図面がない建物の解決方法", href: "/blog/no-drawings-solution" },
            ],
          },
          {
            title: "傾斜・変位調査で参照される基準を混同しない",
            lead: "建築基準法12条の定期報告制度は、建築物等の劣化や不具合を定期に調査・報告する制度です。告示282号には調査項目と判定基準がありますが、建物傾斜を3/1000・6/1000で判定する数値基準ではありません。",
            image: "/images/solution-architecture-tilt-standard.svg",
            imageAlt: "建物の傾斜と告示1653号の3段階の参考区分",
            caption: "告示1653号の区分は、一定条件の住宅紛争処理で瑕疵の可能性を考えるための参考基準です（図は区分を整理した概念図）。",
            points: [
              { title: "3/1000・6/1000の出典", body: "数値区分は平成12年建設省告示第1653号『住宅紛争処理の参考となるべき技術的基準』です。新築時に建設住宅性能評価書が交付された住宅など、告示が定める適用範囲があります。" },
              { title: "既存建物では参考値として慎重に扱う", body: "既存建物の用途、構造、経過年数、計測部位が告示の条件と異なる場合、数値だけで瑕疵や安全性を断定できません。構造設計者・建築士等の判断に必要な測定データを提供します。" },
              { title: "経年比較は同じ条件で行う", body: "初回計測時に基準点、座標系、測線、対象面、機器設定を記録します。次回も同じ条件で計測し、機器誤差と実変位を切り分けられるようにします。" },
            ],
            note: "SurveySolutionが監修するのは計測手法とデータ処理です。耐震性、法適合性、瑕疵の有無は、それぞれの資格者・専門家が総合的に判断します。",
            sources: [
              { label: "国土交通省 建築基準法に基づく定期報告制度", href: "https://www.mlit.go.jp/jutakukentiku/build/jutakukentiku_house_tk_000039.html" },
              { label: "国土交通省 平成12年建設省告示第1653号", href: "https://www.mlit.go.jp/notice/noticedata/sgml/2000/26aa0995/26aa0995.html" },
            ],
          },
        ]}
      />

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">建築・リノベーション向け3D測量の料金目安</h2>
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
                  { work: "現況図面作成（住宅）", price: "15万円〜" },
                  { work: "現況図面作成（中規模ビル）", price: "50万円〜" },
                  { work: "BIMモデル作成", price: "50万円〜" },
                  { work: "建物傾斜調査", price: "15万円〜" },
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
            ※ 建物の規模・構造・作業条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      <EditorialMeta pageName="建築・リノベーション向け3D測量" path="/solution/architecture" />

      <FaqSection
        title="建築・リノベーションの3D測量に関するよくある質問"
        faqs={[
          { q: "図面がまったく残っていない建物でも対応できますか？", a: "はい。内外部を複数地点から計測し、点群を統合して平面図・立面図・断面図を作成します。ただし天井裏や床下など見えない範囲は計測できないため、未計測部や推定部を区別して納品します。" },
          { q: "BIMモデルはどのソフトウェアに対応していますか？", a: "Revit、ArchiCAD、Vectorworks等への取り込みを想定した形式や、IFCでの納品に対応します。ソフト名だけでなくバージョン、座標、モデル要素、LODを着手前に確認します。" },
          { q: "入居者がいる建物でもスキャンできますか？", a: "可能です。個人情報が写る写真データの扱い、居室ごとの入室時間、共用部の通行確保を管理者と調整します。人や動く家具は点群ノイズになるため、短時間の立入制限をお願いする場合があります。" },
          { q: "建築基準法12条の調査として傾斜を判定できますか？", a: "当社は傾斜量を計測し、図表や点群データを提供します。法12条調査の判定や構造安全性の診断は、特定建築物調査員や建築士等の専門領域です。3/1000・6/1000は法12条の数値基準ではありません。" },
          { q: "同じ建物を再計測して変化を追えますか？", a: "はい。初回の基準点、座標系、測線、対象面を記録し、同じ条件で再計測します。温度や仮設物など環境差を確認したうえで、時系列の差分図を作成します。" },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">建築・リノベーションの3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            図面のない建物の現況図作成やBIM化について、無料でご相談を承ります。建物の規模・用途をお伺いし、最適な測量方法と概算費用をご提案いたします。
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
