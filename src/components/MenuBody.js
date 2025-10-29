import React from "react";
import "";
const MenuBody = ({ image, title, description, price }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
        <p className="card-price">Rs. {price}</p>
        <button className="card-btn">Order Now</button>
      </div>
    </div>
  );
};

export default MenuBody;
