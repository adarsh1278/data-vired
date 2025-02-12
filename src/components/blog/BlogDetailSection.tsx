import { BlogType } from "../../types";
import BlogDetails from "./BlogDetails";
import BlogAuthor from "./BlogAuthor";
import BlogComments from "./BlogComments";
import BlogCommentForm from "../form/BlogCommentForm";
import BlogSearchbar from "./BlogSearchbar";
import BlogNewsletter from "../newsletter/BlogNewsletter";
import PopularBlogPosts from "./PopularBlogPosts";
import BlogSocials from "./BlogSocials";
import BlogCategory from "./BlogCategory";
import BlogTags from "./BlogTags";
import BlogBanner from "./BlogBanner";
type Props = {
  blogInfo: BlogType;
};
const BlogDetailSection = ({ blogInfo }: Props) => {
  return (
    <section className="blog-page section-padding">
      <div className="container">
        <div className="row g-4 overflow-hidden">
          <div className="col-lg-7 col-sm-12 col-xs-12">
            <BlogDetails img={blogInfo.img} title={blogInfo.title} />
            <BlogAuthor />
            <BlogComments />
            <BlogCommentForm />
          </div>
          <div className="col-lg-5 col-sm-12 col-xs-12">
            <BlogSearchbar />
            <BlogNewsletter />
            <PopularBlogPosts />
            <BlogSocials />
            <BlogCategory />
            <BlogTags />
            <BlogBanner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
