import ScrollReveal from "../ui/ScrollReveal";

const cases = [
  {
    title: "Corporate Legal Restructuring",
    desc: "Membantu startup melakukan restrukturisasi legal untuk ekspansi internasional.",
    tag: "Corporate Law",
  },
  {
    title: "Contract Optimization",
    desc: "Mengoptimalkan kontrak bisnis agar lebih aman, scalable, dan mengurangi risiko hukum.",
    tag: "Contract Law",
  },
  {
    title: "Dispute Resolution",
    desc: "Menyelesaikan sengketa bisnis melalui mediasi tanpa proses pengadilan panjang.",
    tag: "Litigation",
  },
];

export default function CaseStudy() {
  return (
    <section className="py-28 bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Case Studies
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-400 max-w-xl mb-14 leading-relaxed">
            Selected projects that demonstrate how we help businesses solve complex legal challenges
            with structured and strategic solutions.
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {cases.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl">

                {/* TOP TAG */}
                <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-white/10 text-yellow-300 mb-4 group-hover:bg-white/20 transition">
                  {item.tag}
                </span>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* FAKE “VIEW MORE” FEEL */}
                <div className="mt-6 text-xs text-white/50 group-hover:text-white transition">
                  View details →
                </div>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}