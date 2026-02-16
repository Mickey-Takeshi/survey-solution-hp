import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: Props) {
  const breadcrumbItems = [{ name: "ホーム", path: "/" }, ...items];

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
          <ol
            className="flex items-center gap-2 text-xs text-gray-600"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
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
