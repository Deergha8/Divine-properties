import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div>
          <button className="px-4 py-1 border border-yellow-400 bg-yellow-100 rounded-full text-yellow-700 text-sm font-medium mb-4">
            ABOUT DIVINE PROPERTIES
          </button>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Defining Luxury <span className="text-yellow-500">Real Estate</span>
            <br /> Since 1990
          </h2>
          <p className="text-gray-700 mt-6 leading-relaxed">
            For over three decades, Divine Properties has been the premier
            destination for discerning clients seeking the world's most
            exceptional luxury real estate. Our legacy is built on unparalleled
            expertise, exclusive access, and an unwavering commitment to
            excellence.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            From Mumbai penthouses to Northern estates, from Bengaluru
            to Kolkata towers, we curate the finest properties and
            deliver white-glove service that transforms dreams into reality.
          </p>
          <div className="flex gap-4 mt-6">
            <button className="bg-black text-white px-5 py-2 rounded-lg shadow hover:bg-gray-800 transition">
              Our Heritage
            </button>
            <button className="border border-black text-black px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="rounded-3xl shadow-lg overflow-hidden max-w-md">
            <img
              src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&q=80"
              alt="Teamwork"
              className="w-full h-auto"
            />
          </div>
          {/* Yellow Badge */}
          <div className="absolute bottom-4 right-4 bg-yellow-400 text-black rounded-xl px-4 py-2 shadow-md">
            <p className="text-2xl font-bold leading-none">15+</p>
            <p className="text-sm font-medium">Years Excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
