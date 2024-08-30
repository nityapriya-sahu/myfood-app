import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props.resData, "PPPPPP");
  const { resData } = props;
  return (
    <>
      <div className="card_container">
        <img
          src={`${CDN_URL}${props.resData.info.cloudinaryImageId}`}
          alt="food-img"
          className="food_img"
        />
        <h3>{resData.info.name}</h3>
        <div>{resData.info.avgRating}</div>
        <div>{resData.info.cuisines.join(", ")}</div>
        <div>{resData.info.sla.slaString}</div>
        <div>{resData.info.costForTwo}</div>
      </div>
    </>
  );
};

export default RestaurantCard;
