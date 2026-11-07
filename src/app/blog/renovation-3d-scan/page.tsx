import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const articleTitle = "リノベーション前の3D計測ガイド｜現況把握で設計の手戻りを減らす";
const articleDescription = "リノベーション前の3D計測で、現在の形状を設計者・施主・施工者と共有。計測できる範囲と追加調査の違い、用途別の料金目安、納品までの流れ、依頼前の確認事項を解説します。";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  keywords: [
    "リノベーション 3D計測",
    "リノベーション 3Dスキャン",
    "リノベ 現況調査",
    "建物 3D計測",
    "リノベ 図面作成",
    "既存建物 BIM化",
    "スキャンtoBIM",
  ],
  alternates: { canonical: "/blog/renovation-3d-scan" },
  openGraph: {
    type: "article", title: articleTitle, description: articleDescription,
    url: "/blog/renovation-3d-scan", publishedTime: "2026-04-15", modifiedTime: "2026-11-07",
    images: [{ url: "/images/blog-building-architecture.jpg", width: 1200, height: 630, alt: "既存建物の外観イメージ" }],
  },
  twitter: { card: "summary_large_image", title: articleTitle, description: articleDescription, images: ["/images/blog-building-architecture.jpg"] },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "リノベーション前の3D計測ガイド｜現況把握で設計の手戻りを減らす",
  description:
    "リノベーション前の3D計測のメリット・費用・流れを解説。住宅・店舗・ビルの用途別料金目安と、失敗しない5つのポイント。",
  datePublished: "2026-04-15",
  dateModified: "2026-11-07",
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
    "@id": "https://surveysolution.pro/blog/renovation-3d-scan",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "リノベーション前の3D計測はなぜ必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "増改築や経年変化で、既存図面と現在の形状が異なる場合があるためです。3D計測は、計測可能な面の形状を設計者と共有し、寸法や位置の不一致による手戻りを減らすために活用できます。精度は現場条件と計測仕様に応じて確認します。",
      },
    },
    {
      "@type": "Question",
      name: "リノベーション向け3D計測の料金はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "住宅リノベは15〜30万円、店舗・オフィスのリノベは30〜60万円、ビル・マンション全体のリノベは80万円〜が目安です。対象範囲・図面やBIMの仕様・立入り条件によって変わるため、納品物と金額は個別見積もりでご確認ください。",
      },
    },
    {
      "@type": "Question",
      name: "計測にはどのくらいの時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "住宅1棟の現場スキャンは半日〜1日、データ処理と図面作成を含めた納品は住宅で1〜2週間、中規模ビルで2〜4週間が目安です。実際の工程は計測範囲や現場条件に応じて確認します。入居中・営業中の場合は、立入りや作業時間を事前に調整します。",
      },
    },
    {
      "@type": "Question",
      name: "家具がある状態でも計測できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "家具がある状態でも、レーザーが届く面は計測できます。家具で隠れた面は取得できないため、必要な寸法と移動できる家具を事前に確認します。取得できなかった範囲は、追加調査の要否とともに整理します。",
      },
    },
    {
      "@type": "Question",
      name: "BIMモデルまで作ってもらえますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、対応しています。取得した点群データからRevit・ArchiCAD形式のBIMモデルを作成できます（スキャンtoBIM）。壁・床・柱・開口部を個別オブジェクトとして扱えるので、改修設計がスムーズに進みます。費用は通常の現況図面作成＋30〜50万円が目安です。",
      },
    },
  ],
};

