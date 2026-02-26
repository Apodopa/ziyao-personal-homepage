import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Database,
  FileText,
  FlaskConical,
  GraduationCap,
  HardDrive,
  Languages,
  Network,
  Terminal,
  Wrench,
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: "编程" | "AI/机器学习" | "Agent/应用" | "工程工具" | "科研与写作" | "语言";
}

const skillGroups: { title: Skill["category"]; items: Skill[] }[] = [
  {
    title: "编程",
    items: [
      { name: "Python", category: "编程", icon: <Terminal className="h-5 w-5" /> },
      { name: "MATLAB", category: "编程", icon: <Terminal className="h-5 w-5" /> },
      { name: "数据结构与算法", category: "编程", icon: <HardDrive className="h-5 w-5" /> },
    ],
  },
  {
    title: "AI/机器学习",
    items: [
      { name: "机器学习 / 强化学习", category: "AI/机器学习", icon: <Brain className="h-5 w-5" /> },
      { name: "TensorFlow / PyTorch", category: "AI/机器学习", icon: <Brain className="h-5 w-5" /> },
      { name: "LLM & Vibe coding", category: "AI/机器学习", icon: <Bot className="h-5 w-5" /> },
      { name: "RAG / Prompt 工程 / Context 工程 / MCP", category: "AI/机器学习", icon: <Database className="h-5 w-5" /> },
    ],
  },
  {
    title: "Agent/应用",
    items: [
      { name: "LangChain（了解）", category: "Agent/应用", icon: <Network className="h-5 w-5" /> },
      { name: "n8n（深度使用）", category: "Agent/应用", icon: <Network className="h-5 w-5" /> },
      { name: "Dify（深度使用）", category: "Agent/应用", icon: <Network className="h-5 w-5" /> },
    ],
  },
  {
    title: "工程工具",
    items: [
      { name: "Linux 常用指令", category: "工程工具", icon: <Terminal className="h-5 w-5" /> },
      { name: "Docker（MLOps 工具链）", category: "工程工具", icon: <Wrench className="h-5 w-5" /> },
    ],
  },
  {
    title: "科研与写作",
    items: [
      { name: "中英文论文与项目报告撰写", category: "科研与写作", icon: <FileText className="h-5 w-5" /> },
      { name: "Office / Markdown", category: "科研与写作", icon: <FileText className="h-5 w-5" /> },
      { name: "材料表征、数据处理和科研绘图", category: "科研与写作", icon: <FlaskConical className="h-5 w-5" /> },
    ],
  },
  {
    title: "语言",
    items: [
      { name: "英语：雅思 7.0 / CET-6 510", category: "语言", icon: <Languages className="h-5 w-5" /> },
      { name: "英文论文阅读/写作/沟通", category: "语言", icon: <GraduationCap className="h-5 w-5" /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">技能清单</h2>
          <p className="text-muted-foreground text-lg">从科研到工程落地：编程、AI、Agent 与工程工具。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05, duration: 0.5 }}
              className="rounded-3xl border border-border/60 bg-secondary/30 p-6"
            >
              <div className="text-sm font-semibold tracking-tight text-foreground mb-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-foreground/50" />
                {group.title}
              </div>

              <div className="space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/70 px-4 py-3"
                  >
                    <div className="mt-0.5 text-foreground/80">{item.icon}</div>
                    <div className="min-w-0">
                      <div className="font-semibold text-foreground/90 leading-snug">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
