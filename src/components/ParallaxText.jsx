import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxText = ({ children, speed = 0.5, className = '' }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxText;
