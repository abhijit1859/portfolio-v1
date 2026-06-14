"use client"

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar"

export default function GithubHeatmap() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Set initial theme
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    // Observe theme changes on the html element class list
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDarkNow = document.documentElement.classList.contains("dark");
          setTheme(isDarkNow ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col lg:flex-row lg:items-center justify-between
          gap-10
        "
      >
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Activity
          </div>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground mb-4">
            Consistent Execution.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            I enjoy building consistently and documenting ideas through code commits. Tracking backend pipelines, distributed nodes, and compiler experiments.
          </p>
        </div>

        <div
          className="
            flex-1
            flex items-center justify-center
            rounded-2xl
            border border-border
            bg-card/40 backdrop-blur-sm
            p-6 sm:p-8
            overflow-x-auto
          "
        >
          <GitHubCalendar
            username="abhijit1859"
            colorScheme={theme}
            fontSize={12}
            blockSize={10}
            blockMargin={5}
          />
        </div>
      </div>
    </section>
  )
}