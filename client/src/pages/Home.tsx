import { HeroSection } from "@/components/HeroSection";
import { BotStatus } from "@/components/BotStatus";
import { CommandList } from "@/components/CommandList";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <Separator className="my-8" />
      <div className="container mx-auto px-4">
        <BotStatus />
        <Separator className="my-8" />
        <CommandList />
      </div>
    </div>
  );
}
