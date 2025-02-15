'use client'
import { testimonyData } from "../../data/data";
import { TestimonialType } from "../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateX from "../utils/DivAnimateX";
import DivAnimateY from "../utils/DivAnimateY";

const TestimonySection2 = ({ style }) => {
  return (
    <section className={`testi_area section-padding ${style} overflow-hidden`}>
      <div className="container">
        <DivAnimateX position={-60} className="section-title">
          <h2>
            What Student’s Say To Do <br />
            Their Online Course
          </h2>
        </DivAnimateX>
        <DivAnimateY className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <Swiper
              id="testimonial-slider2"
              className="owl-carousel"
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonyData.map(() => (
                <SwiperSlide className="testimonial" key={item.id}>
                  <img src="assets/img/quote.png" alt="" />
                  <div className="testimonial_content">
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <i className="ti-star"></i>
                    <p>{item.testimony}</p>
                  </div>
                  <div className="testi_pic_title">
                    <img src={item.img} alt="img" />
                    <h4>{item.name}</h4>
                    <p>{item.company}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default TestimonySection2;
