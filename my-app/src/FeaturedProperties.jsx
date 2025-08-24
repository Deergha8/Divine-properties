import { motion } from "framer-motion";
import { Heart, MapPin, Bed, Bath } from "lucide-react";

const properties = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVudGhvdXNlfGVufDB8fDB8fHww",
    tags: ["Exclusive Listing", "Featured"],
    location: "Bandra Upper East Side, Mumbai",
    title: "Mumbai Penthouse with Panoramic Views",
    beds: 4,
    baths: 5,
    area: "4,800 sqft",
    price: "₹18,00,00,000",
    amenities: ["Sky Lounge", "Private Elevator", "City View"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGElMjB3aXRoJTIwcG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    tags: ["New Listing", "Featured"],
    location: "Joka, Kolkata",
    title: "Waterfront Villa with Infinity Pool",
    beds: 6,
    baths: 8,
    area: "9,200 sqft",
    price: "₹2,29,00,000",
    amenities: ["Infinity Pool", "Private Dock", "Cinema Room"],
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1687960116689-38c34910d26f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Price Reduced"],
    location: "Lutyens ,New Delhi",
    title: "Historic Estate with Modern Luxury",
    beds: 7,
    baths: 9,
    area: "12,000 sqft",
    price: "₹1,85,00,000",
    amenities: ["Home Theater", "Tennis Court", "Staff Quarters"],
  },
];

export default function FeaturedProperties() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-snug">
          Explore Our <span className="text-yellow-500">Exclusive</span> Luxury Homes
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
          Handpicked premium listings offering unmatched luxury, architecture, and comfort.
          Find your dream property today with world-class features and exceptional value.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
          >
            {/* Image with hover effects */}
            <div className="relative overflow-hidden">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover transform transition duration-500 group-hover:scale-110"
              />

              {/* Tags */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {property.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-semibold rounded ${
                      tag === "Exclusive Listing"
                        ? "bg-yellow-500 text-black"
                        : tag === "New Listing"
                        ? "bg-green-500 text-white"
                        : "bg-black text-white"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Heart Icon */}
              <button className="absolute top-3 right-3 bg-white/70 p-2 rounded-full hover:bg-white shadow">
                <Heart className="w-4 h-4 text-gray-700" />
              </button>

              {/* Amenities Overlay (on hover) */}
              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-black/70 text-white text-sm p-3 flex flex-wrap gap-2 justify-center">
                  {property.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className="bg-white/20 px-2 py-1 rounded-full text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-5">
              <p className="flex items-center text-sm text-gray-500 mb-2">
                <MapPin className="w-4 h-4 mr-1 text-yellow-500" />
                {property.location}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {property.title}
              </h3>

              {/* Specs */}
              <div className="flex items-center text-gray-600 text-sm mb-4 space-x-4">
                <span className="flex items-center space-x-1">
                  <Bed className="w-4 h-4 text-yellow-500" /> <span>{property.beds}</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Bath className="w-4 h-4 text-yellow-500" /> <span>{property.baths}</span>
                </span>
                <span>{property.area}</span>
              </div>

              {/* Price & Button */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">{property.price}</span>
                <button className="bg-gray-900 hover:bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow transition">
          Explore Full Portfolio
        </button>
      </div>
    </section>
  );
}