 'use client'
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
 
import FaqSection from "../../components/faq/FaqSection";
 
import Layout from "../../components/layout/Layout";

const FaqPage = () => {
  return (
    <main className="eduleb-faq-main">
      <Layout>
        <BreadCrumbSection currentPage="FAQ" />
        <FaqSection />
      </Layout>
    </main>
  );
};

export default FaqPage;
