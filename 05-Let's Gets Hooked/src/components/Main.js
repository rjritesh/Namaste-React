// import lists from "../data/Restaurent";
import Card from "../components/Card";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";

const Main = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.56430&lng=88.36930&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // const restaurentData = json?.data?.cards?.find((item) =>
    //   item?.card?.card?.id?.includes("restaurant_grid")
    // )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
 
    setListOfRestaurent(
      json?.data?.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurent.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="container">
      <div className="inputField">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurent.filter(
              (res) => res.rating > 4.2
            );
            setListOfRestaurent(filteredList);
          }}
        >
          Top Restaurents
        </button>
        <div className="searchBtn">
          <input type="text" placeholder="Search Foods and Restaurents" />
          <button>Search</button>
        </div>
      </div>

      <div className="cardContainer">
        {listOfRestaurent.map((restaurent) => (
          <Card key={restaurent.info.id} resData={restaurent}></Card>
        ))}
      </div>
    </div>
  );
};
export default Main;
