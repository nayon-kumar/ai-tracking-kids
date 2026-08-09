"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import logo from "@/public/assets/logo.png";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Lucy Ai", href: "#" },
  { label: "Features", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Pricing", href: "#" },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverPill, setHoverPill] = useState<{ left: number; width: number } | null>(null);
  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="rounded-2xl border border-white/60 bg-white/70 p-2 shadow-lg shadow-indigo-950/5 backdrop-blur-md">
        <nav className="flex items-center justify-between rounded-xl bg-white px-4 py-2.5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src={logo} alt="Growth Genius" className="h-8 w-auto" preload />
          </Link>

          <ul
            className="relative hidden items-center md:flex"
            onMouseLeave={() => setHoverPill(null)}
          >
            <span
              aria-hidden
              className="absolute inset-y-1 rounded-full bg-indigo-50 transition-[left,width,opacity] duration-300 ease-out"
              style={
                hoverPill
                  ? { left: hoverPill.left, width: hoverPill.width, opacity: 1 }
                  : { left: 0, width: 0, opacity: 0 }
              }
            />
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.label}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                onMouseEnter={(event) => {
                  const el = event.currentTarget;
                  setHoverPill({ left: el.offsetLeft, width: el.offsetWidth });
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setActiveHref(link.href)}
                  className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeHref === link.href
                      ? "text-indigo-600"
                      : "text-slate-700 hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="#"
            className="group hidden shrink-0 items-center gap-1 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-lg active:translate-y-0 md:inline-flex"
          >
            Get Started
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
              &rsaquo;
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="mt-2 flex flex-col gap-1 rounded-xl bg-white p-4 md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveHref(link.href);
                  setIsMenuOpen(false);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  activeHref === link.href
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Get Started
              <span aria-hidden>&rsaquo;</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
