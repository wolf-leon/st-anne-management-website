import NextLink from "next/link";

import { Head } from "./head";

import {
  EmailIcon,
  GoogleIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <Head />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr] lg:px-8">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-sm font-bold text-slate-950">
                SA
              </span>
              <div>
                <p className="text-lg font-semibold text-white">St. Anne</p>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  Management
                </p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              We design thoughtful corporate and private experiences that feel
              elevated, seamless, and unforgettable from the first concept to
              the final applause.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <NextLink
                    className="text-slate-300 transition-colors hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  className="text-slate-300 transition-colors hover:text-white"
                  href={siteConfig.contact.emailHref}
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  className="text-slate-300 transition-colors hover:text-white"
                  href={siteConfig.contact.phoneHref}
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span>{siteConfig.contact.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Connect
            </h3>
            <div className="mb-4 flex gap-3">
              {[
                {
                  label: "Instagram",
                  href: siteConfig.links.instagram,
                  icon: InstagramIcon,
                },
                {
                  label: "Google",
                  href: siteConfig.links.google,
                  icon: GoogleIcon,
                },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-colors hover:border-orange-400 hover:text-white"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                {
                  label: "WhatsApp",
                  href: siteConfig.links.whatsapp,
                  icon: WhatsAppIcon,
                },
                {
                  label: "Email",
                  href: siteConfig.links.emailMessage,
                  icon: EmailIcon,
                },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  aria-label={`${label} message`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 transition-colors hover:border-emerald-400 hover:text-white"
                  href={href}
                  rel="noopener noreferrer"
                  target={label === "Email" ? "_self" : "_blank"}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-400 sm:flex-row sm:px-6 lg:px-8">
            <p>© {currentYear} St. Anne Management. All rights reserved.</p>
            <p>
              Based in {siteConfig.contact.location} • Crafting moments that
              move people.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
