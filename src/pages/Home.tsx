import { motion } from "framer-motion";
// @ts-ignore
import { config } from "@/config";
import { Button } from "@/components/ui/button";
import { Shield, Zap, Settings, MessageSquare, ExternalLink } from "lucide-react";

export default function Home() {
  const iconMap: Record<string, any> = { Shield, Zap, Settings };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 border-b border-border bg-background/50 backdrop-blur-md sticky top-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-xl font-bold tracking-tight">{config.botName}</span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="hidden md:flex gap-2 border-primary/20 hover:bg-primary/10 transition-all duration-300"
              onClick={() => window.open(config.links.discord, "_blank")}
              data-testid="button-discord-server"
            >
              <MessageSquare className="w-4 h-4" />
              Discord
            </Button>
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/30 transition-all duration-300"
              onClick={() => window.open(config.links.invite, "_blank")}
              data-testid="button-invite-bot"
            >
              Invite Bot
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Level Up Your Server with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {config.botName}
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            The most advanced, secure, and feature-rich Discord bot designed to
            protect and engage your community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 h-14 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
              onClick={() => window.open(config.links.invite, "_blank")}
              data-testid="button-hero-invite"
            >
              Add to Discord
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 h-14 text-lg border-border hover:bg-accent"
              onClick={() => window.open(config.links.discord, "_blank")}
              data-testid="button-hero-support"
            >
              Support Server
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.features.map((feature: any, index: number) => {
            const Icon = iconMap[feature.icon] || Shield;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-primary/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-12 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {config.botName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

