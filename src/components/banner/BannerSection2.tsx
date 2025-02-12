import DivAnimateX from "../utils/DivAnimateX";

const BannerSection2 = () => {
  return (
    <section
      className="home_bg hb_height"
      style={{
        backgroundImage: "url(assets/img/bg/home-bg2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row overflow-hidden">
          <div className="col-lg-6 col-sm-12 col-xs-12 d-none d-lg-block">
            <div className="hero-text-img2">
              <img
                src="assets/img/home-img1.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <div className="hero-text2 ht_top">
              <h1>
                Explore Our <span>14000+</span> Online courses for all
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                consectetur adipiscing elit tempor ut labore
              </p>
            </div>
            <div className="home_sb2">
              <form action="#" className="banner_subs2">
                <input
                  type="text"
                  className="form-control home_si2"
                  placeholder="Search your course here"
                  required
                />
                <button type="button" className="subscribe__btn">
                  Search <i className="fa fa-paper-plane-o"></i>
                </button>
              </form>
            </div>
            <div className="home_tag">
              <span>Popular Topic:</span>
              <a href="#">Design, </a>
              <a href="#">Development, </a>
              <a href="#">Graphics, </a>
              <a href="#">Marketing </a>
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
