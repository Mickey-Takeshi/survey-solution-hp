import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "建物の3D計測とは？費用相場・精度・建築現場での活用シーンを解説",
  description:
    "建物の3D計測とは、レーザースキャナーで建物の形状を点群データとして取得し、図面やBIMモデルに変換する技術です。手法別の精度、規模別の費用相場（15万円〜）、建築現場・建設現場での活用方法を土地家屋調査士が解説します。",
  keywords: [
    "建物 3D計測",
    "建物 3Dスキャン",
    "建築現場 3D計測",
    "建設現場 3D計測",
    "建物 3D計測 費用",
    "建物 レーザースキャン",
  ],
  alternates: { canonical: "/blog/building-3d-scan" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "建物の3D計測とは？費用相場・精度・建築現場での活用シーンを解説",
  description:
    "建物の3D計測の手法別の精度、規模別の費用相場、建築現場・建設現場での活用方法を解説。",
  datePublished: "2026-07-23",
  dateModified: "2026-07-23",
  author: { "@type": "Person", name: "齋藤 大輔", jobTitle: "代表取締役・土地家屋調査士" },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://surveysolution.pro/blog/building-3d-scan" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "図面が残っていない建物でも3D計測できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3D計測は建物の現況をそのままデータ化する技術なので、図面の有無は関係ありません。むしろ図面がない建物の現況図面を復元する手段として、3D計測が最も確実な方法です。計測した点群データから平面図・立面図・断面図を作成できます。",
      },
    },
    {
      "@type": "Question",
      name: "営業中の店舗や稼働中の工場でも計測できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対応可能です。地上型レーザースキャナーは1箇所あたり数分でスキャンが完了するため、営業や操業を止めずに計測できるケースがほとんどです。人の映り込みは後処理のノイズ除去で消せます。夜間・休日の計測にも対応しています。",
      },
    },
    {
      "@type": "Question",
      name: "建物の3D計測にかかる時間はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "現場での計測作業は住宅1棟で半日〜1日が目安です。データ処理と成果物作成を含めた納品までの期間は、住宅なら1〜2週間、中規模ビルで2〜4週間かかります。点群データのみの納品であれば、より短い納期で対応できる場合もあります。",
      },
    },
  ],
};

