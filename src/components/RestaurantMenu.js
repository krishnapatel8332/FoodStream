import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=393840&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRating, cuisines } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(" ,")}-{costForTwoMessage}
      </p>
      <h3>{avgRating}</h3>
      <h3>menu</h3>
      <ul>
        <div className="menu-container">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}-{" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
