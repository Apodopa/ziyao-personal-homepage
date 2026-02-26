import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function EmailRow({ email }: { email: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200">
      <Mail className="h-4 w-4 text-zinc-400" />
      <span className="font-mono">{email}</span>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-zinc-950 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            有兴趣合作吗？
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            个人具备良好的自驱动力，擅长利用英文优势快速摄取并吸收前沿科研动态和技术信息。不仅关注AI算法演进，更期待投身于软硬件一体化及物理世界智能交互的变革。拥有优秀的团队复配能力，工作积极前瞻，敢于走出舒适区挑战前沿课题，是一个兼具探索激情与落地执行力的协作伙伴。
          </p>
          <p className="text-2xl md:text-3xl font-light tracking-wider mb-12 max-w-2xl mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(100,200,255,0.3)]">
            我随时准备开始新的挑战。无论是项目合作还是加入团队，欢迎随时联系我。
          </p>
          
          <a
            href="mailto:ziyaoxu926gausstein@alumni.sjtu.edu.cn"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors"
          >
            <Mail className="mr-2 h-5 w-5" />
            发送邮件
          </a>

          <div className="mt-6 mb-16 flex flex-col items-center gap-3">
            <EmailRow email="ziyaoxu926gausstein@alumni.sjtu.edu.cn" />
            <EmailRow email="apodopabel@gmail.com" />
            <EmailRow email="zyxusjtu@163.com" />
          </div>


          <div className="mt-24 pt-8 border-t border-zinc-800 text-sm text-zinc-500">
            © 2026 Ziyao Xu. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

