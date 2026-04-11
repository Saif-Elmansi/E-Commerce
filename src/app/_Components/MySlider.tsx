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

const swiperShellClass =
  "[&_.swiper-pagination]:!bottom-5 [&_.swiper-pagination-bullet]:!mx-1.5 [&_.swiper-pagination-bullet]:!h-2.5 [&_.swiper-pagination-bullet]:!w-2.5 [&_.swiper-pagination-bullet]:!rounded-full [&_.swiper-pagination-bullet]:!bg-slate-300/90 [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!bg-blue-600 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-button-prev]:!left-3 [&_.swiper-button-prev]:!text-blue-600 [&_.swiper-button-next]:!right-3 [&_.swiper-button-next]:!text-blue-600 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-prev]:!mt-0 [&_.swiper-button-next]:!mt-0 [&_.swiper-button-prev]:after:!text-xl [&_.swiper-button-next]:after:!text-xl [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!bg-white/90 [&_.swiper-button-next]:!bg-white/90 [&_.swiper-button-prev]:!shadow-md [&_.swiper-button-next]:!shadow-md [&_.swiper-button-prev]:ring-1 [&_.swiper-button-next]:ring-1 [&_.swiper-button-prev]:ring-slate-200/80 [&_.swiper-button-next]:ring-slate-200/80";

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
      className={`relative overflow-hidden rounded-3xl border border-slate-100/90 bg-linear-to-br from-white via-slate-50/40 to-blue-50/50 p-1 shadow-[0_8px_30px_-12px_rgba(37,99,235,0.15)] ring-1 ring-slate-100/80 ${className}`}
    >
      <div className="overflow-hidden rounded-[1.35rem] bg-white/80">
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
              : false
          }
          navigation={showNavigation}
          pagination={showPagination ? { clickable: true } : false}
          className={`px-2 py-3 pb-12 sm:px-3 sm:py-4 sm:pb-14 ${swiperShellClass}`}
        >
          {Listofimg.map((image) => (
            <SwiperSlide key={image}>
              <div className="group relative aspect-21/9 min-h-50 overflow-hidden rounded-2xl bg-linear-to-br from-slate-100 to-blue-50/60 ring-1 ring-slate-200/70 sm:min-h-60 md:rounded-3xl md:min-h-70 lg:min-h-80">
                {/* eslint-disable-next-line @next/next/no-img-element -- dynamic URLs from parent; same as before */}
                <img
                  src={image}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                  alt="Hero banner"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/35 via-slate-900/5 to-transparent"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15 md:rounded-3xl"
                  aria-hidden
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
