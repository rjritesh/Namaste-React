import { useNavigate } from 'react-router-dom'
import { TMDB_Img } from '../utils/constants'

const MovieCard = ({ poster, id }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/movie/${id}`)}
      className="
        flex-shrink-0 
        w-28 h-40       /* 📱 small screens */
        sm:w-32 sm:h-48 /* 📱 slightly bigger phones */
        md:w-40 md:h-60 /* 💻 tablets/laptops */
        lg:w-42 lg:h-65 /* 🖥️ desktops */
        cursor-pointer 
        transform hover:scale-105 
        transition duration-300  
        mb-6
      "
    >
      <img
        src={TMDB_Img + poster}
        alt="movie poster"
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  )
}

export default MovieCard
