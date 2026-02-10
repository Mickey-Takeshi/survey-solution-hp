import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "代表プロフィール - 齋藤大輔",
  description:
    "株式会社SurveySolution 代表取締役 齋藤大輔のプロフィール。土地家屋調査士として京都を拠点に3Dスキャナを用いた測量サービスを提供。三次元測量で新しい価値を提供します。",
  alternates: { canonical: "/profile" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://surveysolution.pro/profile#person",
  name: "齋藤 大輔",
  alternateName: "Daisuke Saito",
  jobTitle: "代表取締役",
  description: "土地家屋調査士。1975年長野県松本市生まれ。同志社大学法学部で民事訴訟法を専攻後、土地家屋調査士として独立。2018年に株式会社SurveySolutionを設立し、3Dスキャナによる測量サービスを提供。京都産業大学・同志社大学で講師を務める。",
  image: "https://surveysolution.pro/images/profile.jpg",
  birthDate: "1975-09",
  birthPlace: {
    "@type": "Place",
    name: "長野県松本市",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "同志社大学",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "国家資格",
      name: "土地家屋調査士",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "株式会社SurveySolution",
    url: "https://surveysolution.pro",
  },
  knowsAbout: ["3D測量", "3Dスキャナ", "土地家屋調査", "測量", "点群データ"],
  sameAs: [],
};

export default function ProfilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PageHeader title="プロフィール" subtitle="PROFILE" image="/images/profile-bg.jpg" />

      {/* 代表者生い立ち */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">REPRESENTATIVE</span>
            <h2 className="section-title-ja text-primary mt-2">代表者生い立ち</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-5/12">
              <p className="text-sm text-primary mb-2">Daisuke Saito</p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">齋藤 大輔</h3>
              <div className="space-y-4 text-sm leading-loose text-gray-700">
                <p>
                  1975年9月、長野県松本市生まれ。母親のお腹の中でへその緒が首に巻きついたのか呼吸ができず、ミイラ状態になって生まれてきました。医者には障害が残ると言われましたが、現在なんともなく健康に生活をしています。
                </p>
                <p>
                  高校生までは名古屋で生活。好奇心旺盛でなんにでもチャレンジし、小中学校では生徒会長を務め、リーダー的存在でした。小学校から始めた剣道は現在も細々と続けております。
                </p>
                <p>
                  大学受験で京都大学を受けるも落ち、浪人して再度チャレンジ。しかしながら結局落ちてしまいました。父親はもう一浪しろと言っていたのですが、人生初の家出をし、1週間ほど行方をくらませて、受かっていた同志社大学近くに下宿を借りて大学へ入学。大学では法律の勉強もそこそこに、自転車に乗って全国を旅していました。そのときの経験は今の思考の基礎となっていると思います。
                </p>
                <p>
                  大学時代は土地家屋調査士の補助のアルバイトをしていました。もともと数学が大好きな私は、大学で学んだ法律も使えて数学も使える土地家屋調査士に魅力を感じ、資格を受験することに。1日14時間以上勉強して、無事合格することができました。合格後すぐに入所した事務所は、境界紛争の解決事件など変わった事件が多く、私の経験値を高めてくれました。
                </p>
                <p>
                  現在剣道のほかにインラインホッケー、冬山登山（スノーボードをするバックカントリー）を趣味としてやっています。特にバックカントリーは危険なため、日ごろから救急手当ての訓練やロープワーク、懸垂下降などを訓練しています。
                </p>
                <p>
                  そして2010年1月より独立し、土地家屋調査士事務所を立ち上げました。徐々に案件数も増えていき、順調な経営を行っていきました。しかしその中で「自分の仕事は測量を行い、境界線の分析・確定を行うだけではない。自分が現場で見て、聞いて、感じて収集した測量データはあらゆる基礎データとなりえるし、私の五感で感じたことを測量データを通じて提供できるはずだ」と考え、2018年1月に当社を設立しました。
                </p>
                <p>
                  現在では3Dスキャナを2台保有し、三次元測量に力を入れております。三次元測量は今までにない膨大なデータが取得でき、アイデア一つでさまざまな価値をお客様に提供できます。このデータでお客様の悩みや要望に応え、新しい価値を提供していきたいと考えています。
                </p>
              </div>
            </div>
            <div className="md:w-5/12 md:sticky md:top-24">
              <div className="relative">
                <div className="w-full max-w-[350px] mx-auto">
                  <div className="relative overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                    <Image
                      src="/images/profile.jpg"
                      alt="代表 齋藤 大輔"
                      width={600}
                      height={645}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* キャリア */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-primary text-white text-center py-4 mb-8 rounded">
            <h2 className="text-lg font-bold tracking-widest">キャリア</h2>
          </div>
          <ul className="space-y-3 text-sm leading-loose text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>同志社大学法学部で民事訴訟法を専攻</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>京都の司法書士・土地家屋調査士事務所で勤務</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>大手企業様の測量、登記、物件管理業務を行う</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>京都産業大学にて「土地家屋の調査と表示の登記」の講師を8年務める</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>同志社大学にて「土地家屋の調査と表示の登記」の講師を3年務める</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>京都α-STASIONにて「不動産の調査・測量・登記」について3年間ラジオ出演</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>全国市町村国際文化研究所にて固定資産税課職員を対象に研修講師を務める</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary shrink-0">・</span>
              <span>ライカジオシステムズ株式会社にて3Dスキャナの研修講師を務める</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 略歴 */}
      <section className="py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-primary text-white text-center py-4 mb-8 rounded">
            <h2 className="text-lg font-bold tracking-widest">略歴</h2>
          </div>
          <div className="space-y-0">
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成11年3月</span>
              <span className="text-gray-700">同志社大学法学部卒業</span>
            </div>
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成11年12月</span>
              <span className="text-gray-700">土地家屋調査士試験合格、調査士事務所勤務</span>
            </div>
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成22年1月</span>
              <span className="text-gray-700">さいとう土地家屋調査士事務所設立</span>
            </div>
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成23年4月</span>
              <span className="text-gray-700">後継者の軍師®認定コンサルタント認定</span>
            </div>
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成28年12月</span>
              <span className="text-gray-700">3DスキャナGLS-2000購入</span>
            </div>
            <div className="flex border-b py-4">
              <span className="text-primary font-bold shrink-0 w-36">平成30年1月</span>
              <span className="text-gray-700">株式会社SurveySolution設立</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
