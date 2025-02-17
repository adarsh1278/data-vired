'use client'
import { useEffect } from 'react';
import AboutSection from "../../components/about/AboutSection";
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
import CategorySection from "../../components/category/CategorySection";
import CounterSection from "../../components/counter/CounterSection";
import FreeCourseSection from "../../components/course/FreeCourseSection";
import Layout from "../../components/layout/Layout";
import VideoSection2 from "../../components/video/VideoSection2";
import TestimonySection2 from "../../components/testimony/TestimonySection2";

const AboutPage = () => {
  // Add scroll restoration
  useEffect(() => {
    // Restore scroll position on mount
    window.scrollTo(0, 0);

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      // Clean up
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="eduleb-about-main">
      <Layout>
        <div className="page-content">
          <BreadCrumbSection currentPage="About" />
          <CategorySection />
          <AboutSection />
          <VideoSection2 />
          <CounterSection />
          <FreeCourseSection />
          <TestimonySection2 />
        </div>
      </Layout>
    </main>
  );
};
// writing this for pull request
export default AboutPage;