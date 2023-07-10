/** @format */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const { data: banners = [], isLoading } = useQuery({
    queryKey: ["Banner"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/banner");
      return res.data;
    },
  });

  return (
    <div>
      <Carousel
        autoPlay={true}
        axis="horizontal"
        infiniteLoop={true}
        className="text-center"
      >
        {banners &&
          banners.map((banner) => (
            <div key={banner._id}>
              <img src={banner.bannerImage} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Banner;
