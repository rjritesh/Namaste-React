import { TMDB_Img } from "../utils/constants";
import Shimmer from "./Shimmer"; // optional shimmer component

const GeminiAiSuggestion = ({ movies, loading }) => {
  if (loading) return <Shimmer />; // show loading placeholder

  const validMovies = movies?.filter(movie => movie.poster_path);

  if (!validMovies || validMovies.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-8 m-10 bg-black">
      {validMovies.map((movie) => (
        <div
          key={movie.id}
          className="shadow-md w-40 h-60 cursor-pointer transform hover:scale-105 transition duration-300 overflow-hidden bg-black relative"
        >
          <img
            src={TMDB_Img + movie.poster_path}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-center p-1">
            <h3 className="text-white text-sm font-semibold truncate">
              {movie.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeminiAiSuggestion;
