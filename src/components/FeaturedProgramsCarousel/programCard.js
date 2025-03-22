'use client'

import React from 'react';

export const ProgramCard = ({ title, learners, duration, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-64 md:w-72 lg:w-[390px]  hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image || "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"}
          alt={title}
          className="w-full  h-52 lg:h-60 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-gray-700 font-medium text-lg mb-3">{title || "Masters in Artificial Intelligence"}</h3>
        
        {/* Stats */}
        <div className="flex flex-col space-y-2 mb-4">
          {/* Learners */}
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {learners || "14k+ Learners"}
          </div>
          
          {/* Duration */}
          <div className="flex items-center text-sm text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration || "9 Months"}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex space-x-3 mt-2">
          {/* View Program */}
          <button className="flex-1 py-2 px-4 border border-orange-400 text-orange-400 font-medium rounded-md hover:bg-orange-50 transition-colors duration-200 text-sm md:text-base">
            View Program
          </button>
          
          {/* Enroll Now */}
          <button className="flex-1 py-2 px-4 bg-orange-400 text-white font-medium rounded-md hover:bg-orange-500 transition-colors duration-200 flex items-center justify-center text-sm md:text-base">
            Enroll Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};