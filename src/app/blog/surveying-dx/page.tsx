import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "測量DXの進め方｜中小建設会社が始める3つのステップ",
  description:
    "測量DXとは、3Dスキャナ・ドローン・クラウドなどのデジタル技術で測量業務の生産性を向上させる取り組みです。中小建設会社でも3ステップで無理なく始められる具体的な進め方を、成功事例・補助金情報とともに解説します。",
  keywords: ["測量 DX", "建設DX 測量", "測量 デジタルトランスフォーメーション", "i-Construction 測量"],
  alternates: { canonical: "/blog/surveying-dx" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "測量DXの進め方｜中小建設会社が始める3つのステップ",
  description:
    "測量DXとは、3Dスキャナ・ドローン・クラウドなどのデジタル技術で測量業務の生産性を向上させる取り組みです。中小建設会社でも3ステップで無理なく始められる進め方を解説。",
  datePublished: "2026-02-17",
  dateModified: "2026-02-17",
  author: {
    "@type": "Person",
    name: "齋藤 大輔",
    jobTitle: "代表取締役・土地家屋調査士",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://surveysolution.pro/blog/surveying-dx",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "測量DXにはどのくらいの費用がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "外注から始める場合、初期投資はゼロで1案件20万〜80万円程度です。自社設備を導入する場合は3Dレーザースキャナで500万〜1,500万円、ドローン一式で200万〜500万円が目安ですが、IT導入補助金やものづくり補助金を活用すれば実質負担を1/2〜2/3に抑えられます。",
      },
    },
    {
      "@type": "Question",
      name: "ITに詳しい社員がいなくても測量DXは始められますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、始められます。ステップ1の外注活用であれば、社内にIT人材は不要です。ステップ2のデータ活用段階でも、点群ビューワソフトの操作は1〜2日の研修で習得できます。弊社では導入後の操作研修・サポートも提供しています。",
      },
    },
    {
      "@type": "Question",
      name: "測量DXを始めるのに最適なタイミングはいつですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "i-Constructionの適用拡大と2024年問題による人手不足が進む今が最適なタイミングです。国土交通省は2025年度までに小規模工事を含む全公共工事でICT活用を原則化する方針を示しており、早期に取り組む企業ほど公共工事の受注で優位に立てます。",
      },
    },
  ],
};

