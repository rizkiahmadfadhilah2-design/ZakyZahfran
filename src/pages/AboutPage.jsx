import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";

const team = [
  {
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
  },
  {
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
  },
  {
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "UIN Sunan Gunung Djati",
  },
  {
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
  },
  {
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "Universitas Padjadjaran • Universitas Yarsi",
  },
  {
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
  },
];

export default function AboutPage() {
  const waClick = () => {
    const phone = "6281234567890";
    const msg =
      "Halo, saya ingin konsultasi legal & tax advisory untuk bisnis saya.";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
    );
  };

  const emailClick = () => {
    window.location.href =
      "mailto:legal@yourfirm.com?subject=Consultation Request";
  };

  const scrollToCTA = () => {
    document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative py-20 md:py-32 bg-[#0B1220] text-white overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <ScrollReveal>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] text-gray-400 uppercase">
                Trusted Legal & Tax Advisory Firm
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight mt-4 md:mt-5">
                We Help Businesses
                <br />
                Stay Legally Safe & Scalable
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-300 mt-5 md:mt-6 leading-relaxed max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
                We protect your business from legal risks, optimize compliance,
                and structure growth safely.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-6 space-y-2 text-sm text-gray-300">
                <p>✔ Corporate Legal Protection</p>
                <p>✔ Tax Risk Minimization</p>
                <p>✔ Business Structuring Strategy</p>
              </div>
            </ScrollReveal>

            {/* CTA MOBILE FRIENDLY */}
            <ScrollReveal delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-start justify-center">

                <button
                  onClick={waClick}
                  className="w-full sm:w-auto px-5 py-3 bg-white text-black rounded-xl font-medium active:scale-95 hover:scale-[1.02] transition"
                >
                  Free Consultation
                </button>

                <button
                  onClick={scrollToCTA}
                  className="w-full sm:w-auto px-5 py-3 border border-white/20 rounded-xl text-white hover:bg-white/10 transition"
                >
                  Meet Our Team
                </button>

              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT */}
          <ScrollReveal>
            <div className="relative flex justify-center mt-6 md:mt-0">

              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-blue-500/20 blur-3xl rounded-full" />

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl">

                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  className="w-[240px] sm:w-[320px] h-[300px] sm:h-[380px] object-cover rounded-xl"
                />

                <p className="text-center text-xs sm:text-sm text-white/70 mt-4">
                  Legal Excellence You Can Trust
                </p>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-14 sm:py-20 border-b">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center">

          {[
            { num: "50+", label: "Corporate Clients" },
            { num: "120+", label: "Legal Cases Handled" },
            { num: "100%", label: "Compliance Success" },
            { num: "5+ Years", label: "Experience" },
          ].map((i, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <div>
                <p className="text-2xl sm:text-3xl font-semibold">{i.num}</p>
                <p className="text-gray-500 mt-2 text-xs sm:text-sm">
                  {i.label}
                </p>
              </div>
            </ScrollReveal>
          ))}

        </div>
      </section>

      {/* ================= PROFILE ================= */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                Why Clients Trust Us
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                We provide structured legal strategy instead of random advice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
                Every decision is backed by compliance accuracy and business logic.
              </p>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-400 uppercase">
                Leadership Team
              </p>
              <h2 className="text-2xl sm:text-4xl font-semibold mt-3">
                Experienced Legal Professionals
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

            {team.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>

                <div className="bg-white border rounded-2xl p-5 sm:p-6 hover:shadow-xl transition active:scale-[0.99]">

                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-200 mb-4" />

                  <h3 className="font-semibold text-sm sm:text-base">{p.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500">{p.role}</p>
                  <p className="text-[11px] sm:text-xs text-gray-400 mt-2">
                    {p.edu}
                  </p>

                </div>

              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section id="cta" className="py-20 sm:py-24 bg-[#0B1220] text-white text-center px-5">

        <ScrollReveal>
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Need Legal Consultation?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-300 mt-4 text-sm sm:text-base">
            Speak directly with our legal experts today.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

            <button
              onClick={waClick}
              className="px-6 py-3 bg-white text-black rounded-xl font-medium active:scale-95 hover:scale-105 transition"
            >
              WhatsApp Now
            </button>

            <button
              onClick={emailClick}
              className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition"
            >
              Email Us
            </button>

          </div>
        </ScrollReveal>

      </section>

    </div>
  );
}