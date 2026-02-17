import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量の活用事例10選｜建設・建築・プラントの現場から",
  description:
    "3D測量の代表的な活用事例10選を紹介。建設・建築・プラント・インフラ・文化財の現場における課題・解決方法・成果を具体的な数値とともに解説します。工数60%削減、期間75%短縮などの実績も掲載。",
  keywords: ["3D測量 活用事例", "3Dスキャン 事例", "3D測量 建設", "3D測量 プラント", "3D測量 建築"],
  alternates: { canonical: "/blog/3d-surveying-use-cases" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量の活用事例10選｜建設・建築・プラントの現場から",
  description:
    "3D測量の代表的な活用事例10選を紹介。建設・建築・プラント・インフラ・文化財の現場における課題・解決方法・成果を具体的な数値とともに解説。",
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
    "@id": "https://surveysolution.pro/blog/3d-surveying-use-cases",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量はどのような業界で活用されていますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建設・土木（出来形管理、土量計算）、建築（現況図面作成、BIMモデル構築）、プラント（配管3Dモデル化、干渉チェック）、インフラ（橋梁・トンネルの点検）、文化財（デジタルアーカイブ）、防災（被災状況記録）など幅広い分野で活用されています。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量を導入するとどのくらい工数を削減できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "用途により異なりますが、出来形管理では工数60%削減、現況図面作成では作業期間75%短縮、配管干渉チェックでは工数80%削減などの実績があります。従来の手作業と比較して、計測から成果物作成まで大幅な効率化が可能です。",
      },
    },
    {
      "@type": "Question",
      name: "自社の現場でも3D測量を導入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、対象物の規模・精度要件・現場条件に応じて最適な計測手法（地上レーザースキャン、ドローン測量、ハンドヘルドスキャン）を選定し、対応可能です。まずは現場の課題をお聞かせいただければ、適した手法と概算費用をご提案します。無料相談を受け付けていますので、お気軽にお問い合わせください。",
      },
    },
  ],
};

