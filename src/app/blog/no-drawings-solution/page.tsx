import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現",
  description:
    "図面がない建物の現況図を作る最も効率的な方法は3Dレーザースキャンです。±2〜3mmの精度で計測し、点群データから平面図・断面図・BIMモデルを作成。手作業の実測と比較して図面作成期間を75%短縮できます。",
  keywords: ["図面がない 現況図 作成", "古い建物 図面起こし", "現況図面 作成方法", "3Dスキャン 図面作成"],
  alternates: { canonical: "/blog/no-drawings-solution" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現",
  description:
    "図面がない建物の現況図を3Dレーザースキャンで作成する方法を解説。精度・費用・期間の目安と手作業実測との比較。",
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
    "@id": "https://surveysolution.pro/blog/no-drawings-solution",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "図面がまったくない建物でも現況図は作れますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、作れます。3Dレーザースキャンは既存の図面がなくても、建物の現状を±2〜3mmの精度で計測し、点群データから平面図・断面図・立面図・BIMモデルを作成できます。竣工図が紛失した建物や、増改築を繰り返した建物でも対応可能です。",
      },
    },
    {
      "@type": "Question",
      name: "現況図の作成にはどのくらいの期間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "延床面積500㎡程度の建物の場合、現場スキャンに1日、データ処理・図面作成に5〜7営業日、合計で約1〜2週間が目安です。面積が大きい場合や成果物の種類が多い場合は、2〜4週間程度かかります。",
      },
    },
    {
      "@type": "Question",
      name: "入居者がいる状態でもスキャンできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3Dレーザースキャナは非接触・無粉塵で計測するため、入居者やテナントが営業中でもスキャンできます。騒音もほとんどなく、1箇所あたり数分で計測が完了するため、業務への影響を最小限に抑えられます。",
      },
    },
  ],
};

