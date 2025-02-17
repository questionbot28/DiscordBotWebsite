import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Features />
    </div>
  );
}