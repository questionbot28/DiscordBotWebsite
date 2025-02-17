import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Your Ultimate Discord Bot
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Enhance your Discord server with powerful moderation tools, fun commands,
            and seamless integration. The perfect addition to any community.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => window.open("https://discord.com/oauth2/authorize?your-bot-url", "_blank")}
            >
              <SiDiscord className="h-5 w-5" />
              Add to Discord
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open("https://discord.gg/your-server", "_blank")}
            >
              Join Support Server
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
