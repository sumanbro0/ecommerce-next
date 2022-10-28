import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
const Slider = () => {
  const carouselRef = useRef(null);
  let resetTimeout;
  let state = {
    items: [
      { id: 1, img: "/Drako.png" },
      { id: 2, img: "/Drako1.png" },
      { id: 3, img: "/Drako2.png" },
    ],
  };
  const totalPages = Math.ceil(state.items.length);
  const { items } = state;
  return (
    <Carousel
      enableAutoPlay
      autoPlaySpeed={3000}
      ref={carouselRef}
      onNextEnd={({ index }) => {
        clearTimeout(resetTimeout);
        if (carouselRef.current) {
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0);
            }, 4000);
          }
        }
      }}
      className="bg-[#f1f2f6] z-20"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="w-[100%] m-auto  bg-[#f1f2f6] flex flex-col h-auto md:flex-row items-center md:justify-around "
        >
          <div className="hero flex flex-col items-center md:items-start   ">
            <h1 className="md:text-[48px] text-[30px] text-[#1a1a1a] font-[600]">
              {`EVE'S`} ESSENCE
            </h1>
            <h3 className="md:text-[24px] text-[16px] text-[#1a1a1a] py-4 font-[400]">
              The most popular type of fragnance
            </h3>
            <button className="md:p-4 p-3 bg-black text-white text-lg ease duration-200 hover:bg-[#ac7c2d]">
              SHOP NOW
            </button>
          </div>
          <div className=" md:m-4">
            <Image
              src={item.img}
              alt={"perfume"}
              width={"500px"}
              height={"550px"}
            ></Image>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
