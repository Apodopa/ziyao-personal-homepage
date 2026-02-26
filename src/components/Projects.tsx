import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import achievement1 from "@/assets/achievement1.jpg";
import achievement2 from "@/assets/achievement2.jpg";
import achievement3 from "@/assets/achievement3.jpg";
import achievement4 from "@/assets/achievement4.jpg";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";

interface CaseStudy {
  background: string;
  process: string[];
  challenges: { title: string; detail: string }[];
  outcomes: string[];
  stack: string[];
}

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "small" | "large" | "tall";
  className?: string;
  caseStudy: CaseStudy;
}

// 注：图片为占位图，你可以后续替换为论文封面/项目图/示意图
const projects: Project[] = [
  {
    id: 1,
    title: "聚合物离子热电材料低品位集热机理及性能研究",
    category: "硕士课题 · 2020–2024",
    image: achievement1,
    size: "large",
    className: "col-span-1 md:col-span-2 row-span-2",
    caseStudy: {
      background:
        "聚焦离子热电（Ionic Thermoelectric）方向：在明胶水凝胶与不同电极协同作用下，观察到塞贝克系数的普遍负偏移；并通过碳基电极增强明胶离子水凝胶的 n 型热电性能，验证其在 ITESCs 与 EDLC 中的多功能性。",
      process: [
        "文献调研与问题定义：聚焦低品位热能收集与离子配对/氢键机制",
        "材料与电极体系设计：对比不同电极与水凝胶体系的协同效应",
        "实验与数据分析：测试塞贝克系数/输出性能，分析负偏移现象",
        "性能增强策略：引入碳基电极，提升 n 型热电性能",
        "成果沉淀：论文写作与投稿、阶段总结与复盘",
      ],
      challenges: [
        {
          title: "机理解释的可验证性",
          detail:
            "需要将实验现象与分子层级的离子配对、氢键作用联系起来，并通过对照实验与参数敏感性分析提高结论可信度。",
        },
        {
          title: "n 型性能提升与稳定性",
          detail:
            "在提升输出的同时兼顾体系稳定性与可复用性，通过电极/界面设计与测试流程规范化降低波动。",
        },
      ],
      outcomes: [
        "发表 SCI 一区论文 1 篇（第一作者，Chemical Engineering Journal，IF≈13.3，被引≈27）",
        "发表 EI 论文 1 篇",
        "形成可复用的实验流程与数据分析框架",
      ],
      stack: ["Python", "MATLAB", "科研写作", "实验与数据分析"],
    },
  },
  {
    id: 2,
    title: "物理信息神经网络（PINN）预测二维传热问题",
    category: "课程研究报告 · 2021",
    image: achievement2,
    size: "small",
    className: "col-span-1",
    caseStudy: {
      background:
        "使用 TensorFlow 构建 PINN 框架，将二维传热方程作为残差优化目标；在较少初始训练数据下获得高精度温度分布预测，并与解析解保持良好一致。",
      process: [
        "问题建模：明确 PDE、边界/初值条件与可学习变量",
        "网络结构设计：采样策略与损失函数（数据项 + PDE 残差项）",
        "训练与调参：学习率、采样点密度、损失权重的平衡",
        "评估：与解析解/数值解对比，误差分布分析",
        "报告输出：复现实验与撰写分析报告",
      ],
      challenges: [
        {
          title: "损失项权重与收敛稳定性",
          detail:
            "PDE 残差与数据项权重不当会导致训练不稳定。通过分阶段训练、权重策略与采样点再分布改善收敛。",
        },
        {
          title: "小数据下的泛化能力",
          detail:
            "在少量观测数据条件下保证预测精度，需要合理的采样策略与物理约束表达。",
        },
      ],
      outcomes: [
        "成功搭建 PINN 训练框架（TensorFlow）",
        "输出二维温度场预测结果与误差分析报告",
      ],
      stack: ["TensorFlow", "机器学习", "PINN", "数值分析"],
    },
  },
  {
    id: 3,
    title: "双层 U 型管流动传热机理研究",
    category: "大学生创新创业 · 省级重点项目 · 2018–2020",
    image: achievement3,
    size: "small",
    className: "col-span-1",
    caseStudy: {
      background:
        "使用 Fluent 与 COMSOL 对双层 U 型管挡板出口以及挡板对流动特性的影响进行研究，同时分析 CPU 中不同结构对水冷散热器性能的影响。",
      process: [
        "建立几何模型与网格划分，设置边界条件",
        "多工况仿真：挡板结构/出口结构参数扫描",
        "结果分析：流场、温度场与压降/换热指标对比",
        "结构优化：基于指标权衡提出设计建议",
        "成果整理：论文撰写与项目结项材料",
      ],
      challenges: [
        {
          title: "仿真稳定性与计算成本",
          detail:
            "复杂结构下需要在精度与算力之间取舍，通过网格无关性验证、合理的湍流模型与收敛策略提升效率。",
        },
        {
          title: "多指标权衡",
          detail:
            "换热增强往往伴随压降上升，需要建立清晰的指标体系来做结构选择与解释。",
        },
      ],
      outcomes: [
        "发表中文论文 3 篇",
        "项目顺利结项",
      ],
      stack: ["Fluent", "COMSOL", "传热与流体", "数据分析"],
    },
  },
  {
    id: 4,
    title: "科研成果",
    category: "Publication",
    image: achievement4,
    size: "tall",
    className: "col-span-1 md:col-span-1 row-span-2",
    caseStudy: {
      background:
        "科研论文与综述：\nSCI一区科研论文Chemical Engineering Journal（第一作者，影响因子=13.3，被引用次数：27）\nEI期刊科研论文The Innovation Energy（第二作者，被引用次数：6）\n待接收SCI一区顶刊综述National Science Review (第一作者，影响因子=17.7)",
      process: [],
      challenges: [],
      outcomes: [
        "SCI一区科研论文 Chemical Engineering Journal（第一作者，影响因子=13.3，被引用次数：27）",
        "EI期刊科研论文 The Innovation Energy（第二作者，被引用次数：6）",
        "待接收SCI一区顶刊综述 National Science Review（第一作者，影响因子=17.7）",
      ],
      stack: ["Publication"],
    },
  },
];

