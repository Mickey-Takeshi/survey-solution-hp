import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "3D測量とは？方法・メリット・費用・活用事例を専門家が徹底解説【2026年最新】",
  description:
    "3D測量（三次元測量）とは、レーザースキャナやドローンで対象物を立体的にデータ化する測量技術です。3つの測量手法・5つのメリット・費用相場・活用事例・最新トレンドまで、土地家屋調査士が徹底解説。",
  keywords: [
    "3D測量",
    "3D測量とは",
    "三次元測量",
    "3Dレーザースキャナ",
    "点群データ",
    "3D測量 メリット",
    "3D測量 費用",
    "3D測量 活用事例",
    "ドローン測量",
    "i-Construction",
    "BIM CIM",
  ],
  alternates: { canonical: "/blog/3d-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "3D測量とは？方法・メリット・費用・活用事例を専門家が徹底解説【2026年最新】",
  description:
    "3D測量（三次元測量）の定義・3つの測量手法・5つのメリット・費用相場・7業種の活用事例・最新トレンドを、土地家屋調査士が徹底解説。",
  datePublished: "2021-01-21",
  dateModified: "2026-02-20",
  author: {
    "@type": "Person",
    name: "齋藤 大輔",
    jobTitle: "代表取締役・土地家屋調査士",
    url: "https://surveysolution.pro/profile",
  },
  publisher: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    logo: {
      "@type": "ImageObject",
      url: "https://surveysolution.pro/images/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://surveysolution.pro/blog/3d-surveying",
  },
  image: "https://surveysolution.pro/images/blog-construction-survey.jpg",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "3D測量の精度はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "地上レーザースキャナの場合は±1〜3mm、ドローン測量（写真測量）の場合は±2〜5cmの精度で計測できます。従来のTS測量（±2〜5mm）と同等以上の精度を、大幅に短い時間で達成します。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の費用はいくらかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象面積500㎡程度の一般的な現場で15万円〜50万円が目安です。地上レーザースキャンは15万円〜、ドローン測量は20万円〜、BIMモデル作成は50万円〜が相場です。対象の規模・精度要件・納品物の種類によって変動します。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量と従来測量の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "従来のTS測量は1点ずつ手動で座標を取得するのに対し、3D測量はレーザーを360度照射して1秒間に最大200万点の座標データを自動取得します。面的にデータを取得するため計測漏れが起きにくく、後から任意の場所の寸法を確認できる点が最大の違いです。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量のデータはどのように活用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "取得した点群データから、CAD図面（平面図・断面図・立面図）の作成、3DモデルやBIM/CIMモデルの構築、土量計算、干渉チェック、建物傾斜調査、経年変位計測、デジタルアーカイブなど幅広く活用できます。建設・建築・プラント・インフラ・文化財保存など7業種以上で導入が進んでいます。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量は個人や中小企業でも依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、個人・中小企業からの依頼も多数対応しています。弊社では住宅1棟の傾斜調査（15万円〜）から対応可能です。「まずは費用感を知りたい」という段階でも無料見積もりを受け付けています。",
      },
    },
  ],
};

