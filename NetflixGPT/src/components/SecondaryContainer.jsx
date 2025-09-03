import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black w-full">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 -mt-60 relative z-20">
        <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies?.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies?.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
