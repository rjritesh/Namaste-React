import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import useHorizontalScroll from '../hooks/useHorizontalScroll';

const MovieList = ({ title, movies }) => {
  const { containerRef, scrollLeft, scrollRight } = useHorizontalScroll(200);

  return (
    <div className="mb-6 relative">
      <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 px-4">
        {title}
      </h1>

      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 hover:bg-black/70"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full z-10 hover:bg-black/70"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>

      <div
        className="flex overflow-x-scroll hide-scrollbar gap-3 sm:gap-4 md:gap-5 px-4"
        ref={containerRef}
      >
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <MovieCard poster={movie.poster_path} title={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
