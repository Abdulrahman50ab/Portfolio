import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { EASE } from './presets';

interface RevealProps {
  children: React.ReactNode;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Vertical offset in pixels the element rises from. */
  y?: number;
  className?: string;
}

// Fades content up into view the first time it enters the viewport.
// Renders statically (no transform) when the user prefers reduced motion.
const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-64px 0px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
