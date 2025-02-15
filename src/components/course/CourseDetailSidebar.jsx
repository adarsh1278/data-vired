'use client'
import Link from "next/link";
import { courseData } from "../../data/data";
import { CourseType } from "../../types";


const CourseDetailSidebar = ({ fee }) => {
  return (
    <>
      <div className="course_features">
        <h3>Course features</h3>
        <ul>
          <li>
            <i className="fa fa-calendar"></i> Course duration <b>10 days</b>
          </li>
          <li>
            <i className="fa fa-user"></i> Total Lectures <b>30</b>
          </li>
          <li>
            <i className="fa fa-user"></i> Total Students <b>1000</b>
          </li>
          <li>
            <i className="fa fa-trophy"></i> Certification <b>YES</b>
          </li>
        </ul>
      </div>
      <div className="event_info_price">
        <h4>Price - {fee === 0 ? "Free" : `${fee}$`}</h4>
      </div>
      <div className="event_info_register">
        <a className="btn_one" href="#">
          Register Today
        </a>
      </div>
      <div className="related_course">
        <h3>Related Course</h3>
        {courseData.slice(0, 3).map((item) => (
          <div className="single_rc" key={item.id}>
            <div className="rc_img">
              <img src={item.img} alt="" />
            </div>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <h4>
              <Link href={`/course/${item.slug}`}>
                {item.title.length > 16
                  ? `${item.title.substring(0, 16)}...`
                  : item.title}
              </Link>
            </h4>
            <span>{item.fee === 0 ? "Free" : `$${item.fee}.00`}</span>
          </div>
        ))}
      </div>
      <div className="sidebar-post mb-30">
        <div className="sidebar_title">
          <h4>CATEGORIES</h4>
        </div>
        <div className="single_category">
          <ul>
            <li>
              <a href="#">
                Education <sup>11</sup>
              </a>
            </li>
            <li>
              <a href="#">
                Ai Content <sup>44</sup>
              </a>
            </li>
            <li>
              <a href="#">
                New Course <sup>33</sup>
              </a>
            </li>
            <li>
              <a href="#">
                Marketing <sup>14</sup>
              </a>
            </li>
            <li>
              <a href="#">
                Software <sup>21</sup>
              </a>
            </li>
            <li>
              <a href="#">
                Design <sup>01</sup>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar-post">
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
      </div>
    </>
  );
};

export default CourseDetailSidebar;
