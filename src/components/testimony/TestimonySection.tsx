 'use client'
import { testimonyData } from "../../data/data";
 
import { TestimonialType } from "../../types";
 
import { Swiper, SwiperSlide } from "swiper/react";
 
import DivAnimateX from "../utils/DivAnimateX";
type Props = {
  style?: string;
};
const TestimonySection = ({ style }: Props) => {
  return (
    <section className={`testi_area section-padding ${style} overflow-hidden`}>
      <div className="container">
        <DivAnimateX position={-60} className="section-title">
          <h2>
            What Student’s Say To Do <br />
            Their Online Course
          </h2>
        </DivAnimateX>
        <div className="row g-4">
          <DivAnimateX position={-60} className="col-lg-6 col-sm-12 col-xs-12">
            <div className="ab_img">
              <img
                src="assets/img/review.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </DivAnimateX>
          <DivAnimateX className="col-lg-6 col-sm-12 col-xs-12">
            <Swiper
              id="testimonial-slider"
              className="owl-carousel"
              slidesPerView={1}
              spaceBetween={40}
            >
              {testimonyData.map((item: TestimonialType) => (
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
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default TestimonySection;
