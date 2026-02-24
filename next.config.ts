import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 旧WordPress URLのリダイレクト設定
  async redirects() {
    return [
      // 削除済みドローンサービスページ → サービス一覧へ301リダイレクト
      {
        source: "/service/drone",
        destination: "/service",
        permanent: true,
      },
      // 旧WordPress: gutenbergページ（個別に列挙）
      { source: "/gutenberg01", destination: "/", permanent: true },
      { source: "/gutenberg02", destination: "/", permanent: true },
      { source: "/gutenberg06", destination: "/", permanent: true },
      // 旧WordPress: /home/ 配下
      {
        source: "/home/:slug",
        destination: "/",
        permanent: true,
      },
      // 旧WordPress: /logo-8/
      {
        source: "/logo-8",
        destination: "/",
        permanent: true,
      },
      // 旧WordPress: /service/service_* パターン（個別に列挙）
      { source: "/service/service_under06", destination: "/service", permanent: true },
      { source: "/service/service_under03-2", destination: "/service", permanent: true },
      { source: "/service/service_top04-2", destination: "/service", permanent: true },
      // 旧WordPress: /profile/staff_mv/
      {
        source: "/profile/staff_mv",
        destination: "/profile",
        permanent: true,
      },
      // 旧WordPress: /about/message_img02-2/
      {
        source: "/about/message_img02-2",
        destination: "/about",
        permanent: true,
      },
      // 旧WordPress: /open/ → ブログのopenページへ
      {
        source: "/open",
        destination: "/blog/open",
        permanent: true,
      },
      // 旧WordPress: /3d-surveying/ 配下（画像URLなど）
      {
        source: "/3d-surveying/:slug",
        destination: "/blog/3d-surveying",
        permanent: true,
      },
    ];
  },
  // 画像最適化設定
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  // パフォーマンス最適化
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // 圧縮有効化
  compress: true,
  // キャッシュヘッダー設定
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(js|css)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
