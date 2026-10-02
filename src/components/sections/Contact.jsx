import { useState } from "react";

export default function Contact({ lang }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const phone = "6282242887887";
  const email = "kingmada@zakyzhafran.com";

  const sendWA = () => {
    const text = `
Nama: ${form.name}
Email: ${form.email}
Pesan: ${form.message}
    `;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
    );
  };

  const sendEmail = () => {
    const subject =
      lang === "en"
        ? "Legal Consultation Request"
        : "Permintaan Konsultasi Hukum";

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT INFO */}
        <div>
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            {lang === "en" ? "Legal Consultation" : "Konsultasi Hukum"}
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-3 text-gray-900">
            {lang === "en"
              ? "Speak With Our Legal Experts"
              : "Konsultasikan Dengan Ahli Hukum Kami"}
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            {lang === "en"
              ? "We help businesses resolve legal, tax, and compliance challenges."
              : "Kami membantu menyelesaikan masalah hukum, pajak, dan kepatuhan bisnis."}
          </p>

          {/* TRUST */}
          <div className="mt-8 space-y-3 text-sm text-gray-600">
            <p>✔ Confidential consultation</p>
            <p>✔ Corporate & personal legal support</p>
            <p>✔ Fast response for urgent matters</p>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-2 text-sm text-gray-500">
            <p>📍 Villa Bekasi Indah 1 No.2 Blok G1, RT.005/RW.012, Mangunjaya, Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510. Indonesia Legal Office</p>
            <p>📞 +62 822-4288-7887</p>
            <p>✉️ kingmada@zakyzhafran.com</p>
          </div>
        </div>

        {/* FORM */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">

          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            {lang === "en"
              ? "Request Consultation"
              : "Permintaan Konsultasi"}
          </h3>

          <div className="space-y-4">

            <input
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
              placeholder={lang === "en" ? "Full Name" : "Nama Lengkap"}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              className="w-full p-4 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition"
              placeholder="Email"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              className="w-full p-4 border border-gray-200 rounded-xl h-32 outline-none focus:ring-2 focus:ring-black/10 focus:border-black transition resize-none"
              placeholder={
                lang === "en"
                  ? "Describe your case"
                  : "Jelaskan kebutuhan Anda"
              }
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            {/* PRIMARY WA */}
            <button
              onClick={sendWA}
              className="w-full bg-black text-white py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition font-medium"
            >
              {lang === "en"
                ? "Send via WhatsApp"
                : "Kirim via WhatsApp"}
            </button>

          </div>

          {/* SECONDARY ACTIONS (FIXED) */}
          <div className="grid grid-cols-2 gap-3 mt-5">

            <button
              onClick={sendWA}
              className="border border-gray-200 py-3 rounded-xl text-sm hover:bg-black hover:text-white transition"
            >
              WhatsApp
            </button>

            <button
              onClick={sendEmail}
              className="border border-gray-200 py-3 rounded-xl text-sm hover:bg-black hover:text-white transition"
            >
              Email
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}