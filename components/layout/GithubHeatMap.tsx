"use client"

import { GitHubCalendar } from "react-github-calendar"

export default function GithubHeatmap() {
  return (
    <section className=" px-2 py-28">
      <div
        className="
        max-w-6xl mx-auto
        rounded-3xl

        py-24 px-4 sm:px-6 lg:px-8
        overflow-hidden
        flex items-center justify-center
        "
      >

        <div className="mb-10 ">


          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-wider">
            GitHub <br />
          </h2>

          <p className="mt-4 text-muted-foreground max-w-lg leading-relaxed">
            I enjoy building consistently and experimenting with <br /> backend systems,
            distributed architecture, and developer tooling.
          </p>
        </div>

        <div
          className="
           
          rounded-2xl
          border border-border
          bg-background/50
          p-4
          "
        >
          <GitHubCalendar
            username="abhijit1859"
            colorScheme="dark"
            fontSize={12}
            blockSize={10}
            blockMargin={5}
          />
        </div>
      </div>
    </section>
  )
}