import BreadCrumbSection from "../components/breadcrumb/BreadCrumbSection";
import Layout from "../components/layout/Layout";
import PartnerSection from "../components/partner/PartnerSection";
import PricingSection from "../components/pricing/PricingSection";

const PricingPage = () => {
  return (
    <main className="eduleb-pricing-main">
      <Layout>
        <BreadCrumbSection headerText="Pricing Plan" currentPage="Pricing" />
        <PricingSection />
        <PartnerSection style="pt-0" />
      </Layout>
    </main>
  );
};

export default PricingPage;
