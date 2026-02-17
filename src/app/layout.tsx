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
    default: "3D測量・3Dスキャナ測量なら京都の株式会社SurveySolution｜関西全域対応",
    template: "%s｜3D測量の株式会社SurveySolution【京都】",
  },
  description:
    "京都市の3D測量専門会社。3Dレーザースキャナによるミリ単位の高精度測量で、建物傾斜調査・図面作成・点群データ取得・文化財デジタルアーカイブに対応。大阪・兵庫・滋賀・奈良など関西全域出張可。無料見積り・相談受付中。TEL:075-744-1775",
  keywords: [
    "3D測量",
    "3Dスキャナ",
    "3Dスキャナ測量",
    "3Dレーザースキャナ",
    "三次元測量",
    "点群測量",
    "レーザー測量",
    "測量会社 京都",
    "建物測量",
    "構造物測量",
    "傾き調査",
    "建物傾斜測定",
    "図面作成",
    "現況測量",
    "点群データ",
    "BIM測量",
    "デジタルアーカイブ",
    "文化財測量",
    "京都 測量",
    "大阪 3D測量",
    "関西 測量会社",
    "株式会社SurveySolution",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社SurveySolution｜3D測量専門会社",
    title: "3D測量・3Dスキャナ測量なら京都の株式会社SurveySolution｜関西全域対応",
    description:
      "京都市の3D測量専門会社。3Dレーザースキャナでミリ単位の高精度測量。建物傾斜調査・図面作成・点群データ取得・文化財保存に対応。関西全域出張可。",
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
    title: "3D測量・3Dスキャナ測量なら京都の株式会社SurveySolution｜関西全域対応",
    description:
      "京都市の3D測量専門会社。3Dレーザースキャナでミリ単位の高精度測量。建物傾斜調査・図面作成・点群データ取得に対応。関西全域出張可。",
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
  verification: {
    // Google Search Consoleで取得した認証コードを設定してください
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: "株式会社SurveySolution",
  alternateName: ["サーベイソリューション", "Survey Solution", "3D測量のSurveySolution"],
  description:
    "京都市中京区の3D測量専門会社。3Dレーザースキャナによるミリ単位の高精度測量で、建物傾斜調査・図面作成・点群データ取得・文化財デジタルアーカイブに対応。大阪・兵庫・滋賀・奈良など関西全域出張可。",
  slogan: "3D測量で世の中を変える",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "075-744-1775",
  faxNumber: "075-744-1776",
  email: "surveysolution.jp@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新町通三条西入釜座町22番地ストークビル三条烏丸515",
    addressLocality: "京都市中京区",
    addressRegion: "京都府",
    postalCode: "604-8241",
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
    { "@type": "City", name: "京都市", containedInPlace: { "@type": "State", name: "京都府" } },
    { "@type": "City", name: "大阪市", containedInPlace: { "@type": "State", name: "大阪府" } },
    { "@type": "City", name: "神戸市", containedInPlace: { "@type": "State", name: "兵庫県" } },
    { "@type": "State", name: "京都府" },
    { "@type": "State", name: "大阪府" },
    { "@type": "State", name: "兵庫県" },
    { "@type": "State", name: "滋賀県" },
    { "@type": "State", name: "奈良県" },
    { "@type": "State", name: "和歌山県" },
    { "@type": "Country", name: "日本" },
  ],
  knowsAbout: [
    "3D測量",
    "3Dスキャナ測量",
    "3Dレーザースキャナ",
    "点群データ",
    "建物傾斜調査",
    "図面作成",
    "CADデータ",
    "BIM",
    "文化財測量",
    "デジタルアーカイブ",
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
