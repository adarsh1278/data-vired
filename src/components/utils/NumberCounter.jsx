'use client'
import React, { useEffect, useRef, useState } from "react";

const NumberCounter = ({ number, durationToComplete, className, icon }) => {
  const [count, setCount] = useState(0); // Start count from 0
  const ref = useRef(null);
  const [animated, setAnimated] = useState(false); // Track animation completion

  useEffect(() => {
    let startTime;
    let requestId;

    const updateCount = (timestamp) => {
      if (!startTime && !animated) startTime = timestamp;
      if (!animated) {
        const elapsedTime = timestamp - startTime;
        const progress = elapsedTime / (durationToComplete * 1000);
        const newCount = Math.floor(progress * number);

        if (newCount <= number) {
          setCount(newCount);
          requestId = requestAnimationFrame(updateCount);
        } else {
          setCount(number);
          setAnimated(true); // Mark animation as completed
          cancelAnimationFrame(requestId);
        }
      }
    };

    const startAnimation = () => {
      startTime = 0;
      requestId = requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(requestId);
    };
  }, [number, durationToComplete, animated]);

  return (
    <h2 ref={ref} className={className ? className : ""}>
      {count}
      {icon}
    </h2>
  );
};

export default NumberCounter;
