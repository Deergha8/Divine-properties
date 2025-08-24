import React from "react";
import { TrendingUp, Home, Users, Award } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
    value: "₹25.8B+",
    label: "Properties Sold",
    subtext: "Total transaction value",
  },
  {
    icon: <Home className="w-8 h-8 text-yellow-500" />,
    value: "1,247",
    label: "Luxury Properties",
    subtext: "Successfully closed",
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-500" />,
    value: "98%",
    label: "Client Satisfaction",
    subtext: "Exceptional service rating",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-500" />,
    value: "156",
    label: "Industry Awards",
    subtext: "Recognition & accolades",
  },
];

export default function ExcellenceInNumbers() {
  return (
    <section className="bg-[#0F172A] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Excellence in Numbers
        </h2>
        <p className="text-gray-300 mb-12">
          Our track record speaks to decades of success, trust, and unparalleled expertise
          in luxury real estate.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-yellow-500 font-semibold">{stat.label}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.subtext}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="bg-[#1E293B] rounded-2xl p-6 max-w-4xl mx-auto shadow-md">
          <p className="italic text-xl md:text-2xl font-semibold mb-3">
            "Setting the Standard for Luxury Real Estate Excellence"
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            Our commitment to excellence has made us the most trusted name in luxury real estate.
            From exclusive listings to personalized service, we deliver results that exceed expectations.
          </p>
          <div className="flex justify-center items-center gap-1 text-yellow-500">
            {"★★★★★".split("").map((star, i) => (
              <span key={i} className="text-xl">★</span>
            ))}
            <span className="text-white text-sm ml-2">
              Rated 5.0 by our clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
