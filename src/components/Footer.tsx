import Link from "next/link";
import Image from "next/image";

const footerNavItems = [
  { label: "当社について", href: "/about" },
  { label: "プロフィール", href: "/profile" },
  { label: "依頼事例", href: "/service" },
  { label: "よくある質問", href: "/faq" },
  { label: "アクセス", href: "/about#access" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "京都土地境界トラブル相談室", href: "http://kyoukai-shokunin.com/", external: true },
];

const serviceLinks = [
  { label: "工場の柱の傾き調査", href: "/service#service01" },
  { label: "擁壁計画のための高低調査", href: "/service#service02" },
  { label: "急傾斜地の断面・平面図作成", href: "/service#service03" },
  { label: "建物丸ごと保存", href: "/service#service04" },
  { label: "隣接建物の窓の位置調査", href: "/service#service05" },
  { label: "建物の平面図・断面図作成", href: "/service#service06" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Contact Bar */}
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/contact"
            className="block bg-primary rounded-sm overflow-hidden hover:opacity-90 transition-opacity"
          >
            <div className="bg-primary-dark text-center py-2 text-sm">
              メールでの受付
            </div>
            <div className="text-center py-4">
              <p className="text-lg font-bold">お問い合わせフォーム</p>
              <p className="text-sm mt-1">24時間受付中</p>
            </div>
          </Link>
          <div className="bg-[#333] rounded-sm overflow-hidden">
            <div className="bg-primary-dark text-center py-2 text-sm">
              お電話での受付
            </div>
            <div className="text-center py-4">
              <a href="tel:075-744-1775" className="text-2xl font-bold tracking-wider hover:text-primary transition-colors">
                075-744-1775
              </a>
              <p className="text-sm mt-1">受付時間：平日 9:00～18:00</p>
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
              <p className="mb-2">〒604-8155</p>
              <p className="mb-2">京都府京都市中京区<br />錦小路通烏丸西入占出山町312<br />ケイズビル6F</p>
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
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
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
