import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ",
  description:
    "i-Construction対応の3D測量を徹底解説。国土交通省が求める精度基準・必要な成果物（3次元設計データ・点群データ・出来形管理図表）・対応工程・計測手法の使い分けまで、ICT施工担当者向けにまとめました。",
  keywords: ["i-Construction 3D測量", "ICT施工 測量", "i-Construction 成果物", "ICT活用工事 測量基準"],
  alternates: { canonical: "/blog/i-construction-3d-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ",
  description:
    "i-Construction対応の3D測量を解説。国交省の精度基準・必要な成果物・対応工程・計測手法の使い分けをまとめました。",
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
    "@id": "https://surveysolution.pro/blog/i-construction-3d-surveying",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "i-Constructionに初めて対応する場合、何から始めればよいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "まずは発注者（国交省・自治体）が求める成果物の仕様を確認してください。起工測量の段階から3D測量を導入し、3次元設計データとの照合環境を整えることが重要です。弊社では初めてのi-Con対応でも、成果物作成から提出までサポートしています。",
      },
    },
    {
      "@type": "Question",
      name: "i-Construction対応の3D測量に必要な資格はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "測量業務自体には測量士・測量士補の資格が必要です。ドローン測量を行う場合は、無人航空機操縦者技能証明（国家資格）の取得が推奨されます。弊社は測量業者登録済みで、有資格者が全案件を担当します。",
      },
    },
    {
      "@type": "Question",
      name: "対応エリアはどこまでですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全国対応しています。本社は京都ですが、北海道から九州まで出張対応が可能です。遠方の場合は交通費・宿泊費が別途発生しますが、事前にお見積もりに含めてご案内します。",
      },
    },
  ],
};

