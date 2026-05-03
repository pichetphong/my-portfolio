export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-[var(--color-accent)] mb-3 tracking-wider uppercase">
          06 — Contact
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Let's build</span>{' '}
          <span className="text-accent-gradient">something.</span>
        </h2>
        <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
          Open to Odoo development, full-stack engineering, and collaborative projects. Drop a
          message — I'll get back to you soon.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-10">
          <a
            href="mailto:pichetphong.k@gmail.com"
            className="px-6 py-3.5 text-sm font-medium text-[var(--color-bg)] bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent-strong)] transition-colors"
          >
            pichetphong.k@gmail.com
          </a>
          <a
            href="tel:0846494155"
            className="px-6 py-3.5 text-sm font-medium text-[var(--color-text)] glass glass-hover rounded-full"
          >
            084-649-4155
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/pichetphong"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-hover text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 invert opacity-80" />
            github.com/pichetphong
          </a>
        </div>
      </div>
    </section>
  );
}
