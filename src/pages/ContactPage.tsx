import BreadCrumbSection from "../components/breadcrumb/BreadCrumbSection";
import AddressSection from "../components/contact/AddressSection";
import ContactSection from "../components/contact/ContactSection";
import Layout from "../components/layout/Layout";

const ContactPage = () => {
  return (
    <main className="eduleb-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="Contact" headerText="Get In Touch" />
        <AddressSection />
        <ContactSection style="pt-0" />
      </Layout>
    </main>
  );
};

export default ContactPage;
