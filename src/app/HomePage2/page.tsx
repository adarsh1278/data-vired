 'use client'
import AboutSection from "../../components/about/AboutSection";
 
import BannerSection2 from "../../components/banner/BannerSection2";
 
import BlogSection from "../../components/blog/BlogSection";
 
import CategorySection3 from "../../components/category/CategorySection3";
 
import CounterSection from "../../components/counter/CounterSection";
 
import CourseSection from "../../components/course/CourseSection";
 
import FreeCourseSection from "../../components/course/FreeCourseSection";
 
import FooterCopyright from "../../components/footer/FooterCopyright";
 
import FooterSection from "../../components/footer/FooterSection";
 
import HeaderSection from "../../components/header/HeaderSection";
 
import PartnerSection from "../../components/partner/PartnerSection";
 
import TeamSection from "../../components/team/TeamSection";
 
import TestimonySection2 from "../../components/testimony/TestimonySection2";
 
import VideoSection2 from "../../components/video/VideoSection2";

const HomePage2 = () => {
  return (
    <main className="eduleb-home-2-main">
      <HeaderSection />
      <BannerSection2 />
      <PartnerSection />
      <CategorySection3 />
      <CourseSection showHeader />
      <VideoSection2 />
      <CounterSection />
      <AboutSection />
      <TeamSection />
      <FreeCourseSection />
      <TestimonySection2 style="pb-0" />
      <BlogSection showHeader endIndex={3} />
      <FooterSection />
      <FooterCopyright />
    </main>
  );
};

export default HomePage2;
