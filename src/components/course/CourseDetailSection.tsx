import { useState } from "react";
import OverviewContent from "./OverviewContent";
import CurriculumContent from "./CurriculumContent";
import InstructorContent from "./InstructorContent";
import ReviewContent from "./ReviewContent";
import CourseDetailSidebar from "./CourseDetailSidebar";
import { CourseType } from "../../types";
import ImageAnimate from "../utils/ImageAnimate";
import DivAnimateY from "../utils/DivAnimateY";
import DivAnimateX from "../utils/DivAnimateX";
type Props = {
  courseInfo: CourseType;
};
const CourseDetailSection = ({ courseInfo }: Props) => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const toggleTab = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section className="our_event section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="single_event_single">
              <div className="overflow-hidden">
                <ImageAnimate
                  alt="img"
                  className="img-fluid"
                  src={courseInfo.img}
                />
              </div>

              <DivAnimateY className="single_event_text_single">
                <h4>{courseInfo.title}</h4>
                <span>
                  <i className="fa fa-calendar"></i>10 Oct 2024
                </span>
                <span>
                  <i className="fa fa-clock-o"></i>7 days
                </span>
                <span>
                  <i className="fa fa-table"></i>
                  <strong>30 Seats Available</strong>
                </span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </DivAnimateY>
            </div>
            <DivAnimateY className="course-details-content section-bg">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "overview" ? "active" : ""
                    }`}
                    role="button"
                    onClick={() => toggleTab("overview")}
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${
                      activeTab === "curriculum" ? "active" : ""
                    }`}
                    role="button"
                    onClick={() => toggleTab("curriculum")}
                  >
                    Curriculum{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "instructor" ? "active" : ""
                    }`}
                    role="button"
                    onClick={() => toggleTab("instructor")}
                  >
                    instructor
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeTab === "review" ? "active" : ""
                    }`}
                    role="button"
                    onClick={() => toggleTab("review")}
                  >
                    reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className={`tab-pane fade ${
                    activeTab === "overview" ? "show active" : ""
                  }`}
                  id="overview"
                >
                  <OverviewContent />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "curriculum" ? "show active" : ""
                  }`}
                  id="curriculum"
                >
                  <CurriculumContent />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "instructor" ? "show active" : ""
                  }`}
                  id="instructor"
                >
                  <InstructorContent />
                </div>
                <div
                  className={`tab-pane fade ${
                    activeTab === "review" ? "show active" : ""
                  }`}
                  id="reviews"
                >
                  <ReviewContent />
                </div>
              </div>
            </DivAnimateY>
          </div>
          <DivAnimateX className="col-lg-4">
            <CourseDetailSidebar fee={courseInfo.fee} />
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailSection;
