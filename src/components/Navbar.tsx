import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Logo from "../assets/resolveIQ.jpeg";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
    },
    exit: {
      opacity: 0,
      y: -10,
      height: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, y: -6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

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
          {/* <a href="#about" className="hover:text-[#00AAFF] transition">
            About
          </a>
          <a href="#contact" className="hover:text-[#00AAFF] transition">
            Contact
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Framer Motion Animated) */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden overflow-hidden bg-[#040a0e] border-t border-gray-700"
          >
            {["Home", "Services", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-300 hover:bg-[#1D04C3] hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
