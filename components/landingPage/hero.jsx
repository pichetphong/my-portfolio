export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-4rem)] flex items-center px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full glass text-xs font-mono text-[var(--color-text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient block">Hi, I'm</span>
            <span className="text-accent-gradient block">Pichetphong</span>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] mb-4 max-w-xl">
            <span className="text-[var(--color-text)]">Odoo Developer</span> & Full-Stack Engineer
          </p>

          <p className="text-base md:text-lg text-[var(--color-text-subtle)] mb-10 max-w-xl leading-relaxed">
            Building scalable ERP solutions and modern web applications. Specializing in Odoo
            17/18/19, Python, and React — delivering custom modules, integrations, and clean user
            experiences.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="px-6 py-3 text-sm font-medium text-[var(--color-bg)] bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent-strong)] transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-medium text-[var(--color-text)] glass glass-hover rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--color-accent)] rounded-full blur-3xl opacity-20" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-[var(--color-border-strong)] shadow-2xl">
              <img
                src="/images/Pichetphong.jpg"
                alt="Pichetphong"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
