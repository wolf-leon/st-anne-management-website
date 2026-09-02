import DefaultLayout from "@/layouts/default";

const faqs = [
  {
    question: "What types of events do you manage?",
    answer:
      "We plan weddings, corporate events, private celebrations, and special occasions with full event solutions from planning through execution.",
  },
  {
    question: "Do you provide production equipment too?",
    answer:
      "Yes. We offer professional sound and lighting, trussing, generators, stage setup, décor, and event production support to ensure a smooth event experience.",
  },
  {
    question: "Can you handle both planning and on-site execution?",
    answer:
      "Absolutely. We coordinate the planning process and manage on-site operations so every detail is executed seamlessly and professionally.",
  },
  {
    question: "Do you also support catering services?",
    answer:
      "Yes. We can coordinate catering services as part of the full event experience to suit the scale and style of your celebration.",
  },
  {
    question: "How early should we contact you before our event?",
    answer:
      "We recommend getting in touch as early as possible, especially for weddings and larger celebrations. This gives us time to understand your vision, secure the right vendors, and plan every production detail properly.",
  },
  {
    question: "Do you manage events outside Goa?",
    answer:
      "Yes. Although we are based in Goa, we serve events across India and can support celebrations in cities and destinations nationwide.",
  },
  {
    question: "Can you create a package around our budget and vision?",
    answer:
      "Yes. We tailor our planning and production support to your event goals, guest experience, venue, and budget, then recommend the services that will make the biggest impact.",
  },
];

export default function FaqsPage() {
  return (
    <DefaultLayout>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            FAQS
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Questions we hear most often.
          </h1>
        </div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-xl font-semibold text-white">
                {faq.question}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
