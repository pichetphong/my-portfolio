export default function SectionFour() {
  return (
    <section className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Internship Experience
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-gray-800">
            SS L Logistics Co., Ltd.
          </h3>
          <p className="text-gray-600 mb-2">May 2024 - Aug 2024</p>
          <p className="text-gray-700 mb-4">
            Developed scalable RESTful APIs using Firebase as a real-time NoSQL
            database to support a sales management system. Integrated Next.js
            frontend with efficient backend APIs. Collaborated in Agile teams
            using Git and GitHub for version control.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/Internship.jpeg"
            alt="Internship Experience"
            className="w-80 h-64 md:w-96 md:h-80 rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
