import Shimmer from "./Shimmer";
import { CDN_URL2 } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, menu } = useRestaurentMenu(resId);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage, locality } = resInfo;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Header */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
        <p className="text-gray-600 mb-1">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-700 mb-1">
          ⭐ {avgRating} • {costForTwoMessage}
        </p>
        <p className="text-sm text-gray-500">{locality}</p>
      </div>

      {/* Menu Sections */}
      <div className="flex flex-col gap-8">
        {menu.map((category, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-orange-500 border-b border-gray-200 pb-2 mb-4">
              {category?.card?.card?.title} ({category?.card?.card?.itemCards?.length})
            </h3>

            <div className="flex flex-col gap-5">
              {category?.card?.card?.itemCards?.map((item, i) => {
                const info = item?.card?.info;

                return (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-lg shadow-sm flex gap-4 items-start justify-between hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Left: Image */}
                    {info?.imageId && (
                      <img
                        src={CDN_URL2 + info.imageId}
                        alt={info.name}
                        className="w-36 h-28 object-cover rounded-md flex-shrink-0"
                      />
                    )}

                    {/* Right: Text & Button */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">
                          {info?.name} - ₹{info?.price / 100 || info?.defaultPrice / 100}
                        </h4>
                        {info?.description && (
                          <p className="text-sm text-gray-600 mt-1">{info.description}</p>
                        )}
                      </div>
                      <div className="mt-4">
                        <button className="px-4 py-1 bg-white border border-orange-500 text-orange-500 rounded-md text-sm font-semibold hover:bg-orange-50 transition">
                          ADD
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
