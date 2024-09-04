import React, { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //   console.log(params, "params"); //its a object which gives resId

  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      `https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&&submitAction=ENTER&restaurantId=${resId}`
    );
    let jsonData = await data.json();
    console.log(jsonData, "Data Called");
    setResInfo(jsonData?.data);
  };
  //   data destructure of name of data
  //   const {
  //     name,
  //     areaName,
  //     city,
  //     avgRating,
  //     cloudinaryImageId,
  //     costForTwoMessage,
  //     cuisines,
  //   } = resInfo?.cards[2]?.card?.card?.info;
  //-------------------------------
  //   const { itemCards } =
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //   console.log(itemCards, "ggvghvghv");
  //---------------------------------
  //   console.log(
  //     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.itemCards,
  //     "hggyugygy"
  //   );

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }

  // for future: use this itemCategory for accordion (time: 45:00)
  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCategory, "kkkkkk");

  return (
    <div className="main_container">
      <div className="res_card_container">
        <h1 style={{ textAlign: "center" }}>
          {resInfo?.cards[2]?.card?.card?.info?.name}
        </h1>
        <div
          style={{
            display: "flex",
            columnGap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={`${CDN_URL}${resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId}`}
            alt="menu-card"
            style={{ height: "150px", width: "300px" }}
          />
          <div>
            <h5>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h5>
            <h5>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h5>
            <h5
              style={{
                background: "green",
                color: "white",
                width: "40px",
                borderRadius: "5px",
                textAlign: "center",
                padding: "3px",
              }}
            >
              &#9734; {resInfo?.cards[2]?.card?.card?.info?.avgRating}
            </h5>
            <h5>
              {resInfo?.cards[2]?.card?.card?.info?.areaName},{" "}
              {resInfo?.cards[2]?.card?.card?.info?.city}
            </h5>
          </div>
        </div>
      </div>
      <h2>Recommended Items</h2>
      {itemCategory.map((e, ind) => (
        <RestaurantCategory key={ind} data={e?.card?.card} />
      ))}

      {/* <ul>
        {itemCategory[2]?.card?.card?.itemCards.map((item, index) => {
          return (
            <li key={index}>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100}/-
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
