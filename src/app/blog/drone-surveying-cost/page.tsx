import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ドローン測量の費用相場は20万〜40万円｜面積別料金表と内訳を解説",
  description:
    "【2026年7月更新】ドローン測量（UAV測量）の費用相場を面積別の料金表で解説。1フライト（10ha以内）20万〜40万円が目安。費用の内訳、地上レーザーとの比較、安く抑える3つのコツまで土地家屋調査士が紹介します。",
  keywords: ["ドローン測量 費用", "ドローン測量 費用 相場", "ドローン測量 費用 内訳", "UAV測量 価格", "ドローン測量 地上レーザー 比較", "ドローン測量 料金"],
  alternates: { canonical: "/blog/drone-surveying-cost" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "ドローン測量の費用相場は20万〜40万円｜面積別料金表と内訳を解説",
  description: "ドローン測量の費用相場を面積別の料金表で解説。費用の内訳と地上レーザースキャンとのコスト・精度・用途の違いを比較。",
  datePublished: "2026-02-17",
  dateModified: "2026-07-23",
  author: { "@type": "Person", name: "齋藤 大輔", jobTitle: "代表取締役・土地家屋調査士" },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: { "@type": "ImageObject", url: "https://surveysolution.pro/images/logo.png" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://surveysolution.pro/blog/drone-surveying-cost" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ドローン測量と地上レーザー、どちらを選べばよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "判断基準は明確です。広域（1ha以上）の地形測量や土量計算にはドローン、建物・構造物の高精度計測（±1〜3mm）や狭所計測には地上レーザーが向いています。両手法を組み合わせるハイブリッド計測も可能です。弊社では現場条件に応じて最適な手法をご提案しています。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量の費用を安く抑えるコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "主に3つあります。①計測範囲を必要最小限に絞る、②定期測量は年間契約にする、③複数現場をまとめて依頼する。加えて、標定点（GCP）の設置を自社で行えるなら、その分の費用もカットできます。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量はi-Construction（アイコンストラクション）に対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対応しています。国土交通省の「UAVを用いた出来形管理要領」に準拠した計測・データ処理を行い、出来形管理帳票の作成まで一括対応します。弊社は土地家屋調査士が在籍しており、測量精度の担保にも自信があります。",
      },
    },
  ],
};

