export default function aboutMe() {
  return (
    <section className="mt-12 flex flex-col md:flex-row items-center justify-between bg-base-100 text-center md:text-left px-6">
      <div className="max-w-lg md:ms-16 md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Hi, I'm Pichetphong
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          A <span className="text-primary">Full-Stack Developer</span>{' '}
          passionate about building scalable and user-friendly applications.
        </p>
        <p className="text-md text-gray-500 mb-6">
          I specialize in JavaScript, TypeScript, React.js, Node.js, and more.
          I'm eager to contribute to innovative projects and grow alongside a
          talented team.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href="#sectionFive" className="btn btn-primary">
            View My Work
          </a>
          <a href="#sectionSix" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src="/images/Pichetphong.jpg"
          alt="Pichetphong"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
