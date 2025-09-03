import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black w-full">
      <div
        className="
          relative z-20 
          px-2 sm:px-4 md:px-6 lg:px-12 
          -mt-0 sm:-mt-32 md:-mt-48 lg:-mt-64 xl:-mt-72
        "
      >
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies?.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