export default function DroneSurveyingCostPage() {
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
          { name: "ドローン測量の費用", path: "/blog/drone-surveying-cost" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-02-17" className="text-sm tracking-wider text-gray-500">2026.02.17</time>
              <time dateTime="2026-07-23" className="text-sm tracking-wider text-gray-500">（2026.07.23更新）</time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">費用・相場</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              ドローン測量の費用相場は20万〜40万円｜面積別料金表と内訳を解説
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-drone-aerial.jpg"
              alt="ドローン測量の空撮イメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>ドローン測量の費用は1フライト（10ha以内）で20万〜40万円、地上レーザースキャンは1日（500㎡以内）で30万〜60万円が目安です（税別）。</strong>ドローンは広域の地形把握、地上レーザーは構造物の高精度計測にそれぞれ強みがあります。現場条件で最適な手法は変わるので、両者の費用感をしっかり把握しておくことが大切です。ここでは面積別の費用相場と費用の内訳、コスト・精度・用途の違いを比較表で整理しました。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#drone-cost" className="hover:underline">1. ドローン測量の費用相場｜面積別の料金目安</a></li>
                <li><a href="#cost-breakdown" className="hover:underline">2. ドローン測量費用の内訳｜何にいくらかかるのか</a></li>
                <li><a href="#laser-cost" className="hover:underline">3. 地上レーザースキャンの費用相場</a></li>
                <li><a href="#comparison" className="hover:underline">4. ドローン vs 地上レーザー｜コスト・精度・用途を徹底比較</a></li>
                <li><a href="#drone-fit" className="hover:underline">5. ドローン測量が向いているケース</a></li>
                <li><a href="#laser-fit" className="hover:underline">6. 地上レーザーが向いているケース</a></li>
                <li><a href="#cost-down" className="hover:underline">7. 費用を抑えるためのポイント</a></li>
                <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">9. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. ドローン測量の費用相場 */}
            <h2 id="drone-cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン測量の費用相場｜面積別の料金目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン測量（UAV測量）の費用は、計測面積・必要精度・納品物の種類で変わります。面積帯別の目安を見ていきましょう。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">計測面積</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">フライト回数</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "1ha以下", price: "15万〜25万円", flight: "1回", use: "小規模造成地・駐車場" },
                    { area: "1〜5ha", price: "20万〜35万円", flight: "1〜2回", use: "宅地開発・太陽光発電用地" },
                    { area: "5〜10ha", price: "30万〜45万円", flight: "2〜3回", use: "土木現場・道路工事" },
                    { area: "10〜30ha", price: "40万〜70万円", flight: "3〜5回", use: "大規模造成・河川敷" },
                    { area: "30ha以上", price: "個別見積もり", flight: "5回以上", use: "鉱山・森林・メガソーラー" },
                  ].map((row, i) => (
                    <tr key={row.area} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.area}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.flight}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-4">※上記はオルソ画像＋点群データ納品の場合の目安です。標定点（GCP）設置費用を含みます。</p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              上記に加え、データ処理の内容によって追加費用がかかります。主な追加成果物の費用感はこちらです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">追加成果物</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "3D地形モデル（DSM/DTM）", price: "5万〜15万円" },
                    { item: "等高線図・断面図作成", price: "5万〜10万円" },
                    { item: "土量計算書", price: "5万〜15万円" },
                    { item: "出来形管理帳票（i-Con対応）", price: "10万〜20万円" },
                    { item: "縦横断図作成", price: "10万〜20万円" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 2. 費用の内訳 */}
            <h2 id="cost-breakdown" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン測量費用の内訳｜何にいくらかかるのか
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン測量の見積もりは、大きく5つの項目で構成されます。1〜5haの現場（総額25万〜35万円）を例に、内訳の目安を示します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">費用項目</th>
                    <th className="px-4 py-3 text-left">内容</th>
                    <th className="px-4 py-3 text-left">構成比の目安</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "フライト費用", desc: "機体運用・操縦者の人件費・保険料", ratio: "30〜40%" },
                    { item: "標定点（GCP）設置・検測", desc: "精度を担保する基準点の設置と測量", ratio: "15〜20%" },
                    { item: "データ処理費", desc: "写真解析・点群生成・オルソ画像作成", ratio: "25〜35%" },
                    { item: "成果品作成費", desc: "図面・報告書などの納品物作成", ratio: "10〜15%" },
                    { item: "諸経費", desc: "交通費・飛行申請などの事務手続き", ratio: "5〜10%" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.desc}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.ratio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ポイントは、フライトそのものよりデータ処理と精度管理（GCP）に費用がかかる点です。「飛ばすだけなら安い」という広告価格には、点群処理や図面化が含まれていないケースがあります。見積もりを比べるときは、納品物がどこまで含まれるかを必ず確認してください。
            </p>

            {/* 3. 地上レーザースキャンの費用相場 */}
            <h2 id="laser-cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              地上レーザースキャンの費用相場
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              地上レーザースキャン（TLS）の費用は、スキャン箇所数・対象面積・精度要件で決まります。規模別の目安はこちら。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">対象規模</th>
                    <th className="px-4 py-3 text-left">スキャン箇所数</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scale: "小規模（〜200㎡）", scan: "5〜10箇所", price: "20万〜35万円", use: "1室・小規模店舗" },
                    { scale: "中規模（200〜500㎡）", scan: "10〜25箇所", price: "30万〜60万円", use: "ワンフロア・小規模建物" },
                    { scale: "大規模（500〜2,000㎡）", scan: "25〜60箇所", price: "50万〜100万円", use: "ビル全体・工場棟" },
                    { scale: "特大（2,000㎡以上）", scan: "60箇所以上", price: "個別見積もり", use: "プラント・大型施設" },
                  ].map((row, i) => (
                    <tr key={row.scale} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.scale}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.scan}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">※点群データ納品の場合の目安です。CAD図面・BIMモデル作成は別途費用が発生します。</p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              地上レーザーの場合、スキャン箇所数が費用に直結します。配管が入り組んだプラントなど複雑な形状ではスキャン箇所が跳ね上がるので、事前の現地調査で正確な見積もりを出してもらうのが鉄則です。
            </p>

            {/* 3. 比較表 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン vs 地上レーザー｜コスト・精度・用途を徹底比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン測量と地上レーザースキャンを6つの項目で比べてみます。どちらが優れているかではなく、現場条件に合った使い分けがポイントです。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                    <th className="px-4 py-3 text-left">地上レーザースキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "費用（標準的な計測）", drone: "20万〜40万円", laser: "30万〜60万円" },
                    { item: "計測精度", drone: "±2〜5cm", laser: "±1〜3mm" },
                    { item: "得意な計測面積", drone: "1ha〜数十ha（広域）", laser: "〜2,000㎡（中小規模）" },
                    { item: "現場作業時間", drone: "半日〜1日", laser: "1日〜数日" },
                    { item: "主な用途", drone: "地形測量・土量計算・現況把握", laser: "建物・構造物・プラントの高精度計測" },
                    { item: "i-Construction対応", drone: "UAV出来形管理に対応", laser: "地上型の出来形管理に対応" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.drone}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.laser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              実際の現場では、広い面積を効率よく測るならドローン、ミリメートル精度が欲しい構造物には地上レーザーという使い分けが定番です。最近は両手法を組み合わせた「ハイブリッド計測」も増えていて、広域はドローン、構造物周辺は地上レーザーで補完するパターンが好評です。
            </p>

            {/* 4. ドローン測量が向いているケース */}
            <h2 id="drone-fit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン測量が向いているケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              次のような現場条件なら、ドローン測量のコストパフォーマンスが際立ちます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "広域の地形測量（1ha以上）", desc: "造成工事・道路工事・河川敷など、広い範囲の地形を面で把握したいなら断然ドローン。地上レーザーでは数日かかるエリアを、半日〜1日でカバーできます。1haあたりのコストでもドローンが有利です。" },
                { num: "2", title: "定期的な出来形管理", desc: "i-Construction対応の出来形管理を月1回ペースで行うなら、ドローンの効率は抜群。初回にフライトプランを組めば、2回目以降は同条件で飛ばすだけ。工程間の比較もスムーズです。" },
                { num: "3", title: "土量計算・進捗管理", desc: "切土・盛土の土量算出には、ドローンで取得した3D地形モデル（DSM/DTM）が威力を発揮します。従来のTS測量による断面法と違い、面的に計算できるので精度もアップ。" },
                { num: "4", title: "人が立ち入りにくい現場", desc: "法面・崖・災害現場など、人が近づけない場所こそドローンの出番です。上空から安全に計測でき、足場やロープアクセスも不要。安全コストの削減にもつながります。" },
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">ドローン測量・地上レーザーの費用を具体的に知りたい方は、無料見積もりをご利用ください。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを依頼する
              </Link>
            </div>

            {/* 5. 地上レーザーが向いているケース */}
            <h2 id="laser-fit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              地上レーザーが向いているケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              逆に、次のような条件では地上レーザースキャンの方が向いています。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "ミリメートル精度が求められる計測", desc: "建物の現況図面作成、プラントの配管モデル化、構造物の変位計測など、±1〜3mmの高精度が必要なら地上レーザー一択。ドローンの±2〜5cmでは届かない精度域です。" },
                { num: "2", title: "屋内・建物内部の計測", desc: "建物内部・トンネル内・工場棟内など、ドローンが飛べない屋内空間は地上レーザーの独壇場。360度スキャンで天井・壁・床を含む空間全体を丸ごと取得できます。" },
                { num: "3", title: "BIM/CIMモデルの作成", desc: "既存建物のBIM化（スキャンtoBIM）にはミリメートル精度の点群データが欠かせません。RevitやArchiCADへのインポートに耐える精度を出すなら、地上レーザースキャンです。" },
                { num: "4", title: "構造物の経年変化・変位モニタリング", desc: "橋梁・ダム・擁壁のひび割れ進行や変位を定量的に追うには、ミリメートル単位の差分検出ができる地上レーザーが頼りになります。" },
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

            {/* 6. 費用を抑えるためのポイント */}
            <h2 id="cost-down" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用を抑えるためのポイント
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン・地上レーザーのどちらでも、次の3つを押さえておけば費用を抑えられます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "計測範囲と精度要件を事前にはっきりさせる", desc: "現場でよくあるのが「念のため広めに」「できるだけ高精度で」という曖昧な依頼。これが過剰計測と費用増の原因になります。設計・施工に本当に必要な範囲と精度を事前に整理して伝えるだけで、見積もりはグッと引き締まります。ドローンで十分なのに地上レーザーを選んでしまうケースも少なくありません。" },
                { title: "定期測量は年間・複数回契約にする", desc: "出来形管理のように月1回・工程ごとの計測が必要なら、単発より年間契約が断然お得。フライトプラン・基準点の使い回しで初期コストも削減できます。弊社では定期契約で最大20%のコストダウンを実現した実績があります。" },
                { title: "複数現場の一括依頼・近隣現場のまとめ計測", desc: "同日に複数現場を回れれば、移動・セットアップのコストを分散できます。近隣エリアに複数の現場があるなら、まとめ依頼で1現場あたりの費用が下がります。同業者との共同依頼も一考の価値ありです。" },
              ].map((c, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "ドローン測量と地上レーザー、どちらを選べばよいですか？", a: "判断基準は明確です。広域（1ha以上）の地形測量や土量計算にはドローン、建物・構造物の高精度計測（±1〜3mm）や屋内計測には地上レーザー。両手法を組み合わせるハイブリッド計測という選択肢もあります。弊社では現場条件を伺った上で最適な手法をご提案しています。" },
                { q: "ドローン測量の費用を安く抑えるコツはありますか？", a: "主に3つあります。計測範囲を必要最小限に絞ること、定期測量は年間契約にすること、複数現場をまとめて依頼すること。加えて、標定点（GCP）の設置を自社で行えるなら、その分の費用もカットできます。" },
                { q: "ドローン測量はi-Construction（アイコンストラクション）に対応できますか？", a: "対応しています。国土交通省の「UAVを用いた出来形管理要領」に準拠した計測・データ処理を行い、出来形管理帳票の作成まで一括対応。弊社は土地家屋調査士が在籍しており、測量精度の担保にも自信があります。" },
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
              ドローン測量と地上レーザースキャンは、どちらも3D測量の主力手法。ただし、得意領域がはっきり分かれています。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">費用相場の目安：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• ドローン測量：1フライト（10ha以内）で20万〜40万円</li>
                <li>• 地上レーザースキャン：1日（500㎡以内）で30万〜60万円</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">選定のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 広域の地形測量・土量計算 → ドローン測量</li>
                <li>• 構造物の高精度計測・BIM化 → 地上レーザー</li>
                <li>• 広域＋高精度が両方必要 → ハイブリッド計測</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              最適な手法と正確な費用を知るには、計測対象・面積・精度要件を整理した上で見積もりを取るのが一番です。弊社では土地家屋調査士がヒアリングから担当し、現場に合った最適プランと明瞭な見積もりをお出ししています。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">まずは無料見積もりから</h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              計測対象の面積・用途をお伝えいただければ、最適な手法と概算費用を1〜2営業日でお出しします。
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
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">→ 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント</Link>
              <Link href="/blog/3d-vs-traditional-surveying" className="block text-sm text-primary hover:underline">→ 3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較</Link>
              <Link href="/blog/3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
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
