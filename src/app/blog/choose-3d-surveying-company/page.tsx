import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量業者の選び方｜失敗しない5つのチェックポイント",
  description:
    "3D測量業者の選び方を5つのチェックポイントで解説。保有機器・実績・納品物の対応範囲・見積もりの透明性・アフターサポートを確認することで、自社に合った業者を選べます。比較チェックシート付き。",
  keywords: ["3D測量 業者 選び方", "3D測量 会社 おすすめ", "3D測量 業者 比較", "三次元測量 会社選び"],
  alternates: { canonical: "/blog/choose-3d-surveying-company" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量業者の選び方｜失敗しない5つのチェックポイント",
  description:
    "3D測量業者の選び方を5つのチェックポイントで解説。保有機器・実績・納品物・見積もり・サポート体制の確認方法を紹介。",
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
    "@id": "https://surveysolution.pro/blog/choose-3d-surveying-company",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量業者を選ぶ際に最も重要なポイントは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最も重要なのは「自社の計測目的に合った機器と実績を持っているか」です。高精度な地上レーザースキャナを保有していても、自社と同じ業種・規模の案件実績がなければ、現場で想定外のトラブルが起きるリスクがあります。機器スペックと実績の両方を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の見積もりで注意すべき点はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "見積もりでは「計測費用」と「データ処理費用」が分離されているか、追加費用の発生条件が明記されているかを確認しましょう。一括見積もりの場合、納品物の追加や仕様変更で想定外の費用が発生することがあります。また、交通費・機材運搬費・特殊条件（夜間・高所等）の費用が含まれているかも重要です。",
      },
    },
    {
      "@type": "Question",
      name: "複数の業者から見積もりを取るべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、2〜3社から見積もりを取ることをおすすめします。ただし、金額だけで比較するのは危険です。同じ「3D測量」でも、使用機器・精度保証・納品物の範囲・アフターサポートの有無で内容が大きく異なります。本記事の比較チェックシートを活用し、項目ごとに比較検討してください。",
      },
    },
  ],
};

