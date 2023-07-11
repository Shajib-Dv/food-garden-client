/** @format */

import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import EmptyData from "../../components/EmptyData";
import Loader from "../../components/Loader";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Orders = () => {
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/orders");
      return res.data;
    },
  });

  const totalPrice = orders?.reduce((sum, item) => item.price + sum, 0);
  const deliveryTime = orders?.reduce((sum, item) => item.cookingTime + sum, 0);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove the item",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d339",
      cancelButtonColor: "#308522",
      confirmButtonText: "Remove",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Item removed");
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="px-4">
      <SectionTitle
        heading="Please process your order"
        subHeading="Order Summary"
      />
      <div className="stats bg-yellow-400 text-white w-full ">
        <div className="stat w-full">
          <div className="stat-title text-black font-semibold">Total Items</div>
          <div className="stat-value">{orders?.length || 0}</div>
        </div>

        <div className="stat w-full">
          <div className="stat-title text-black font-semibold">Total Price</div>
          <div className="stat-value">${totalPrice.toFixed(2) || 0}</div>
        </div>

        <div className="stat w-full">
          <div className="stat-title text-black font-semibold">
            Delivered in
          </div>
          <div className="stat-value">
            {(deliveryTime / orders?.length).toFixed(2) || 0} min
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        orders.length < 0 && (
          <EmptyData
            go="Orders"
            to={"/orders"}
            message="Please make some orders"
            reason="No orders found"
          />
        )
      )}

      {orders && Array.isArray(orders) && orders.length > 0 && (
        <div className="overflow-x-auto w-full my-10">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Sl.</th>
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
                    <button
                      onClick={() => handleRemove(order._id)}
                      className="bg-red-700 flex items-center justify-center text-white btn-circle"
                    >
                      <FaTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
