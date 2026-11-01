import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { EASE } from './presets';

interface CounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

// Counts up from zero to `value` the first time it scrolls into view.
// The final number is exposed via aria-label so screen readers skip the churn.
const Counter = ({ value, decimals = 0, suffix = '', duration = 1.6, className }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => `${latest.toFixed(decimals)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, count, reduceMotion, value, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${value.toFixed(decimals)}${suffix}`}>
      <motion.span aria-hidden="true">{display}</motion.span>
    </span>
  );
};

export default Counter;
