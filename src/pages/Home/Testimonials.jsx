/** @format */

import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const { data: reviews = [] } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axios.get(
        "https://food-garden-server.vercel.app/review"
      );
      return res.data;
    },
  });
  return (
    <section className="my-20">
      <SectionTitle subHeading="What our client says" heading="Testimonials" />
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews &&
          reviews.length > 0 &&
          reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="hero min-h-screen bg-[rgba(0,0,0,0.5)]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img
                    src={review?.image}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="md:w-1/2">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-yellow-600">
                      <h1 className="text-5xl font-bold">{review?.name}</h1>
                      <div className="flex gap-2 items-center">
                        <Rating
                          style={{ maxWidth: 140 }}
                          value={review?.ratings}
                          readOnly
                        />
                        <span>{review?.ratings}</span>
                      </div>
                    </div>
                    <p className="py-6">{review?.review}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
