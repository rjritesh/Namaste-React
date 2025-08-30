
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector(Store => Store?.movies);

  return (
    <div className=" bg-black">
      <div className=' px-12 -mt-60 relative z-20'>  <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}></MovieList>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}></MovieList>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}></MovieList>
      </div>

    </div>
  )
}

export default SecondaryContainer