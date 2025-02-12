import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link to="/">
                <img src="/assets/img/logo.png" alt="" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim.
              </p>
              <div className="social_profile">
                <ul>
                  <li>
                    <Link to="#" className="f_facebook">
                      <i className="ti-facebook" title="Facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="f_twitter">
                      <i className="ti-twitter" title="Twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="f_instagram">
                      <i className="ti-instagram" title="Instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="f_linkedin">
                      <i className="ti-linkedin" title="LinkedIn"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>About Eduleb</h4>
              <ul>
                <li>
                  <Link to="#">About us</Link>
                </li>
                <li>
                  <Link to="#">Instructor Registration</Link>
                </li>
                <li>
                  <Link to="#">Become A Teacher</Link>
                </li>
                <li>
                  <Link to="#">All Instrustors</Link>
                </li>
                <li>
                  <Link to="#">Asked Question</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Popular Courese</h4>
              <ul>
                <li>
                  <Link to="#">Development</Link>
                </li>
                <li>
                  <Link to="#">Arts & design</Link>
                </li>
                <li>
                  <Link to="#">Visual Design</Link>
                </li>
                <li>
                  <Link to="#">Graphic Design</Link>
                </li>
                <li>
                  <Link to="#">Code Inspection</Link>
                </li>
                <li>
                  <Link to="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Contact Info</h4>
              <div className="sf_contact">
                <span className="ti-map"></span>
                <p>2570 Quadra Street Victoria Road, New York, Canada</p>
              </div>
              <div className="sf_contact">
                <span className="ti-mobile"></span>
                <p>+88 457 845 695</p>
              </div>
              <div className="sf_contact">
                <span className="ti-mobile"></span>
                <p>
                  <Link to="tel:+88457845695">Contact Whatsapp</Link>
                </p>
              </div>
              <div className="sf_contact">
                <span className="ti-email"></span>
                <p>example@yourmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Download App</h4>
              <p>Download our app from app store and goole play store.</p>
              <Link to="#">
                <img
                  src="/assets/img/google-play.jpg"
                  className="foot_img mb-3"
                  alt=""
                />
              </Link>
              <Link to="#">
                <img
                  src="/assets/img/app-store.jpg"
                  className="foot_img"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
