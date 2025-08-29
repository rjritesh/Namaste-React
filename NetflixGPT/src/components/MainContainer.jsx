import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBg from "../components/VideoBg";

const MainContainer = () => {
  const movies = useSelector((store => store.movies?.nowPlayingMovies));
  if (!movies) return

  const mainMovie = movies[0];


  const { original_title, overview, id } = mainMovie

  return (
    <div>
      <VideoTitle title={original_title} overview={overview}></VideoTitle>
      <VideoBg movieId={id}></VideoBg>
    </div>
  )
}

export default MainContainer