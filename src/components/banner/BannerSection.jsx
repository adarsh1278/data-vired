'use client'
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const BannerSection = () => {
  return (
    <section className="overflow-hidden relative pb-0 mb-0 w-full " >
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <DivAnimateX position={-60} className="w-full  ml-[3vw]   md:w-1/2 flex flex-col justify-center z-10">
            <p className="text-orange-500 font-medium   mb-2 text-sm md:text-base">Learn from Experts, Master the Future</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Your Pathway to a High-Paying Career Starts Here</h1>
            <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-lg">
              Unlock 100% placement support and step into the most in-demand roles of the 21st century with our structured, interview-focused training.
            </p>
            <div className="mt-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors text-sm md:text-base">
                Explore courses
              </button>
            </div>
          </DivAnimateX>

          <DivAnimateX position={60} className="w-full md:w-1/2 flex justify-center items-center m-0 p-0 mt-8 md:mt-0  mr-[200px]">
            <div className="relative w-full max-w-md mx-auto md:max-w-none overflow-visible h-auto">
              {/* Circular background for the image */}
              <img
                src="/lady.png"
                alt="Student with laptop"
                className="relative z-10 w-full h-auto object-contain"
              />
              {/* Floating card - 2K+ Projects */}
            </div>
          </DivAnimateX>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;