import AboutSection from "../../components/about/AboutSection";
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
import CategorySection from "../../components/category/CategorySection";
import CounterSection from "../../components/counter/CounterSection";
import FreeCourseSection from "../../components/course/FreeCourseSection";
import Layout from "../../components/layout/Layout";
import VideoSection2 from "../../components/video/VideoSection2";

const AboutPage = () => {
  return (
    <main className="eduleb-about-main">
      <Layout>
        <BreadCrumbSection currentPage="About" />
        <CategorySection />
        <AboutSection />
        <VideoSection2 />
        <CounterSection />
        <FreeCourseSection />
       
      </Layout>
    </main>
  );
};

export default AboutPage;
