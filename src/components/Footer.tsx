import Logo from "../assets/resolveIQ.jpeg";

export const Footer = () => {
  return (
    <footer className="bg-[#0b3d4f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <img src={Logo} alt="logo" className="h-9 mb-3" />
          <p className="text-sm text-gray-200">
            Building reliable data platforms, cloud solutions, and enterprise
            applications.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            {/* <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-gray-200">Info@resolveiq.in</p>
          {/* <p className="text-sm text-gray-200">+91 98765 43210</p> */}
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10">
        © {new Date().getFullYear()} Resolve IQ. All rights reserved.
      </div>
    </footer>
  );
};