export default function IConstructionSurveyingPage() {
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
          { name: "i-Construction対応の3D測量", path: "/blog/i-construction-3d-surveying" },
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
                i-Con対応
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-construction-site.jpg"
              alt="i-Construction対応の建設現場"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>i-Constructionとは、国土交通省が推進する建設現場の生産性向上施策です。</strong>3D測量はその中核技術であり、起工測量・出来形管理・土量計算の各工程で活用されます。i-Construction対応で求められる主な成果物は、3次元設計データ・点群データ・出来形管理図表の3つです。本記事では、国交省が定める精度基準から成果物の作成方法、計測手法の使い分けまで、ICT施工担当者が押さえるべきポイントをまとめました。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. i-Constructionとは？3D測量との関係</a></li>
                <li><a href="#standard" className="hover:underline">2. i-Constructionで求められる3D測量の基準</a></li>
                <li><a href="#deliverables" className="hover:underline">3. 必要な成果物一覧と作成方法</a></li>
                <li><a href="#process" className="hover:underline">4. 3D測量の対応工程</a></li>
                <li><a href="#methods" className="hover:underline">5. 対応する計測手法と使い分け</a></li>
                <li><a href="#merit" className="hover:underline">6. i-Construction対応のメリット</a></li>
                <li><a href="#case" className="hover:underline">7. 弊社のi-Construction対応実績</a></li>
                <li><a href="#faq" className="hover:underline">8. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">9. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. i-Constructionとは */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              i-Constructionとは？3D測量との関係
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              i-Constructionとは、国土交通省が2016年度から推進している建設現場の生産性向上施策です。ICT（情報通信技術）を測量・設計・施工・検査の全プロセスに導入し、建設業の生産性を2025年度までに2割向上させることを目標としています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量はi-Constructionの起点となる技術です。従来の横断測量では断面ごとに「線」でしか地形を把握できませんでしたが、3D測量では現況地形を「面」として取得します。この面的データがあることで、3次元設計データとの照合、ICT建機への設計面の転送、出来形の面的管理が可能になります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>段階的適用拡大の経緯：</strong>2016年度は土工（発注者指定型）から開始し、その後、舗装工・浚渫工・付帯構造物設置工など対象工種が段階的に拡大されています。現在は地方自治体発注工事への適用も進んでおり、受注者希望型でi-Constructionを適用するケースも増加しています。
              </p>
            </div>

            {/* 2. 基準 */}
            <h2 id="standard" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              i-Constructionで求められる3D測量の基準
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              国土交通省は「ICT活用工事における3次元計測技術の活用に関する手引き」等で、3D測量に必要な精度基準と計測方法の要件を定めています。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-6">
              主な精度基準は以下の通りです。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">計測項目</th>
                    <th className="px-4 py-3 text-left">要求精度</th>
                    <th className="px-4 py-3 text-left">備考</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "起工測量（現況地形）", accuracy: "標高値 ±50mm以内", note: "面的に計測（0.25m^2あたり1点以上）" },
                    { item: "出来形計測", accuracy: "標高値 ±50mm以内", note: "施工面全体を面的に計測" },
                    { item: "岩線計測", accuracy: "標高値 ±50mm以内", note: "岩線の位置・形状を面的に把握" },
                    { item: "検証点（標定点）", accuracy: "水平・標高 ±50mm以内", note: "既知点との較差で精度検証" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.accuracy}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              計測方法の要件としては、空中写真測量（ドローン）・地上レーザースキャン・トータルステーションのいずれかを使用し、計測結果は検証点を用いて精度確認を行うことが求められます。なお、計測範囲は施工区域に加え、法肩・法尻から外側に余裕幅をもって取得する必要があります。
            </p>

            {/* 3. 成果物一覧 */}
            <h2 id="deliverables" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              必要な成果物一覧と作成方法
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              i-Construction対応で提出が求められる主な成果物を一覧にまとめます。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">成果物名</th>
                    <th className="px-4 py-3 text-left">形式</th>
                    <th className="px-4 py-3 text-left">作成元データ</th>
                    <th className="px-4 py-3 text-left">提出先</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "3次元設計データ", format: "LandXML等", source: "設計図面・縦横断データ", dest: "発注者（監督職員）" },
                    { name: "起工測量の点群データ", format: "LAS / CSV", source: "ドローン撮影写真・レーザースキャンデータ", dest: "発注者（監督職員）" },
                    { name: "出来形管理図表", format: "PDF / Excel", source: "点群とTINモデルの差分解析", dest: "発注者（検査職員）" },
                    { name: "出来形計測の点群データ", format: "LAS / CSV", source: "出来形計測の3D測量データ", dest: "発注者（検査職員）" },
                    { name: "精度管理表", format: "Excel / PDF", source: "検証点との較差計算結果", dest: "発注者（監督職員）" },
                    { name: "土量計算書", format: "PDF / Excel", source: "起工測量と出来形の差分解析", dest: "発注者（検査職員）" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.name}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.format}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.source}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.dest}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              成果物の作成には専用の3D点群処理ソフトウェア（TREND-POINT、EL.Point、Terra Solidなど）が必要です。点群データからTINモデル（不整三角形網）を生成し、設計面との差分をヒートマップ形式で可視化して出来形管理図表を作成します。
            </p>

            {/* 4. 対応工程 */}
            <h2 id="process" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の対応工程
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              i-Construction対応のICT施工では、以下の4つの段階で3D測量が活用されます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  step: "STEP 1",
                  title: "起工測量",
                  desc: "施工前の現況地形を3D測量で面的に取得します。ドローンまたはレーザースキャナを使用し、施工区域全体の点群データを作成します。この現況データが設計データとの照合基準になります。",
                },
                {
                  step: "STEP 2",
                  title: "3次元設計データ作成・ICT建機への転送",
                  desc: "設計図面から3次元設計データ（TINサーフェス）を作成し、ICT建機のマシンコントロール・マシンガイダンスシステムに転送します。オペレーターはモニター上で設計面と現況面の差を確認しながら施工できます。",
                },
                {
                  step: "STEP 3",
                  title: "出来形管理（施工中〜施工後）",
                  desc: "施工の各段階で3D測量を実施し、出来形を面的に計測します。設計データとの差分をヒートマップで表示し、規格値（±50mm等）を満たしているか確認します。従来の断面管理から面管理に移行することで、施工品質の均一化が図れます。",
                },
                {
                  step: "STEP 4",
                  title: "完成検査・土量算出",
                  desc: "最終の出来形計測を行い、出来形管理図表・精度管理表・土量計算書を作成して完成検査に臨みます。点群同士の差分から土量（切土量・盛土量）を算出するため、従来の平均断面法より正確な数量把握が可能です。",
                },
              ].map((s, i) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <span className="block text-xs text-primary font-bold">{s.step}</span>
                    <div className="w-4 h-4 bg-primary rounded-full mx-auto mt-1" />
                    {i < 3 && <div className="w-0.5 h-8 bg-primary/30 mx-auto" />}
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
              <p className="text-sm text-gray-700 mb-3">i-Construction対応の3D測量をお探しですか？まずはお気軽にご相談ください。</p>
              <Link href="/solution/construction" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                建設向け3D測量サービスを見る
              </Link>
            </div>

            {/* 5. 計測手法の使い分け */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              対応する計測手法と使い分け
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              i-Construction対応の3D測量では、主にドローン（UAV）測量と地上レーザースキャンの2手法が使用されます。現場条件に応じた使い分けが重要です。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">ドローン（UAV）測量</th>
                    <th className="px-4 py-3 text-left">地上レーザースキャン</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", drone: "±2〜5cm", laser: "±1〜3mm" },
                    { item: "適した現場", drone: "広域の土工現場（1ha以上）", laser: "構造物周辺・法面・狭隘部" },
                    { item: "計測範囲", drone: "1フライトで10ha以上", laser: "1スキャンで半径100m程度" },
                    { item: "作業時間", drone: "撮影15〜30分 + 解析半日〜", laser: "設置・計測で2〜4時間/箇所" },
                    { item: "天候制約", drone: "風速5m/s以上・雨天は不可", laser: "雨天以外は概ね作業可能" },
                    { item: "植生の影響", drone: "植生下の地表面取得が困難", laser: "レーザーが植生を透過しやすい" },
                    { item: "i-Con適合", drone: "土工の起工測量・出来形管理で多用", laser: "構造物出来形・岩線計測で活用" },
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
            <p className="text-base leading-loose text-gray-700 mb-4">
              一般的に、広域の土工現場ではドローン測量が効率的で、構造物の出来形計測や高精度が求められる箇所では地上レーザースキャンが適しています。両手法を組み合わせて使用するケースも多く、弊社では現場条件を踏まえた最適な手法を提案しています。
            </p>

            {/* 6. メリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              i-Construction対応のメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              i-Constructionに対応することで、施工者には以下の3つのメリットがあります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "総合評価での加点評価",
                  desc: "ICT活用工事の実績は、公共工事の総合評価落札方式において加点対象となります。i-Construction対応の実績を積むことで、今後の入札で競争優位性を確保できます。発注者指定型だけでなく、受注者希望型で積極的にICTを活用する姿勢も評価されます。",
                },
                {
                  num: "2",
                  title: "測量・検査工数の大幅削減",
                  desc: "従来の丁張り設置・横断測量・出来形検測にかかる時間を大幅に削減できます。ドローン測量なら起工測量を1日で完了でき、出来形管理も面的データの差分解析で効率化されます。検査時の立会い時間も短縮されるため、プロジェクト全体の工期短縮に寄与します。",
                },
                {
                  num: "3",
                  title: "施工品質の向上と可視化",
                  desc: "面的な出来形管理により、断面管理では見落としがちな局所的な不陸や施工ムラを検出できます。ヒートマップ形式で施工精度を可視化することで、手直し箇所の早期発見と品質の均一化が実現します。発注者への説明資料としても説得力があります。",
                },
              ].map((m) => (
                <div key={m.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{m.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 7. 実績 */}
            <h2 id="case" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              弊社のi-Construction対応実績
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              弊社では、高速道路の改良工事においてi-Construction対応の3D測量を実施しました。ドローン測量と地上レーザースキャンを併用し、延長約2kmの土工区間の起工測量から出来形管理までを一貫して担当しました。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                <strong>対応内容：</strong>起工測量（ドローン）、3次元設計データ作成、出来形計測（ドローン＋レーザー）、出来形管理図表の作成、土量算出
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>成果：</strong>従来の横断測量に比べて測量工数を約60%削減し、面的な出来形管理により施工品質の可視化を実現しました。
              </p>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              この事例の詳細は以下のページでご紹介しています。
            </p>
            <p className="mb-4">
              <Link href="/case/highway" className="text-sm text-primary hover:underline">
                → 高速道路改良工事のi-Construction対応事例を見る
              </Link>
            </p>

            {/* 8. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "i-Constructionに初めて対応する場合、何から始めればよいですか？",
                  a: "まずは発注者（国交省・自治体）が求める成果物の仕様を確認してください。起工測量の段階から3D測量を導入し、3次元設計データとの照合環境を整えることが重要です。弊社では初めてのi-Con対応でも、成果物作成から提出までサポートしています。",
                },
                {
                  q: "i-Construction対応の3D測量に必要な資格はありますか？",
                  a: "測量業務自体には測量士・測量士補の資格が必要です。ドローン測量を行う場合は、無人航空機操縦者技能証明（国家資格）の取得が推奨されます。弊社は測量業者登録済みで、有資格者が全案件を担当します。",
                },
                {
                  q: "対応エリアはどこまでですか？",
                  a: "全国対応しています。本社は京都ですが、北海道から九州まで出張対応が可能です。遠方の場合は交通費・宿泊費が別途発生しますが、事前にお見積もりに含めてご案内します。",
                },
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
              i-Construction対応の3D測量は、公共工事のICT施工において不可欠な技術です。国交省が定める精度基準を満たした測量と成果物の作成が求められるため、対応実績のある測量会社への依頼が重要になります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ i-Constructionは2016年開始の国交省施策で、3D測量が中核技術</li>
                <li>・ 起工測量・出来形管理は標高値±50mm以内の精度が必要</li>
                <li>・ 必要な成果物は3次元設計データ・点群データ・出来形管理図表など</li>
                <li>・ ドローンと地上レーザーは現場条件に応じて使い分ける</li>
                <li>・ 加点評価・工数削減・品質向上の3つのメリットがある</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              i-Construction対応の3D測量をご検討中の方は、まずは対象工事の概要をお聞かせください。必要な成果物と最適な計測手法をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              i-Construction対応の3D測量はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              起工測量から出来形管理・成果物作成まで一貫して対応します。初めてのi-Con対応もサポートいたします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/construction"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                建設向けサービスを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-vs-traditional-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                → 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
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
