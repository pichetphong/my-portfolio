const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'Python', icon: '/icons/python.svg' },
      { name: 'JavaScript', icon: '/icons/javascript.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'Java', icon: '/icons/java.svg' },
      { name: 'SQL', icon: '/icons/sql.svg' },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'Odoo', icon: null },
      { name: 'Next.js', icon: '/icons/nextjs.svg' },
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Node.js', icon: '/icons/nodejs.svg' },
      { name: 'Spring Boot', icon: '/icons/springboot.svg' },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
      { name: 'MongoDB', icon: '/icons/mongodb.svg' },
      { name: 'Firebase', icon: '/icons/firebase.svg' },
    ],
  },
  {
    label: 'Tools',
    items: [
      { name: 'Docker', icon: '/icons/docker.svg' },
      { name: 'Git', icon: '/icons/git.svg' },
      { name: 'GitHub', icon: '/icons/github.svg' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader eyebrow="02 — Stack" title="Technical Skills" />

        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((group) => (
            <div key={group.label} className="glass glass-hover rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-[var(--color-accent)]">
                  {group.label.toLowerCase()}
                </span>
                <span className="h-px flex-1 bg-[var(--color-border)]" />
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.04)] border border-[var(--color-border)] text-sm text-[var(--color-text)]"
                  >
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} className="w-4 h-4" />
                    ) : (
                      <span className="w-4 h-4 inline-flex items-center justify-center text-[var(--color-accent)] font-mono text-[10px]">
                        ◆
                      </span>
                    )}
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-[var(--color-accent)] mb-3 tracking-wider uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient">{title}</h2>
    </div>
  );
}
