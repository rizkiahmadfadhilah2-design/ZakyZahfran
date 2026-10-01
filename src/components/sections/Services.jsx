import Navbar from "../layout/Navbar";
import ScrollReveal from "../ui/ScrollReveal";

const services = [
  {
    category: {
      en: "Corporate & Business Law",
      id: "Hukum Korporasi & Bisnis",
    },
    items: [
      {
        icon: "🏢",
        title: {
          en: "Corporate Structuring",
          id: "Struktur Perusahaan",
        },
        desc: {
          en: "Designing strong legal structures to support scalable and secure business growth.",
          id: "Menyusun struktur hukum perusahaan yang kuat untuk mendukung pertumbuhan bisnis.",
        },
      },
      {
        icon: "📈",
        title: {
          en: "Investment Advisory",
          id: "Konsultasi Investasi",
        },
        desc: {
          en: "Helping businesses manage legal aspects of investment and expansion strategies.",
          id: "Membantu bisnis dalam aspek hukum investasi dan ekspansi usaha.",
        },
      },
      {
        icon: "🏦",
        title: {
          en: "Banking & Finance",
          id: "Perbankan & Keuangan",
        },
        desc: {
          en: "Advisory on financial regulations, compliance, and risk management.",
          id: "Konsultasi terkait regulasi keuangan, kepatuhan, dan manajemen risiko.",
        },
      },
    ],
  },

  {
    category: {
      en: "Dispute & Litigation",
      id: "Sengketa & Litigasi",
    },
    items: [
      {
        icon: "⚖️",
        title: {
          en: "Litigation",
          id: "Litigasi",
        },
        desc: {
          en: "Representing clients in court with strategic and result-driven legal approach.",
          id: "Mewakili klien di pengadilan dengan strategi hukum yang efektif.",
        },
      },
      {
        icon: "📉",
        title: {
          en: "Bankruptcy & Restructuring",
          id: "Kepailitan & Restrukturisasi",
        },
        desc: {
          en: "Assisting companies in financial restructuring and bankruptcy proceedings.",
          id: "Membantu perusahaan dalam restrukturisasi keuangan dan kepailitan.",
        },
      },
      {
        icon: "👷",
        title: {
          en: "Labor Law",
          id: "Hukum Ketenagakerjaan",
        },
        desc: {
          en: "Managing employment disputes and workforce compliance issues.",
          id: "Menangani sengketa ketenagakerjaan dan kepatuhan tenaga kerja.",
        },
      },
    ],
  },

  {
    category: {
      en: "Tax & Financial Advisory",
      id: "Pajak & Keuangan",
    },
    items: [
      {
        icon: "💰",
        title: {
          en: "Tax Compliance",
          id: "Kepatuhan Pajak",
        },
        desc: {
          en: "Ensuring businesses meet all tax obligations accurately and on time.",
          id: "Memastikan bisnis memenuhi kewajiban pajak secara tepat dan akurat.",
        },
      },
      {
        icon: "📊",
        title: {
          en: "Tax Planning",
          id: "Perencanaan Pajak",
        },
        desc: {
          en: "Optimizing tax strategy to reduce risk and improve efficiency legally.",
          id: "Mengoptimalkan strategi pajak secara legal untuk efisiensi bisnis.",
        },
      },
      {
        icon: "🕌",
        title: {
          en: "Islamic Finance",
          id: "Keuangan Syariah",
        },
        desc: {
          en: "Advisory on Sharia-compliant financial structures and transactions.",
          id: "Konsultasi terkait struktur keuangan berbasis syariah.",
        },
      },
    ],
  },

  {
    category: {
      en: "Specialized Legal Services",
      id: "Layanan Hukum Khusus",
    },
    items: [
      {
        icon: "🏠",
        title: {
          en: "Property & Infrastructure",
          id: "Properti & Infrastruktur",
        },
        desc: {
          en: "Handling legal matters in real estate and infrastructure development.",
          id: "Menangani aspek hukum properti dan pembangunan infrastruktur.",
        },
      },
      {
        icon: "👨‍👩‍👧",
        title: {
          en: "Family & Private Law",
          id: "Hukum Keluarga",
        },
        desc: {
          en: "Managing personal legal matters with confidentiality and care.",
          id: "Menangani masalah hukum pribadi secara profesional dan rahasia.",
        },
      },
    ],
  },
];

export default function ServicesPage({ lang }) {
  return (
    <div className="bg-white text-gray-900">

      <Navbar />

      {/* HEADER */}
      <section className="py-28 bg-[#0B1220] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">

          <ScrollReveal>
            <h1 className="text-5xl font-semibold">
              {lang === "en" ? "Our Services" : "Layanan Kami"}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 mt-4">
              {lang === "en"
                ? "Comprehensive legal and tax solutions tailored to support your business growth."
                : "Solusi hukum dan pajak yang komprehensif untuk mendukung pertumbuhan bisnis Anda."}
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {services.map((group, i) => (
            <div key={i}>

              {/* CATEGORY TITLE */}
              <ScrollReveal>
                <h2 className="text-2xl font-semibold mb-8">
                  {group.category[lang]}
                </h2>
              </ScrollReveal>

              {/* CARDS */}
              <div className="grid md:grid-cols-3 gap-6">

                {group.items.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>

                    <div className="p-6 border rounded-2xl hover:shadow-xl hover:-translate-y-1 transition">

                      <div className="text-3xl mb-4">
                        {item.icon}
                      </div>

                      <h3 className="font-semibold text-lg mb-2">
                        {item.title[lang]}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc[lang]}
                      </p>

                    </div>

                  </ScrollReveal>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

    </div>
  );
}