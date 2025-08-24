import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E2530] text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-[2fr_1fr_1fr] gap-4">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-yellow-400 w-6 h-6 rounded-sm"></div>
            <h2 className="text-lg font-bold text-white">Divine Properties</h2>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            Your premier destination for luxury real estate. We specialize in
            connecting discerning clients with the most exceptional properties
            available.
          </p>
          <div className="flex space-x-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-2 rounded bg-gray-700 hover:bg-yellow-400 hover:text-black transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="pl-4"> {/* Slight shift to the right */}
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Properties", "Services", "About Us", "Contact", "Careers"].map(
              (link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-yellow-400 transition">
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Property Types */}
        <div className="pl-2"> {/* Very small gap now */}
          <h3 className="text-white font-semibold mb-4">Property Types</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Luxury Mansions",
              "Penthouses",
              "Waterfront Villas",
              "Private Estates",
              "Investment Properties",
            ].map((type, index) => (
              <li key={index}>
                <a href="#" className="hover:text-yellow-400 transition">
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between text-xs text-gray-400 space-y-3 md:space-y-0">
        <p>© 2025 Divine Properties. All rights reserved.</p>
        <div className="flex space-x-4">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (policy, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-yellow-400 transition"
              >
                {policy}
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
