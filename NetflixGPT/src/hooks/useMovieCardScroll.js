import { useRef } from 'react';

const useHorizontalScroll = (scrollAmount = 200) => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return { containerRef, scrollLeft, scrollRight };
};

export default useHorizontalScroll;
