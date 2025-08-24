import { Calendar } from "lucide-react";

export default function MarketReports() {
  const reports = [
    {
      category: "Market Analysis",
      image:
        "https://images.pexels.com/photos/101808/pexels-photo-101808.jpeg?_gl=1*aieqdg*_ga*MzU5MTM4NDQ4LjE3NTU4NzE1MzE.*_ga_8JE65Q40S6*czE3NTYwNjE3MzMkbzYkZzEkdDE3NTYwNjE3NjMkajMwJGwwJGgw", // Replace with real image
      date: "December 15, 2023",
      title: "Luxury Market Outlook 2024",
      description:
        "Comprehensive analysis of luxury real estate trends and investment opportunities for the coming year.",
    },
    {
      category: "Investment Trends",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
      date: "December 10, 2023",
      title: "International Buyer Activity Surges",
      description:
        "Foreign investment in luxury US properties reaches new heights, driven by favorable exchange rates.",
    },
    {
      category: "Property Features",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=250&fit=crop",
      date: "December 5, 2023",
      title: "Sustainable Luxury: Green Features Premium",
      description:
        "Eco-friendly luxury properties command premium prices as sustainability becomes a key buyer priority.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Latest Market Intelligence
      </h2>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reports.map((report, idx) => (
          <div
            key={idx}
            className="group text-left rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={report.image}
                alt={report.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                {report.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <Calendar size={14} className="mr-1" /> {report.date}
              </div>
              <h3 className="text-lg font-semibold text-black group-hover:text-yellow-600 transition">
                {report.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{report.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-yellow-600 font-semibold text-sm hover:underline"
              >
                Read Full Analysis <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-10">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow transition">
          View All Market Reports
        </button>
      </div>
    </section>
  );
}