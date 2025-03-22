import React, { useState, useEffect } from "react";
import DivAnimateX from '../utils/DivAnimateX';
import { ProgramCard } from './programCard';

const FeaturedProgramsCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [totalSlides, setTotalSlides] = useState(0);

    // Updated data to match the ProgramCard structure
    const programsData = [
        {
            id: 1,
            title: "Masters in Artificial Intelligence",
            learners: "14k+ Learners",
            duration: "9 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        },
        {
            id: 2,
            title: "Data Science for Beginners",
            learners: "10k+ Learners",
            duration: "6 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        },
        {
            id: 3,
            title: "Machine Learning Fundamentals",
            learners: "8k+ Learners",
            duration: "7 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        },
        {
            id: 4,
            title: "Web Development Bootcamp",
            learners: "12k+ Learners",
            duration: "4 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        },
        {
            id: 5,
            title: "Cloud Computing Certificate",
            learners: "6k+ Learners",
            duration: "5 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        },
        {
            id: 6,
            title: "Cybersecurity Professional",
            learners: "7k+ Learners",
            duration: "8 Months",
            image: "https://s3-alpha-sig.figma.com/img/265f/b096/0c398b1a5c3bb3801fe10fc3608ab7e5?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XURMlmEmJ~O0Le5ZVP7DBQCaa7y8-kRPtK3WBmZzObFLKJc5ApWIUC4CVgGHZp~KMQ9VVi1OZ8mWlumjrjQOHrGvpaA0izOMIEQ6TOwW-rWQVKo~hhBXBkvor4lSqE6wGBImSQ7d8qK8kT-YJPDu9b4GG7u77NVasTHR~y6cUMlob9Jn5yHV15BWzICmFbUZ7RqSkqq48YaxxJfMRinp5xqxs6VVlAzpnh31IemL4MtKpIvvSfrm2vqpc3ptBLAlufDLLKiwsqBoZ1ALnqnBEtdeRFCPdGJ5B8xcO1jaDxTliLIDyFG3y0XAeFETRksu9jnvdWDFq9EbDsXj4BYEOw__"
        }
    ];

    // Determine slides per view based on screen size and update total slides count
    useEffect(() => {
        const handleResize = () => {
            let newSlidesPerView;
            if (window.innerWidth < 640) {
                newSlidesPerView = 1; // Mobile view - 1 card per slide
            } else if (window.innerWidth < 768) {
                newSlidesPerView = 2; // Small tablets - 2 cards per slide
            } else if (window.innerWidth < 1024) {
                newSlidesPerView = 3; // Tablets/small laptops - 3 cards per slide
            } else {
                newSlidesPerView = 3; // Desktop - 4 cards per slide
            }

            setSlidesPerView(newSlidesPerView);
            setTotalSlides(Math.ceil(programsData.length / newSlidesPerView));

            // Reset active slide if needed
            if (activeSlide >= Math.ceil(programsData.length / newSlidesPerView)) {
                setActiveSlide(0);
            }
        };

        // Set initial values
        handleResize();

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up
        return () => window.removeEventListener("resize", handleResize);
    }, [activeSlide, programsData.length]);

    const nextSlide = () => {
        setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setActiveSlide(index);
    };

    // Generate slides by grouping programs
    const getVisiblePrograms = () => {
        const visiblePrograms = [];

        for (let i = 0; i < totalSlides; i++) {
            const startIdx = i * slidesPerView;
            const endIdx = Math.min(startIdx + slidesPerView, programsData.length);
            visiblePrograms.push(programsData.slice(startIdx, endIdx));
        }

        return visiblePrograms;
    };

    const visiblePrograms = getVisiblePrograms();

    return (
        <div className="w-full py-8 md:py-16 bg-gray-50">
            <div className="w-full mx-auto px-4 max-w-7xl">
                <DivAnimateX
                    duration={0.8}
                    position={-30}
                    className="text-center mb-6 md:mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#424972]">
                        Featured Programs
                    </h2>
                    <p className="text-[#4D537A] mt-2 font-medium tracking-wide text-sm md:text-base">
                        Explore our Industry Relevant Programs
                    </p>
                </DivAnimateX>

                {/* Carousel Container with Fixed Height to Prevent Layout Shifts */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                        >
                            {visiblePrograms.map((slidePrograms, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    className="w-full shrink-0 flex flex-wrap justify-center md:justify-between gap-6"
                                >
                                    {slidePrograms.map((program, programIndex) => (
                                        <div
                                            key={program.id}
                                            className="mb-6"
                                        >
                                            <DivAnimateX
                                                duration={0.5 + programIndex * 0.1}
                                                position={40}
                                            >
                                                <ProgramCard
                                                    title={program.title}
                                                    learners={program.learners}
                                                    duration={program.duration}
                                                    image={program.image}
                                                />
                                            </DivAnimateX>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center mt-8">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center mr-4 hover:bg-gray-100 transition-colors"
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

                        {/* Bullet Indicators - Show on larger screens */}
                        <div className="hidden sm:flex space-x-3">
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${activeSlide === index ? "bg-[#4634ba]" : "bg-gray-300"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Current slide indicator for small screens */}
                        <div className="flex sm:hidden text-sm text-gray-500 mx-3">
                            <span>{activeSlide + 1}/{totalSlides}</span>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-200 flex items-center justify-center ml-4 hover:bg-gray-100 transition-colors"
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
        </div>
    );
};

export default FeaturedProgramsCarousel;