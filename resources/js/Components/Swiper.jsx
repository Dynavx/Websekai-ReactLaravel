import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App({movies}) {

    var gambar = "/images/"
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <div>
                    {movies.map((movies) => (
                        <SwiperSlide key={movies.id}>
                            {" "}
                            <img
                                src={"/storage/" + movies.thumbnail}
                                alt=""
                                className="absolute h-full -z-10 w-full object-cover rounded-2xl"
                            />
                            <div className="relative bg-black bg-opacity-40 pt-44 px-5 pb-4 lg:px-20 lg:py-28 rounded-2xl">
                                <h1 className="text-2xl font-bold md:text-3xl text-slate-100">
                                    {movies.name}
                                </h1>
                                <p className="text-sm md:text-base text-slate-300">
                                    {movies.category}
                                </p>
                                <div className="flex mt-2">
                                    <button className="flex bg-green-500 text-white py-1 px-4 rounded-full mr-5">
                                        <span className="self-center">
                                            <i className="bx bx-play"></i>
                                        </span>
                                        <p className="self-center">Play</p>
                                    </button>
                                    <button className="flex bg-transparent border-2 border-white text-white py-1 px-4 rounded-full">
                                        <span>
                                            <i className="bx bx-plus"></i>
                                        </span>
                                        <p>My List</p>
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    );
}