export default function Renovation3DScanPage() {
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
        image="/images/blog-mv.jpg"
        as="p"
        breadcrumbItems={[
          { name: "ブログ", path: "/blog" },
          { name: "リノベーション前の3D計測ガイド", path: "/blog/renovation-3d-scan" },
        ]}
      />

      <article className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          {/* 記事ヘッダー */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <time dateTime="2026-04-15" className="text-sm tracking-wider text-gray-500">
                2026.04.15
              </time>
              <span className="text-xs text-gray-500">更新：<time dateTime="2026-11-07">2026.11.07</time></span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                課題解決
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              リノベーション前の3D計測ガイド｜現況把握で設計の手戻りを減らす
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-building-architecture.jpg"
              alt="現況図を準備する既存建物の外観イメージ"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>リノベーション前の3D計測は、現在の形状を設計者・施主・施工者で共有し、設計の手戻りを減らすために役立ちます。</strong>増改築や経年変化により、残っている図面と現況が異なる場合があります。必要な範囲を計測し、図面・点群・BIMモデルとして整理します。見えない部分の調査は別に検討し、計測条件に合わせて精度と工程を確認しましょう。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#why" className="hover:underline">1. なぜリノベ前の3D計測が必要なのか</a></li>
                <li><a href="#benefit" className="hover:underline">2. リノベで3D計測を使う5つのメリット</a></li>
                <li><a href="#price" className="hover:underline">3. 用途別の料金目安</a></li>
                <li><a href="#flow" className="hover:underline">4. 計測から納品までの流れ</a></li>
                <li><a href="#checklist" className="hover:underline">5. 失敗しない5つのチェックポイント</a></li>
                <li><a href="#faq" className="hover:underline">6. よくある質問</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. なぜ必要か */}
            <h2 id="why" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              なぜリノベ前の3D計測が必要なのか
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              「リノベ設計を進めているけれど、現況と図面が合わない」。既存建物の改修では、次のような理由で資料と現況の照合が必要になります。
            </p>
            <div className="space-y-3 mb-6">
              {[
                { title: "図面が残っていない", desc: "築30年以上の建物では、竣工図そのものが失われているケースが珍しくありません。確認申請図しか残っておらず、実際の寸法が不明な建物も多いです。" },
                { title: "図面と実物が食い違う", desc: "施工段階での変更、入居後の増改築、補修工事などで、図面と実際の建物の形状が合わないケース。特に内装・配管・建具周りで発生しがちです。" },
                { title: "経年変化で歪みが出ている", desc: "地盤沈下、木造建物の反り、鉄筋コンクリートのひび割れなど、長年の経年変化で数センチレベルの歪みが発生していることも。設計段階で把握できないと、施工時に大きな手戻りになります。" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3D計測は、計測できる範囲の形状や寸法を現況資料にする方法です。作業日数や精度は、建物の規模・遮蔽物・立入り条件・必要な成果物に応じて決めます。大規模な改修で確認申請の準備が必要な場合は、<Link href="/blog/renovation-drawings-2025-law" className="text-primary underline underline-offset-4">2025年法改正後の図面準備と相談先</Link>もご覧ください。
            </p>

            {/* 2. メリット */}
            <h2 id="benefit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              リノベで3D計測を使う5つのメリット
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "寸法や位置の不一致による手戻りを減らす", desc: "現況資料と設計図を照合することで、建具や設備の配置を検討しやすくなります。未計測の箇所や構造・劣化の調査は別に整理します。" },
                { num: "2", title: "施主への説明が圧倒的にわかりやすい", desc: "点群データから3Dモデルを作成すれば、施主と一緒に3Dビューで改修イメージを確認できます。「完成形がイメージできない」という施主の不安を一気に解消できます。" },
                { num: "3", title: "計測した範囲と、追加調査が必要な箇所を整理する", desc: "レーザーが届く露出面の形状を点群データにします。壁内部を透視するものではありません。天井裏・床下は点検口や立入り条件によって取得範囲が変わり、開口調査や材料・劣化の調査が必要な箇所は設計者と確認します。" },
                { num: "4", title: "利用状況に合わせて計測工程を調整する", desc: "住宅1棟の現場スキャンは半日〜1日が目安です。実際の工程は対象範囲・立入り条件・営業時間に応じて調整し、営業中の場合は作業区域や時間帯を事前に相談します。" },
                { num: "5", title: "図面・BIMモデルの納品で次工程がスムーズ", desc: "平面図・断面図・立面図のCADデータはもちろん、BIMモデルまで作成できます。Revit・ArchiCADにそのまま読み込めるので、設計フローを止めません。" },
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
              <p className="text-sm text-gray-700 mb-3">リノベ計画の現況調査でお悩みですか？まずは無料見積もりから始められます。</p>
              <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                無料見積もりを依頼する
              </Link>
            </div>

            {/* 3. 料金 */}
            <h2 id="price" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              用途別の料金目安
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              リノベ向け3D計測の料金は、建物の規模と納品物の種類で決まります。代表的なケースの費用目安を整理しました。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">対象</th>
                    <th className="px-4 py-3 text-left">料金目安（税別）</th>
                    <th className="px-4 py-3 text-left">納品物</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "住宅リノベ（30〜80㎡）", price: "15万〜30万円", deliv: "平面図・断面図・立面図のCADデータ" },
                    { type: "店舗・オフィスリノベ（100〜300㎡）", price: "30万〜60万円", deliv: "図面一式＋点群データ納品" },
                    { type: "ビル・マンション全体リノベ", price: "80万円〜", deliv: "階層別現況図＋BIMモデル" },
                    { type: "古民家・文化財リノベ", price: "30万円〜", deliv: "現況図＋点群データ＋修復計画資料" },
                  ].map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.type}</td>
                      <td className="px-4 py-3 text-primary font-bold border-b whitespace-nowrap">{row.price}</td>
                      <td className="px-4 py-3 text-gray-700 text-xs border-b">{row.deliv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-8">
              BIMモデル作成を追加する場合は、上記金額＋30〜50万円が目安です。設計・施工・竣工まで一気通貫で使えるので、トータルコストを抑えられます。詳しくは<Link href="/blog/3d-surveying-cost" className="text-primary hover:underline">3D測量の費用相場の記事</Link>もあわせてご覧ください。
            </p>

            {/* 4. 流れ */}
            <h2 id="flow" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              計測から納品までの流れ
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { step: "STEP 1", title: "ヒアリング・現地下見", desc: "建物の規模、計測範囲、納品物のご要望をお伺いします。必要に応じて現地を下見し、正確な見積もりを作成します。" },
                { step: "STEP 2", title: "現場スキャン（半日〜1日が目安）", desc: "地上レーザースキャナで、合意した範囲の計測可能な面を取得します。工程は対象範囲・立入り条件に応じて調整し、入居中・営業中の作業は事前に相談します。" },
                { step: "STEP 3", title: "データ処理・点群作成（3〜5日）", desc: "複数のスキャンデータを合成し、ノイズ除去・座標変換を経てクリーンな点群データに仕上げます。" },
                { step: "STEP 4", title: "CAD図面・BIMモデル作成（5〜10日）", desc: "点群データから平面図・断面図・立面図のCADデータ、必要に応じてBIMモデルを作成します。" },
                { step: "STEP 5", title: "納品・アフターサポート", desc: "納品後も追加の断面図作成やデータ形式変換などにご対応します。設計中に発生する疑問にも無料でお答えします。" },
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

            {/* 5. チェックポイント */}
            <h2 id="checklist" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              失敗しない5つのチェックポイント
            </h2>
            <div className="space-y-3 mb-8">
              {[
                { title: "納品物の形式を事前にすり合わせる", desc: "設計者が使用するソフト、CADデータはDXFかDWGか、図面に必要な情報は何かを先に決め、納品後の変換や追加作業を減らします。" },
                { title: "どこまで計測するか範囲を決める", desc: "敷地全体か、建物だけか、内部のみか。範囲が広がるほど費用も上がるので、必要最小限を事前に整理しましょう。" },
                { title: "家具・什器の扱いを確認する", desc: "家具を動かすか、そのままスキャンするか。重要な寸法が必要な箇所は、計測当日までに片付けておくのが理想です。" },
                { title: "天井裏・床下の調査を含めるか決める", desc: "点検口の位置や大きさ、機器を設置できる場所、レーザーが届く範囲を確認します。隠れた配管や部材まで取得できるとは限らないため、追加調査の必要性を設計者と整理します。" },
                { title: "スケジュール余裕を確保する", desc: "現場スキャンから納品まで1〜2週間が目安です。設計締切から逆算して、余裕を持って依頼するのが成功の秘訣です。" },
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-600">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 6. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {faqJsonLd.mainEntity.map((item) => (
                <div key={item.name} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.name}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              リノベーション前の3D計測はお気軽にご相談を
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              対象建物の規模・所在地をお伝えいただければ、1〜2営業日で概算見積もりをお出しします。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 py-3 text-sm font-bold rounded hover:bg-primary-dark transition-colors"
              >
                無料見積もりを依頼する
              </Link>
              <Link
                href="/price"
                className="inline-block border-2 border-primary text-primary px-8 py-3 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
              >
                料金ページを見る
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-lg font-bold text-gray-800 mb-4">関連記事</h3>
            <div className="space-y-3">
              <Link href="/blog/renovation-drawings-2025-law" className="block text-sm text-primary hover:underline">→ 大規模リフォームで図面がないときの準備と相談先</Link>
              <Link href="/blog/kyoto-machiya-purchase-survey" className="block text-sm text-primary hover:underline">→ 京都の町家購入前に確認したい図面と敷地</Link>
              <Link href="/blog/no-drawings-solution" className="block text-sm text-primary hover:underline">→ 図面がない建物の現況図を作る方法｜3Dスキャンで正確に再現</Link>
              <Link href="/blog/bim-3d-scan" className="block text-sm text-primary hover:underline">→ BIM連携の3Dスキャン｜スキャンtoBIMの仕組みと導入メリット</Link>
              <Link href="/blog/3d-surveying-cost" className="block text-sm text-primary hover:underline">→ 3D測量・3Dモデリングの料金相場｜種類別の費用と見積もりのポイント</Link>
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
