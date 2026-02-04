import Image from "next/image";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function PageHeader({ title, subtitle, image }: Props) {
  return (
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
        <h1 className="text-2xl md:text-4xl font-bold tracking-wider">{title}</h1>
      </div>
    </div>
  );
}
