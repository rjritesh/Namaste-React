import { TMDB_Img } from "../utils/constants";

const AiSuggestedMovieCard = ({ movie }) => {
  if (!movie.poster_path) return null;

  return (
  <div className="shadow-md w-40 h-60 cursor-pointer transform hover:scale-105 transition duration-300 overflow-hidden bg-black relative">
  {/* Poster */}
  <img
    src={TMDB_Img + movie.poster_path}
    alt={movie.title}
    className="w-full h-full object-cover rounded-lg"
  />

  {/* Title overlay */}
  <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center p-1">
    <h3 className="text-white text-sm font-semibold truncate">
      {movie.title}
    </h3>
  </div>
</div>

  );
};

export default AiSuggestedMovieCard;
