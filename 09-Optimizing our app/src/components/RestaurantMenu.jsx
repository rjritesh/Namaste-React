// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL2 } from "../utils/constants";

import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {


  const { resId } = useParams()


  const { resInfo, menu } = useRestaurentMenu(resId)




  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage, locality } = resInfo;

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h2>{name}</h2>
        <p>{cuisines?.join(", ")}</p>
        <p>⭐{avgRating} • {costForTwoMessage}</p>
        <p className="area">{locality}</p>
      </div>

      <div className="menu-section">
        {menu.map((category, index) => (
          <div className="category" key={index}>

            <h3>{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})</h3>
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
