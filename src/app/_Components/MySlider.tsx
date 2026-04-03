"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MySliderType {
  Listofimg: string[];
  spaceBetween?: number;
  slidesPerView?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  autoplayDisableOnInteraction?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
}

export default function MySlider({
  Listofimg,
  spaceBetween = 24,
  slidesPerView = 3,
  loop = true,
  autoplay = false,
  autoplayDelay = 2500,
  autoplayDisableOnInteraction = false,
  showNavigation = true,
  showPagination = true,
  className = "",
}: MySliderType) {
  if (!Listofimg?.length) return null;

  return (
    <div
      className={`rounded-3xl border border-gray-100 bg-white/70 shadow-sm ${className}`}
    >
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: autoplayDisableOnInteraction,
              }
            : true
        }
        navigation={showNavigation}
        pagination={showPagination ? { clickable: true } : false}
        className="px-3 py-4 pb-10"
      >
        {Listofimg.map((image) => (
          <SwiperSlide key={image}>
            <div className="group relative h-150 sm:h-150 overflow-hidden rounded-3xl border border-gray-100 bg-slate-50">
              <img
                src={image}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                alt="product image"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
