"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Briefcase, Trophy, Sparkles } from "lucide-react";

export default function ExperiencePage() {
  /*
  const internship = {
    role: "Software Engineering Intern",
    team: "Distributed Platforms Group",
    company: "Stealth Startup",
    location: "Bengaluru, India",
    date: "May 2024 — August 2024",
    description: 
      "Engineered high-concurrency event-driven microservices, database replication layers, and caching topologies. Worked closely with the systems team to design resilient ingestion pipelines handling high-frequency application metrics.",
    bullets: [
      "Designed and deployed parallel ingestion consumers in Go and Kafka, rising processing throughput to 10,000+ events per second and dropping processing latency by 35%.",
      "Created stale-while-revalidate cache decorators on Redis, raising cache hit ratios from 62% to 88% and reducing read traffic on primary database nodes.",
      "Optimized PostgreSQL indexing strategies and partitioned historical ledger databases, lowering long-running query execution times by 40%.",
      "Integrated Prometheus metrics and Grafana alerts across backend services to monitor real-time memory allocations and WebSocket event loops."
    ],
    tech: ["Go (Golang)", "PostgreSQL", "Apache Kafka", "Redis", "Docker", "Prometheus", "Grafana"]
  };
  */

  const hackathons = [
    {
      title: "IIT Bombay Devfusion Hackathon",
      award: "1st Place Winner",
      date: "October 2024",
      description: "Developed PrepGrid, an AI-driven platform that analyzes career goals to generate structured, tree-based DSA, system design, and core subject preparation paths.",
      bullets: [
        "Engineered intelligent prompt flow architectures with OpenAI APIs to construct structured, non-cyclic DSA study paths.",
        "Designed relational schema mappings in PostgreSQL using Prisma ORM to track user progress through generated courses.",
        "Won first place overall out of 150+ teams for complete product delivery, deployment, and performance within the strict 36-hour timeframe."
      ],
      tech: ["Next.js", "TypeScript", "OpenAI APIs", "PostgreSQL", "Prisma"],
      color: "orange"
    },
    {
      title: "IIIT Ranchi Hackathon",
      award: "Best AI Implementation",
      date: "March 2024",
      description: "Built FaceAttend, a cross-platform mobile application that automates classroom student attendance through on-device face capture and machine learning validation.",
      bullets: [
        "Integrated lightweight face detection models directly into a mobile app client, capturing high-quality facial frames with minimal battery overhead.",
        "Designed a secure backend matching API that validates facial embeddings against a database of registered students.",
        "Secured the Best AI Implementation award for high matching accuracy and end-to-end latency under 1.5 seconds."
      ],
      tech: ["React Native", "Python", "ML / Face-Recognition", "FastAPI", "MongoDB"],
      color: "blue"
    }
  ];

  return (
    <main className="min-h-screen bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        <header className="border-b border-border pb-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Background
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Experience & Achievements
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans">
            A selective overview of my professional engineering work, supplemented by competitive hackathon victories.
          </p>
        </header>

        {/* WORK EXPERIENCE SECTION - COMMENTED OUT 
        <section className="mb-20">
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <Briefcase size={18} />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Work Experience
            </h2>
          </div>

          <article className="border border-border/80 hover:border-emerald-500/30 rounded-2xl p-6 sm:p-10 bg-card/25 backdrop-blur-sm shadow-sm transition-all duration-300 group">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-border pb-6 mb-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {internship.role}
                </h3>
                <p className="text-base text-muted-foreground font-medium mt-1">
                  <span className="text-foreground font-semibold">{internship.company}</span> <span className="text-muted-foreground/50 mx-1.5">•</span> {internship.team}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1.5 text-emerald-600/95 dark:text-emerald-400/90">
                  <Calendar size={13} />
                  {internship.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {internship.location}
                </span>
              </div>
            </div>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-sans">
              {internship.description}
            </p>

            <ul className="space-y-3.5 mb-8 pl-1">
              {internship.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-emerald-500/80 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/60">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">Technologies:</span>
              {internship.tech.map((tech) => (
                <span 
                  key={tech} 
                  className="
                    px-2.5 py-1 rounded-md 
                    border border-emerald-500/10 dark:border-emerald-500/5 
                    bg-emerald-500/5 dark:bg-emerald-500/10 
                    text-xs font-medium text-emerald-700 dark:text-emerald-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div> 

          </article> 
        </section> 
        */}

        {/* Section 2: Hackathons & Competitions (Secondary Grid Focus) */}
        <section>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Trophy size={18} />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Hackathons & Wins
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hack, index) => {
              const isOrange = hack.color === "orange";
              return (
                <article 
                  key={index} 
                  className={`
                    border border-border/80 rounded-xl p-6 
                    bg-card/10 backdrop-blur-sm
                    flex flex-col justify-between
                    transition-all duration-300 group
                    ${isOrange ? 'hover:border-orange-500/30' : 'hover:border-blue-500/30'}
                  `}
                >
                  <div>
                    {/* Title & Date */}
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-4">
                      <span className={`font-serif italic text-sm normal-case ${
                        isOrange ? 'text-orange-600 dark:text-orange-400' : 'text-blue-600 dark:text-blue-400'
                      }`}>
                        {hack.award}
                      </span>
                      <span className="text-muted-foreground">{hack.date}</span>
                    </div>

                    <h3 className={`font-serif text-xl font-bold text-foreground leading-tight mb-3 transition-colors duration-300 ${
                      isOrange ? 'group-hover:text-orange-600 dark:group-hover:text-orange-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}>
                      {hack.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-sans">
                      {hack.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {hack.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
                          <span className={`mt-2 w-1 h-1 rounded-full shrink-0 ${
                            isOrange ? 'bg-orange-500/70' : 'bg-blue-500/70'
                          }`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech list */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/40 text-[11px] font-medium text-muted-foreground">
                    <span className="uppercase tracking-wider mr-1 text-[10px]">Stack:</span>
                    {hack.tech.map((tech, tIdx) => (
                      <span key={tech}>
                        {tIdx > 0 && <span className="mx-1">•</span>}
                        <span className="text-foreground">{tech}</span>
                      </span>
                    ))}
                  </div>

                </article>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}