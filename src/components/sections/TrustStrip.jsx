import { useState } from "react";

export default function TrustStrip({ lang }) {

  const legalClients = [
    "PT Pertamina (Persero)",
    "Bank Mandiri Tbk",
    "PT Telkom Indonesia",
    "Nusantara Property Group",
  ];

  const taxClients = [
    "Astra International",
    "Startup Fintech Nusantara",
    "Private Investment Group",
    "High Net Worth Individual",
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            {lang === "en"
              ? "Trusted Across Industries"
              : "Dipercaya Berbagai Industri"}
          </p>

          <h3 className="text-2xl md:text-3xl font-semibold mt-3 text-gray-900">
            {lang === "en"
              ? "Laws & Tax Advisory Excellence"
              : "Keunggulan Konsultan Hukum & Pajak"}
          </h3>

          <p className="text-sm text-gray-500 mt-3">
            {lang === "en"
              ? "Our expertise is divided into two core advisory pillars"
              : "Keahlian kami terbagi dalam dua pilar utama"}
          </p>
        </div>

        {/* ================= TWO GAP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT - LEGAL */}
          <div className="p-6 border rounded-2xl bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              ⚖️ Legal Advisory Clients
            </h4>

            <p className="text-sm text-gray-500 mb-6">
              Corporate legal structuring, compliance, litigation, and business protection.
            </p>

            <div className="space-y-3">
              {legalClients.map((c, i) => (
                <div
                  key={i}
                  className="p-3 bg-white border rounded-xl hover:shadow-sm transition"
                >
                  <p className="font-medium text-gray-900 text-sm">
                    {c}
                  </p>
                  <p className="text-xs text-blue-600 mt-1">
                    Legal Advisory
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - TAX */}
          <div className="p-6 border rounded-2xl bg-gray-50">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              💰 Tax Advisory Clients
            </h4>

            <p className="text-sm text-gray-500 mb-6">
              Tax planning, compliance optimization, and financial risk mitigation.
            </p>

            <div className="space-y-3">
              {taxClients.map((c, i) => (
                <div
                  key={i}
                  className="p-3 bg-white border rounded-xl hover:shadow-sm transition"
                >
                  <p className="font-medium text-gray-900 text-sm">
                    {c}
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    Tax Advisory
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= STATS ================= */}
        <div className="mt-14 flex flex-wrap justify-center gap-10 text-center">

          <div>
            <p className="text-xl font-semibold">50+</p>
            <p className="text-xs text-gray-500">
              {lang === "en" ? "Clients Served" : "Klien Ditangani"}
            </p>
          </div>

          <div>
            <p className="text-xl font-semibold">70%</p>
            <p className="text-xs text-gray-500">Legal Advisory</p>
          </div>

          <div>
            <p className="text-xl font-semibold">30%</p>
            <p className="text-xs text-gray-500">Tax Advisory</p>
          </div>

        </div>

      </div>
    </section>
  );
}