import React from "react";
import { Shield, Award, Heart, Globe } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-10 h-10 text-yellow-500" />,
    title: "Trust & Integrity",
    description:
      "Built on unwavering ethical standards and transparent business practices that have earned client trust for over three decades.",
  },
  {
    icon: <Award className="w-10 h-10 text-yellow-500" />,
    title: "Excellence",
    description:
      "Commitment to delivering exceptional service and results that exceed expectations in every transaction.",
  },
  {
    icon: <Heart className="w-10 h-10 text-yellow-500" />,
    title: "Client-Centric",
    description:
      "Your dreams and aspirations are at the heart of everything we do, with personalized service tailored to your unique needs.",
  },
  {
    icon: <Globe className="w-10 h-10 text-yellow-500" />,
    title: "Global Reach",
    description:
      "Extensive international network providing access to exclusive properties and sophisticated global clientele.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Core Values</h2>
        <p className="text-gray-600 mb-10">
          The principles that guide every interaction, transaction, and relationship we build.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
