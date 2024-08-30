import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resCard } from "../utils/mockData";
import { Link } from "react-router-dom";

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
const Body = () => {
  const [filterSearch, setFilterSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  console.log(filterSearch, "HELLOHELLO");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      // "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      "https://foodfire.onrender.com/api/restaurants?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData, "GHJGHJJB");
    setFilterSearch(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // also need to update duplicate state variable
    setFilterRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // if (searchText.length === 0) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <>
      {filterSearch.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className="body_container">
          <div className="search_container">
            <div>
              <input
                type="text"
                name="textinput"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              &nbsp;
              <button
                onClick={() => {
                  const realSearchData = filterSearch.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilterRestaurants(realSearchData);
                }}
              >
                Search
              </button>
            </div>
            <button
              onClick={() => {
                const data = filterSearch.filter(
                  (res) => res.info.avgRating > 4.5
                );
                console.log(data);
                setFilterRestaurants(data);
              }}
            >
              Filter Search
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
            {filterRestaurants.map((item, index) => (
              // <Link key={item.info.id} to={`/restaurants/${item.info.id}`}>
              <RestaurantCard resData={item} />
              // </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
