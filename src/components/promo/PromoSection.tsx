 'use client'
import { Link } from "react-router-dom";
 
import DivAnimateX from "../utils/DivAnimateX";
 
import NumberCounter from "../utils/NumberCounter";

const PromoSection = () => {
  return (
    <section className="ab_area section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_content">
              <h2>Why Choose Us For Your Online Education Courses</h2>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
              <p>
                We offer a brand new approach to the most basic learning
                paradigms. Choose from a wide range of learning options and gain
                new skills! Our school is know.
              </p>
              <ul>
                <li>
                  <span className="ti-check"></span> Get access to{" "}
                  <b>12,000+</b> of our top courses
                </li>
                <li>
                  <span className="ti-check"></span> Popular topic to learn now
                  in our online courses for student
                </li>
                <li>
                  <span className="ti-check"></span> Find the right instructor
                  for you
                </li>
              </ul>
              <Link className="btn_one" to="/course">
                View All Courses <i className="ti-arrow-top-right"></i>
              </Link>
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/about3.png"
                className="img-fluid"
                alt="image"
              />
              <div className="home_ps2">
                <span className="ti-book"></span>
                <NumberCounter number={3300} durationToComplete={3} icon="+" />
                <p>Online Course</p>
              </div>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
