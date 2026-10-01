import logo from "../../assets/logozp.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[999] pointer-events-auto bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-8 h-8 rounded-full object-cover" />
          <h1 className="text-white text-sm tracking-widest font-semibold">
            ZAKY ZHAFRAN & PARTNERS
          </h1>
        </div>

        {/* MENU */}
        <div className="hidden md:flex gap-8 text-white/80 text-sm">

          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <Link to="/about" className="hover:text-white transition">
            About
          </Link>

          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>

        </div>

        {/* CTA */}
        <a
          href="https://wa.me/6281234567890"
          className="bg-white text-black px-5 py-2 rounded-full text-sm hover:scale-105 transition"
        >
          Consultation
        </a>

      </div>
    </nav>
  );
}