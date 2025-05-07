export default function SectionTwo() {
  const skills = [
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'React.js', icon: '/icons/react.svg' },
    { name: 'Spring Boot', icon: '/icons/springboot.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'SQL', icon: '/icons/sql.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg' },
    { name: 'Firebase', icon: '/icons/firebase.svg' },
    { name: 'Git', icon: '/icons/git.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 shadow-md rounded-lg flex items-center gap-4"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
            <span className="text-gray-700 font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
