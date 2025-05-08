import SectionOne from '@/components/landingPage/aboutMe';
import SectionTwo from '@/components/landingPage/technicalSkills';
import SectionThree from '@/components/landingPage/education';
import SectionFour from '@/components/landingPage/internship';
import SectionFive from '@/components/landingPage/finalProject';
import SectionSix from '@/components/landingPage/contactMe';

export default function Home() {
  return (
    <>
      <SectionOne />
      <aboutMe />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}
