import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "ドローン測量の費用はいくら？地上レーザーとのコスト比較",
  description:
    "ドローン測量（UAV測量）の費用相場を面積別に解説。1フライト（10ha以内）で20万〜40万円が目安。地上レーザースキャンとのコスト・精度・用途の違いを比較表で分かりやすく紹介します。",
  keywords: ["ドローン測量 費用", "UAV測量 価格", "ドローン測量 地上レーザー 比較", "ドローン測量 料金"],
  alternates: { canonical: "/blog/drone-surveying-cost" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "ドローン測量の費用はいくら？地上レーザーとのコスト比較",
  description: "ドローン測量の費用相場を面積別に解説。地上レーザースキャンとのコスト・精度・用途の違いを比較。",
  datePublished: "2026-02-17",
  dateModified: "2026-02-17",
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
        text: "はい、明確な判断基準があります。広域（1ha以上）の地形測量や土量計算にはドローン測量が、建物・構造物の高精度計測（±1〜3mm）や狭所計測には地上レーザーが適しています。両手法を組み合わせるハイブリッド計測も可能です。弊社では現場条件に応じた最適な手法をご提案しています。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量の費用を安く抑えるコツはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、いくつかの方法があります。①計測範囲を必要最小限に絞る、②定期測量は年間契約にする、③複数現場をまとめて依頼する、の3点が費用を抑える主なコツです。また、標定点（GCP）の設置を自社で行える場合は、その分の費用を削減できます。",
      },
    },
    {
      "@type": "Question",
      name: "ドローン測量はi-Construction（アイコンストラクション）に対応できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、対応可能です。国土交通省が定めるi-Constructionの「UAVを用いた出来形管理要領」に準拠した計測・データ処理を行います。出来形管理帳票の作成まで一括でお任せいただけます。弊社は土地家屋調査士が在籍しており、測量精度の担保にも自信があります。",
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
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">費用・相場</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              ドローン測量の費用はいくら？地上レーザーとのコスト比較
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
              <strong>ドローン測量の費用は1フライト（10ha以内）で20万〜40万円、地上レーザースキャンは1日（500㎡以内）で30万〜60万円が目安です（税別）。</strong>ドローン測量は広域の地形把握に、地上レーザーは構造物の高精度計測に強みがあり、現場条件によって最適な手法が異なります。本記事では、両手法の費用相場を面積別に整理し、コスト・精度・用途の違いを比較表で解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#drone-cost" className="hover:underline">1. ドローン測量の費用相場｜面積別の料金目安</a></li>
                <li><a href="#laser-cost" className="hover:underline">2. 地上レーザースキャンの費用相場</a></li>
                <li><a href="#comparison" className="hover:underline">3. ドローン vs 地上レーザー｜コスト・精度・用途を徹底比較</a></li>
                <li><a href="#drone-fit" className="hover:underline">4. ドローン測量が向いているケース</a></li>
                <li><a href="#laser-fit" className="hover:underline">5. 地上レーザーが向いているケース</a></li>
                <li><a href="#cost-down" className="hover:underline">6. 費用を抑えるためのポイント</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
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
              ドローン測量（UAV測量）の費用は、計測面積・必要精度・納品物の種類によって変動します。以下に面積帯別の費用目安をまとめます。
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
              上記に加え、データ処理の種類によって追加費用が発生します。主な追加成果物の費用は以下の通りです。
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

            {/* 2. 地上レーザースキャンの費用相場 */}
            <h2 id="laser-cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              地上レーザースキャンの費用相場
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              地上レーザースキャン（TLS）の費用は、スキャン箇所数・対象面積・精度要件によって変動します。以下に規模別の費用目安をまとめます。
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
              地上レーザーの場合、スキャン箇所数が費用に直結します。対象が複雑な形状（配管が多いプラント等）ではスキャン箇所が増えるため、事前の現地調査による正確な見積もりが重要です。
            </p>

            {/* 3. 比較表 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン vs 地上レーザー｜コスト・精度・用途を徹底比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              ドローン測量と地上レーザースキャンを主要な6項目で比較します。どちらが優れているかではなく、現場条件に応じた使い分けが重要です。
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
              一般的に、広大な面積を効率よく計測したい場合はドローン測量が、ミリメートル精度が求められる構造物の計測には地上レーザーが適しています。両手法を組み合わせた「ハイブリッド計測」も有効で、広域の地形をドローンで取得しつつ、構造物周辺を地上レーザーで補完する方法も増えています。
            </p>

            {/* 4. ドローン測量が向いているケース */}
            <h2 id="drone-fit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローン測量が向いているケース
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              以下のような現場条件では、ドローン測量のコストパフォーマンスが高くなります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "広域の地形測量（1ha以上）", desc: "造成工事・道路工事・河川敷など、広い範囲の地形を面的に把握したい場合に最適です。地上レーザーでは数日かかる範囲を、ドローンなら半日〜1日で計測できます。1haあたりのコストもドローンが有利です。" },
                { num: "2", title: "定期的な出来形管理", desc: "i-Constructionに対応した出来形管理を月1回など定期的に行う場合、ドローン測量は効率的です。フライトプランを初回に設定すれば、2回目以降は同条件で計測でき、工程間の比較も容易になります。" },
                { num: "3", title: "土量計算・進捗管理", desc: "切土・盛土の土量を算出する場合、ドローンで取得した3D地形モデル（DSM/DTM）から高精度に体積計算が可能です。従来のTS測量による断面法と比較して、面的に計算できるため精度が向上します。" },
                { num: "4", title: "人が立ち入りにくい現場", desc: "法面・崖・災害現場など、人が近づくことが困難な場所の測量にドローンは適しています。安全に上空から計測でき、足場やロープアクセスが不要になるため、安全コストの削減にもつながります。" },
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
              以下のような条件では、地上レーザースキャンのほうが適切な選択肢となります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "ミリメートル精度が求められる計測", desc: "建物の現況図面作成、プラントの配管モデル化、構造物の変位計測など、±1〜3mmの高精度が必要な場合は地上レーザーが必須です。ドローン測量の±2〜5cmでは精度が不足するケースに対応します。" },
                { num: "2", title: "屋内・建物内部の計測", desc: "建物内部・トンネル内・工場棟内など、ドローンが飛行できない屋内空間の3D計測は地上レーザーの独壇場です。360度スキャンにより、天井・壁・床を含む空間全体のデータを取得します。" },
                { num: "3", title: "BIM/CIMモデルの作成", desc: "既存建物のBIM化（スキャンtoBIM）では、ミリメートル精度の点群データが必要です。RevitやArchiCADへのインポートに十分な精度を確保するには、地上レーザースキャンが最適です。" },
                { num: "4", title: "構造物の経年変化・変位モニタリング", desc: "橋梁・ダム・擁壁などの構造物のひび割れ進行や変位を定量的にモニタリングする場合、ミリメートル単位の差分検出が可能な地上レーザーが適しています。" },
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
              ドローン測量・地上レーザーのいずれも、以下の3つのポイントを押さえることで費用を最適化できます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { title: "計測範囲と精度要件を事前に明確にする", desc: "「念のため広めに」「できるだけ高精度で」という曖昧な依頼は、過剰な計測につながり費用が膨らみます。設計・施工に本当に必要な範囲と精度を事前に整理し、見積もり依頼時に伝えることで、無駄のない費用に抑えられます。用途がドローンで十分なのに地上レーザーを選定するケースも散見されます。" },
                { title: "定期測量は年間・複数回契約にする", desc: "出来形管理のように月1回・工程ごとなど定期的な計測が必要な場合、単発依頼より年間契約のほうが1回あたりの単価を抑えられます。フライトプラン・基準点の使い回しにより、初期設定コストも削減できます。弊社では定期契約で最大20%のコスト削減実績があります。" },
                { title: "複数現場の一括依頼・近隣現場のまとめ計測", desc: "同日に複数現場を計測する場合、移動・セットアップのコストを分散できます。近隣エリアで複数の現場がある場合は、まとめて依頼することで1現場あたりの費用が下がります。同業者との共同依頼も検討する価値があります。" },
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
                { q: "ドローン測量と地上レーザー、どちらを選べばよいですか？", a: "はい、明確な判断基準があります。広域（1ha以上）の地形測量や土量計算にはドローン測量が、建物・構造物の高精度計測（±1〜3mm）や屋内計測には地上レーザーが適しています。両手法を組み合わせるハイブリッド計測も可能です。弊社では現場条件をヒアリングした上で最適な手法をご提案しています。" },
                { q: "ドローン測量の費用を安く抑えるコツはありますか？", a: "はい、いくつかの方法があります。計測範囲を必要最小限に絞ること、定期測量は年間契約にすること、複数現場をまとめて依頼することの3点が主なコツです。また、標定点（GCP）の設置を自社で行える場合は、その分の費用を削減できます。" },
                { q: "ドローン測量はi-Construction（アイコンストラクション）に対応できますか？", a: "はい、対応可能です。国土交通省が定めるi-Constructionの「UAVを用いた出来形管理要領」に準拠した計測・データ処理を行います。出来形管理帳票の作成まで一括でお任せいただけます。弊社は土地家屋調査士が在籍しており、測量精度の担保にも自信があります。" },
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
              ドローン測量と地上レーザースキャンは、どちらも3D測量の主力手法ですが、得意とする領域が明確に異なります。
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
              最適な手法と正確な費用を知るには、計測対象・面積・精度要件を明確にした上で見積もりを依頼するのが確実です。弊社では土地家屋調査士がヒアリングから対応し、現場条件に応じた最適プランと明瞭な見積もりをご提示しています。
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
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
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
