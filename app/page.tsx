import { UrgencyBanner } from "@/components/UrgencyBanner";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Cases } from "@/components/sections/Cases";
import { Products } from "@/components/sections/Products";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Sectors } from "@/components/sections/Sectors";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main style={{ background: "#070711" }}>
      <UrgencyBanner />
      <Hero />
      <Solutions />
      <Cases />
      <Products />
      <HowItWorks />
      <Sectors />
      <Team />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
