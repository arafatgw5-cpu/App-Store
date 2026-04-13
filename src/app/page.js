// import { Children } from "react";
import Headers from "./components/Header";
import Hero from "./components/Hero";
import Reting from "./components/Reting";

export default function HomePage({children}) {
  return (
    <div>

      <Hero />
      <Reting/>
      {children}
    </div>
  );
}