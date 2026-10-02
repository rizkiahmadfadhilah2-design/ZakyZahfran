import ScrollReveal from "../ui/ScrollReveal";

export default function Pricing({ lang }) {

  const plans = [
    {
      name: lang === "en" ? "Essential Advisory" : "Konsultasi Dasar",
      price: "Rp 2.500.000",
      desc: lang === "en"
        ? "For startups and small businesses needing legal guidance."
        : "Untuk startup dan UMKM yang membutuhkan arahan hukum.",
      features: [
        lang === "en" ? "Legal Consultation Session" : "Sesi Konsultasi Hukum",
        lang === "en" ? "Basic Contract Review" : "Review Kontrak Dasar",
        lang === "en" ? "Email Support" : "Support via Email",
      ],
      popular: false,
    },
    {
      name: lang === "en" ? "Strategic Advisory" : "Konsultasi Strategis",
      price: "Rp 5.000.000",
      desc: lang === "en"
        ? "Comprehensive legal support for growing businesses."
        : "Pendampingan hukum menyeluruh untuk bisnis berkembang.",
      features: [
        lang === "en" ? "Full Legal Advisory" : "Pendampingan Hukum Lengkap",
        lang === "en" ? "Contract Drafting & Review" : "Penyusunan & Review Kontrak",
        lang === "en" ? "Priority Support" : "Prioritas Support",
      ],
      popular: true,
    },
    {
      name: lang === "en" ? "Enterprise Partnership" : "Kemitraan Perusahaan",
      price: lang === "en" ? "Custom Pricing" : "Harga Fleksibel",
      desc: lang === "en"
        ? "Dedicated legal partner for corporations and large-scale operations."
        : "Partner hukum khusus untuk perusahaan skala besar.",
      features: [
        lang === "en" ? "Dedicated Legal Team" : "Tim Legal Dedicated",
        lang === "en" ? "Unlimited Consultation" : "Konsultasi Tanpa Batas",
        lang === "en" ? "On-site & Strategic Support" : "Support On-site & Strategis",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-semibold">
            {lang === "en" ? "Professional Fee Structure" : "Struktur Biaya Layanan"}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 mt-3 mb-14">
            {lang === "en"
              ? "Flexible engagement models tailored to your business needs"
              : "Skema kerja fleksibel sesuai kebutuhan bisnis Anda"}
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 text-left">

          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className={`relative p-8 rounded-2xl border transition duration-300
                hover:-translate-y-2 hover:shadow-2xl
                ${plan.popular
                  ? "border-black bg-black text-white scale-105"
                  : "border-gray-200 bg-white"}
              `}>

                {/* BADGE */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-full bg-white text-black">
                    {lang === "en" ? "Recommended" : "Rekomendasi"}
                  </span>
                )}

                {/* NAME */}
                <h3 className="text-xl font-semibold">
                  {plan.name}
                </h3>

                {/* DESC */}
                <p className={`text-sm mt-2 ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.desc}
                </p>

                {/* PRICE */}
                <p className="text-3xl font-bold mt-6">
                  {plan.price}
                </p>

                {/* FEATURES */}
                <ul className={`mt-6 space-y-3 text-sm ${plan.popular ? "text-gray-200" : "text-gray-600"}`}>
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  className={`block text-center mt-8 py-3 rounded-xl font-medium transition
                    ${plan.popular
                      ? "bg-white text-black hover:scale-105"
                      : "bg-gray-100 text-black hover:bg-gray-200"}
                  `}
                >
                  {lang === "en" ? "Consult Now" : "Konsultasi Sekarang"}
                </a>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}