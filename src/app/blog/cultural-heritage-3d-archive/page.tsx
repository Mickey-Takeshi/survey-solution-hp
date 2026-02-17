import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "文化財の3Dデジタルアーカイブ｜事例と技術の最新動向",
  description:
    "文化財の3Dデジタルアーカイブとは、歴史的建造物や遺跡を3Dレーザースキャンで精密に記録し、デジタルデータとして保存・活用する取り組みです。精度±2mmの計測技術、活用事例4選、費用目安、導入の流れを解説します。",
  keywords: ["文化財 3Dアーカイブ", "文化財 デジタル記録", "文化財 3Dスキャン", "デジタルアーカイブ 文化財"],
  alternates: { canonical: "/blog/cultural-heritage-3d-archive" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "文化財の3Dデジタルアーカイブ｜事例と技術の最新動向",
  description:
    "文化財の3Dデジタルアーカイブとは、歴史的建造物や遺跡を3Dレーザースキャンで精密に記録し、デジタルデータとして保存・活用する取り組みです。計測技術・活用事例・費用目安・導入の流れを解説。",
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
    "@id": "https://surveysolution.pro/blog/cultural-heritage-3d-archive",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "文化財の3Dアーカイブにかかる費用はどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対象物の規模・計測手法・成果物の種類により異なりますが、小規模な石碑・彫刻（1m以内）で30万〜80万円、中規模の建造物（木造住宅1棟）で80万〜200万円、大規模な寺社仏閣・城郭で200万〜500万円以上が目安です。文化庁や自治体の補助金を活用できるケースもあります。",
      },
    },
    {
      "@type": "Question",
      name: "国宝や重要文化財でも3Dスキャンは可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3Dレーザースキャンは非接触で計測するため、文化財に物理的な影響を与えません。国宝・重要文化財の計測実績は全国で増加しており、文化庁も「文化財の記録・保存へのデジタル技術活用」を推進しています。計測前に所有者・管理者および教育委員会への届出が必要な場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "3Dデジタルアーカイブのデータはどのように保管・管理しますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "点群データ（E57・LAS形式）と3Dメッシュモデル（OBJ・PLY形式）をローカルサーバーとクラウドストレージの両方に保存するのが推奨です。データ容量は1件あたり5GB〜50GB程度で、メタ情報（計測日・座標系・精度情報）を付与して管理します。長期保存にはISO標準のE57形式が適しています。",
      },
    },
  ],
};

