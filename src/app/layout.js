import Footer from "./components/Footer";
import Headers from "./components/Header";

import "./globals.css";
export const metadata = {
  title: "PH-PLAY STORE",
  description: "Modern App Landing Page",

  icons: {
    icon: "/logo.png", // favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        
        {/* Navbar (future add korba) */}

        <Headers/>
        <main className="flex-1">
          {children}
          <Footer/>
        </main>

      </body>
    </html>
  );
}

