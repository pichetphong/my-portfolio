import Hero from '@/components/landingPage/hero';
import Skills from '@/components/landingPage/skills';
import Experience from '@/components/landingPage/experience';
import Education from '@/components/landingPage/education';
import FeaturedProject from '@/components/landingPage/featuredProject';
import Contact from '@/components/landingPage/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <FeaturedProject />
      <Contact />
    </>
  );
}
