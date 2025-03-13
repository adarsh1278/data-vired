'use client'
import React from "react";
import DivAnimateY from "../utils/DivAnimateY";
import DivAnimateX from "../utils/DivAnimateX";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { PiArrowBendDownLeft, PiArrowBendDownLeftBold, PiArrowBendRightDown, PiArrowBendRightUpLight, PiArrowBendUpRight, PiArrowBendUpRightDuotone, PiArrowBendUpRightThin } from "react-icons/pi";


const LearningPathway = () => {
  const ExpertTeacherCard = ({ step, index }) => {
    return (
      <DivAnimateY 
        duration={0.5} 
        delay={index * 0.15}
        className="max-w-md p-4 md:p-5 w-full md:w-[95%] lg:w-[90%]  md:h-[80%] py-6  md:py-16
                 flex justify-center items-center flex-col bg-white rounded-lg drop-shadow-lg shadow-md mx-auto"
      >
        <div className="flex items-center  mb-8">
          <div className="flex-shrink-0">
            <div 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${step.color}20` }}
            >
              <span style={{ color: step.color }} className="font-bold text-lg md:text-xl">{step.id}</span>
            </div>
          </div>
          <div className="ml-3 md:ml-4 ">
            <h3 className="text-base md:text-lg font-semibold text-gray-600">{step.title}</h3>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-400 font-light">
          {step.description}
        </p>
      </DivAnimateY>
    );
  };

  // Styled Arrow component using Lucide React icons
  const StyledArrow = ({ direction = "down", index }) => {
    // Colors matching the original design
    const colors = {
      start: "#FFA726", // Light orange
      end: "#FF6F00"    // Deep orange
    };
    
    return (
      <DivAnimateX 
        duration={0.5} 
        delay={index * 0.15 + 0.2}
        className="w-full h-full flex items-center justify-center"
      >
        <div 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-all duration-300 ease-in-out"
          style={{
            transform: direction === "up" ? "rotate(0deg)" : "rotate(0deg)"
          }}
        >
          {direction === "down" ? (
            <PiArrowBendRightDown
              size={64}
              className="w-full h-full"
              strokeWidth={3}
              style={{
                color: colors.end,
                filter: "drop-shadow(0 0 4px rgba(255, 120, 0, 0.5))"
              }}
            />
          ) : (
            <PiArrowBendRightUpLight
              size={64}
              className="w-full h-full"
              strokeWidth={3}
              style={{
                color: colors.end,
                filter: "drop-shadow(0 0 4px rgba(255, 120, 0, 0.5))"
              }}
            />
          )}
        </div>
      </DivAnimateX>
    );
};

  const pathwayData = {
    title: "Learning Pathway",
    description: "We offer a brand new approach to the most basic learning paradigms. Choose from a wide range of learning options and gain new skills! Our school is know.",
    steps: [
      {
        id: "01",
        title: "Expert Teacher",
        description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore.",
        color: "#FF9D80"
      },
      {
        id: "02",
        title: "Quality Education",
        description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labores",
        color: "#8A85FF"
      },
      {
        id: "03",
        title: "Remote Learning",
        description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labore",
        color: "#6C7AFF"
      },
      {
        id: "04",
        title: "Life Time Support",
        description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit ut labores",
        color: "#4ECDC4"
      }
    ]
  };

  return (
    <section className="w-full py-6 md:py-12 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <DivAnimateY className="text-center mb-6 md:mb-10" duration={0.5}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#424972] mb-2 md:mb-4">{pathwayData.title}</h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            {pathwayData.description}
          </p>
        </DivAnimateY>

        {/* Small/Extra Small screen view (vertical stacked) */}
        <div className="sm:hidden flex flex-col space-y-4">
          {pathwayData.steps.map((step, index) => (
            <div key={step.id} className="w-full">
              <ExpertTeacherCard step={step} index={index} />
              {index < pathwayData.steps.length - 1 && (
                <div className="h-12 w-full py-1 flex justify-center">
                 
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Medium/Small screen view (stacked) */}
        <div className="hidden sm:flex md:hidden flex-col space-y-6">
          {pathwayData.steps.map((step, index) => (
            <div key={step.id} className="w-full">
              <ExpertTeacherCard step={step} index={index} />
              {index < pathwayData.steps.length - 1 && (
                <div className="h-14 w-full py-1 flex justify-center">
                  
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop view (horizontal zigzag flow) */}
        <div className="hidden md:flex w-full h-[70vh] lg:h-[65vh] flex-row justify-between">
          {/* First column */}
          <div className="w-[25%] h-[65%]">
            <ExpertTeacherCard step={pathwayData.steps[0]} index={0} />
          </div>

          {/* Second column */}
          <div className="w-[25%] h-[100%] flex flex-col">
            <div className="w-full h-[35%] flex items-end justify-center">
              <StyledArrow direction="down" index={1} />
            </div>
            <div className="w-full h-[65%]">
              <ExpertTeacherCard step={pathwayData.steps[1]} index={1} />
            </div>
          </div>

          {/* Third column */}
          <div className="w-[25%] h-[100%] flex flex-col-reverse">
            <div className="w-full h-[35%] flex    justify-start items-start mb-9">
              <StyledArrow direction="up" index={2} />
            </div>
            <div className="w-full h-[65%]">
              <ExpertTeacherCard step={pathwayData.steps[2]} index={2} />
            </div>
          </div>

          {/* Fourth column */}
          <div className="w-[25%] h-[100%] flex flex-col">
            <div className="w-full h-[35%] flex items-end justify-center">
              <StyledArrow direction="down" index={3} />
            </div>
            <div className="w-full h-[65%] ">
              <ExpertTeacherCard step={pathwayData.steps[3]} index={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningPathway;