'use client'
import AuthSection from "../../components/auth/AuthSection";
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
import Layout from "../../components/layout/Layout";

const SignInPage = () => {
  return (
    <main className="eduleb-sign-up-main">
      <Layout>
        <BreadCrumbSection currentPage="Sign In" />
        <AuthSection login />
      </Layout>
    </main>
  );
};

export default SignInPage;
