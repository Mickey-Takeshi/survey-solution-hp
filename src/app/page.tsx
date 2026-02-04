import Image from "next/image";
import Link from "next/link";

const services = [
  { id: "01", title: "工場の柱の傾き調査", image: "/images/service01.jpg" },
  { id: "02", title: "擁壁計画のための\n高低調査", image: "/images/service02.jpg" },
  { id: "03", title: "急傾斜地における\n断面・平面図作成", image: "/images/service03.jpg" },
  { id: "04", title: "建物丸ごと保存", image: "/images/service04.jpg" },
  { id: "05", title: "隣接建物の窓の位置調査", image: "/images/service05.jpg" },
  { id: "06", title: "建物の\n平面図・断面図作成", image: "/images/service06.jpg" },
];

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[80vh] md:h-[90vh] overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="3Dスキャナによる測量"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center h-full max-w-[1200px] mx-auto px-6">
          <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed drop-shadow-lg">
            3Dスキャナによるデータ化で
            <br />
            測量に新たな価値を
          </h1>

          {/* Contact overlay */}
          <div className="absolute bottom-8 right-6 bg-white/85 backdrop-blur-sm rounded-sm p-6 max-w-md hidden md:block shadow-lg">
            <h2 className="text-center text-xl font-bold tracking-wider mb-1">CONTACT</h2>
            <p className="text-center text-[--color-primary] font-bold text-sm mb-4">
              3D測量で困りごとを解決
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/contact"
                className="bg-[--color-primary] text-white text-center rounded-sm overflow-hidden block"
              >
                <div className="bg-[--color-primary-dark] py-1 text-xs">メールでの受付</div>
                <div className="py-2">
                  <p className="font-bold text-sm">お問い合わせフォーム</p>
                  <p className="text-xs mt-0.5">24時間受付中</p>
                </div>
              </Link>
              <div className="bg-gray-100 text-center rounded-sm overflow-hidden">
                <div className="bg-[--color-primary-dark] text-white py-1 text-xs">お電話での受付</div>
                <div className="py-2">
                  <p className="font-bold text-base tracking-wider">075-744-1775</p>
                  <p className="text-xs text-gray-600 mt-0.5">受付時間：平日 9:00～18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS ===== */}
      <section className="bg-[#f0f4f8] py-4">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center gap-4">
          <span className="bg-[--color-primary] text-white px-6 py-2 text-sm font-bold tracking-wider shrink-0">
            NEWS
          </span>
          <Link href="/blog" className="flex items-center gap-4 text-sm hover:text-[--color-primary] transition-colors flex-1 min-w-0">
            <time className="font-bold tracking-wider text-gray-600 shrink-0">2020.07.21</time>
            <span className="truncate">Webサイトを公開しました</span>
            <span className="ml-auto text-[--color-primary] shrink-0">&rsaquo;</span>
          </Link>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-[--color-primary]" />
                <span className="section-label text-[--color-primary]">ABOUT</span>
              </div>
              <h2 className="text-[--color-primary] text-2xl md:text-3xl font-bold leading-relaxed mb-8">
                あらゆる情報の「見える化」で安心・安全・利益をあなたに
              </h2>
              <p className="text-sm leading-loose text-gray-700 mb-4">
                京都市の三条烏丸にある【株式会社SurveySolution】は、測量により取得したデータを2次元の図面作成だけにとどまらず、多角的な視野から分析をすることを得意としております。
              </p>
              <p className="text-sm leading-loose text-gray-700 mb-4">
                測量に際しては、3Dスキャナを用いて土地や建物、構造物のデータを取得。三次元での現状把握、事前のリスク把握、シミュレーション、歴史的建造物の保存などを行うことで、対象物の安心や安全性を提供し、新たな付加価値を提供いたします。
              </p>
              <p className="text-sm leading-loose text-gray-700 mb-4">
                また土地、建物、構造物で「こんなことできないか」といったお悩みがございましたら、どんなことでもぜひご相談ください。
              </p>
              <p className="text-sm leading-loose text-gray-700 mb-8">
                3Dスキャナによるあらゆる情報の「見える化」を通して、お客様の最大限の安心・安全・利益につなげることを目指しています。
              </p>
              <Link
                href="/about"
                className="inline-block border border-[--color-primary] text-[--color-primary] px-12 py-4 text-sm hover:bg-[--color-primary] hover:text-white transition-colors"
              >
                当社の思い
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/hero-bg2.jpg" alt="3D測量の様子" width={400} height={300} className="object-cover w-full h-48" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg mt-8">
                  <Image src="/images/service-bg.jpg" alt="測量技術" width={400} height={300} className="object-cover w-full h-48" />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg col-span-2 mx-auto max-w-[280px]">
                  <Image src="/images/hero-bg.jpg" alt="3Dスキャナ" width={400} height={300} className="object-cover w-full h-48" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROFILE ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-5/12">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-gray-100 shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="代表 齋藤 大輔"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="md:w-7/12">
              <div className="flex items-center gap-4 mb-2">
                <span className="section-label text-[--color-primary]">PROFILE</span>
                <div className="flex-1 h-px bg-[--color-primary]" />
              </div>
              <h2 className="section-title-ja text-[--color-primary] mb-6">
                代表プロフィール
              </h2>
              <p className="text-sm leading-loose text-gray-700 mb-8">
                当社代表「齋藤 大輔」のご紹介です。今までの生い立ちやキャリアなどについて書いていますので、ぜひご覧ください。
              </p>
              <Link
                href="/profile"
                className="inline-block border border-[--color-primary] text-[--color-primary] px-12 py-4 text-sm hover:bg-[--color-primary] hover:text-white transition-colors"
              >
                詳細はこちら
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE ===== */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 z-0">
          <Image src="/images/service-bg.jpg" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[--color-primary]/70" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-white/80">SERVICE</span>
            <h2 className="section-title-ja text-white mt-2">依頼事例紹介</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/service#service${s.id}`}
                className="group relative overflow-hidden rounded-sm block aspect-[16/10]"
              >
                <Image
                  src={s.image}
                  alt={s.title.replace("\n", "")}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-xs tracking-widest mb-2">SERVICE{s.id}</span>
                  <h3 className="text-lg md:text-xl font-bold text-center leading-relaxed whitespace-pre-line">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/service"
              className="inline-block border border-white text-white px-12 py-4 text-sm hover:bg-white hover:text-[--color-primary] transition-colors"
            >
              一覧はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">BLOG</span>
            <h2 className="section-title-ja text-[--color-primary] mt-2">ブログ</h2>
          </div>
          <div className="max-w-[800px] mx-auto divide-y">
            <Link href="/blog" className="flex items-center gap-4 py-4 hover:text-[--color-primary] transition-colors">
              <time className="text-sm tracking-wider text-gray-500 shrink-0">2021.01.21</time>
              <span className="text-sm">3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！</span>
            </Link>
            <Link href="/blog" className="flex items-center gap-4 py-4 hover:text-[--color-primary] transition-colors">
              <time className="text-sm tracking-wider text-gray-500 shrink-0">2020.07.21</time>
              <span className="text-sm">Webサイトを公開しました</span>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block border border-[--color-primary] text-[--color-primary] px-12 py-4 text-sm hover:bg-[--color-primary] hover:text-white transition-colors"
            >
              詳細はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ACCESS & FAQ ===== */}
      <section className="py-4">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/about#access" className="group relative overflow-hidden rounded-sm block aspect-[16/8]">
            <Image src="/images/access.jpg" alt="アクセス" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-[--color-primary]/50 group-hover:bg-[--color-primary]/60 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-xs tracking-widest mb-1">ACCESS</span>
              <h3 className="text-2xl font-bold tracking-wider">アクセス</h3>
            </div>
          </Link>
          <Link href="/faq" className="group relative overflow-hidden rounded-sm block aspect-[16/8]">
            <Image src="/images/faq.jpg" alt="よくある質問" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span className="text-xs tracking-widest mb-1">FAQ</span>
              <h3 className="text-2xl font-bold tracking-wider">よくある質問</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Mobile Contact */}
      <section className="md:hidden bg-[#2a2a2a] py-8 px-4">
        <div className="grid grid-cols-1 gap-3">
          <Link href="/contact" className="bg-[--color-primary] text-white text-center rounded-sm overflow-hidden block">
            <div className="bg-[--color-primary-dark] py-1 text-xs">メールでの受付</div>
            <div className="py-3">
              <p className="font-bold">お問い合わせフォーム</p>
              <p className="text-xs mt-0.5">24時間受付中</p>
            </div>
          </Link>
          <div className="bg-[#333] text-white text-center rounded-sm overflow-hidden">
            <div className="bg-[--color-primary-dark] py-1 text-xs">お電話での受付</div>
            <div className="py-3">
              <p className="text-xl font-bold tracking-wider">075-744-1775</p>
              <p className="text-xs mt-0.5">受付時間：平日 9:00～18:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
