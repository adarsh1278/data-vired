'use client'
import { useParams } from "next/navigation";
import BlogDetailSection from "../../components/blog/BlogDetailSection";
import BreadCrumbSection from "../../components/breadcrumb/BreadCrumbSection";
import Layout from "../../components/layout/Layout";
import { blogData } from "../../data/data";

const BlogDetailPage = () => {
  const { slug } = useParams();

  const blogInfo = blogData.find((item) => item.slug === slug);

  return (
    <main className="eduleb-blog-details-main">
      <Layout>
        <BreadCrumbSection currentPage="Blog Details" />
        {blogInfo && <BlogDetailSection blogInfo={blogInfo} />}
      </Layout>
    </main>
  );
};

export default BlogDetailPage;
