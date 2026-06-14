"use client";

import Image from "next/image";
import Link from "next/link";
import profilePhoto from "../../public/profile.jpg";
import { ArrowRight, FileText } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        relative
        flex items-center
        justify-center
        px-4 sm:px-6 lg:px-8
        py-24
        bg-background
        overflow-hidden
      "
    >
      {/* Editorial Grid Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.35] dark:opacity-[0.5]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 35%, transparent 90%)"
        }}
      />

      {/* Subtle ambient glows for dual-color dynamic lighting */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-primary/10 dark:bg-primary/[0.06] blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-orange-500/5 dark:bg-orange-500/[0.02] blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 dark:bg-emerald-500/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl grid md:grid-cols-2 md:gap-16 items-center relative z-10">
        <div className="space-y-8">
          {/* Work Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 text-xs font-semibold text-muted-foreground shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase">Available for Systems Roles</span>
          </div>

          {/* Editorial Headings */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
              Building high-throughput, <br />
              <span className="font-sans font-light italic text-muted-foreground block mt-1">
                distributed backend systems.
              </span>
            </h1>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
              I am a software engineer focused on distributed architectures, low-latency API layers, and backend developer tooling. I write clean, resilient systems in Go and Node.js, and design event-driven networks with Kafka and Redis.
            </p>
          </div>

          {/* CTA Buttons & Social Links */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                View Projects 
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={15} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/40 text-foreground font-medium hover:bg-secondary transition-all hover:translate-y-[-1px] active:translate-y-0"
              >
                <FileText size={16} className="text-muted-foreground" />
                View Resume
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-5 pt-2 pl-1">
              <a 
                href="https://github.com/abhijit1859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/abhijit-kumar-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <CiLinkedin size={22} className="stroke-[1.5]" />
              </a>
              <a 
                href="https://x.com/abhijit1859" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <BsTwitterX size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image Grid Profile */}
        <div className="relative flex justify-center lg:justify-end mt-12 md:mt-0">
          <div className="relative group">
            {/* Soft decorative shadow block with forest/moss green gradient */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/20 bg-gradient-to-tr from-primary/15 to-emerald-500/5 z-0 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>

            <Image
              src={profilePhoto}
              alt="Abhijit Kumar"
              priority
              className="relative z-10 object-cover rounded-2xl border border-border shadow-sm transition-transform duration-500 group-hover:translate-y-[-2px] w-[260px] h-[330px] sm:w-[300px] sm:h-[380px] md:w-[320px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}