import React from "react";
import Image from "next/image";
import { FaTint, FaMercury, FaPiedPiperAlt } from "react-icons/fa";

const Joy = () => {
  return (
    <div>
      <div className="relative md:h-[120vh] h-[170vh]">
        <Image
          src={"/joy1.jpg"}
          layout={"fill"}
          priority={true}
          alt={"img"}
        ></Image>
        <div className="absolute inset-0 h-full w-full bg-[#f1f2f6b4]">
          <div className="flex  flex-col ">
            <h1 className="text-black text-center font-[600] text-[45px] md:text-[72px]">
              NEW ESSENCE OF JOY
            </h1>
            <div className="grid grid-cols-1 content-center w-[80%] mx-auto md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <div className="flex flex-col m-2">
                  <div className="icon bg-black hover:bg-white duration-200 ease-linear hover:text-[#ac7c2d] p-2 w-[64px] text-5xl text-white ">
                    <FaTint className=" p-3 " />
                  </div>
                  <p className="text-sm font-[300] px-4 pr-8">
                    Tincidunt arcu non sodales neque sodales ut etiam sit. Erat
                    velit scelerisque in dictum. Turpis egestas integer eget
                    aliquet nibh praesent tristique magna nec ultrices dui
                    sapien.
                  </p>
                </div>
                <div className="flex flex-col m-2">
                  <div className="icon bg-black hover:bg-white duration-200 ease-linear hover:text-[#ac7c2d] p-2 w-[64px] text-5xl text-white ">
                    <FaMercury className=" p-3 " />
                  </div>
                  <p className="text-sm font-[300] px-4 pr-8">
                    Tincidunt arcu non sodales neque sodales ut etiam sit. Erat
                    velit scelerisque in dictum. Turpis egestas integer eget
                    aliquet nibh praesent tristique magna nec ultrices dui
                    sapien.
                  </p>
                </div>
                <div className="flex flex-col m-2">
                  <div className="icon bg-black hover:bg-white duration-200 ease-linear hover:text-[#ac7c2d] p-2 w-[64px] text-5xl text-white ">
                    <FaPiedPiperAlt className=" p-3 " />
                  </div>
                  <p className="text-sm font-[300] px-4 pr-8">
                    Tincidunt arcu non sodales neque sodales ut etiam sit. Erat
                    velit scelerisque in dictum. Turpis egestas integer eget
                    aliquet nibh praesent tristique magna nec ultrices dui
                    sapien.
                  </p>
                </div>
              </div>
              <div className="my-8 ">
                <Image
                  src={"/joy.jpg"}
                  width={"525px"}
                  height={"546px"}
                  alt={"img"}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joy;
