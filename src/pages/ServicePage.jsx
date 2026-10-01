import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";

const services = [
  {
    title: "Tax Compliance Audit & Reporting",
    problem: "Banyak perusahaan tidak sadar terjadi kesalahan pelaporan pajak yang berisiko denda dan pemeriksaan.",
    solution: "Kami melakukan audit pajak internal, pengecekan kewajiban, dan koreksi laporan sesuai regulasi DJP.",
    result: "Perusahaan menjadi 100% compliant dan terhindar dari risiko sanksi pajak."
  },
  {
    title: "Tax Planning & Optimization Strategy",
    problem: "Beban pajak perusahaan sering tidak efisien karena tidak ada strategi perencanaan.",
    solution: "Kami menyusun strategi pajak legal berdasarkan struktur bisnis dan cashflow perusahaan.",
    result: "Efisiensi pajak optimal tanpa melanggar hukum."
  },
  {
    title: "Business Legal Structuring",
    problem: "Struktur bisnis yang tidak jelas menyebabkan risiko hukum saat scaling atau investasi.",
    solution: "Kami merancang struktur legal perusahaan (PT, holding, partnership) sesuai tujuan bisnis.",
    result: "Bisnis siap ekspansi dan investor-ready."
  },
  {
    title: "Contract Drafting & Risk Review",
    problem: "Banyak kerugian bisnis terjadi karena kontrak tidak melindungi posisi perusahaan.",
    solution: "Kami menyusun dan mereview kontrak agar semua risiko hukum ter-cover.",
    result: "Kontrak aman, jelas, dan menghindari sengketa."
  },
  {
    title: "Business Licensing & Compliance",
    problem: "Proses perizinan usaha sering rumit dan tidak sesuai regulasi terbaru.",
    solution: "Kami membantu pengurusan NIB, OSS, dan izin operasional lainnya.",
    result: "Bisnis legal dan siap beroperasi tanpa hambatan."
  },
  {
    title: "Dispute Resolution & Legal Assistance",
    problem: "Sengketa bisnis bisa mengganggu operasional dan merugikan finansial.",
    solution: "Kami menangani negosiasi, mediasi, hingga pendampingan hukum.",
    result: "Sengketa selesai tanpa merusak bisnis."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-900">

      <Navbar />

      {/* HEADER */}
      <section className="py-28 bg-[#0B1220] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <ScrollReveal>
            <h1 className="text-5xl font-semibold">
              How We Help Your Business
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              We don't just provide services — we solve real business, tax, and legal problems
              with structured consulting and compliance strategy.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          {services.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className="bg-white border rounded-2xl p-6 hover:shadow-xl transition">

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>

                {/* PROBLEM */}
                <p className="text-sm text-red-500 mb-2">
                  ❗ Problem: {item.problem}
                </p>

                {/* SOLUTION */}
                <p className="text-sm text-gray-600 mb-2">
                  🧠 Solution: {item.solution}
                </p>

                {/* RESULT */}
                <p className="text-sm text-green-600">
                  ✅ Result: {item.result}
                </p>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </section>
    </div>
  );
}