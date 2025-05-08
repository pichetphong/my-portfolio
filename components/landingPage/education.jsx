export default function SectionThree() {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the Thai Chamber of Commerce',
      year: '2021 - 2025',
    },
  ];

  return (
    <section className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Education
      </h2>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div key={index} className="p-4 mb-6 shadow-md rounded-lg text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              {edu.degree}
            </h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
