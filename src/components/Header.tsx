"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const solutionItems = [
  { label: "建設・土木", href: "/solution/construction" },
  { label: "建築", href: "/solution/architecture" },
  { label: "プラント・工場", href: "/solution/plant" },
  { label: "インフラ", href: "/solution/infrastructure" },
  { label: "文化財・遺跡", href: "/solution/heritage" },
];

const navItems = [
  { label: "サービス", href: "/service" },
  { label: "業界別ソリューション", href: "/solution/construction", children: solutionItems },
  { label: "料金", href: "/price" },
  { label: "導入事例", href: "/case" },
  { label: "よくある質問", href: "/faq" },
  { label: "会社概要", href: "/about" },
  { label: "ブログ", href: "/blog" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      {/* Top bar with tagline */}
      <div className="hidden lg:block bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 py-1.5 flex items-center justify-between">
          <p className="text-xs text-gray-500">3D測量で世の中を変える！</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>受付時間：平日 9:00～18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="株式会社 Survey Solution"
            width={240}
            height={48}
            className="h-9 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-1"
                >
                  {item.label}
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[180px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-700 hover:text-primary transition-colors whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-gray-200">
            <a
              href="tel:075-744-1775"
              className="flex items-center gap-1 text-primary whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-bold tracking-wide">075-744-1775</span>
            </a>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2.5 text-sm font-bold rounded hover:bg-primary-dark transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      <nav className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[600px]" : "max-h-0"}`}>
        {navItems.map((item) =>
          item.children ? (
            <div key={item.href}>
              <button
                className="w-full flex items-center justify-between px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={() => setIsSolutionOpen(!isSolutionOpen)}
              >
                {item.label}
                <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isSolutionOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${isSolutionOpen ? "max-h-[300px]" : "max-h-0"}`}>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-10 pr-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary border-b border-gray-100 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-3.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
        <div className="px-6 py-5 space-y-3 bg-gray-50">
          <a
            href="tel:075-744-1775"
            className="flex items-center justify-center gap-2 text-lg font-bold text-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            075-744-1775
          </a>
          <p className="text-center text-xs text-gray-500">受付時間：平日 9:00～18:00</p>
          <Link
            href="/contact"
            className="block bg-primary text-white text-center px-6 py-3.5 text-sm font-bold rounded hover:bg-primary-dark transition-colors shadow-sm"
            onClick={() => setIsOpen(false)}
          >
            お問い合わせ
          </Link>
        </div>
      </nav>
    </header>
  );
}
