"use client";

 
import { FaAws, FaJenkins } from "react-icons/fa";
import { FaDocker, FaGolang } from "react-icons/fa6";
import {
  SiApachekafka,
  SiExpress,
  SiGit,
  SiJenkins,
  SiLangchain,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative, TbDatabaseSearch } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    title: "Backend & Systems",
    className: "md:col-span-2 lg:col-span-2",
    glowClass: "from-emerald-500/20 to-teal-500/0",
    borderHover: "group-hover/card:border-emerald-500/30",
    items: [
      { name: "Golang", icon: FaGolang, iconColor: "text-[#00ADD8]", bgColor: "hover:bg-[#00ADD8]/10 hover:border-[#00ADD8]/30" },
      { name: "Node.js", icon: SiNodedotjs, iconColor: "text-[#339933]", bgColor: "hover:bg-[#339933]/10 hover:border-[#339933]/30" },
      { name: "Express.js", icon: SiExpress, iconColor: "text-zinc-700 dark:text-zinc-300", bgColor: "hover:bg-zinc-500/10 hover:border-zinc-500/30" },
      { name: "Nest.js", icon: SiNestjs, iconColor: "text-[#E0234E]", bgColor: "hover:bg-[#E0234E]/10 hover:border-[#E0234E]/30" },
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169E1]", bgColor: "hover:bg-[#4169E1]/10 hover:border-[#4169E1]/30" },
      { name: "Kafka", icon: SiApachekafka, iconColor: "text-[#111111] dark:text-white", bgColor: "hover:bg-zinc-500/10 hover:border-zinc-500/30" },
      { name: "Redis", icon: SiRedis, iconColor: "text-[#DC382D]", bgColor: "hover:bg-[#DC382D]/10 hover:border-[#DC382D]/30" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]", bgColor: "hover:bg-[#47A248]/10 hover:border-[#47A248]/30" },
      { name: "Prisma ORM", icon: SiPrisma, iconColor: "text-[#2D3748] dark:text-white", bgColor: "hover:bg-zinc-500/10 hover:border-zinc-500/30" },
    ],
  },
  {
    title: "Frontend Experience",
    className: "md:col-span-1 lg:col-span-1",
    glowClass: "from-blue-500/20 to-indigo-500/0",
    borderHover: "group-hover/card:border-blue-500/30",
    items: [
      { name: "Next.js", icon: SiNextdotjs, iconColor: "text-zinc-900 dark:text-white", bgColor: "hover:bg-zinc-500/10 hover:border-zinc-500/30" },
      { name: "React.js", icon: SiReact, iconColor: "text-[#61DAFB]", bgColor: "hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30" },
      { name: "React Native", icon: TbBrandReactNative, iconColor: "text-[#61DAFB]", bgColor: "hover:bg-[#61DAFB]/10 hover:border-[#61DAFB]/30" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-[#06B6D4]", bgColor: "hover:bg-[#06B6D4]/10 hover:border-[#06B6D4]/30" },
      { name: "Shadcn UI", icon: SiShadcnui, iconColor: "text-zinc-900 dark:text-white", bgColor: "hover:bg-zinc-500/10 hover:border-zinc-500/30" },
    ],
  },
  {
    title: "Cloud & DevOps",
    className: "md:col-span-1 lg:col-span-1",
    glowClass: "from-orange-500/20 to-yellow-500/0",
    borderHover: "group-hover/card:border-orange-500/30",
    items: [
      { name: "AWS", icon: FaAws, iconColor: "text-[#FF9900]", bgColor: "hover:bg-[#FF9900]/10 hover:border-[#FF9900]/30" },
      { name: "Docker", icon: FaDocker, iconColor: "text-[#2496ED]", bgColor: "hover:bg-[#2496ED]/10 hover:border-[#2496ED]/30" },
      { name: "Jenkins", icon: SiJenkins, iconColor: "text-[#D24939]", bgColor: "hover:bg-[#D24939]/10 hover:border-[#D24939]/30" },
      { name: "Git", icon: SiGit, iconColor: "text-[#F05032]", bgColor: "hover:bg-[#F05032]/10 hover:border-[#F05032]/30" },
    ],
  },
  {
    title: "AI Infrastructure",
    className: "md:col-span-2 lg:col-span-2",
    glowClass: "from-purple-500/20 to-pink-500/0",
    borderHover: "group-hover/card:border-purple-500/30",
    items: [
      { name: "LangChain", icon: SiLangchain, iconColor: "text-[#13AA52]", bgColor: "hover:bg-[#13AA52]/10 hover:border-[#13AA52]/30" },
      { name: "OpenAI", icon: SiOpenai, iconColor: "text-[#412991] dark:text-[#10A37F]", bgColor: "hover:bg-[#10A37F]/10 hover:border-[#10A37F]/30" },
      { name: "Vector DBs", icon: TbDatabaseSearch, iconColor: "text-emerald-400", bgColor: "hover:bg-emerald-400/10 hover:border-emerald-400/30" },
      { name: "Postman", icon: SiPostman, iconColor: "text-[#FF6C37]", bgColor: "hover:bg-[#FF6C37]/10 hover:border-[#FF6C37]/30" },
      { name: "VS Code", icon: VscVscode, iconColor: "text-[#007ACC]", bgColor: "hover:bg-[#007ACC]/10 hover:border-[#007ACC]/30" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-black relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/[0.03] blur-[130px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Group */}
        <div className="mb-24 text-center md:text-left max-w-2xl">
          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mt-4 mb-6">
            Tech Stack
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Engineered with modern tools to deploy high-throughput backend APIs, fluid interfaces, and self-contained AI systems.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-8 auto-rows-fr">
          {skills.map((section) => (
            <div
              key={section.title}
              className={`
                ${section.className}
                group/card
                relative
                rounded-3xl
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-950/40
                p-8
                shadow-xl shadow-zinc-200/50 dark:shadow-none
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:-translate-y-1.5
                ${section.borderHover}
              `}
            >
              {/* Inner Accent Glow Ring */}
              <div className="absolute inset-0 border border-transparent dark:group-hover/card:border-zinc-700/30 rounded-3xl pointer-events-none transition-colors duration-500 z-20" />

              {/* Corner Heatmap Glow Overlay */}
              <div className={`absolute -right-16 -top-16 w-44 h-44 bg-gradient-to-br ${section.glowClass} blur-2xl rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Section Title with Custom Dynamic Dot Indicator */}
                <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover/card:bg-emerald-400 transition-colors duration-300" />
                  {section.title}
                </h3>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-3">
                  {section.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className={`
                          group
                          flex items-center gap-2.5
                          px-4 py-2.5
                          rounded-2xl
                          border border-zinc-200 dark:border-zinc-800/80
                          bg-zinc-50/50 dark:bg-zinc-900/30
                          transition-all duration-300 ease-out
                          hover:scale-[1.04] hover:shadow-lg dark:hover:shadow-black/40
                          cursor-default
                          ${item.bgColor}
                        `}
                      >
                        <Icon className={`text-xl transition-all duration-300 group-hover:scale-110 ${item.iconColor}`} />
                        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}