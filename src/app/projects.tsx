export default function Projects() {
  const projects = [
    {
      title: "Feather Weather",
      description:
        "A minimal, responsive weather app that uses the OpenWeatherMap API to fetch weather data and display it in a clean and intuitive interface.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://feather-weather.vercel.app/",
    },
    {
      title: "Spektra",
      description:
        "A platform for editing images. A lightweight Lightroom alternative.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "https://spektra-ivory.vercel.app/",
    },
    {
      title: "SceneSound",
      description:
        "A AI based narrative audio stem generator. Create your own audio stems for your videos.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "OpenAI",
        "Python",
        "FastAPI",
        "FFmpeg",
        "Docker",
      ],
      link: "https://honest-perfection-production-c710.up.railway.app/",
    },
    {
      title: "Kshitij Rangari",
      description: "A personal website to showcase my projects and skills.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      link: "#",
    },
  ];
  return (
    <section id="projects" className="w-full max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-[var(--primary)]">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col justify-between h-[150px] rounded-lg border border-[var(--primary)]/10 bg-[var(--background)] p-3 shadow-sm transition-all duration-200 ease-in-out overflow-hidden hover:scale-[1.03] hover:shadow-lg"
          >
            <div className="flex-1 min-h-0">
              <h3 className="text-base font-semibold text-[var(--primary)] truncate">
                {project.title}
              </h3>
              <p className="text-[var(--foreground)]/80 text-xs truncate">
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-mono"
                >
                  {t}
                </span>
              ))}
              <a
                href={project.link}
                className="ml-auto text-xs text-[var(--primary)] underline hover:text-[color:var(--primary-dark)] whitespace-nowrap"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
