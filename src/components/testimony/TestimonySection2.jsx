'use client'
import { useState, useEffect } from 'react';
import { testimonyData } from "../../data/data";
import DivAnimateX from "../utils/DivAnimateX";
import DivAnimateY from "../utils/DivAnimateY";

const TestimonySection2 = ({ style }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [totalSlides, setTotalSlides] = useState(Math.ceil(testimonyData.length / slidesPerView));

  // Update slidesPerView based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update totalSlides when slidesPerView changes
  useEffect(() => {
    setTotalSlides(Math.ceil(testimonyData.length / slidesPerView));
    // Reset active slide when screen size changes to prevent empty slides
    if (activeSlide >= Math.ceil(testimonyData.length / slidesPerView)) {
      setActiveSlide(0);
    }
  }, [slidesPerView, testimonyData.length, activeSlide]);

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
    <section className="overflow-hidden py-8 md:py-16 pl-7">
      <div className=" mx-auto px-4">
        <DivAnimateX position={-60} className="section-title mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
            What Student's Say About <br className="hidden md:block" />
            Their Online Course
          </h2>
        </DivAnimateX>

        <DivAnimateY className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * (100 / slidesPerView)}%)` }}
            >
              {testimonyData.map((item) => (
                <div
                  className={`px-3 md:px-4 ${slidesPerView === 1 ? 'w-full' : 'w-1/2'} flex-shrink-0`}
                  key={item.id}
                >
                  <div className="bg-white rounded-lg p-4 md:p-8 shadow-md mb-6 relative h-full">
                    {/* Large Quote Icon */}
                    <div className="absolute top-4 left-4">
                      <svg className="w-8 h-8 md:w-12 md:h-12 text-indigo-500 opacity-20" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M30,10 L55,10 L55,35 L37.5,60 L22.5,60 L35,35 L30,35 L30,10 Z M65,10 L90,10 L90,35 L72.5,60 L57.5,60 L70,35 L65,35 L65,10 Z" />
                      </svg>
                    </div>

                    {/* Star Rating */}
                    <div className="flex mb-4 mt-8 md:mt-10">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 relative z-10">{item.testimony}</p>

                    {/* Profile */}
                    <div className="flex items-center mt-auto">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full overflow-hidden mr-3 md:mr-4 flex-shrink-0">
                        <img src={item.img} alt={`${item.name}'s profile`} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-base md:text-lg">{item.name}</h4>
                        <p className="text-gray-500 text-sm md:text-base">{item.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 md:mt-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center mr-4 md:mr-6 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex space-x-2 md:space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 ${activeSlide === index ? 'bg-teal-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center ml-4 md:ml-6 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </DivAnimateY>
      </div>
    </section>
  );
};

export default TestimonySection2;