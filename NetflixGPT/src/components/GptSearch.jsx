import { Search } from 'lucide-react';

const MovieGPTSearch = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black relative">
   

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-32">
        {/* Welcome Text */}
        <div className="text-center text-zinc-300 mb-8">
          <h1 className="text-4xl font-bold">Discover Movies Smarter with CineoAI</h1>
          <p className="text-xl mt-2">Not sure what to watch? Ask CineoAI</p>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center bg-zinc-800 rounded-lg shadow-lg mx-auto w-full max-w-xl mb-12">
          <input
            type="text"
            placeholder="Search for movie, series and more..."
            className="w-full py-4 pl-12 pr-14 text-lg text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="absolute right-2 p-3 text-white  hover:bg-zinc-700 hover:rounded-full cursor-pointer focus:outline-none">
            <Search size={24} />
          </button>
        </div>

  
      </div>
    </div>
  );
};

export default MovieGPTSearch;