export function Projects() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<number | null>(null);

  const activeProject = useMemo(() => {
    if (activeId == null) return null;
    return projects.find((p) => p.id === activeId) ?? null;
  }, [activeId]);

  const openProject = (id: number) => {
    setActiveId(id);
    setOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div className="min-w-0">
              <h2 className="text-3xl md:text-4xl font-bold">成果展示</h2>
              <p className="mt-2 text-muted-foreground text-lg max-w-[700px]">点击任意成果卡片，查看简介。</p>
            </div>

            <div className="sm:pt-1 flex-shrink-0">
              <div className="text-xs font-semibold text-foreground/80">论文链接</div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <a
                  href="https://doi.org/10.1016/j.cej.2024.152734"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-foreground/80 backdrop-blur hover:bg-white hover:text-foreground transition-colors dark:border-white/15 dark:bg-black/40"
                  aria-label="打开论文：Chemical Engineering Journal"
                  title="Chemical Engineering Journal"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-foreground/80 dark:bg-white/10">
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="font-medium">CEJ</span>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/70">DOI</span>
                </a>

                <a
                  href="https://doi.org/10.59717/j.xinn-energy.2024.100048"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-foreground/80 backdrop-blur hover:bg-white hover:text-foreground transition-colors dark:border-white/15 dark:bg-black/40"
                  aria-label="打开论文：The Innovation Energy"
                  title="The Innovation Energy"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-foreground/80 dark:bg-white/10">
                    <FileText className="h-4 w-4" />
                  </span>
                  <span className="font-medium">TIE</span>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground/70">DOI</span>
                </a>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                CEJ：Chemical Engineering Journal；TIE：The Innovation Energy
              </div>
            </div>
          </div>

        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[320px]">
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => openProject(project.id)}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 shadow-sm transition-all hover:shadow-xl hover:scale-[1.02] text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* cover image only */}
              </div>

              {/* Always-visible caption */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6">
                <div className="rounded-2xl border border-white/15 bg-black/35 backdrop-blur-md px-4 py-3 shadow-lg shadow-black/20">
                  <div className="text-xs font-medium text-white/75">{project.category}</div>
                  <h3 className="mt-1 text-base md:text-lg font-semibold text-white leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="mt-2 text-xs text-white/70 flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
                    点击查看详情
                  </div>
                </div>
              </div>

              {/* Hover tint (fixed size per request) */}
              <div className="absolute left-0 top-0 z-[5] w-[445.344px] h-[298px] bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {activeProject && (
            <div className="bg-background text-foreground">
              <div className="relative h-56 sm:h-72">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <DialogHeader>
                    <DialogTitle className="text-2xl sm:text-3xl text-white tracking-tight">
                      {activeProject.title}
                    </DialogTitle>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-white/15 text-white border-white/20">
                        {activeProject.category}
                      </Badge>

                    </div>
                  </DialogHeader>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <section>
                  <h4 className="text-lg font-semibold mb-2">简介</h4>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{activeProject.caseStudy.background}</p>
                </section>

              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
