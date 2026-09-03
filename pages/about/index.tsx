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
            Remembering our Dad
          </h1>
          <p className="mt-3 text-xl font-medium text-orange-200">
            Francisco Paulo Rodrigues 🕊️
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3">
            <img
              alt="Francisco Paulo Rodrigues with his sons"
              className="aspect-[4/5] h-auto w-full rounded-[1.6rem] bg-white object-contain"
              src="/Team.png"
            />
          </div>

          <div className="max-w-2xl text-center text-lg leading-8 text-slate-300 sm:text-left">
            <p>
              Six years have passed since we lost you, Dad, but your memory
              remains forever in our hearts. 🤍
            </p>
            <p className="mt-5">
              You were not only a loving father, but also the founder and vision
              behind St. Ann Events. Your passion, dedication, and hard work
              built a legacy that continues to live on.
            </p>
            <p className="mt-5">
              We miss your presence, your guidance, and your loving smile.
              Though you are no longer by our side, everything you taught us and
              everything you built will always remain with us.
            </p>
            <p className="mt-5 font-medium text-white">
              Gone from our sight, but never from our hearts.
            </p>
            <p className="mt-5 text-orange-200">
              Forever loved. Forever missed. Forever our Dad. 🕯️❤️
            </p>
            <p className="mt-6 text-base font-semibold uppercase tracking-[0.16em] text-slate-400">
              St. Ann Events
              <span className="mt-2 block normal-case tracking-normal text-slate-300">
                Honouring Dad&apos;s vision. Continuing his legacy. ❤️
              </span>
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
              Today, St. Ann Events is run by brothers Swinton Rodrigues and
              Moses Rodrigues. Together, they carry their father&apos;s vision
              forward with the same passion, care, and dedication he gave to
              every event.
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
