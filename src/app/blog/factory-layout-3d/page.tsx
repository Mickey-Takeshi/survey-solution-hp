import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "工場レイアウト変更を3D測量で効率化する方法｜計画期間50%短縮",
  description:
    "工場レイアウト変更に3Dスキャンを活用すると、既存設備の正確な配置データを短時間で取得でき、3Dモデル上でレイアウト検討・干渉チェック・動線シミュレーションが可能です。手作業比で計画期間50%短縮の方法を解説します。",
  keywords: ["工場 レイアウト 3D", "工場 3Dスキャン", "工場レイアウト変更 3D測量", "工場 設備配置 3Dモデル"],
  alternates: { canonical: "/blog/factory-layout-3d" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "工場レイアウト変更を3D測量で効率化する方法",
  description:
    "工場レイアウト変更に3Dスキャンを活用し、既存設備の配置データ取得から3Dモデル上でのレイアウト検討・干渉チェック・動線シミュレーションまでの方法を解説。",
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
    "@id": "https://surveysolution.pro/blog/factory-layout-3d",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "工場の3Dスキャンにかかる時間はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "延床面積1,000〜3,000㎡の工場であれば、現地スキャン作業は1〜2日で完了します。スキャナー1台あたり1箇所5〜10分で計測でき、工場全体で30〜80箇所程度のスキャンを行います。生産ラインを稼働させたまま計測できるため、操業への影響は最小限です。",
      },
    },
    {
      "@type": "Question",
      name: "稼働中の工場でもスキャンできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3Dレーザースキャナーは非接触で計測するため、設備に触れる必要がありません。稼働中の生産ラインの周囲からスキャンできます。ただし、移動する人やフォークリフトはノイズとして除去するため、計測時は一時的に通行を制限する場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "3Dデータの納品形式は何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データ（E57・LAS形式）と3Dモデル（DWG・RVT・IFC形式）を標準納品しています。お客様の使用ソフトウェアに合わせた形式での納品も対応可能です。3D PDFやWebビューアなど、専用ソフト不要で閲覧できる形式もご用意しています。",
      },
    },
  ],
};

