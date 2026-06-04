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
      title: "isKribble",
      note: "Built to explore how real-time multiplayer games handle synchronization, reconnections, and persistent state.",
      description:
        "A Redis-powered multiplayer drawing and guessing game with Socket.IO. Features server-authoritative timers, session-based reconnection, persistent room state, automatic round management, and real-time canvas synchronization.",
      stack: ["Node.js", "TypeScript", "Socket.IO", "Redis", "Express"],
      github: "https://github.com/abhijit1859/isKribble",
      live: "https://is-kribble.vercel.app",
      image: isKribble,
    },
    {
      title: "PrepGrid",
      note: "A hackathon-winning project focused on personalized interview preparation.",
      description:
        "Developed an AI-driven platform that analyzes user goals and generates customized preparation paths, helping students organize DSA, system design, and core subject study plans. Built the complete product from idea to deployment within the hackathon timeline.",
      stack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Tailwind CSS"],
      github: "#",
      live: "https://prepgrid-pearl.vercel.app/",
      image: prepgrid,
    },
    {
      title: "PixelTown",
      note: "Built to explore real-time multiplayer systems, spatial interactions, and peer-to-peer communication.",
      description:
        "A 2D multiplayer virtual world where users can move around a shared map, interact with nearby players, and join live video calls. Implemented real-time player synchronization, WebRTC-based video communication, and room management to create an immersive social experience.",
      stack: ["Next.js", "TypeScript", "WebRTC", "Socket.IO", "Node.js"],
      github: "https://github.com/abhijit1859/PixelTown",
      live: "#",
      image: pixeltown,
      status: "current", // Added status to dynamically target this project
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Selected Projects
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Things I built while trying to understand systems deeply.
          </h2>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Most of my projects start from curiosity rather than ideas for startups.
            Usually, I build things because I want to understand how they work internally.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="
                group
                grid grid-cols-1 lg:grid-cols-12
                gap-8 lg:gap-12
                items-center
                p-4 sm:p-6 lg:p-8
                rounded-3xl
                bg-white dark:bg-zinc-900/50
                border border-zinc-200 dark:border-zinc-800/80
                hover:border-zinc-300 dark:hover:border-zinc-700
                transition-all duration-300
              "
            >
              {/* Left Column: Image Container */}
              <div className="lg:col-span-5 relative w-full h-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-sm bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-black/5 dark:border-white/5 rounded-2xl pointer-events-none z-10"></div>
              </div>

              {/* Right Column: Project Info */}
              <div className="lg:col-span-7 flex flex-col justify-center">

                <div className="mb-5 pl-4 border-l-2 border-zinc-200 dark:border-zinc-700">
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 italic">
                    "{project.note}"
                  </p>
                </div>

                {/* Title Container with conditional badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 shadow-sm animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <a
                    href={project.github}
                    className="group/link flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <BsGithub size={18} className="transition-transform group-hover/link:-translate-y-0.5" />
                    View Source
                  </a>

                  <a
                    href={project.live}
                    className="group/link flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    Live Demo
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