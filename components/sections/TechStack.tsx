"use client"

import {
  DiAws,
  DiDocker,
  DiJenkins,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di"

import { FaDocker, FaGolang } from "react-icons/fa6"

import {
  SiApachekafka,
  SiExpress,
  SiGit,
  SiLangchain,
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
} from "react-icons/si"

import { TbBrandReactNative, TbDatabaseSearch } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc"

const skills = [
  {
    title: "Frontend",
    className: "lg:col-span-1",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend & Tools",
    className: "lg:col-span-2",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
      { name: "Golang", icon: FaGolang },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "MongoDB", icon: DiMongodb },
      { name: "Redis", icon: SiRedis },
      { name: "Kafka", icon: SiApachekafka },
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: FaDocker },
      {name:"Postman",icon:SiPostman}
    ],
  },

  {
    title: "Cloud",
    className: "lg:col-span-2",
    items: [
      { name: "AWS", icon: DiAws },
      { name: "Docker", icon: DiDocker },
      {name:"Jenkins",icon:DiJenkins},
       
    ],
  },

  {
    title: "AI",
    className: "lg:col-span-1",
    items: [
      { name: "LangChain", icon: SiLangchain },
      { name: "OpenAI", icon: SiOpenai },
      { name: "Vector DBs", icon: TbDatabaseSearch },
    ],
  },
]

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 px-6 relative overflow-hidden"
    >
      <div
        className="
        relative
        max-w-7xl mx-auto
        rounded-3xl
        border border-white/10
        bg-card/60
        backdrop-blur-xl
        p-8 md:p-12
        shadow-2xl
      "
      >
        {/* Header */}
        <div className="mb-14 space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-400">
            Technologies
          </p>

          <h2
            className="
            text-4xl md:text-5xl
            font-black
            tracking-tight
            text-foreground
          "
          >
            Tech Stack
          </h2>

          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Technologies and tools I use to design, build, and scale modern
            full stack applications, distributed systems, and AI-powered
            products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8 auto-rows-fr">
          {skills.map((section) => (
            <div
              key={section.title}
              className={`
                ${section.className}
                rounded-2xl
                border border-white/10
                bg-background/40
                p-6
                backdrop-blur-md
                hover:border-teal-500/20
                transition-all duration-300
              `}
            >
              {/* Section Title */}
              <div className="mb-8">
                <h3
                  className="
                  text-sm
                  font-semibold
                  tracking-[0.25em]
                  uppercase
                  text-teal-400
                "
                >
                  {section.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {section.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.name}
                      className="
                        group
                        flex items-center gap-3
                        px-4 py-3
                        rounded-md
                        border border-white/10
                        bg-[#062626]
                        hover:bg-teal-500/10
                        hover:border-teal-400/30
                        transition-all duration-300
                        cursor-pointer
                        hover:shadow-lg hover:shadow-teal-500/10
                      "
                    >
                      <Icon
                        className="
                          text-[22px]
                          
                          transition-transform duration-300
                          group-hover:scale-105
                        "
                      />

                      <span
                        className="
                          text-sm
                          font-medium
                          text-white
                        "
                      >
                        {item.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}