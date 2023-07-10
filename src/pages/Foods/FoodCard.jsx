/** @format */

import React from "react";

const FoodCard = ({ food }) => {
  const { foodImage, foodCategory, description, foodName, price } = food;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={foodImage} className="w-full h-80 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-secondary">{foodCategory}</div>
        </h2>
        <p className="py-2">{description}</p>
        <div className="card-actions justify-between items-center">
          <p className="text-yellow-500 font-bold">${price}</p>
          <button className="primary-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
