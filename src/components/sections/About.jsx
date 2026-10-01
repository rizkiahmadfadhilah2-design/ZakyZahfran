import ScrollReveal from "../ui/ScrollReveal";

export default function About({ lang }) {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>

          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              {lang === "en" ? "About Our Firm" : "Tentang Firma Kami"}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-600 mt-6 leading-relaxed">
              {lang === "en"
                ? "We are a professional legal and tax consulting firm helping businesses navigate compliance, taxation, and corporate structure with precision and clarity."
                : "Kami adalah firma konsultan hukum dan pajak profesional yang membantu bisnis dalam kepatuhan, perpajakan, dan struktur perusahaan secara tepat dan terarah."}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {lang === "en"
                ? "Our approach combines legal expertise, tax strategy, and business insight to deliver practical and sustainable solutions for long-term growth."
                : "Pendekatan kami menggabungkan keahlian hukum, strategi pajak, dan wawasan bisnis untuk memberikan solusi praktis dan berkelanjutan."}
            </p>
          </ScrollReveal>

          {/* MINI STATS */}
          <ScrollReveal delay={0.3}>
            <div className="flex gap-10 mt-10">

              <div>
                <p className="text-2xl font-semibold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">
                  {lang === "en" ? "Clients" : "Klien"}
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">5+</p>
                <p className="text-sm text-gray-500">
                  {lang === "en" ? "Years Experience" : "Tahun Pengalaman"}
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold text-gray-900">100%</p>
                <p className="text-sm text-gray-500">
                  {lang === "en" ? "Commitment" : "Komitmen"}
                </p>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* RIGHT VISUAL */}
        <ScrollReveal>
          <div className="relative">

            {/* glow */}
            <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-3xl rounded-full -z-10" />

            {/* card */}
            <div className="bg-gray-50 border rounded-2xl p-10 shadow-sm">

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {lang === "en" ? "Why We Exist" : "Mengapa Kami Ada"}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {lang === "en"
                  ? "To simplify legal complexity and empower businesses to grow safely, strategically, and sustainably in a fast-changing regulatory environment."
                  : "Untuk menyederhanakan kompleksitas hukum dan membantu bisnis tumbuh secara aman, strategis, dan berkelanjutan di tengah regulasi yang terus berubah."}
              </p>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}