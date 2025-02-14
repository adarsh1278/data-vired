 'use client'
import BlogSection from "../../components/blog/BlogSection";
 
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
 
import Layout from "../../components/layout/Layout";

const BlogPage = () => {
  return (
    <main className="eduleb-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="Blog" headerText="Our Blog" />
        <BlogSection endIndex={6} />
      </Layout>
    </main>
  );
};

export default BlogPage;
