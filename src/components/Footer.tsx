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
              <p className="text-2xl font-bold tracking-wider">075-744-1775</p>
              <p className="text-sm mt-1">受付時間：平日 9:00～18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="max-w-[1000px] mx-auto px-4 pb-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png"
            alt="株式会社 Survey Solution"
            width={240}
            height={48}
            className="h-10 w-auto brightness-0 invert"
          />
        </div>

        {/* Nav */}
        <div className="border-t border-b border-gray-600 py-4 mb-6">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
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

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          &copy; 2020 株式会社SurveySolution
        </p>
      </div>
    </footer>
  );
}
