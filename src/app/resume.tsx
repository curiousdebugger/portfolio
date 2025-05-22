export default function Resume() {
  return (
    <section id="resume" className="w-full max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[var(--primary)]">
        Resume
      </h2>
      <div className="flex flex-col items-center gap-4">
        <a
          href="/Kshitij_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-[var(--primary)] text-[var(--background)] px-6 py-2 font-semibold hover:bg-[color:var(--primary-dark)] transition-colors"
        >
          View / Download PDF
        </a>
        <div className="mt-6 w-full text-center text-[var(--foreground)]/80">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <ul className="mb-4">
            <li>Freelance Full-Stack Developer (2024–Present)</li>
            <li>
              Specialist Software Engineer (Paramount Pictures), LTIMindtree
              (2021–Present)
            </li>
            <li>Programmer Analyst (ViacomCBS), Dotcom Team LLC (2018–2021)</li>
            <li>
              Junior Frontend Developer (Viacom Inc), Insight Global (2017–2018)
            </li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Education</h3>
          <ul>
            <li>
              Master in Computer Science, New York Institute Of Technology.
            </li>
            <li>Bachelor Of Computer Engineer, Mumbai University.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
