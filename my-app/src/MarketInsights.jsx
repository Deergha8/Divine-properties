export default function MarketInsights() {
  const data = [
    {
      city: "Kolkata",
      price: "₹87,50,000",
      sales: "147 sales",
      trend: "+12.5%",
      trendColor: "bg-green-100 text-green-700",
      trendIcon: "📈",
    },
    {
      city: "Mumbai",
      price: "₹1,85,00,000",
      sales: "892 sales",
      trend: "+8.3%",
      trendColor: "bg-green-100 text-green-700",
      trendIcon: "📈",
    },
    {
      city: "Delhi",
      price: "₹1,10,00,000",
      sales: "86 sales",
      trend: "-2.1%",
      trendColor: "bg-red-100 text-red-700",
      trendIcon: "📉",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Tag */}
      <span className="bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
        Market Intelligence
      </span>

      {/* Title */}
      <h2 className="mt-4 text-4xl font-bold">
        <span className="text-black">Market Insights &</span>{" "}
        <span className="text-yellow-500">Investment Intelligence</span>
      </h2>

      {/* Subtitle */}
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Stay ahead with our comprehensive market analysis, exclusive data insights,
        and expert commentary on luxury real estate trends.
      </p>

      {/* Subheading */}
      <h3 className="mt-12 text-2xl font-semibold text-black">
        Current Market Performance
      </h3>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-lg font-semibold">{item.city}</h4>
              <span
                className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full ${item.trendColor}`}
              >
                {item.trendIcon} {item.trend}
              </span>
            </div>
            <div className="text-gray-700 text-sm">Average Price</div>
            <div className="text-xl font-bold mt-1">{item.price}</div>
            <div className="mt-2 text-gray-700 text-sm">Sales Volume</div>
            <div className="font-semibold">{item.sales}</div>
            <div className="mt-4 text-xs text-gray-500">Last 12 months</div>
          </div>
        ))}
      </div>
    </section>
  );
}
