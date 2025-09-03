import GeminiAiSearchBar from "./GeminiAiSearchBar";

const GeminiAISearchPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black relative">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-24 sm:pt-32 px-4 sm:px-6 lg:px-0">

        {/* Welcome Text */}
        <div className="text-center text-zinc-300 mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Discover Movies Smarter with CineoAI
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-1 sm:mt-2">
            Not sure what to watch? Ask CineoAI
          </p>
        </div>

        {/* Search Bar */}
        <GeminiAiSearchBar />

      </div>
    </div>
  );
};

export default GeminiAISearchPage;
