import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-white text-2xl font-bold mb-2 px-4">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar gap-5 px-4 ">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 ">
            <MovieCard poster={movie.poster_path} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList
