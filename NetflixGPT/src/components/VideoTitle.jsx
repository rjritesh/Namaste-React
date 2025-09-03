import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
const VideoTitle = ({ id, title, overview }) => {

  const navigate = useNavigate();


  return (
    <div className="absolute w-full aspect-video bg-gradient-to-r from-black p-6 sm:p-12 text-white flex flex-col justify-center mb-28">
      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-6xl mb-4 pt-20 sm:pt-0">{title}</h1>

      {/* Overview */}
      <p className="hidden md:inline-block w-1/3 mb-6 text-sm sm:text-lg">{overview}</p>

      {/* Buttons */}
      <div
        className="
          flex gap-3 sm:gap-4
          absolute bottom-6 left-6
          sm:static sm:mt-0 md:m-0 -my-20
        "
      >
        <button className="bg-white text-black px-3 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg font-semibold flex justify-center items-center gap-1 sm:gap-2 text-sm sm:text-lg hover:bg-gray-300 cursor-pointer "
          onClick={() => navigate(`/movie/${id}`)}
        >
          <Play className="text-black fill-black w-4 h-4 sm:w-6 sm:h-6"
          />
          Play
        </button>
        <button className="bg-gray-700 font-semibold  justify-center items-center gap-1 sm:gap-2 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-md sm:rounded-lg text-sm sm:text-lg hover:bg-gray-600 cursor-pointer  ">

          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
