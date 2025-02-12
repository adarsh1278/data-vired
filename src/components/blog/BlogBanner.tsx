import DivAnimateX from "../utils/DivAnimateX";

const BlogBanner = () => {
  return (
    <DivAnimateX className="sidebar-post">
      <div className="sidebar_title">
        <h4>Ad Banner</h4>
      </div>
      <div className="sidebar-banner">
        <a href="#">
          <img src="/assets/img/blog/banner.jpg" className="img-fluid" alt="" />
        </a>
      </div>
    </DivAnimateX>
  );
};

export default BlogBanner;
