import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ALL-APPS-PLAY STORE",
  description: "Modern App Landing Page",
  icons: {
    icon: "/logo.png",
  },
};

const Apps = async () => {
  const res = await fetch("http://localhost:3000/data.json", {
    cache: "no-store",
  });

  const apps = await res.json();

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-12">
      {/* Header with modern look */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
              📱
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Play Store
            </h1>
          </div>

          {/* Search bar - modern glassmorphism style */}
          <div className="hidden md:flex items-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl px-6 py-3 w-96 shadow-sm focus-within:shadow-md transition-all">
            <span className="text-gray-400 mr-3">🔍</span>
            <input
              type="text"
              placeholder="Search apps..."
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
            />
          </div>
        </div>

        <p className="text-gray-500 mt-2 text-lg">
          Discover amazing apps • 1000+ apps available
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <span className="text-green-500">📱</span>
          Trending Apps
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 ease-out cursor-pointer"
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >
              {/* Image with smooth zoom animation */}
              <div className="relative overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={280}
                  height={220}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Rating badge floating on image */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-2xl shadow flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>{app.ratingAvg}</span>
                </div>
              </div>

              <div className="p-5">
                <h2 className="font-semibold text-xl line-clamp-1 group-hover:text-green-600 transition-colors">
                  {app.title}
                </h2>
                <p className="text-gray-500 text-sm mt-1">{app.companyName}</p>

                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400 text-lg leading-none">
                      ★
                    </span>
                    <span className="font-medium">{app.ratingAvg}</span>
                  </div>
                  <div className="text-gray-400 text-xs font-medium">
                    {app.downloads} + downloads
                  </div>
                </div>

                <div className="mt-2 text-xs text-gray-400 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Size: {app.size} MB
                </div>

                {/* Button with press animation */}
                <Link href={`/apps/${app.id}`} className="block mt-6">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-4 rounded-2xl text-base shadow-lg active:scale-95 transition-all duration-200 hover:brightness-110 flex items-center justify-center gap-2">
                    <span>Show details</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-12"></div>
    </div>
  );
};

export default Apps;
