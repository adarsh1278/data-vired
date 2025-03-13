'use client'
import React from 'react';
import { motion } from 'framer-motion';
import DivAnimateX from '../utils/DivAnimateX';

// Custom animation component


const FeatureCard = ({ title, description, position }) => {
    return (
      <DivAnimateX
        duration={0.8} 
        position={position === 'left' ? -50 : 50}
        className="z-10 w-full" // Remove max-width constraint here
      >
        <div className="bg-white rounded-lg shadow-lg p-6  md:w-[40vw]  "> {/* Apply width directly here */}
          <h3 className="text-xl font-semibold text-orange-500 mb-3">
            {title}
          </h3>
          <p className="text-gray-700">
            {description}
          </p>
        </div>
      </DivAnimateX>
    );
  };

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Industry-Aligned Curriculum",
      description: "Our programs are meticulously designed with inputs from industry leaders and top IIT professors to ensure you gain job-ready skills.",
      position: "left"
    },
    {
      id: 2,
      title: "Hands-on Learning",
      description: "Work on real-world projects, case studies, and practical assignments to gain a competitive edge in your career",
      position: "right"
    },
    {
      id: 3,
      title: "Industry-Aligned Curriculum",
      description: "Our programs are meticulously designed with inputs from industry leaders and top IIT professors to ensure you gain job-ready skills.",
      position: "left"
    },
    {
      id: 4,
      title: "100% Placement Assistance",
      description: "Our career support team provides mock interviews, resume building, and direct access to hiring partners to land your dream job.",
      position: "right"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <DivAnimateX duration={0.8} position={0} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of 
            learning options and gain new skills! Our school is know.
          </p>
        </DivAnimateX>

        {/* Desktop Layout with exact positioning */}
        <div className="relative  w-full hidden md:block">
          {/* Purple blob decorative elements */}
          <div className="absolute top-24 left-1/3 w-64 h-64 bg-purple-200 rounded-full opacity-60"></div>
          <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-purple-200 rounded-full opacity-60"></div>
          
        

          {/* Main content with precise positioning */}
          <div className="relative min-h-[600px]">
            {/* Central image */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <DivAnimateX duration={1} position={0} className="w-80">
                <img 
                  src="https://s3-alpha-sig.figma.com/img/04fe/1f11/ef2f6526385fa05c0f5541dac5c702f1?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z-m93VadHtSdfQVs89bauOou52FOPT7cPhXxya39A4uio8pRRN9IOekTpfFY8UP-R-0~5UqIe5lzbQL5-Dcp9uldxzOnpqVcZwcY~qpujI2XR8CrPWwpm~Prncad~dwZBwtiIKxkGnQjlL3tIaqT337RJKCpNQwqxHmZ9W26SEcjVSlWoGPZcAgK9-qcR5xTqoVAIDkjbSEdIpNx~kUWzd-jKM70jdzr-grD3tx-4eBo0idwWuRS6btaNy6G7pokTcRQ3kh2OtQWrU7IvKvrQ58pNN59woRu~46OvC~Z2U8jjJRK4b7uWiAQtt59OfPZFJ1ESoYGnASNxJww1QDSDg__"
                  alt="Successful student giving thumbs up"
                  className="h-[400px] object-cover"
                />
              </DivAnimateX>
            </div>
            
            {/* Top Left Card */}
            <div className="absolute   top-14 left-8  z-30">
              <FeatureCard 
                title={features[0].title}
                description={features[0].description}
                position={features[0].position}
              />
            </div>
            
            {/* Top Right Card */}
            <div className="absolute top-14 right-14  z-30">
              <FeatureCard 
                title={features[1].title}
                description={features[1].description}
                position={features[1].position}
              />
            </div>
            
            {/* Bottom Left Card */}
            <div className="absolute bottom-14 left-8  z-30">
              <FeatureCard 
                title={features[2].title}
                description={features[2].description}
                position={features[2].position}
              />
            </div>
            
            {/* Bottom Right Card */}
            <div className="absolute bottom-14 right-14  z-30">
              <FeatureCard 
                title={features[3].title}
                description={features[3].description}
                position={features[3].position}
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked cards with image in between */}
        <div className="md:hidden">
          <div className="space-y-6 mx-auto max-w-sm">
            {/* First two cards */}
            <FeatureCard 
              title={features[0].title}
              description={features[0].description}
              position={features[0].position}
            />
            
            <FeatureCard 
              title={features[1].title}
              description={features[1].description}
              position={features[1].position}
            />
            
            {/* Central image with decorative elements */}
            <div className="relative py-12">
             
              
              <DivAnimateX duration={1} position={0} className="relative z-10 mx-auto w-48">
                <img 
                  src="/api/placeholder/250/300"
                  alt="Successful student giving thumbs up"
                  className="w-full object-cover mx-auto rounded-lg"
                />
              </DivAnimateX>
            </div>
            
            {/* Last two cards */}
            <FeatureCard 
              title={features[2].title}
              description={features[2].description}
              position={features[2].position}
            />
            
            <FeatureCard 
              title={features[3].title}
              description={features[3].description}
              position={features[3].position}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;