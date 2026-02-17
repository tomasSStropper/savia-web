import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import AboutPreview from '../components/sections/AboutPreview';
import ServicesPreview from '../components/sections/ServicesPreview';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import TeamPreview from '../components/sections/TeamPreview';
import BlogPreview from '../components/sections/BlogPreview';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <StatsBar />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <TeamPreview />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default Home;
