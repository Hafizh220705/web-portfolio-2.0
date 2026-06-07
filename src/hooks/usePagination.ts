import { useState, useRef, useCallback } from 'react';

type UsePaginationOptions = {
  totalItems: number;
  itemsPerPage: number;
};

export function usePagination({ totalItems, itemsPerPage }: UsePaginationOptions) {
  const [currentPage, setCurrentPage]   = useState(1);
  const [isAnimating, setIsAnimating]   = useState(false);
  const [lockedHeight, setLockedHeight] = useState<number | undefined>(undefined);
  const gridRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const goToPage = useCallback(
    (newPage: number) => {
      if (newPage === currentPage || isAnimating) return;

      if (gridRef.current) setLockedHeight(gridRef.current.offsetHeight);
      setIsAnimating(true);

      setTimeout(() => setCurrentPage(newPage), 350);
      setTimeout(() => setIsAnimating(false), 400);
      setTimeout(() => setLockedHeight(undefined), 750);
    },
    [currentPage, isAnimating],
  );

  const nextPage = useCallback(
    () => goToPage(currentPage < totalPages ? currentPage + 1 : 1),
    [currentPage, totalPages, goToPage],
  );

  const prevPage = useCallback(
    () => goToPage(currentPage > 1 ? currentPage - 1 : totalPages),
    [currentPage, totalPages, goToPage],
  );

  const currentItems = useCallback(
    <T>(items: T[]): T[] =>
      items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [currentPage, itemsPerPage],
  );

  return {
    currentPage,
    totalPages,
    isAnimating,
    lockedHeight,
    gridRef,
    goToPage,
    nextPage,
    prevPage,
    currentItems,
  };
}