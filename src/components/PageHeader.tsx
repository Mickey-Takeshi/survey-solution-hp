import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbItems?: { name: string; path: string }[];
  as?: "h1" | "p";
};

export default function PageHeader({ title, subtitle, image, breadcrumbItems, as: Tag = "h1" }: Props) {
  return (
    <>
      <div className="relative h-48 md:h-64 overflow-hidden">
        <Image
          src={image || "/images/title-default.jpg"}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          {subtitle && (
            <span className="text-xs tracking-widest mb-2 uppercase">{subtitle}</span>
          )}
          <Tag className="text-2xl md:text-4xl font-bold tracking-wider">{title}</Tag>
        </div>
      </div>
      {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}
    </>
  );
}
