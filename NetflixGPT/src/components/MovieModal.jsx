import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TMDB_Img } from "../utils/constants";
import { Play, Plus, Heart } from "lucide-react";

const MovieModal = () => {
  const { movieId } = useParams();
  const movies = useSelector(store => store.movies);

  const movie = [
    ...movies.nowPlayingMovies,
    ...movies.popularMovies,
    ...movies.topRatedMovies,
    ...movies.upcomingMovies,
  ].find(m => m.id === parseInt(movieId));

  if (!movie)
    return <p className="text-white text-center mt-10">Movie not found!</p>;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105"
        src={TMDB_Img + (movie.backdrop_path || movie.poster_path)}
        alt={movie.title}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Modal Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-16 lg:px-24 pt-24 md:pt-32 flex flex-col gap-6 max-w-5xl mx-auto">
        {/* Movie Title */}
        <h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>

        {/* Movie Overview */}
        <p className="text-sm md:text-lg max-w-3xl">{movie.overview}</p>

        {/* Info */}
        <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
          <p><span className="font-semibold">Release:</span> {movie.release_date}</p>
          <p><span className="font-semibold">Rating:</span> {movie.vote_average}</p>
          <p><span className="font-semibold">Language:</span> {movie.original_language.toUpperCase()}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-6 mt-4">
          <button className="bg-white text-black flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-gray-200 transition">
            <Play className="w-5 h-5 md:w-6 md:h-6" /> Play Trailer
          </button>
          <button className="bg-gray-700 text-white flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-gray-600 transition">
            <Plus className="w-5 h-5 md:w-6 md:h-6" /> Add to Watchlist
          </button>
          <button className="bg-yellow-600 text-white flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold hover:bg-yellow-700 transition">
            <Heart className="w-5 h-5 md:w-6 md:h-6" /> Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
