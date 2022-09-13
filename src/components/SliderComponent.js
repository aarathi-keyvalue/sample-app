import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderComponent() {
  return (
    <>
      <Swiper
      style={{"--swiper-navigation-size": "40px"}}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{ "--swiper-navigation-size": "20px" }}
      >
        <SwiperSlide>
          <img
            className="object-fill w-full rounded-lg relative"
            src="/images/banner1.jpg"
            alt="image slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-fill w-full rounded-lg relative"
            src="/images/banner2.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
