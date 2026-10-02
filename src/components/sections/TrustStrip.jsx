import { useState } from "react";

export default function TrustStrip({ lang }) {
  const [filter, setFilter] = useState("all");

  const categories = [
    { key: "all", label: lang === "en" ? "All" : "Semua" },
    { key: "corporate", label: lang === "en" ? "Corporate" : "Perusahaan" },
    { key: "banking", label: lang === "en" ? "Banking" : "Perbankan" },
    { key: "investment", label: lang === "en" ? "Investment" : "Investasi" },
    { key: "startup", label: lang === "en" ? "Startup" : "Startup" },
    { key: "property", label: lang === "en" ? "Property" : "Properti" },
  ];

  const clients = [
    { name: "PT Pertamina (Persero)", type: "corporate" },
    { name: "Bank Mandiri Tbk", type: "banking" },
    { name: "PT Telkom Indonesia", type: "corporate" },
    { name: "Astra International", type: "corporate" },
    { name: "Startup Fintech Nusantara", type: "startup" },
    { name: "Nusantara Property Group", type: "property" },
    { name: "Private Investment Group", type: "investment" },
    { name: "High Net Worth Individual", type: "investment" },
  ];

  const filtered =
    filter === "all"
      ? clients
      : clients.filter((c) => c.type === filter);

  return (
    <section className="bg-white border-y border-gray-100 py-14">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            {lang === "en"
              ? "Trusted Across Industries"
              : "Dipercaya Berbagai Industri"}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mt-3 text-gray-900">
            {lang === "en"
              ? "Legal & Tax Advisory for Growing Businesses"
              : "Konsultan Hukum & Pajak untuk Bisnis Berkembang"}
          </h3>

          <p className="text-sm text-gray-500 mt-3">
            {lang === "en"
              ? "Select industry to view representative clients"
              : "Pilih industri untuk melihat klien"}
          </p>

        </div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">

          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-sm border transition
                ${
                  filter === cat.key
                    ? "bg-black text-white border-black"
                    : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"
                }
              `}
            >
              {cat.label}
            </button>
          ))}

        </div>

        {/* CLIENT GRID */}
        <div className="mt-10 grid md:grid-cols-3 gap-4 transition-all">

          {filtered.map((c, i) => (
            <div
              key={i}
              className="p-5 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-sm transition"
            >
              <p className="font-semibold text-gray-900">{c.name}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase">
                {c.type}
              </p>
            </div>
          ))}

        </div>

        {/* STATS */}
        <div className="mt-12 flex flex-wrap justify-center gap-10 text-center">

          <div>
            <p className="text-xl font-semibold text-gray-900">50+</p>
            <p className="text-xs text-gray-500">
              {lang === "en" ? "Clients Served" : "Klien Ditangani"}
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">100%</p>
            <p className="text-xs text-gray-500">
              {lang === "en" ? "Compliance Focus" : "Fokus Kepatuhan"}
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold text-gray-900">5+</p>
            <p className="text-xs text-gray-500">
              {lang === "en" ? "Years Experience" : "Tahun Pengalaman"}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}