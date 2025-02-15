'use client'
import React from "react";
import { motion } from "framer-motion";



const DivAnimateY = ({
  children,
  className,
  duration,
  position,
  visible,
}) => {
  return (
    <motion.div
      className={className ? className : ""}
      initial={{
        y: position ? position : 60,
        opacity: visible ? 1 : 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration ? duration : 1.2,
        ease: "easeIn",
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default DivAnimateY;
