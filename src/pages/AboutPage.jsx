import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";
import { Link } from "react-router-dom";

const team = [
  {
    id: "zaky",
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc:
      "Memimpin strategi hukum korporasi dengan fokus pada struktur bisnis, mitigasi risiko, dan kepatuhan regulasi perusahaan berskala nasional dan internasional.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dimas",
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc:
      "Spesialis hukum kontrak dan litigasi bisnis dengan pengalaman menangani penyelesaian sengketa perusahaan dan penyusunan perjanjian strategis lintas sektor industri.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dini",
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "UIN Sunan Gunung Djati",
    desc:
      "Berfokus pada hukum perdata dan kepatuhan regulasi, khususnya dalam pendampingan hukum bisnis berbasis syariah dan implementasi tata kelola perusahaan.",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "tsabbit",
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc:
      "Ahli dalam legal drafting, perizinan usaha, serta pendampingan hukum untuk startup dan perusahaan berkembang dalam fase scaling bisnis.",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dina",
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "Universitas Padjadjaran • Universitas Yarsi",
    desc:
      "Spesialis hukum pertanahan dan kenotariatan, menangani transaksi properti, legalisasi aset, serta pengurusan dokumen hukum bernilai tinggi.",
    photo:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "clarte",
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc:
      "Berpengalaman dalam hukum perusahaan dan kepatuhan regulasi, dengan fokus pada audit legal dan penguatan struktur hukum internal perusahaan.",
    photo:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative py-20 md:py-32 bg-[#0B1220] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

          <div className="text-center md:text-left">

            <ScrollReveal>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-400 uppercase">
                Trusted Legal & Tax Advisory Firm
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold mt-4">
                Legal Precision.<br />
                Business Protection.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-300 mt-5 max-w-lg">
                We protect your business through structured legal strategy,
                tax compliance, and risk mitigation for sustainable growth.
              </p>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 sm:py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-semibold">
              Experienced Legal Professionals
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {team.map((p) => (
              <Link
                key={p.id}
                to={`/profile/${p.id}`}
                className="block bg-white border rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition"
              >

                {/* FOTO PROFESIONAL */}
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-14 h-14 rounded-full object-cover mb-4"
                />

                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.role}</p>

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {p.desc}
                </p>

                <p className="text-[10px] text-gray-400 mt-2">
                  {p.edu}
                </p>

              </Link>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}