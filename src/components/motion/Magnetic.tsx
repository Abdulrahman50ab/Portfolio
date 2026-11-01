import React, { useEffect, useRef } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  /** How strongly the child is pulled toward the cursor (0–1). */
  strength?: number;
}

// Gently pulls its child toward the cursor and eases back on leave.
// The offset lives in CSS custom properties (--mx/--my) driven by a rAF
// ease-out loop. Disabled for touch and reduced-motion users.
const Magnetic = ({ children, className, strength = 0.22 }: MagneticProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let running = false;
    const cur = { x: 0, y: 0 };
    const tgt = { x: 0, y: 0 };

    const tick = () => {
      let settled = true;
      (['x', 'y'] as const).forEach((k) => {
        const delta = tgt[k] - cur[k];
        if (Math.abs(delta) > 0.1) {
          cur[k] += delta * 0.18;
          settled = false;
        } else {
          cur[k] = tgt[k];
        }
      });
      el.style.setProperty('--mx', `${cur.x.toFixed(2)}px`);
      el.style.setProperty('--my', `${cur.y.toFixed(2)}px`);
      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const rect = el.getBoundingClientRect();
      tgt.x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      tgt.y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      kick();
    };
    const handleLeave = () => {
      tgt.x = 0;
      tgt.y = 0;
      kick();
    };

    el.addEventListener('pointermove', handleMove, { passive: true });
    el.addEventListener('pointerleave', handleLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`inline-flex ${className ?? ''}`}
      style={{ transform: 'translate(var(--mx, 0px), var(--my, 0px))' }}
    >
      {children}
    </span>
  );
};

export default Magnetic;