export default function Building3dScanPage() {
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
          { name: "建物の3D計測とは？", path: "/blog/building-3d-scan" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-07-23" className="text-sm tracking-wider text-gray-500">2026.07.23</time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">基礎知識</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              建物の3D計測とは？費用相場・精度・建築現場での活用シーンを解説
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-building-architecture.jpg"
              alt="建物の3D計測のイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>建物の3D計測とは、レーザースキャナーなどで建物の形状を点群データ（三次元座標の集合）として丸ごと取得し、図面やBIMモデルに変換する技術です。</strong>±1〜3mmの精度で現況をデータ化でき、費用は住宅・小規模店舗で15万〜35万円が目安。図面のない建物の現況把握から、建築現場の施工管理、リノベーション設計まで活用範囲が広がっています。ここでは手法別の精度と費用相場、現場での実際の使われ方をまとめました。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 建物の3D計測とは？｜従来の実測との違い</a></li>
                <li><a href="#methods" className="hover:underline">2. 建物3D計測の3つの手法と精度</a></li>
                <li><a href="#cost" className="hover:underline">3. 建物3D計測の費用相場｜規模別の料金目安</a></li>
                <li><a href="#construction-site" className="hover:underline">4. 建築現場・建設現場での3D計測活用</a></li>
                <li><a href="#deliverables" className="hover:underline">5. 3D計測で作れる成果物</a></li>
                <li><a href="#choose" className="hover:underline">6. 失敗しない計測会社選びの3つのポイント</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 建物の3D計測とは */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              建物の3D計測とは？｜従来の実測との違い
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              建物の3D計測とは、レーザースキャナーで建物の内外を計測し、形状を点群データとして立体的に記録する技術です。従来のメジャーやレーザー距離計による実測が「必要な箇所を1点ずつ測る」のに対し、3D計測は「空間全体を面で丸ごと取得する」点が根本的に違います。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              1回のスキャンで天井・壁・床・柱・梁・設備まで漏れなく記録されるので、「測り忘れたのでもう一度現場へ」という手戻りがなくなります。現地作業は住宅1棟で半日〜1日。弊社の案件では、手作業の実測と比べて図面作成までの期間を75%短縮できています。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">従来の実測</th>
                    <th className="px-4 py-3 text-left">3D計測</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "取得できる情報", a: "測った箇所の寸法のみ", b: "空間全体の形状すべて" },
                    { item: "現地作業時間", a: "住宅1棟で1〜2日", b: "住宅1棟で半日〜1日" },
                    { item: "精度", a: "±5〜10mm（測り方に依存）", b: "±1〜3mm（機器で担保）" },
                    { item: "測り忘れ", a: "再訪問が必要", b: "データ内で後から計測可能" },
                    { item: "記録性", a: "野帳・写真", b: "点群データとして永久保存" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.a}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D計測の基礎となる技術や点群データの仕組みは、<Link href="/blog/3d-surveying" className="text-primary hover:underline">3D測量の総合ガイド</Link>で詳しく解説しています。
            </p>

            {/* 2. 手法と精度 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              建物3D計測の3つの手法と精度
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              建物の3D計測には主に3つの手法があります。求める精度と対象範囲で使い分けるのが基本です。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">手法</th>
                    <th className="px-4 py-3 text-left">精度</th>
                    <th className="px-4 py-3 text-left">得意な対象</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "地上型レーザースキャナー（TLS）", acc: "±1〜3mm", fit: "建物全体の高精度計測、図面・BIM作成の元データ" },
                    { method: "ハンドヘルド型スキャナー（SLAM）", acc: "±5〜30mm", fit: "狭所・階段・小部屋、スピード重視の概況把握" },
                    { method: "ドローン写真測量・LiDAR", acc: "±2〜5cm", fit: "屋根・外壁の高所、建物外構・敷地全体" },
                  ].map((row, i) => (
                    <tr key={row.method} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.method}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.acc}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              実務では、建物内部を地上型レーザーで、屋根や高所をドローンで計測し、1つの点群データに統合する組み合わせが定番です。図面化やBIM化を見据えるなら、元データは±1〜3mm精度の地上型で取得しておくのが安全です。機器の原理や種類は<Link href="/blog/laser-scanner-guide" className="text-primary hover:underline">レーザースキャナーの解説記事</Link>にまとめています。
            </p>

            {/* 3. 費用相場 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              建物3D計測の費用相場｜規模別の料金目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              建物3D計測の費用は、延床面積とスキャン箇所数でほぼ決まります。点群データ納品までの規模別目安です。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">建物規模</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">現地作業</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scale: "住宅・小規模店舗（〜200㎡）", price: "15万〜35万円", work: "半日〜1日" },
                    { scale: "中規模店舗・事務所（200〜500㎡）", price: "30万〜60万円", work: "半日〜1日" },
                    { scale: "ビル・工場棟（500〜2,000㎡）", price: "50万〜100万円", work: "1〜2日" },
                    { scale: "大型施設（2,000㎡以上）", price: "個別見積もり", work: "現地調査の上で算定" },
                  ].map((row, i) => (
                    <tr key={row.scale} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.scale}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.work}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-4">※点群データ納品の場合の目安です。図面化・BIMモデル作成は別途費用がかかります。</p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              現況図面（平面図・立面図・断面図）の作成まで含める場合は、上記に10万〜30万円程度が加わります。料金の内訳や納品物ごとの費用は<Link href="/price" className="text-primary hover:underline">料金ページ</Link>で公開しているので、予算組みの参考にしてください。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">建物の規模と用途をお伝えいただければ、概算費用を1〜2営業日でお出しします。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを依頼する
              </Link>
            </div>

            {/* 4. 建築現場・建設現場での活用 */}
            <h2 id="construction-site" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              建築現場・建設現場での3D計測活用
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              建築現場・建設現場では、工事の各フェーズで3D計測の使いどころがあります。着工前・施工中・竣工後の3段階に分けて見ていきます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "着工前｜現況把握と設計データの整備", desc: "既存建物の増改築や解体を伴う工事では、着工前の現況を3D計測しておくと、設計図と現地の食い違いを事前に発見できます。図面のない既存建物でも、点群データから現況図面を復元可能。弊社では図面作成期間を従来比75%短縮した実績があります。" },
                { num: "2", title: "施工中｜出来形確認と工程記録", desc: "配筋や設備配管など、仕上げ後に隠れてしまう部分を工程ごとにスキャンしておけば、施工記録として永久に残せます。設計BIMと点群を重ねれば、施工誤差の確認も画面上で完結。手戻りの早期発見が品質とコストを守ります。" },
                { num: "3", title: "竣工後｜完成記録とファシリティ管理", desc: "竣工時の3Dデータは、建物のデジタル台帳になります。将来の改修・修繕の検討時に現地調査なしで寸法を確認でき、テナント募集用の図面作成やBIM-FM（施設管理）への展開も可能です。" },
              ].map((c) => (
                <div key={c.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{c.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              土工事を含む現場全体の出来形管理には、ドローン測量との併用が効率的です。使い分けの考え方は<Link href="/blog/drone-surveying-cost" className="text-primary hover:underline">ドローン測量の費用相場の記事</Link>を参考にしてください。
            </p>

            {/* 5. 成果物 */}
            <h2 id="deliverables" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D計測で作れる成果物
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              点群データはあくまで素材です。実務で使う形に加工してはじめて価値が出ます。建物3D計測の代表的な成果物はこちらです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">成果物</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "現況図面（平面図・立面図・断面図）", use: "図面のない建物の復元、リノベーション設計" },
                    { item: "BIMモデル（スキャンtoBIM）", use: "改修設計、干渉チェック、施設管理" },
                    { item: "点群データ（統合・クリーニング済み）", use: "設計事務所・施工会社での寸法確認" },
                    { item: "面積算出書", use: "賃貸借契約、登記、原状回復の根拠資料" },
                    { item: "傾斜・変位レポート", use: "中古建物の傾き調査、経年変化の監視" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              既存建物のBIM化を検討している方は、<Link href="/blog/bim-3d-scan" className="text-primary hover:underline">スキャンtoBIMの解説記事</Link>で工程と費用を詳しく紹介しています。リノベーション前提の計測なら<Link href="/blog/renovation-3d-scan" className="text-primary hover:underline">リノベーション向け3D計測ガイド</Link>が参考になります。
            </p>

            {/* 6. 会社選び */}
            <h2 id="choose" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              失敗しない計測会社選びの3つのポイント
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              建物3D計測の品質は、機材よりも計測計画とデータ処理の技術で差がつきます。依頼前に次の3点を確認してください。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "成果物のサンプルを見せてもらう", desc: "点群データの密度、図面の線のクオリティは会社によって大きく違います。類似案件のサンプル提示を頼めば、仕上がりレベルのミスマッチを防げます。" },
                { title: "測量資格者が精度を管理しているか", desc: "スキャナーは誰でも操作できますが、基準点との整合や精度検証には測量の専門知識が必要です。土地家屋調査士や測量士が品質管理に関わっているかは大事なチェックポイントです。" },
                { title: "見積もりに含まれる範囲を確認する", desc: "「計測費」だけの安い見積もりには、点群の統合処理や図面化が含まれていないことがあります。納品物の形式（点群・図面・BIM）と含まれる作業範囲を、発注前に書面で確認してください。" },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              業者選びの詳しい基準は<Link href="/blog/choose-3d-surveying-company" className="text-primary hover:underline">3D測量業者の選び方の記事</Link>で解説しています。
            </p>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "図面が残っていない建物でも3D計測できますか？", a: "はい、可能です。3D計測は建物の現況をそのままデータ化する技術なので、図面の有無は関係ありません。むしろ図面がない建物の現況図面を復元する手段として最も確実な方法です。詳しくは図面がない建物の解決策の記事もご覧ください。" },
                { q: "営業中の店舗や稼働中の工場でも計測できますか？", a: "対応可能です。地上型レーザースキャナーは1箇所あたり数分でスキャンが完了するため、営業や操業を止めずに計測できるケースがほとんどです。人の映り込みは後処理のノイズ除去で消せます。夜間・休日の計測にも対応しています。" },
                { q: "建物の3D計測にかかる時間はどのくらいですか？", a: "現場での計測作業は住宅1棟で半日〜1日が目安です。データ処理と成果物作成を含めた納品までの期間は、住宅なら1〜2週間、中規模ビルで2〜4週間かかります。点群データのみの納品であれば、より短い納期で対応できる場合もあります。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 8. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              建物の3D計測は、レーザースキャナーで建物全体を±1〜3mmの精度でデータ化し、図面・BIM・面積算出などに展開できる技術です。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 従来実測と違い、空間全体を面で取得するので測り忘れがない</li>
                <li>• 費用は住宅・小規模店舗で20万〜35万円、ビル規模で50万円〜が目安</li>
                <li>• 建築現場では着工前・施工中・竣工後の各フェーズで活用できる</li>
                <li>• 図面化・BIM化まで見据えるなら±1〜3mm精度の地上型レーザーで計測</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              計測をご検討中の方は、まず建物の規模・築年数・欲しい成果物の3点を整理してみてください。この3点が分かれば、正確な見積もりがすぐに出せます。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">建物の3D計測、まずはお気軽にご相談ください</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「図面がない」「まず費用感だけ知りたい」という段階でも大丈夫です。土地家屋調査士が現場条件を伺い、最適な計測プランをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
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
              <Link href="/blog/no-drawings-solution" className="block text-sm text-primary hover:underline">→ 図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現</Link>
              <Link href="/blog/renovation-3d-scan" className="block text-sm text-primary hover:underline">→ リノベーション前の3D計測ガイド｜現況把握で設計の手戻りゼロ</Link>
              <Link href="/blog/bim-3d-scan" className="block text-sm text-primary hover:underline">→ BIMと3Dスキャンの連携方法｜既存建物のBIM化フロー完全ガイド</Link>
              <Link href="/blog/laser-scanner-guide" className="block text-sm text-primary hover:underline">→ レーザースキャナーとは？種類・原理・価格・測量での使い方を解説</Link>
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
