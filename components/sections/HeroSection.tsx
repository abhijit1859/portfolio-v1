"use client"

import Image from "next/image"
import profilePhoto from "../../public/profile.jpg"
import { ArrowRight, Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-22 bg-background overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-3">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-2 text-sm text-teal-400 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            Available for work
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              Full Stack
              <span className="block text-teal-400">
                Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Backend engineer focused on building scalable systems using{" "}
              <span className="text-foreground font-medium">
                Java, Go, Kafka, Redis, and modern cloud architecture.
              </span>{" "}
              I enjoy understanding systems deeply and building things from
              scratch while sharing my learnings through technical writing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            
            <a
              href="#projects"
              className="
              group inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              bg-teal-500
              text-black
              font-semibold
              hover:bg-teal-400
              transition-all duration-300
              shadow-lg shadow-teal-500/20
              hover:scale-[1.02]
              "
            >
              View Projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/resume.pdf"
              className="
              inline-flex items-center gap-2
              px-6 py-3 rounded-xl
              border border-border
              bg-card/50
              backdrop-blur-md
              hover:border-teal-500/40
              hover:text-teal-400
              transition-all duration-300
              hover:bg-teal-500/5
              "
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">
          
          {/* Glow */}
          <div className="absolute h-[300px] w-[300px] rounded-full bg-teal-500/20 blur-3xl" />

          {/* Card */}
          <div
            className="
            relative group
            rounded-3xl
            border border-white/10
            bg-card/60
            backdrop-blur-xl
            p-4
            shadow-2xl
            transition-all duration-500
            hover:-translate-y-2
            "
          >
            
            {/* Image Wrapper */}
            <div
              className="
              relative overflow-hidden
              rounded-2xl
              "
            >
              <Image
                src={profilePhoto}
                alt="Profile"
                priority
                width={360}
                height={420}
                className="
                object-cover
                w-[320px]
                h-[380px]
                md:w-[360px]
                md:h-[420px]
                transition-transform duration-700
                group-hover:scale-105
                "
              />
            </div>

            {/* Floating Card */}
            <div
              className="
              absolute -bottom-5 -left-5
              rounded-2xl
              border border-white/10
              bg-background/80
              backdrop-blur-xl
              px-5 py-4
              shadow-xl
              "
            >
              <p className="text-sm text-muted-foreground">
                Building scalable backend systems
              </p>

              <h3 className="text-base font-semibold text-teal-400">
                Nodejs • Go • Cloud
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}