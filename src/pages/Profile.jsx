import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const team = [
  {
    id: "zaky",
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc:
      "Memimpin strategi hukum korporasi dengan fokus pada struktur bisnis, mitigasi risiko, dan kepatuhan regulasi perusahaan berskala nasional dan internasional.",
    detail:
      "Berpengalaman menangani restrukturisasi perusahaan, merger & acquisition, serta advisory hukum untuk perusahaan besar dan startup yang sedang berkembang.",
    photo:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dimas",
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia • Universitas Indonesia",
    desc: "Spesialis hukum kontrak dan litigasi bisnis.",
    detail:
      "Fokus pada penyelesaian sengketa bisnis, perjanjian komersial, serta pendampingan hukum pada sektor industri dan keuangan.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dini",
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "UIN Sunan Gunung Djati",
    desc: "Hukum perdata dan kepatuhan regulasi.",
    detail:
      "Berpengalaman dalam hukum berbasis syariah, compliance perusahaan, serta legal governance dalam bisnis modern.",
    photo:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "tsabbit",
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc: "Legal drafting & startup advisory.",
    detail:
      "Mendampingi startup dalam pendirian usaha, perizinan, serta struktur hukum awal perusahaan.",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "dina",
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "Universitas Padjadjaran • Universitas Yarsi",
    desc: "Hukum pertanahan & kenotariatan.",
    detail:
      "Spesialis transaksi properti, akta notaris, dan legalisasi aset bernilai tinggi.",
    photo:
      "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "clarte",
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "Universitas Islam Indonesia",
    desc: "Corporate legal & compliance.",
    detail:
      "Fokus audit legal internal, kepatuhan perusahaan, dan penguatan struktur hukum korporasi.",
    photo:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const person = team.find((t) => t.id === id);

  if (!person) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Profile tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-28">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-gray-500 hover:text-black transition"
        >
          ← Back
        </button>

        {/* CARD */}
        <div className="border rounded-2xl shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="bg-[#0B1220] text-white p-8 md:p-10 grid md:grid-cols-3 gap-8 items-center">

            {/* PHOTO */}
            <div className="flex justify-center md:justify-start">
              <img
                src={person.photo}
                alt={person.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/20"
              />
            </div>

            {/* INFO */}
            <div className="md:col-span-2 text-center md:text-left">
              <h1 className="text-2xl font-semibold">{person.name}</h1>
              <p className="text-gray-300 mt-1">{person.role}</p>

              <p className="text-gray-400 text-sm mt-3">{person.edu}</p>

              <div className="mt-4 inline-block px-3 py-1 text-xs bg-white/10 rounded-full">
                Legal & Corporate Advisory
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-8 md:p-10 space-y-6">

            {/* SHORT DESC */}
            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Professional Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {person.desc}
              </p>
            </div>

            {/* DETAIL */}
            <div>
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                Expertise & Experience
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                {person.detail}
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">

              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  "Halo, saya ingin konsultasi dengan " + person.name
                )}`}
                target="_blank"
                className="bg-black text-white px-6 py-3 rounded-xl text-sm hover:scale-105 transition text-center"
              >
                Konsultasi Sekarang
              </a>

              <button
                onClick={() => navigate("/about")}
                className="border px-6 py-3 rounded-xl text-sm hover:bg-gray-100 transition"
              >
                Kembali ke About
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}