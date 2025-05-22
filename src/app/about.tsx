export default function About() {
  return (
    <section id="about" className="w-full max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[var(--primary)]">
        About Me
      </h2>
      <p className="mb-4 text-base sm:text-lg text-[var(--foreground)]/80 text-center">
        Hi, I'm Kshitij, a passionate freelance full-stack developer with a
        knack for building robust, scalable, and visually appealing web
        applications. I love solving complex problems and turning ideas into
        reality with clean, maintainable code.
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {[
          "JavaScript/TypeScript",
          "React/Next.js",
          "Node.js/Express",
          "Tailwind CSS",
          "MongoDB/PostgreSQL",
          "REST & GraphQL APIs",
          "UI/UX Design",
        ].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-mono"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
