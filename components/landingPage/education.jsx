export default function Education() {
  return (
    <section id="education" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-[var(--color-accent)] mb-3 tracking-wider uppercase">
            04 — Education
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">
            Education
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-7 max-w-3xl">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-[var(--color-text)]">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                University of the Thai Chamber of Commerce
              </p>
            </div>
            <span className="font-mono text-xs text-[var(--color-text-subtle)] shrink-0">
              2021 — 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
