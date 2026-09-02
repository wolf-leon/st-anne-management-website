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
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              About us
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              We create beautiful events that feel effortless from start to
              finish.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              We are wedding and event planning experts offering complete event
              solutions from planning to execution. Our services include
              professional sound and lighting, trussing, generators, stage
              setup, décor, catering services, and full event production.
              Whether it&apos;s a wedding, corporate event, private celebration,
              or special occasion, we handle every detail to create a seamless
              and memorable experience.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3">
            <img
              alt="Event planning team"
              className="h-[520px] w-full rounded-[1.6rem] object-cover"
              src="/corporate.jpg"
            />
          </div>
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
