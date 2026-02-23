import Link from "next/link";
import Image from "next/image";

const footerNavItems = [
  { label: "サービス概要", href: "/service" },
  { label: "料金・費用の目安", href: "/price" },
  { label: "導入事例", href: "/case" },
  { label: "よくある質問", href: "/faq" },
  { label: "会社概要", href: "/about" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プロフィール", href: "/profile" },
];

const serviceLinks = [
  { label: "地上レーザースキャン測量", href: "/service/laser-scan" },
  { label: "ドローン（UAV）3D測量", href: "/service/drone" },
  { label: "点群データ作成・処理", href: "/service/point-cloud" },
  { label: "3Dモデリング・BIM連携", href: "/service/3d-modeling" },
  { label: "建設・土木向け", href: "/solution/construction" },
  { label: "建築・リノベ向け", href: "/solution/architecture" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Contact Bar */}
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-lg font-bold tracking-wider mb-2">お問い合わせ</p>
          <p className="text-sm text-gray-300">3D測量のご相談・お見積りはお気軽にどうぞ</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/contact"
            className="footer-cta-card block bg-primary rounded-lg overflow-hidden"
          >
            <div className="bg-primary-dark text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>メールでの受付</span>
            </div>
            <div className="text-center py-6 px-4">
              <p className="text-xl font-bold mb-1">お問い合わせフォーム</p>
              <p className="text-sm opacity-90">24時間受付中</p>
            </div>
          </Link>
          <div className="footer-cta-card bg-[#3a3a3a] rounded-lg overflow-hidden">
            <div className="bg-primary-dark text-center py-2.5 text-sm font-medium flex items-center justify-center gap-2">
              <svg className="w-4 h-4 phone-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>お電話での受付</span>
            </div>
            <div className="text-center py-6 px-4">
              <a href="tel:075-744-1775" className="text-2xl font-bold tracking-wider hover:text-primary transition-colors">
                075-744-1775
              </a>
              <p className="text-sm mt-2 text-gray-300">受付時間：平日 9:00～18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.png"
              alt="株式会社 Survey Solution"
              width={200}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              <p className="mb-2">〒604-8241</p>
              <p className="mb-2">京都市中京区釜座町22番地<br />ストークビル三条烏丸608</p>
              <p className="mb-1">
                <span className="text-gray-400">TEL:</span>{" "}
                <a href="tel:075-744-1775" className="hover:text-white">075-744-1775</a>
              </p>
              <p>
                <span className="text-gray-400">営業時間:</span> 平日 9:00～18:00
              </p>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-white border-b border-gray-600 pb-2">サイトマップ</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              {footerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm mb-4 text-white border-b border-gray-600 pb-2">サービス一覧</h3>
            <nav className="space-y-2 text-sm">
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-600 pt-6">
          <p className="text-center text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} 株式会社SurveySolution All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
