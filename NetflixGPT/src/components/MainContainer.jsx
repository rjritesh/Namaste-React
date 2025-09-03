import { useSelector } from "react-redux";
import VideoTitle from "../components/VideoTitle";
import VideoBg from "../components/VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative w-full pt-[25%] sm:pt-0 bg-black">
      {/* Video background */}
      <div className="w-full relative overflow-hidden">
        <VideoBg movieId={id} />
      </div>

      {/* Video title overlay */}
      <div className="absolute inset-0 flex items-center justify-start">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
