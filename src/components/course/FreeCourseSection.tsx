import DivAnimateY from "../utils/DivAnimateY";

const FreeCourseSection = () => {
  return (
    <section className="section-padding insfreecourse overflow-hidden">
      <div className="container">
        <DivAnimateY className="row">
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <div
              className="single_ins"
              style={{
                backgroundImage: "url(assets/img/ins1.png)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="single_ins_content">
                <h4>Build Your Career</h4>
                <h1>Become an Instructor</h1>
                <p>
                  Learn at your own pace, move the between multiple courses.{" "}
                </p>
                <a className="btn_one" href="#">
                  Apply now <i className="ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <div
              className="single_ins"
              style={{
                backgroundImage: "url(assets/img/ins2.png)",
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <div className="single_ins_content">
                <h4>Build Your Career</h4>
                <h1>Get Free Courses</h1>
                <p>
                  Learn at your own pace, move the between multiple courses.{" "}
                </p>
                <a className="btn_one" href="#">
                  Contact now <i className="ti-arrow-top-right"></i>
                </a>
              </div>
            </div>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default FreeCourseSection;
