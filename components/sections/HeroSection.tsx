"use client";

import Image from "next/image";
import profilePhoto from "../../public/profile.jpg";
import { ArrowRight, Download   } from "lucide-react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
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
        bg-zinc-50 dark:bg-black
        overflow-hidden
      "
    >
      {/* Interesting Grid Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.2] dark:opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #808080 1px, transparent 1px),
            linear-gradient(to bottom, #808080 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 20%, transparent 75%)"
        }}
      />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/5 dark:bg-zinc-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-6xl grid md:grid-cols-2 md:gap-20 items-center relative z-10">
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Work</span>
          </div>

          {/* Headings */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              <span className="block text-zinc-900 dark:text-white">
                Building Scalable
              </span>
              <span className="block text-zinc-500 dark:text-zinc-400">
                Backend Systems.
              </span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Software engineer focused on distributed architecture and AI-powered
              products. Experienced in constructing robust applications using Go,
              Node.js, Kafka, and modern cloud infrastructure.
            </p>
          </div>

          {/* CTA Buttons & Social Links Container */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer">
                View Projects <ArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
              </button>
              <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 cursor-pointer">
                <Download className="transition-transform group-hover:translate-y-1" size={18} />
                Download Resume
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-5 pt-2 pl-1">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-[#0077B5] dark:hover:text-[#0077B5] transition-colors"
                aria-label="LinkedIn"
              >
                <CiLinkedin size={22} fill="currentColor" className="stroke-[1.5]" />
              </a>
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <BsTwitterX size={22} fill="currentColor" className="stroke-none" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Image Grid Profile */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
             <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/50 z-0"></div>

             <Image
              src={profilePhoto}
              alt="profile-photo"
              className="relative z-10 object-cover rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-transform duration-500 hover:-translate-y-1 w-75 h-95 sm:w-85 sm:h-105 md:w-95 md:h-115"
            />
          </div>
        </div>
      </div>
    </section>
  );
}