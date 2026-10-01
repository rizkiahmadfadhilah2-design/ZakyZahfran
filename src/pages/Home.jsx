import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TrustStrip from "../components/sections/TrustStrip";
import About from "../components/sections/About";
import Services from "../components/sections/Services"

export default function Home() {
  const [lang, setLang] = useState("en");

  return (
    <div>

      {/* LANGUAGE SWITCH */}
      <div className="fixed top-20 right-6 z-50 flex gap-2">
        <button
          onClick={() => setLang("en")}
          className={`px-3 py-1 rounded text-sm ${lang === "en" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          EN
        </button>

        <button
          onClick={() => setLang("id")}
          className={`px-3 py-1 rounded text-sm ${lang === "id" ? "bg-black text-white" : "bg-gray-200"}`}
        >
          ID
        </button>
      </div>

      <Navbar />

      <Hero lang={lang} />
      <TrustStrip lang={lang} />
      <About lang={lang} />
      <Services lang={lang} />
      {/* dst */}

    </div>
  );
}