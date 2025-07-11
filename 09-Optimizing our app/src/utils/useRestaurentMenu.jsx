import { useEffect, useState } from "react";
import { Menu_API } from "../utils/constants";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menu, setMenu] = useState([]);

   useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      Menu_API + resId
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
  return {resInfo,menu}
}

export default useRestaurentMenu;
