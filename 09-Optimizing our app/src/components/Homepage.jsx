// import lists from "../data/Restaurent";
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
    const data = await fetch(
      Main_API
    );
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

const  onlineStatus = useOnlineStatus();
if(onlineStatus === false) return <h1>Looks like you are offline!!!!</h1>
 
  return listOfRestaurent.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="container">
      <div className="inputField">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            // setListOfRestaurent(filteredList);
            setFilteredRestaurent(filteredList);

          }}
        >
          Top Restaurents
        </button>
        
        <div className="searchBtn">
          <input
            type="text"
            placeholder="Search Foods and Restaurents"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = listOfRestaurent.filter(
                (res) =>
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
          >
            Search
          </button>
        </div>
      </div>

      <div className="cardContainer">
        {filteredRestaurent.length === 0 ? (
          <div className="errorMsg">
            <h2>404 Taste Not Found! 😵‍💫🍽️</h2>
          </div>
        ) : (
          filteredRestaurent.map((restaurent) => (

            <Link key={restaurent.info.id} to={"/restaurants/" + restaurent.info.id} ><Card resData={restaurent}></Card></Link>

          ))
        )}
      </div>
    </div>
  );
};
export default Homepage;
