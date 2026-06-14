"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BlogsPage() {
  const posts = [
    {
      title: "Building a Redis-Backed Reconnection Protocol for Real-Time Canvas Engines",
      slug: "redis-reconnection-protocol-canvas",
      date: "June 2026",
      readTime: "8 min read",
      category: "Real-Time Systems",
      teaser: "A deep dive into server-authoritative game loops, WebSocket connection states, and how we leverage Redis hashes to allow game rooms to survive clients dropping off and reconnecting within strict session windows.",
      status: "Drafting",
    },
    {
      title: "Why Go's Garbage Collector is Excellent for High-Throughput WebSockets (And How to Optimise It)",
      slug: "golang-gc-websockets",
      date: "May 2026",
      readTime: "11 min read",
      category: "Go & Systems",
      teaser: " WebSocket connections generate millions of small memory allocations. This article outlines our transition from standard pointers to buffer pools (sync.Pool) to minimize GC mark-and-sweep latency spikes.",
      status: "Drafting",
    },
    {
      title: "Architecting a 2D Proximity Grid with WebRTC and Spatial Coordinate Routing",
      slug: "spatial-grid-webrtc-routing",
      date: "March 2026",
      readTime: "14 min read",
      category: "Networking",
      teaser: "How we mapped coordinates in a virtual world to create dynamic audio-video channels between players, and optimized spatial index checking to prevent broadcast storms in dense coordinate segments.",
      status: "Preview",
    },
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

        {/* Page Header */}
        <header className="border-b border-border pb-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Articles
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Writing & Thoughts
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Technical write-ups exploring distributed systems, low-latency architectures, and things I learn while building infrastructure.
          </p>
        </header>

        {/* Blog Post List */}
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group relative flex flex-col items-start">
              {/* Meta information row */}
              <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                <span className="text-primary font-serif italic text-sm">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.readTime}
                </span>
              </div>

              {/* Title with Serif font */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight mb-4">
                {post.title}
              </h2>

              {/* Teaser Description */}
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 font-sans">
                {post.teaser}
              </p>

              {/* Action row with conditional status tag */}
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  {post.status}
                </span>
                <span className="text-sm font-semibold text-primary group-hover:underline">
                  Coming soon &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}