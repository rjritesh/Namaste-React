import { Link } from "react-router-dom";
import { Main_API } from "../utils/constants";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Homepage = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Main_API);
    const json = await data.json();
    let restaurants;

    for (let i = 0; i < json.data.cards.length; i++) {
      const card = json.data.cards[i];
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
        break;
      }
    }

    setListOfRestaurent(restaurants);
    setFilteredRestaurent(restaurants);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!!!!</h1>;

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen px-4 py-8 flex flex-col gap-8 bg-gray-50">
      {/* 🔍 Search & Filter */}
      <div className="flex flex-wrap justify-around items-center gap-4">
        <button
          className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-semibold"
          onClick={() => {
            const topRated = listOfRestaurent.filter(
              (res) => parseFloat(res?.info?.avgRating) > 4
            );
            setListOfRestaurent(topRated); // ✅ This is the fix
          }}
        >
          Top Restaurants
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search Foods and Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md w-full sm:w-64 focus:outline-none"
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurent.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase()) ||
                res?.info?.cuisines
                  .join(", ")
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurent(filteredRes);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* 📦 Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredRestaurent.length === 0 ? (
          <div className="text-center text-orange-500 font-bold text-xl">
            404 Taste Not Found! 😵‍💫🍽️
          </div>
        ) : (
          filteredRestaurent.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurants/" + restaurent.info.id}
            >
              <Card resData={restaurent} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
