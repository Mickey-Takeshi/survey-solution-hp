import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量・3Dモデリングの料金相場｜種類別の費用と見積もりのポイント【2026年版】",
  description:
    "3D測量・3Dスキャン・3Dモデリングの料金相場を種類別に解説。地上レーザースキャンは15万円〜、3Dモデリング（BIM）は50万円〜、建物の3D計測は15万円〜が目安。費用を左右する要因と見積もり時のチェックポイントまで網羅。",
  keywords: [
    "3D測量 費用",
    "3D測量 価格 相場",
    "3D 料金 相場",
    "3Dモデリング 料金 相場",
    "3Dモデリング 費用 相場",
    "3Dスキャン 料金",
    "建物 3D計測 料金",
    "リノベーション 3D計測 料金",
    "BIM 料金",
    "点群データ 費用",
    "3D測量 見積もり",
  ],
  alternates: { canonical: "/blog/3d-surveying-cost" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント",
  description: "3D測量の費用相場を種類別に解説。地上レーザースキャンは30万円〜、ドローン測量は20万円〜が目安。",
  datePublished: "2026-02-17",
  dateModified: "2026-08-19",
  author: { "@type": "Person", name: "齋藤 大輔", jobTitle: "代表取締役・土地家屋調査士" },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://surveysolution.pro/blog/3d-surveying-cost" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3Dモデリングの料金・費用相場はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3Dモデリングの費用は、対象物の種類と複雑さで変わります。目安は、点群データから作る簡易メッシュモデルが10万円〜、BIMモデル（Revit・ArchiCAD形式）は50万円〜、配管や設備を含むCIMモデルは80万円〜です。対象の規模と要求精度が上がるほど費用も上がります。",
      },
    },
    {
      "@type": "Question",
      name: "建物の3D計測の料金はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建物の3D計測は、用途と規模で変わります。住宅1棟の現況図面作成は15万円〜30万円、中規模ビル・商業施設の現況計測は50万円〜100万円、工場・倉庫の3Dスキャンは30万円〜80万円が目安です。建物傾斜調査だけなら15万円〜から対応できます。",
      },
    },
    {
      "@type": "Question",
      name: "リノベーション向けの3D計測の料金はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "リノベーション用途の3D計測は15万円〜が目安です。住宅リノベーションの場合は15〜30万円、店舗・オフィスのリノベは30〜60万円。図面がない既存建物でも、3Dスキャンなら正確な現況図面をミリ単位の精度で作成でき、設計の手戻りを大幅に減らせます。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の費用を安く抑えるコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "3つのコツがあります。①計測範囲を必要最小限に絞る、②精度要件を過剰にしない、③納品物の種類を事前にはっきりさせる。事前のヒアリングで要件を整理しておくと、無駄のない見積もりにつながります。",
      },
    },
    {
      "@type": "Question",
      name: "見積もりにはどのくらい時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象面積・場所・納品物をお伝えいただければ、通常1〜2営業日で概算見積もりをご提示します。現地調査が必要な場合は、調査後3営業日以内に詳細見積もりをお出しします。",
      },
    },
    {
      "@type": "Question",
      name: "追加費用が発生するケースはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主に3パターンあります。①当初の計測範囲から大幅に広がった場合、②納品物の種類や仕様を途中で追加・変更した場合、③現地状況で追加スキャンが必要になった場合です。弊社では発生しうる追加費用も事前にお伝えし、透明性のある見積もりを心がけています。",
      },
    },
  ],
};

