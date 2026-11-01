import React, { useEffect, useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'article';
  /** Maximum tilt in degrees. */
  max?: number;
}

// 3D mouse-follow tilt with a soft glare. The cursor drives CSS custom
// properties (--rx/--ry/--gx/--gy) through a rAF ease-out loop, and the
// transform/gradient read those vars — no animation library involved, so
// it behaves identically everywhere. Disabled for touch and users who
// prefer reduced motion.
const TiltCard = ({ children, className, as = 'div', max = 5 }: TiltCardProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let running = false;
    const cur = { rx: 0, ry: 0, gx: 50, gy: 50 };
    const tgt = { rx: 0, ry: 0, gx: 50, gy: 50 };

    const tick = () => {
      let settled = true;
      (['rx', 'ry', 'gx', 'gy'] as const).forEach((k) => {
        const delta = tgt[k] - cur[k];
        if (Math.abs(delta) > 0.05) {
          cur[k] += delta * 0.16;
          settled = false;
        } else {
          cur[k] = tgt[k];
        }
      });
      el.style.setProperty('--rx', `${cur.rx.toFixed(2)}deg`);
      el.style.setProperty('--ry', `${cur.ry.toFixed(2)}deg`);
      el.style.setProperty('--gx', `${cur.gx.toFixed(2)}%`);
      el.style.setProperty('--gy', `${cur.gy.toFixed(2)}%`);
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
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      tgt.ry = (px - 0.5) * 2 * max;
      tgt.rx = (0.5 - py) * 2 * max;
      tgt.gx = px * 100;
      tgt.gy = py * 100;
      kick();
    };
    const handleLeave = () => {
      tgt.rx = 0;
      tgt.ry = 0;
      tgt.gx = 50;
      tgt.gy = 50;
      kick();
    };

    el.addEventListener('pointermove', handleMove, { passive: true });
    el.addEventListener('pointerleave', handleLeave, { passive: true });
    return () => {
      el.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ transform: 'perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
    >
      {children}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(99,102,241,0.09), transparent 55%)',
        }}
      />
    </Tag>
  );
};

export default TiltCard;
