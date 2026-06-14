"use client";

import Link from "next/link";
import { Mail, MapPin, Printer, ArrowLeft } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950/40 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 print:bg-white print:text-black print:py-0 print:px-0">
      {/* Top action bar - Hidden in Print */}
      <div className="max-w-4xl mx-auto mb-10 flex items-center justify-between no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-colors cursor-pointer"
        >
          <Printer size={16} />
          Print Resume
        </button>
      </div>

      {/* Resume Container */}
      <article className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 border border-border print:border-none shadow-sm rounded-3xl p-8 sm:p-12 lg:p-16 print:p-0 print:shadow-none print:bg-white dark:print:bg-white dark:print:text-black">
        {/* Header Section */}
        <header className="border-b border-border pb-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground print:text-black">
                Abhijit Kumar
              </h1>
              <p className="font-sans text-lg font-medium text-muted-foreground mt-2 print:text-zinc-700">
                Systems & Backend Engineer
              </p>
            </div>
            {/* Meta Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 text-sm font-medium text-muted-foreground print:text-zinc-700">
              <a href="mailto:abhijit1859@gmail.com" className="flex items-center gap-2 hover:text-foreground print:text-black print:no-underline">
                <Mail size={15} />
                <span>abhijit1859@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                <span>India (Available Worldwide)</span>
              </div>
              <a href="https://github.com/abhijit1859" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground print:text-black print:no-underline">
                <FaGithub size={15} />
                <span>github.com/abhijit1859</span>
              </a>
              <a href="https://linkedin.com/in/abhijit-kumar-dev" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground print:text-black print:no-underline">
                <FaLinkedin size={15} />
                <span>linkedin.com/in/abhijit-kumar-dev</span>
              </a>
            </div>
          </div>
        </header>

        {/* Profile Summary */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-4 print:text-black border-l-4 border-zinc-300 pl-3">
            Professional Summary
          </h2>
          <p className="font-sans text-base leading-relaxed text-muted-foreground print:text-zinc-800">
            Systems and Backend Engineer with a deep interest in building high-throughput backend services, distributed systems, and real-time multiplayer networking layers. Experienced in crafting robust, event-driven web applications, custom API gateways, and managing scalable infrastructure using Go, Node.js, Kafka, Redis, and modern containerized deployments. Focuses on writing clean, clean-abstraction code and designing backend architectures that handle real-time synchronization at scale.
          </p>
        </section>

        {/* Core Expertise Grid */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-4 print:text-black border-l-4 border-zinc-300 pl-3">
            Core Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-sans">
            <div>
              <h3 className="text-sm font-bold text-foreground print:text-black uppercase tracking-wider mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground print:text-zinc-800">Go (Golang), TypeScript, JavaScript, SQL (PostgreSQL), Python</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground print:text-black uppercase tracking-wider mb-2">Backend & Distributed</h3>
              <p className="text-sm text-muted-foreground print:text-zinc-800">Node.js (Express, NestJS), Apache Kafka, Redis (Pub/Sub, Caching), WebSockets, WebRTC</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground print:text-black uppercase tracking-wider mb-2">DevOps & Database</h3>
              <p className="text-sm text-muted-foreground print:text-zinc-800">Docker, PostgreSQL, MongoDB, Prisma ORM, AWS (S3, EC2), Git, CI/CD (Jenkins)</p>
            </div>
          </div>
        </section>

        {/* Selected Project Experience */}
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-6 print:text-black border-l-4 border-zinc-300 pl-3">
            Selected Project Architecture
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-bold text-foreground print:text-black">
                  isKribble <span className="font-normal text-muted-foreground text-sm font-sans">— Real-time Multiplayer Engine</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground print:border print:border-zinc-300">Redis & WebSockets</span>
              </div>
              <p className="text-sm text-muted-foreground print:text-zinc-800 mb-2.5">
                Designed and engineered a low-latency, real-time multiplayer drawing and guessing game focused on robust state management.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground print:text-zinc-800 space-y-1.5 pl-2">
                <li>Implemented server-authoritative timers and socket room routing handling up to dozens of parallel active sessions.</li>
                <li>Utilized Redis for session state caching, allowing seamless reconnection and session recovery within a 60-second window.</li>
                <li>Created a fast, synchronized drawing canvas sync algorithm using optimized payload structures over Socket.IO.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-bold text-foreground print:text-black">
                  PixelTown <span className="font-normal text-muted-foreground text-sm font-sans">— Spatial Virtual World Platform</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground print:border print:border-zinc-300">WebRTC & Spatial Room Engine</span>
              </div>
              <p className="text-sm text-muted-foreground print:text-zinc-800 mb-2.5">
                Built a 2D multiplayer virtual world that simulates proximity-based user interactions in a spatial grid.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground print:text-zinc-800 space-y-1.5 pl-2">
                <li>Designed a 2D spatial coordinate routing system to establish and manage peer-to-peer WebRTC video streams between proximate coordinates.</li>
                <li>Optimized player state updates sent over Socket.IO, minimizing broadcast storms in large virtual rooms.</li>
                <li>Constructed robust client room management logic and dynamic asset rendering.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="text-lg font-bold text-foreground print:text-black">
                  PrepGrid <span className="font-normal text-muted-foreground text-sm font-sans">— Personalized Prep Agent Architecture</span>
                </h3>
                <span className="text-xs font-semibold px-2 py-1 rounded bg-secondary text-secondary-foreground print:border print:border-zinc-300">AI Integration & PostgreSQL</span>
              </div>
              <p className="text-sm text-muted-foreground print:text-zinc-800 mb-2.5">
                Architected an AI-driven interview preparation platform designed to generate personalized paths based on user targets.
              </p>
              <ul className="list-disc list-inside text-sm text-muted-foreground print:text-zinc-800 space-y-1.5 pl-2">
                <li>Engineered prompt flow architectures with OpenAI APIs to build consistent, tree-structured study plans.</li>
                <li>Designed relational schema mappings in PostgreSQL using Prisma ORM to track path completion progress.</li>
                <li>Won first place in the hackathon event for full product delivery, deployment, and performance within a strict timeframe.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground mb-4 print:text-black border-l-4 border-zinc-300 pl-3">
            Education
          </h2>
          <div className="flex justify-between items-start font-sans">
            <div>
              <h3 className="text-base font-bold text-foreground print:text-black">Bachelor of Technology (B.Tech) in Computer Science</h3>
              <p className="text-sm text-muted-foreground print:text-zinc-800 mt-1">Specialization in Distributed Systems & Web Architectures</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-semibold text-muted-foreground print:text-zinc-700">2021 — 2025</span>
            </div>
          </div>
        </section>
      </article>

      {/* Print css styling */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          article {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            background-color: white !important;
          }
          .text-muted-foreground {
            color: #4a5568 !important;
          }
          .text-foreground {
            color: black !important;
          }
          h1, h2, h3, h4 {
            color: black !important;
          }
        }
      `}</style>
    </main>
  );
}
