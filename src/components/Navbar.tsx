import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { useLocation } from "wouter";

const navItems = [
  { name: "首页", href: "home" },
  { name: "成果", href: "projects" },
  { name: "技能", href: "skills" },
  { name: "经历", href: "experience" },
  { name: "联系", href: "contact" },
];

export function Navbar() {
  const [location] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >

      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-white/20 bg-white/70 backdrop-blur-xl px-4 py-2 shadow-lg shadow-black/5 ring-1 ring-black/5 dark:bg-black/70 dark:border-white/10">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={cn(
              "relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-black dark:hover:text-white",
              "text-black/60 dark:text-white/60"
            )}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </motion.header>
  );
}
