 'use client'
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
 
import Layout from "../../components/layout/Layout";
 
import TeamSection from "../../components/team/TeamSection";

const InstructorPage = () => {
  return (
    <main className="eduleb-instructor-main">
      <Layout>
        <BreadCrumbSection
          headerText="Our Instructor"
          currentPage="Instructor"
        />
        <TeamSection />
      </Layout>
    </main>
  );
};

export default InstructorPage;
