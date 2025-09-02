

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 rounded-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl font-bold"
        >
          &times;
        </button>

        {/* Movie Poster */}
        <div className="w-full h-64 mb-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Movie Info */}
        <h2 className="text-white text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-300 mb-2">{movie.overview}</p>
        <p className="text-gray-400 text-sm">
          Release Date: {movie.release_date}
        </p>
        <p className="text-gray-400 text-sm">
          Rating: {movie.vote_average} / 10
        </p>
        {/* Add more info as needed */}
      </div>
    </div>
  );
};

export default MovieModal;
