import { CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    sla,
    locality,
    cloudinaryImageId,
    areaName,
  } = resData.info;

  return (
    <div className="w-70 max-w-[90vw]  rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden cursor-pointer relative ">

      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 truncate">{name}</h3>

        <div className="flex justify-between items-center text-sm text-gray-600 mb-1">
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">
            ⭐ {avgRating}
          </span>
          <span>{sla?.slaString}</span>
        </div>

        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <p className="text-xs text-gray-500 mt-2">{`${locality}, ${areaName}`}</p>
      </div>
    </div>
  );

};



export const promotedRestaurent = (Card) => {
  return (props) => {
    return (
      <div className="relative w-70 max-w-[90vw] rounded-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <label className="absolute inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full m-2 z-10">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          Veg
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
