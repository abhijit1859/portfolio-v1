"use client";

import { ExternalLink } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import isKribble from "../../public/iskribble.png"
import prepgrid from "../../public/prepgrid.png"
import pixeltown from "../../public/Pixeltown.png"
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      num: "01",
      title: "isKribble",
      note: "Exploring real-time synchronization, session reconnections, and persistent state machines.",
      description:
        "A Redis-powered multiplayer drawing and guessing game with Socket.IO. Features server-authoritative timers, session-based reconnection, persistent room state, automatic round management, and real-time canvas synchronization.",
      stack: ["Node.js", "TypeScript", "Socket.IO", "Redis", "Express"],
      github: "https://github.com/abhijit1859/isKribble",
      live: "https://is-kribble.vercel.app",
      image: isKribble,
    },
    {
      num: "02",
      title: "PrepGrid",
      note: "Hackathon first-prize winner focused on AI-powered personalized study plans.",
      description:
        "Developed an AI-driven platform that analyzes user career goals and generates structured DSA, system design, and core subject preparation paths. Delivered the complete product from whiteboard logic to functional deployment within the 36-hour hackathon timeline.",
      stack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/abhijit1859",
      live: "https://prepgrid-pearl.vercel.app/",
      image: prepgrid,
    },
    {
      num: "03",
      title: "PixelTown",
      note: "Exploring spatial grid networking layers and peer-to-peer audio/video routing.",
      description:
        "A 2D multiplayer virtual world where users navigate a shared canvas, interact with nearby users in real-time, and auto-join dynamic video calls. Implemented proximity-based coordinate routing, WebRTC peer matching, and room state sync.",
      stack: ["Next.js", "TypeScript", "WebRTC", "Socket.IO", "Node.js"],
      github: "https://github.com/abhijit1859/PixelTown",
      live: "https://github.com/abhijit1859/PixelTown",
      image: pixeltown,
      status: "current",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950/20 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Selected Work
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Engineering systems by building them from first principles.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I build projects because I want to understand how they work internally. Here are some key architectures I have designed and deployed.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="
                group
                grid grid-cols-1 lg:grid-cols-12
                gap-8 lg:gap-12
                items-center
                p-6 sm:p-8 lg:p-10
                rounded-2xl
                bg-card/40 backdrop-blur-sm
                border border-border
                hover:border-foreground/15
                transition-all duration-300
              "
            >
              {/* Left Column: Image Container */}
              <div className="lg:col-span-5 relative w-full h-auto rounded-xl overflow-hidden border border-border bg-background shadow-xs">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 border border-black/5 dark:border-white/5 rounded-xl pointer-events-none z-10"></div>
              </div>

              {/* Right Column: Project Info */}
              <div className="lg:col-span-7 flex flex-col justify-center">

                <div className="mb-4 pl-4 border-l border-border">
                  <p className="text-sm font-medium text-muted-foreground italic">
                    "{project.note}"
                  </p>
                </div>

                {/* Title Container with serial number and optional badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-serif italic text-2xl text-muted-foreground/30 font-bold">
                    {project.num}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  {project.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 shadow-xs animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-lg bg-background text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <BsGithub size={16} className="transition-transform group-hover/link:-translate-y-0.5" />
                    <span>View Source</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    <span>Live Demo</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}