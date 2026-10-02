import { useState } from "react";
import logo from "../../assets/logozp.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-[999] bg-black/40 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
          />
          <h1 className="text-white text-[11px] sm:text-sm tracking-widest font-semibold leading-tight">
            ZAKY ZHAFRAN <br className="sm:hidden" /> & PARTNERS
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-white/70 text-sm">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition hover:text-white ${
                isActive(item.path) ? "text-white" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA DESKTOP */}
        <a
          href="https://wa.me/6281234567890"
          className="hidden md:inline-block bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 active:scale-95 transition"
        >
          Consultation
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10 px-6 py-5 space-y-4">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`block text-sm transition ${
                isActive(item.path)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}

          <a
            href="https://wa.me/6281234567890"
            className="block text-center mt-4 bg-white text-black py-3 rounded-xl font-medium"
          >
            Consultation
          </a>

        </div>
      )}

    </nav>
  );
}