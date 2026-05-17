import {
  DiAws,
  DiDocker,
  DiMongodb,
  DiPostgresql,
} from "react-icons/di"

import {
  SiExpress,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
} from "react-icons/si"

import { TbBrandReactNative } from "react-icons/tb"

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Native", icon: TbBrandReactNative },
      { name: "Shadcn UI", icon: SiShadcnui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      {name:"Nest.js",icon:SiNestjs},
      { name: "Postman", icon: SiPostman },
      { name: "PostgreSQL", icon: DiPostgresql },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "MongoDB", icon: DiMongodb },
      
    ],
  },

  {
    title: "Cloud",
    items: [
      { name: "Docker", icon: DiDocker },
      { name: "AWS", icon: DiAws },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-6 relative overflow-hidden">
      
      
      

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
            full stack applications and backend systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {skills.map((section) => (
            <div
              key={section.title}
              className="
              rounded-2xl
              border border-white/10
              bg-background/40
              p-6
              backdrop-blur-md
              hover:border-teal-500/20
              transition-all duration-300
              "
            >
              
              {/* Section Title */}
              <div className="mb-8 flex items-center justify-between">
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
                        text-teal-400
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