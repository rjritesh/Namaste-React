import { Ellipsis, Play } from "lucide-react";


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full aspect-video bg-gradient-to-r from-black p-12 text-white flex flex-col justify-center">
      {/* Title */}
      <h1 className="font-bold text-5xl mb-4">{title}</h1>

      {/* Overview */}
      <p className="w-1/3 mb-6 text-lg">{overview}</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex justify-center items-center gap-2 text-lg  hover:bg-gray-300 cursor-pointer">
          <Play className="text-black fill-black" /> Play
        </button>
        <button className="bg-gray-700 font-semibold flex justify-center items-center gap-2   text-white px-6 py-3 rounded-lg  hover:bg-gray-600 cursor-pointer">
          <Ellipsis /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
