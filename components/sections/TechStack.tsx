"use client";

import { FaAws, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
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
    items: [
      { name: "Golang", icon: FaGolang, iconColor: "text-[#00ADD8]" },
      { name: "Node.js", icon: SiNodedotjs, iconColor: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, iconColor: "text-[#000000] dark:text-[#ffffff]" },
      { name: "Nest.js", icon: SiNestjs, iconColor: "text-[#E0234E]" },
      { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169E1]" },
      { name: "Kafka", icon: SiApachekafka, iconColor: "text-[#FD8E31] dark:text-[#ffffff]" },
      { name: "Redis", icon: SiRedis, iconColor: "text-[#DC382D]" },
      { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]" },
      { name: "Prisma ORM", icon: SiPrisma, iconColor: "text-[#2D3748] dark:text-[#5A67D8]" },
    ],
  },
  {
    title: "Frontend Experience",
    className: "md:col-span-1 lg:col-span-1",
    items: [
      { name: "Next.js", icon: SiNextdotjs, iconColor: "text-[#000000] dark:text-[#ffffff]" },
      { name: "React.js", icon: SiReact, iconColor: "text-[#61DAFB]" },
      { name: "React Native", icon: TbBrandReactNative, iconColor: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-[#06B6D4]" },
      { name: "Shadcn UI", icon: SiShadcnui, iconColor: "text-[#000000] dark:text-[#ffffff]" },
    ],
  },
  {
    title: "Cloud & DevOps",
    className: "md:col-span-1 lg:col-span-1",
    items: [
      { name: "AWS", icon: FaAws, iconColor: "text-[#FF9900]" },
      { name: "Docker", icon: FaDocker, iconColor: "text-[#2496ED]" },
      { name: "Jenkins", icon: SiJenkins, iconColor: "text-[#D33833]" },
      { name: "Git", icon: SiGit, iconColor: "text-[#F05032]" },
    ],
  },
  {
    title: "AI Infrastructure",
    className: "md:col-span-2 lg:col-span-2",
    items: [
      { name: "LangChain", icon: SiLangchain, iconColor: "text-[#38B2AC]" },
      { name: "OpenAI", icon: SiOpenai, iconColor: "text-[#10A37F]" },
      { name: "Vector DBs", icon: TbDatabaseSearch, iconColor: "text-[#06B6D4]" },
      { name: "Postman", icon: SiPostman, iconColor: "text-[#FF6C37]" },
      { name: "VS Code", icon: VscVscode, iconColor: "text-[#007ACC]" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden border-t border-border"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-secondary/30 dark:bg-secondary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Group */}
        <div className="mb-16 text-left max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Engineered with modern tools to deploy high-throughput backend services, distributed pipelines, and clean architectures.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
          {skills.map((section) => (
            <div
              key={section.title}
              className={`
                ${section.className}
                group
                relative
                rounded-2xl
                border border-border
                bg-card/40 backdrop-blur-sm
                p-8
                flex flex-col justify-between
                transition-all duration-300
                hover:border-foreground/20
                hover:shadow-sm
              `}
            >
              <div>
                {/* Section Title */}
                <h3 className="font-serif text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1 h-3 rounded bg-primary" />
                  {section.title}
                </h3>

                {/* Badges Container */}
                <div className="flex flex-wrap gap-2.5">
                  {section.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="
                          group/badge
                          flex items-center gap-2
                          px-3 py-1.5
                          rounded-xl
                          border border-border
                          bg-background
                          text-foreground
                          text-sm font-medium
                          transition-all duration-200
                          hover:border-foreground/15
                          hover:bg-secondary
                          cursor-default
                        "
                      >
                        <Icon className={`text-base transition-all duration-200 opacity-80 group-hover/badge:opacity-100 group-hover/badge:scale-110 ${item.iconColor}`} />
                        <span>{item.name}</span>
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