import GeminiAiSearchBar from "./GeminiAiSearchBar";
import GeminiAiSuggestion from "./GeminiAiSuggestion"

const GeminiAISearchPage = () => {
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

        <GeminiAiSearchBar></GeminiAiSearchBar>
   

      </div>
    </div>
  );
};

export default GeminiAISearchPage;
