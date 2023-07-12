/** @format */

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const FoodCard = ({ food }) => {
  const {
    _id,
    foodImage,
    foodCategory,
    description,
    foodName,
    price,
    cookingTime,
  } = food;

  const [isOrder, setIsOrder] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleOrder = (id) => {
    if (quantity <= 0 || isNaN(quantity)) {
      toast.error("Invalid quantity");
      return;
    }

    const orderInfo = {
      foodId: _id,
      foodImage,
      foodCategory,
      foodName,
      price,
      quantity: parseInt(quantity),
      cookingTime,
    };

    axios.post(`https://food-garden-server.vercel.app/orders/${id}`, orderInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Order successfully added");
      } else if (res.data.message) {
        toast.error("Already added");
      }
      setIsOrder(false);
    });
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={foodImage} className="w-full h-80 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-warning">{foodCategory}</div>
        </h2>
        <p onClick={() => setIsOrder(false)} className="py-2">
          {description}
        </p>
        <div className="card-actions justify-between items-center">
          <span className="text-yellow-500 font-bold">${price}</span>
          {isOrder && (
            <input
              onChange={(e) => setQuantity(e.target.value)}
              type="number"
              min={0}
              name="quantity"
              placeholder="Select Quantity"
              className="input input-warning focus:outline-none w-full md:w-auto"
            />
          )}
          {!isOrder ? (
            <button onClick={() => setIsOrder(true)} className="primary-btn">
              Order Now
            </button>
          ) : (
            <button onClick={() => handleOrder(_id)} className="primary-btn">
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
