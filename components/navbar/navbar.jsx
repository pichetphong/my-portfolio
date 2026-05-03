'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--color-border)] backdrop-blur-xl bg-[rgba(10,10,10,0.7)]'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
        >
          <span className="text-[var(--color-accent)]">{'>'}</span> pichetphong
          <span className="text-[var(--color-text-subtle)]">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/pichetphong"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 text-sm font-medium text-[var(--color-bg)] bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent-strong)] transition-colors"
            >
              GitHub →
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--color-text)] p-2"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[rgba(10,10,10,0.95)] backdrop-blur-xl">
          <ul className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/pichetphong"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-2 py-3 text-sm text-[var(--color-accent)]"
              >
                GitHub →
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
