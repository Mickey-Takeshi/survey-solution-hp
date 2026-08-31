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
  title: "インフラ維持管理向け3D計測｜橋梁・トンネルの点検と経年比較",
  description:
    "インフラ維持管理の点検・経年比較に使う3D形状データを提供。地下街接続検討や災害現況図の実例をもとに、計測計画、断面図、差分図、点群データを作成します。診断は道路管理者・点検技術者の領域です。",
  keywords: [
    "橋梁点検 3D",
    "トンネル 断面測量",
    "インフラ点検 3Dスキャン",
    "変状記録 3D",
    "経年変化 3D比較",
    "橋梁 レーザースキャン",
  ],
  alternates: { canonical: "/solution/infrastructure" },
};

const challenges = [
  "橋梁点検の変状記録を効率化したい",
  "トンネル断面の変位を定量的に管理したい",
  "点検作業の安全性を向上させたい",
  "経年変化を3Dデータで比較管理したい",
];

const solutions = [
  {
    title: "橋梁の形状記録・点検支援データ",
    desc: "3Dレーザースキャンで見通せる範囲の形状データを取得し、点検技術者が指定した変状位置や写真番号を同じ座標系で整理します。過去データと同条件で再計測すれば、形状差分を点検・補修計画の基礎資料として利用できます。",
    result: "点検技術者が診断に使う位置・形状データを提供",
  },
  {
    title: "トンネル断面測量の3D化",
    desc: "地上レーザースキャナでトンネル内の形状を計測し、指定測点ごとに設計断面との差分を可視化します。精度は機器、距離、入射角、交通振動、基準点配置で変わるため、要求精度に合わせて計測仕様を決めます。",
    result: "同一座標系の断面図・差分図を作成",
  },
  {
    title: "非接触計測で安全性向上",
    desc: "地上レーザースキャナを安全な設置位置から使用し、見通せる橋脚やトンネル天端の形状を非接触で取得します。遮蔽や入射角によって取得できない面もあるため、近接目視や必要な足場を置き換えるものではなく、作業範囲を絞る支援データとして用います。",
    result: "必要な近接作業の範囲を絞るための事前情報を提供",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "インフラ点検向け3D測量",
  description: "橋梁・トンネルなどのインフラ構造物を3Dスキャンし、変状記録の効率化と経年変化の定量管理を実現するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "インフラ点検向け3D測量",
};

export default function InfrastructurePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="インフラ維持管理向け3D計測"
        subtitle="FOR INFRASTRUCTURE"
        image="/images/solution-infrastructure.jpg"
        breadcrumbItems={[{ name: "インフラ点検向け3D測量", path: "/solution/infrastructure" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            橋梁・トンネルの点検を3D化し、<br className="hidden md:block" />
            変状記録の効率化と経年変化の定量管理を実現します。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            インフラ構造物の維持管理には、変状の正確な記録と経年変化の把握が不可欠です。
            3Dレーザースキャンにより、橋梁やトンネルの形状データを高精度に取得し、変状の位置・規模・進行状況を3Dモデル上で一元管理します。
            非接触計測で高所作業を削減し、安全性と点検精度の両立を実現いたします。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="インフラ周辺での計測・図面化事例"
        introduction="当社サイト上に橋梁・トンネル点検の実案件はまだ掲載していません。そのため、実績を装わず、地下構造と災害現場で実施した『形状把握・座標統合・図面化』の経験を示します。"
        cases={[
          {
            title: "地下街と敷地建物の接続部を同一座標系で検討",
            href: "/use-case/underground-connection",
            category: "活用事例｜地下構造",
            summary: "営業時間外に地下街と建物地下を計測し、既存構造の位置関係を統合。接続部の干渉確認に使う3Dデータと図面を作成しました。",
          },
          {
            title: "災害現場の現況図・断面図を作成",
            href: "/use-case/disaster-survey",
            category: "活用事例｜災害対応",
            summary: "危険区域への立入りを抑えつつ、被災形状を面的に取得。復旧計画や災害査定に使う現況図・断面図へ展開しました。",
          },
        ]}
      />

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">インフラ点検でこんな課題はありませんか？</h2>
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
            <h2 className="section-title-ja">インフラ点検での3D測量による解決策</h2>
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
        heading="道路橋点検とトンネル断面管理における3Dデータの位置づけ"
        introduction="3D計測会社の役割は、健全性を診断することではなく、点検技術者と道路管理者が判断できる位置・形状データを提供することです。必要な近接目視や触診を置き換えると断定せず、点検要領と現場条件に沿って補助データの範囲を決めます。"
        guides={[
          {
            title: "道路橋定期点検の診断を支えるデータを提供する",
            lead: "道路橋の定期点検は5年に1回を基本とし、健全性をI〜IVの4段階で診断します。国土交通省は令和6年3月版の定期点検要領を公開し、点検支援技術の性能カタログも継続更新しています。技術の選定と診断は道路管理者・点検技術者が行います。",
            image: "/images/solution-infrastructure-inspection-cycle.png",
            imageAlt: "橋梁の点検、記録、診断、措置を循環させる4段階の概念図",
            caption: "点検・記録・診断・措置を繰り返し、次回点検へ情報を引き継ぐ流れ（概念図）",
            points: [
              { title: "変状位置を同じ座標系へ整理する", body: "点検技術者が確認したひび割れ、剥離、漏水等について、写真番号・部材番号・位置を点群や3Dモデルへ紐づけます。レーザースキャンだけで微細な変状を自動判定するものではありません。" },
              { title: "見えない面と精度限界を明示する", body: "桁裏、支承周辺、河川上など設置位置から見えない面は欠測になります。入射角が浅い面や交通振動の影響も品質記録へ残し、診断資料の適用範囲を明確にします。" },
              { title: "長寿命化修繕計画へ渡せる形式にする", body: "部材単位のID、写真、2D図面、断面、点群、差分結果を既存台帳に合わせて整理します。次回計測で同じ基準を再現できるよう、基準点と計測条件を保存します。" },
            ],
            note: "健全性I〜IVの判定、補修要否、点検方法の決定は道路管理者・点検技術者の領域です。当社は測量・点群処理・図面化の範囲で支援します。",
            sources: [
              { label: "国土交通省 道路の老朽化対策（道路橋定期点検要領）", href: "https://www.mlit.go.jp/road/sisaku/yobohozen/yobohozen.html" },
              { label: "国土交通省 点検支援技術性能カタログ", href: "https://www.mlit.go.jp/road/sisaku/inspection-support/" },
            ],
          },
          {
            title: "トンネル内空断面を同じ条件で経年比較する",
            lead: "設計断面と実測断面を重ねると、建築限界や内空形状の差を測点ごとに確認できます。重要なのは一度の精密さだけでなく、再計測時に同じ座標系・断面位置・抽出条件を再現できることです。",
            image: "/images/solution-infrastructure-tunnel-section.svg",
            imageAlt: "トンネルの設計断面と実測断面を重ねた差分解析図",
            caption: "設計断面を破線、実測断面を実線で重ね、内外の差を色分けする断面図（概念図）",
            points: [
              { title: "断面抽出位置と幅を固定する", body: "測点だけでなく、断面を作る点群の抽出幅、中心線、天端・スプリングラインの定義を記録します。曲線区間では進行方向に直交する断面を作るなど、再現手順を統一します。" },
              { title: "覆工表面の記録と診断を分ける", body: "点群は大きな形状差や変位の基礎資料になりますが、微細ひび割れや浮きの診断には画像、打音、近接目視等が必要です。各データの役割を分けて台帳へ統合します。" },
              { title: "交通規制時間から逆算して設置点を決める", body: "事前踏査で退避場所、車線規制、基準点、設置点間の見通しを確認します。計測密度を上げるために規制時間を無制限に延ばさず、要求成果に必要な最小構成を設計します。" },
            ],
            note: "この図は計測方法を説明する概念図であり、当社の橋梁・トンネル点検実績を示す画像ではありません。実施時は道路管理者・点検受託者の仕様に従います。",
          },
        ]}
      />

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">インフラ点検向け3D測量の料金目安</h2>
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
                  { work: "橋梁3D計測（1橋あたり）", price: "40万円〜" },
                  { work: "トンネル断面測量（100m）", price: "30万円〜" },
                  { work: "擁壁変位測量", price: "20万円〜" },
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
            ※ 構造物の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      <EditorialMeta pageName="インフラ維持管理向け3D計測" path="/solution/infrastructure" />

      <FaqSection
        title="インフラ維持管理の3D計測に関するよくある質問"
        faqs={[
          { q: "3Dスキャンだけで道路橋定期点検を完了できますか？", a: "いいえ。定期点検要領に基づく診断は道路管理者・点検技術者が行い、必要に応じて近接目視、打音、触診等を用います。3D計測は位置・形状・断面・経年比較の補助データを提供します。" },
          { q: "橋梁・トンネルの実績はありますか？", a: "現時点で当社サイトに公開できる橋梁・トンネル点検の実案件はありません。地下街接続や災害現場での形状把握・座標統合・図面化の経験をもとに、仕様と役割分担を確認して対応可否をご案内します。" },
          { q: "トンネル断面の精度はどの程度ですか？", a: "一律の保証値ではなく、要求精度、計測距離、入射角、交通振動、基準点配置、断面抽出幅から決まります。仕様を伺い、試験計測や検証方法を含む計画をご提案します。" },
          { q: "交通規制が必要な箇所でも計測できますか？", a: "道路管理者と点検受託者が定める規制計画の範囲で対応します。当社は必要な設置点・計測時間・退避条件を提示し、承認された条件に従います。規制そのものの許可取得や交通誘導は役割分担を事前に確認します。" },
          { q: "過去データがなくても経年管理を始められますか？", a: "はい。初回を基準データとして、基準点、座標系、測線、断面位置、機器設定、処理条件を記録します。次回以降に同条件で再計測できる仕様書と一緒に納品します。" },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">インフラ点検の3D測量はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            橋梁・トンネルなどインフラ構造物の点検効率化について、無料でご相談を承ります。構造物の種類や規模をお伺いし、最適な計測方法と概算費用をご提案いたします。
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
