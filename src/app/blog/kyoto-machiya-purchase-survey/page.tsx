import AdvisoryArticle, { advisoryMetadata, ArticleSection, ArticleText, ArticleList, ArticleTable, ArticleNavLink, SourceLink } from "@/components/AdvisoryArticle";
import { advisoryArticles } from "@/data/advisory-articles";

const article = advisoryArticles.machiya;
export const metadata = advisoryMetadata(article);
const sections = [
  { id: "purpose", title: "町家で実現したい使い方から、必要な確認を決める" },
  { id: "building", title: "既存図面と、現在の建物の違いを確認する" },
  { id: "site", title: "路地・接道・境界を建物と一緒に確認する" },
  { id: "reform", title: "改修できる範囲を、設計者・行政と確認する" },
  { id: "handover", title: "購入検討から改修設計へ資料をつなぐ" },
];
const faq = [
  { question: "町家の図面がない場合、購入前に何から始めればよいですか？", answer: "販売資料、残っている図面や工事履歴、敷地・境界の資料を確認し、購入後に行いたい改修を設計者へ伝えます。現況と資料が合わない箇所を整理してから、必要な建物計測や敷地の測量を検討します。" },
  { question: "路地の奥にある町家は、大規模な改修ができませんか？", answer: "路地に面するという条件だけで一律には判断できません。建築基準法上の道路との関係、建物の状況、工事内容を確認します。京都市には一定の京町家を対象とする大規模の修繕・模様替の認定制度もありますが、適用条件や必要な対策を個別に確認する必要があります。" },
  { question: "3Dスキャンで耐震性や壁の内部まで分かりますか？", answer: "3Dスキャンは、レーザーが届く面の形状・寸法を把握する方法です。耐震性や材料の強度、隠れた内部の状態をそれだけで判定するものではありません。設計者が必要とする診断・開口調査などと計測の範囲を分けて整理します。" },
  { question: "国内エージェントと購入後の設計者で、資料を共有できますか？", answer: "共有する相手と範囲、必要な図面形式を事前にご相談ください。所有者等の承諾や資料の利用条件を確認し、設計で使う座標・高さの基準、未計測部分も含めて引き継げるように整理します。" },
];

