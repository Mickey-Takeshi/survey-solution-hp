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
  dateModified: "2026-07-23",
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
        text: "地上レーザースキャナで±1〜3mm、ドローン測量（写真測量）で±2〜5cmの精度です。従来のTS測量（±2〜5mm）と同等以上の精度を、大幅に短い時間で達成できます。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量の費用はいくらかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的な現場（500㎡程度）で15万円〜50万円が目安です。地上レーザースキャンは15万円〜、ドローン測量は20万円〜、BIMモデル作成は50万円〜が相場。対象の規模・精度要件・納品物の種類によって変動します。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量と従来測量の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "従来のTS測量が1点ずつ手動で座標を取得するのに対し、3D測量はレーザーを360度照射して1秒間に最大200万点を自動取得します。面的にデータを取るため計測漏れが起きにくく、後から好きな場所の寸法を確認できる点が最大の違いです。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量のデータはどのように活用できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データからCAD図面（平面図・断面図・立面図）の作成、3DモデルやBIM/CIMモデルの構築、土量計算、干渉チェック、建物傾斜調査、経年変位計測、デジタルアーカイブなど用途は多岐にわたります。建設・建築・プラント・インフラ・文化財保存など7業種以上で導入が進んでいます。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量は個人や中小企業でも依頼できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろん対応しています。個人・中小企業からのご依頼も多くお受けしており、住宅1棟の傾斜調査（15万円〜）から対応可能です。「まず費用感だけ知りたい」という段階でも、無料見積もりをご利用ください。",
      },
    },
    {
      "@type": "Question",
      name: "3D測量と3D計測の違いは何ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "「3D測量」は土地・建物・地形の位置情報を高精度に取得することを指し、「3D計測」は対象物の形状・寸法を三次元的に測定することを指します。実務上はほぼ同義で使われることが多く、地上レーザースキャナを使って建物・構造物・プラントなどを三次元データ化する作業を総称して「3D測量・3D計測」と呼びます。",
      },
    },
    {
      "@type": "Question",
      name: "建物の3D計測はどんな用途に使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建物の3D計測は、①図面がない既存建物の現況図面作成、②リノベーション・改修工事の設計支援、③BIM化（スキャンtoBIM）、④建物傾斜・変位の調査、⑤竣工時の出来形確認など幅広く活用できます。特に「図面のない古い建物の現状を把握したい」というニーズに最適です。",
      },
    },
    {
      "@type": "Question",
      name: "3Dモデリングの料金・費用相場はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データからの3Dモデル作成（メッシュモデル）は10万円〜が目安です。BIMモデル（Revit・ArchiCAD形式）は建物の規模・複雑さにより50万円〜となります。CAD図面（平面図・断面図）は5万円〜/枚が目安です。詳しくは料金ページをご確認ください。",
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
              <time dateTime="2026-07-23" className="text-sm tracking-wider text-gray-500">
                2026.07.23 更新
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
              <strong>3D測量（三次元測量）とは、3Dレーザースキャナやドローンを使って対象物の形状を立体的にデータ化する測量技術です。</strong>1秒間に最大200万点の座標データ（点群データ）を取得し、従来測量の1/3〜1/5の時間で±1〜3mmの高精度な計測を実現します。i-Construction 2.0（2024年4月策定）の推進や2023年度からのBIM/CIM原則適用を背景に、建設・建築・プラント・インフラ・文化財保存など7業種以上で導入が加速しています。
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
              3D測量（三次元測量）とは、レーザー光やカメラ映像で対象物の三次元座標（X・Y・Z）を高密度に取得する測量技術です。数百万〜数億個の座標点の集合体、いわゆる「点群データ」によって、対象物の形状をデジタル空間にそのまま再現できます。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              この点群データをもとに、CAD図面（平面図・断面図・立面図）や3Dモデル、BIM/CIMデータといった設計・施工に必要な成果物へ展開していきます。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>従来測量との根本的な違い：</strong>従来のTS（トータルステーション）測量では、測りたい「点」を1つずつ手動で計測していました。3D測量はレーザーを360度照射して対象物全体を「面」で一気に自動計測します。測り漏れが起きにくく、後から好きな場所の寸法をデータ上で確認できる。これが最大の強みです。
              </p>
            </div>

            {/* 2. 方法 */}
            <h2 id="methods" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の3つの方法｜レーザー・ドローン・モバイル
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3D測量の手法は大きく3つ。対象物の規模や求める精度、現場の条件によって使い分けます。弊社では複数手法を組み合わせて、コストを抑えながら高品質なデータを取得するケースも多いです。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">① 地上レーザースキャン測量</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  三脚に設置した3Dレーザースキャナから360度にレーザーを照射し、1秒間に最大200万点の座標データを取得。精度±1〜3mmで、建物・プラント・トンネルなど高精度が求められる現場で真価を発揮します。弊社では2,000㎡の商業ビル全体を2日間でスキャンした実績があります。
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
                  ドローンに搭載したカメラで上空から大量の写真を撮影し、SfM（Structure from Motion）技術で3Dモデルを生成。1フライト約15〜20分で10ha以上の範囲をカバーできるため、広大な土地の地形測量に向いています。国土交通省のi-Construction基準に準拠した出来形管理にも対応できます。
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
                  手持ち型のスキャナを持って歩きながら計測する方法です。SLAM（Simultaneous Localization and Mapping）技術で、移動中にリアルタイムで点群を生成。狭い通路・階段・配管裏など、据置型スキャナでは死角になりがちな場所で特に威力を発揮します。
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
              3D測量と従来のTS（トータルステーション）測量を8つの指標で並べてみました。速度・データ量・後工程の柔軟性、いずれの面でも3D測量の優位性は明らかです。
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
              3D測量の導入効果は、計測業務の効率化にとどまりません。プロジェクト全体のコスト削減や品質向上にもつながります。弊社の実績を交えながら、5つのメリットを紹介します。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "計測時間を1/3〜1/5に短縮", desc: "レーザースキャナは1秒間に100万〜200万点のデータを自動取得。従来数日かかっていた計測が数時間で終わります。現場の交通規制時間や足場費用の削減にも直結するので、コストメリットは計測費だけにとどまりません。弊社では2,000㎡のビル全体を2日間でスキャンしています。" },
                { num: "2", title: "面的データで計測漏れを防止", desc: "「点」ではなく「面」で計測するため、測り忘れがまず起きません。後日、データ上から好きな場所の寸法や断面を抽出できるので、「もう一回現場に行かないと…」がなくなります。弊社の事例では現場戻り作業を90%削減できました。" },
                { num: "3", title: "±1〜3mmのミリ精度で品質向上", desc: "地上レーザースキャナの計測精度は±1〜3mm。手作業の実測（±10〜20mm）と比べると精度の差は歴然です。精度が上がれば設計の手戻りも減ります。弊社の事例では設計手戻りを50%削減しました。" },
                { num: "4", title: "BIM/CIM連携でi-Constructionに対応", desc: "点群データはRevit・ArchiCAD・Civil 3Dなど主要なBIM/CIMソフトに直接インポート可能。国土交通省が推進するi-Construction 2.0の3次元データ活用基準にも対応でき、「2040年度までに省人化3割」という政策目標への対応にもつながります。" },
                { num: "5", title: "非接触計測で安全性を向上", desc: "レーザーによる非接触計測なので、高所・法面・老朽化した構造物など人が近づきにくい場所も安全に計測可能。ドローンを併用すれば、足場や高所作業車なしで屋根・外壁のデータを取得でき、墜落・転落リスクをなくせます。" },
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
              <p className="text-sm text-gray-700 mb-3">3D測量の導入を検討中の方へ。対象物に合った計測手法と概算費用をお伝えします。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを申し込む →
              </Link>
            </div>

            {/* 5. 費用 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量の費用相場｜サービス別料金の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              対象面積500㎡程度の一般的な現場で、3D測量の費用は15万円〜50万円が目安です。サービス別の料金相場をまとめました。
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
              建設・土木を中心に、現在7つの業種で3D測量の導入が広がっています。業種ごとの活用方法と効果を見ていきましょう。
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
              3D測量を取り巻く環境はここ数年で大きく変わりました。2025〜2026年にかけて、実務に直結する4つのトレンドを押さえておきましょう。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">①  i-Construction 2.0の本格化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省の「i-Construction 2.0」では、「2040年度までに建設現場の省人化3割」が目標。2023年度（令和5年度）から国土交通省直轄の詳細設計・工事でBIM/CIMが原則適用となり（当初目標の2025年度から前倒し）、3D測量データの活用は公共工事の標準仕様になりつつあります。ICT施工や3次元出来形管理の適用範囲も広がっており、3D測量の需要は今後さらに増えるでしょう。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">② AIによる点群データ処理の自動化</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  AI（人工知能）による点群データの自動分類・ノイズ除去・3Dモデル自動生成が実用段階に入りました。これまで熟練オペレーターが数日かけていたデータ処理を、AIが数時間で片付けてくれる。結果として、3D測量のコスト低下と納期短縮が一気に進んでいます。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">③ デジタルツイン市場の急成長</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  建設デジタルツイン（現実の建物・インフラをデジタル空間に再現する技術）の市場規模は、2025年の約9.8兆円から2030年には約23.3兆円へ拡大する見込みです（年平均成長率17%）。3D測量はそのデジタルツインの「基盤データ」を提供する技術であり、存在感は年々増しています。
                </p>
              </div>

              <div className="bg-white border-l-4 border-primary p-5 rounded-r-lg">
                <h3 className="font-bold text-gray-900 mb-2">④ PLATEAU（3D都市モデル）との連携</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  国土交通省が推進する3D都市モデル「PLATEAU」は全国600都市以上に拡大中。PLATEAUの都市モデルと3D測量の点群データを重ね合わせることで、都市開発シミュレーションや防災計画、景観検討などに活かす事例が増えてきました。
                </p>
              </div>
            </div>

            {/* 8. 依頼の流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3D測量を依頼する流れ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              弊社に3D測量をご依頼いただく場合の流れをご紹介します。初回相談から納品まで、通常2〜4週間です。
            </p>
            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "無料相談・ヒアリング", desc: "何を測りたいか、どんな精度が必要か、どんな成果物がほしいかをヒアリングし、最適な計測手法と概算費用をご提案します。お電話（075-744-1775）またはメールフォームからお気軽にどうぞ。" },
                { step: "STEP 2", title: "現地確認・正式見積もり", desc: "必要に応じて現地を確認し、正確な作業範囲・条件を反映した正式見積もりをお出しします。現地確認は無料です。" },
                { step: "STEP 3", title: "現場スキャン・データ取得", desc: "レーザースキャナやドローンで現場を計測。対象規模にもよりますが、現場作業は1日〜数日で完了します。" },
                { step: "STEP 4", title: "データ処理・成果物作成", desc: "複数のスキャンデータを合成し、高品質な点群データに仕上げます。ご要望に応じてCAD図面・3Dモデル・BIMモデルなども作成。" },
                { step: "STEP 5", title: "納品・アフターサポート", desc: "成果物を納品後、データの活用方法もサポートします。追加計測や修正のご依頼にも柔軟に対応しますのでご安心ください。" },
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
                { q: "3D測量の精度はどれくらいですか？", a: "地上レーザースキャナで±1〜3mm、ドローン測量で±2〜5cmです。対象物の表面素材や計測距離によって多少変動しますが、従来の手作業実測（±10〜20mm）と比べるとかなり高い精度が出ます。" },
                { q: "3D測量の費用はいくらかかりますか？", a: "一般的な現場（500㎡程度）で15万円〜50万円が目安。住宅1棟の傾斜調査なら15万円〜、ドローン測量は20万円〜、BIMモデル作成は50万円〜です。無料見積もりも受け付けていますので、まずはお気軽にご相談ください。" },
                { q: "3D測量と従来測量の違いは何ですか？", a: "従来のTS測量が1点ずつ手動で計測するのに対し、3D測量はレーザーで1秒間に最大200万点を自動取得。面的にデータを取るため計測漏れが少なく、後から好きな場所の寸法を確認できます。計測時間は従来の1/3〜1/5程度です。" },
                { q: "3D測量のデータはどのように活用できますか？", a: "CAD図面作成、3Dモデルの構築、BIM/CIMモデル構築、土量計算、干渉チェック、建物傾斜調査、経年変位計測、デジタルアーカイブなど用途は多岐にわたります。建設・建築・プラント・インフラ・文化財保存など7業種以上で使われています。" },
                { q: "個人や中小企業でも依頼できますか？", a: "もちろんです。個人・中小企業からのご依頼も多くお受けしています。住宅1棟の傾斜調査（15万円〜）から対応可能です。「まず費用感だけ知りたい」という段階でも、無料見積もりをご利用ください。" },
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
              3D測量は、レーザースキャナやドローンで対象物を丸ごと立体データ化する技術です。従来測量に比べて計測時間は1/3〜1/5、精度は±1〜3mm。速くて正確なデータが手に入ります。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>• 「点」ではなく「面」で計測するから、測り漏れが起きにくい</li>
                <li>• 地上レーザー・ドローン・ハンドヘルドの3手法を現場に応じて使い分け</li>
                <li>• 費用目安は一般的な現場（500㎡）で15万円〜50万円</li>
                <li>• BIM/CIM連携でi-Construction 2.0にも対応可能</li>
                <li>• AI自動化・デジタルツイン・PLATEAUなど最新技術との融合が進行中</li>
                <li>• 建設・建築・プラント・インフラ・文化財・不動産など7業種以上で活用拡大中</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D測量の導入を検討されている方は、まずは現場の課題をお聞かせください。対象物に合った計測手法と概算費用を、最短翌営業日にお伝えします。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              3D測量・3Dスキャナ測量のご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「何から始めればいいか分からない」という段階で構いません。25年以上の測量経験を持つ土地家屋調査士が、最適な計測プランを一緒に考えます。
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
              <Link href="/blog/building-3d-scan" className="block text-sm text-primary hover:underline">→ 建物の3D計測とは？費用相場・精度・建築現場での活用シーンを解説</Link>
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
