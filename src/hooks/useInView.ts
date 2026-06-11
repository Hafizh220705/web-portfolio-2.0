'use client';

import { useEffect, useRef, useState } from 'react';

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInView({
  threshold = 0.1,
  rootMargin,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
