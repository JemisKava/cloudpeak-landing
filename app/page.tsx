import About from "@/components/sections/about";
import Brand from "@/components/sections/brand";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brand />
      <About />
      <Features />
    </>
  );
}