export default function KyotoMachiyaPurchaseSurveyPage() {
  return <AdvisoryArticle article={article} sections={sections} faq={faq}
    lead={<p><strong>京都の町家を購入して改修するなら、建物の間取りに加え、敷地・路地・境界を含む現況を確認しておきましょう。</strong>古い図面が残っていても、増改築や設備更新で現在の姿と違う場合があります。購入前に資料と現況の差を整理すると、設計者への相談を具体的に進められます。</p>}
    ctaTitle="町家の購入・改修に必要な現況資料を相談する"
    ctaText="手元の図面、物件の所在地、予定する改修や使い方をお知らせください。建物の現況図と敷地の資料を確認し、設計者が必要とする計測範囲・成果物をご相談いただけます。"
    related={[
      { href: "/blog/renovation-drawings-2025-law", label: "大規模リフォームで図面がないときの準備" },
      { href: "/blog/current-condition-boundary-survey", label: "現況測量と境界確定測量の違い" },
      { href: "/blog/renovation-3d-scan", label: "リノベーション前の3D計測ガイド" },
      { href: "/solution/architecture", label: "建築・建設向けの3D測量" },
    ]}>
    <ArticleSection {...sections[0]}>
      <ArticleText>住居として使うのか、仕事場を兼ねるのか、店舗や宿泊施設などを計画するのかによって、設計者が確認する条件は変わります。残したい空間や部材、変えたい設備、建て替えを含むかどうかを、購入検討の早い段階で整理しましょう。</ArticleText>
      <ArticleText>国内の不動産エージェントが海外の購入者を支援する場合も、希望する使い方を図面に落とし込み、どこまで確認できたかを共有すると説明しやすくなります。この記事は町家を購入して改修する場面を扱います。京都のすべての物件が町家として同じ扱いになるわけではなく、建物ごとの条件の確認が必要です。</ArticleText>
      <ArticleList items={[
        "残したい外観・庭・土間・吹抜けなどと、変更したい部屋や設備。",
        "想定する利用人数や用途、間取り変更・増築・大規模な修繕の予定。",
        "購入判断の前に知りたい条件と、設計を進めながら確認できる事項。",
      ]} />
    </ArticleSection>
    <ArticleSection {...sections[1]}>
      <ArticleText>販売用の間取り図は、空間を理解する入口になります。ただし、寸法、階高、柱や梁の位置、設備の経路まで設計に必要な情報が揃っているとは限りません。図面の作成年月と増改築履歴を確認し、現在の状態との差を見ます。</ArticleText>
      <ArticleTable caption="建物の資料と現況で照合すること" headings={["確認箇所", "改修検討に使う情報"]} rows={[
        ["各階の間取り・開口部", "部屋・建具・窓の位置と寸法、図面にない間仕切りや増築部分"],
        ["高さ・段差・階段", "床・天井・梁下の高さ、室内外の高低差、階段と動線"],
        ["柱・梁など見える部材", "位置・形状・傾きなどの計測範囲。構造性能の評価は設計者の調査と分ける"],
        ["設備と隠れた部分", "露出している配管等の位置、天井裏・床下へのアクセス、別途調査が必要な場所"],
        ["過去の工事資料", "いつ、どこを改修したか。現況図へ反映すべき変更と、根拠が残っていない箇所"],
      ]} />
      <ArticleText>3D計測で形状を記録する際も、覆われた部材の内部や土中の基礎までは分かりません。取得できた面と未計測の箇所を区別し、構造・劣化の調査に必要な情報を設計者とすり合わせます。計測の進め方は<ArticleNavLink href="/blog/renovation-3d-scan">リノベーション前の3D計測ガイド</ArticleNavLink>をご覧ください。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[2]}>
      <ArticleText>建物に入れる通路があることと、建築基準法上の接道条件を満たすことは別の確認です。路地の幅だけでなく、道路の扱い、敷地との接し方、所有・管理の関係を調べます。</ArticleText>
      <ArticleList items={[
        "前面道路・路地の位置と幅、建築基準法上の道路の扱い、敷地が接する部分。",
        "敷地の地番・境界資料と現況の対応、隣地との境界標や確認資料。",
        "軒・庇・樋・塀などと隣地との位置関係。境界の根拠と形状をそれぞれ確認する。",
        "敷地と一体に見える旧道・水路の有無、現在の所有者・管理者。",
        "工事車両や資材を運ぶ経路、通行・工事に必要な承諾や調整事項。",
      ]} />
      <ArticleText>古い道や水路の問題は町家に限りません。現在の利用状況と所有範囲を分け、資料を照合する必要があります。境界に関する資料の使い方は<ArticleNavLink href="/blog/current-condition-boundary-survey">現況測量と境界確定測量の違い</ArticleNavLink>で整理しています。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[3]}>
      <ArticleText>2025年4月から木造2階建て等の大規模なリフォームも建築確認の対象になりました。町家の改修でも、建物の規模と工事内容を基に必要な手続きを確認します。図面の準備は<ArticleNavLink href="/blog/renovation-drawings-2025-law">2025年法改正後の改修準備</ArticleNavLink>も参考にしてください。<SourceLink href="https://www.mlit.go.jp/common/001765901.pdf">国土交通省の周知資料（PDF）</SourceLink></ArticleText>
      <ArticleText>路地奥の町家については、京都市に、一定の京町家で大規模の修繕・模様替を行う際の接道規定の適用除外に係る認定制度があります。基準時から存在することなどの条件と、火災・地震への対策等が関係します。路地に面するすべての建物に適用される制度ではないため、設計者と市の窓口で確認します。<SourceLink href="https://www.city.kyoto.lg.jp/tokei/page/0000323700.html">京都市の認定制度の概要</SourceLink></ArticleText>
      <ArticleText><strong>この認定制度の存在だけで、建て替えや用途変更まで可能と判断することはできません。</strong>予定する工事、利用目的、建物の状況に応じて別々に確認します。また、京都市は建築基準条例等による規定を設けているため、所在地に応じた確認が必要です。<SourceLink href="https://www.city.kyoto.lg.jp/tokei/page/0000165372.html">京都市建築基準条例・施行細則</SourceLink></ArticleText>
      <ArticleText>測量会社は、設計者が検討するための形状や位置関係を資料にします。建築・改修の可否や必要な安全対策は、設計者・行政等の確認と組み合わせて進めます。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[4]}>
      <ArticleTable caption="購入検討から設計へ引き継ぐ資料" headings={["整理するもの", "引継ぎで明らかにすること"]} rows={[
        ["既存資料の一覧", "図面・写真・工事記録の作成時期、入手先、利用できる範囲"],
        ["現況図・点群など", "計測範囲、座標や高さの基準、必要な図面形式、未計測・推定部分"],
        ["敷地・境界・道路の資料", "確認済みの区間、管理者への確認内容、未解決の事項"],
        ["追加調査の一覧", "構造・地盤・隠れた部分など、誰に何を確認するか"],
        ["購入者の希望と計画の条件", "残したいもの、変更したいもの、必要な協議、費用・工程を見積もるための前提"],
      ]} />
      <ArticleText>測量前に設計者と成果物の使い方を合わせることが大切です。建物だけを測った後で敷地や道路との関係が必要になる、といった手戻りを減らせるよう、購入検討と改修設計をつなぐ資料を準備します。</ArticleText>
      <ArticleText>図面や資料が十分でなくても、所在地と購入後の計画から相談を始められます。土地・建物の両方が気になる場合は、<ArticleNavLink href="/blog/property-purchase-survey-guide">図面の確認から測量まで相談するガイド</ArticleNavLink>もご覧ください。</ArticleText>
    </ArticleSection>
  </AdvisoryArticle>;
}
