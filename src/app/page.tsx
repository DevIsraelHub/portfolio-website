import About from "@/modules/Home/About";
import Cta from "@/modules/Home/Cta";
import Hero from "@/modules/Home/Hero";
import Reviews from "@/modules/Home/Reviews";
import Service from "@/modules/Home/Service";
import Work from "@/modules/Home/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
