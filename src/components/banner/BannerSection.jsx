'use client'
import DivAnimateX from "../utils/DivAnimateX";
import NumberCounter from "../utils/NumberCounter";

const BannerSection = () => {
  return (
    <section className="overflow-hidden relative pb-0 mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <DivAnimateX position={-60} className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center z-10">
            <p className="text-orange-500 font-medium mb-2">Learn from Experts, Master the Future</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Your Pathway to a High-Paying Career Starts Here</h1>
            <p className="text-gray-600 mb-8">
              Unlock 100% placement support and step into the most in-demand roles of the 21st century with our structured, interview-focused training.
            </p>
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors">
                Explore courses
              </button>
            </div>
          </DivAnimateX>

          <DivAnimateX position={60} className="w-full md:w-1/2 flex justify-center items-center m-0 p-0">
            <div className="relative w-full lg:w-120 overflow-visible h-auto">
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