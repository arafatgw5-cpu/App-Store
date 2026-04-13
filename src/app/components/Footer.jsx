import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* 🔹 Left: Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white">Easin Arafat</h2>
          <p className="mt-2 text-sm">
            Aspiring Web Developer from Bangladesh 🇧🇩  
            Building modern & responsive web apps.
          </p>
        </div>

        {/* 🔹 Middle: Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/projects" className="hover:text-blue-400">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* 🔹 Right: Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex gap-4 text-xl">
            
            <a href="https://github.com/arafatgw5-cpu" target="_blank" className="hover:text-white">
              🐱
            </a>

            <a href="https://www.linkedin.com/in/easin-arafat-2147473a9/" target="_blank" className="hover:text-white">
              💼
            </a>

            <a href="https://www.facebook.com/easin.arafat.792602" target="_blank" className="hover:text-white">
              📘
            </a>

          </div>
        </div>
      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Easin Arafat. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;