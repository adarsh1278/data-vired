'use client'
import DivAnimateY from "../utils/DivAnimateY";

const AddressSection = () => {
  return (
    <section className="overflow-hidden address_area section-padding">
      <DivAnimateY className="container">
        <div className="text-center row">
          <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
            <div className="single_address sa_one">
              <i className="ti-map"></i>
              <h4>Our Location</h4>
              <p>
                3481 Melrose Place, Beverly Hills <br /> CA 90210
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
            <div className="single_address sa_two">
              <i className="ti-mobile"></i>
              <h4>Telephone</h4>
              <p>(+1) 517 397 7100</p>
              <p>(+1) 411 315 8138</p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 col-xs-12 no-padding">
            <div className="single_address sa_three">
              <i className="ti-email"></i>
              <h4>Send email</h4>
              <p>Info@example.com</p>
              <p>admin@example.com</p>
            </div>
          </div>
        </div>
      </DivAnimateY>
    </section>
  );
};

export default AddressSection;
