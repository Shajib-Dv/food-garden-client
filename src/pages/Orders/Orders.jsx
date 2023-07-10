/** @format */

import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Orders = () => {
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/orders");
      return res.data;
    },
  });

  const totalPrice = orders?.reduce((sum, item) => item.price + sum, 0);
  const deliveryTime = orders?.reduce((sum, item) => item.cookingTime + sum, 0);

  return (
    <div className="px-4">
      <SectionTitle
        heading="Please process your order"
        subHeading="Order Summary"
      />
      <div className="flex items-center flex-col md:flex-row justify-evenly ">
        <h3 className="text-xl">Total Items: {orders?.length}</h3>
        <h3 className="text-xl">Total Price: ${totalPrice.toFixed(2)}</h3>
        <h3 className="text-xl">
          Estimated Delivery Time: {(deliveryTime / orders?.length).toFixed(2)}{" "}
          min.
        </h3>
        <button className="btn btn-warning btn-sm">
          <p>Pay</p>
        </button>
      </div>
      <div className="overflow-x-auto w-full my-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Dish Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, indx) => (
              <tr key={order?._id}>
                <th>{indx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={order?.foodImage} />
                    </div>
                  </div>
                </td>
                <td>{order?.foodName}</td>
                <td>${order?.price}</td>
                <td>{order?.quantity}</td>
                <td>{order?.cookingTime} min</td>
                <th>
                  <button className="bg-red-700 flex items-center justify-center text-white btn-circle">
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
