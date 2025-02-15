'use client'
import DivAnimateX from "../utils/DivAnimateX";

const BlogNewsletter = () => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="newsletter-form">
        <h4>Subscribe for get updates</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies quam nisi my business
        </p>
        <form action="#" className="subscribe">
          <input
            type="text"
            className="subscribe__input"
            placeholder="Email Address"
          />
          <button type="button" className="sub_btn">
            Subscribe
          </button>
        </form>
      </div>
    </DivAnimateX>
  );
};

export default BlogNewsletter;
