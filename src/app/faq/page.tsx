import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "よくある質問｜株式会社SurveySolution",
  description: "株式会社SurveySolutionへのよくある質問と回答をまとめました。",
};

const faqs = [
  {
    q: "3Dスキャナでの測量はどのくらいの精度がありますか？",
    a: "使用する機器や条件にもよりますが、ミリメートル単位の高精度な計測が可能です。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "京都を中心に、関西圏はもちろん全国対応しております。お気軽にご相談ください。",
  },
  {
    q: "見積もりは無料ですか？",
    a: "はい、お見積もりは無料です。まずはお問い合わせフォームまたはお電話にてご相談ください。",
  },
  {
    q: "どのような建物・構造物に対応できますか？",
    a: "工場、ビル、住宅、歴史的建造物、土木構造物など、幅広い対象物に対応しております。",
  },
  {
    q: "納期はどのくらいですか？",
    a: "案件の規模や内容によって異なりますが、通常2週間〜1ヶ月程度です。お急ぎの場合はご相談ください。",
  },
];

export default function FaqPage() {
  return (
    <>
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
