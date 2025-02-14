 'use client'
import { Link } from "react-router-dom";
 
import { courseData } from "../../data/data";
 
import { CourseType } from "../../types";
 
import DivAnimateX from "../utils/DivAnimateX";
 
import DivAnimateY from "../utils/DivAnimateY";
type Props = {
  showHeader?: boolean;
};
const CourseSection = ({ showHeader }: Props) => {
  return (
    <section className="home_course section-padding overflow-hidden">
      <div className="container">
        {showHeader && (
          <div className="row align-items-center section-title">
            <DivAnimateX position={-60} className="col-sm-8 col-xs-12">
              <h2>
                Join with more than <b>80,000+ </b> <br />
                Courses & Learning creators.
              </h2>
            </DivAnimateX>
            <DivAnimateX className="col-sm-4 col-xs-12">
              <div className="cour_btn">
                <Link to="/course" className="btn_one">
                  View all Courses <i className="ti-arrow-top-right"></i>
                </Link>
              </div>
            </DivAnimateX>
          </div>
        )}
        <DivAnimateY className="row g-4">
          {courseData.map((item: CourseType) => (
            <div className="col-lg-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="single_course">
                <div className="single_c_img">
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt="course-image"
                  />
                  <span>{item.category}</span>
                </div>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <h4>
                  <Link to={`/course/${item.slug}`}>{item.title}</Link>
                </h4>
                <p>
                  <span className="ti-book"> </span> {item.course} Course
                </p>
                <p>
                  <span className="ti-alarm-clock"> </span>
                  {item.duration}
                </p>
                <div className="price">
                  Course Fee - {item.fee === 0 ? "free" : item.fee}
                </div>
              </div>
            </div>
          ))}
        </DivAnimateY>
      </div>
    </section>
  );
};

export default CourseSection;
