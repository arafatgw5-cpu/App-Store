"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const Installation = () => {
  const { installationId } = useParams();
  const router = useRouter();

  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installing, setInstalling] = useState(false);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((apps) => {
        const found = apps.find(
          (item) => String(item.id) === String(installationId),
        );
        setApp(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [installationId]);

  const handleInstall = () => {
    if (!app) return;

    setInstalling(true);

    // Simulate network delay for better UX
    setTimeout(() => {
      const installedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];

      const exist = installedApps.find((item) => item.id === app.id);

      if (exist) {
        alert("✅ Already Installed!");
        setInstalling(false);
        router.push("/installation");
        return;
      }

      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));

      // Success animation + message
      alert("🎉 Successfully Installed!");
      setInstalling(false);
      router.push("/installation");
    }, 1200);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500 font-medium">
            Loading app details...
          </p>
        </div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">App not found 😢</h2>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-green-500 text-white rounded-2xl font-medium hover:bg-green-600 transition"
        >
          ← Back to Play Store
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
          >
            ← <span className="font-medium">Play Store</span>
          </Link>
          <div className="text-sm font-medium text-gray-400">App Details</div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-80 bg-gradient-to-br from-green-500 to-emerald-600 flex items-end">
            <div className="absolute inset-0 bg-black/20"></div>

            {/* App Icon - Large & Floating */}
            <div className="absolute -bottom-12 left-8 md:left-12 bg-white p-3 rounded-3xl shadow-2xl">
              <Image
                src={app.image}
                alt={app.title}
                width={140}
                height={140}
                className="rounded-2xl shadow-inner"
              />
            </div>

            {/* Title & Info */}
            <div className="ml-52 md:ml-64 pb-8 px-8 text-white">
              <h1 className="text-4xl font-bold tracking-tight drop-shadow-sm">
                {app.title}
              </h1>
              <p className="text-white/90 text-xl mt-1">{app.companyName}</p>

              {/* Quick Stats */}
              <div className="flex items-center gap-6 mt-6 text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <div className="font-semibold text-lg leading-none">
                      {app.ratingAvg}
                    </div>
                    <div className="text-xs text-white/70">Rating</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div>
                  <div className="font-semibold text-lg leading-none">
                    {app.downloads}
                  </div>
                  <div className="text-xs text-white/70">Downloads</div>
                </div>
                <div className="h-8 w-px bg-white/30"></div>
                <div>
                  <div className="font-semibold text-lg leading-none">
                    {app.size} MB
                  </div>
                  <div className="text-xs text-white/70">Size</div>
                </div>
              </div>
            </div>

            {/* Install Button - Floating */}
            <div className="absolute right-8 bottom-8">
              <button
                onClick={handleInstall}
                disabled={installing}
                className={`px-10 py-4 rounded-3xl text-xl font-semibold shadow-2xl flex items-center gap-3 transition-all active:scale-95 ${
                  installing
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-white text-green-600 hover:bg-green-100"
                }`}
              >
                {installing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                    Installing...
                  </>
                ) : (
                  <>📲 Install</>
                )}
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="pt-20 px-8 md:px-12 pb-12">
            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About this app
              </h2>
              <p className="text-gray-600 leading-relaxed text-[17px]">
                {app.description}
              </p>
            </div>

            {/* Extra Info Row */}
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-green-500 text-4xl">⭐</div>
                <div className="font-bold text-2xl mt-2">{app.ratingAvg}</div>
                <div className="text-xs text-gray-500 mt-1">Average Rating</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-green-500 text-4xl">⬇️</div>
                <div className="font-bold text-2xl mt-2">{app.downloads}</div>
                <div className="text-xs text-gray-500 mt-1">Downloads</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="text-green-500 text-4xl">📦</div>
                <div className="font-bold text-2xl mt-2">{app.size} MB</div>
                <div className="text-xs text-gray-500 mt-1">App Size</div>
              </div>
            </div>

            {/* Fake Screenshots Section (You can replace with real ones later) */}
            <div className="mt-14">
              <h3 className="font-semibold text-xl mb-4">Screenshots</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
                <div className="bg-gray-100 rounded-2xl w-64 h-48 flex-shrink-0 snap-center shadow-inner overflow-hidden">
                  <Image
                    src={app.image}
                    alt="Screenshot"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-2xl w-64 h-48 flex-shrink-0 snap-center shadow-inner overflow-hidden">
                  <Image
                    src={app.image}
                    alt="Screenshot"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <div className="text-center text-xs text-gray-400 mt-12">
        Made with ❤️ for your Play Store experience
      </div>
    </div>
  );
};

export default Installation;
