import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント",
  description:
    "3D測量の費用相場を種類別に解説。地上レーザースキャンは30万円〜、ドローン測量は20万円〜が目安です。料金を左右する5つの要因と、見積もり時に確認すべきポイントを紹介します。",
  keywords: ["3D測量 費用", "3D測量 価格 相場", "3D測量 見積もり", "三次元測量 料金"],
  alternates: { canonical: "/blog/3d-surveying-cost" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント",
  description: "3D測量の費用相場を種類別に解説。地上レーザースキャンは30万円〜、ドローン測量は20万円〜が目安。",
  datePublished: "2026-02-17",
  dateModified: "2026-02-17",
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
      name: "3D測量の費用を安く抑えるコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、あります。①計測範囲を必要最小限に絞る、②精度要件を過剰にしない、③納品物の種類を事前に明確にする、の3点が費用を抑える主なコツです。事前にヒアリングで要件を明確にすることで、無駄のない見積もりが可能になります。",
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
        text: "はい、主に以下のケースで追加費用が発生します。①当初の計測範囲から大幅に拡大した場合、②納品物の種類や仕様を追加・変更した場合、③現地状況により追加スキャンが必要になった場合です。弊社では事前に発生しうる追加費用もお伝えし、透明性のある見積もりを心がけています。",
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
              <time dateTime="2026-02-17" className="text-sm tracking-wider text-gray-500">2026.02.17</time>
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
              <strong>3D測量の費用相場は、地上レーザースキャンで30万〜80万円、ドローン測量で20万〜60万円、データ処理・3Dモデル作成で15万〜50万円が目安です（税別）。</strong>費用は「計測面積」「精度要件」「納品物の種類」「現場条件」「計測回数」の5つの要因で変動します。本記事では、種類別の費用相場と見積もり時に確認すべきポイントを解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#price-table" className="hover:underline">1. 3D測量の種類別 費用相場一覧</a></li>
                <li><a href="#factors" className="hover:underline">2. 費用を左右する5つの要因</a></li>
                <li><a href="#estimate" className="hover:underline">3. 見積もり時に確認すべき5つのポイント</a></li>
                <li><a href="#cost-down" className="hover:underline">4. 費用を抑えるためのコツ</a></li>
                <li><a href="#faq" className="hover:underline">5. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">6. まとめ</a></li>
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
              3D測量の費用は、計測手法と成果物の種類によって大きく異なります。以下に種類別の費用目安をまとめます。
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

            {/* 2. 費用要因 */}
            <h2 id="factors" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用を左右する5つの要因
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の費用は、以下の5つの要因によって変動します。見積もり依頼時にこれらを明確にすると、正確な見積もりが得られます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "計測面積・規模", desc: "計測範囲が広いほど、スキャン箇所が増えるため費用が上がります。100㎡の1室と2,000㎡のビル全体では、費用は3〜5倍の差が出ます。" },
                { num: "2", title: "精度要件", desc: "±1mmの精度が必要な場合と±5cmで十分な場合では、使用機器と計測密度が異なります。高精度ほどスキャン箇所が増え、費用が上がります。" },
                { num: "3", title: "納品物の種類と数", desc: "点群データのみの納品と、CAD図面＋BIMモデル＋干渉チェック報告書まで含む場合では、データ処理の工数が大幅に異なります。" },
                { num: "4", title: "現場条件・アクセス", desc: "狭隘部・高所・粉塵環境・夜間作業など、特殊条件下では計測時間が延び、追加費用が発生する場合があります。" },
                { num: "5", title: "計測回数・期間", desc: "出来形管理のような定期計測の場合、月額契約や回数割引が適用できるケースがあります。1回限りの計測より単価を抑えられます。" },
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
                { title: "計測費用とデータ処理費用が分離されているか", desc: "現場スキャンとデータ処理は別工程です。一括表示の場合、追加のデータ処理で想定外の費用が発生することがあります。" },
                { title: "納品物の仕様が明記されているか", desc: "ファイル形式（LAS/E57/RCP等）、座標系、精度保証値が見積もりに明記されているか確認しましょう。" },
                { title: "追加費用の発生条件が明確か", desc: "計測範囲の変更、追加スキャン、データ修正の費用がどのように計算されるか事前に確認しましょう。" },
                { title: "スケジュールと納期が明示されているか", desc: "現場スキャンからデータ納品までの期間を確認します。急ぎの場合、特急料金が発生することがあります。" },
                { title: "実績・対応機器が開示されているか", desc: "同種の計測実績があるか、使用する機器のスペックが明示されているかを確認しましょう。" },
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
                { title: "計測範囲を必要最小限に絞る", desc: "「念のため全体を計測」ではなく、設計・検討に必要な範囲を事前に明確にすることで、スキャン箇所と処理時間を削減できます。" },
                { title: "精度要件を適切に設定する", desc: "全ての箇所でミリメートル精度は不要です。用途に応じた精度設定で、計測時間と処理コストを最適化できます。" },
                { title: "複数業務をまとめて依頼する", desc: "出来形管理のような定期計測は、月額契約や年間契約にすることで単価を抑えられます。図面作成とBIMモデル作成をセットで依頼するのも有効です。" },
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
                { q: "3D測量の費用を安く抑えるコツはありますか？", a: "はい、あります。①計測範囲を必要最小限に絞る、②精度要件を過剰にしない、③納品物の種類を事前に明確にする、の3点が費用を抑える主なコツです。" },
                { q: "見積もりにはどのくらい時間がかかりますか？", a: "対象面積・場所・納品物をお伝えいただければ、通常1〜2営業日で概算見積もりをご提示します。現地調査が必要な場合は、調査後3営業日以内に詳細見積もりをお出しします。" },
                { q: "追加費用が発生するケースはありますか？", a: "はい、主に①当初の計測範囲から大幅に拡大した場合、②納品物の種類や仕様を追加・変更した場合、③現地状況により追加スキャンが必要になった場合です。弊社では事前に発生しうる追加費用もお伝えしています。" },
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
              3D測量の費用は、計測手法・面積・精度・納品物によって大きく異なります。
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
              正確な費用を知るには、対象面積・精度要件・納品物を明確にした上で見積もりを依頼するのが最も確実です。弊社では無料で見積もりをお出ししていますので、お気軽にご相談ください。
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
              <Link href="/blog/drone-surveying-cost" className="block text-sm text-primary hover:underline">→ ドローン測量の費用はいくら？地上レーザーとのコスト比較</Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
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
