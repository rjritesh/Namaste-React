import { TMDB_Img } from "../utils/constants";


const AiSuggestedMovieCard = ({ movie }) => {

  if(!movie.poster_path) return null
  return (
    <div className="bg-zinc-800 rounded-lg shadow-md p-4 w-56 text-center hover:scale-105 transition-transform">
      <img
        src={TMDB_Img + movie.poster_path}
        alt={movie.title}
        className="rounded-lg mb-2"
      />
      <h3 className="text-white text-lg font-semibold">{movie.title}</h3>
      <p className="text-gray-400 text-sm line-clamp-2">{movie.overview}</p>
    </div>
  );
}

export default AiSuggestedMovieCard