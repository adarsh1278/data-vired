'use client'
import FeaturedProgramsCarousel from "@/components/FeaturedProgramsCarousel";
import AboutSection from "../../components/about/AboutSection";
import BannerSection from "../../components/banner/BannerSection";
import BlogSection from "../../components/blog/BlogSection";
import CategorySection from "../../components/category/CategorySection";
import CategorySection2 from "../../components/category/CategorySection2";
import CounterSection from "../../components/counter/CounterSection";
import CourseSection from "../../components/course/CourseSection";
import FooterCopyright from "../../components/footer/FooterCopyright";
import FooterSection from "../../components/footer/FooterSection";
import HeaderSection from "../../components/header/HeaderSection";
import PartnerSection from "../../components/partner/PartnerSection";
import PromoSection from "../../components/promo/PromoSection";
import TeamSection from "../../components/team/TeamSection";
import TestimonySection from "../../components/testimony/TestimonySection";
import VideoSection from "../../components/video/VideoSection";
import SuccessBanner from "@/components/successBanner";
import WhyChooseUs from "@/components/whyChooseUs";
import LogoCrawler from "@/components/logoCrawl";
import LearnerBenefit from "@/components/Home1Component/learnerBenifits";
import LearningPathway from "@/components/Home1Component/LearningPathway";
import SuccessBanner2 from "@/components/successBanner/succeesBanner2";
import TestimonySection2 from "@/components/testimony/TestimonySection2";
import AlumniCarousel from "@/components/alumini";
import TouchBanner from "@/components/banner/getInTouchBanner";
import WebinarSection from "@/components/webinar";

const HomePage1 = () => {
  return (
    <main className="eduleb-home-1-main">
      {/* <HeaderSection /> */}
      <BannerSection />
      <CounterSection />
      <PartnerSection />

      <FeaturedProgramsCarousel />
      <SuccessBanner />
      <WhyChooseUs />
      <LearnerBenefit />
      <LearningPathway />
      {/* <CategorySection style="pb-0" /> */}
      {/* <AboutSection /> */}
      <CategorySection2 />
      <SuccessBanner2 />
      <TeamSection />

      <TestimonySection2 />
      <AlumniCarousel />
      <WebinarSection />
      <TouchBanner />
      {/* <CourseSection showHeader /> */}

      {/* <VideoSection />

      {/* <PromoSection /> */}
      {/* <TestimonySection style="pb-0" /> */}
      {/* <BlogSection showHeader endIndex={3} /> */}
      <FooterSection />
      <FooterCopyright />
    </main>
  );
};

export default HomePage1;
