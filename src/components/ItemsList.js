import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemsList = (items) => {
  // console.log(items, "HJHJHJ");

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    // dispatch(addItem('Laddu'));
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.items.map((e) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid yellow",
            padding: "10px",
          }}
          key={e.card.info.id}
        >
          <div>
            <div
              style={{
                fontSize: "16px",
                color: "rgb(62, 97, 193)",
                paddingBottom: "5px",
              }}
            >
              {e.card.info.name}
            </div>
            <div style={{ fontSize: "10px" }}>{e.card.info.description}</div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              ₹{" "}
              {e.card.info.price
                ? e.card.info.price / 100
                : e.card.info.defaultPrice / 100}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <img
              src={`${CDN_URL}${e.card.info.imageId}`}
              alt="items"
              style={{
                height: "100px",
                width: "150px",
                borderRadius: "5px",
              }}
            />
            <button onClick={() => handleAddItem(e)} className="login_btn">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
