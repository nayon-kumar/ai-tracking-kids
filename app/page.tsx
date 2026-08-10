import Hero from "@/components/Hero";
import LucyAi from "@/components/LucyAi";
import GrowthQuestion from "@/components/GrowthQuestion";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import PrivacySecurity from "@/components/PrivacySecurity";

export default function Home() {
  return (
    <main>
      <Hero />
      <LucyAi />
      <GrowthQuestion />
      <Features />
      <Testimonials />
      <Pricing />
      <PrivacySecurity />
    </main>
  );
}
