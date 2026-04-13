"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Headers = () => {
  const pathname = usePathname();

  const navLinkClass = (path) =>
    `pb-1 border-b-2 transition-colors ${
      pathname === path
        ? "text-purple-600 border-purple-600"
        : "text-gray-800 border-transparent hover:text-purple-600"
    }`;

  return (
    <nav className="flex items-center justify-between w-full h-16 px-8 bg-white border-b border-gray-100">
      
      {/* Left */}
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold text-purple-600 tracking-wide">
          HERO.IO
        </span>
      </div>

      {/* Center */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <Link href="/" className={navLinkClass("/")}>
          Home
        </Link>

        <Link href="/apps" className={navLinkClass("/apps")}>
          Apps
        </Link>

        <Link
          href="/installation"
          className={navLinkClass("/installation")}
        >
          Installation
        </Link>

        <Link
          href="/dashboard"
          className={navLinkClass("/dashboard")}
        >
          Dashboard
        </Link>
      </div>

      {/* Right */}
      <div>
        <a
          href="https://github.com"
          target="_blank"
          className="px-5 py-2 text-sm font-semibold text-white rounded-md bg-gradient-to-r from-purple-600 to-purple-400 hover:scale-105 transition"
        >
          Contribute
        </a>
      </div>
    </nav>
  );
};

export default Headers;