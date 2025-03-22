'use client'
import { partnerLogos } from "../../data/data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateY from "../utils/DivAnimateY";
import Link from "next/link";

const PartnerSection = ({ style }) => {
  return (
    <div className={`partner-logo section-padding ${style} overflow-hidden 0 py-0 `}>
      <div className=" px-[5vw] ">
        <DivAnimateY className="row part_bg g-2">
          <div className="col-md-4">
            <div className="partner_title">
              <h3>
                Helping <span>86,000+</span> global companies take the gloves
                off{" "}
              </h3>
            </div>
          </div>
          <div className="text-center col-md-8">
            <Swiper
              className="partner"
              autoplay={true}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1200: {
                  slidesPerView: 4,
                },
              }}
              modules={[Autoplay]}
            >
              {partnerLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <Link href="#">
                    <img src={logo} alt="image" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </DivAnimateY>
      </div>
    </div>
  );
};

export default PartnerSection;
