import { useState, useEffect } from 'react';

/**
 * Drives a fake loading progress from 0 → 100.
 * Natural ramp: slow start → faster mid → stall near end.
 */
export function useLoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone]         = useState(false);
  const [visible, setVisible]   = useState(true);

  useEffect(() => {
    let current = 0;
    let rafId: ReturnType<typeof requestAnimationFrame>;

    const tick = () => {
      const step =
        current < 30  ? 0.5   // slow start
        : current < 70 ? 1.1  // fast mid
        : current < 92 ? 0.55 // ease off
        :                0.18; // stall at finish line

      current = Math.min(current + step, 100);
      setProgress(Math.floor(current));

      if (current < 100) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Pause at 100%, then trigger exit animation
        setTimeout(() => {
          setDone(true);
          // Keep mounted until slide-up animation (700ms) + buffer finish
          setTimeout(() => setVisible(false), 850);
        }, 600);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return { progress, done, visible };
}
