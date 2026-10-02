import { useEffect, useState } from "react";

export default function Hero({ lang }) {
  const [open, setOpen] = useState(false);

  // ESC close modal (UX improvement)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1220] text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] right-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full bottom-[-120px] left-[-120px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <div className="mb-4 inline-flex items-center gap-2 text-[10px] sm:text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
            {lang === "en"
              ? "Trusted Legal & Tax Consultant"
              : "Konsultan Hukum & Pajak Terpercaya"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {lang === "en"
              ? "Strategic Legal & Tax Solutions for Business Growth"
              : "Solusi Hukum & Pajak Strategis untuk Pertumbuhan Bisnis"}
          </h1>

          <p className="text-gray-300 mt-5 sm:mt-6 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base">
            {lang === "en"
              ? "We help businesses stay compliant, reduce tax risks, and build strong legal structures for sustainable growth."
              : "Kami membantu bisnis tetap patuh regulasi, mengurangi risiko pajak, dan membangun struktur hukum yang kuat."}
          </p>

          {/* STATS */}
          <div className="flex justify-center md:justify-start gap-6 mt-8 text-sm text-gray-300">

            <div>
              <p className="text-white text-lg font-semibold">50+</p>
              <p>Clients</p>
            </div>

            <div>
              <p className="text-white text-lg font-semibold">100%</p>
              <p>Compliance</p>
            </div>

            <div>
              <p className="text-white text-lg font-semibold">5yr+</p>
              <p>Experience</p>
            </div>

          </div>

          {/* CTA (IMPROVED CONVERSION) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">

            <button
              onClick={() => setOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 active:scale-95 transition"
            >
              {lang === "en" ? "Book Consultation" : "Konsultasi"}
            </button>

            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              WhatsApp
            </a>

          </div>

          {/* TRUST MICRO LINE (IMPORTANT UPGRADE) */}
          <p className="text-xs text-gray-400 mt-5">
            Response within 24 hours • Confidential consultation
          </p>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div className="relative mt-8 md:mt-0">

            <div className="absolute w-[280px] sm:w-[320px] h-[360px] sm:h-[420px] bg-blue-500/30 blur-3xl rounded-2xl -z-10" />

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-2xl">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="w-[240px] sm:w-[280px] md:w-[300px] h-[320px] sm:h-[360px] object-cover rounded-xl"
              />

              <p className="text-center text-xs sm:text-sm text-white/70 mt-4">
                Legal & Tax Advisory Firm
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL (UX FIXED) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
          onClick={() => setOpen(false)}
        >

          <div
            className="bg-white w-full max-w-md rounded-2xl p-6 text-black"
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-xl font-semibold mb-4">
              {lang === "en" ? "Book Consultation" : "Form Konsultasi"}
            </h2>

            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Name" />
            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Email" />
            <textarea className="w-full border p-3 rounded-lg mb-4" placeholder="Message" />

            <div className="flex gap-3">

              <button
                className="bg-black text-white px-4 py-2 rounded-lg w-full"
              >
                Submit
              </button>

              <button
                className="border px-4 py-2 rounded-lg w-full"
                onClick={() => setOpen(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}