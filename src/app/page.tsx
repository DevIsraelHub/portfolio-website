import About from "@/modules/Home/About";
import Hero from "@/modules/Home/Hero";
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
    </main>
  );
}
