import { Button } from "@/components/ui/button";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-background py-16 sm:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5,#0ea5e9)] opacity-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <div className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary inline-block">
                  Powerful Discord Bot
                </div>
              </motion.div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
                Your Ultimate Discord Bot
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Enhance your Discord server with powerful moderation tools, fun commands,
              and seamless integration. The perfect addition to any community.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
                  onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=1159874534485262410&permissions=8&integration_type=0&scope=bot", "_blank")}
                >
                  <SiDiscord className="h-5 w-5" />
                  Add to Discord
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/20 hover:bg-primary/5"
                  onClick={() => window.open("https://discord.gg/J3paY6YQkZ", "_blank")}
                >
                  Join Support Server
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative block"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
              <img
                src="https://cdn.discordapp.com/attachments/1247786337629769850/1340858985817051136/1000135879_processed.jpg.png?ex=67b3e3be&is=67b2923e&hm=5eb843edf74c25d8e9fbbc20baaffcc0a4f66e12d5be4f0ebc777311778230be&"
                alt="Discord Bot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}