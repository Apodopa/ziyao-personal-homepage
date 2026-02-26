import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
}

const experiences: Experience[] = [
  {
    id: 1,
    year: "2024 – 至今",
    title: "工程热物理研究所 · 科研助理",
    company: "上海交通大学",
    description: "在工程热物理研究所参与科研工作，一篇待接收SCI一区顶刊National Science Review第一作者综述；学习探索AI相关技术。", 
    type: "work",
  },
  {
    id: 2,
    year: "2020/09 – 2023/06",
    title: "能源动力专业 · 硕士",
    company: "上海交通大学",
    description: "GPA：3.57/4.0。完成硕士课题与课程研究，具备英文论文阅读、写作与沟通能力。发表一篇SCI一区论文和一篇EI论文。",
    type: "education",
  },
  {
    id: 3,
    year: "2016/09 – 2020/06",
    title: "流体机械及其自动控制专业 · 学士",
    company: "江苏大学",
    description: "GPA：3.61/4.5。参与流动与传热相关仿真研究与项目实践，参与大学生创新创业省级重点项目，发表中文论文并完成项目结项。",
    type: "education",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">经历与旅程</h2>
          <p className="text-muted-foreground text-lg">我的职业成长与学习轨迹。</p>
        </motion.div>

        <div className="relative border-l border-border ml-4 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-background border-2 border-primary ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">
                  {exp.year}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-primary font-medium mb-3">
                {exp.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
                <span>{exp.company}</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
