'use client'
import { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { teamData } from "../../data/data";
import DivAnimateY from "../utils/DivAnimateY";
import DivAnimateX from "../utils/DivAnimateX";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const TeamCarousel = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);

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
    <section className="overflow-hidden team_area section-padding">
      <DivAnimateY className="  sm:px-4">
        <div className="text-center section-title">
          <h2>Meet our Instructors</h2>
          <p>
            We offer a brand new approach to the most basic learning paradigms.
            Choose from a wide range of learning options and gain new skills!
            Our school is know.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="h-10  w-8 text-gray-700" />
          </button>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto  gap-4 py-4 mx-[4vw] scrollbar-hide snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamData.map((item, index) => (
              <DivAnimateX
                key={item.id}
                duration={0.5 + index * 0.1}
                position={40}
                className="snap-center flex-shrink-0 w-[280px] md:w-[320px]"
              >
                <div className="our-team">
                  <div className="team-content">
                    <Link href={`/instructor/${item.slug}`}>
                      <img src={item.img} alt={item.name} />
                    </Link>
                    <ul className="social-links">
                      {item.socials.map((social, index) => (
                        <li key={index}>
                          <Link
                            href={social.url || '#'} // Added fallback URL
                            className={social.socialMedia}
                          >
                            <span className="sr-only">{social.socialMedia}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="team-prof">
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                  <div className="sth_det2">
                    <span className="ti-file">
                      {" "}
                      <u>
                        {item.course < 10 ? `0${item.course}` : item.course}{" "}
                        Course
                      </u>
                    </span>
                    <span className="ti-user">
                      {" "}
                      <u>{item.students} Student</u>
                    </span>
                  </div>
                </div>
              </DivAnimateX>
            ))}
          </div>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md transition-opacity ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : 'hover:bg-gray-100'}`}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="h-10 w-8 text-gray-700" />
          </button>
        </div>
      </DivAnimateY>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .our-team {
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        .our-team:hover {
          transform: translateY(-5px);
        }
        .team-content {
          position: relative;
          overflow: hidden;
        }
        .team-content img {
          width: 100%;
          height: auto;
          transition: all 0.3s ease;
        }
        .our-team:hover .team-content img {
          transform: scale(1.05);
        }
        .social-links {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.6);
          padding: 10px 0;
          transform: translateY(100%);
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          gap: 15px;
          list-style: none;
          margin: 0;
        }
        .our-team:hover .social-links {
          transform: translateY(0);
        }
        .team-prof {
          padding: 20px 15px 5px;
          text-align: center;
        }
        .team-prof h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .team-prof span {
          color: #777;
          font-size: 14px;
        }
        .sth_det2 {
          display: flex;
          justify-content: space-between;
          padding: 0 15px 15px;
          font-size: 14px;
        }
      `}</style>
    </section>
  );
};

export default TeamCarousel;