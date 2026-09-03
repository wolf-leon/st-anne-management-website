import DefaultLayout from "@/layouts/default";

const values = [
  {
    title: "Wedding specialists",
    text: "We plan elegant weddings and celebrations with a focus on emotional flow, beautiful styling, and seamless guest experience.",
  },
  {
    title: "Full production support",
    text: "Our team handles sound, lighting, stage setup, generators, trussing, décor, and event production for an effortless event day.",
  },
  {
    title: "End-to-end management",
    text: "From planning to execution, we coordinate every element so your event feels polished, stress-free, and memorable.",
  },
];

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Our story
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
            About our Founder
          </h1>
          <p className="mt-3 text-xl font-medium text-orange-200">
            Francisco Paulo Rodrigues 🌟
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3">
            <img
              alt="Francisco Paulo Rodrigues with his sons"
              className="aspect-[4/5] h-auto w-full rounded-[1.6rem] bg-white object-contain"
              src="/Team-2.jpeg"
            />
          </div>

          <div className="max-w-2xl text-center text-lg leading-8 text-slate-300 sm:text-left">
            <p className="font-medium text-white">
              Every great journey begins with a small dream.
            </p>
            <p className="mt-5">
              Our founder, Francisco Paulo Rodrigues, started his journey with
              nothing more than a small loudspeaker, simple decorations, and a
              few lights. From humble beginnings, he slowly built his passion
              into a name that became a part of countless celebrations.
            </p>
            <p className="mt-5">
              He worked tirelessly, day and night, providing sound, lights, and
              decorations for local weddings and events. He also proudly
              provided sound and lighting services for Hindu festivals and
              Zatras, bringing his dedication and professionalism to every
              celebration, regardless of its size.
            </p>
            <p className="mt-5">
              Behind every event was his hard work, determination, and countless
              sacrifices. He believed in giving his best, even when the work was
              difficult and the hours were long.
            </p>
            <p className="mt-5">
              Today, Francisco Paulo Rodrigues is no longer with us, but the
              legacy he built continues to live on through every event, every
              light, every sound, and every celebration we are a part of.
            </p>
            <p className="mt-5">
              We remember him not only as our founder, but as a man who started
              small, dreamed big, worked hard, and built something that
              continues to inspire us.
            </p>
            <p className="mt-6 font-medium text-orange-200">
              With gratitude, love, and respect — always remembered, never
              forgotten.
            </p>
          </div>
        </div>

        <div className="mt-20 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              The next chapter
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              A family legacy in the hands of his sons
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Today, St. Ann Events is proudly carried forward by brothers
              Swinton Rodrigues and Moses Rodrigues.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              For Swinton and Moses, it is their father&apos;s dream, their
              family&apos;s journey, and a legacy they are proud to carry
              forward.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3">
            <img
              alt="Brothers Swinton and Moses Rodrigues at an event"
              className="h-[420px] w-full rounded-[1.6rem] object-cover"
              src="/brothers.jpeg"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 md:col-span-2">
            <img
              alt="Swinton and Moses Rodrigues working together at an event"
              className="h-auto w-full rounded-[1.6rem] object-contain"
              src="/brothers-2.png"
            />
            <figcaption className="px-3 pb-2 pt-5 text-center">
              <p className="text-lg font-semibold text-white">
                Brothers in business, united by family.
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Swinton and Moses bring Dad&apos;s vision to life in every
                celebration they create.
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-y border-orange-300/30 px-6 py-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            What guides us
          </p>
          <blockquote className="mt-5 text-xl font-semibold leading-8 text-white sm:text-2xl">
            &quot;Blessed is the one who trusts in the Lord, whose confidence is
            in him&quot;
          </blockquote>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-200">
            Jeremiah 17:7
          </p>
          <p className="mt-6 text-base leading-7 text-slate-300 sm:text-lg">
            Every event is a chance to honour our roots, bring people together,
            and keep Dad&apos;s legacy moving forward.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {value.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
