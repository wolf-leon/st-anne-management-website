import NextLink from "next/link";

import { EmailIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning and coordination from concept to celebration, ensuring every detail feels personal, elegant, and stress-free.",
  },
  {
    title: "Event Planning & Management",
    description:
      "End-to-end planning for weddings, corporate gatherings, private events, and special occasions with seamless execution from start to finish.",
  },
  {
    title: "Sound, Lighting & Production",
    description:
      "Professional sound systems, lighting, trussing, generators, stage setup, décor, catering coordination, and full event production support.",
  },
];

const stats = [
  { value: "180+", label: "Events executed" },
  { value: "12 yrs", label: "Industry experience" },
  { value: "98%", label: "Client retention" },
];

const process = [
  "Event strategy, design direction, and planning",
  "Vendor coordination for décor, catering, and production needs",
  "Sound, lighting, stage, trussing, generators, and setup execution",
  "On-site coordination for a smooth, memorable guest experience",
];

const showcase = [
  {
    title: "Social Event Party",
    tag: "Social Event Parties",
    image: "/blog-4.jpg",
  },
  {
    title: "Destination Wedding",
    tag: "Private Celebration",
    image: "/wedding.jpg",
  },
  {
    title: "Conference Experience",
    tag: "Corporate Summit",
    image: "/corporate.jpg",
  },
];

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative overflow-hidden py-8 md:py-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_25%)]" />
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-orange-200">
              Wedding & Event Experts
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete event solutions from{" "}
              <span className="text-orange-400">planning to execution.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
              We are wedding and event planning experts offering complete event
              solutions for weddings, corporate events, private celebrations,
              and special occasions. From concept to final setup, we manage
              every detail with precision and care.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <NextLink
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/25 transition-transform hover:-translate-y-0.5"
                href="/contact"
              >
                Book an event
              </NextLink>
              <NextLink
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/10"
                href="/#portfolio"
              >
                View portfolio
              </NextLink>
            </div>

            <div className="mt-10 grid max-w-lg gap-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm sm:text-left"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-r from-orange-500/20 via-transparent to-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-2xl shadow-orange-500/10">
              <div className="absolute left-6 top-6 z-10 flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 shadow-lg backdrop-blur-md">
                <img
                  alt="St. Anne Management logo"
                  className="h-10 w-10 rounded-full object-cover"
                  src="/company-logo.png"
                />
                <div>
                  <p className="text-sm font-semibold text-white">St. Anne</p>
                  <p className="text-[9px] uppercase tracking-[0.25em] text-slate-400">
                    Management
                  </p>
                </div>
              </div>
              <img
                alt="Luxury event setting"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
                src="/party.jpg"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                      Signature Event Experience
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Event to be Remembered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="services">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Full-service planning and production for memorable occasions.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-400 text-lg font-bold text-slate-950">
                0{services.indexOf(service) + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 py-8 md:grid-cols-[0.9fr_1.1fr] md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Why choose us
          </p>
          <h3 className="mt-4 text-3xl font-bold text-white">
            Thoughtful planning. Flawless execution.
          </h3>
          <div className="mt-8 space-y-4">
            {process.map((step) => (
              <div
                key={step}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-200">
                  ✓
                </span>
                <p className="text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Average planning lead</p>
              <p className="mt-3 text-3xl font-bold text-white">6-8 weeks</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-400">Guest experience score</p>
              <p className="mt-3 text-3xl font-bold text-white">4.9/5</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
              <p className="text-sm text-slate-400">Our promise</p>
              <p className="mt-3 text-lg leading-8 text-slate-200">
                Every event is designed around your guests, your story, and the
                feeling you want them to carry home long after the lights go
                down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" id="portfolio">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Portfolio
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Work that speaks before a word is said.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {showcase.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900"
            >
              <div className="overflow-hidden">
                <img
                  alt={item.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={item.image}
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-orange-300">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <NextLink
            className="inline-flex items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition-colors hover:border-orange-300 hover:bg-orange-500/15"
            href="/about"
          >
            Explore more
          </NextLink>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="rounded-[2rem] border border-orange-400/20 bg-gradient-to-r from-orange-500/10 via-slate-900 to-slate-900 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
                Let’s build your next moment
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Ready to host an event that feels premium from start to finish?
              </h2>
            </div>
            <NextLink
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              href="/contact"
            >
              Start planning
            </NextLink>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Quick contact
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Connect with us directly.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
      </section>
    </DefaultLayout>
  );
}
