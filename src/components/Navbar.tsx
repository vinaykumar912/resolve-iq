const Navbar = () => {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Process", id: "process" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          Resolve<span className="text-sky-500">IQ</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[15px] font-medium text-gray-600 hover:text-black transition duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <button className="text-[14px] font-semibold bg-linear-to-r from-blue-500 to-teal-400 text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition">
          Book a Consultation
        </button>
      </div>
    </header>
  );
};

export default Navbar;
