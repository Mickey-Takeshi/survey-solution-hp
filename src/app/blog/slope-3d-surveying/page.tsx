import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "法面測量を3Dレーザーで行うメリットと注意点",
  description:
    "法面測量に3Dレーザースキャンを導入するメリットと注意点を解説。非接触で安全に計測でき、面的データにより変位を±5mmの精度で管理可能。従来のTS測量との比較やドローンとの使い分けまで、土木現場の測量担当者向けにまとめました。",
  keywords: ["法面 測量 3D", "法面 3Dスキャン", "法面測量 レーザースキャン", "法面 変位計測"],
  alternates: { canonical: "/blog/slope-3d-surveying" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "法面測量を3Dレーザーで行うメリットと注意点",
  description:
    "法面測量に3Dレーザースキャンを導入するメリットと注意点を解説。非接触で安全に計測でき、面的データにより変位を±5mmで管理可能です。",
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
    "@id": "https://surveysolution.pro/blog/slope-3d-surveying",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "法面の3Dレーザー測量にかかる費用はどれくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "法面の規模や現場条件によりますが、1法面（延長100m程度）あたり30万〜60万円が目安です。複数法面をまとめて計測する場合や、定期モニタリング契約では単価を抑えられます。まずは現場情報をお聞かせいただければ、無料でお見積もりいたします。",
      },
    },
    {
      "@type": "Question",
      name: "急勾配の法面でも3Dレーザー測量は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可能です。3Dレーザースキャナは非接触で計測するため、人が立ち入れない急勾配（45度以上）の法面でも安全に計測できます。スキャナの設置位置を法尻や対岸に変えることで、死角を減らしながら法面全体のデータを取得します。",
      },
    },
    {
      "@type": "Question",
      name: "既存のTS測量データと3Dレーザーのデータは比較できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "比較可能です。TS測量の座標データを3Dレーザーの点群データに重ね合わせることで、同一座標系上での差分解析が行えます。過去のTS測量データとの経年比較にも対応していますので、既存データを無駄にすることなく3D管理へ移行できます。",
      },
    },
  ],
};

