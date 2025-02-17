import { HeroSection } from "@/components/HeroSection";
import { Features } from "@/components/Features";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <Features />
      </main>
      <Footer />
    </div>
  );
}