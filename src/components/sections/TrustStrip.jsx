export default function TrustStrip({ lang }) {
  return (
    <section className="bg-white border-y border-gray-100 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT LABEL */}
        <div className="text-center md:text-left">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            {lang === "en"
              ? "Trusted By Businesses Across Indonesia"
              : "Dipercaya Oleh Berbagai Bisnis di Indonesia"}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {lang === "en"
              ? "Legal & Tax Advisory Partner for Growing Companies"
              : "Partner Konsultan Hukum & Pajak untuk Perusahaan Berkembang"}
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3">

          {[
            lang === "en" ? "Startups" : "Startup",
            lang === "en" ? "SMEs" : "UMKM",
            lang === "en" ? "Corporations" : "Perusahaan",
            lang === "en" ? "Enterprises" : "Enterprise",
            lang === "en" ? "Foreign Investors" : "Investor Asing"
          ].map((item, i) => (
            <span
              key={i}
              className="px-4 py-2 text-sm border border-gray-200 rounded-full text-gray-600 hover:border-black hover:text-black transition"
            >
              {item}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
}