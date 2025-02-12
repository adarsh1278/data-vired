import AuthSection from "../components/auth/AuthSection";
import BreadCrumbSection from "../components/breadcrumb/BreadCrumbSection";
import Layout from "../components/layout/Layout";

const SignUpPage = () => {
  return (
    <main className="eduleb-sign-up-main">
      <Layout>
        <BreadCrumbSection currentPage="Sign Up" />
        <AuthSection />
      </Layout>
    </main>
  );
};

export default SignUpPage;