export default function SurveyingUseCasesPage() {
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
          { name: "3D測量の活用事例10選", path: "/blog/3d-surveying-use-cases" },
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
                活用事例
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量の活用事例10選｜建設・建築・プラントの現場から
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-construction-site.jpg"
              alt="3D測量の活用事例 - 建設現場"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量は建設・建築・プラント・インフラ・文化財など、幅広い分野で活用されています。</strong>本記事では、弊社の実績を含む代表的な活用事例10選を紹介します。各事例の課題・解決方法・成果を具体的な数値とともに解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#case1" className="hover:underline">1. 事例①：高速道路の出来形管理【土木】</a></li>
                <li><a href="#case2" className="hover:underline">2. 事例②：築50年ビルの現況図面作成【建築】</a></li>
                <li><a href="#case3" className="hover:underline">3. 事例③：化学工場の配管3D化【プラント】</a></li>
                <li><a href="#case4" className="hover:underline">4. 事例④：橋梁の定期点検・変状記録【インフラ】</a></li>
                <li><a href="#case5" className="hover:underline">5. 事例⑤：トンネル断面の出来形管理【土木】</a></li>
                <li><a href="#case6" className="hover:underline">6. 事例⑥：リノベーション設計のBIMモデル作成【建築】</a></li>
                <li><a href="#case7" className="hover:underline">7. 事例⑦：工場レイアウト変更の事前シミュレーション【プラント】</a></li>
                <li><a href="#case8" className="hover:underline">8. 事例⑧：法面の変位計測・監視【土木】</a></li>
                <li><a href="#case9" className="hover:underline">9. 事例⑨：文化財建造物のデジタルアーカイブ【文化財】</a></li>
                <li><a href="#case10" className="hover:underline">10. 事例⑩：災害復旧現場の被災状況記録【防災】</a></li>
                <li><a href="#selection" className="hover:underline">11. 活用事例から見る3D測量の選び方</a></li>
                <li><a href="#faq" className="hover:underline">12. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">13. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 事例① */}
            <h2 id="case1" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例①：高速道路の出来形管理【土木】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">土木</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">出来形管理</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  高速道路の新設工事において、従来のTS（トータルステーション）による出来形管理では、計測ポイントが限られ、施工精度の面的な把握が困難でした。計測に2名体制で3日間を要し、交通規制の調整も大きな負担となっていました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナ（Leica RTC360）を用いて路面・法面を面的に計測。取得した点群データから設計面との差分を自動算出し、i-Construction基準の出来形管理帳票を作成しました。1名体制で計測を実施し、交通規制時間を最小限に抑えました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 出来形管理の工数を<strong>60%削減</strong>（3日 → 1日）</li>
                  <li>• 面的な品質管理により施工不良の早期発見が可能に</li>
                  <li>• 交通規制時間を50%短縮し、近隣への影響を低減</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-8">
              <Link href="/case/highway" className="text-primary hover:underline">→ この事例の詳細を見る</Link>
            </p>

            {/* 事例② */}
            <h2 id="case2" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例②：築50年ビルの現況図面作成【建築】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">建築</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">現況図面</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  築50年の商業ビル（延床面積5,000平方メートル、地上8階建て）のリニューアル計画にあたり、竣工図面が残っておらず、現況図面が存在しませんでした。手作業での実測では2か月以上の期間が見込まれ、テナント営業中の建物のため作業制約も大きい状況でした。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナとハンドヘルドスキャナを併用し、各フロアを非接触で計測。テナント営業時間外（夜間・早朝）にスキャンを実施し、営業への影響をゼロに抑えました。点群データから全フロアの平面図・断面図・立面図（CAD/DWG）を作成しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 図面作成期間を<strong>75%短縮</strong>（2か月 → 2週間）</li>
                  <li>• テナント営業への影響ゼロで全フロアを計測</li>
                  <li>• 竣工図面との差異（増改築履歴）を可視化し、設計精度を向上</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-8">
              <Link href="/case/renovation" className="text-primary hover:underline">→ この事例の詳細を見る</Link>
            </p>

            {/* 事例③ */}
            <h2 id="case3" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例③：化学工場の配管3D化【プラント】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">プラント</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">配管3Dモデル</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  化学工場の改修工事に際し、既設配管の正確な位置情報が2D図面にしか存在せず、新設配管との干渉チェックが困難でした。現地での目視確認では見落としが多く、施工段階で干渉が発覚するたびに設計変更が発生し、工期遅延の原因となっていました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナで既設配管エリアを高密度スキャンし、取得した点群データから配管の3Dモデルを構築しました。新設配管の設計モデルと重ね合わせ、3D空間上で干渉チェックを実施。干渉箇所を施工前にすべて特定し、設計段階で解消しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 干渉チェック工数を<strong>80%削減</strong></li>
                  <li>• 施工段階での設計変更がゼロに</li>
                  <li>• 改修工事の工期を当初計画通りに完了</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-8">
              <Link href="/case/plant-piping" className="text-primary hover:underline">→ この事例の詳細を見る</Link>
            </p>

            {/* 事例④ */}
            <h2 id="case4" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例④：橋梁の定期点検・変状記録【インフラ】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">インフラ</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">定期点検</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン + ドローン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  橋長80mのPC橋の定期点検において、橋梁点検車を用いた近接目視点検では交通規制が必要で、点検に5日間を要していました。また、ひび割れや変状の位置・寸法を手書きスケッチで記録するため、経年変化の定量的な比較が困難でした。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナで橋梁全体の3D形状を取得し、ドローンで桁下面・橋脚の高解像度画像を撮影。点群データと画像を統合し、変状箇所を3D空間上にマッピングしました。過去の点検データとの差分比較により、変状の進行度を定量的に把握しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 点検日数を<strong>60%短縮</strong>（5日 → 2日）</li>
                  <li>• 変状の経年変化を3Dデータで定量比較可能に</li>
                  <li>• 橋梁点検車の使用回数削減による安全性向上とコスト削減</li>
                </ul>
              </div>
            </div>

            {/* 事例⑤ */}
            <h2 id="case5" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑤：トンネル断面の出来形管理【土木】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">土木</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">出来形管理</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  山岳トンネル（延長500m）の覆工コンクリート出来形管理において、従来のプロフィルメーターによる断面計測では1断面あたり30分以上を要し、20m間隔での断面管理が限界でした。覆工厚の不足箇所を網羅的に把握することが困難でした。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナでトンネル内壁を連続スキャンし、設計断面との差分を1m間隔で自動算出しました。覆工厚不足の箇所をヒートマップで可視化し、是正が必要な範囲を施工チームに即座にフィードバックしました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 断面計測の工数を<strong>70%削減</strong></li>
                  <li>• 計測間隔を20m → 1mに高密度化し、品質管理精度を大幅に向上</li>
                  <li>• 覆工厚不足の早期発見により手戻り工事を防止</li>
                </ul>
              </div>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">自社の現場でも3D測量を活用できるか知りたい方はお気軽にご相談ください。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 事例⑥ */}
            <h2 id="case6" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑥：リノベーション設計のBIMモデル作成【建築】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">建築</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">BIMモデル</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  築30年のオフィスビル（延床面積3,000平方メートル）のリノベーション設計をBIMで進めるにあたり、既存建物のBIMモデルが存在しませんでした。手作業での実測からBIMモデルを構築すると3か月以上かかる見込みで、設計スケジュールに間に合わない状況でした。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナで全フロアを計測し、取得した点群データをRevitに取り込んでBIMモデル（LOD300）を構築しました。壁・柱・梁・床・天井・建具・設備機器をモデリングし、設計者がそのままリノベーション設計に活用できるBIMデータとして納品しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• BIMモデル構築期間を<strong>65%短縮</strong>（3か月 → 1か月）</li>
                  <li>• 設計段階での干渉チェックにより手戻りを40%削減</li>
                  <li>• 設備配管の現況をBIM上で正確に把握し、改修計画の精度を向上</li>
                </ul>
              </div>
            </div>

            {/* 事例⑦ */}
            <h2 id="case7" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑦：工場レイアウト変更の事前シミュレーション【プラント】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">プラント</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">レイアウト検討</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  食品工場（敷地面積8,000平方メートル）の生産ライン増設にあたり、既設設備の正確な配置図が存在しませんでした。2D図面ベースのレイアウト検討では搬入経路の高さ制限や既設配管との干渉が把握できず、設備搬入時にトラブルが頻発していました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナで工場内部を3Dスキャンし、既設設備・配管・ダクト・梁下の高さ等を正確に把握。3D空間上に新設設備のモデルを配置し、搬入経路の確認・干渉チェック・作業動線のシミュレーションを実施しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 設備搬入時のトラブルを<strong>ゼロ</strong>に</li>
                  <li>• レイアウト検討の意思決定期間を50%短縮</li>
                  <li>• 3Dモデルによる関係者間の合意形成がスムーズに</li>
                </ul>
              </div>
            </div>

            {/* 事例⑧ */}
            <h2 id="case8" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑧：法面の変位計測・監視【土木】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">土木</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">変位計測</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン + ドローン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  道路沿いの切土法面（高さ30m、延長200m）の変位監視において、従来の伸縮計・傾斜計による計測では、設置点のみの変位しか把握できませんでした。法面全体の変位分布を把握するには膨大な計器設置が必要で、コスト・工期ともに現実的ではありませんでした。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナとドローンを併用して法面全体を定期的に3Dスキャン。時系列の点群データを重ね合わせ、法面全面の変位量をミリメートル単位で把握しました。変位量のヒートマップを作成し、要注意箇所を自動検出するシステムを構築しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 法面全面の変位を<strong>面的に把握</strong>（点計測 → 面計測）</li>
                  <li>• 計器設置コストを70%削減</li>
                  <li>• 変位の兆候を早期に検知し、予防的な対策が可能に</li>
                </ul>
              </div>
            </div>

            {/* 事例⑨ */}
            <h2 id="case9" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑨：文化財建造物のデジタルアーカイブ【文化財】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">文化財</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">デジタルアーカイブ</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">地上レーザースキャン + フォトグラメトリ</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国指定重要文化財の木造寺院建築（築300年）の保存修理計画にあたり、建物の現状を正確に記録する必要がありました。手作業での実測では部材の微細な反り・ねじれまで記録することが困難で、修復時の参照資料として不十分でした。また、建造物の3Dデジタルアーカイブとして後世に残す要請もありました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  地上レーザースキャナで建物の構造体を高密度スキャンし、フォトグラメトリで表面テクスチャ（木目・色彩・劣化状態）を取得。両データを統合して、形状と質感を忠実に再現した高精細3Dモデルを構築しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 部材単位の形状を<strong>±1mmの精度</strong>でデジタル記録</li>
                  <li>• 修復計画の立案精度が向上し、手戻りを削減</li>
                  <li>• 3Dビューワによるオンライン公開で教育・観光資源としても活用</li>
                </ul>
              </div>
            </div>

            {/* 事例⑩ */}
            <h2 id="case10" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              事例⑩：災害復旧現場の被災状況記録【防災】
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">防災</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">被災状況記録</span>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">ドローン + 地上レーザースキャン</span>
            </div>
            <div className="space-y-4 mb-6">
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">課題</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  豪雨による土砂崩壊が発生した道路復旧現場において、二次災害のリスクから人が立ち入れない区域の被災状況を把握する必要がありました。従来の測量方法では安全確保が困難で、迅速な復旧計画の立案に必要なデータが不足していました。
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">解決方法</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ドローンで被災エリア上空から広域撮影を行い、オルソ画像と3D地形モデルを生成。安全な範囲からは地上レーザースキャナで詳細計測を行い、崩壊土砂量の算出と復旧設計に必要な断面データを取得しました。
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-primary mb-2 text-sm">成果</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 被災後<strong>48時間以内</strong>に被災状況の3Dデータを取得</li>
                  <li>• 崩壊土砂量を正確に算出し、復旧工事の計画精度を向上</li>
                  <li>• 人が立ち入れない危険区域も非接触で安全にデータ取得</li>
                </ul>
              </div>
            </div>

            {/* 選び方 */}
            <h2 id="selection" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              活用事例から見る3D測量の選び方
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は用途に応じて最適な計測手法が異なります。以下の表を参考に、自社の現場に適した手法を選定してください。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">業界</th>
                    <th className="px-4 py-3 text-left">主な用途</th>
                    <th className="px-4 py-3 text-left">推奨手法</th>
                    <th className="px-4 py-3 text-left">精度目安</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { industry: "土木", use: "出来形管理・土量計算", method: "地上レーザー / ドローン", accuracy: "±2〜5mm" },
                    { industry: "建築", use: "現況図面・BIMモデル", method: "地上レーザー + ハンドヘルド", accuracy: "±1〜3mm" },
                    { industry: "プラント", use: "配管3D化・干渉チェック", method: "地上レーザー", accuracy: "±1〜2mm" },
                    { industry: "インフラ", use: "点検・変状記録", method: "地上レーザー + ドローン", accuracy: "±2〜5mm" },
                    { industry: "文化財", use: "デジタルアーカイブ", method: "地上レーザー + フォトグラメトリ", accuracy: "±1mm" },
                    { industry: "防災", use: "被災状況記録", method: "ドローン + 地上レーザー", accuracy: "±2〜5cm" },
                  ].map((row, i) => (
                    <tr key={row.industry} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.industry}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.use}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.method}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.accuracy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              上記はあくまで目安です。対象物の規模・現場条件・求める精度によって最適な手法は異なります。弊社では現場の状況をヒアリングした上で、最適な計測手法をご提案しています。
            </p>

            {/* FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3D測量はどのような業界で活用されていますか？", a: "建設・土木（出来形管理、土量計算）、建築（現況図面作成、BIMモデル構築）、プラント（配管3Dモデル化、干渉チェック）、インフラ（橋梁・トンネルの点検）、文化財（デジタルアーカイブ）、防災（被災状況記録）など幅広い分野で活用されています。" },
                { q: "3D測量を導入するとどのくらい工数を削減できますか？", a: "用途により異なりますが、出来形管理では工数60%削減、現況図面作成では作業期間75%短縮、配管干渉チェックでは工数80%削減などの実績があります。従来の手作業と比較して、計測から成果物作成まで大幅な効率化が可能です。" },
                { q: "自社の現場でも3D測量を導入できますか？", a: "はい、対象物の規模・精度要件・現場条件に応じて最適な計測手法を選定し、対応可能です。まずは現場の課題をお聞かせいただければ、適した手法と概算費用をご提案します。無料相談を受け付けていますので、お気軽にお問い合わせください。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量は、建設・建築・プラント・インフラ・文化財・防災など、幅広い分野で活用されています。本記事で紹介した10の事例が示すように、従来手法と比較して大幅な工数削減・品質向上・安全性確保を実現できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">活用事例のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 出来形管理・現況図面作成で工数60〜75%削減の実績</li>
                <li>• 配管干渉チェック・レイアウト検討で設計変更・手戻りをゼロに</li>
                <li>• 橋梁・法面の点検で安全性向上と経年変化の定量管理を実現</li>
                <li>• 文化財・災害復旧では従来手法では困難だった記録・計測が可能に</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              自社の現場で3D測量を活用できるか検討されている方は、まずは課題をお聞かせください。対象物に適した計測手法と概算費用をご提案します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量の導入をご検討中ですか？
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              弊社の導入事例の詳細をご覧いただくか、無料相談でお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/case"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                導入事例の詳細を見る
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                無料相談を申し込む
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント
              </Link>
              <Link href="/blog/choose-3d-surveying-company" className="block text-sm text-primary hover:underline">
                &rarr; 3D測量業者の選び方｜失敗しない5つのチェックポイント
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
