import { motion, useInView, useReducedMotion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
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
// Elements scrolled past without ever intersecting (instant jumps like
// scroll restoration or the End key) are shown immediately, so nothing
// can get stuck invisible. Renders statically for reduced motion.
const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-64px 0px' });
  const [passed, setPassed] = useState(false);
  const visible = inView || passed;

  useEffect(() => {
    if (reduceMotion || passed) return;
    const check = () => {
      const el = ref.current;
      if (el && el.getBoundingClientRect().bottom < 0) setPassed(true);
    };
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [reduceMotion, passed]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
