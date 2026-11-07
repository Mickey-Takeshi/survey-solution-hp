import AdvisoryArticle, { advisoryMetadata, ArticleSection, ArticleText, ArticleList, ArticleTable, ArticleNavLink, SourceLink } from "@/components/AdvisoryArticle";
import { advisoryArticles } from "@/data/advisory-articles";

const article = advisoryArticles.renovation;
export const metadata = advisoryMetadata(article);
const sections = [
  { id: "law", title: "2025年の法改正で、何が変わったのか" },
  { id: "documents", title: "図面を作り直す前に、残っている資料を探す" },
  { id: "roles", title: "現況図と確認申請の図書は、役割が異なる" },
  { id: "specification", title: "測量の前に、設計者と決めておくこと" },
  { id: "flow", title: "図面がない状態から改修準備を進める順序" },
];
const faq = [
  { question: "法律が変わって、すべての住宅で図面を作る義務ができたのですか？", answer: "すべての既存住宅について、一律に図面の新規作成や3Dスキャンを義務付けた改正ではありません。建物の規模や工事内容に応じて建築確認の対象を確かめ、必要な資料・調査・図面を設計者と整理します。" },
  { question: "間取り図しか残っていません。それでも相談できますか？", answer: "相談できます。販売用の間取り図、確認済証・検査済証、過去の工事資料、写真など、手元にある資料から確認します。間取り図だけで構造や法令への適合状況を確認できるとは限らないため、不足する資料と調査を設計者と整理します。" },
  { question: "3Dスキャンの現況図があれば、そのまま確認申請できますか？", answer: "現況図は設計・調査の基礎資料です。申請には、設計者による計画の検討や必要図書の作成などが必要です。スキャンで見えない壁内部・基礎・材料の状態などは、別途調査が必要になる場合があります。" },
];

