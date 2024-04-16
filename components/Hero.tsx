"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { heroImages } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="lg:h-[calc(100vh-90px)]"
      >
        {
          heroImages.map((image) => (
            <SwiperSlide>
              <Image 
                src={image.imgUrl}
                alt={image.description}
                width={1080}
                height={1080}
                className="w-full h-full object-fit"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
