import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, GraduationCap, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TimeWidget } from "./TimeWidget";
import avatarImg from "@/assets/avatar-custom.jpg";
import gradientImg from "@/assets/gradient.jpg";

const HOME_URL = "https://ziyao-personal-homepage.vercel.app";
const SCHOLAR_URL = "https://scholar.google.com/citations?user=aN7wWyMAAAAJ";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
      <TimeWidget />
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={gradientImg}
          alt="Gradient Background"
          className="w-full h-full object-cover opacity-30 dark:opacity-20 blur-3xl scale-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-black/50 dark:to-black flex" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-1 shadow-2xl shadow-blue-500/20">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          你好，我是徐子耀
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          一名对AI领域和科技未来充满浓厚兴趣的开发者和研究者。
          <br className="hidden md:block" />
          <span className="font-future block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 drop-shadow-sm">
            AI for the future.
          </span>
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <Card className="w-full max-w-2xl rounded-3xl border-black/5 bg-[#f6f5fc] p-4 sm:p-5 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-white/10 dark:bg-black/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">个人主页</div>
                    <div className="mt-1 text-xs text-muted-foreground break-all">{HOME_URL}</div>
                  </div>
                  <Button
                    asChild
                    size="icon"
                    className="rounded-full bg-[#129ce0] text-white hover:bg-[#129ce0]/90"
                    aria-label="打开个人主页"
                  >
                    <a href={HOME_URL} target="_blank" rel="noreferrer" aria-label="打开个人主页">
                      <Globe className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-background/70 px-4 py-4 text-left">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">Google Scholar</div>
                    <div className="mt-1 text-xs text-muted-foreground break-all">{SCHOLAR_URL}</div>
                  </div>
                  <Button
                    asChild
                    size="icon"
                    className="rounded-full bg-[#479ada] text-white hover:bg-[#479ada]/90"
                    aria-label="打开 Google Scholar"
                  >
                    <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" aria-label="打开 Google Scholar">
                      <GraduationCap className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <button
            onClick={scrollToProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium transition-all hover:scale-105 active:scale-95"
          >
            查看成果
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
