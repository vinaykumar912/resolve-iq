import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Process", id: "process" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold tracking-tight"
        >
          Resolve<span className="text-sky-500">IQ</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="text-[15px] font-medium text-gray-600 hover:text-black transition"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="text-[14px] font-semibold bg-gradient-to-r from-blue-500 to-teal-400 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          Book a Consultation
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
