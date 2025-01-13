import About from "@/components/sections/about";
import Brand from "@/components/sections/brand";
import CoreFeatures from "@/components/sections/core-features";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import PricingAndPlans from "@/components/sections/pricing-plans";
import Testimonials from "@/components/sections/testimonials";
import Header from "@/components/shared/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Brand />
      <About />
      <Features />
      <CoreFeatures />
      <PricingAndPlans />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}
