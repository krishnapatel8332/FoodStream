import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofres, setlistofres] = useState([]);
  const [searchText, setsearchText] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage -enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setlistofres(
      // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredData(
      // json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (listofres.length === 0) {
  //   return <Shimmer />;
  // }

  return listofres.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listofres.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredData(filtered);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          style={{ marginLeft: 20 }}
          onClick={() => {
            const filteredList = listofres.filter(
              (res) => res.info.avgRating > 4.5
            );
            setfilteredData(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
