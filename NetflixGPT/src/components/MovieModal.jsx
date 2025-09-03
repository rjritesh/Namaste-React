import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const MovieModal = () => {
  const { movieId } = useParams();
  const movies = useSelector(store => store.movies); // already fetched movies

  // Find movie from all available categories
  const movie = [
    ...movies.nowPlayingMovies,
    ...movies.popularMovies,
    ...movies.topRatedMovies,
    ...movies.upcomingMovies,
  ].find(m => m.id === parseInt(movieId));

  if (!movie) return <p className="text-white text-center mt-10">Movie not found!</p>;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-4">{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
    </div>
  );
};

export default MovieModal;
