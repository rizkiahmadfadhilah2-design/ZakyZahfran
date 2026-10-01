import { useState } from "react";

export default function Hero({ lang }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen flex items-center bg-[#0B1220] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] right-[-120px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-500/10 blur-3xl rounded-full bottom-[-120px] left-[-120px]" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>

          <div className="mb-4 inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
            {lang === "en"
              ? "Trusted Legal & Tax Consultant"
              : "Konsultan Hukum & Pajak Terpercaya"}
          </div>

          <h1 className="text-5xl font-semibold leading-tight">
            {lang === "en"
              ? "Strategic Legal & Tax Solutions for Business Growth"
              : "Solusi Hukum & Pajak Strategis untuk Pertumbuhan Bisnis"}
          </h1>

          <p className="text-gray-300 mt-6 max-w-md leading-relaxed">
            {lang === "en"
              ? "We help businesses stay compliant, reduce tax risks, and build strong legal structures for sustainable growth."
              : "Kami membantu bisnis tetap patuh regulasi, mengurangi risiko pajak, dan membangun struktur hukum yang kuat untuk pertumbuhan berkelanjutan."}
          </p>

          {/* STATS */}
          <div className="flex gap-6 mt-8 text-sm text-gray-300">

            <div>
              <p className="text-white text-lg font-semibold">50+</p>
              <p>Clients</p>
            </div>

            <div>
              <p className="text-white text-lg font-semibold">100%</p>
              <p>Compliance Focus</p>
            </div>

            <div>
              <p className="text-white text-lg font-semibold">5yr+</p>
              <p>Experience</p>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4">

            <button
              onClick={() => setOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition"
            >
              {lang === "en" ? "Book Consultation" : "Konsultasi"}
            </button>

            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20tentang%20legal%20dan%20pajak"
              target="_blank"
              className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute w-[320px] h-[420px] bg-blue-500/30 blur-3xl rounded-2xl -z-10" />

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="w-[280px] h-[360px] object-cover rounded-xl"
              />

              <div className="mt-4 text-center">
                <p className="text-sm text-white/70">
                  {lang === "en"
                    ? "Legal & Tax Advisory Firm"
                    : "Firma Konsultan Hukum & Pajak"}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

          <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 text-black">

            <h2 className="text-xl font-semibold mb-4">
              {lang === "en" ? "Book Consultation" : "Form Konsultasi"}
            </h2>

            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Name" />
            <input className="w-full border p-3 rounded-lg mb-3" placeholder="Email" />
            <textarea className="w-full border p-3 rounded-lg mb-4" placeholder="Message" />

            <div className="flex gap-3">

              <button
                className="bg-black text-white px-4 py-2 rounded-lg w-full"
                onClick={() => {
                  alert("Submitted");
                  setOpen(false);
                }}
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