export default function CulturalHeritage3dArchivePage() {
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
          { name: "文化財の3Dデジタルアーカイブ", path: "/blog/cultural-heritage-3d-archive" },
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
                文化財
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              文化財の3Dデジタルアーカイブ｜事例と技術の最新動向
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-temple-heritage.jpg"
              alt="文化財の3Dデジタルアーカイブ - 日本の寺院"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>文化財の3Dデジタルアーカイブとは、歴史的建造物や遺跡を3Dレーザースキャンで精密に記録し、デジタルデータとして保存・活用する取り組みです。</strong>精度±2mmで形状を記録でき、修復計画の基礎資料、VR展示、学術研究、防災記録など多目的に活用できます。本記事では、文化財3Dアーカイブの基本から計測技術、活用事例、導入の流れ、費用目安まで、自治体・博物館の文化財担当者向けに体系的に解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#what" className="hover:underline">1. 文化財3Dアーカイブとは</a></li>
                <li><a href="#why" className="hover:underline">2. なぜ今デジタルアーカイブが必要か</a></li>
                <li><a href="#technology" className="hover:underline">3. 使用する計測技術</a></li>
                <li><a href="#cases" className="hover:underline">4. 活用事例4選</a></li>
                <li><a href="#flow" className="hover:underline">5. デジタルアーカイブの流れ</a></li>
                <li><a href="#cost" className="hover:underline">6. 費用と期間の目安</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 文化財3Dアーカイブとは */}
            <h2 id="what" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              文化財3Dアーカイブとは
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              文化財3Dアーカイブとは、歴史的建造物・遺跡・彫刻・美術工芸品などの文化財を3Dレーザースキャンやフォトグラメトリで計測し、三次元のデジタルデータとして記録・保存する手法です。従来の写真撮影や実測図面では記録できなかった立体的な形状情報を、±1〜3mmの精度で忠実に再現します。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              取得したデータは点群データ（数百万〜数億個の三次元座標点の集合体）や3Dメッシュモデルとして保存され、修復・研究・展示・防災など多方面で活用されます。文化庁は「文化財の記録作成等に関する技術的指針」においてデジタル技術の活用を推進しており、全国の自治体・博物館で導入が加速しています。
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-3">3Dデジタルアーカイブで記録できる情報：</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>・<strong>三次元形状（X, Y, Z座標）</strong>：柱・梁・屋根・壁面の寸法と位置関係をmm単位で記録</li>
                <li>・<strong>色情報（RGB）</strong>：表面の色彩・テクスチャを高解像度カラーで再現</li>
                <li>・<strong>経年変化・損傷状況</strong>：ひび割れ・変形・劣化箇所を定量的に把握</li>
                <li>・<strong>空間的コンテキスト</strong>：周辺環境との位置関係・配置構成を3Dで記録</li>
              </ul>
            </div>

            {/* 2. なぜ今デジタルアーカイブが必要か */}
            <h2 id="why" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              なぜ今デジタルアーカイブが必要か
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              文化財の3Dデジタルアーカイブが急務とされる背景には、災害リスク・老朽化の進行・技術継承の3つの課題があります。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">災害リスクへの備え</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  日本は地震・台風・豪雨・火災など自然災害が多発する国です。2019年の首里城火災、2024年の能登半島地震による歴史的建造物の倒壊など、文化財が一瞬で失われるリスクは常に存在します。3Dデジタルアーカイブがあれば、被災後の復元・修復の基礎資料として活用でき、形状と寸法を正確に再現する手がかりとなります。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">老朽化の進行</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  木造建造物を中心に、経年劣化による構造的な損傷が全国で進行しています。文化庁の調査によると、国指定文化財建造物の約40%が修理を必要としている状況です。3Dスキャンによる定期的な計測を行えば、変形・傾斜・ひび割れの進行を数値で把握でき、予防的な保全計画の策定に役立ちます。
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">技術継承と知識共有</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  伝統建築の修復技術を持つ職人の高齢化が進んでいます。3Dデータとして構造や工法を記録することで、修復技術の伝承資料として活用できます。また、デジタルデータは遠隔地の研究者とも共有可能で、学術研究や教育への活用範囲が広がります。
                </p>
              </div>
            </div>

            {/* 3. 使用する計測技術 */}
            <h2 id="technology" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              使用する計測技術
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              文化財の3Dアーカイブでは、3Dレーザースキャンとフォトグラメトリの2つの技術を対象物の特性に応じて使い分け、または組み合わせて使用します。
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">3Dレーザースキャン</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  レーザー光を照射し、反射光の往復時間から対象物までの距離を算出して三次元座標を取得する技術です。1秒間に最大200万点を計測でき、建造物の全体形状を±1〜3mmの精度で記録します。非接触で計測するため文化財に物理的影響を与えず、暗所や複雑な形状にも対応できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±1〜3mm</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">計測速度：最大200万点/秒</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">建造物・大型構造物に最適</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">フォトグラメトリ（写真測量）</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  複数の角度から撮影した大量の写真をソフトウェアで解析し、三次元モデルを生成する技術です。高解像度カメラで撮影するため、表面のテクスチャ（質感・色彩・模様）を忠実に再現できる点が強みです。彫刻・仏像・絵画など、色彩情報が重要な文化財に適しています。ドローンと組み合わせれば、屋根や塔の上部など人が近づけない箇所も計測できます。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">精度：±2〜5mm（近接撮影時）</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">彫刻・美術品・細部記録に最適</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>弊社の対応：</strong>文化財の種類・規模・求められる精度に応じて、レーザースキャンとフォトグラメトリを組み合わせたハイブリッド計測を実施しています。建造物全体の形状はレーザースキャンで取得し、装飾部分のテクスチャはフォトグラメトリで補完する手法により、形状精度と色彩再現性を両立します。
              </p>
            </div>

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">文化財の3Dアーカイブについて、具体的なご相談を承ります。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料相談を申し込む
              </Link>
            </div>

            {/* 4. 活用事例4選 */}
            <h2 id="cases" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              活用事例4選
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              文化財の3Dデジタルアーカイブは、保存だけでなく修復・展示・研究・製造の各分野で活用されています。代表的な4つの事例を紹介します。
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  num: "1",
                  title: "歴史的建造物の修復計画",
                  desc: "3Dスキャンで取得した点群データを基に、建造物の現況を正確に把握し修復計画を策定します。柱の傾き（0.1度単位）、壁面のひび割れ幅（0.5mm単位）、屋根の変形量を数値で記録できるため、修復箇所の優先順位づけと工事数量の算出精度が向上します。修復前後の3Dデータを比較すれば、施工品質の検証にも活用できます。",
                },
                {
                  num: "2",
                  title: "遺跡発掘の記録・保存",
                  desc: "発掘調査の各段階（表土除去・遺構検出・完掘状態）を3Dスキャンで記録します。発掘調査は「掘る＝壊す」行為であるため、各段階の三次元記録は復元不可能な情報を保存する唯一の手段です。従来の写真・実測図面では記録できなかった立体的な層位関係や遺物の出土状況を、正確に3Dデータとして残せます。",
                },
                {
                  num: "3",
                  title: "VR・AR展示コンテンツ",
                  desc: "3Dスキャンデータを基にVR（仮想現実）やAR（拡張現実）の展示コンテンツを制作します。来館者がVRゴーグルで建造物の内部を仮想体験したり、タブレット越しに復元された姿を重ね合わせて見る展示が全国の博物館で増加しています。物理的な制約なく文化財を体験できるため、アクセシビリティの向上にも貢献します。",
                },
                {
                  num: "4",
                  title: "3Dレプリカ（復元模型）の製作",
                  desc: "3Dスキャンデータを3Dプリンターで出力し、文化財の精密レプリカを製作します。原寸大のレプリカは触れることができるため、視覚障害者向けのユニバーサル展示に活用されています。また、縮小模型は教育教材やミュージアムショップの商品としても展開でき、文化財の普及啓発に役立ちます。",
                },
              ].map((item) => (
                <div key={item.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5. デジタルアーカイブの流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              デジタルアーカイブの流れ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              文化財の3Dデジタルアーカイブは、事前調査から納品まで5つのステップで進めます。対象物の規模により、全体の所要期間は2週間〜3か月程度です。
            </p>

            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "事前調査・計画策定", desc: "対象となる文化財の現地確認を行い、計測範囲・精度要件・成果物の種類を決定します。文化財の種別（国指定・県指定・市指定・未指定）に応じて必要な届出・許可申請も確認します。計測日程は天候・開館状況・行事スケジュールを考慮して調整します。" },
                { step: "STEP 2", title: "現地計測（3Dスキャン）", desc: "3Dレーザースキャナ・カメラ・ドローンを用いて現地計測を実施します。建造物1棟の場合、スキャン地点数は20〜50地点、所要日数は1〜3日が目安です。基準点測量を同時に行い、公共座標系への変換精度を確保します。" },
                { step: "STEP 3", title: "データ処理・合成", desc: "複数のスキャンデータをレジストレーション（位置合わせ）で統合し、ノイズ除去・クリーニングを行います。フォトグラメトリデータがある場合は点群データと統合し、色情報を付与します。処理後の点群データ容量は1件あたり5GB〜50GB程度です。" },
                { step: "STEP 4", title: "3Dモデル作成・成果物制作", desc: "処理済みの点群データから、用途に応じた成果物を作成します。3Dメッシュモデル（修復計画用）、オルソ画像（立面図用）、断面図、VRコンテンツ、3Dプリント用データなど、要件に応じて制作します。" },
                { step: "STEP 5", title: "納品・データ保管支援", desc: "成果物を納品し、長期保管に適したデータ形式（E57・LAS・OBJ）と保管方法をご提案します。メタ情報（計測日・使用機材・座標系・精度情報）を付与したデータカタログも合わせて納品します。クラウドストレージでの保管・共有の設定も支援します。" },
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

            {/* 6. 費用と期間の目安 */}
            <h2 id="cost" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              費用と期間の目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              文化財の3Dアーカイブ費用は、対象物の規模・計測手法・成果物の種類によって異なります。以下は一般的な目安です。
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">対象物の規模</th>
                    <th className="px-4 py-3 text-left">具体例</th>
                    <th className="px-4 py-3 text-left">費用目安（税別）</th>
                    <th className="px-4 py-3 text-left">期間目安</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { scale: "小規模", example: "石碑・仏像・彫刻（1m以内）", cost: "30万〜80万円", period: "2〜3週間" },
                    { scale: "中規模", example: "木造住宅・蔵・門（1棟）", cost: "80万〜200万円", period: "3〜6週間" },
                    { scale: "大規模", example: "寺社仏閣・城郭・遺跡", cost: "200万〜500万円以上", period: "1〜3か月" },
                    { scale: "オプション", example: "VRコンテンツ制作", cost: "50万〜150万円", period: "2〜4週間（追加）" },
                    { scale: "オプション", example: "3Dレプリカ製作", cost: "10万〜50万円/体", period: "2〜3週間（追加）" },
                  ].map((row, i) => (
                    <tr key={`${row.scale}-${row.example}`} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b whitespace-nowrap">{row.scale}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.example}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.cost}</td>
                      <td className="px-4 py-3 text-gray-700 border-b whitespace-nowrap">{row.period}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>補助金の活用：</strong>文化庁の「国宝重要文化財等保存・活用事業費補助金」や自治体独自の補助制度を活用することで、費用の50〜85%が補助されるケースがあります。弊社では補助金申請に必要な見積書・仕様書の作成もサポートしています。
              </p>
            </div>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "文化財の3Dアーカイブにかかる費用はどのくらいですか？",
                  a: "対象物の規模・計測手法・成果物の種類により異なりますが、小規模な石碑・彫刻（1m以内）で30万〜80万円、中規模の建造物（木造住宅1棟）で80万〜200万円、大規模な寺社仏閣・城郭で200万〜500万円以上が目安です。文化庁や自治体の補助金を活用できるケースもあります。",
                },
                {
                  q: "国宝や重要文化財でも3Dスキャンは可能ですか？",
                  a: "はい、可能です。3Dレーザースキャンは非接触で計測するため、文化財に物理的な影響を与えません。国宝・重要文化財の計測実績は全国で増加しており、文化庁も「文化財の記録・保存へのデジタル技術活用」を推進しています。計測前に所有者・管理者および教育委員会への届出が必要な場合があります。",
                },
                {
                  q: "3Dデジタルアーカイブのデータはどのように保管・管理しますか？",
                  a: "点群データ（E57・LAS形式）と3Dメッシュモデル（OBJ・PLY形式）をローカルサーバーとクラウドストレージの両方に保存するのが推奨です。データ容量は1件あたり5GB〜50GB程度で、メタ情報（計測日・座標系・精度情報）を付与して管理します。長期保存にはISO標準のE57形式が適しています。",
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
              文化財の3Dデジタルアーカイブは、歴史的建造物や遺跡の形状を±2mmの精度でデジタル記録し、修復・展示・研究・防災に活用できる技術です。災害リスクの増大と老朽化の進行を背景に、全国の自治体・博物館での導入が加速しています。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 文化財3Dアーカイブは、レーザースキャン（±1〜3mm）とフォトグラメトリ（±2〜5mm）で形状と色彩を記録する技術</li>
                <li>・ 災害リスク・老朽化・技術継承の3つの課題に対応する有効な手段</li>
                <li>・ 活用事例は建造物修復・遺跡発掘記録・VR展示・3Dレプリカ製作の4分野</li>
                <li>・ 事前調査→現地計測→データ処理→3Dモデル作成→納品の5ステップで実施</li>
                <li>・ 費用は30万〜500万円以上（対象物の規模による）。文化庁・自治体の補助金活用も可能</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              文化財のデジタル記録は「いつか」ではなく「今」取り組むべき課題です。災害や劣化で失われてからでは、記録を取ることはできません。弊社では、文化財の3Dアーカイブに関する計測計画の立案から成果物の作成まで一貫して対応しています。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              文化財の3Dデジタルアーカイブのご相談はお気軽に
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              「どの文化財から始めるべきか分からない」「補助金の活用方法を知りたい」という段階でも大丈夫です。まずはお気軽にご相談ください。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料相談を申し込む
              </Link>
              <Link
                href="/solution/heritage"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                文化財向けサービスを見る
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
              <Link href="/blog/point-cloud-guide" className="block text-sm text-primary hover:underline">
                → 点群データとは？取得方法・活用事例・必要なソフトウェアを解説
              </Link>
              <Link href="/blog/3d-surveying-use-cases" className="block text-sm text-primary hover:underline">
                → 3D測量の活用事例｜建設・土木・文化財・プラントでの導入効果
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
