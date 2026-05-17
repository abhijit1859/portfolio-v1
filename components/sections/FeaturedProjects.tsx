export default function FeaturedProjects() {
  const projects = [
    {
      title: "Realtime Chat Platform",
      note:
        "I originally built this because I wanted to understand how Discord-like systems actually scale.",
      description:
        "Explored Kafka, Redis pub/sub, WebSockets, horizontal scaling, and distributed messaging patterns by building everything from scratch.",
      stack: "Next.js / NestJS / Kafka / Redis",
      github: "#",
      live: "#",
      video:
        "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    },

    {
      title: "AI Resume Analyzer",
      note:
        "Started as an experiment around embeddings and semantic search.",
      description:
        "Built a resume analysis workflow using OpenAI APIs to better understand vector search, prompt engineering, and AI product flows.",
      stack: "React / Node.js / OpenAI / Prisma",
      github: "#",
      live: "#",
      video:
        "https://videos.pexels.com/video-files/6963744/6963744-hd_1920_1080_25fps.mp4",
    },

    {
      title: "DevOps Monitoring Dashboard",
      note:
        "Built while learning more about observability and infrastructure.",
      description:
        "Focused on metrics visualization, realtime system monitoring, logging pipelines, and cleaner infrastructure tooling UI.",
      stack: "Next.js / Docker / Grafana / AWS",
      github: "#",
      live: "#",
      video:
        "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
    },
  ]

  return (
    <section className="px-12 py-28" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm text-muted-foreground">
            Selected Projects
          </p>

          <h2
            className="
              mt-3
              text-3xl md:text-5xl
              font-semibold
              tracking-tight
              leading-tight
            "
          >
            Things I built while trying to
            understand systems more deeply.
          </h2>

          <p
            className="
              mt-5
              text-muted-foreground
              leading-relaxed
            "
          >
            Most of my projects start from curiosity rather than ideas for startups.
            Usually I build things because I want to understand how they work internally.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                grid lg:grid-cols-[280px_1fr]
                gap-8
                items-start
              "
            >

              {/* Video */}
              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border border-border
                  bg-card
                "
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="
                    h-[220px]
                    w-full
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-[1.03]
                  "
                >
                  <source
                    src={project.video}
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Content */}
              <div className="pt-1">

                <p
                  className="
                    text-sm
                    text-muted-foreground
                    italic
                  "
                >
                  {project.note}
                </p>

                <h3
                  className="
                    mt-3
                    text-2xl md:text-3xl
                    font-medium
                    tracking-tight
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-5
                    text-muted-foreground
                    leading-relaxed
                    max-w-2xl
                  "
                >
                  {project.description}
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    text-foreground/80
                  "
                >
                  {project.stack}
                </p>

                {/* Links */}
                <div className="flex items-center gap-5 mt-7 text-sm">
                  <a
                    href={project.github}
                    className="
                      text-muted-foreground
                      hover:text-foreground
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="
                      text-muted-foreground
                      hover:text-foreground
                      transition
                    "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}