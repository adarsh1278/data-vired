import React, { useState } from "react";
import { alumniData } from "@/data/data";
export default function AlumniCarousel() {
  // Sample alumni data - this would normally be imported


  const [activeSlide, setActiveSlide] = useState(0);
  const slidesPerView = 4; // Number of cards visible in one slide
  const totalSlides = Math.ceil(alumniData.length / slidesPerView);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Updated Section Title & Description */}
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-3">
          Explore and connect with our Alumni
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-3xl mx-auto">
          We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of
          learning options and gain new skills! Our school is know.
        </p>
        
        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex flex-nowrap transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {/* Render each Alumni Card */}
            {alumniData.map((alum) => (
              <div
                key={alum.id}
                className="w-full md:w-1/4 shrink-0 px-3 mb-6"
              >
                <div className="bg-white rounded-lg shadow-md h-full flex flex-col items-center">
                  {/* Blue Header Section */}
                  <div className="bg-[#4634ba] w-full rounded-t-lg p-4 text-center text-white">
                    <h4 className="font-semibold text-white">{alum.preIncubation}</h4>
                    <p className="text-sm mb-7">{alum.date}</p>
                  </div>
                  
                  {/* Profile Image - Positioned to overlap header and body */}
                  <div className="relative -mt-8 mb-2">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
                      alt={alum.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-sm"
                    />
                  </div>

                  {/* Pre-incubation Label */}
                  <p className="text-xs text-gray-500 mb-1">Pre-incubated</p>
                  <h3 className="text-base font-medium mb-3">{alum.name}</h3>
                  
                  {/* Transition Arrow */}
                  <div className="text-orange-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  
                  {/* Post-incubation Label */}
                  <p className="text-xs text-gray-500 mb-1">Post-incubated</p>
                  
                  {/* Company Logo */}
                  <div className="mb-2">
                    <img
                      src="/api/placeholder/120/30"
                      alt="Company Logo"
                      className="h-6 object-contain"
                    />
                  </div>
                  
                  {/* Role */}
                  <p className="font-medium text-sm mb-4">{alum.role}</p>

                  {/* LinkedIn Button */}
                  <button className="mb-6 border border-blue-600 text-blue-600 flex items-center justify-center px-4 py-2 rounded hover:bg-blue-50 transition-colors text-sm w-4/5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-2" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation UI with Circle Buttons */}
          <div className="flex justify-center items-center mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mr-6 hover:bg-gray-50 transition-colors"
              aria-label="Previous Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Improved Bullet Indicators */}
            <div className="flex space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center ml-6 hover:bg-gray-50 transition-colors"
              aria-label="Next Slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}