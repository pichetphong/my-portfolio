export default function FeaturedProject() {
  return (
    <section id="projects" className="py-16 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="font-mono text-xs text-[var(--color-accent)] mb-3 tracking-wider uppercase">
            05 — Showcase
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">
            Featured Project
          </h2>
        </div>

        <article className="glass glass-hover rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="p-6 md:p-8">
              <p className="font-mono text-[11px] text-[var(--color-text-subtle)] mb-2 tracking-wider uppercase">
                Bachelor's Final Project · 2024
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-3">
                AI Meal Planning System
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-5 leading-relaxed">
                A web-based meal planning system that uses AI to generate daily nutrition-based
                meal plans for regular exercisers — with macronutrient tracking and dynamic
                ingredient selection.
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'OpenAI'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-[rgba(255,255,255,0.04)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://www.youtube.com/watch?v=tnMxEobQdj4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-strong)] transition-colors"
              >
                Watch demo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </div>

            <div className="relative aspect-video md:aspect-auto md:min-h-[260px] bg-black">
              <iframe
                src="https://www.youtube.com/embed/tnMxEobQdj4"
                title="AI Meal Planning System Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
