'use client';

import SectionOne from '@/components/landingPage/aboutMe';
import SectionTwo from '@/components/landingPage/technicalSkills';
import SectionThree from '@/components/landingPage/education';
import SectionFour from '@/components/landingPage/internship';
import SectionFive from '@/components/landingPage/finalProject';
import SectionSix from '@/components/landingPage/contactMe';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // กำหนดระยะเวลา animation เป็น 1000ms
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <SectionOne />
      </div>
      <div data-aos="fade-right">
        <SectionTwo />
      </div>
      <div data-aos="fade-left">
        <SectionThree />
      </div>
      <div data-aos="zoom-in">
        <SectionFour />
      </div>
      <div data-aos="flip-up">
        <SectionFive />
      </div>
      <div data-aos="fade-up">
        <SectionSix />
      </div>
    </>
  );
}