export default function NoDrawingsSolutionPage() {
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
          { name: "図面がない建物の現況図を作る方法", path: "/blog/no-drawings-solution" },
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
                課題解決
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-building-architecture.jpg"
              alt="図面がない既存建物のイメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>図面がない建物の現況図を作る最も効率的な方法は、3Dレーザースキャンです。</strong>建物全体を±2〜3mmの精度で計測し、点群データから平面図・断面図・立面図・BIMモデルを作成できます。手作業の実測と比較して、図面作成期間を75%短縮できます。本記事では、図面のない建物で現況図を作成する方法を、手順・費用・事例とともに解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#why-no-drawings" className="hover:underline">1. 図面がない建物はなぜ多いのか</a></li>
                <li><a href="#comparison" className="hover:underline">2. 現況図を作る3つの方法と比較</a></li>
                <li><a href="#flow" className="hover:underline">3. 3Dスキャンによる現況図作成の流れ</a></li>
                <li><a href="#deliverables" className="hover:underline">4. 作成できる成果物の種類</a></li>
                <li><a href="#cost" className="hover:underline">5. 費用と期間の目安</a></li>
                <li><a href="#case" className="hover:underline">6. 事例：築50年ビルの現況図面作成</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 図面がない建物はなぜ多いのか */}
            <h2 id="why-no-drawings" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              図面がない建物はなぜ多いのか
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              リノベーションや用途変更の計画時、「この建物の図面がない」という問題は非常に多く発生します。特に築30年以上の建物では、図面が存在しないケースが珍しくありません。主な原因は以下の3つです。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "竣工図の紛失・未保管",
                  desc: "建物の竣工時に作成された図面が、管理者の変更や保管場所の移転に伴い紛失するケースです。紙図面は経年劣化や災害による損傷リスクもあり、築年数が古いほど残存率が下がります。",
                },
                {
                  num: "2",
                  title: "増改築による図面との不一致",
                  desc: "竣工後に増築・改修・間仕切り変更が行われたにもかかわらず、図面が更新されていないケースです。図面が残っていても現状と一致せず、設計の基礎資料として使用できません。",
                },
                {
                  num: "3",
                  title: "管理体制の変遷",
                  desc: "所有者の変更、管理会社の交代、テナントの入れ替わりなどにより、図面の引き継ぎが行われなかったケースです。特に複数回の売買を経た物件では、図面の所在が不明になりがちです。",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-6">
              こうした背景から、リノベーション・耐震診断・用途変更の際には「現状を正確に把握した現況図」を新たに作成する必要があります。
            </p>

            {/* 2. 現況図を作る3つの方法と比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              現況図を作る3つの方法と比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              図面がない建物の現況図を作成する方法は主に3つあります。それぞれの精度・所要時間・コストを比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">手作業実測</th>
                    <th className="px-4 py-3 text-left">写真測量</th>
                    <th className="px-4 py-3 text-left">3Dスキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "精度", a: "±10〜20mm", b: "±5〜10mm", c: "±2〜3mm" },
                    { item: "現場作業時間（500㎡）", a: "3〜5日", b: "1〜2日", c: "0.5〜1日" },
                    { item: "図面作成期間", a: "2〜4週間", b: "1〜2週間", c: "5〜7営業日" },
                    { item: "費用目安（500㎡）", a: "40万〜80万円", b: "30万〜50万円", c: "35万〜60万円" },
                    { item: "計測漏れリスク", a: "高い", b: "中程度", c: "極めて低い" },
                    { item: "BIM対応", a: "手動モデリング", b: "部分対応", c: "点群から直接変換" },
                    { item: "再計測の必要性", a: "頻繁に発生", b: "時々発生", c: "ほぼ不要" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.a}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.b}</td>
                      <td className="px-4 py-3 text-gray-700 border-b font-bold text-primary">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              3Dスキャンは精度と作業効率の両面で優れています。特に「計測漏れがほぼ発生しない」点は、設計者にとって大きなメリットです。取得した点群データから後日、任意の箇所の寸法を確認できるため、現場への戻り作業が不要になります。
            </p>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">図面がない建物の現況図作成についてお困りですか？まずはお気軽にご相談ください。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 3. 3Dスキャンによる現況図作成の流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dスキャンによる現況図作成の流れ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンで図面がない建物の現況図を作成する手順は、以下の5ステップです。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "ヒアリング・事前調査",
                  desc: "建物の用途・面積・必要な成果物（平面図・BIMモデル等）をヒアリングし、計測計画を策定します。既存資料があれば事前にご共有いただくことで、スキャン効率が向上します。",
                },
                {
                  step: "STEP 2",
                  title: "現場スキャン",
                  desc: "3Dレーザースキャナを建物内外に設置し、各ポイントで360度スキャンを実施します。500㎡程度であれば半日〜1日で完了します。非接触・無粉塵のため、入居中でも実施可能です。",
                },
                {
                  step: "STEP 3",
                  title: "点群データの合成・処理",
                  desc: "各スキャンポイントで取得した点群データを統合し、建物全体の高精度3Dデータを生成します。ノイズ除去・座標合わせを行い、寸法精度±2〜3mmの点群を完成させます。",
                },
                {
                  step: "STEP 4",
                  title: "図面・モデル作成",
                  desc: "点群データを基に、ご要望の成果物（平面図・断面図・立面図・展開図・BIMモデル）を作成します。CADオペレーターが点群をトレースし、正確な現況図に仕上げます。",
                },
                {
                  step: "STEP 5",
                  title: "納品・データ活用サポート",
                  desc: "成果物をDWG/PDF/RVT等のご指定フォーマットで納品します。点群データの閲覧方法や、BIMソフトへの取り込み手順もサポートします。",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 4 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. 作成できる成果物の種類 */}
            <h2 id="deliverables" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              作成できる成果物の種類
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンで取得した点群データから、以下の成果物を作成できます。リノベーション設計に必要な図面を一括で揃えることが可能です。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "平面図",
                  desc: "各階の間取り・壁厚・開口部の位置を正確に図面化します。任意の高さでの断面を切り出せるため、天井高の変化や梁の位置も反映できます。",
                  format: "DWG / DXF / PDF",
                },
                {
                  title: "断面図",
                  desc: "任意の位置での縦断面を作成します。各階の階高・床厚・天井高を正確に把握でき、構造検討やダクトルート計画の基礎資料になります。",
                  format: "DWG / DXF / PDF",
                },
                {
                  title: "立面図",
                  desc: "建物外観の各面を正確に図面化します。外壁の凹凸・開口部の寸法・庇の出幅など、外装改修の設計に必要な情報を網羅します。",
                  format: "DWG / DXF / PDF",
                },
                {
                  title: "展開図",
                  desc: "各室の壁面を展開した図面を作成します。内装仕上げの検討、設備機器の配置計画に活用できます。",
                  format: "DWG / DXF / PDF",
                },
                {
                  title: "BIMモデル",
                  desc: "Revit・ArchiCAD等のBIMソフトに対応した3Dモデルを作成します。壁・床・天井・柱・梁を3Dオブジェクト化し、干渉チェックやシミュレーションに活用できます。",
                  format: "RVT / IFC / PLN",
                },
              ].map((d) => (
                <div key={d.title} className="bg-white border border-gray-200 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{d.title}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{d.format}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>

            {/* 5. 費用と期間の目安 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用と期間の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンによる現況図作成の費用と期間は、対象面積と成果物の種類によって異なります。以下に面積別の目安を示します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">延床面積</th>
                    <th className="px-4 py-3 text-left">スキャン日数</th>
                    <th className="px-4 py-3 text-left">図面作成期間</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "〜200㎡", scan: "半日", period: "3〜5営業日", price: "25万〜40万円" },
                    { area: "200〜500㎡", scan: "半日〜1日", period: "5〜7営業日", price: "35万〜60万円" },
                    { area: "500〜1,000㎡", scan: "1〜2日", period: "7〜10営業日", price: "50万〜90万円" },
                    { area: "1,000〜3,000㎡", scan: "2〜3日", period: "10〜15営業日", price: "80万〜150万円" },
                    { area: "3,000㎡以上", scan: "3日〜", period: "15営業日〜", price: "個別見積もり" },
                  ].map((row, i) => (
                    <tr key={row.area} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.area}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.scan}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.period}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              ※上記は平面図＋断面図の作成を含む目安金額です。BIMモデル作成・展開図追加の場合は別途費用が発生します。正確な金額は個別見積もりにてご確認ください。
            </p>

            {/* 6. 事例 */}
            <h2 id="case" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例：築50年ビルの現況図面作成
            </h2>
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 shrink-0 w-24">対象建物</span>
                  <span className="text-sm text-gray-700">築50年 RC造5階建て事務所ビル（延床面積 約2,500㎡）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 shrink-0 w-24">課題</span>
                  <span className="text-sm text-gray-700">竣工図が紛失しており、リノベーション設計に必要な現況図面が一切存在しなかった</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 shrink-0 w-24">計測期間</span>
                  <span className="text-sm text-gray-700">現場スキャン 2日間（テナント営業中に実施）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 shrink-0 w-24">成果物</span>
                  <span className="text-sm text-gray-700">各階平面図・断面図4面・立面図4面・BIMモデル（Revit）</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-sm font-bold text-gray-800 shrink-0 w-24">納品期間</span>
                  <span className="text-sm text-gray-700">スキャンから納品まで約3週間</span>
                </div>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>結果：</strong>手作業実測の場合に想定された8週間の工期を3週間に短縮（約63%削減）。テナント営業中のスキャンにより、ビル運用への影響もゼロで完了しました。BIMモデルの納品により、設計者はリノベーション計画を3D上でシミュレーションしながら進めることができました。
                </p>
              </div>
              <Link href="/case/renovation" className="text-sm text-primary hover:underline">
                → この事例の詳細を見る
              </Link>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "図面がまったくない建物でも現況図は作れますか？",
                  a: "はい、作れます。3Dレーザースキャンは既存の図面がなくても、建物の現状を±2〜3mmの精度で計測し、点群データから平面図・断面図・立面図・BIMモデルを作成できます。竣工図が紛失した建物や、増改築を繰り返した建物でも対応可能です。",
                },
                {
                  q: "現況図の作成にはどのくらいの期間がかかりますか？",
                  a: "延床面積500㎡程度の建物の場合、現場スキャンに1日、データ処理・図面作成に5〜7営業日、合計で約1〜2週間が目安です。面積が大きい場合や成果物の種類が多い場合は、2〜4週間程度かかります。",
                },
                {
                  q: "入居者がいる状態でもスキャンできますか？",
                  a: "はい、可能です。3Dレーザースキャナは非接触・無粉塵で計測するため、入居者やテナントが営業中でもスキャンできます。騒音もほとんどなく、1箇所あたり数分で計測が完了するため、業務への影響を最小限に抑えられます。",
                },
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
              図面がない建物の現況図を作成する方法として、3Dレーザースキャンは精度・スピード・コストの全面で手作業実測を上回ります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 築30年以上の建物では図面が存在しないケースが多く、現況図の新規作成が必要になる</li>
                <li>• 3Dスキャンは±2〜3mmの精度で計測でき、手作業実測と比較して期間を75%短縮できる</li>
                <li>• 平面図・断面図・立面図・展開図・BIMモデルを点群データから一括作成可能</li>
                <li>• 非接触計測のため入居中・営業中の建物でもスキャン可能</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              図面がない建物のリノベーション計画でお困りの場合は、まずは対象建物の面積と必要な成果物をお聞かせください。最適な計測プランと概算費用をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              図面がない建物の現況図作成はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              建物の面積・用途をお伝えいただければ、最短即日で概算見積もりをお出しします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/architecture"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                建築向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/bim-3d-scan" className="block text-sm text-primary hover:underline">
                → BIMと3Dスキャンの連携方法
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                → 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
              </Link>
            </div>
          </div>

          {/* ブログ一覧へ */}
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
