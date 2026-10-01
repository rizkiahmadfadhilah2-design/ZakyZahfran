import Navbar from "../components/layout/Navbar";
import ScrollReveal from "../components/ui/ScrollReveal";

const team = [
  {
    name: "Zaky Zhafran King Mada, S.H., M.H.",
    role: "Managing Partner",
    edu: "S1 Universitas Islam Indonesia, S2 Universitas Indonesia",
  },
  {
    name: "Dimas Nugraha Riyadi, S.H., M.H.",
    role: "Partner",
    edu: "S1 Universitas Islam Indonesia, S2 Universitas Indonesia",
  },
  {
    name: "Dini Inasyah Alfaridah, S.H., M.H.",
    role: "Partner",
    edu: "S1 UIN Sunan Gunung Djati, S2 UIN Sunan Gunung Djati",
  },
  {
    name: "Tsabbit Aqdamana, S.H., M.H.",
    role: "Partner",
    edu: "S1 Universitas Islam Indonesia, S2 Universitas Islam Indonesia",
  },
  {
    name: "Dina Aisyah Alfarijah, S.H., M.Kn.",
    role: "Partner",
    edu: "S1 Universitas Padjadjaran, S2 Universitas Yarsi",
  },
  {
    name: "Clarte Gagah, S.H.",
    role: "Partner",
    edu: "S1 Universitas Islam Indonesia",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900">

      <Navbar />

      {/* HERO */}
      <section className="py-28 bg-[#0B1220] text-white relative overflow-hidden">

        <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full top-[-120px] right-[-120px]" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>

            <ScrollReveal>
              <h1 className="text-5xl font-semibold leading-tight">
                About Our Firm
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-gray-300 mt-4 leading-relaxed max-w-xl">
                We provide strategic legal and tax advisory services to help businesses
                operate securely, comply with regulations, and grow sustainably in Indonesia.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <span className="px-3 py-1 bg-white/10 rounded-full">Legal Advisory</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Tax Compliance</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">Business Consulting</span>
              </div>
            </ScrollReveal>

          </div>

          {/* IMAGE */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute w-[320px] h-[320px] bg-blue-500/30 blur-3xl rounded-full -z-10" />

                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">

                  <img
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    className="w-[280px] h-[320px] object-cover rounded-xl"
                  />

                  <p className="text-center text-sm mt-3 text-white/70">
                    Zhafran Legal & Tax Consulting
                  </p>

                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* PROFILE */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <ScrollReveal>
              <h2 className="text-3xl font-semibold mb-6">
                Firm Profile
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-gray-600 leading-relaxed">
                Our firm specializes in corporate law, taxation, and regulatory advisory.
                We assist startups, SMEs, and corporations in maintaining compliance while
                optimizing business operations and minimizing legal risks.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 mt-4 leading-relaxed">
                We combine legal precision with business strategy to deliver solutions
                that are not only compliant but also practical and growth-oriented.
              </p>
            </ScrollReveal>

            {/* EXPERTISE */}
            <ScrollReveal delay={0.3}>
              <div className="mt-10">
                <h3 className="font-semibold mb-3">Core Expertise</h3>

                <div className="flex flex-wrap gap-2 text-sm">
                  {[
                    "Corporate Law",
                    "Tax Advisory",
                    "Contract Drafting",
                    "Business Licensing",
                    "Dispute Resolution",
                    "Regulatory Compliance"
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* RIGHT */}
          <div>

            <ScrollReveal>
              <h2 className="text-3xl font-semibold mb-6">
                Experience
              </h2>
            </ScrollReveal>

            <div className="space-y-6">

              {[
                {
                  year: "2022 - Present",
                  title: "Legal & Tax Consulting Practice",
                  place: "Corporate & Business Clients"
                },
                {
                  year: "2023",
                  title: "Business & Technology Development",
                  place: "Digital Transformation Projects"
                },
                {
                  year: "2025",
                  title: "Project & Field Coordination",
                  place: "Infrastructure & Industrial Sector"
                }
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative pl-6 border-l border-gray-200">

                    <div className="absolute w-2 h-2 bg-black rounded-full left-[-5px] top-2" />

                    <p className="text-sm text-gray-500">{item.year}</p>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.place}</p>

                  </div>
                </ScrollReveal>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center mb-16">
              Our Partners
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((person, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>

                <div className="bg-white p-6 rounded-2xl border hover:shadow-2xl hover:-translate-y-1 transition">

                  {/* FOTO */}
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4" />

                  <h3 className="font-semibold text-lg">
                    {person.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {person.role}
                  </p>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {person.edu}
                  </p>

                </div>

              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}