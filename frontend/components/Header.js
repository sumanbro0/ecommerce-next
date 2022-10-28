import Image from "next/image";
import React from "react";
const Header = (props) => {
  return (
    <div className=" relative  h-[70vh]">
      <Image
        priority={true}
        className="bg-cover  absolute"
        src={"/header.jpg"}
        layout={"fill"}
        alt="header"
      ></Image>
      <div className="path flex   z-20 text-white inset-0 flex-col justify-center items-center absolute w-full h-full bg-gradient-to-r from-[#000000c9] to-[#000000c4]">
        <div className="flex -translate-y-4 items-center flex-col">
          <h1 className="uppercase text-[2.5rem] pb-4 font-[600] ">
            {props.path}
          </h1>
          <p className="text-sm">Home / {props.path} </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