export default function FactoryLayout3dPage() {
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
          { name: "工場レイアウト変更を3D測量で効率化", path: "/blog/factory-layout-3d" },
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
                プラント
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              工場レイアウト変更を3D測量で効率化する方法
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-warehouse-factory.jpg"
              alt="工場レイアウトの3D測量イメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>工場のレイアウト変更に3D測量を活用すると、既存設備の正確な配置データを短時間で取得でき、3Dモデル上でレイアウト検討・干渉チェック・動線シミュレーションが可能になります。</strong>手作業の実測と比較して、計画期間を50%短縮できます。本記事では、工場の設備管理者向けに、3Dスキャンを活用したレイアウト変更の具体的な進め方・メリット・費用目安を解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#challenges" className="hover:underline">1. 工場レイアウト変更の課題</a></li>
                <li><a href="#solution" className="hover:underline">2. 3D測量による解決方法</a></li>
                <li><a href="#flow" className="hover:underline">3. レイアウト検討の流れ（5ステップ）</a></li>
                <li><a href="#merits" className="hover:underline">4. 3つのメリット</a></li>
                <li><a href="#cost" className="hover:underline">5. 費用と期間の目安</a></li>
                <li><a href="#comparison" className="hover:underline">6. 手作業との比較</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 工場レイアウト変更の課題 */}
            <h2 id="challenges" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              工場レイアウト変更の課題
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              工場のレイアウト変更は、生産効率の向上・新規設備の導入・製造ライン再編などの目的で実施されます。しかし、計画段階で正確な現況データが不足していると、手戻りやコスト超過が発生します。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              設備管理者が直面する代表的な課題は以下の4つです。
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "図面と現場の乖離",
                  desc: "竣工時の図面が最新の設備配置を反映しておらず、増設・移設の履歴が図面に残っていないケースが大半です。既存図面だけで計画すると、実際の配置とのズレが施工時に発覚し、設計やり直しが発生します。",
                },
                {
                  title: "手作業の実測に時間がかかる",
                  desc: "メジャーやレーザー距離計で1箇所ずつ寸法を取る作業は、延床1,000㎡の工場で3〜5日を要します。配管・ダクト・天井裏など高所の計測には足場設置が必要で、追加コストも発生します。",
                },
                {
                  title: "2D図面では干渉の見落としが起こる",
                  desc: "平面図・断面図だけでは、配管・ダクト・架台など立体的な構造物同士の干渉を正確に把握できません。施工段階で干渉が判明すると、手戻り工事による追加費用と工期遅延が発生します。",
                },
                {
                  title: "動線の検証が困難",
                  desc: "作業者の移動動線・フォークリフトの通路幅・搬入出経路の確保など、2D図面上では空間的な制約を十分にシミュレーションできません。安全通路幅の確保漏れは労働災害のリスクにも直結します。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 2. 3D測量による解決方法 */}
            <h2 id="solution" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量による解決方法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dレーザースキャナーを使用した3D測量（3Dスキャン）は、工場内の設備・配管・構造物を丸ごと三次元データ化する技術です。1秒間に最大200万点の座標を取得し、±1〜3mmの精度で工場全体を正確にデータ化します。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              取得した点群データから3Dモデルを作成し、PC上でレイアウト検討・干渉チェック・動線シミュレーションを行うことで、前述の課題を解決します。
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-8">
              <p className="text-sm font-bold text-gray-800 mb-3">3Dスキャンで解決できること：</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・<strong>図面の乖離</strong> → 現況をmm単位で正確にデータ化し、最新の3D図面を作成</li>
                <li>・<strong>実測の手間</strong> → 延床1,000㎡を1〜2日でスキャン完了。高所も地上から非接触で計測</li>
                <li>・<strong>干渉の見落とし</strong> → 3Dモデル上で新設備と既存設備の干渉を事前検出</li>
                <li>・<strong>動線検証の困難さ</strong> → 3D空間上でフォークリフト通路幅・作業者動線をシミュレーション</li>
              </ul>
            </div>

            {/* 3. レイアウト検討の流れ（5ステップ） */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              レイアウト検討の流れ（5ステップ）
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dスキャンを活用した工場レイアウト変更は、以下の5ステップで進めます。計画立案から施工までの全工程をデータドリブンで管理できます。
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "現地3Dスキャン",
                  desc: "3Dレーザースキャナーを工場内に設置し、設備・配管・建屋構造を丸ごとスキャンします。延床1,000〜3,000㎡の工場で1〜2日、スキャン地点は30〜80箇所が目安です。生産ラインを稼働させたまま計測できます。",
                },
                {
                  step: "STEP 2",
                  title: "点群データ処理・3Dモデル作成",
                  desc: "スキャンデータを合成・ノイズ除去し、統合点群データを作成します。点群から設備・配管・建屋の3Dモデル（CAD/BIM）を構築し、各設備に名称・寸法・仕様を付与します。処理期間は1〜2週間です。",
                },
                {
                  step: "STEP 3",
                  title: "3Dモデル上でレイアウト検討",
                  desc: "完成した3Dモデル上で新設備の配置検討を行います。設備を移動・回転・配置し、複数のレイアウト案を比較できます。天井高・梁下高さ・搬入経路の制約も3D空間上で即座に確認可能です。",
                },
                {
                  step: "STEP 4",
                  title: "干渉チェック・動線シミュレーション",
                  desc: "新設備と既存設備（配管・ダクト・電気配線・架台）の干渉を自動検出します。フォークリフト通路幅（最低2.5m）、作業者動線、搬入出経路の確保もシミュレーションで検証します。",
                },
                {
                  step: "STEP 5",
                  title: "施工図面作成・施工管理",
                  desc: "確定したレイアウトから施工図面（平面図・断面図・配置図）を作成します。3Dモデルを施工業者と共有し、施工中の干渉防止・寸法確認にも活用します。施工後の3Dスキャンで出来形確認も可能です。",
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">工場レイアウト変更の3Dスキャンについて、具体的な案件でのご相談を承ります。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 3つのメリット */}
            <h2 id="merits" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              工場レイアウト変更に3D測量を使う3つのメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量を活用したレイアウト変更には、正確な現況把握・干渉防止・動線最適化の3つのメリットがあります。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <h3 className="text-lg font-bold text-gray-800">正確な現況把握</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  3Dスキャンにより、工場内の全設備・配管・構造物を±1〜3mmの精度でデータ化します。竣工図面との乖離を解消し、増設・移設の履歴を含む「現在の工場」を正確に把握できます。
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-600">
                    <strong>導入効果：</strong>図面と現場のズレに起因する設計やり直しを防止。計画段階での手戻りを90%削減した事例があります。
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <h3 className="text-lg font-bold text-gray-800">干渉防止</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  3Dモデル上で新設備と既存の配管・ダクト・電気配線・架台との干渉を事前に自動検出します。2D図面では見落としがちな立体的な干渉も、3D空間上で漏れなく確認できます。
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-600">
                    <strong>導入効果：</strong>施工段階での干渉による手戻り工事を80%以上削減。追加費用の発生を未然に防止します。
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <h3 className="text-lg font-bold text-gray-800">動線最適化</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  3Dモデル上で作業者の移動動線・フォークリフトの走行経路・原材料の搬入出動線をシミュレーションできます。通路幅の確保・交差点の安全性・搬送距離の短縮を定量的に検証し、最適なレイアウトを導き出します。
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-xs text-gray-600">
                    <strong>導入効果：</strong>作業者の移動距離を平均20〜30%短縮。フォークリフト動線の最適化で安全性向上と搬送効率アップを同時に実現します。
                  </p>
                </div>
              </div>
            </div>

            {/* 5. 費用と期間の目安 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用と期間の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              工場の3Dスキャンからレイアウト検討用3Dモデル作成までの費用と期間の目安は以下の通りです。工場の規模・設備密度・成果物の範囲により変動します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">工場規模（延床面積）</th>
                    <th className="px-4 py-3 text-left">スキャン期間</th>
                    <th className="px-4 py-3 text-left">3Dモデル作成期間</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "500㎡以下", scan: "半日〜1日", model: "1週間", cost: "80〜150万円" },
                    { size: "500〜1,000㎡", scan: "1日", model: "1〜2週間", cost: "150〜250万円" },
                    { size: "1,000〜3,000㎡", scan: "1〜2日", model: "2〜3週間", cost: "250〜450万円" },
                    { size: "3,000〜5,000㎡", scan: "2〜3日", model: "3〜4週間", cost: "450〜700万円" },
                    { size: "5,000㎡以上", scan: "3日〜", model: "4週間〜", cost: "個別見積もり" },
                  ].map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.size}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.scan}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.model}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>費用に含まれるもの：</strong>現地スキャン・点群データ処理・3Dモデル作成・成果物納品が標準パッケージです。干渉チェック・動線シミュレーション・施工図面作成はオプション対応となります。まずはお気軽にお見積もりをご依頼ください。
              </p>
            </div>

            {/* 6. 手作業との比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              手作業の実測と3Dスキャンの比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              従来の手作業による実測と3Dスキャンを、計測精度・所要時間・成果物・コストの観点で比較します。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">手作業の実測</th>
                    <th className="px-4 py-3 text-left">3Dスキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", manual: "±10〜20mm", scan: "±1〜3mm" },
                    { item: "計測時間（1,000㎡）", manual: "3〜5日", scan: "1日" },
                    { item: "高所計測", manual: "足場設置が必要", scan: "地上から非接触で計測" },
                    { item: "成果物", manual: "2D図面（平面図・断面図）", scan: "点群データ＋3Dモデル＋2D図面" },
                    { item: "干渉チェック", manual: "目視確認（見落としリスク大）", scan: "3Dモデル上で自動検出" },
                    { item: "動線シミュレーション", manual: "不可（図面上で推測）", scan: "3D空間上でシミュレーション可能" },
                    { item: "レイアウト比較", manual: "図面を都度作成（1案1〜2日）", scan: "3Dモデル上で即座に複数案比較" },
                    { item: "計画期間（全体）", manual: "2〜3ヶ月", scan: "1〜1.5ヶ月（50%短縮）" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.manual}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.scan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>ポイント：</strong>3Dスキャンの初期費用は手作業より高くなりますが、計画期間の短縮・手戻り工事の削減・施工後の出来形確認への活用を考慮すると、トータルコストで優位になるケースが大半です。
              </p>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "工場の3Dスキャンにかかる時間はどれくらいですか？",
                  a: "延床面積1,000〜3,000㎡の工場であれば、現地スキャン作業は1〜2日で完了します。スキャナー1台あたり1箇所5〜10分で計測でき、工場全体で30〜80箇所程度のスキャンを行います。生産ラインを稼働させたまま計測できるため、操業への影響は最小限です。",
                },
                {
                  q: "稼働中の工場でもスキャンできますか？",
                  a: "はい、可能です。3Dレーザースキャナーは非接触で計測するため、設備に触れる必要がありません。稼働中の生産ラインの周囲からスキャンできます。ただし、移動する人やフォークリフトはノイズとして除去するため、計測時は一時的に通行を制限する場合があります。",
                },
                {
                  q: "3Dデータの納品形式は何ですか？",
                  a: "点群データ（E57・LAS形式）と3Dモデル（DWG・RVT・IFC形式）を標準納品しています。お客様の使用ソフトウェアに合わせた形式での納品も対応可能です。3D PDFやWebビューアなど、専用ソフト不要で閲覧できる形式もご用意しています。",
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
              工場レイアウト変更に3D測量を活用することで、計画段階の精度と効率が飛躍的に向上します。既存設備の正確な現況把握から、干渉のない安全なレイアウト設計、動線の最適化まで、データに基づいた意思決定が可能になります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 手作業の実測と比較して、計画期間を50%短縮（2〜3ヶ月→1〜1.5ヶ月）</li>
                <li>・ ±1〜3mmの精度で工場全体をデータ化し、図面と現場の乖離を解消</li>
                <li>・ 3Dモデル上の干渉チェックで手戻り工事を80%以上削減</li>
                <li>・ 動線シミュレーションで作業者の移動距離を20〜30%短縮</li>
                <li>・ 延床1,000㎡の工場でスキャン1日・3Dモデル作成1〜2週間が目安</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              工場レイアウト変更をご検討中の設備管理者の方は、まずは現場の3Dスキャンから始めてみてください。弊社では、スキャン計画の立案から3Dモデル作成・レイアウト検討支援まで一貫して対応しています。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              工場レイアウト変更の3Dスキャンはお気軽にご相談ください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「まずは費用感を知りたい」「図面がない工場でも対応できるか確認したい」という段階でも大丈夫です。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/plant"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                プラント向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/plant-piping-3d-model" className="block text-sm text-primary hover:underline">
                → プラント配管の3Dモデル化｜3Dスキャンで既存配管を正確にデータ化
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                → 3D測量の費用相場｜レーザースキャン・ドローンの料金目安
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
