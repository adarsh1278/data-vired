import Link from "next/link";
import { blogData } from "../../data/data";
import DivAnimateY from "../utils/DivAnimateY";

const BlogSection = ({ showHeader, endIndex }) => {
  return (
    <section id="blog" className="overflow-hidden blog_area section-padding">
      <DivAnimateY className="container">
        {showHeader && (
          <div className="text-center section-title">
            <h2>Latest Blog & news</h2>
            <p>
              We offer a brand new approach to the most basic learning
              paradigms. Choose from a wide range of learning options and gain
              new skills! Our school is known for it.
            </p>
          </div>
        )}
        <div className="row g-4">
          {blogData.slice(0, endIndex).map((item) => (
            <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="single_blog">
                <img src={item.img} className="img-fluid" alt="image" />
                <div className="content_box">
                  <span>
                    {item.date} | <Link href="/blog">{item.category}</Link>
                  </span>
                  <h2>
                    <Link href={item.slug ? `/blog/${item.slug}` : "#"}>
                      {item.title}
                    </Link>
                  </h2>
                  <Link href={item.slug ? `/blog/${item.slug}` : "#"} className="btn_one">
                    Read More <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default BlogSection;
