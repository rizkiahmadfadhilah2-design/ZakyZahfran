import ScrollReveal from "../ui/ScrollReveal";

const plans = [
  {
    name: "Starter",
    price: "Rp 2.500.000",
    features: [
      "Legal Consultation",
      "Basic Contract Review",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "Rp 5.000.000",
    features: [
      "Full Legal Advisory",
      "Contract Drafting",
      "Priority Support",
    ],
    popular: true, // ⭐ FEATURED
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Dedicated Legal Team",
      "Unlimited Consultation",
      "On-site Support",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* TITLE */}
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Pricing Plans
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-gray-500 mt-3 mb-14">
            Transparent pricing for every business scale
          </p>
        </ScrollReveal>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 text-left">

          {plans.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>

              <div className={`relative p-6 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-xl
                ${plan.popular ? "border-black shadow-lg scale-105" : "border-gray-200 bg-white"}
              `}>

                {/* POPULAR BADGE */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[11px] px-3 py-1 rounded-full bg-black text-white">
                    Most Popular
                  </span>
                )}

                {/* PLAN NAME */}
                <h3 className="text-xl font-semibold">
                  {plan.name}
                </h3>

                {/* PRICE */}
                <p className="text-3xl font-bold mt-3">
                  {plan.price}
                </p>

                {/* FEATURES */}
                <ul className="mt-5 space-y-2 text-sm text-gray-600">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button className={`mt-6 w-full py-3 rounded-xl transition font-medium
                  ${plan.popular
                    ? "bg-black text-white hover:scale-105"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                  }
                `}>
                  Choose Plan
                </button>

              </div>

            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}