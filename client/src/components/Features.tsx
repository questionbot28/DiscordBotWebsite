import { Card, CardContent } from "@/components/ui/card";
import { Music2, GraduationCap, TicketCheck, UserPlus, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Music2,
    title: "Ultimate Music System",
    description: "AI-generated playlists, futuristic sound effects, time travel mode, and AI sound fusion. Experience interactive music with real-time synced lyrics and YouTube Shorts integration."
  },
  {
    icon: GraduationCap,
    title: "Smart Education Tools",
    description: "AI-powered question paper generator, intelligent tutor for subject queries, and study-enhancing music recommendations for optimal learning experience."
  },
  {
    icon: TicketCheck,
    title: "Advanced Ticketing System",
    description: "Effortless server support with AI-powered auto-replies, custom ticket categories, and an intuitive interface for moderation and event management."
  },
  {
    icon: UserPlus,
    title: "Invite & User Tracking",
    description: "Monitor server growth with real-time invite tracking, user analytics, and anti-fake invite detection. Reward top inviters automatically."
  },
  {
    icon: Sparkles,
    title: "Next-Gen AI Features",
    description: "Generate AI images, host automated rap battles, and experience live AI-powered music videos with holographic visuals synced to beats."
  },
  {
    icon: Rocket,
    title: "Why Choose EduSphere?",
    description: "Ultra-fast, AI-powered, and fully interactive. Combines music, education, support, and entertainment in one sleek bot. Perfect for modern Discord servers!"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
            Powerful Features
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need to create an engaging Discord community
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-xl">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
