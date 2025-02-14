 'use client'
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
 
import CourseSection from "../../components/course/CourseSection";
 
import Layout from "../../components/layout/Layout";

const CoursePage = () => {
  return (
    <main className="eduleb-course-main">
      <Layout>
        <BreadCrumbSection headerText="All Course" currentPage="Course" />
        <CourseSection />
      </Layout>
    </main>
  );
};

export default CoursePage;
