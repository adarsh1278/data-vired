// components/FeaturedProgramsCarousel.jsx
'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { ProgramCard } from './programCard';
import DivAnimateX from '../utils/DivAnimateX';

const FeaturedProgramsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const carouselRef = useRef(null);

    const programsData = [
        {
            id: 1,
            title: "Complete fundamentals beginners to advanced",
            lessons: 12,
            duration: "18:32",
            price: "49",
            image: "/placeholder.jpg"
        },
        {
            id: 2,
            title: "Complete fundamentals beginners to advanced",
            lessons: 12,
            duration: "18:32",
            price: "49",
            image: "/placeholder.jpg"
        },
        {
            id: 3,
            title: "Complete fundamentals beginners to advanced",
            lessons: 12,
            duration: "18:32",
            price: "49",
            image: "/placeholder.jpg"
        },
        {
            id: 4,
            title: "Complete fundamentals beginners to advanced",
            lessons: 12,
            duration: "18:32",
            price: "49",
            image: "/placeholder.jpg"
        },
        {
            id: 5,
            title: "Complete fundamentals beginners to advanced",
            lessons: 10,
            duration: "15:45",
            price: "49",
            image: "/placeholder.jpg"
        },
        {
            id: 6,
            title: "Advanced techniques for practitioners",
            lessons: 14,
            duration: "20:15",
            price: "59",
            image: "/placeholder.jpg"
        }
    ];

    // Check if scroll buttons should be enabled/disabled
    useEffect(() => {
        const checkScrollPosition = () => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
                setCanScrollLeft(scrollLeft > 0);
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
            }
        };

        const carousel = carouselRef.current;
        if (carousel) {
            checkScrollPosition(); // Initial check
            carousel.addEventListener('scroll', checkScrollPosition);
            return () => carousel.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current && canScrollLeft) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current && canScrollRight) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full py-8 ">
            <div className=" w-full mx-auto px-4">
                <DivAnimateX
                    duration={0.8}
                    position={-30}
                    className="text-center mb-6"
                >
                    <h2 className="text-3xl font-semibold tracking-wide text-[#424972]">
                        Featured Program
                    </h2>
                    <p className="text-[#4D537A] mt-2 font-medium tracking-wide">
                        Explore our Industry Relevant Programs
                    </p>

                </DivAnimateX>

                <div className="relative">
                    <button
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md transition-opacity ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeftIcon className="h-10 w-9 text-gray-700" />
                    </button>

                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto  gap-4 py-4  mx-14 scrollbar-hide snap-x  "
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {programsData.map((program, index) => (
                            <DivAnimateX
                                key={program.id}
                                duration={0.5 + index * 0.1}
                                position={40}
                                className="snap-center flex-shrink-0"
                            >
                                <ProgramCard
                                    title={program.title}
                                    lessons={program.lessons}
                                    duration={program.duration}
                                    price={program.price}
                                />
                            </DivAnimateX>
                        ))}
                    </div>

                    <button
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                        className={`absolute right-0 top-1/2 -translate-y-1/2 ml-5 z-10 bg-white rounded-full p-1 shadow-md transition-opacity ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                        aria-label="Scroll right"
                    >
                        <ChevronRightIcon className="h-10 w-9 text-gray-700" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProgramsCarousel;