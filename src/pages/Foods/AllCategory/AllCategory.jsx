/** @format */

import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FoodCard from "../FoodCard";

const AllCategory = () => {
  const [showAll, setShowAll] = useState(false);
  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["allFoods"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/foods`);
      return res.data;
    },
  });
  return (
    <>
      <SectionTitle
        heading={`Check Our Best Foods`}
        subHeading="Chose your best one"
      />
      {isLoading && (
        <div className="hero">
          <span className="loading text-yellow-500"></span>
        </div>
      )}
      {foods && Array.isArray(foods) && foods.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 my-20">
          {foods &&
            foods
              .slice(0, showAll ? foods.length : 6)
              .map((food) => <FoodCard key={food._id} food={food} />)}
        </div>
      )}
      {!showAll && !isLoading && (
        <div className="flex justify-center my-4">
          <button onClick={() => setShowAll(true)} className="primary-btn">
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default AllCategory;
