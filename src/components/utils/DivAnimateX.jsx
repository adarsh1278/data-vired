
'use client'
import React from "react";
import { motion } from "framer-motion";



const DivAnimateX = ({
  children,
  className,
  duration,
  position,
  id,
  visible,
  repeat,
}) => {
  return (
    <motion.div
      className={className ? className : ""}
      id={id ? id : ""}
      initial={{
        x: position ? position : 60,
        opacity: visible ? 1 : 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: duration ? duration : 1.2,
        ease: "easeIn",
      }}
      viewport={{
        once: !repeat,
      }}
    >
      {children}
    </motion.div>
  );
};

export default DivAnimateX;