export default function RenovationDrawingsLawPage() {
  return <AdvisoryArticle article={article} sections={sections} faq={faq}
    lead={<p><strong>大規模リフォームで「既存の図面を用意してください」と言われたら、まず工事内容と必要な資料を設計者に確認しましょう。</strong>2025年4月の法改正で建築確認の対象が見直されました。手元に図面がない場合も、残っている資料の確認と現況の計測を組み合わせて準備を進められます。</p>}
    ctaTitle="図面がない改修計画を、資料の整理から相談する"
    ctaText="建物の所在地、予定する工事、残っている図面や写真をお知らせください。設計者が必要とする資料に合わせて、計測範囲・成果物・追加で確認する点を整理します。"
    related={[
      { href: "/blog/no-drawings-solution", label: "図面がない建物の現況図を作る方法" },
      { href: "/blog/renovation-3d-scan", label: "リノベーション前の3D計測ガイド" },
      { href: "/solution/architecture", label: "建築・建設向けの3D測量" },
    ]}>
    <ArticleSection {...sections[0]}>
      <ArticleText>2025年4月以降に着手する木造2階建て住宅等の大規模なリフォームは、工事前の建築確認の対象になりました。木造平家でも延べ面積が200㎡を超えるものは対象です。従来の「4号特例」の見直しにより、確認手続きや審査の対象が変わっています。<SourceLink href="https://www.mlit.go.jp/jutakukentiku/build/r4kaisei_kijunhou0001.html">国土交通省の制度説明</SourceLink></ArticleText>
      <ArticleText>ここでいう大規模なリフォームは、建築基準法上の「大規模の修繕・大規模の模様替」です。主要構造部である壁・柱・床・はり・屋根・階段のうち、一種以上について過半の修繕・模様替を行うものが該当します。工事金額や「全面リフォーム」という呼び方だけで決まるものではありません。<SourceLink href="https://www.mlit.go.jp/common/001765901.pdf">国土交通省の周知資料（PDF）</SourceLink></ArticleText>
      <ArticleText>水回りの設備交換や仕上げ材だけの更新は、大規模の修繕・模様替に該当しない場合があります。ただし、構造部に及ぶ工事を同時に行う場合などは扱いが変わります。工事の対象と範囲を図面に示し、建築士や確認検査機関に確認することが出発点です。<SourceLink href="https://www.mlit.go.jp/common/001853472.pdf">リフォームの建築確認要否の解説事例集（PDF）</SourceLink></ArticleText>
      <ArticleText><strong>今回の改正は、住み続けているすべての家に図面の作り直しを求めるものではありません。</strong>3Dスキャンという計測方法が一律に義務化されたわけでもありません。計画する工事に必要な資料が不足しているときに、現況図の作成などを検討します。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[1]}>
      <ArticleText>「図面がない」と思っていても、所有者や管理会社、以前の設計者・施工会社に資料が残っていることがあります。まずは資料名・作成年月・入手先を一覧にして、現状と一致しているかを確認します。</ArticleText>
      <ArticleTable caption="最初に探したい資料と、確認する目的" headings={["資料", "確認すること"]} rows={[
        ["確認済証・検査済証、確認申請に関する控え", "過去の確認・検査の記録、当時の計画。自治体で閲覧・取得できる記録の有無も確認する"],
        ["竣工図・設計図・構造図・設備図", "各階の形状や構造・設備の情報。作成時点と現在の違いを確認する"],
        ["増改築・修繕の記録、工事写真", "変更箇所、工事時期、既存図面に反映されていない部分"],
        ["販売資料・間取り図・現況写真", "相談の入口となる配置・部屋構成。寸法や構造の確定資料として使えるかは別途確認する"],
        ["敷地の測量図、公図、境界資料", "建物と敷地・道路・隣地の関係。建物内部の図面とは分けて整理する"],
      ]} />
      <ArticleText>確認済証等が見つからないことと、建築確認を受けていないことは同じではありません。記録の調査から始め、建物の適法性や既存不適格の扱いは建築士が確認します。国土交通省の現況調査ガイドラインも、建築士が法令への適合状況を調べる手順を示しています。<SourceLink href="https://www.mlit.go.jp/jutakukentiku/jutakukentiku_house_fr_000061.html">既存建築物の現況調査に関する資料</SourceLink></ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[2]}>
      <ArticleText>現況図は、計測した時点の建物の形状や位置関係を表す資料です。確認申請の図書は、計画する工事が関係する基準に適合するか審査を受けるためのものです。用途が異なるため、現況図を作成しただけで申請の準備がすべて整うとは限りません。</ArticleText>
      <ArticleList items={[
        "測量・3D計測：計測できる範囲の形状や寸法を取得し、合意した平面図・断面図・立面図などを作成する。",
        "設計者：工事範囲、既存建物の調査、構造・法令上の検討、申請に必要な図書と追加調査を整理する。",
        "確認検査機関・行政：個別の計画について、必要な手続きや制度の適用を確認する。",
      ]} />
      <ArticleText>レーザースキャンで取得できるのは、レーザーが届く面の情報です。壁の内部、覆われた基礎、材料の強度や劣化の状態まで自動的に分かるわけではありません。開口調査や別の調査方法が必要な箇所は、計測前に設計者と切り分けます。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[3]}>
      <ArticleTable caption="設計者と測量会社で共有する依頼仕様" headings={["項目", "相談時に伝える内容"]} rows={[
        ["利用目的", "基本計画、改修設計、既存建物の調査など、図面を何に使うか"],
        ["対象範囲", "建物内外、対象階、敷地・道路との関係、必要な断面の位置"],
        ["成果物", "平面図・断面図・立面図・点群・BIMのうち何が必要か。CAD形式、基準点・座標・高さ、縮尺"],
        ["精度と表現", "必要な寸法精度、図面に表す部材、未計測・推定部分の区別"],
        ["立入り条件", "所有者・入居者の承諾、利用中の時間帯、家具等の遮蔽物、天井裏・床下へのアクセス"],
        ["工程と追加調査", "設計検討に必要な時期、開口等の前後で計測する箇所、再計測や追加図面の扱い"],
      ]} />
      <ArticleText>必要な図面の種類がまだ分からない段階でも、予定する工事と手元の資料から相談できます。測量の発注前に、設計者が使う情報と納品範囲を合わせることで、後から測り直す箇所を減らしやすくなります。</ArticleText>
    </ArticleSection>
    <ArticleSection {...sections[4]}>
      <ArticleList items={[
        "予定する工事と建物の規模を整理し、設計者と建築確認の要否を確認する。",
        "既存図面・確認や検査の記録・増改築履歴を集め、不足する情報を洗い出す。",
        "設計者と測量会社で計測範囲・必要図面・精度・形式・立入り条件を決める。",
        "合意した範囲を計測し、現況図と未計測部分を整理する。必要に応じて追加調査を行う。",
        "設計者が現況資料を基に改修計画と申請図書をまとめ、必要な手続きへ進む。",
      ]} />
      <ArticleText>現況図の作成方法や成果物の種類は、<ArticleNavLink href="/blog/no-drawings-solution">図面がない建物の現況図を作る方法</ArticleNavLink>で詳しく紹介しています。京都の町家を購入して改修する場合は、建物とともに<ArticleNavLink href="/blog/kyoto-machiya-purchase-survey">敷地・路地・境界の確認</ArticleNavLink>も進めておきましょう。</ArticleText>
    </ArticleSection>
  </AdvisoryArticle>;
}