export default function SurveyingDxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "測量DXの進め方", path: "/blog/surveying-dx" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-02-17" className="text-sm tracking-wider text-gray-500">
                2026.02.17
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                DX推進
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              測量DXの進め方｜中小建設会社が始める3つのステップ
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-office-dx.jpg"
              alt="測量DX推進のイメージ - オフィス"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>測量DX（デジタルトランスフォーメーション）とは、3Dスキャナ・ドローン・クラウドなどのデジタル技術を活用し、測量業務の生産性を向上させる取り組みです。</strong>中小建設会社でも、(1)3D測量の外注から始める、(2)データ活用の社内体制を整える、(3)段階的に自社設備を導入する、の3ステップで無理なく進められます。本記事では、DX推進を検討中の経営者・管理者の方に向けて、具体的な進め方を成功事例・補助金情報とともに解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 測量DXとは？なぜ今必要なのか</a></li>
                <li><a href="#steps" className="hover:underline">2. 中小建設会社の測量DX｜3つのステップ</a></li>
                <li><a href="#effects" className="hover:underline">3. 測量DXで得られる4つの効果</a></li>
                <li><a href="#cases" className="hover:underline">4. 測量DXの成功事例</a></li>
                <li><a href="#subsidy" className="hover:underline">5. DX推進で活用できる補助金・助成金</a></li>
                <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">7. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 測量DXとは */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              測量DXとは？なぜ今必要なのか
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              測量DXとは、3Dレーザースキャナ・ドローン・GNSS・クラウドなどのデジタル技術を測量業務に導入し、作業効率・データ品質・安全性を根本的に変革する取り組みです。従来の紙図面・手作業中心のワークフローを、デジタルデータを軸としたプロセスに転換します。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              中小建設会社にとって測量DXが急務となっている背景には、3つの構造的課題があります。
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">i-Constructionの本格適用</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省は2025年度までに小規模工事を含む全公共工事でICT活用を原則化する方針です。3次元データの納品が標準となり、従来のTS（トータルステーション）測量だけでは対応が困難になりつつあります。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">2024年問題と人手不足の深刻化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  建設業の時間外労働上限規制の適用により、限られた人員・時間で成果を出す必要があります。国土交通省の調査では、建設技能者の約35%が55歳以上で、今後10年間で大量退職が見込まれます。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">デジタル技術の低価格化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  3Dスキャナやドローンの価格が5年前と比較して30〜50%低下し、中小企業でも導入しやすい環境が整いました。クラウド型の点群処理ソフトも月額数万円から利用可能です。
                </p>
              </div>
            </div>

            {/* 2. 3つのステップ */}
            <h2 id="steps" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              中小建設会社の測量DX｜3つのステップ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              測量DXは「一度に全てを変える」必要はありません。以下の3ステップで段階的に進めることで、リスクを抑えながら着実に成果を得られます。
            </p>

            {/* ステップ1 */}
            <div className="bg-primary/5 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <h3 className="text-lg font-bold text-gray-800">ステップ1：3D測量の外注から始める</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                最初のステップは、3D測量を専門会社に外注することです。自社で機材を購入する必要がなく、初期投資ゼロでDXの効果を体感できます。
              </p>
              <div className="bg-white rounded-lg p-4 mb-3">
                <p className="text-sm font-bold text-gray-800 mb-2">外注で始めるメリット：</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>・ 設備投資リスクがゼロ。1案件20万〜80万円の外注費のみ</li>
                  <li>・ 専門オペレーターによる高品質なデータが得られる</li>
                  <li>・ 3Dデータの活用イメージを社内で共有できる</li>
                  <li>・ 自社に合う計測手法（レーザー/ドローン）を見極められる</li>
                </ul>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                まずは1〜2案件でトライアルし、従来測量との工数差・データ品質の違いを実感することが重要です。弊社では初回無料相談で、貴社の現場に最適な計測手法をご提案しています。
              </p>
            </div>

            {/* ステップ2 */}
            <div className="bg-primary/5 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <h3 className="text-lg font-bold text-gray-800">ステップ2：データ活用の社内体制を整える</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                外注で3Dデータの効果を実感したら、次は社内でデータを活用できる体制を構築します。この段階でも高額な機材購入は不要です。
              </p>
              <div className="bg-white rounded-lg p-4 mb-3">
                <p className="text-sm font-bold text-gray-800 mb-2">体制構築の具体的アクション：</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>・ 点群ビューワソフトの導入（無料ソフトから開始可能）</li>
                  <li>・ DX推進担当者の選任（1〜2名）と操作研修の実施</li>
                  <li>・ データ管理ルールの策定（ファイル命名規則・保存先の統一）</li>
                  <li>・ 現場と事務所間のデータ共有フローの整備</li>
                </ul>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                点群ビューワの操作は1〜2日の研修で習得できます。担当者が3Dデータ上で距離計測・断面抽出・土量算出をできるようになれば、外注先とのやり取りもスムーズになり、DX推進が加速します。
              </p>
            </div>

            {/* ステップ3 */}
            <div className="bg-primary/5 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <h3 className="text-lg font-bold text-gray-800">ステップ3：段階的に自社設備を導入する</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                社内のデータ活用体制が整い、3D測量の案件数が増えてきたら、自社設備の導入を検討します。年間の外注費と設備投資額を比較し、投資回収の見通しを立てた上で判断します。
              </p>
              <div className="bg-white rounded-lg p-4 mb-3">
                <p className="text-sm font-bold text-gray-800 mb-2">設備投資の目安：</p>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  <li>・ 3Dレーザースキャナ：500万〜1,500万円</li>
                  <li>・ 測量用ドローン一式：200万〜500万円</li>
                  <li>・ 点群処理ソフト：年間30万〜100万円</li>
                  <li>・ オペレーター育成研修：30万〜50万円</li>
                </ul>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                補助金を活用すれば実質負担を1/2〜2/3に抑えられます。また、リース契約を利用すれば月額10万〜30万円で導入可能です。年間の3D測量案件が5件以上あれば、外注より自社保有が有利になるケースが多いです。
              </p>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">「自社に合ったDXの進め方が分からない」という方へ。現状の業務をヒアリングし、最適なステップをご提案します。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 3. 4つの効果 */}
            <h2 id="effects" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              測量DXで得られる4つの効果
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              測量DXを推進することで、以下の4つの効果が期待できます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "測量工数を最大80%削減",
                  desc: "3Dスキャナは1秒間に100万点以上を計測し、従来のTS測量と比較して現場作業時間を1/3〜1/5に短縮します。さらに、データ上で後から任意箇所の寸法を確認できるため、再測量のための現場戻り作業も不要になります。",
                },
                {
                  num: "2",
                  title: "データ品質の飛躍的向上",
                  desc: "面的に取得した点群データは、手作業の実測と比較して計測漏れ・転記ミスが発生しません。精度は地上レーザースキャナで±1〜3mm。設計の手戻り削減にも直結します。",
                },
                {
                  num: "3",
                  title: "現場の安全性向上",
                  desc: "非接触計測により、高所・法面・老朽構造物など危険箇所への立入りを最小化できます。ドローンを併用すれば、足場や高所作業車なしで屋根・外壁のデータを取得可能です。",
                },
                {
                  num: "4",
                  title: "i-Construction対応と受注力強化",
                  desc: "3次元データの納品に対応することで、ICT活用工事の受注要件を満たせます。国土交通省の総合評価落札方式では、ICT活用が加点項目となっており、公共工事の受注競争で優位に立てます。",
                },
              ].map((e) => (
                <div key={e.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{e.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{e.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. 成功事例 */}
            <h2 id="cases" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              測量DXの成功事例
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              実際に測量DXに取り組んだ中小建設会社の事例を紹介します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">事例1</span>
                  <h3 className="text-lg font-bold text-gray-800">土木工事会社A社（従業員25名・関東）</h3>
                </div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 font-bold text-gray-900 border-b w-28">課題</td>
                        <td className="px-4 py-2 text-gray-700 border-b">i-Construction対応の公共工事を受注したいが、3D測量の経験・設備がなかった</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">取り組み</td>
                        <td className="px-4 py-2 text-gray-700 border-b">ステップ1として3D測量を外注。3案件の実績を積んだ後、ステップ2でビューワソフト導入・担当者2名を育成</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">成果</td>
                        <td className="px-4 py-2 text-gray-700 border-b">ICT活用工事を年間4件受注。測量工数を従来比60%削減。現場戻り作業がほぼゼロに</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">期間</td>
                        <td className="px-4 py-2 text-gray-700 border-b">開始から成果実感まで約6か月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">事例2</span>
                  <h3 className="text-lg font-bold text-gray-800">建築会社B社（従業員15名・東北）</h3>
                </div>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full text-sm border-collapse">
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 font-bold text-gray-900 border-b w-28">課題</td>
                        <td className="px-4 py-2 text-gray-700 border-b">リノベーション案件の既存図面作成に毎回3〜5日かかり、人手不足で対応しきれなかった</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">取り組み</td>
                        <td className="px-4 py-2 text-gray-700 border-b">3Dレーザースキャンを外注し、点群データから図面を作成するフローに変更。半年後に中古スキャナをリース導入</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">成果</td>
                        <td className="px-4 py-2 text-gray-700 border-b">図面作成期間を5日から1.5日に短縮。年間の受注可能件数が1.8倍に増加</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 font-bold text-gray-900 border-b">期間</td>
                        <td className="px-4 py-2 text-gray-700 border-b">開始から自社設備導入まで約8か月</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5. 補助金 */}
            <h2 id="subsidy" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              DX推進で活用できる補助金・助成金
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              測量DXの設備投資・ソフトウェア導入には、以下の補助金・助成金を活用できます。申請には事業計画書の作成が必要ですが、採択されれば実質負担を大幅に軽減できます。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">補助金名</th>
                    <th className="px-4 py-3 text-left">補助率</th>
                    <th className="px-4 py-3 text-left">上限額</th>
                    <th className="px-4 py-3 text-left">対象例</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "IT導入補助金", rate: "1/2〜3/4", limit: "450万円", target: "点群処理ソフト、クラウドサービス、タブレット" },
                    { name: "ものづくり補助金", rate: "1/2〜2/3", limit: "1,250万円", target: "3Dスキャナ、ドローン、処理用PC" },
                    { name: "事業再構築補助金", rate: "1/2〜2/3", limit: "1,500万円", target: "DXによる新事業展開（3D測量サービスの立ち上げ等）" },
                    { name: "小規模事業者持続化補助金", rate: "2/3", limit: "200万円", target: "ソフトウェア導入、研修費用" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.name}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.rate}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.limit}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">※補助金の要件・上限額は年度・申請枠により異なります。最新情報は各補助金の公式サイトをご確認ください。</p>

            {/* 6. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "測量DXにはどのくらいの費用がかかりますか？",
                  a: "外注から始める場合、初期投資はゼロで1案件20万〜80万円程度です。自社設備を導入する場合は3Dレーザースキャナで500万〜1,500万円、ドローン一式で200万〜500万円が目安ですが、補助金を活用すれば実質負担を1/2〜2/3に抑えられます。",
                },
                {
                  q: "ITに詳しい社員がいなくても測量DXは始められますか？",
                  a: "はい、始められます。ステップ1の外注活用であれば、社内にIT人材は不要です。ステップ2のデータ活用段階でも、点群ビューワソフトの操作は1〜2日の研修で習得できます。弊社では導入後の操作研修・サポートも提供しています。",
                },
                {
                  q: "測量DXを始めるのに最適なタイミングはいつですか？",
                  a: "i-Constructionの適用拡大と2024年問題による人手不足が進む今が最適です。国土交通省は2025年度までに全公共工事でICT活用を原則化する方針を示しており、早期に取り組む企業ほど受注で優位に立てます。",
                },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 7. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              測量DXは、中小建設会社でも段階的に進めることで確実に成果を得られる取り組みです。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 測量DXは「外注→社内体制構築→自社設備導入」の3ステップで無理なく進められる</li>
                <li>・ 外注からのスタートなら初期投資ゼロ。リスクなく3Dデータの効果を体感できる</li>
                <li>・ 測量工数の最大80%削減、データ品質向上、安全性向上、i-Construction対応の4つの効果がある</li>
                <li>・ IT導入補助金やものづくり補助金を活用すれば、設備投資の実質負担を1/2〜2/3に軽減可能</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              i-Constructionの拡大と人手不足が加速する中、測量DXへの取り組みは早いほど競争優位につながります。まずは1案件の3D測量外注から、第一歩を踏み出してみてください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              測量DXのご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「何から始めればいいか分からない」という段階でも大丈夫です。貴社の現状に合ったDXの進め方をご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/service"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                サービス一覧を見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/labor-shortage-solution" className="block text-sm text-primary hover:underline">→ 測量の人手不足を解決する3つの方法</Link>
              <Link href="/blog/i-construction-3d-surveying" className="block text-sm text-primary hover:underline">→ i-Construction対応の3D測量</Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
            </div>
          </div>

          {/* 記事ナビ */}
          <div className="mt-8 pt-8 border-t">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <span>&larr;</span>
              <span>ブログ一覧に戻る</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