export default function Slope3DSurveyingPage() {
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
          { name: "法面測量を3Dレーザーで行うメリット", path: "/blog/slope-3d-surveying" },
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
                土木応用
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              法面測量を3Dレーザーで行うメリットと注意点
            </h1>
          </div>

          {/* アイキャッチ */}
          <div className="relative aspect-video mb-10 rounded-lg overflow-hidden">
            <Image
              src="/images/blog-hillside-slope.jpg"
              alt="法面測量のイメージ - 斜面"
              fill
              className="object-cover"
            />
          </div>

          {/* リード文 */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-10">
            <p className="text-base leading-loose text-gray-700">
              <strong>法面測量に3Dレーザースキャンを活用すると、非接触で安全に計測でき、面的データにより変位を±5mmの精度で管理できます。</strong>従来のTS測量による断面計測と比較して、計測時間を1/3に短縮し、変状の見落としリスクを大幅に低減します。本記事では、法面測量の課題から3Dレーザーの仕組み、導入メリット、注意点、ドローンとの使い分けまで、土木現場の測量担当者向けに解説します。
            </p>
          </div>

          {/* 目次 */}
          <div className="bg-gray-50 p-6 rounded-lg mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4">目次</h2>
            <nav>
              <ol className="space-y-2 text-sm text-primary">
                <li><a href="#challenges" className="hover:underline">1. 法面測量の課題（安全性・精度・面的管理）</a></li>
                <li><a href="#mechanism" className="hover:underline">2. 3Dレーザーによる法面測量の仕組み</a></li>
                <li><a href="#merits" className="hover:underline">3. 3Dレーザー法面測量の4つのメリット</a></li>
                <li><a href="#cautions" className="hover:underline">4. 導入時の注意点3つ</a></li>
                <li><a href="#comparison" className="hover:underline">5. 従来測量との比較</a></li>
                <li><a href="#drone" className="hover:underline">6. ドローンとの使い分け</a></li>
                <li><a href="#faq" className="hover:underline">7. よくある質問</a></li>
                <li><a href="#summary" className="hover:underline">8. まとめ</a></li>
              </ol>
            </nav>
          </div>

          {/* 本文 */}
          <div className="prose prose-gray max-w-none">
            {/* 1. 法面測量の課題 */}
            <h2 id="challenges" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              法面測量の課題（安全性・精度・面的管理）
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              法面は道路や宅地造成、ダムなどの土木構造物に不可欠な斜面ですが、その測量には特有の課題があります。従来のトータルステーション（TS）による法面測量では、作業員が急勾配の斜面に立ち入り、断面ごとにプリズムを据えて計測する必要がありました。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              法面測量における主な課題は以下の3つです。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "安全性の問題",
                  desc: "急勾配の法面では、作業員の転落・滑落リスクが常に伴います。特に雨天後の湿潤状態や、崩壊の兆候がある法面では、立入り自体が危険です。安全帯の装着や仮設足場の設置が必要になり、準備工だけで半日以上を費やすケースもあります。",
                },
                {
                  title: "精度と密度の限界",
                  desc: "TS測量は「点」のデータしか取得できず、通常は5〜10m間隔の断面で計測します。断面間の変状や局所的なはらみ出しを見落とすリスクがあり、法面全体の変位傾向を正確に把握するには密度が不足しています。",
                },
                {
                  title: "面的管理の困難さ",
                  desc: "断面データから法面全体の変位を推定するには補間が必要であり、実測値と推定値の乖離が生じます。経年変化の管理においても、毎回同一断面位置で計測する再現性の確保が難しく、比較精度に課題がありました。",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-lg p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 2. 3Dレーザーによる法面測量の仕組み */}
            <h2 id="mechanism" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dレーザーによる法面測量の仕組み
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dレーザースキャナは、レーザー光を毎秒数十万〜数百万発照射し、対象物までの距離と角度から3次元座標を取得する計測機器です。法面測量では、法尻や対岸の安全な位置にスキャナを設置し、法面全体を非接触で面的にスキャンします。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              計測の流れは以下の通りです。まず、法面周辺に基準点（ターゲット）を設置し、既知点との座標整合を行います。次に、3Dレーザースキャナを1〜3箇所に据えて法面を360度スキャンします。1回のスキャンで数百万〜数千万点の点群データを取得でき、点間隔は計測距離50mで約5mmと非常に高密度です。
            </p>
            <p className="text-base leading-loose text-gray-700 mb-4">
              取得した点群データは専用ソフトウェアで合成・座標変換し、不要なノイズ（植生・構造物など）を除去してクリーンな法面データを作成します。このデータからTINモデル（不整三角形網）やメッシュモデルを生成し、設計面との差分解析や経年比較に活用します。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>計測距離と精度の関係：</strong>一般的な地上型3Dレーザースキャナの場合、計測距離100m以内で±3〜5mmの精度を確保できます。法面の延長が長い場合は複数箇所からスキャンし、ターゲットを介して点群を合成することで精度を維持します。
              </p>
            </div>

            {/* 3. 4つのメリット */}
            <h2 id="merits" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              3Dレーザー法面測量の4つのメリット
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dレーザースキャンを法面測量に導入することで、従来手法では実現できなかった以下の4つのメリットが得られます。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "非接触で安全に計測できる",
                  desc: "作業員が法面に立ち入る必要がなく、法尻や道路上の安全な位置から計測できます。急勾配・高所・崩壊リスクのある法面でも作業員の安全を確保しながらデータ取得が可能です。転落事故のリスクを根本的に排除でき、安全帯や仮設足場の設置工も不要になります。",
                },
                {
                  num: "2",
                  title: "±5mmの高精度で変位を管理できる",
                  desc: "3Dレーザースキャナは±3〜5mmの計測精度を持ち、法面の微小な変位も確実に検出します。TS測量の計測精度（±5〜10mm）と比較して同等以上の精度を、面的データとして取得できるのが大きな強みです。クラックの進展や局所的なはらみ出しなど、断面計測では見逃しやすい変状も捉えられます。",
                },
                {
                  num: "3",
                  title: "面的データで法面全体を管理できる",
                  desc: "従来の断面管理（5〜10m間隔の線データ）から、法面全体の面管理に移行できます。数百万点の点群データにより、断面間の変状も見落としなく把握できます。ヒートマップ形式で変位量を色分け表示すれば、対策が必要な箇所を視覚的に特定でき、維持管理の優先順位付けにも役立ちます。",
                },
                {
                  num: "4",
                  title: "経年変化を定量的に比較できる",
                  desc: "同一座標系で取得した点群データ同士を重ね合わせることで、経年変化を定量的に把握できます。1回目と2回目の計測データの差分をメッシュ単位で算出し、変位量・変位方向・変位速度を数値で管理できます。定期モニタリングにより、変状の進行速度を早期に検知し、対策工の要否判断を支援します。",
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

            {/* 中間CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-center">
              <p className="text-sm text-gray-700 mb-3">法面の3Dレーザー測量をご検討中ですか？まずはお気軽にご相談ください。</p>
              <Link href="/solution/construction" className="inline-block bg-primary text-white px-6 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors">
                建設向け3D測量サービスを見る
              </Link>
            </div>

            {/* 4. 注意点3つ */}
            <h2 id="cautions" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              導入時の注意点3つ
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              3Dレーザーによる法面測量は多くのメリットがある一方、現場条件によっては注意が必要なポイントがあります。
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  num: "1",
                  title: "植生がある法面ではフィルタリングが必要",
                  desc: "草木が繁茂している法面では、レーザーが植生表面に反射し、地表面データを直接取得できないことがあります。点群処理ソフトウェアで植生と地表面を分離するフィルタリング作業が必要です。密な植生では精度が低下する可能性があるため、伐採後の計測が望ましい場合もあります。計測前に現地の植生状況を確認し、適切な対策を検討することが重要です。",
                },
                {
                  num: "2",
                  title: "雨天・濃霧時は計測精度が低下する",
                  desc: "3Dレーザースキャナのレーザー光は、雨滴や霧の粒子で散乱・減衰します。強い雨天や濃霧の条件下では、計測距離の短縮やノイズの増加が発生し、所定の精度を確保できない場合があります。計測は晴天〜曇天時に実施するのが基本であり、天候によるスケジュール変更の可能性を計画段階で見込んでおく必要があります。",
                },
                {
                  num: "3",
                  title: "基準点の設置と座標管理が精度を左右する",
                  desc: "3Dレーザー測量の精度は、基準点（ターゲット）の設置精度に依存します。基準点の座標が不正確であれば、点群データ全体にその誤差が波及します。特に経年比較を行う場合は、毎回同一の基準点を使用する必要があり、基準点の永久標識化や座標値の厳密な管理が求められます。弊社では全案件で基準点測量を実施し、座標の整合性を確認してからスキャンを行います。",
                },
              ].map((c) => (
                <div key={c.num} className="flex items-start gap-4 bg-white border border-gray-200 p-5 rounded-lg">
                  <span className="shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">{c.num}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{c.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 5. 従来測量との比較 */}
            <h2 id="comparison" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              従来測量との比較
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-6">
              TS測量と3Dレーザー測量の違いを比較表にまとめます。法面測量における各手法の特徴を把握し、最適な手法選定にお役立てください。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">TS測量（従来手法）</th>
                    <th className="px-4 py-3 text-left">3Dレーザー測量</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測方式", ts: "接触（プリズム据付）", laser: "非接触（レーザー照射）" },
                    { item: "計測精度", ts: "±5〜10mm（点）", laser: "±3〜5mm（面）" },
                    { item: "データ密度", ts: "断面5〜10m間隔の点データ", laser: "5mm間隔の面的点群データ" },
                    { item: "作業員の法面立入り", ts: "必要", laser: "不要" },
                    { item: "1法面の計測時間", ts: "半日〜1日", laser: "1〜3時間" },
                    { item: "変状の検出力", ts: "断面上の変位のみ", laser: "面全体の変位を検出" },
                    { item: "経年比較", ts: "同一断面位置の再現が困難", laser: "座標系統一で定量的に比較" },
                    { item: "成果物", ts: "横断図・変位量一覧表", laser: "点群・TINモデル・ヒートマップ" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.ts}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.laser}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              3Dレーザー測量は、安全性・計測密度・作業効率のすべてでTS測量を上回ります。ただし、TS測量にも境界確定測量やごく狭い範囲の計測など、ピンポイントで活用する場面はあります。法面測量においては、面的管理が求められる現在、3Dレーザーへの移行が合理的な選択です。
            </p>

            {/* 6. ドローンとの使い分け */}
            <h2 id="drone" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              ドローンとの使い分け
            </h2>
            <p className="text-base leading-loose text-gray-700 mb-4">
              法面の3D測量では、地上レーザースキャンに加えてドローン（UAV）測量も選択肢に入ります。どちらを採用するかは、法面の規模・形状・求められる精度によって判断します。
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-left">比較項目</th>
                    <th className="px-4 py-3 text-left">地上3Dレーザー</th>
                    <th className="px-4 py-3 text-left">ドローン測量</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: "計測精度", laser: "±3〜5mm", drone: "±2〜5cm" },
                    { item: "適した法面規模", laser: "延長〜300m程度", drone: "延長300m以上の広域法面" },
                    { item: "急勾配対応", laser: "法尻・対岸から計測可能", drone: "急斜面では写真のオーバーラップ確保が困難" },
                    { item: "植生の影響", laser: "レーザーが植生を部分的に透過", drone: "写真測量のため植生下の地表面取得は不可" },
                    { item: "飛行規制", laser: "規制なし", drone: "DID地区・空港周辺等で飛行制限あり" },
                    { item: "天候制約", laser: "雨天以外は概ね可", drone: "風速5m/s以上・雨天は不可" },
                  ].map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="px-4 py-3 font-bold text-gray-900 border-b">{row.item}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.laser}</td>
                      <td className="px-4 py-3 text-gray-700 border-b">{row.drone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              高精度な変位管理や急勾配の法面には地上3Dレーザーが適しており、広域の法面を効率的に計測したい場合はドローンが有利です。弊社では両手法を保有しているため、現場条件に応じた最適な手法を提案しています。複数手法を組み合わせて法面全体をカバーするケースも対応可能です。
            </p>

            {/* 7. FAQ */}
            <h2 id="faq" className="text-xl font-bold text-primary mt-12 mb-4 pb-2 border-b-2 border-primary">
              よくある質問
            </h2>
            <div className="space-y-4 mb-8">
              {[
                {
                  q: "法面の3Dレーザー測量にかかる費用はどれくらいですか？",
                  a: "法面の規模や現場条件によりますが、1法面（延長100m程度）あたり30万〜60万円が目安です。複数法面をまとめて計測する場合や、定期モニタリング契約では単価を抑えられます。まずは現場情報をお聞かせいただければ、無料でお見積もりいたします。",
                },
                {
                  q: "急勾配の法面でも3Dレーザー測量は可能ですか？",
                  a: "可能です。3Dレーザースキャナは非接触で計測するため、人が立ち入れない急勾配（45度以上）の法面でも安全に計測できます。スキャナの設置位置を法尻や対岸に変えることで、死角を減らしながら法面全体のデータを取得します。",
                },
                {
                  q: "既存のTS測量データと3Dレーザーのデータは比較できますか？",
                  a: "比較可能です。TS測量の座標データを3Dレーザーの点群データに重ね合わせることで、同一座標系上での差分解析が行えます。過去のTS測量データとの経年比較にも対応していますので、既存データを無駄にすることなく3D管理へ移行できます。",
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
              法面測量に3Dレーザースキャンを導入することで、作業員の安全確保と計測精度の向上を両立できます。面的データによる変位管理は、従来のTS断面計測では実現できなかった法面全体の状態把握を可能にします。
            </p>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-sm font-bold text-gray-800 mb-2">この記事のポイント：</p>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>・ 法面測量には安全性・精度・面的管理の3つの課題がある</li>
                <li>・ 3Dレーザーは非接触で±5mmの精度で法面全体を面的に計測できる</li>
                <li>・ メリットは安全性向上・高精度・面管理・経年変化の定量比較の4つ</li>
                <li>・ 植生・天候・基準点管理の3点が導入時の注意点</li>
                <li>・ 急勾配・高精度には地上レーザー、広域にはドローンが適している</li>
              </ul>
            </div>
            <p className="text-base leading-loose text-gray-700 mb-4">
              法面の維持管理や変状モニタリングに3Dレーザー測量をご検討中の方は、まずは現場の概要をお聞かせください。法面の規模・勾配・植生条件に応じた最適な計測手法と費用感をご案内します。
            </p>
          </div>

          {/* CTA */}
          <div className="bg-primary/5 rounded-lg p-8 mt-12">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">
              法面の3D測量はお任せください
            </h3>
            <p className="text-sm text-gray-600 mb-6 text-center">
              急勾配の法面も非接触で安全に計測。変位管理から定期モニタリングまで一貫して対応します。
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
              <Link href="/blog/soil-volume-3d" className="block text-sm text-primary hover:underline">
                → 3D測量で土量計算を効率化する方法と精度のポイント
              </Link>
              <Link href="/blog/what-is-3d-surveying" className="block text-sm text-primary hover:underline">
                → 3D測量とは？仕組み・メリット・従来測量との違いをわかりやすく解説
              </Link>
              <Link href="/blog/i-construction-3d-surveying" className="block text-sm text-primary hover:underline">
                → i-Construction対応の3D測量｜国交省基準と必要な成果物まとめ
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
