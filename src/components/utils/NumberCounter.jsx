// import React, { useEffect, useRef, useState } from "react";

// interface NumberCounterProps {
//   number: number;
//   durationToComplete: number; // in seconds
//   className?: string;
//   icon?: string;
// }

// const NumberCounter: React.FC<NumberCounterProps> = ({
//   number,
//   durationToComplete,
//   className,
//   icon,
// }) => {
//   const [count, setCount] = useState(0); // Start count from 0
//   const ref = useRef<HTMLHeadingElement>(null);
//   const [animated, setAnimated] = useState(false); // Track animation completion

//   useEffect(() => {
//     let startTime: number;
//     let requestId: number;

//     const updateCount = (timestamp: number) => {
//       if (!startTime && !animated) startTime = timestamp;
//       if (!animated) {
//         const elapsedTime = timestamp - startTime;
//         const progress = elapsedTime / (durationToComplete * 1000);
//         const newCount = Math.floor(progress * number);

//         if (newCount <= number) {
//           setCount(newCount);
//           requestId = requestAnimationFrame(updateCount);
//         } else {
//           setCount(number);
//           setAnimated(true); // Mark animation as completed
//           cancelAnimationFrame(requestId);
//         }
//       }
//     };

//     const startAnimation = () => {
//       startTime = 0;
//       requestId = requestAnimationFrame(updateCount);
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !animated) {
//           startAnimation();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       observer.disconnect();
//       cancelAnimationFrame(requestId);
//     };
//   }, [number, durationToComplete, animated]);

//   return (
//     <h2 ref={ref} className={className ? className : ""}>
//       {count}
//       {icon}
//     </h2>
//   );
// };

// export default NumberCounter;
