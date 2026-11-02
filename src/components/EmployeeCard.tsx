import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { motion } from 'framer-motion';
import { Move, RotateCcw } from 'lucide-react';
import img from './cv2.jpg';

type InteractionMode = 'idle' | 'drag' | 'resize';
type Box = { x: number; y: number; w: number; h: number };

const MIN_W = 250;
const MIN_H = 360;
const DEFAULT_W = 300;
const DEFAULT_H = 420;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), Math.max(min, max));

const BARCODE = [
  2, 1, 3, 1, 1, 2, 4, 1, 2, 2, 1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 2, 4, 1, 2, 1, 3,
  1, 4, 2, 1, 3, 1, 2, 2, 1, 4, 1, 2, 3, 1, 2, 1, 4, 1, 2, 3, 1, 2,
];

const EmployeeCard = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const modeRef = useRef<InteractionMode>('idle');
  const start = useRef<{ px: number; py: number; box: Box }>({
    px: 0,
    py: 0,
    box: { x: 0, y: 0, w: DEFAULT_W, h: DEFAULT_H },
  });

  const [box, setBox] = useState<Box>({ x: 0, y: 0, w: DEFAULT_W, h: DEFAULT_H });
  const [mode, setMode] = useState<InteractionMode>('idle');
  const [stage, setStage] = useState({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);

  const updateBox = useCallback((next: Box) => {
    setBox(next);
  }, []);

  const defaultBox = useCallback((stageWidth: number, stageHeight: number): Box => {
    const w = Math.min(DEFAULT_W, Math.max(MIN_W, stageWidth - 32));
    const h = Math.min(DEFAULT_H, Math.max(MIN_H, stageHeight - 56));
    return {
      w,
      h,
      x: Math.max(8, (stageWidth - w) / 2),
      y: clamp(24, 0, stageHeight - h),
    };
  }, []);

  // Measure the stage, place the card the first time, and keep it inside
  // the stage whenever the browser is resized.
  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (w === 0 || h === 0) return;
      setStage({ w, h });

      if (!initialized.current) {
        initialized.current = true;
        updateBox(defaultBox(w, h));
        setReady(true);
        return;
      }

      setBox((current) => {
        const width = Math.min(current.w, Math.max(MIN_W, w));
        const height = Math.min(current.h, Math.max(MIN_H, h));
        return {
          w: width,
          h: height,
          x: clamp(current.x, 0, w - width),
          y: clamp(current.y, 0, h - height),
        };
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [defaultBox, updateBox]);

  const endInteraction = (pointerId?: number) => {
    if (pointerId !== undefined && cardRef.current?.hasPointerCapture(pointerId)) {
      cardRef.current.releasePointerCapture(pointerId);
    }
    modeRef.current = 'idle';
    setMode('idle');
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    if ((event.target as HTMLElement).closest('[data-resize-handle]')) return;

    event.preventDefault();
    cardRef.current?.setPointerCapture(event.pointerId);
    start.current = { px: event.clientX, py: event.clientY, box };
    modeRef.current = 'drag';
    setMode('drag');
  };

  const handleResizeStart = (event: ReactPointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    cardRef.current?.setPointerCapture(event.pointerId);
    start.current = { px: event.clientX, py: event.clientY, box };
    modeRef.current = 'resize';
    setMode('resize');
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (modeRef.current === 'idle') return;

    const dx = event.clientX - start.current.px;
    const dy = event.clientY - start.current.py;
    const origin = start.current.box;

    if (modeRef.current === 'drag') {
      const stageEl = stageRef.current;
      const sw = stageEl?.clientWidth ?? stage.w;
      const sh = stageEl?.clientHeight ?? stage.h;
      updateBox({
        ...origin,
        x: clamp(origin.x + dx, 0, sw - origin.w),
        y: clamp(origin.y + dy, 0, sh - origin.h),
      });
      return;
    }

    const stageEl = stageRef.current;
    const sw = stageEl?.clientWidth ?? stage.w;
    const sh = stageEl?.clientHeight ?? stage.h;
    updateBox({
      ...origin,
      w: clamp(origin.w + dx, MIN_W, sw - origin.x),
      h: clamp(origin.h + dy, MIN_H, sh - origin.y),
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();

    const stageEl = stageRef.current;
    const sw = stageEl?.clientWidth ?? stage.w;
    const sh = stageEl?.clientHeight ?? stage.h;
    const step = event.shiftKey ? 24 : 8;
    const next = { ...box };

    if (event.key === 'ArrowLeft') next.x = clamp(next.x - step, 0, sw - next.w);
    if (event.key === 'ArrowRight') next.x = clamp(next.x + step, 0, sw - next.w);
    if (event.key === 'ArrowUp') next.y = clamp(next.y - step, 0, sh - next.h);
    if (event.key === 'ArrowDown') next.y = clamp(next.y + step, 0, sh - next.h);
    updateBox(next);
  };

  const reset = () => {
    const el = stageRef.current;
    if (!el) return;
    updateBox(defaultBox(el.clientWidth, el.clientHeight));
    modeRef.current = 'idle';
    setMode('idle');
  };

  const active = mode !== 'idle';

  return (
    <div className="relative">
      <div
        ref={stageRef}
        className={`relative h-[520px] overflow-hidden rounded-[2rem] border bg-white/25 transition-colors duration-300 sm:h-[560px] ${
          active ? 'border-accent/40' : 'border-dashed border-line/80'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-line/70"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/[0.05] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(107,101,92,0.18) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        />

        {/* Lanyard strip that hangs from the top of the stage to the badge clip */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 z-0 w-[3px] rounded-full bg-gradient-to-b from-zinc-400/70 via-zinc-500/60 to-zinc-600/80 shadow-[0_0_8px_rgba(24,24,27,0.18)] transition-opacity duration-700"
          style={{
            left: box.x + box.w / 2 - 1.5,
            height: Math.max(0, box.y + 12),
            opacity: ready ? 1 : 0,
          }}
        />

        {/* Draggable badge */}
        <div
          ref={cardRef}
          role="group"
          tabIndex={0}
          aria-label="Employee ID card. Drag to move, arrow keys to nudge, or use the corner handle to resize."
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={(event) => endInteraction(event.pointerId)}
          onPointerCancel={(event) => endInteraction(event.pointerId)}
          onLostPointerCapture={() => {
            modeRef.current = 'idle';
            setMode('idle');
          }}
          onKeyDown={handleKeyDown}
          onDragStart={(event) => event.preventDefault()}
          className={`absolute left-0 top-0 z-10 touch-none select-none rounded-[1.4rem] outline-none transition-opacity duration-500 focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
            ready ? 'opacity-100' : 'opacity-0'
          } ${active ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            width: box.w,
            height: box.h,
            transform: `translate3d(${box.x}px, ${box.y}px, 0)`,
            willChange: active ? 'transform' : 'auto',
          }}
        >
        <motion.div
          initial={{ opacity: 0, y: -34, rotate: -9 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 170, damping: 13, mass: 0.7, delay: 0.12 }}
          style={{ transformOrigin: 'top center' }}
          className="relative h-full w-full"
        >
          {/* Metal badge clip */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 z-20 h-6 w-11 -translate-x-1/2 -translate-y-1/2 rounded-[5px] border border-zinc-400/70 bg-gradient-to-b from-zinc-100 via-zinc-300 to-zinc-400 shadow-[0_3px_8px_rgba(24,24,27,0.2)]"
          >
            <span className="absolute left-1/2 top-1/2 h-1.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-600/55" />
          </div>

          <div
            className={`relative flex h-full w-full flex-col overflow-hidden rounded-[1.4rem] border border-white/90 bg-[#FBF9F3] shadow-[0_30px_70px_-35px_rgba(14,14,16,0.55)] transition-shadow duration-300 ${
              active ? 'shadow-[0_40px_90px_-35px_rgba(79,70,229,0.45)] ring-2 ring-accent/30' : 'ring-1 ring-ink/5'
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-400"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(135deg, #0E0E10 0, #0E0E10 1px, transparent 1px, transparent 7px)',
              }}
            />

            <div className="relative flex h-full flex-col px-4 pb-4 pt-5">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-[9px] font-bold tracking-tight text-white">
                    AR
                  </span>
                  <div>
                    <p className="text-[6.5px] font-semibold uppercase tracking-[0.22em] text-muted">
                      IntelliG
                    </p>
                    <p className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-ink">
                      Employee ID
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 rounded-full border border-white/80 shadow-sm"
                    style={{
                      background:
                        'conic-gradient(from 220deg, #a5b4fc, #f0abfc, #67e8f9, #fde68a, #a5b4fc)',
                    }}
                  />
                  <span className="rounded-full border border-line bg-white/70 px-2 py-0.5 text-[6.5px] font-semibold tracking-[0.14em] text-muted">
                    2026
                  </span>
                </div>
              </div>

              {/* Portrait */}
              <div className="relative mt-3 min-h-0 flex-1 overflow-hidden rounded-xl border border-line bg-stone-200">
                <img
                  src={img}
                  alt="Abdul Rahman"
                  width={1084}
                  height={1156}
                  decoding="async"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
                />
                <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[6.5px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  Active
                </span>
                <p className="absolute bottom-2.5 right-3 text-[6px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  ID · AR-001
                </p>
              </div>

              <div className="mt-3 shrink-0">
                <p className="font-heading text-[1.08rem] font-bold leading-none tracking-[-0.02em] text-ink">
                  Abdul Rahman
                </p>
                <p className="mt-1.5 text-[7.5px] font-semibold uppercase tracking-[0.19em] text-accent">
                  Software Engineer
                </p>
              </div>

              <div className="mt-3 grid shrink-0 grid-cols-2 gap-x-3 gap-y-2 border-t border-line pt-2.5">
                {[
                  ['ID number', 'AR-2026-001'],
                  ['Department', 'Product Eng.'],
                  ['Blood group', 'O+'],
                  ['Location', 'Lahore, PK'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[5.5px] font-semibold uppercase tracking-[0.14em] text-muted/80">
                      {label}
                    </p>
                    <p className="mt-0.5 text-[7px] font-semibold leading-tight text-ink">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 flex shrink-0 items-end justify-between gap-3 border-t border-line pt-2.5">
                <div className="flex h-5 items-end gap-[1.5px]" aria-hidden="true">
                  {BARCODE.map((bar, index) => (
                    <span
                      key={index}
                      className="w-[1px] rounded-sm bg-ink/70"
                      style={{ height: `${5 + bar * 3}px` }}
                    />
                  ))}
                </div>
                <div className="pr-8 text-right">
                  <p className="text-[5px] font-semibold uppercase tracking-[0.14em] text-muted/70">
                    Authorized
                  </p>
                  <p className="font-display text-[13px] italic leading-none text-ink/60">
                    A. Rahman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resize handle */}
          <button
            type="button"
            data-resize-handle
            aria-label="Resize employee ID card"
            title="Drag to resize"
            onPointerDown={handleResizeStart}
            onKeyDown={(event) => event.stopPropagation()}
            className="absolute bottom-2 right-2 z-30 flex h-8 w-8 cursor-nwse-resize touch-none items-center justify-center rounded-full border border-line/90 bg-white/90 text-muted shadow-[0_2px_8px_rgba(24,24,27,0.12)] backdrop-blur-sm transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <span className="relative block h-3 w-3">
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-br-[3px] border-b-2 border-r-2 border-current" />
              <span className="absolute right-0 top-0 h-1.5 w-1.5 rounded-tr-[2px] border-r-2 border-t-2 border-current opacity-40" />
            </span>
          </button>
        </motion.div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-muted">
          <Move className="h-3.5 w-3.5 text-accent" />
          Drag to move · resize corner
        </span>
        <button
          type="button"
          onClick={reset}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-white/60 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:border-accent/30 hover:text-accent"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;
