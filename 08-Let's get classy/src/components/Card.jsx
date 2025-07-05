import { CDN_URL } from "../utils/constants";

const Card = ( {resData} ) => {
  // const { resData } = props;

   const 
  { name,
     cuisines,
      avgRating, 
      sla, 
      locality,
      cloudinaryImageId } = resData.info;
  return (
    <div className="card">
      <div className="cardImg">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="resName">{name}</div>
      <div className="resInfo">
        <div className="rating">⭐{avgRating}</div>
        <div className="time">{sla?.slaString}</div>
      </div>
      <div className="menus">{cuisines.join(", ")} </div>
    <div className="location">{`${locality}, ${resData.info.areaName}`}</div>

    </div>
  );
  
};

export default Card;