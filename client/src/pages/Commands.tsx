import { Navbar } from "@/components/Navbar";
import { CommandList } from "@/components/CommandList";

export default function Commands() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Bot Commands</h1>
        <p className="text-muted-foreground mb-8">
          Explore all the commands available in our Discord bot. Each command is designed 
          to enhance your server experience.
        </p>
        <CommandList />
      </div>
    </div>
  );
}
