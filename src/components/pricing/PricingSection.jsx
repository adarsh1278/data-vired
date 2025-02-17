'use client'
import { pricingData } from "../../data/data";

import DivAnimateY from "../utils/DivAnimateY";

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="overflow-hidden pricing-content section-padding"
    >
      <DivAnimateY className="container">
        <div className="text-center row g-4 justify-content-center">
          {pricingData.map((item) => (
            <div className="col-lg-4 col-md-6 col-xs-12" key={item.id}>
              <div
                className={`single-pricing ${
                  item.best ? "single-pricing-white" : ""
                }`}
              >
                <div className="price-head">
                  <h2>{item.plan}</h2>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                {item.best && <span className="price-label">Best</span>}
                <h1 className="price">${item.price}</h1>
                <h5>Monthly</h5>
                <ul>
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <a className="btn_one" href="#">
                  Get start
                </a>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateY>
    </section>
  );
};

export default PricingSection;
