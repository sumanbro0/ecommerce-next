import React from "react";
import Image from "next/image";

const Section = () => {
  return (
    <div className="relative flex mx-auto w-[100%] h-[720px] md:h-auto">
      <Image
        className="absolute bg-cover bg-no-repeat "
        src={"/source.jpg"}
        alt={"banner"}
        width={"1400"}
        height={"720px"}
      ></Image>
      <div className="absolute h-auto bg-blend-soft-light inset-0 bg-gradient-to-r from-[#00000040] via-[#00000020] to-[#00000040] text-[#f1f2f6]    flex flex-col items-center justify-center ">
        <h3 className="text-[1em] m-2 md:m-4">
          HIGHEST CONCENTRATION OF FRAGNANCE
        </h3>
        <h1 className="md:text-[72px] m-2 md:m-4 font-[600] md:font-[700] text-[45px]">
          THE SCENTURY
        </h1>
        <p className="text-[1rem] m-4 text-center ">
          LLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis
          libero placerat cursus cursus.
        </p>
        <button className="p-4 m-2 md:m-8 bg-[#ac7c2d] font-bold text-white text-base  ease duration-200 hover:bg-white hover:text-[#ac7c2d]">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Section;
{
  /* <div className="outer h-[360px]  text-[#f1f2f6]   absolute z-10 inset-0 flex flex-col items-center justify-around "> */
}
