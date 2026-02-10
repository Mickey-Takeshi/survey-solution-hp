"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pathNames: Record<string, string> = {
  about: "当社について",
  service: "依頼事例",
  profile: "プロフィール",
  faq: "よくある質問",
  blog: "ブログ",
  contact: "お問い合わせ",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = [
    { name: "ホーム", path: "/" },
    ...segments.map((segment, index) => ({
      name: pathNames[segment] || segment,
      path: "/" + segments.slice(0, index + 1).join("/"),
    })),
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://surveysolution.pro${item.path}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav aria-label="パンくずリスト" className="bg-gray-100 py-3">
        <div className="max-w-[1200px] mx-auto px-6">
          <ol className="flex items-center gap-2 text-xs text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            {breadcrumbItems.map((item, index) => (
              <li
                key={item.path}
                className="flex items-center gap-2"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === breadcrumbItems.length - 1 ? (
                  <span itemProp="name" className="text-gray-800 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    itemProp="item"
                    className="hover:text-primary transition-colors"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
