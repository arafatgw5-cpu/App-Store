"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors"
          >
            ← <span className="font-semibold text-lg">Play Store</span>
          </Link>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-green-500 rounded-2xl flex items-center justify-center text-2xl shadow-inner">
              📚
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-800">
              My Apps
            </h1>
          </div>

          <div className="text-sm font-medium text-gray-400">
            {installedApps.length} installed
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : installedApps.length === 0 ? (
          /* Beautiful Empty State */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center text-7xl mb-8 shadow-inner">
              📦
            </div>
            <h2 className="text-3xl font-semibold text-gray-700">
              No apps installed yet
            </h2>
            <p className="text-gray-500 mt-3 max-w-md">
              Your installed apps will appear here. Go back to Play Store and
              install some cool apps!
            </p>
            <Link
              href="/"
              className="mt-8 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-3xl transition-all active:scale-95 shadow-lg"
            >
              Browse Apps →
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Installed Apps
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {installedApps.map((app, index) => (
                <div
                  key={app.id}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {/* Image Container */}
                  <div className="relative">
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={280}
                      height={220}
                      className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Installed Badge */}
                    <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-4 py-1 rounded-2xl shadow flex items-center gap-1">
                      <span className="text-lg leading-none">✓</span>
                      INSTALLED
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-semibold text-xl line-clamp-1 group-hover:text-green-600 transition-colors">
                      {app.title}
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      {app.companyName}
                    </p>

                    <div className="flex items-center justify-between mt-5">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 text-2xl">★</span>
                        <span className="font-medium text-lg">
                          {app.ratingAvg}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 font-medium">
                        {app.size} MB
                      </div>
                    </div>

                    {/* Open button */}
                    <button className="mt-6 w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                      Open App
                      <span className="text-xl">🚀</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer hint */}
      <div className="text-center text-xs text-gray-400 mt-16">
        Your personal app library • Powered by localStorage
      </div>
    </div>
  );
};

export default InstallationPage;
