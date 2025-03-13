'use client'
import React from "react";
import DivAnimateX from "../utils/DivAnimateX";
import DivAnimateY from "../utils/DivAnimateY";

const LearnerBenefit = () => {
  return (
    <section className="w-full  py-5 relative overflow-hidden text-white" style={{
      background: "linear-gradient(to right, #403685, #010101)"
    }}>
      <div className="container mx-auto  px-10 md:px-16 flex flex-col md:flex-row items-center justify-between">
        {/* Left content */}
        <DivAnimateX className="w-full md:w-1/2 text-white mb-10 md:mb-0" duration={0.8} position={-50}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 ml-8 text-white">Learner Benefit</h2>
          <p className="mb-8 text-gray-200 max-w-lg  ml-8">
            With cutting-edge courses, expert mentorship, and practical experience, we 
            empower you to lead in the field of artificial intelligence.
          </p>
          
          <div className="space-y-3 ml-8">
            {["Personalized Learning Classes", "Live Interactive Sessions", "Hands-on-learning", "Exclusive Career Services"].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-5 h-5 mr-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <DivAnimateY className="mt-10" duration={1} position={30}>
            <button className= "bg-orange-400 hover:bg-orange-500 text-white font-medium py-3 px-8 ml-8 rounded-md transition-colors flex items-center">
              View All Courses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </DivAnimateY>
        </DivAnimateX>
        
        {/* Right content - 3D illustration */}
        <DivAnimateX className="w-full md:w-1/2 flex justify-center md:justify-end" duration={1} position={50}>
          <img 
            src="https://s3-alpha-sig.figma.com/img/0889/087f/386c7f89a7863865e07999563a12c520?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Gk-X1vu~xjUCY4Zs3NNe4i4VlyvVbqAD9gohFmptGMiEmxiy7bOqwwv2RiQHO81W6jQOSW1vJvuNSF9EK-9735ZZL5aGG8EzeYeZ-aNtUiP1YsW83uAZe-TvRuQ5idgg7oSqiQfoZmZL-3Z4DTEh~N8jCpQELEBsAwa8wbUPPqKQTjOMMcsRh9H~2~chXtNCxhNRKCdzrLRdpTyo-OxYehv4htvvrfSM2j-Bk5tOvWyhNME4YyA95ul2SybZijZRevNgCDmB9QRdBZ0ut5au8DjBZl5ZUs1LSRzk4S~2iRokh6hLU-3f2DXTXsTxg~SgDPpSqSXQKhkiAe~jQSbvEg__" 
            alt="Student at desk" 
            className="max-w-xs md:max-w-sm lg:max-w-md"
          />
        </DivAnimateX>
      </div>
    </section>
  );
};

export default LearnerBenefit;