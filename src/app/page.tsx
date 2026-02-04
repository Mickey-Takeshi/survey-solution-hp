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
          <div className="absolute bottom-8 right-6 bg-white/85 backdrop-blur-sm rounded-sm p-6 max-w-md hidden lg:block shadow-lg">
            <h2 className="text-center text-xl font-bold tracking-wider mb-1">CONTACT</h2>
            <p className="text-center text-primary font-bold text-sm mb-4">
              3D測量で困りごとを解決
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/contact"
                className="bg-primary text-white text-center rounded-sm overflow-hidden block"
              >
                <div className="bg-primary-dark py-1 text-xs">メールでの受付</div>
                <div className="py-2">
                  <p className="font-bold text-sm">お問い合わせフォーム</p>
                  <p className="text-xs mt-0.5">24時間受付中</p>
                </div>
              </Link>
              <div className="bg-gray-100 text-center rounded-sm overflow-hidden">
                <div className="bg-primary-dark text-white py-1 text-xs">お電話での受付</div>
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
          <span className="bg-primary text-white px-6 py-2 text-sm font-bold tracking-wider shrink-0">
            NEWS
          </span>
          <Link href="/blog" className="flex items-center gap-4 text-sm hover:text-primary transition-colors flex-1 min-w-0">
            <time className="font-bold tracking-wider text-gray-600 shrink-0">2020.07.21</time>
            <span className="truncate">Webサイトを公開しました</span>
            <span className="ml-auto text-primary shrink-0">&rsaquo;</span>
          </Link>
        </div>
      </section>

      {/* ===== TROUBLE / お悩み ===== */}
      <section className="py-16 md:py-24 bg-[#f8f6f2]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              こんなお悩みありませんか？
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "建物や構造物の傾きが気になる…",
              "既存建物の正確な図面がない…",
              "従来の測量では対応できない複雑な地形がある…",
              "工事前の現状を正確に記録しておきたい…",
              "隣地との境界トラブルを解決したい…",
              "歴史的建造物のデータを残したい…",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded px-5 py-4 shadow-sm"
              >
                <span className="text-primary text-lg shrink-0">&#10003;</span>
                <p className="text-sm text-gray-700">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-primary font-bold text-lg mb-4">
              そのお悩み、3Dスキャナで解決できます！
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 text-sm font-bold rounded hover:bg-primary-dark transition-colors shadow-md"
            >
              まずは無料相談する
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-primary" />
                <span className="section-label text-primary">ABOUT</span>
              </div>
              <h2 className="text-primary text-2xl md:text-3xl font-bold leading-relaxed mb-8">
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
                className="inline-block border-2 border-primary text-primary px-12 py-4 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
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

      {/* ===== REASON / 選ばれる理由 ===== */}
      <section className="py-16 md:py-24 bg-[#f0f4f8]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">REASON</span>
            <h2 className="section-title-ja text-primary mt-2">選ばれる3つの理由</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "最新3Dスキャナで\n高精度なデータ取得",
                desc: "最新の3Dレーザースキャナを使用し、ミリ単位の高精度なデータを取得。従来の測量では難しかった複雑な形状も正確に計測します。",
              },
              {
                num: "02",
                title: "多角的な分析で\n付加価値を提供",
                desc: "取得したデータを2次元図面にとどまらず、三次元での現状把握・リスク分析・シミュレーションなど多角的に活用。新たな価値を提供します。",
              },
              {
                num: "03",
                title: "京都を拠点に\n迅速な対応",
                desc: "京都市中京区を拠点に、近畿圏を中心としたエリアで迅速に対応。お急ぎの案件もお気軽にご相談ください。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <span className="text-4xl font-bold text-primary/20">{item.num}</span>
                <h3 className="text-base font-bold mt-4 mb-4 leading-relaxed whitespace-pre-line text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm leading-loose text-gray-600">{item.desc}</p>
              </div>
            ))}
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
                <span className="section-label text-primary">PROFILE</span>
                <div className="flex-1 h-px bg-primary" />
              </div>
              <h2 className="section-title-ja text-primary mb-6">
                代表プロフィール
              </h2>
              <p className="text-sm leading-loose text-gray-700 mb-8">
                当社代表「齋藤 大輔」のご紹介です。今までの生い立ちやキャリアなどについて書いていますので、ぜひご覧ください。
              </p>
              <Link
                href="/profile"
                className="inline-block border-2 border-primary text-primary px-12 py-4 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
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
          <div className="absolute inset-0 bg-primary/70" />
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
              className="inline-block border-2 border-white text-white px-12 py-4 text-sm font-bold rounded hover:bg-white hover:text-primary transition-colors"
            >
              一覧はこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ===== MID-PAGE CTA ===== */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="max-w-[900px] mx-auto px-6 text-center text-white">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            3D測量のことなら、まずはお気軽にご相談ください
          </h2>
          <p className="text-sm mb-6 opacity-90">
            現地調査からデータ分析まで、お客様の課題に合わせた最適なご提案をいたします。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-10 py-4 text-sm font-bold rounded hover:bg-gray-100 transition-colors shadow-md"
            >
              無料相談・お問い合わせ
            </Link>
            <a
              href="tel:075-744-1775"
              className="inline-flex items-center gap-2 text-white border border-white px-8 py-4 text-sm font-bold rounded hover:bg-white/10 transition-colors"
            >
              <span>TEL:</span>
              <span className="tracking-wider">075-744-1775</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FLOW / ご依頼の流れ ===== */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">FLOW</span>
            <h2 className="section-title-ja text-primary mt-2">ご依頼の流れ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "お問い合わせ",
                desc: "お電話・メールフォームよりお気軽にご連絡ください。",
              },
              {
                step: "02",
                title: "ヒアリング・お見積り",
                desc: "ご要望をお伺いし、最適なプランとお見積りをご提案します。",
              },
              {
                step: "03",
                title: "現地測量・データ取得",
                desc: "3Dスキャナで現地の測量を行い、高精度なデータを取得します。",
              },
              {
                step: "04",
                title: "分析・納品",
                desc: "取得データを分析し、図面・3Dモデル等をご納品いたします。",
              },
            ].map((item, i) => (
              <div key={item.step} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-primary/30" />
                )}
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 text-sm font-bold rounded hover:bg-primary-dark transition-colors shadow-md"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>

      {/* ===== BLOG ===== */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label text-gray-500">BLOG</span>
            <h2 className="section-title-ja text-primary mt-2">ブログ</h2>
          </div>
          <div className="max-w-[800px] mx-auto divide-y">
            <Link href="/blog" className="flex items-center gap-4 py-4 hover:text-primary transition-colors">
              <time className="text-sm tracking-wider text-gray-500 shrink-0">2021.01.21</time>
              <span className="text-sm">3D測量で出来ることは？方法、メリット、活用場所も併せて紹介！</span>
            </Link>
            <Link href="/blog" className="flex items-center gap-4 py-4 hover:text-primary transition-colors">
              <time className="text-sm tracking-wider text-gray-500 shrink-0">2020.07.21</time>
              <span className="text-sm">Webサイトを公開しました</span>
            </Link>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block border-2 border-primary text-primary px-12 py-4 text-sm font-bold rounded hover:bg-primary hover:text-white transition-colors"
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
            <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/60 transition-colors" />
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
          <Link href="/contact" className="bg-primary text-white text-center rounded-sm overflow-hidden block">
            <div className="bg-primary-dark py-1 text-xs">メールでの受付</div>
            <div className="py-3">
              <p className="font-bold">お問い合わせフォーム</p>
              <p className="text-xs mt-0.5">24時間受付中</p>
            </div>
          </Link>
          <div className="bg-[#333] text-white text-center rounded-sm overflow-hidden">
            <div className="bg-primary-dark py-1 text-xs">お電話での受付</div>
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
