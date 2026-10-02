export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="font-semibold text-lg tracking-wide">
            Zaky Zhafran & Partners
          </h2>

          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
            Legal Advisory & Business Consulting focused on helping modern businesses
            grow with structured and reliable legal solutions.
          </p>
        </div>

        {/* CONTACT */}
        <div className="text-sm text-gray-400 space-y-2">
          <p className="text-white font-medium mb-3">Contact</p>
          <p>Villa Bekasi Indah 1 No.2 Blok G1, RT.005/RW.012, Mangunjaya, Kec. Tambun Selatan, Kabupaten Bekasi, Jawa Barat 17510, Bekasi, Indonesia</p>
          <p>kingmada@zakyzhafran.com</p>
          <p>+62 822-4288-7887</p>
        </div>

        {/* QUICK LINKS */}
        <div className="text-sm text-gray-400 space-y-2">
          <p className="text-white font-medium mb-3">Navigation</p>
          <a href="#about" className="block hover:text-white transition">About</a>
          <a href="#services" className="block hover:text-white transition">Services</a>
          <a href="#contact" className="block hover:text-white transition">Contact</a>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">

        <p>© {new Date().getFullYear()} Zaky Zhafran & Partners</p>

        <p className="mt-2 md:mt-0">
          Built with precision & modern design
        </p>

      </div>

    </footer>
  );
}