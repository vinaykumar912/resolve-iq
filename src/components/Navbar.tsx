import { useState } from "react";
import Logo from "../assets/resolveIQ.jpeg";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0b3d4f] shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="h-9 rounded" />
          <span className="font-bold text-white text-xl">RESOLVE IQ</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#home" className="hover:text-[#00AAFF] transition">
            Home
          </a>
          <a href="#services" className="hover:text-[#00AAFF] transition">
            Services
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white transition-transform duration-200"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[#040a0e] border-t border-gray-700`}
      >
        <a
          href="#home"
          className="block px-4 py-3 text-gray-300 hover:bg-[#1D04C3] hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          Home
        </a>
        <a
          href="#services"
          className="block px-4 py-3 text-gray-300 hover:bg-[#1D04C3] hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          Services
        </a>
        <a
          href="#about"
          className="block px-4 py-3 text-gray-300 hover:bg-[#1D04C3] hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          About
        </a>
        <a
          href="#contact"
          className="block px-4 py-3 text-gray-300 hover:bg-[#1D04C3] hover:text-white transition"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};
