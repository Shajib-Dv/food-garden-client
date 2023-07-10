/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import FoodCard from "./FoodCard";
import SectionTitle from "../../components/SectionTitle";

const Foods = () => {
  const { category } = useParams();
  const { data: foods = [], isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/food/${category}`);
      return res.data;
    },
  });
  return (
    <>
      <SectionTitle
        heading={`Check Our Best ${category || "Food"}`}
        subHeading="Best for you"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 my-20">
        {foods && foods.map((food) => <FoodCard key={food._id} food={food} />)}
      </div>
    </>
  );
};

export default Foods;
