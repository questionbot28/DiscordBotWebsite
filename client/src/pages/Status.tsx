import { Navbar } from "@/components/Navbar";
import { BotStatus } from "@/components/BotStatus";

export default function Status() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Bot Status</h1>
        <p className="text-muted-foreground mb-8">
          Check our bot's current performance metrics and server status. We maintain 
          high availability to ensure your server runs smoothly.
        </p>
        <BotStatus />
      </div>
    </div>
  );
}
