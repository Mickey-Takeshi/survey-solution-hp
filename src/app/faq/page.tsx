import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "よくある質問 - 3D測量の精度・対応エリア・費用",
  description:
    "株式会社SurveySolutionの3D測量サービスに関するよくある質問。精度、対応エリア、見積もり費用、対応建物、納期などについてお答えします。",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "3Dスキャナでの測量はどのくらいの精度がありますか？",
    a: "使用する機器や条件にもよりますが、ミリメートル単位の高精度な計測が可能です。一般的な建物測量では±2〜5mm程度の精度を確保しています。対象物との距離や反射率によって精度は変動しますので、詳細はお問い合わせください。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "京都を中心に、関西圏（大阪・兵庫・滋賀・奈良・和歌山）はもちろん、全国どこでも対応しております。遠方の場合は出張費が別途かかる場合がございますので、まずはお気軽にご相談ください。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。対象物の情報（所在地、規模、測量目的など）をお聞かせいただければ、概算のお見積もりをご提示いたします。現地確認が必要な場合も、初回のご相談は無料で対応しております。",
  },
  {
    q: "どのような建物・構造物に対応できますか？",
    a: "工場、オフィスビル、商業施設、住宅、マンション、歴史的建造物、寺社仏閣、橋梁、トンネル、擁壁、法面など、あらゆる建物・構造物に対応しております。屋内外を問わず、また高所や狭所でも計測可能です。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "案件の規模や内容によって異なりますが、小規模な建物測量であれば1〜2週間、大規模な施設や複雑な構造物の場合は3〜4週間程度が目安です。お急ぎの場合は特急対応も可能ですので、ご相談ください。",
  },
  {
    q: "3D測量と従来の測量の違いは何ですか？",
    a: "従来の測量は点と点を結んで図面を作成しますが、3D測量は対象物全体を点群データとして取得します。そのため、後から任意の位置での寸法確認や断面図作成が可能で、取り直しの手間が大幅に削減されます。また、複雑な形状も正確に記録できます。",
  },
  {
    q: "成果物はどのような形式で納品されますか？",
    a: "ご要望に応じて、CADデータ（DXF/DWG）、PDF図面、点群データ（LAS/E57）、3Dモデル（OBJ/FBX）など、様々な形式で納品可能です。BIM/CIM対応のデータ変換も承っております。",
  },
  {
    q: "測量中は業務を止める必要がありますか？",
    a: "基本的には通常業務を継続しながら測量が可能です。3Dスキャナは非接触で計測するため、対象物に触れることなくデータを取得できます。ただし、人の往来が多い場所では計測精度に影響が出る場合がありますので、事前にご相談ください。",
  },
  {
    q: "費用の目安を教えてください。",
    a: "測量対象の規模・複雑さ、成果物の種類によって異なります。目安として、一般住宅の現況図面作成で15〜30万円程度、中規模の商業施設で50〜100万円程度からとなります。詳細なお見積もりは無料ですので、お気軽にお問い合わせください。",
  },
  {
    q: "屋外の測量は天候に左右されますか？",
    a: "雨天時は計測精度が低下するため、原則として晴天または曇天時に実施します。風については、機材が安定していれば問題ありません。天候による延期が発生した場合も、追加費用はかかりません。",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PageHeader title="よくある質問" subtitle="FAQ" image="/images/faq.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="flex items-start gap-3 text-base font-bold mb-3">
                  <span className="text-primary text-xl font-bold shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="flex items-start gap-3 text-sm leading-loose text-gray-700 pl-0">
                  <span className="text-red-500 text-xl font-bold shrink-0">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
