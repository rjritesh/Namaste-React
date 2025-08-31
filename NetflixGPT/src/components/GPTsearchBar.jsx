import { Search } from 'lucide-react';
import { useRef } from 'react';
import genAI from '../utils/genAi';


const GPTsearchBar = () => {
  const searchText = useRef(null);


  const handleGPTSearchClick = async () => {
    const query = searchText.current.value.trim();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
        You are a movie recommendation system.
        Based on the user query: "${query}", suggest exactly 6 movies.
        - Only return the movie names and overview
        - Separate them with commas.
        - Do not add numbering or extra text.
        Example: Don-overview, Sholay-overview, War-overview, Koi Mil Gaya-overview, Dangal-overview, Zindagi Na Milegi Dobara-overview
      `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    console.log(responseText);

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
    </div>
  )
}

export default GPTsearchBar