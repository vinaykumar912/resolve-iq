import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Resolve<span className="text-sky-500">IQ</span>
            </h2>

            <p className="text-gray-500 leading-relaxed">
              We help mid-sized enterprises modernize data infrastructure in 90
              days with measurable ROI.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>

            <ul className="space-y-3 text-gray-500">
              <li>Data Engineering</li>
              <li>Cloud Strategy & Migration</li>
              <li>QA & Automation</li>
              <li>Enterprise Applications</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>

            <ul className="space-y-3 text-gray-500">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>

            <ul className="space-y-3 text-gray-500">
              <li>contact@resolveiq.com</li>

              <li className="flex items-center gap-2">
                <Linkedin size={18} />
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm">
          © 2026 Resolve IQ. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
