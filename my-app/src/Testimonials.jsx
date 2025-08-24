export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: `Divine Properties transformed my property search from overwhelming to extraordinary. Their attention to detail and market knowledge is unmatched. They found me the perfect penthouse that I didn't even know existed.`,
      highlight: "Central Park Penthouse - $15.2M",
      name: "Catherine Montgomery",
      role: "Investment Banker",
      location: "Manhattan, NY",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      stars: 5,
      text: `The team's global network and expertise helped me acquire multiple investment properties across three countries. Their strategic insights and seamless process management exceeded all expectations.`,
      highlight: "Luxury Estate Portfolio - $42M",
      name: "Robert Chen",
      role: "Tech Entrepreneur",
      location: "Beverly Hills, CA",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      stars: 5,
      text: `From our first meeting to closing day, every interaction was marked by professionalism and genuine care. They understood my vision and delivered a waterfront masterpiece that perfectly suits my lifestyle.`,
      highlight: "Waterfront Villa - $8.7M",
      name: "Isabella Rodriguez",
      role: "Art Collector",
      location: "Miami, FL",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
          Client Testimonials
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-4">
          What Our Clients <span className="text-yellow-500">Say</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover why discerning clients trust us with their most important real estate decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-lg transition"
          >
            {/* Stars */}
            <div className="flex space-x-1 mb-3">
              {[...Array(item.stars)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.168L12 18.896l-7.334 3.862 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                </svg>
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              "{item.text}"
            </p>

            {/* Highlight badge */}
            <div className="bg-yellow-100 text-gray-800 text-xs font-semibold px-3 py-2 rounded-md mb-4">
              {item.highlight}
            </div>

            {/* Client details */}
            <div className="flex items-center space-x-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-600">{item.role}</p>
                <p className="text-xs text-yellow-500 font-medium">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}