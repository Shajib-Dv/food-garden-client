/** @format */

import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const MenuList = () => {
  const { data: menus = [], isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/menu");
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitle
        subHeading="Order your favorite food now"
        heading="Our Menu"
      />
      <div className="flex gap-2 overflow-auto h-full">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24 h-64 md:h-96"
        >
          {menus &&
            menus.map((menu) => (
              <SwiperSlide key={menu._id}>
                <Link to={`/foods/${menu.menuName}`}>
                  <img
                    src={menu.menuImage}
                    className="h-full w-full object-cover"
                  />
                  <h3 className="md:text-4xl uppercase text-center -mt-20  text-yellow-500">
                    {menu.menuName}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MenuList;
