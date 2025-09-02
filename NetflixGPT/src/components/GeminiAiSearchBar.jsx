import { Search } from 'lucide-react';
import { useRef, useState } from 'react';
import genAI from '../utils/genAi';
import { API_OPTIONS } from '../utils/constants';
import GeminiAiSuggestion from './GeminiAiSuggestion';



const GeminiAiSearchBar = () => {
  const [aiSuggestedMovie, setAiSuggestedMovie] = useState([])
  const [loading, setLoading] = useState(false);


  const searchText = useRef(null);

  const tmdbSearchMovie = async (movie) => {
    const searchedMovie = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const data = await searchedMovie.json();

    return data.results
  }

  const handleGPTSearchClick = async () => {

    setLoading(true);
    setAiSuggestedMovie([]);
    const query = searchText.current.value.trim();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You are a movie recommendation system.
        Based on the user query: "${query}", suggest exactly 6 movies.
        - Only return the movie names 
        - Separate them with commas.
        - Do not add numbering or extra text.
        Example: Don, Sholay, War, Koi Mil Gaya, Dangal, Zindagi Na Milegi Dobara
      `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text().split(",");

    const promiseArray = responseText.map((movie) => tmdbSearchMovie(movie))

    const tmdbResults = await Promise.all(promiseArray);
    setAiSuggestedMovie(tmdbResults.flat())
    setLoading(false);

  }

  return (
    <div>
      <div className="relative flex items-center bg-zinc-800 rounded-lg shadow-lg mx-auto w-full max-w-xl mb-12">
        <input
          ref={searchText}
          type="text"
          placeholder="Search for movie, series and more..."
          className="w-full py-4 pl-12 pr-14 text-lg text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className="absolute right-2 p-3 text-white  hover:bg-zinc-700 hover:rounded-full cursor-pointer focus:outline-none" onClick={handleGPTSearchClick}>
          <Search size={24} />
        </button>

      </div>
      <GeminiAiSuggestion movies={aiSuggestedMovie}  loading={loading}></GeminiAiSuggestion>
    </div>
  )
}

export default GeminiAiSearchBar