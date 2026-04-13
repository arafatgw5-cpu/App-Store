import React from 'react';

export default function StatsSection() {
  const statsData = [
    {
      title: "Total Downloads",
      value: "29.6M",
      subtitle: "21% More Than Last Month"
    },
    {
      title: "Total Reviews",
      value: "906K",
      subtitle: "46% More Than Last Month"
    },
    {
      title: "Active Apps",
      value: "132+",
      subtitle: "31 More Will Launch"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-400 py-20 px-6 font-sans">
      <div className="max-w-5xl mx-auto text-center text-white">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 tracking-wide">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-4">
              {/* Top Subtitle */}
              <p className="text-sm font-medium text-white/80">
                {stat.title}
              </p>
              
              {/* Large Value */}
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight">
                {stat.value}
              </h3>
              
              {/* Bottom Subtitle */}
              <p className="text-xs md:text-sm font-medium text-white/80">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}