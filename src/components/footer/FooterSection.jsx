'use client'
import Link from "next/link";

const FooterSection = () => {
  return (
    <div className="footer section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single_footer">
              <Link href="/">
                <img src="/assets/img/logo.png" alt="" />
              </Link>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim.
              </p>
              <div className="social_profile">
                <ul>
                  <li>
                    <Link href="#" className="f_facebook">
                      <i className="ti-facebook" title="Facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_twitter">
                      <i className="ti-twitter" title="Twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_instagram">
                      <i className="ti-instagram" title="Instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="f_linkedin">
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
                  <Link href="#">About us</Link>
                </li>
                <li>
                  <Link href="#">Instructor Registration</Link>
                </li>
                <li>
                  <Link href="#">Become A Teacher</Link>
                </li>
                <li>
                  <Link href="#">All Instrustors</Link>
                </li>
                <li>
                  <Link href="#">Asked Question</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 col-xs-12">
            <div className="single_footer">
              <h4>Popular Courese</h4>
              <ul>
                <li>
                  <Link href="#">Development</Link>
                </li>
                <li>
                  <Link href="#">Arts & design</Link>
                </li>
                <li>
                  <Link href="#">Visual Design</Link>
                </li>
                <li>
                  <Link href="#">Graphic Design</Link>
                </li>
                <li>
                  <Link href="#">Code Inspection</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing</Link>
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
                  <Link href="tel:+88457845695">Contact Whatsapp</Link>
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
              <Link href="#">
                <img
                  src="/assets/img/google-play.jpg"
                  className="mb-3 foot_img"
                  alt=""
                />
              </Link>
              <Link href="#">
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