export default function Article3DSurveyingPage() {
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
          { name: "3D測量とは？方法・メリット・費用・活用事例", path: "/blog/3d-surveying" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-02-20" className="text-sm tracking-wider text-gray-500">
                2026.02.20 更新
              </time>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                基礎知識
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              3D測量とは？方法・メリット・費用・活用事例を専門家が徹底解説【2026年最新】
            </h1>
            <div className="flex items-center gap-3 mt-4 text-sm text-gray-500">
              <Image src="/images/profile.jpg" alt="齋藤 大輔" width={32} height={32} className="rounded-full object-cover" />
              <div>
                <span className="text-gray-700 font-medium">齋藤 大輔</span>
                <span className="mx-1">｜</span>
                <span>代表取締役・土地家屋調査士</span>
              </div>
            </div>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-construction-survey.jpg"
              alt="3D測量の現場 - 3Dレーザースキャナで建物をスキャンしている様子"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文（AIO最適化：結論ファースト） */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>3D測量（三次元測量）とは、3Dレーザースキャナやドローンを使って対象物の形状を立体的にデータ化する測量技術です。</strong>1秒間に最大200万点の座標データ（点群データ）を取得し、従来測量の1/3〜1/5の時間で±1〜3mmの高精度な計測を実現します。2025年度のi-Construction 2.0推進やBIM/CIM原則適用を背景に、建設・建築・プラント・インフラ・文化財保存など7業種以上で導入が加速しています。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">この記事の目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 3D測量とは？定義と仕組みをわかりやすく解説</a></li>
                <li><a href="#methods" className="hover:underline">2. 3D測量の3つの方法｜レーザー・ドローン・モバイル</a></li>
                <li><a href="#comparison" className="hover:underline">3. 3D測量と従来測量の違いを徹底比較</a></li>
                <li><a href="#merit" className="hover:underline">4. 3D測量の5つのメリット</a></li>
                <li><a href="#cost" className="hover:underline">5. 3D測量の費用相場｜サービス別料金の目安</a></li>
                <li><a href="#fields" className="hover:underline">6. 3D測量の活用事例｜7つの業種別ガイド</a></li>
                <li><a href="#trends" className="hover:underline">7. 【2026年最新】3D測量の最新トレンド</a></li>
                <li><a href="#flow" className="hover:underline">8. 3D測量を依頼する流れ</a></li>
                <li><a href="#faq" className="hover:underline">9. よくある質問（FAQ）</a></li>
                <li><a href="#summary" className="hover:underline">10. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 定義 */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量とは？定義と仕組みをわかりやすく解説
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量（三次元測量）とは、レーザー光やカメラ映像を用いて対象物の三次元座標（X・Y・Z）を高密度に取得する測量技術です。取得した数百万〜数億個の座標点の集合体を「点群データ」と呼び、対象物の形状をデジタル空間に忠実に再現します。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              点群データを基に、CAD図面（平面図・断面図・立面図）、3Dモデル、BIM/CIMデータなど、設計・施工に必要な成果物を作成します。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>従来測量との根本的な違い：</strong>従来のTS（トータルステーション）測量は測りたい「点」を1つずつ手動で計測します。一方、3D測量はレーザーを360度照射して対象物全体を「面」として自動計測します。計測漏れが起きにくく、後から任意の場所の寸法をデータ上で確認できる点が最大の特徴です。
              </p>
            </div>

            {/* 2. 方法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の3つの方法｜レーザー・ドローン・モバイル
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量には主に3つの手法があり、対象物の規模・精度要件・現場条件に応じて最適な手法を選定します。弊社では複数手法を組み合わせることで、コストを抑えつつ高品質なデータを取得しています。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">① 地上レーザースキャン測量</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に設置した3Dレーザースキャナから360度にレーザーを照射し、1秒間に最大200万点の座標データを取得します。精度は±1〜3mmで、建物・プラント・トンネルなどの高精度計測に最適です。弊社では2,000㎡の商業ビル全体を2日間でスキャン完了した実績があります。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±1〜3mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">建物・プラント・構造物向き</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">費用：15万円〜</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">② ドローン（UAV）測量</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  ドローンに搭載したカメラで上空から大量の写真を撮影し、SfM（Structure from Motion）技術で3Dモデルを生成します。1フライト（約15〜20分）で10ha以上の範囲を計測でき、広大な土地の地形測量に適しています。国土交通省のi-Construction基準に準拠した出来形管理にも対応可能です。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±2〜5cm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">広域地形・土木現場向き</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">費用：20万円〜</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">③ ハンドヘルド（モバイル）スキャン</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  手持ち型のスキャナで歩行しながら計測します。SLAM（Simultaneous Localization and Mapping）技術により、移動しながらリアルタイムで点群を生成します。狭い通路・階段・配管裏など、据置型スキャナでは死角になる場所の計測に威力を発揮します。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±5〜30mm</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">狭所・屋内・補完計測向き</span>
                </div>
              </div>
            </div>

            {/* 3. 比較表 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量と従来測量の違いを徹底比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量と従来のTS（トータルステーション）測量を8つの指標で比較します。3D測量は速度・データ量・後工程の柔軟性で圧倒的に優れています。
            </p>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">3D測量（レーザースキャン）</th>
                    <th className="px-4 py-3 text-left">従来測量（TS測量）</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測方法", a: "レーザー/写真で面的に自動取得", b: "1点ずつ手動で計測" },
                    { item: "計測速度", a: "100万〜200万点/秒", b: "1点/数秒〜数分" },
                    { item: "精度", a: "±1〜3mm（レーザー）", b: "±2〜5mm" },
                    { item: "取得データ量", a: "数億〜数十億点", b: "数十〜数百点" },
                    { item: "現場作業時間", a: "従来の1/3〜1/5に短縮", b: "基準（1倍）" },
                    { item: "後からの追加計測", a: "データ上で任意箇所を計測可", b: "再度現場に行く必要あり" },
                    { item: "成果物", a: "点群・3Dモデル・BIM/CIM対応", b: "2D図面（CAD）" },
                    { item: "必要人数", a: "1〜2名", b: "2〜3名" },
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
            <p className="text-sm text-gray-600 mb-8">
              ※精度は機器・計測距離・環境条件により変動します。上記は一般的な目安です。
            </p>

            {/* 4. メリット */}
            <h2 id="merit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の5つのメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量を導入することで、計測業務の効率化だけでなくプロジェクト全体のコスト削減・品質向上を実現します。弊社の実績を交えて5つのメリットを解説します。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "計測時間を1/3〜1/5に短縮", desc: "レーザースキャナは1秒間に100万〜200万点のデータを自動取得します。従来数日かかる計測を数時間で完了でき、現場の交通規制時間や足場費用の削減にも直結します。弊社の実績では、2,000㎡のビル全体を2日間でスキャン完了しています。" },
                { num: "2", title: "面的データで計測漏れを防止", desc: "「点」ではなく「面」で計測するため、測り忘れが発生しません。取得データから後日、任意の場所の寸法や断面を抽出できるため、現場への戻り作業が不要になります。弊社の導入事例では、現場戻り作業を90%削減した実績があります。" },
                { num: "3", title: "±1〜3mmのミリ精度で品質向上", desc: "地上レーザースキャナの計測精度は±1〜3mmです。手作業の実測（±10〜20mm）と比較して精度が大幅に向上し、設計の手戻り削減に貢献します。弊社の導入事例では設計手戻りを50%削減しました。" },
                { num: "4", title: "BIM/CIM連携でi-Constructionに対応", desc: "点群データはRevit・ArchiCAD・Civil 3Dなど主要なBIM/CIMソフトに直接インポートできます。国土交通省が推進するi-Construction 2.0の3次元データ活用基準にも対応し、「2040年度までに省人化3割」の政策目標達成に貢献します。" },
                { num: "5", title: "非接触計測で安全性を向上", desc: "レーザーによる非接触計測のため、高所・法面・老朽化した構造物など人が近づきにくい場所も安全に計測できます。ドローンを併用すれば、足場や高所作業車なしで屋根・外壁のデータを取得でき、墜落・転落リスクを排除します。" },
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">3D測量の導入を検討中ですか？対象物に最適な計測手法と概算費用をご提案します。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを申し込む →
              </Link>
            </div>

            {/* 5. 費用 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の費用相場｜サービス別料金の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の費用は、対象面積500㎡程度の一般的な現場で15万円〜50万円が目安です。以下はサービス別の料金相場です。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-gray-900">サービス内容</th>
                    <th className="px-4 py-3 text-left text-gray-900">料金目安（税別）</th>
                    <th className="px-4 py-3 text-left text-gray-900">用途例</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "建物傾斜調査（1棟）", price: "15万円〜", use: "住宅・ビルの傾き計測" },
                    { service: "現況図面作成（住宅規模）", price: "15万円〜30万円", use: "リノベーション・増改築" },
                    { service: "ドローン測量＋オルソ画像", price: "20万円〜", use: "土木現場・広域地形" },
                    { service: "中規模ビルの3Dスキャン", price: "50万円〜100万円", use: "設備更新・BIM化" },
                    { service: "BIMモデル作成（スキャンtoBIM）", price: "50万円〜", use: "既存建物のBIM化" },
                    { service: "文化財デジタルアーカイブ", price: "30万円〜", use: "歴史的建造物の3D保存" },
                  ].map((row, i) => (
                    <tr key={row.service} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                      <td className="px-4 py-3 text-gray-900 border-b">{row.service}</td>
                      <td className="px-4 py-3 text-primary font-bold border-b whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-gray-600 text-xs border-b">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              ※上記は弊社の料金目安です。対象の規模・精度要件・成果物の種類により変動します。
            </p>
            <p className="text-sm text-gray-700 mb-8">
              詳しい料金体系は<Link href="/price" className="text-primary hover:underline">3D測量の料金・費用の目安</Link>ページで解説しています。
            </p>

            {/* 6. 活用事例 */}
            <h2 id="fields" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の活用事例｜7つの業種別ガイド
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量は建設・土木を中心に、7つの業種で導入が進んでいます。各業種での具体的な活用方法と効果を紹介します。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                { field: "建設・土木", detail: "i-Construction準拠の出来形管理、土量計算、施工シミュレーション。弊社事例：出来形管理工数60%削減", link: "/solution/construction", linkText: "建設・土木向け3D測量" },
                { field: "建築・リノベーション", detail: "図面のない既存建物の現況測量、スキャンtoBIMによるBIMモデル構築。弊社事例：図面作成期間75%短縮", link: "/solution/architecture", linkText: "建築向け3D測量" },
                { field: "プラント・工場", detail: "配管設備の3Dモデル化、干渉チェック、設備台帳のデジタル化。弊社事例：干渉チェック工数80%削減", link: "/solution/plant", linkText: "プラント向け3D測量" },
                { field: "インフラ点検", detail: "橋梁・トンネルの変状記録、経年変化の定量管理、点検報告書の自動生成", link: "/solution/infrastructure", linkText: "インフラ点検向け3D測量" },
                { field: "文化財・遺跡", detail: "歴史的建造物のデジタルアーカイブ、修復計画の3Dシミュレーション、VR展示", link: "/solution/heritage", linkText: "文化財の3D記録" },
                { field: "災害対策", detail: "土砂災害警戒区域の地形計測、被災状況の定量記録、復旧計画の3Dシミュレーション", link: "/contact", linkText: "お問い合わせ" },
                { field: "不動産・住宅", detail: "住宅の傾斜調査（中古住宅売買時）、隣地境界の3D記録、マンション共用部の現況把握", link: "/service", linkText: "サービス一覧" },
              ].map((f) => (
                <div key={f.field} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-800 mb-1">{f.field}</h3>
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">{f.detail}</p>
                  <Link href={f.link} className="text-xs text-primary hover:underline">→ {f.linkText}</Link>
                </div>
              ))}
            </div>

            {/* 7. 最新トレンド（2026年版・新規追加セクション） */}
            <h2 id="trends" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              【2026年最新】3D測量の最新トレンド
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量を取り巻く環境は急速に変化しています。2025〜2026年にかけて注目すべき4つのトレンドを解説します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">①  i-Construction 2.0の本格化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省は「i-Construction 2.0」で「2040年度までに建設現場の省人化3割」を目標に掲げています。2025年度からBIM/CIMの原則適用が段階的に拡大し、3D測量データの活用が公共工事の標準仕様になりつつあります。ICT施工や3次元出来形管理の適用範囲も拡大しており、3D測量の需要は今後も増加が見込まれます。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">② AIによる点群データ処理の自動化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  AI（人工知能）を活用した点群データの自動分類・ノイズ除去・3Dモデル自動生成が実用段階に入っています。従来は熟練オペレーターが数日かけていたデータ処理作業を、AIが数時間で完了させることが可能になりつつあります。これにより、3D測量のコスト低下と納期短縮が加速しています。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">③ デジタルツイン市場の急成長</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  建設デジタルツイン（現実の建物・インフラをデジタル空間に再現する技術）の市場規模は、2025年の約9.8兆円から2030年には約23.3兆円へ成長すると予測されています（年平均成長率17%）。3D測量はデジタルツインの基盤データを提供する技術として、重要性がさらに高まっています。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">④ PLATEAU（3D都市モデル）との連携</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省が推進する3D都市モデル「PLATEAU」のデータが全国600都市以上に拡大しています。PLATEAUの都市モデルと3D測量の点群データを重ね合わせることで、都市開発シミュレーション・防災計画・景観検討などに活用するケースが増えています。
                </p>
              </div>
            </div>

            {/* 8. 依頼の流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量を依頼する流れ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              弊社に3D測量をご依頼いただく場合の一般的な流れです。初回相談から納品まで、通常2〜4週間で対応します。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "無料相談・ヒアリング", desc: "計測対象・精度要件・納品物をヒアリングし、最適な計測手法と概算費用をご提案します。お電話（075-744-1775）またはメールフォームからお気軽にご連絡ください。" },
                { step: "STEP 2", title: "現地確認・正式見積もり", desc: "必要に応じて現地を確認し、正確な作業範囲・条件を反映した正式見積もりをご提示します。現地確認は無料で対応しています。" },
                { step: "STEP 3", title: "現場スキャン・データ取得", desc: "レーザースキャナやドローンで現場を計測します。対象規模にもよりますが、1日〜数日で現場作業は完了します。" },
                { step: "STEP 4", title: "データ処理・成果物作成", desc: "複数のスキャンデータを合成し、高品質な点群データを作成。ご要望に応じてCAD図面・3Dモデル・BIMモデルなどの成果物を作成します。" },
                { step: "STEP 5", title: "納品・アフターサポート", desc: "成果物を納品し、データの活用方法をサポートします。納品後の追加計測・修正依頼にも柔軟に対応します。" },
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

            {/* 9. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量に関するよくある質問（FAQ）
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { q: "3D測量の精度はどれくらいですか？", a: "地上レーザースキャナの場合は±1〜3mm、ドローン測量の場合は±2〜5cmの精度で計測できます。対象物の表面素材や計測距離により精度は変動しますが、従来の手作業実測（±10〜20mm）と比較して高い精度を実現します。" },
                { q: "3D測量の費用はいくらかかりますか？", a: "一般的な現場（500㎡程度）で15万円〜50万円が目安です。住宅1棟の傾斜調査は15万円〜、ドローン測量は20万円〜、BIMモデル作成は50万円〜となります。無料見積もりを受け付けていますので、お気軽にご相談ください。" },
                { q: "3D測量と従来測量の違いは何ですか？", a: "従来のTS測量は1点ずつ手動で計測するのに対し、3D測量はレーザーで1秒間に最大200万点を自動取得します。面的にデータを取得するため計測漏れが少なく、後から任意の場所の寸法を確認できます。計測時間は従来の1/3〜1/5に短縮されます。" },
                { q: "3D測量のデータはどのように活用できますか？", a: "CAD図面作成、3Dモデル構築、BIM/CIMモデル構築、土量計算、干渉チェック、建物傾斜調査、経年変位計測、デジタルアーカイブなど幅広く活用できます。建設・建築・プラント・インフラ・文化財保存など7業種以上で利用されています。" },
                { q: "個人や中小企業でも依頼できますか？", a: "はい、個人・中小企業からの依頼も多数対応しています。住宅1棟の傾斜調査（15万円〜）からお受けしています。「まずは費用感を知りたい」という段階でも無料見積もりを受け付けています。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* 10. まとめ */}
            <h2 id="summary" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              まとめ｜3D測量は建設DXの中核技術
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量は、レーザースキャナやドローンで対象物を立体的にデータ化する技術です。従来測量と比較して計測時間を1/3〜1/5に短縮し、±1〜3mmの高精度データを取得できます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 3D測量は「点」ではなく「面」で計測し、計測漏れを防止できる</li>
                <li>• 地上レーザー・ドローン・ハンドヘルドの3手法を対象に応じて使い分ける</li>
                <li>• 費用は一般的な現場（500㎡）で15万円〜50万円が目安</li>
                <li>• BIM/CIM連携でi-Construction 2.0にも対応</li>
                <li>• AI自動化・デジタルツイン・PLATEAUなど最新技術との融合が進行中</li>
                <li>• 建設・建築・プラント・インフラ・文化財・不動産など7業種以上で活用が拡大</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量の導入を検討されている方は、まずは現場の課題をお聞かせください。対象物に適した計測手法と概算費用を、最短翌営業日にご提案いたします。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量・3Dスキャナ測量のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「何から始めればいいか分からない」という段階でも大丈夫です。25年以上の測量経験を持つ土地家屋調査士が、最適な計測プランをご提案します。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料見積もりを申し込む →
              </Link>
              <Link
                href="/price"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                料金・費用の目安を見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">→ 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説</Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">→ 3D測量の費用相場はいくら？料金の決まり方と見積もりのポイント</Link>
              <Link href="/blog/3d-vs-traditional-surveying" className="block text-sm text-primary hover:underline">→ 3D測量 vs 従来測量｜精度・コスト・スピードを徹底比較</Link>
              <Link href="/blog/choose-3d-surveying-company" className="block text-sm text-primary hover:underline">→ 3D測量業者の選び方｜失敗しない5つのチェックポイント</Link>
              <Link href="/blog/i-construction-3d-surveying" className="block text-sm text-primary hover:underline">→ i-Constructionと3D測量｜ICT施工に必要な測量技術を解説</Link>
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
