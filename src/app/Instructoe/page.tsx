 'use client'
import { useParams } from "react-router-dom";
 
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
 
import Layout from "../../components/layout/Layout";
 
import TeamDetailSection from "../../components/team/TeamDetailSection";
 
import { teamData } from "../../data/data";

const InstructorDetailPage = () => {
  const { slug } = useParams();
  const teamInfo = teamData.find((item) => item.slug === slug);

  return (
    <main className="eduleb-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Instructor Details" />
        {teamInfo && <TeamDetailSection teamInfo={teamInfo} />}
      </Layout>
    </main>
  );
};

export default InstructorDetailPage;
