import React, { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (data) => {
  //   console.log(data, "car=ter=");
  const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="accordion_container">
        <div className="header_container" onClick={handleClick}>
          {data?.data?.title}&nbsp;({data?.data?.itemCards.length}){" "}
          {!showItems ? <span>&#9660;</span> : <span>&#9650;</span>}
        </div>
        {showItems && <ItemsList items={data?.data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
