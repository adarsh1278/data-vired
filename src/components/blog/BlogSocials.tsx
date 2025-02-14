 'use client'
import DivAnimateX from "../utils/DivAnimateX";

const BlogSocials = () => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="sidebar_title">
        <h4>Follow us</h4>
      </div>
      <div className="single_social">
        <ul>
          <li>
            <div className="social_item b_facebook">
              <a href="#" title="facebook">
                <i className="fa fa-facebook"></i>
                <span className="item-list">150K Likes</span>
              </a>
            </div>
          </li>

          <li>
            <div className="social_item b_twitter">
              <a href="#" title="twitter">
                <i className="fa fa-twitter"></i>
                <span className="item-list">138K Followers</span>
              </a>
            </div>
          </li>

          <li>
            <div className="social_item b_youtube">
              <a href="#" title="youtube">
                <i className="fa fa-youtube"></i>
                <span className="item-list">90K Subscribers</span>
              </a>
            </div>
          </li>

          <li>
            <div className="social_item b_pinterest">
              <a href="#" title="pinterest">
                <i className="fa fa-pinterest"></i>
                <span className="item-list">350K Followers</span>
              </a>
            </div>
          </li>

          <li>
            <div className="social_item b_tumblr">
              <a href="#" title="rss">
                <i className="fa fa-tumblr"></i>
                <span className="item-list">901 Followers</span>
              </a>
            </div>
          </li>

          <li>
            <div className="social_item b_rss">
              <a href="#" title="rss">
                <i className="fa fa-rss"></i>
                <span className="item-list">411 Followers</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </DivAnimateX>
  );
};

export default BlogSocials;
