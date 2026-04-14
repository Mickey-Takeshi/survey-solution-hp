import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "リノベーション前の3D計測ガイド｜現況把握で設計の手戻りゼロ",
  description:
    "リノベーション前に3D計測をすると、現況把握から設計反映までが劇的に効率化します。住宅・店舗・ビルの用途別料金、計測から納品までの流れ、失敗しないための5つのポイントを土地家屋調査士が解説。",
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
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "リノベーション前の3D計測ガイド｜現況把握で設計の手戻りゼロ",
  description:
    "リノベーション前の3D計測のメリット・費用・流れを解説。住宅・店舗・ビルの用途別料金目安と、失敗しない5つのポイント。",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
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
        text: "図面通りに建てられていない、経年変化で歪みが出ている、増改築で構造が変わっているなど、既存建物の現況は図面と一致しないことがほとんどです。3D計測なら±2〜3mmの精度で現況を把握でき、設計段階での手戻りをほぼゼロにできます。",
      },
    },
    {
      "@type": "Question",
      name: "リノベーション向け3D計測の料金はいくらですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "住宅リノベは15〜30万円、店舗・オフィスのリノベは30〜60万円、ビル・マンション全体のリノベは80万円〜が目安です。平面図・断面図・立面図のCADデータまで含めた金額で、追加料金なしでBIMモデルまで作成できる場合もあります。",
      },
    },
    {
      "@type": "Question",
      name: "計測にはどのくらいの時間がかかりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "住宅1棟なら現場スキャンは半日〜1日で完了します。データ処理と図面作成を含めた納品までの期間は、住宅なら1〜2週間、中規模ビルで2〜4週間が目安です。営業中の店舗やオフィスでも、非接触・無粉塵なので業務に影響を与えません。",
      },
    },
    {
      "@type": "Question",
      name: "家具がある状態でも計測できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "対応可能です。家具があっても壁・床・天井の形状は計測できます。ただし、家具で隠れる壁面は点群データに含まれないため、重要な寸法が必要な箇所は事前に片付けていただくと、より精度の高い現況データが取得できます。",
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
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
                課題解決
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              リノベーション前の3D計測ガイド｜現況把握で設計の手戻りゼロ
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-building-architecture.jpg"
              alt="リノベーション前の3D計測イメージ - 既存建物の点群データ化"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>リノベーション前に3D計測をすれば、設計の手戻りはほぼゼロになります。</strong>既存建物は図面通りに建っていないのが普通です。経年変化による歪み、増改築の履歴、図面の紛失——こうした不確実要素を、3Dレーザースキャンなら±2〜3mmの精度で一気に「見える化」できます。住宅1棟なら15万円〜・半日の現場作業で完了。リノベ設計者・施主・施工者の認識がそろい、追加工事や設計変更のリスクが激減します。
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
              「リノベ設計を進めているけれど、現況と図面が合わない」——これは、既存建物の改修現場でほぼ必ず発生する問題です。原因は主に3つあります。
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
              これらの問題をまとめて解決するのが、リノベ前の3D計測です。レーザースキャナを使えば、既存建物の現況を1日でミリ単位のデータに変換でき、設計段階から正確な情報を基に検討できます。
            </p>

            {/* 2. メリット */}
            <h2 id="benefit" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              リノベで3D計測を使う5つのメリット
            </h2>
            <div className="space-y-4 mb-8">
              {[
                { num: "1", title: "設計の手戻りがほぼゼロになる", desc: "現況データが正確なので、設計段階で「実物と合わない」問題が起きません。基本設計→実施設計→施工の各段階で発生する手戻り工数を大幅に減らせます。" },
                { num: "2", title: "施主への説明が圧倒的にわかりやすい", desc: "点群データから3Dモデルを作成すれば、施主と一緒に3Dビューで改修イメージを確認できます。「完成形がイメージできない」という施主の不安を一気に解消できます。" },
                { num: "3", title: "追加工事のリスクを事前に把握できる", desc: "壁の内部・天井裏・床下など、普段見えない部分の状態を点群データで可視化。予期しない補修工事の発生を減らせます。" },
                { num: "4", title: "1日で計測完了・業務への影響が最小", desc: "住宅1棟なら半日〜1日で現場スキャンが終わります。非接触・無粉塵なので、営業中の店舗やオフィスでも業務を止めずに計測できます。" },
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
                { step: "STEP 2", title: "現場スキャン（半日〜1日）", desc: "地上レーザースキャナを使い、建物全体を3Dデータ化します。住宅1棟なら半日〜1日で完了。非接触・無粉塵で、入居者がいる状態でも対応できます。" },
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
                { title: "納品物の形式を事前にすり合わせる", desc: "設計者がRevit派かArchiCAD派か、CADデータはDXFかDWGか。こうした細部は先に決めておくと、納品後の手戻りがありません。" },
                { title: "どこまで計測するか範囲を決める", desc: "敷地全体か、建物だけか、内部のみか。範囲が広がるほど費用も上がるので、必要最小限を事前に整理しましょう。" },
                { title: "家具・什器の扱いを確認する", desc: "家具を動かすか、そのままスキャンするか。重要な寸法が必要な箇所は、計測当日までに片付けておくのが理想です。" },
                { title: "天井裏・床下の調査を含めるか決める", desc: "配管・ダクトのルートを把握したいなら、点検口からの部分スキャンも検討しましょう。配管改修の手戻りを防げます。" },
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
              {[
                { q: "リノベーション前の3D計測はなぜ必要ですか？", a: "既存建物は図面通りに建っていないことが多く、経年変化や増改築で形状が変わっているためです。3D計測なら±2〜3mmの精度で現況を把握でき、設計段階での手戻りをほぼゼロにできます。" },
                { q: "リノベーション向け3D計測の料金はいくらですか？", a: "住宅リノベは15〜30万円、店舗・オフィスのリノベは30〜60万円、ビル・マンション全体のリノベは80万円〜が目安です。平面図・断面図・立面図のCADデータまで含めた金額です。" },
                { q: "計測にはどのくらいの時間がかかりますか？", a: "住宅1棟なら現場スキャンは半日〜1日で完了します。データ処理と図面作成を含めた納品までの期間は、住宅なら1〜2週間、中規模ビルで2〜4週間が目安です。" },
                { q: "家具がある状態でも計測できますか？", a: "対応可能です。家具があっても壁・床・天井の形状は計測できます。重要な寸法が必要な箇所は事前に片付けていただくと、より精度の高いデータが取れます。" },
                { q: "BIMモデルまで作ってもらえますか？", a: "はい、対応しています。点群データからRevit・ArchiCAD形式のBIMモデルを作成できます。費用は通常の現況図面作成＋30〜50万円が目安です。" },
              ].map((item) => (
                <div key={item.q} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">Q. {item.q}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.a}</p>
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
