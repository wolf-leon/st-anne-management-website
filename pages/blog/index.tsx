import DefaultLayout from "@/layouts/default";

const articles = [
  {
    title: "Destination Weddings",
    excerpt:
      "Couples are choosing meaningful locations and immersive celebrations that turn the wedding weekend into a complete guest experience.",
    color: "bg-amber-200",
    rotation: "-rotate-1",
  },
  {
    title: "Intimate Micro Weddings",
    excerpt:
      "Smaller guest lists make room for more personal details, elevated dining, and thoughtful moments shared with the people who matter most.",
    color: "bg-rose-200",
    rotation: "rotate-1",
  },
  {
    title: "Statement Lighting",
    excerpt:
      "Layered lighting, glowing installations, and dramatic uplighting are shaping the mood and transforming ordinary venues after sunset.",
    color: "bg-sky-200",
    rotation: "-rotate-2",
  },
  {
    title: "Sustainable Celebrations",
    excerpt:
      "Reusable décor, seasonal florals, and mindful production choices are helping hosts create beautiful events with less waste.",
    color: "bg-lime-200",
    rotation: "rotate-2",
  },
  {
    title: "Live Entertainment",
    excerpt:
      "From acoustic sets to high-energy performers, live entertainment is giving guests a shared moment they will remember long after the event.",
    color: "bg-orange-200",
    rotation: "rotate-1",
  },
  {
    title: "Curated Food Experiences",
    excerpt:
      "Interactive stations, regional menus, and beautifully presented courses are making catering a central part of the celebration.",
    color: "bg-teal-200",
    rotation: "-rotate-1",
  },
  {
    title: "Immersive Theme Parties",
    excerpt:
      "Bold styling, coordinated music, and interactive details help guests step into a complete world created around the occasion.",
    color: "bg-fuchsia-200",
    rotation: "rotate-2",
  },
  {
    title: "Experiential Corporate Events",
    excerpt:
      "Companies are moving beyond formal presentations with engaging formats that build connection, energy, and stronger team memories.",
    color: "bg-violet-200",
    rotation: "-rotate-2",
  },
  {
    title: "Open-Air Celebrations",
    excerpt:
      "Gardens, beaches, and scenic terraces create a natural backdrop, with careful weather planning keeping the experience comfortable.",
    color: "bg-emerald-200",
    rotation: "rotate-1",
  },
  {
    title: "Personalized Guest Details",
    excerpt:
      "Welcome gifts, handwritten notes, and custom keepsakes are small touches that make every guest feel genuinely considered.",
    color: "bg-yellow-200",
    rotation: "-rotate-1",
  },
  {
    title: "Social Event Parties",
    excerpt:
      "Milestone birthdays, anniversaries, and private parties are becoming more expressive with custom décor, music, and memorable staging.",
    color: "bg-pink-200",
    rotation: "rotate-2",
  },
  {
    title: "Seamless Hybrid Events",
    excerpt:
      "Reliable sound, lighting, and streaming setups now help in-person and remote guests share the same event atmosphere together.",
    color: "bg-cyan-200",
    rotation: "-rotate-2",
  },
];

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
            Articles
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Trending event ideas worth remembering.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A quick collection of event styles, experiences, and details
            inspiring celebrations across India.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className={`relative min-h-56 p-6 text-slate-900 shadow-xl shadow-black/20 transition-transform hover:rotate-0 hover:-translate-y-1 ${article.color} ${article.rotation}`}
            >
              <span className="absolute left-1/2 top-0 h-5 w-20 -translate-x-1/2 -translate-y-2 rotate-1 bg-white/45 shadow-sm" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                Trending event
              </p>
              <h2 className="mt-5 text-2xl font-black tracking-tight">
                {article.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
