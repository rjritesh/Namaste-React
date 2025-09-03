import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(movieId)

  if (!trailerVideo) return null

  return (
    <div className="relative w-full">
      {/* Background Video */}
      <iframe
        className="w-full aspect-video object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {/* Dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full max-h-[100%] bg-gradient-to-b from-black/40 to-black/90 pointer-events-none"></div>
    </div>
  )
}

export default VideoBg
