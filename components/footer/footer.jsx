export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-[var(--color-text-subtle)]">
          © {new Date().getFullYear()} Pichetphong. Built with Next.js & Tailwind.
        </p>
        <a
          href="#about"
          className="font-mono text-xs text-[var(--color-text-subtle)] hover:text-[var(--color-accent)] transition-colors"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
