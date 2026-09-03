import NextLink from "next/link";

import DefaultLayout from "@/layouts/default";

const gallery = [
  {
    image: "/event-6.png",
    className: "md:row-span-2",
    alt: "Professional sound console ready for an indoor event",
  },
  {
    image: "/Screenshot 2026-09-02 200548.png",
    alt: "Large live event crowd beneath beams of stage light",
  },
  {
    image: "/Screenshot 2026-09-02 200620.png",
    alt: "Wireless microphones prepared in a production case",
  },
  {
    image: "/Screenshot 2026-09-02 200657.png",
    alt: "Digital audio mixing console prepared for an event",
  },
  {
    image: "/Screenshot 2026-09-02 201146.png",
    alt: "Outdoor stage with trussing, speakers, and lighting",
  },
];

const videos = Array.from({ length: 9 }, (_, index) => ({
  source: `/eventvideo-${index + 1}.mp4`,
}));

function VideoTile({ source, index }: { source: string; index: number }) {
  return (
    <figure className="group relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
      {/* Caption files were not supplied with the uploaded event videos. */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        controls
        aria-label={`Event video ${index + 1}`}
        className="h-full w-full object-cover"
        poster="/company-logo.png"
        preload="none"
        src={source}
      />
    </figure>
  );
}

export default function PortfolioPage() {
  return (
    <DefaultLayout>
      <section className="relative overflow-hidden py-10 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.1),transparent_28%)]" />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            The experience
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            Feel the moment before it begins.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Every celebration has its own rhythm. We shape the sound, lighting,
            staging, and atmosphere so your guests can feel the energy from the
            first arrival to the final applause.
          </p>
        </div>
      </section>

      <section aria-label="Event portfolio gallery" className="pb-12 md:pb-20">
        <div className="grid auto-rows-[220px] gap-5 sm:auto-rows-[260px] md:grid-cols-2 md:auto-rows-[230px] lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.image}
              className={`group relative min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 ${item.className ?? ""}`}
            >
              <img
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={item.image}
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        aria-label="Event videos"
        className="border-t border-white/10 py-12 md:py-16"
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            In motion
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            See the energy come alive.
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Press play on any moment to watch. Videos stay unloaded until you
            choose one, keeping the page quick and your data usage low.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <VideoTile key={video.source} index={index} source={video.source} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-4xl font-black text-orange-300">01</p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Plan with purpose
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              We listen to your vision, understand your priorities, and map
              every detail before the first guest arrives.
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-orange-300">02</p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Build the atmosphere
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Sound, lighting, styling, and timing come together to create a
              setting that feels unmistakably yours.
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-orange-300">03</p>
            <h2 className="mt-4 text-xl font-semibold text-white">
              Be fully present
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Our team manages the moving parts, giving you space to welcome
              your guests and enjoy the celebration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 text-center md:py-20">
        <p className="text-2xl font-semibold text-white sm:text-3xl">
          Your occasion deserves its own story.
        </p>
        <NextLink
          className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-orange-500/20 transition-transform hover:-translate-y-0.5"
          href="/contact"
        >
          Plan your event
        </NextLink>
      </section>
    </DefaultLayout>
  );
}
