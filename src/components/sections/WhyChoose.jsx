import ScrollReveal from "../ui/ScrollReveal";

const items = [
  {
    title: "Experienced Legal Experts",
    desc: "Handled various corporate and business legal cases with proven results.",
  },
  {
    title: "Fast Response Consultation",
    desc: "Quick and efficient legal support whenever your business needs assistance.",
  },
  {
    title: "International Standard Service",
    desc: "Following global legal standards to ensure professional and reliable service.",
  },
  {
    title: "Trusted by Businesses",
    desc: "Proven track record working with startups, SMEs, and enterprise clients.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-center">
            Why Choose Us
          </h2>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className="group p-6 border border-gray-100 rounded-2xl bg-white transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* SMALL ACCENT DOT */}
                <div className="w-2 h-2 bg-gray-300 rounded-full mb-4 group-hover:bg-black transition" />

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}