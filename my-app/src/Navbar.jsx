import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded-md"></div>
          <span className="text-xl font-bold text-gray-900">
            Divine Properties
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-black">Properties</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Contact</a>
        </div>

        {/* Right Side: Contact and Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="w-4 h-4 text-yellow-500" />
            <span>(91) 99999-88888</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Mail className="w-4 h-4 text-yellow-500" />
            <span>info@divineproperties.com</span>
          </div>
          <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
            Schedule Viewing
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-gray-50 border-t">
          <a href="#" className="block text-gray-700 hover:text-black">Properties</a>
          <a href="#" className="block text-gray-700 hover:text-black">Services</a>
          <a href="#" className="block text-gray-700 hover:text-black">About</a>
          <a href="#" className="block text-gray-700 hover:text-black">Contact</a>
          <div className="flex items-center space-x-2 text-gray-700">
            <Phone className="w-4 h-4 text-yellow-500" />
            <span>(91) 99999-88888</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Mail className="w-4 h-4 text-yellow-500" />
            <span>info@divineproperties.com</span>
          </div>
          <button className="w-full bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow hover:bg-yellow-500 transition">
            Schedule Viewing
          </button>
        </div>
      )}
    </nav>
  );
}
