// components/programCard.jsx
'use client'
import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

export const ProgramCard = ({ title, lessons, duration, price }) => {
  return (
    <div className="flex flex-col bg-white  rounded-lg shadow-md overflow-hidden min-w-[330px] mx-2 hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src="https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__" 
          alt="Course Preview" 
          className="w-full h-56 object-cover"
        />
      </div>
      <div className="p-4 flex flex-col w-full justify-center items-center flex-grow">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="h-4 w-4 text-red-500" />
          ))}
        </div>
        <h3 className="text-gray-700 font-medium text-sm mb-4">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mt-auto mb-2">
          <span className="flex items-center mr-4  ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {lessons} Course
          </span>
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration} Min
          </span>
        </div>
        <div className="border-t  w-full pt-2   text-center mt-2">
          <p className="text-sm text-blue-600">Course Fee -- {price}</p>
        </div>
      </div>
    </div>
  );
};