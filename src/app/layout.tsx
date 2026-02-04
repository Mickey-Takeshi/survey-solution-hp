import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const siteUrl = "https://surveysolution.pro";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "株式会社SurveySolution｜京都市の3D測量・3Dスキャナ測量会社",
    template: "%s｜株式会社SurveySolution",
  },
  description:
    "京都市三条烏丸の3D測量専門会社。3Dスキャナによる高精度な建物・構造物・地形のデータ化で、傾き調査・図面作成・歴史的建造物の保存など幅広く対応。無料見積り受付中。",
  keywords: [
    "3D測量",
    "3Dスキャナ",
    "測量会社",
    "京都",
    "3Dレーザースキャナ",
    "建物測量",
    "構造物測量",
    "傾き調査",
    "図面作成",
    "三次元測量",
    "点群データ",
    "株式会社SurveySolution",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社SurveySolution",
    title: "株式会社SurveySolution｜京都市の3D測量・3Dスキャナ測量会社",
    description:
      "京都市三条烏丸の3D測量専門会社。3Dスキャナによる高精度データ化で傾き調査・図面作成・歴史的建造物の保存など幅広く対応。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "株式会社SurveySolution - 3D測量・3Dスキャナ測量",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社SurveySolution｜京都市の3D測量・3Dスキャナ測量会社",
    description:
      "京都市三条烏丸の3D測量専門会社。3Dスキャナによる高精度データ化で傾き調査・図面作成・歴史的建造物の保存など幅広く対応。",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "株式会社SurveySolution",
  description:
    "京都市三条烏丸の3D測量専門会社。3Dスキャナによる高精度な建物・構造物・地形のデータ化で、傾き調査・図面作成・歴史的建造物の保存など幅広く対応。",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "075-744-1775",
  address: {
    "@type": "PostalAddress",
    streetAddress: "錦小路通烏丸西入占出山町312 ケイズビル6F",
    addressLocality: "京都市中京区",
    addressRegion: "京都府",
    postalCode: "604-8155",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.004,
    longitude: 135.758,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  founder: {
    "@type": "Person",
    name: "齋藤 大輔",
    jobTitle: "代表取締役",
  },
  areaServed: [
    { "@type": "City", name: "京都市" },
    { "@type": "State", name: "京都府" },
    { "@type": "Country", name: "日本" },
  ],
  serviceType: [
    "3D測量",
    "3Dスキャナ測量",
    "建物測量",
    "構造物測量",
    "傾き調査",
    "図面作成",
    "歴史的建造物の保存",
    "土地境界調査",
  ],
  priceRange: "お問い合わせください",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
