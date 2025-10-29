const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <div></div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {name}
      </h3>
      <h4
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        {cuisines.join(" , ")}
      </h4>
      <div className="text">
        <h4 className="avgRate">{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
