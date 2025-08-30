import { TMDB_Img } from '../utils/constants'

const MovieCard = ({ poster }) => {
  return (
    <div className="flex-shrink-0 w-40 h-60 cursor-pointer transform hover:scale-101 transition duration-300 rounded-lg mb-10 ">
      <img
        src={TMDB_Img + poster}
        alt=""
        className="w-full h-full object-cover "
      />
    </div>
  )
}

export default MovieCard
