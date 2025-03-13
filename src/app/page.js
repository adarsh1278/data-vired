import React from 'react';

const EducationLandingPage = () => {
  return (
    <div className="w-full  h-fit  bg-red-500 ">
      <div className=" w-full mx-auto">
        <div className="flex flex-col  bg-white md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2  px-10   flex flex-col justify-center">
            <p className="text-orange-500 font-medium mb-2">Learn from Experts, Master the Future</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Your Pathway to a High-Paying Career Starts Here</h1>
            <p className="text-gray-600 mb-6">
              Unlock 100% placement support and step into the most in-demand roles of the 21st century with our structured, interview-focused training.
            </p>
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Explore courses
              </button>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="md:w-1/2 relative">
            <div className="relative h-full">
              {/* Main image with all elements already included */}
              <div className="relative h-full flex items-center justify-center ">
                <img 
                  src="/lady.png" 
                  alt="Student with laptop" 
                  className=" object-cover z-10 relative w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-200">
          <div className="p-6 flex items-center space-x-3 border-r border-gray-200">
            <div className="bg-indigo-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">134</p>
              <p className="text-gray-500 text-sm">Our Online Course</p>
            </div>
          </div>
          
          <div className="p-6 flex items-center space-x-3 border-r border-gray-200">
            <div className="bg-indigo-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">299</p>
              <p className="text-gray-500 text-sm">Academic Programs</p>
            </div>
          </div>
          
          <div className="p-6 flex items-center space-x-3 border-r border-gray-200">
            <div className="bg-indigo-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">684</p>
              <p className="text-gray-500 text-sm">Certified Students</p>
            </div>
          </div>
          
          <div className="p-6 flex items-center space-x-3">
            <div className="bg-indigo-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold">941</p>
              <p className="text-gray-500 text-sm">Enrolled Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationLandingPage;