import { siteConfig } from "@/config/site";
import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function ContactPage() {
  return (
    <DefaultLayout>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Contact us
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Let&apos;s plan your next unforgettable event.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tell us what you&apos;re dreaming up, and we&apos;ll help shape a
            seamless, unforgettable experience that feels perfectly yours.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Email
            </p>
            <a
              className="mt-3 block text-lg font-semibold text-white"
              href={siteConfig.contact.emailHref}
            >
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Phone
            </p>
            <a
              className="mt-3 block text-lg font-semibold text-white"
              href={siteConfig.contact.phoneHref}
            >
              {siteConfig.contact.phone}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Location
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {siteConfig.contact.location}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <a
            aria-label="Message on WhatsApp"
            className="flex items-center justify-between rounded-[2rem] border border-emerald-500/30 bg-emerald-500/10 p-6 text-left transition-colors hover:border-emerald-400"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-200">
                  WhatsApp
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Message us now
                </p>
              </div>
            </div>
            <span className="text-sm text-emerald-200">→</span>
          </a>

          <a
            aria-label="Send email"
            className="flex items-center justify-between rounded-[2rem] border border-orange-400/30 bg-orange-500/10 p-6 text-left transition-colors hover:border-orange-400"
            href={siteConfig.contact.emailMessage}
            target="_self"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/20 text-orange-200">
                <EmailIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-orange-100">
                  Email
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Send an inquiry
                </p>
              </div>
            </div>
            <span className="text-sm text-orange-100">→</span>
          </a>
        </div>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Why St. Anne Event Management Company
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              The calm, capable team behind remarkable events.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              You get one experienced partner to bring the creative vision,
              technical production, and on-site details together in Goa.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold text-white">
                Local knowledge
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Goa-based planning with trusted local coordination for venues,
                vendors, and event logistics.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold text-white">
                One complete team
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Planning, décor, catering coordination, sound, lighting,
                staging, and production handled under one roof.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-lg font-semibold text-white">
                Details that matter
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Thoughtful preparation and steady on-site execution keep every
                moment feeling seamless for you and your guests.
              </p>
            </div>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
}
