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

        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.areaName}</h5>
        <h4 style={{ margin: "3px" }}>{resData.info.sla.slaString}</h4>
        <span>
          <h4 style={{ background: "#00ad1d", color: "white" }}>
            &#9734; {resData.info.avgRating}
          </h4>
          {/* <h5>•</h5> */}
          <h4>{resData.info.sla?.lastMileTravelString ?? "2.0 km"}</h4>
          {/* <h5>•</h5> */}
          <h4>{resData.info.costForTwo}</h4>
        </span>
      </div>
    </>
  );
};

export default RestaurantCard;
