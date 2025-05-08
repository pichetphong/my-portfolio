export default function SectionFive() {
  return (
    <section id="sectionFive" className="py-12 bg-base-100 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Bachelor’s Final Project
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        AI Meal Planning System | Full-stack Web Application
      </p>
      <div className="max-w-4xl mx-auto text-left sm:text-center">
        <p className="text-gray-700 mb-4">
          A web-based meal planning system using AI to generate daily
          nutrition-based meal plans for regular exercisers.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Key Features:
        </h3>
        <ul className="list-disc list-inside text-gray-700 mb-6 sm:list-none">
          <li>
            Personalized meal generation based on user input (age, weight, goal,
            activity level)
          </li>
          <li>
            Macronutrient tracking (calories, protein, fat, carbs) with dynamic
            ingredient selection
          </li>
          <li>Responsive UI and modern component-based interface</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Technology Stack:
        </h3>
        <ul className="list-disc list-inside text-gray-700 sm:list-none">
          <li>Frontend: Next.js, Tailwind CSS, ShadCN/UI</li>
          <li>Backend: Next.js API Routes, NextAuth.js</li>
          <li>Database: Prisma ORM, PostgreSQL (via Docker)</li>
          <li>AI Integration: API (OpenAI)</li>
        </ul>
      </div>

      {/* พื้นที่สำหรับวิดีโอ YouTube */}
      <div className="mt-8 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tnMxEobQdj4"
          title="AI Meal Planning System Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