export default function SurveyingCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHeader
        title="ブログ"
        subtitle="BLOG"
        as="p"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "3D測量の費用相場", path: "/blog/3d-surveying-cost" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-08-19" className="text-sm tracking-wider text-gray-500">2026.08.19 更新</time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">費用・相場</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-cost-estimate.jpg"
              alt="3D測量の費用見積もりイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量の費用相場は、地上レーザースキャンで30万〜80万円、ドローン測量で20万〜60万円、データ処理・3Dモデル作成で15万〜50万円が目安です（税別）。</strong>費用を左右するのは「計測面積」「精度要件」「納品物の種類」「現場条件」「計測回数」の5つ。ここでは種類別の費用感と、見積もりで確認しておきたいポイントを整理します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#price-table" className="hover:underline">1. 3D測量の種類別 費用相場一覧</a></li>
                <li><a href="#use-case-price" className="hover:underline">2. 用途別の料金相場（建物・3Dモデリング・リノベーション）</a></li>
                <li><a href="#factors" className="hover:underline">3. 費用を左右する5つの要因</a></li>
                <li><a href="#estimate" className="hover:underline">4. 見積もり時に確認すべき5つのポイント</a></li>
                <li><a href="#cost-down" className="hover:underline">5. 費用を抑えるためのコツ</a></li>
                <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">7. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 費用相場一覧 */}
            <h2 id="price-table" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の種類別 費用相場一覧
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の費用は、計測手法と成果物の種類で大きく変わります。種類別の費用目安は次の通りです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">種類</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "地上レーザースキャン", price: "30万〜80万円", use: "建物・プラント・構造物の高精度計測" },
                    { type: "ドローン（UAV）測量", price: "20万〜60万円", use: "広域地形・土木現場の面的計測" },
                    { type: "データ処理（点群作成）", price: "10万〜30万円", use: "ノイズ除去・合成・座標変換" },
                    { type: "CAD図面作成", price: "15万〜40万円", use: "平面図・断面図・立面図の作成" },
                    { type: "3Dモデル作成", price: "20万〜50万円", use: "BIM/CIMモデル・配管モデルの構築" },
                    { type: "出来形管理帳票", price: "10万〜20万円", use: "i-Construction基準の管理図・管理表" },
                  ].map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.type}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">※上記は目安金額です。対象面積・精度要件・現場条件により変動します。正確な金額は個別見積もりにてご確認ください。</p>

            {/* 2. 用途別料金相場 */}
            <h2 id="use-case-price" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              用途別の料金相場｜建物・3Dモデリング・リノベーション
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              「自分の用途だといくらかかる？」という疑問に、代表的な3つのケースでお答えします。3Dモデリング、建物の3D計測、リノベーション用途、それぞれの費用感を具体的に整理しました。
            </p>

            {/* 3Dモデリング料金 */}
            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">3Dモデリング（BIM/CIMモデル作成）の料金相場</h3>
            <p className="text-sm leading-loose text-gray-700 mb-4">
              3Dモデリングとは、現場で取得した点群データをもとに、設計・施工に使える立体データを作成する作業です。納品物の種類と複雑さで料金が変わります。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-gray-900">納品物の種類</th>
                    <th className="px-4 py-2 text-left text-gray-900 w-32">料金目安（税別）</th>
                    <th className="px-4 py-2 text-left text-gray-900">内容</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "メッシュモデル（簡易）", price: "10万円〜", desc: "点群データから作るポリゴンメッシュ。形状確認用。" },
                    { type: "サーフェスモデル", price: "20万円〜", desc: "曲面を正確に表現。リバースエンジニアリング向け。" },
                    { type: "BIMモデル（建築）", price: "50万円〜", desc: "Revit・ArchiCAD形式。壁・床・柱・開口部を含む完全なBIM。" },
                    { type: "CIMモデル（土木）", price: "60万円〜", desc: "Civil 3D・InfraWorks対応。地形・構造物を含む3次元設計データ。" },
                    { type: "配管モデル（プラント）", price: "80万円〜", desc: "配管・機器のクラス分類付き。干渉チェック可能。" },
                  ].map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-bold text-gray-900 border-b">{row.type}</td>
                      <td className="px-4 py-2 text-primary font-bold border-b whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-2 text-gray-700 text-xs border-b">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-8">
              建物のBIMモデル作成は、延床面積とディテールの要求度で費用が変わります。住宅1棟なら50万円〜、中規模ビルは100万円〜が目安です。「設計変更の前に現況をBIM化したい」というリノベ・改修用途では、必要な範囲だけに絞ると費用を抑えられます。
            </p>

            {/* 建物3D計測料金 */}
            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">建物の3D計測の料金相場</h3>
            <p className="text-sm leading-loose text-gray-700 mb-4">
              建物を対象にした3D計測は、住宅・ビル・工場などの規模と目的によって費用が大きく変わります。よくあるケースの料金目安は以下の通りです。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-gray-900">対象建物</th>
                    <th className="px-4 py-2 text-left text-gray-900 w-36">料金目安（税別）</th>
                    <th className="px-4 py-2 text-left text-gray-900">主な目的</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "住宅1棟（傾斜調査）", price: "15万円〜", desc: "柱・壁面の傾き計測。不動産取引・瑕疵調査向け。" },
                    { type: "住宅1棟（現況図作成）", price: "15万円〜30万円", desc: "平面図・断面図のCADデータ納品。リノベ設計向け。" },
                    { type: "中規模ビル・商業施設", price: "50万円〜100万円", desc: "延床面積と階数による。改修設計・テナント計画向け。" },
                    { type: "工場・倉庫", price: "30万円〜80万円", desc: "設備・配管を含む全体計測。レイアウト変更向け。" },
                    { type: "文化財・歴史的建造物", price: "30万円〜", desc: "デジタルアーカイブ・修復設計・VR展示向け。" },
                  ].map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-bold text-gray-900 border-b">{row.type}</td>
                      <td className="px-4 py-2 text-primary font-bold border-b whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-2 text-gray-700 text-xs border-b">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-8">
              「建物傾斜調査だけしたい」「図面のない既存建物の現況を把握したい」といった単発ニーズは、15万円〜という比較的低い費用で対応できます。本格的な改修設計やBIM化まで視野に入れる場合は、計測＋3Dモデリングを一括で依頼するほうが、結果的にコスト効率が良くなります。
            </p>

            {/* リノベーション */}
            <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3">リノベーション向け3D計測の料金相場</h3>
            <p className="text-sm leading-loose text-gray-700 mb-4">
              「図面が残っていない古い建物をリノベしたい」というケースで、3D計測が威力を発揮します。ミリ単位の現況データがあれば、設計図面の手戻りがほぼゼロになります。
            </p>
            <div className="bg-gray-50 rounded-lg p-5 mb-6">
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>住宅リノベ（30〜80㎡）：</strong>15万円〜30万円。平面図・断面図・立面図の納品込み。</li>
                <li><strong>店舗・オフィスリノベ（100〜300㎡）：</strong>30万円〜60万円。天井裏・配管ルートも含めた計測。</li>
                <li><strong>ビル・マンション全体リノベ：</strong>80万円〜。階層ごとの現況BIMモデルで改修計画に直結。</li>
              </ul>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              リノベ用途では、3Dスキャン＋CAD図面作成の2点セットが定番。後から「ここも測っておけばよかった」という手戻りがなく、設計者・施主・施工者の認識もそろいます。詳しくは<Link href="/blog/no-drawings-solution" className="text-primary hover:underline">「図面がない建物の現況調査」の記事</Link>もあわせてご覧ください。
            </p>

            {/* 3. 費用要因 */}
            <h2 id="factors" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用を左右する5つの要因
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の費用は、次の5つの要因で上下します。見積もり依頼時にこれらを整理しておくと、精度の高い見積もりが返ってきます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "計測面積・規模", desc: "計測範囲が広ければ、それだけスキャン箇所が増えます。100㎡の1室と2,000㎡のビル全体では、費用に3〜5倍の差が出ることも。" },
                { num: "2", title: "精度要件", desc: "±1mmが必要なケースと±5cmで足りるケースでは、使用機器も計測密度もまるで違います。高精度になるほどスキャン箇所が増え、費用も上がります。" },
                { num: "3", title: "納品物の種類と数", desc: "点群データだけの納品と、CAD図面＋BIMモデル＋干渉チェック報告書まで一式の場合では、データ処理の工数に大きな差が出ます。" },
                { num: "4", title: "現場条件・アクセス", desc: "狭隘部・高所・粉塵環境・夜間作業など、特殊条件が重なると計測時間が延びて追加費用につながります。" },
                { num: "5", title: "計測回数・期間", desc: "出来形管理のような定期計測なら、月額契約や回数割引が使える場合も。単発依頼より単価を抑えられるケースが多いです。" },
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

            {/* 3. 見積もりポイント */}
            <h2 id="estimate" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              見積もり時に確認すべき5つのポイント
            </h2>
            <div className="space-y-3 mb-8">
              {[
                { title: "計測費用とデータ処理費用が分離されているか", desc: "現場スキャンとデータ処理は別工程。一括表示だと、追加のデータ処理で想定外の費用が発生しがちです。" },
                { title: "納品物の仕様が明記されているか", desc: "ファイル形式（LAS/E57/RCP等）、座標系、精度保証値が見積もりに入っているか、必ずチェックしてください。" },
                { title: "追加費用の発生条件が明確か", desc: "計測範囲の変更、追加スキャン、データ修正がどう課金されるか、事前に押さえておきましょう。" },
                { title: "スケジュールと納期が明示されているか", desc: "現場スキャンからデータ納品までの期間を確認。急ぎの場合は特急料金が発生することもあります。" },
                { title: "実績・対応機器が開示されているか", desc: "同種の計測実績があるか、使用機器のスペックが明示されているか。ここは見落としがちなポイントです。" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">弊社では、対象面積・精度要件をお伝えいただければ1〜2営業日で概算見積もりをお出しします。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを依頼する
              </Link>
            </div>

            {/* 4. コスト削減 */}
            <h2 id="cost-down" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用を抑えるためのコツ
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { title: "計測範囲を必要最小限に絞る", desc: "「念のため全体を」ではなく、設計・検討に本当に必要な範囲を事前に決めておく。これだけでスキャン箇所と処理時間をかなり減らせます。" },
                { title: "精度要件を適切に設定する", desc: "すべての箇所でミリメートル精度は要りません。用途に合った精度設定にするだけで、計測時間も処理コストもぐっと下がります。" },
                { title: "複数業務をまとめて依頼する", desc: "出来形管理のような定期計測は、月額・年間契約にすると単価が下がります。図面作成とBIMモデル作成のセット依頼も効果的です。" },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* 5. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3Dモデリングの料金・費用相場はいくらですか？", a: "対象物の種類と複雑さで変わります。目安は、点群データから作る簡易メッシュモデルが10万円〜、BIMモデル（Revit・ArchiCAD形式）は50万円〜、配管や設備を含むCIMモデルは80万円〜です。建物の規模や要求精度が上がるほど費用も上がります。" },
                { q: "建物の3D計測の料金はいくらですか？", a: "用途と規模で変わります。住宅1棟の現況図面作成は15万円〜30万円、中規模ビル・商業施設の現況計測は50万円〜100万円、工場・倉庫の3Dスキャンは30万円〜80万円が目安。建物傾斜調査だけなら15万円〜から対応できます。" },
                { q: "リノベーション向けの3D計測の料金はいくらですか？", a: "リノベ用途の3D計測は15万円〜が目安です。住宅リノベは15〜30万円、店舗・オフィスのリノベは30〜60万円。図面がない既存建物でも、3Dスキャンなら正確な現況図面をミリ単位で作成でき、設計の手戻りを大幅に減らせます。" },
                { q: "3D測量の費用を安く抑えるコツはありますか？", a: "3つのコツがあります。①計測範囲を必要最小限に絞る、②精度要件を過剰にしない、③納品物の種類を事前にはっきりさせる。これだけで見積もりの無駄を大幅にカットできます。" },
                { q: "見積もりにはどのくらい時間がかかりますか？", a: "対象面積・場所・納品物を教えていただければ、通常1〜2営業日で概算をお出しします。現地調査が必要な場合は、調査後3営業日以内に詳細見積もりをご提示します。" },
                { q: "追加費用が発生するケースはありますか？", a: "主に3パターンです。①当初の計測範囲から大幅に広がった場合、②納品物の種類や仕様を途中で追加・変更した場合、③現地状況で追加スキャンが必要になった場合。弊社では、発生しうる追加費用も事前にお伝えするようにしています。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 6. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量の費用は、計測手法・面積・精度・納品物の組み合わせで大きく変わります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">費用相場の目安：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 地上レーザースキャン：30万〜80万円</li>
                <li>• ドローン測量：20万〜60万円</li>
                <li>• データ処理・図面作成：15万〜50万円</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              正確な費用を把握するには、対象面積・精度要件・納品物を整理した上で見積もりを取るのが一番の近道です。弊社は無料で見積もりをお出ししていますので、気軽にお声がけください。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">まずは無料見積もりから</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              対象面積・精度要件をお伝えいただければ、1〜2営業日で概算をお出しします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを依頼する
              </Link>
              <Link href="/price" className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors">
                料金ページを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/service/laser-scan" className="block text-sm font-bold text-primary hover:underline">→ 地上レーザースキャン測量｜機器スペックと計測計画</Link>
              <Link href="/service/point-cloud" className="block text-sm font-bold text-primary hover:underline">→ 点群データ処理｜納品形式と品質管理</Link>
              <Link href="/service/3d-modeling" className="block text-sm font-bold text-primary hover:underline">→ 3Dモデリング・BIM連携｜LODと費用の考え方</Link>
              <Link href="/blog/drone-surveying-cost" className="block text-sm text-primary hover:underline">→ ドローン測量の費用はいくら？地上レーザーとのコスト比較</Link>
              <Link href="/blog/3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
              <Link href="/blog/choose-3d-surveying-company" className="block text-sm text-primary hover:underline">→ 3D測量業者の選び方｜失敗しない5つのチェックポイント</Link>
            </div>
          </div>

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
