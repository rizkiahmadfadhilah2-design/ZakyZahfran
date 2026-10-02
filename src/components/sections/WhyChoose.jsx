import ScrollReveal from "../ui/ScrollReveal";

const items = [
  {
    title: "Corporate Governance & Compliance Expertise",
    desc: "Providing structured legal advisory aligned with corporate governance standards, regulatory compliance, and risk management frameworks.",
  },
  {
    title: "Responsive Strategic Advisory",
    desc: "Delivering timely legal insights to support critical business decisions in dynamic commercial environments.",
  },
  {
    title: "Internationally Aligned Legal Standards",
    desc: "Practicing legal methodologies consistent with global standards and cross-border regulatory expectations.",
  },
  {
    title: "Long-Term Advisory Partnership",
    desc: "Acting as a strategic legal partner for sustainable growth of startups, SMEs, and enterprise organizations.",
  },
];

export default function WhyChoose({ lang }) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              {lang === "en"
                ? "Institutional Strength"
                : "Kekuatan Institusional"}
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-gray-900">
              {lang === "en"
                ? "Why Clients Trust Our Firm"
                : "Mengapa Klien Mempercayai Kami"}
            </h2>

            <p className="text-gray-500 mt-4 leading-relaxed text-sm">
              {lang === "en"
                ? "We provide structured legal advisory with a focus on compliance, governance, and sustainable business growth."
                : "Kami memberikan konsultasi hukum terstruktur dengan fokus pada kepatuhan, tata kelola, dan pertumbuhan bisnis berkelanjutan."}
            </p>
          </div>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className="p-8 border border-gray-100 rounded-2xl bg-white
                hover:shadow-lg transition duration-300">

                {/* subtle line accent */}
                <div className="w-10 h-[2px] bg-gray-300 mb-5"></div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900 leading-snug mb-3">
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