'use client'
import { faqData } from "../../data/data";
import { FaqType } from "../../types";
import { useState } from "react";
import DivAnimateX from "../utils/DivAnimateX";

const FaqSection = () => {
  const [openAccordion, setOpenAccordion] = useState<number>(1);
  const toggleAccordion = (accodionId) => {
    setOpenAccordion(accodionId);
  };
  return (
    <section className="faq_area section-padding">
      <div className="container">
        <div className="overflow-hidden row justify-content-center">
          <DivAnimateX position={-60} className="col-lg-7 col-sm-12 col-xs-12">
            <div className="custom-accordion" id="custom-accordionExample">
              {faqData.map((item) => (
                <div
                  className={`custom-accordion-item  ${
                    openAccordion === item.id ? "show" : ""
                  }`}
                  key={item.id}
                >
                  <button
                    className="custom-accordion-button"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    <h2 className="custom-accordion-header" id="headingOne">
                      {item.question}
                    </h2>
                  </button>
                  <div className="custom-accordion-collapse">
                    <div className="custom-accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-5 col-sm-12 col-xs-12">
            <div className="faq_img">
              <img src="assets/img/faq.jpg" alt="faq image" />
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
