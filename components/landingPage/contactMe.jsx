export default function SectionSix() {
  return (
    <section id="sectionSix" className="py-12 bg-base-100 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        Contact Me
      </h2>

      <p className="text-lg mx-14 text-gray-600 mb-8">
        I would greatly appreciate the opportunity to further discuss how my
        background and skills align with your team's needs. Please feel free to
        contact me at your convenience.
      </p>

      <div className="flex flex-col items-center gap-4">
        <a
          href="mailto:pichetphong.k@gmail.com"
          className="text-lg text-primary font-medium hover:underline"
        >
          pichetphong.k@gmail.com
        </a>
        <a
          href="tel:0846494155"
          className="text-lg text-primary font-medium hover:underline"
        >
          084-649-4155
        </a>

        <div className="flex gap-6">
          <a
            href="https://github.com/pichetphong"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
