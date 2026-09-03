import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";

const services = [
  {
    number: "01",
    icon: "heart",
    title: "Wedding planning",
    summary:
      "A considered plan for one of life\'s most meaningful celebrations.",
    detail:
      "We turn your ideas into a clear wedding plan, from the first moodboard and budget conversation to guest flow, vendor schedules, ceremony details, and on-the-day coordination.",
  },
  {
    number: "02",
    icon: "spark",
    title: "Event management",
    summary: "A calm, capable partner for celebrations of every scale.",
    detail:
      "For private parties, milestones, and special occasions, we manage the moving parts behind the scenes so you can be present with your guests and enjoy the moment you created.",
  },
  {
    number: "03",
    icon: "briefcase",
    title: "Corporate events",
    summary:
      "Professional experiences that represent your people and your brand.",
    detail:
      "We coordinate conferences, launches, team gatherings, and business celebrations with thoughtful schedules, polished presentation, reliable suppliers, and a guest experience that feels effortless.",
  },
  {
    number: "04",
    icon: "light",
    title: "Production and styling",
    summary:
      "The technical and visual details that make an event feel complete.",
    detail:
      "Our production support includes sound, lighting, stage setup, trussing, generators, decor coordination, and the practical checks that keep the atmosphere beautiful from arrival to final farewell.",
  },
];

const steps = [
  {
    title: "Listen",
    text: "We start with your people, purpose, budget, and the feeling you want guests to remember.",
  },
  {
    title: "Shape",
    text: "We build the concept, timeline, supplier plan, and production details around your priorities.",
  },
  {
    title: "Deliver",
    text: "We coordinate the details on site so every handover, cue, and guest touchpoint feels considered.",
  },
];

const testimonials = [
  {
    quote:
      "We've hired St. Ann Events for my 21st birthday, my mom's silver jubilee celebration, and many other occasions over the years, and they have always delivered excellent service. The two brothers, Swinton and Moses, work fabulously together and ensure every event is handled professionally with amazing sound, lighting, and coordination. Their dedication, quality equipment, and attention to detail truly make every celebration special. Highly recommended for any event in Goa!",
    label: "Client hired us for 21st birthday celebration",
  },
  {
    quote:
      "Thank you so much for making Eden's birthday so special. We have been working together for so many years, and there is a reason I always come back to you. I know that whatever idea I have, you will always find a way to make it happen. You understood exactly what I wanted and brought the whole vision to life so beautifully. Everything was done with so much care and attention to detail, and it honestly turned out even better than I imagined. Thank you for always giving your best and making every event so memorable. Truly appreciate you and your team.",
    label: "Client hired us for their child's first birthday",
  },
  {
    quote:
      "We had an absolutely wonderful experience working with the event management team for our private event. From the initial planning stages to the final execution, everything was handled with professionalism, creativity, and great attention to detail. The team understood our vision and went above and beyond to make the event special and memorable. We truly appreciate their dedication, responsiveness, and commitment to delivering a beautiful event. We would highly recommend their services to anyone looking for a reliable and professional event management company. Thank you for making our celebration truly memorable!",
    label: "Client hired us for a private event",
  },
];

function ServiceIcon({ type }: { type: string }) {
  const paths = {
    heart:
      "M12 20.4S4 15.7 4 9.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.3c0 6.4-8 11.1-8 11.1Z",
    spark:
      "m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm6.5 12 .7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3Z",
    briefcase:
      "M5 7.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm4-3h6l1 3H8l1-3Zm-6 8h18m-9 0v3",
    light:
      "M9 18h6m-5 3h4M8.5 14.5a6 6 0 1 1 7 0c-.9.7-1.5 1.5-1.5 2.5h-5c0-1-.6-1.8-1.5-2.5Z",
  };

  return (
    <svg aria-hidden="true" className="h-7 w-7" fill="none" viewBox="0 0 24 24">
      <path
        d={paths[type as keyof typeof paths]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <DefaultLayout>
      <section className="relative overflow-hidden py-10 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.2),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.1),transparent_28%)]" />
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              What we do
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl">
              Every detail has a role in the experience.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              St. Ann Events brings planning, production, and people together to
              create celebrations that feel personal, polished, and easy to be
              part of.
            </p>
          </div>
          <div className="border-l border-orange-300/40 pl-6 text-slate-300 lg:mb-2">
            <p className="text-2xl font-semibold leading-9 text-white">
              You bring the reason to celebrate. We bring the plan that makes it
              possible.
            </p>
            <NextLink
              className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
              href="/contact"
            >
              Start planning
            </NextLink>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16" id="service-details">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Our services
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Practical support, thoughtfully delivered.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition-colors hover:border-orange-300/40 sm:p-9"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <ServiceIcon type={service.icon} />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] text-orange-300">
                  {service.number}
                </p>
              </div>
              <h3 className="mt-8 text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-lg font-medium leading-8 text-orange-100">
                {service.summary}
              </p>
              <p className="mt-4 leading-8 text-slate-300">{service.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-orange-300/20 bg-gradient-to-br from-orange-500/10 via-slate-900 to-slate-900 px-7 py-12 md:px-10 md:py-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Why it matters
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            More than a beautiful room.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Great events are felt before they are noticed. A clear welcome, a
            well-timed meal, a room that sounds right, and a team that knows
            what happens next all give guests the freedom to connect.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            That is why we plan for the experience behind the picture, not just
            the picture itself.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "One trusted team",
              "Clear decisions",
              "Ready for the moment",
            ].map((benefit) => (
              <div
                key={benefit}
                className="border-t border-orange-300/40 pt-4 text-sm font-semibold text-white"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-12 md:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            How it comes together
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A clear process keeps the day feeling effortless.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="border-t border-orange-300/40 pt-5"
            >
              <p className="text-sm font-semibold text-orange-300">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20" id="testimonials">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Kind words
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            The best part is what people carry home.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.label}
              className="min-w-0 rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <blockquote className="break-words text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-orange-300">
                {testimonial.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            className="inline-flex w-full max-w-xs items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 sm:w-auto"
            href={siteConfig.links.google}
            rel="noopener noreferrer"
            target="_blank"
          >
            Read our Google Reviews
          </a>
        </div>
      </section>

      <section className="pb-8 pt-4 text-center md:pb-12">
        <p className="text-2xl font-semibold text-white sm:text-3xl">
          Let&apos;s make the next one worth remembering.
        </p>
        <NextLink
          className="mt-6 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-200 transition-colors hover:border-orange-300 hover:bg-orange-500/15"
          href="/contact"
        >
          Talk to our team
        </NextLink>
      </section>
    </DefaultLayout>
  );
}
