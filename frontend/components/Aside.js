import React from "react";
import Image from "next/image";
const Aside = () => {
  return (
    <div className="card flex flex-col px-16  justify-around items-center bg-white h-[500px]  w-[400px] relative">
      <h1 className="text-[#1a1a1a] text-3xl font-[500]">{`EVE'S ESSENCE`}</h1>
      <Image
        alt="image"
        src={"/Drako1.png"}
        width={"225px"}
        height={"225px"}
      ></Image>
      <p className="text-[#1a1a1a] text-center font-[400] text-[14px]">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        praesentium error quibusdam temporibus. Nihil velit, sit modi pariatur
        similique vitae.
      </p>
      <button className="p-4  bg-black text-white text-lg ease duration-200 hover:bg-[#ac7c2d]">
        SHOP NOW
      </button>
    </div>
  );
};

export default Aside;
