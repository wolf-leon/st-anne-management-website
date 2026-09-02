import { useState } from "react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <NextLink className="flex items-center gap-3" href="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-slate-950 shadow-lg shadow-orange-500/30">
              <Logo size={22} />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-wide text-white">
                St. Anne
              </p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                Management
              </p>
            </div>
          </NextLink>

          <ul className="hidden items-center gap-7 lg:flex">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            href={siteConfig.contact.emailHref}
          >
            {siteConfig.contact.email}
          </a>
          <NextLink
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
            href={siteConfig.links.booking}
          >
            Book a consult
          </NextLink>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="rounded-full border border-white/10 p-2 text-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 sm:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <NextLink
                  className={clsx(
                    "block rounded-xl px-3 py-2 text-base text-slate-200 transition-colors hover:bg-white/5 hover:text-white",
                    index === siteConfig.navMenuItems.length - 1 &&
                      "text-orange-300",
                  )}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
