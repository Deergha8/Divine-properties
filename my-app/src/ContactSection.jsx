import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <p className="text-gray-300 mt-2 max-w-xl mx-auto">
          Ready to find your dream property? Contact our luxury real estate
          experts for personalized service and exclusive property access.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Tell us about your property requirements..."
              rows="4"
              className="w-full p-2 rounded bg-[#0F172A] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#D08700] text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="text-yellow-400" size={20} />
                <span>
                  (91) 99999 88888
                  <br />
                  <span className="text-sm">Available 24/7 for urgent inquiries</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-yellow-400" size={20} />
                <span>
                  info@divineproperties.com
                  <br />
                  <span className="text-sm">We respond within minutes</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-400" size={20} />
                <span>
                  IIE, Newtown, PS Abacus
                  <br />
                  West Bengal India, 700161
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-yellow-400" size={20} />
                <span>
                  Monday – Friday: 9:00 AM – 8:00 PM
                  <br />
                  Saturday – Sunday: 10:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Private Showing Box */}
          <div className="bg-[#1E293B] p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2">
              Schedule a Private Showing
            </h4>
            <p className="text-gray-300 text-sm mb-3">
              Experience our luxury properties with a personalized, private
              viewing.
            </p>
            <button className="bg-[#D08700] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