export default function Choose3DSurveyingCompanyPage() {
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
        as="p"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "3D測量業者の選び方", path: "/blog/choose-3d-surveying-company" },
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
                業者選び
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量業者の選び方｜失敗しない5つのチェックポイント
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-checklist.jpg"
              alt="3D測量業者選びのチェックリスト"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量業者を選ぶ際は、次の5つのチェックポイントを確認しましょう。①保有機器と対応精度、②同業種・同規模の実績、③データ処理・納品物の対応範囲、④見積もりの透明性、⑤アフターサポート体制。</strong>価格だけで業者を選ぶと、精度不足や納品物のミスマッチが起きやすくなります。本記事では、発注前に確認すべきポイントと業者比較チェックシートを紹介します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#failure" className="hover:underline">1. 3D測量業者選びで失敗する3つのパターン</a></li>
                <li><a href="#check1" className="hover:underline">2. チェック1：保有機器と対応精度を確認する</a></li>
                <li><a href="#check2" className="hover:underline">3. チェック2：同業種・同規模の実績があるか</a></li>
                <li><a href="#check3" className="hover:underline">4. チェック3：データ処理・納品物の対応範囲</a></li>
                <li><a href="#check4" className="hover:underline">5. チェック4：見積もりの透明性と追加費用の有無</a></li>
                <li><a href="#check5" className="hover:underline">6. チェック5：アフターサポート体制</a></li>
                <li><a href="#checklist" className="hover:underline">7. 業者比較チェックシート</a></li>
                <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">9. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 失敗パターン */}
            <h2 id="failure" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量業者選びで失敗する3つのパターン
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の業者選定で多い失敗には、共通のパターンがあります。発注前にこれらを知っておくことで、同じ失敗を避けられます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "価格だけで選んで精度が足りなかった",
                  desc: "最安値の業者に依頼したところ、使用機器の精度が用途に対して不十分だったケースです。点群データの密度が低く、必要な図面の精度を満たせなかったため、別の業者に再計測を依頼する羽目になり、結果的にコストが倍以上かかることがあります。",
                },
                {
                  num: "2",
                  title: "納品物が想定と違った",
                  desc: "「3D測量データ」とだけ確認して発注したところ、納品されたのは点群データのみで、必要だったCAD図面やBIMモデルは別料金だったケースです。事前に納品物の種類・ファイル形式・精度保証値を明確にしておかないと、このようなミスマッチが発生します。",
                },
                {
                  num: "3",
                  title: "計測後のサポートがなく活用できなかった",
                  desc: "データは納品されたものの、社内にデータを扱える人材がおらず活用できなかったケースです。点群データの閲覧方法・CADへの取り込み方法・追加計測の対応など、納品後のサポート体制を確認しておくことが重要です。",
                },
              ].map((f) => (
                <div key={f.num} className="flex items-start gap-4 bg-white border border-red-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">{f.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. チェック1 */}
            <h2 id="check1" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              チェック1：保有機器と対応精度を確認する
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の品質は、使用する機器のスペックに直結します。業者に問い合わせる際は、以下の項目を確認しましょう。
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "保有スキャナのメーカー・型番", desc: "Leica RTC360、FARO Focus、Trimble X7など、主要メーカーの現行機種を保有しているか。型番がわかれば公称精度を自分でも確認できます。" },
                { title: "計測精度の保証値", desc: "「±2mm以内」など、成果物としての精度保証値を明示しているかどうか。機器のカタログスペックと実測精度は異なるため、精度保証の有無を確認しましょう。" },
                { title: "対応できる計測手法の幅", desc: "地上レーザースキャン・ドローン測量・ハンドヘルドスキャンなど、複数手法を組み合わせられるか。現場条件に応じて最適な手法を提案できる業者が望ましいです。" },
                { title: "機器のキャリブレーション（校正）状況", desc: "定期的な校正を実施しているか。校正履歴の開示を求めることで、データの信頼性を確認できます。" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">&#10003;</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. チェック2 */}
            <h2 id="check2" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              チェック2：同業種・同規模の実績があるか
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              機器を保有していても、自社と同じ業種・規模の案件経験がなければ、現場で想定外のトラブルが起きる可能性があります。以下の視点で実績を確認しましょう。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "同業種の施工実績", desc: "建設・プラント・建築・インフラなど、自社と同じ業界の計測実績があるか。業種ごとに求められる精度・納品物・安全基準が異なるため、経験の有無が品質に直結します。" },
                { num: "2", title: "同規模の対応実績", desc: "100平方メートルの室内と10,000平方メートルの工場では、計測計画やデータ処理のノウハウが全く異なります。自社案件と近い規模の実績があるか確認しましょう。" },
                { num: "3", title: "納品物のサンプル提示", desc: "過去の成果物（点群データ・CAD図面・3Dモデル等）のサンプルを見せてもらいましょう。データの品質やレベルを事前に確認できます。" },
                { num: "4", title: "顧客の声・導入事例", desc: "WebサイトやHPに掲載されている導入事例や顧客の声を確認し、具体的な成果が記載されているかチェックしましょう。" },
              ].map((f) => (
                <div key={f.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{f.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. チェック3 */}
            <h2 id="check3" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              チェック3：データ処理・納品物の対応範囲
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は「計測して終わり」ではありません。取得した点群データをどこまで加工・活用できるかが、業者の実力を見極めるポイントです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">納品物</th>
                    <th className="px-4 py-3 text-left">内容</th>
                    <th className="px-4 py-3 text-left">確認ポイント</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "点群データ", detail: "座標付き3D点群（LAS/E57/RCP等）", check: "ファイル形式・座標系・密度の指定が可能か" },
                    { item: "CAD図面", detail: "平面図・断面図・立面図（DWG/DXF）", check: "必要な縮尺・レイヤー構成に対応できるか" },
                    { item: "BIM/CIMモデル", detail: "Revit・IFC等の3Dモデル", check: "LOD（詳細度）の指定が可能か" },
                    { item: "オルソ画像", detail: "上空写真の正射変換画像", check: "地上解像度（GSD）の指定が可能か" },
                    { item: "出来形管理帳票", detail: "i-Construction基準の管理図・帳票", check: "国土交通省の基準に準拠しているか" },
                    { item: "3Dビューワ", detail: "ブラウザやアプリで閲覧可能な3Dデータ", check: "社内共有用のビューワ提供があるか" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.detail}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              「点群データだけ納品されても活用方法がわからない」というケースは多いです。自社が最終的に必要とする成果物（図面・モデル・帳票等）まで一貫対応できる業者を選ぶと、複数業者への分割発注の手間とコストを削減できます。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">弊社は点群データ取得からCAD図面・BIMモデル作成まで一貫対応しています。</p>
              <Link href="/about" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                SurveySolutionの強みを見る
              </Link>
            </div>

            {/* 5. チェック4 */}
            <h2 id="check4" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              チェック4：見積もりの透明性と追加費用の有無
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の見積もりは、内訳が不透明だとあとから予想外の追加費用が発生します。見積書を受け取ったら、以下の項目を確認しましょう。
            </p>
            <div className="space-y-3 mb-8">
              {[
                { title: "計測費用とデータ処理費用が分離されているか", desc: "現場スキャンとデータ処理は別工程です。一括表示の場合、追加のデータ処理で想定外の費用が発生しやすくなります。" },
                { title: "交通費・機材運搬費が含まれているか", desc: "遠方の現場では交通費や機材運搬費が大きな金額になることがあります。見積もりに含まれているか、別途請求かを確認しましょう。" },
                { title: "追加費用の発生条件が明記されているか", desc: "計測範囲の変更、天候による再スキャン、納品物の仕様変更など、追加費用が発生する条件が明示されているか確認しましょう。" },
                { title: "納品物の仕様・ファイル形式が明記されているか", desc: "点群のファイル形式（LAS/E57/RCP等）、CADの縮尺・レイヤー構成、BIMのLODなど、成果物の仕様が見積書に記載されているか確認しましょう。" },
                { title: "特殊条件の費用が明示されているか", desc: "夜間作業・高所作業・粉塵環境・狭隘部など、特殊条件下での計測には追加費用が発生します。該当する場合は事前に確認しましょう。" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">&#10003;</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. チェック5 */}
            <h2 id="check5" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              チェック5：アフターサポート体制
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量データは納品後に活用してこそ価値があります。以下のサポート体制が整っている業者を選びましょう。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "データ活用支援", desc: "点群データの閲覧方法、CADやBIMソフトへの取り込み方法など、社内でデータを活用するためのサポートがあるか。操作説明会やマニュアルの提供があると安心です。" },
                { num: "2", title: "追加計測への対応", desc: "「追加でこの箇所も計測してほしい」「定期的に計測して経年変化を管理したい」といったニーズに柔軟に対応できるか。継続的な取引を前提とした対応力は重要です。" },
                { num: "3", title: "データの修正・追加加工", desc: "納品後に「図面の追加作成」「別形式での再出力」「特定箇所の詳細モデリング」などが必要になった場合、追加対応が可能か確認しましょう。" },
                { num: "4", title: "データ保管期間", desc: "計測データの保管期間を確認しましょう。数年後に追加の成果物が必要になった際、元データが残っていれば再計測なしで対応できます。" },
              ].map((s) => (
                <div key={s.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{s.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 7. 比較チェックシート */}
            <h2 id="checklist" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              業者比較チェックシート
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              以下のチェックシートを使って、候補の業者を項目ごとに比較しましょう。2〜3社から見積もりを取り、金額だけでなく総合的に評価することが重要です。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-center">A社</th>
                    <th className="px-4 py-3 text-center">B社</th>
                    <th className="px-4 py-3 text-center">C社</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    "保有機器（メーカー・型番）",
                    "精度保証値",
                    "同業種の実績件数",
                    "同規模の実績件数",
                    "点群データ納品",
                    "CAD図面作成対応",
                    "BIM/CIMモデル対応",
                    "見積もり内訳の明確さ",
                    "追加費用の条件提示",
                    "データ活用サポート",
                    "追加計測の対応",
                    "データ保管期間",
                    "合計金額（税別）",
                  ].map((item, i) => (
                    <tr key={item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{item}</td>
                      <td className="px-4 py-3 text-center text-gray-400 border-b">---</td>
                      <td className="px-4 py-3 text-center text-gray-400 border-b">---</td>
                      <td className="px-4 py-3 text-center text-gray-400 border-b">---</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">※上記は比較用テンプレートです。各社の回答を記入してご活用ください。</p>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3D測量業者を選ぶ際に最も重要なポイントは何ですか？", a: "最も重要なのは「自社の計測目的に合った機器と実績を持っているか」です。高精度なスキャナを保有していても、同じ業種・規模の案件経験がなければ、現場でトラブルが起きるリスクがあります。機器スペックと実績の両方を確認しましょう。" },
                { q: "3D測量の見積もりで注意すべき点はありますか？", a: "「計測費用」と「データ処理費用」が分離されているか、追加費用の発生条件が明記されているかを確認しましょう。一括見積もりの場合、納品物の追加で想定外の費用が発生することがあります。交通費・機材運搬費の扱いも重要です。" },
                { q: "複数の業者から見積もりを取るべきですか？", a: "はい、2〜3社から見積もりを取ることをおすすめします。ただし金額だけで比較するのは危険です。使用機器・精度保証・納品物の範囲・サポート体制を総合的に比較しましょう。本記事の比較チェックシートをご活用ください。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 9. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量業者を選ぶ際は、価格だけでなく以下の5つのポイントを総合的にチェックすることが重要です。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">5つのチェックポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• チェック1：保有機器と対応精度（メーカー・型番・精度保証値）</li>
                <li>• チェック2：同業種・同規模の実績（施工事例・サンプル提示）</li>
                <li>• チェック3：データ処理・納品物の対応範囲（点群〜BIMまで一貫対応か）</li>
                <li>• チェック4：見積もりの透明性（内訳・追加費用の条件明示）</li>
                <li>• チェック5：アフターサポート体制（データ活用支援・追加計測対応）</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              2〜3社から見積もりを取り、比較チェックシートを活用して項目ごとに評価しましょう。弊社では、計測から図面・BIMモデル作成まで一貫対応し、納品後のデータ活用サポートも行っています。業者選定でお悩みの方は、お気軽にご相談ください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              業者選びでお悩みなら、まずはご相談を
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              計測目的・対象物をお伝えいただければ、最適な計測手法と概算費用をご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/about"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                会社概要を見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-vs-traditional-surveying" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較
              </Link>
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
