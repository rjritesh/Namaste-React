import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="mb-6">
      {/* Section Title */}
      <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 px-4">
        {title}
      </h1>

      {/* Movie Cards Row */}
      <div className="flex overflow-x-scroll hide-scrollbar gap-3 sm:gap-4 md:gap-5 px-4">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0">
            <MovieCard poster={movie.poster_path} title={movie.title} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
