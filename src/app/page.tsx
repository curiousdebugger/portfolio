import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <>
      <nav className="w-full flex justify-center items-center gap-6 py-4 bg-[var(--background)]/80 backdrop-blur sticky top-0 z-40 border-b border-[var(--primary)]/10">
        <div className="flex items-center gap-6">
          {[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#projects" },
            { label: "About", href: "#about" },
            { label: "Contact", href: "#contact" },
            { label: "Resume", href: "#resume" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--primary)] hover:underline underline-offset-4 font-medium px-2 py-1 rounded transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>
      <main
        id="home"
        className="flex flex-col items-center justify-center min-h-screen gap-8 bg-[var(--background)] text-[var(--primary)] transition-colors"
      >
        <div className="text-center space-y-4 pt-16 pb-8">
          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[var(--primary)]/20">
            <img
              src="/profile_photo.jpeg"
              alt="Kshitij Rangari"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">K S H I T I J </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-[var(--primary)]">
            Freelance Full-Stack Developer & AI Engineer
          </h2>
          <div className="flex flex-col items-center gap-4 mt-2">
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/curiousdebugger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kshitij-rangari-373139a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
            <a
              href="/Kshitij_Resume.pdf"
              download
              className="px-4 py-2 text-sm font-medium text-[var(--primary)] border border-[var(--primary)] rounded-md hover:bg-[var(--primary)] hover:text-[var(--background)] transition-colors"
            >
              Download Resume
            </a>
          </div>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[var(--foreground)]/80">
            I build modern, performant web applications with a focus on clean
            design and seamless user experience.
          </p>
        </div>
        <Projects />
        <About />
        <Contact />
        <Resume />
      </main>
    </>
  );
}
