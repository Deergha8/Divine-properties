import React from "react";
import { Award, Star } from "lucide-react";

const specialists = [
  {
    name: "Mr.Kumar",
    role: "Founding Partner & CEO",
    expertise: "Luxury Estates & Investment Properties",
    years: "25+ Years",
    sales: "₹1.2B+",
    badge: "Global Luxury Real Estate Award Winner",
    description:
      "Kumar founded Divine Properties with a vision to redefine luxury real estate. Her expertise in high-end markets and strategic investments has made her one of the most sought-after agents globally.",
    image: "https://images.unsplash.com/photo-1742981365880-698cfb84492d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGluZGlhbiUyMGJ1c2luZXNzbWFufGVufDB8fDB8fHww", // replace with actual image
    contact: "Kumar",
  },
  {
    name: "Mr.Das",
    role: "Senior Partner",
    expertise: "International Properties & Commercial",
    years: "20+ Years",
    sales: "₹950M+",
    badge: "International Luxury Property Expert",
    description:
      "Das brings extensive international expertise, having closed landmark deals across five continents. His network spans from London to Tokyo, ensuring global reach for each of his clients.",
    image: "https://media.istockphoto.com/id/861483462/photo/cheerful-professional-business-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=7WALJhoe-X6GN8sm49eDmGLqMlSg1pWYiwlOmy-ZPLo=", // replace with actual image
    contact: "Das",
  },
  {
    name: "Ms.Chatterjee",
    role: "Director of Luxury Sales",
    expertise: "Penthouses & Waterfront Properties",
    years: "15+ Years",
    sales: "₹680M+",
    badge: "Top 1% Global Luxury Agent",
    description:
      "Chatterjee's eye for architectural excellence and deep market knowledge has earned her recognition as a premier luxury specialist. He excels at matching clients with their perfect property.",
    image: "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=JepBOGOGiPwRF2z0pwiADeUZhsk6eFt4eKliWjzDGHo=", // replace with actual image
    contact: "Chatterjee",
  },
];

export default function LuxurySpecialists() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Meet Our{" "}
          <span className="text-yellow-500">Luxury Specialists</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our distinguished team of experts brings decades of combined experience
          in luxury real estate, ensuring unparalleled service and results for
          our discerning clientele.
        </p>

        {/* Specialists Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialists.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-bold">{person.name}</h3>
                <p className="text-sm text-yellow-600 font-semibold">{person.role}</p>
                <p className="text-sm text-gray-600 mb-4">{person.expertise}</p>

                {/* Stats */}
                <div className="flex justify-between mb-3">
                  <div className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-lg">
                    {person.years} Experience
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-lg">
                    {person.sales} Total Sales
                  </div>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-2 rounded-lg mb-3">
                  <Award size={16} />
                  <span>{person.badge}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{person.description}</p>

                {/* Contact Button */}
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Contact {person.contact}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
