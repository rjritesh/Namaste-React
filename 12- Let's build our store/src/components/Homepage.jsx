import { Link } from "react-router-dom";
import { Main_API } from "../utils/constants";
import Card, { promotedRestaurent } from "./Card";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import SearchButton from "./SearchButton";


const Homepage = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);

  const RestaurentCardWithPromoted = promotedRestaurent(Card)


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


  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen px-4 py-8 flex flex-col gap-8 bg-gray-50">
      {/* 🔍 Search & Filter */}
      <div className="flex flex-wrap justify-around items-center gap-4">


        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <SearchButton
            listOfRestaurent={listOfRestaurent}
            setFilteredRestaurent={setFilteredRestaurent}
          />

        </div>
      </div>

      {/* 📦 Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-10">
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
              {restaurent.info.veg ? <RestaurentCardWithPromoted resData={restaurent} /> : <Card resData={restaurent} />}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Homepage;
