'use client'
import NumberCounter from "../utils/NumberCounter";
import DivAnimateY from "../utils/DivAnimateY";

const CounterSection = () => {
  return (
    <section className="overflow-hidden count_area counter_feature z-10 px-8  mb-0">
      <div className=" px-[3vw]">
        <DivAnimateY className="row g-4">
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter   text-white">
              <span className="ti-folder sc_one"></span>
              <NumberCounter
                number={134}
                durationToComplete={2}
                className="counter-num text-white"
              />
              <p>Our Online Course</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter text-white">
              <span className="ti-medall-alt sc_two"></span>
              <NumberCounter
                number={299}
                durationToComplete={2}
                className="counter-num text-white"
              />
              <p>Academic Programs</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter text-white">
              <span className="ti-id-badge sc_three  "></span>
              <NumberCounter
                number={684}
                durationToComplete={2}
                className="counter-num text-white"
              />
              <p>Certified Students</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div className="single-counter text-white">
              <span className="ti-user sc_four"></span>
              <NumberCounter
                number={941}
                durationToComplete={2}
                className="counter-num text-white"
              />
              <p>Enrolled Students</p>
            </div>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default CounterSection;
