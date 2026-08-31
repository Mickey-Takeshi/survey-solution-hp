import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  CaseStudySection,
  EditorialMeta,
  FaqSection,
  TechnicalGuideSection,
} from "@/components/ContentExpansion";

export const metadata: Metadata = {
  title: "文化財・遺跡の3D記録｜歴史的建造物のデジタルアーカイブ",
  description:
    "文化財・歴史的建造物の3Dスキャンによるデジタルアーカイブ。京都の登り窯・庭園・簡易敷地図面の事例をもとに、非接触計測、図面化、メッシュ化、保存形式の設計に対応します。",
  keywords: [
    "文化財 3Dスキャン",
    "遺跡 3D記録",
    "デジタルアーカイブ 文化財",
    "歴史的建造物 3D測量",
    "文化財 点群データ",
    "寺社仏閣 3Dスキャン",
  ],
  alternates: { canonical: "/solution/heritage" },
};

const challenges = [
  "老朽化が進む文化財の正確な記録が必要",
  "修復計画の基礎資料となる精密データが欲しい",
  "従来の写真記録では立体的な形状を把握できない",
  "文化財のデジタル公開・教育活用を進めたい",
];

const solutions = [
  {
    title: "建造物の高精度デジタルアーカイブ",
    desc: "地上レーザースキャナと写真測量を組み合わせ、歴史的建造物の外観・内部構造を高精度な3Dデータとして記録します。経年劣化の進行状況も数値化し、保存計画の策定に必要な基礎資料を提供いたします。",
    result: "目的・対象材・距離に合わせて精度と計測密度を設計",
  },
  {
    title: "修復計画の3Dシミュレーション",
    desc: "取得した3Dデータを基に、修復範囲や施工手順の検討に使う断面・メッシュ・モデルを作成します。関係者間の現況共有や、所有者・行政担当者との事前相談に使う基礎資料として活用できます。",
    result: "修復前の形状と検討条件を同じデータで共有",
  },
  {
    title: "VR/AR活用による教育・観光コンテンツ作成",
    desc: "3Dスキャンデータを活用し、VRでの仮想見学やARでの復元表示など、文化財の教育・観光コンテンツを作成します。立ち入り制限のある文化財も、デジタル空間で自由に鑑賞できる環境を実現します。",
    result: "デジタル技術で文化財の教育・観光活用を促進",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "文化財・遺跡の3D記録",
  description: "歴史的建造物・遺跡・出土品を高精度3Dスキャンで記録し、デジタルアーカイブ・修復計画・VR活用まで一貫対応するサービス。",
  provider: { "@type": "LocalBusiness", name: "株式会社SurveySolution", url: "https://surveysolution.pro" },
  areaServed: { "@type": "Country", name: "日本" },
  serviceType: "文化財・遺跡の3D記録",
};

export default function HeritagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageHeader
        title="文化財・遺跡の3D記録"
        subtitle="FOR HERITAGE"
        image="/images/solution-heritage.jpg"
        breadcrumbItems={[{ name: "文化財・遺跡の3D記録", path: "/solution/heritage" }]}
      />

      {/* リード文 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            3Dスキャン技術で文化財・遺跡を<br className="hidden md:block" />
            高精度なデジタル記録として次世代へ引き継ぎます。
          </h2>
          <p className="text-sm leading-loose text-gray-700">
            歴史的建造物や遺跡は、自然災害や経年劣化によって失われるリスクを常に抱えています。3Dスキャンによるデジタルアーカイブは、文化財の現状を精密に記録し、将来の修復計画や学術研究の基礎資料として活用できます。
            地上レーザースキャナを活用し、建造物の外観から細部の彫刻まで、あらゆるスケールの記録に対応いたします。
          </p>
        </div>
      </section>

      <CaseStudySection
        title="京都での文化財・歴史環境の3D計測事例"
        introduction="実在する計測成果をAI画像で代用せず、当社サイトで公開している案件へ直接リンクしています。文化財の種別や所有者情報に配慮しながら、計測目的と成果形式をご確認いただけます。"
        cases={[
          {
            title: "登り窯の内外面を3Dメッシュとして記録",
            href: "/use-case/climbing-kiln-mesh",
            category: "活用事例｜産業遺産",
            summary: "複雑な曲面を持つ窯の内面・外面を複数位置から計測し、点群を統合。形状保存と修復検討に使うメッシュデータを作成しました。",
          },
          {
            title: "石組・植栽・水路を含む庭園を図化",
            href: "/use-case/garden-mapping",
            category: "活用事例｜庭園",
            summary: "高低差と複雑な輪郭を面的に取得し、庭園全体の平面図へ展開。維持管理とデジタルアーカイブに活用できる成果を作成しました。",
          },
          {
            title: "境界確定を待てない京都の敷地で簡易図面を作成",
            href: "/use-case/simplified-site-plan",
            category: "活用事例｜京都の敷地",
            summary: "現況構造物を3D計測し、設計検討用の簡易敷地図面を作成。境界確定測量とは役割を分け、現況把握を先行させました。",
          },
        ]}
      />

      {/* こんな課題はありませんか */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="section-title-ja">文化財・遺跡保存でこんな課題はありませんか？</h2>
          </div>
          <div className="space-y-4">
            {challenges.map((c, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="shrink-0 w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">!</span>
                <p className="text-sm text-gray-700">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 解決策 */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">SOLUTIONS</span>
            <h2 className="section-title-ja">文化財保存のための3Dスキャンによる解決策</h2>
          </div>
          <div className="space-y-8">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
                <h3 className="text-lg font-bold text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                <div className="bg-primary/5 border border-primary/20 rounded px-4 py-3">
                  <p className="text-sm font-bold text-primary">導入効果：{s.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnicalGuideSection
        heading="文化財3D記録の法的整理と京都での計測計画"
        introduction="文化財の3D記録は、非接触であっても所有者の同意、指定区分、三脚やターゲットの設置、照明・レーザー照射、公開範囲、長期保存を個別に確認します。『触れないから許可不要』『クラス1だから文化財に必ず無害』とは断定しません。"
        guides={[
          {
            title: "現状変更・保存への影響を事前に確認する",
            lead: "文化財保護法43条は重要文化財の現状変更や保存に影響を及ぼす行為を、125条は史跡名勝天然記念物の現状変更等を規定しています。非接触計測が直ちに許可対象になるとは限りませんが、具体的な設置方法や対象材によって扱いが変わるため、所有者・管理団体と行政担当窓口へ事前相談します。",
            image: "/images/solution-heritage-legal-flow.svg",
            imageAlt: "文化財3D計測における所有者合意、行政相談、計測計画、保存の流れ",
            caption: "文化財の指定区分と具体的な行為を確認してから計測へ進む4段階のフロー（概念図）",
            points: [
              { title: "文化財の指定区分と管理者を確認する", body: "国・都道府県・市町村の指定、重要文化財、史跡等で相談先と手続が異なります。所有者・管理団体の同意を得たうえで、所管の教育委員会や文化財担当部局に具体的な作業内容を伝えます。" },
              { title: "三脚・ターゲット・養生まで説明する", body: "計測機器を置く位置、床荷重、接触する可能性、ターゲット固定方法、電源・照明、立入動線、作業人数を図面化します。史跡内で杭や標識を設置する場合は、現状変更に当たらないか個別に確認します。" },
              { title: "保存形式と公開範囲を先に決める", body: "オリジナル点群、処理済み点群、メッシュ、図面、写真、座標情報、メタデータを分け、長期保存用と公開用を作ります。防犯上公開できない内部情報や位置情報も権限管理します。" },
            ],
            note: "法令の適用や許可要否を当社だけで判断するものではありません。所有者・管理団体と行政担当部局の指示に従い、当社は計測方法と成果物仕様を具体化します。",
            sources: [
              { label: "e-Gov 文化財保護法（第43条・第125条）", href: "https://laws.e-gov.go.jp/law/325AC0100000214" },
              { label: "文化庁 文化財の観光活用に向けたVR等の制作・運用ガイドライン", href: "https://www.bunka.go.jp/tokei_hakusho_shuppan/tokeichosa/vr_kankokatsuyo/index.html" },
            ],
          },
          {
            title: "京都の社寺・庭園を止めずに計測する",
            lead: "京都の社寺建築では、参拝者動線、法要や行事、狭い境内、杮葺（こけら葺き）・檜皮葺など複雑な屋根、植栽による遮蔽を考慮します。一度に全域を占有せず、計測区画と時間帯を分けて運用します。",
            image: "/images/solution-heritage-scan-workflow.png",
            imageAlt: "複数の設置点から伝統的な社寺建築を3D計測する概念図",
            caption: "建物を囲む複数の設置点から死角を補い、参拝動線と計測範囲を分ける考え方（概念図）",
            points: [
              { title: "参拝者・僧侶・管理車両の動線を優先する", body: "開門前、拝観休止日、法要のない時間帯などから計測枠を決めます。三脚周囲を養生し、来訪者の写り込みと点群ノイズを減らしながら、建物利用を妨げない区画単位で進めます。" },
              { title: "複雑な屋根は目的に応じて密度を変える", body: "杮葺や檜皮葺の面形状を記録するのか、軒反りや棟の線形を図化するのかで必要密度が異なります。地上から見えない上面は、許可された別手法との組合せや未計測表示を検討します。" },
              { title: "彩色・金箔面への照射を個別評価する", body: "使用機器がクラス1レーザーでも、対象材、劣化状態、照射距離、滞留時間を管理者・保存修復の専門家と確認します。根拠なく『完全に安全』とせず、必要に応じてテストと非照射範囲を設定します。" },
            ],
          },
        ]}
      />

      {/* 料金目安 */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">PRICING</span>
            <h2 className="section-title-ja">文化財3Dデジタルアーカイブの料金目安</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden bg-white">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left">作業内容</th>
                  <th className="px-4 py-3 text-left">料金目安（税別）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { work: "寺社仏閣の外観記録", price: "30万円〜" },
                  { work: "建造物の内外部3D記録", price: "50万円〜" },
                  { work: "遺跡・出土品の3D記録", price: "20万円〜" },
                ].map((row, i) => (
                  <tr key={row.work} className={i % 2 === 0 ? "bg-gray-50" : ""}>
                    <td className="px-4 py-3 text-gray-900 border-r border-gray-200">{row.work}</td>
                    <td className="px-4 py-3 text-gray-700 font-bold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            ※ 対象物の規模・条件により変動します。正確な費用は無料見積もりにてお伝えいたします。
          </p>
        </div>
      </section>

      <EditorialMeta pageName="文化財・遺跡の3D記録" path="/solution/heritage" />

      <FaqSection
        title="文化財の3D記録に関するよくある質問"
        faqs={[
          { q: "非接触なら文化財への影響はありませんか？", a: "接触を避けられる利点はありますが、影響が一切ないとは断定しません。対象材、劣化状態、レーザーのクラス・波長、照射条件、三脚設置を所有者・管理団体と確認し、必要に応じて専門家の助言や試験計測を行います。" },
          { q: "現状変更の許可は必要ですか？", a: "文化財の指定区分と具体的な行為によって異なります。非接触計測でも三脚、ターゲット、照明、立入範囲、史跡内での設置方法を整理し、所管の教育委員会や文化財担当部局へ事前相談します。" },
          { q: "拝観中の社寺でも計測できますか？", a: "可能な場合があります。参拝者動線と計測区画を分け、開門前や拝観の少ない時間帯に進めます。行事・法要・管理車両を優先し、管理者が承認した範囲と時間に従います。" },
          { q: "屋外の遺跡や庭園にも対応できますか？", a: "はい。植生、風雨、直射日光、地表の含水、立入可能範囲を確認し、設置点と計測時期を調整します。樹木や仮設物で見えない部分は欠測として記録します。" },
          { q: "長期保存にはどの形式がよいですか？", a: "E57・LAS等の点群、OBJ等のメッシュ、TIFF等の画像、PDF/AやDXF等の図面を用途別に用意し、座標系・機器・計測日・処理履歴のメタデータを添えます。保存期間と将来の閲覧環境に応じて複数形式を併用します。" },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-[800px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-4">文化財の3D記録はお気軽にご相談ください</h2>
          <p className="text-sm mb-6 opacity-90">
            文化財・遺跡の3D記録について、無料でご相談を承ります。対象物の規模・条件をお伺いし、最適な記録方法と概算費用をご提案いたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md">
              無料相談を申し込む
            </Link>
            <Link href="/case" className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors">
              導入事例を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
