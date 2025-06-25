import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL2 } from "../utils/constants";
import { Menu_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [menu, setMenu] = useState([]);

 

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      Menu_API
    );
    const json = await data.json();

    // Restaurant Info
    const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.info?.name
    );
    setResInfo(restaurantCard?.card?.card?.info);

    // Menu Cards
    const regularCards = json?.data?.cards?.find(
      (card) => card?.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    // Filter only item categories
    const categories = regularCards?.filter(
      (card) => card?.card?.card?.itemCards
    );

    setMenu(categories || []);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } = resInfo;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h2>{name}</h2>
        <p>{cuisines?.join(", ")}</p>
        <p>⭐ {avgRating} • {costForTwoMessage}</p>
      </div>

      <div className="menu-section">
        {menu.map((category, index) => (
          <div className="category" key={index}>

            <h3>{category?.card?.card?.title}</h3>
            {category?.card?.card?.itemCards?.map((item, i) => {
              const info = item?.card?.info;
              return (
                <div className="menu-item" key={i}>
                  {info?.imageId && (
                    <img
                      src={CDN_URL2 + info.imageId}
                      alt={info.name}

                    />
                  )}
                  <h4>{info?.name} - ₹{info?.price / 100 || info?.defaultPrice / 100}</h4>
                  <p>{info?.description}</p>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
