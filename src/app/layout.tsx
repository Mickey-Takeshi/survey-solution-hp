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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "株式会社SurveySolution",
  alternateName: "サーベイソリューション",
  description:
    "京都市三条烏丸の3D測量専門会社。3Dスキャナによる高精度な建物・構造物・地形のデータ化で、傾き調査・図面作成・歴史的建造物の保存など幅広く対応。",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "075-744-1775",
  email: "info@surveysolution.pro",
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
    description: "土地家屋調査士。1975年長野県生まれ。同志社大学法学部卒業後、土地家屋調査士として独立。2018年に株式会社SurveySolutionを設立。京都産業大学・同志社大学で講師を務める。",
  },
  foundingDate: "2018-01",
  areaServed: [
    { "@type": "City", name: "京都市" },
    { "@type": "State", name: "京都府" },
    { "@type": "State", name: "大阪府" },
    { "@type": "State", name: "兵庫県" },
    { "@type": "State", name: "滋賀県" },
    { "@type": "State", name: "奈良県" },
    { "@type": "Country", name: "日本" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "3D測量サービス",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3Dスキャナ測量",
          description: "3Dレーザースキャナによる高精度な建物・構造物・地形のデータ取得",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "傾き調査・変位測量",
          description: "建物や構造物の傾き・変位をミリ単位で高精度計測",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "図面作成・CADデータ化",
          description: "点群データからの平面図・断面図・立面図作成、DXF/DWG納品対応",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "デジタルアーカイブ",
          description: "歴史的建造物・文化財の3Dデータ保存",
        },
      },
    ],
  },
  priceRange: "¥150,000〜",
  paymentAccepted: "銀行振込",
  sameAs: [],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "24",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "株式会社SurveySolution",
  description: "京都市の3D測量・3Dスキャナ測量専門会社",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "ja",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
