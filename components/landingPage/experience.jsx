const experiences = [
  {
    role: 'Odoo Developer',
    company: 'Independent / Freelance',
    period: '2025 — Present',
    summary:
      'Designing and delivering custom Odoo modules across multiple business domains. Hands-on with Odoo 17, 18, and 19 — including version upgrade migrations.',
    points: [
      'Built custom Odoo modules in Python: models, business logic, computed fields, automated actions, and report generation.',
      'Extended Odoo views via XML inheritance and developed frontend widgets using OWL framework and JavaScript.',
      'Designed PostgreSQL schemas, optimized queries, and integrated Odoo with external services through REST APIs.',
      'Performed version upgrades and refactoring across Odoo 17 → 18 → 19, ensuring backward compatibility and clean migrations.',
    ],
    tags: ['Odoo', 'Python', 'XML', 'OWL', 'PostgreSQL'],
  },
  {
    role: 'Backend Developer Intern',
    company: 'SS L Logistics Co., Ltd.',
    period: 'May — Aug 2024',
    summary:
      'Developed scalable RESTful APIs to support a sales management system and integrated them with a Next.js frontend.',
    points: [
      'Designed and implemented RESTful APIs using Firebase as a real-time NoSQL database.',
      'Integrated backend APIs with a Next.js frontend, focusing on performance and developer experience.',
      'Collaborated in an Agile team using Git and GitHub for version control and code reviews.',
    ],
    tags: ['Next.js', 'Firebase', 'REST API', 'Agile'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="font-mono text-xs text-[var(--color-accent)] mb-3 tracking-wider uppercase">
            03 — Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-border)] via-[var(--color-border)] to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <article key={exp.role + exp.period} className="relative pl-10 md:pl-14">
                <div className="absolute left-0 top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                </div>

                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-text)]">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-subtle)] shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[var(--color-text-muted)] mb-5 leading-relaxed">
                    {exp.summary}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm text-[var(--color-text-muted)] leading-relaxed"
                      >
                        <span className="text-[var(--color-accent)] mt-1 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md font-mono text-[11px] bg-[rgba(52,211,153,0.08)] text-[var(--color-accent)] border border-[rgba(52,211,153,0.2)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
