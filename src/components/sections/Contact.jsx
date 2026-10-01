import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const sendWA = () => {
    const phone = "6281234567890";

    const text = `
Nama: ${form.name}
Email: ${form.email}
Pesan: ${form.message}
    `;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4 text-gray-900">
          Konsultasi Sekarang
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Diskusikan kebutuhan legal bisnis Anda dengan kami secara langsung.
        </p>

        {/* FORM */}
        <div className="space-y-5">

          <input
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
            placeholder="Nama"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            className="w-full p-4 border border-gray-200 rounded-xl h-32 outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition resize-none"
            placeholder="Pesan"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          {/* BUTTON */}
          <button
            onClick={sendWA}
            className="w-full bg-black text-white py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition font-medium"
          >
            Kirim via WhatsApp
          </button>

        </div>

        {/* TRUST TEXT */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Respons biasanya dalam 1x24 jam
        </p>

      </div>
    </section>
  );
}