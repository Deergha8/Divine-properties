export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154356-596af9009a47?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-20 text-center">
        {/* Tagline */}
        <div className="inline-block bg-yellow-500/90 text-black text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-wide">
          SINCE 1990 • LUXURY REAL ESTATE EXCELLENCE
        </div>

        {/* Heading */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
          Discover Your{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Perfect
          </span>{" "}
          <br /> Sanctuary
        </h1>

        {/* Subtext */}
        <p className="mt-4 max-w-xl mx-auto text-gray-300 text-lg">
          Where exceptional properties meet discerning taste.
        </p>
        <p className="mt-2 max-w-2xl mx-auto text-gray-400 text-sm">
          Curating the world's most extraordinary luxury real estate for those
          who demand nothing less than perfection.
        </p>

        {/* Search Box */}
        <div className="mt-8 bg-black/40 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4 text-left">
            Find Your Dream Property
          </h2>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Delhi, Bengaluru, Kolkata..."
              className="col-span-2 px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none"
            />
            <select className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none">
              <option>Select Type</option>
              <option>Villa</option>
              <option>Apartment</option>
              <option>Penthouse</option>
            </select>
            <input
              type="text"
              placeholder="Budget"
              className="px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col md:flex-row gap-4">
            <button className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold px-6 py-3 rounded-lg transition">
              Search Luxury Properties
            </button>
            <button className="flex-1 border border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-6 py-3 rounded-lg transition">
              Explore Excellence
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
