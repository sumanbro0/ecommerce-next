import React from "react";
import Image from "next/image";
import Socials from "./Socials";
const Team = () => {
  return (
    <div className=" bg-[#f1f2f6] flex flex-col h-auto py-[4rem] justify-center ">
      <h1 className="text-black mx-auto font-[600] text-[45px] md:text-7xl">
        OUR TEAM
      </h1>
      <p className="text-black mx-auto md:mt-4 mt-2 font-[600] text-[1rem]">
        Board Members
      </p>
      <p className="text-black mx-auto md:mt-4 mt-2 font-[300] text-sm">
        Quam adipiscing vitae proin sagittis nisl rhoncus
      </p>

      <div className="  width-[90%] cursor-pointer mx-auto pt-[2rem] flex flex-col md:flex-row justify-between  ">
        <div className="relative mt-4 mr-4">
          <Image
            className=" mx-[1rem]"
            width={"250px"}
            height={"250px"}
            src={"/team.jpg"}
            alt={"team"}
          ></Image>
          <div className="bg-[#ffffff79] items-center  z-1 ease-in duration-300 inset-0 opacity-0 hover:opacity-100 absolute h-[250px] w-[250px]">
            <Socials />
          </div>
          <div className="w-[250px] mt-2 flex flex-col items-center">
            <span className="name mt-2  font-bold text-[20px] block">
              Alicia Woods
            </span>
            <sh6 className="post mt-2  font-semibold  block">
              Office Manager
            </sh6>
          </div>
        </div>
        <div className="relative mt-4 mr-4">
          <Image
            className=" mx-[1rem]"
            width={"250px"}
            height={"250px"}
            src={"/team1.jpg"}
            alt={"team"}
          ></Image>
          <div className="bg-[#ffffff79] items-center  z-1 ease-in duration-300 inset-0 opacity-0 hover:opacity-100 absolute h-[250px] w-[250px]">
            <Socials />
          </div>
          <div className="w-[250px] mt-2 flex flex-col items-center">
            <span className="name mt-2  font-bold text-[20px] block">
              Alicia Woods
            </span>
            <sh6 className="post mt-2  font-semibold  block">
              Office Manager
            </sh6>
          </div>
        </div>
        <div className="relative mt-4 mr-4">
          <Image
            className=" mx-[1rem]"
            width={"250px"}
            height={"250px"}
            src={"/team3.jpg"}
            alt={"team"}
          ></Image>
          <div className="bg-[#ffffff79] items-center  z-1 ease-in duration-300 inset-0 opacity-0 hover:opacity-100 absolute h-[250px] w-[250px]">
            <Socials />
          </div>
          <div className="w-[250px] mt-2 flex flex-col items-center">
            <span className="name mt-2  font-bold text-[20px] block">
              Alicia Woods
            </span>
            <sh6 className="post mt-2  font-semibold  block">
              Office Manager
            </sh6>
          </div>
        </div>
        <div className="relative mt-4 mr-4">
          <Image
            className=" mx-[1rem]"
            width={"250px"}
            height={"250px"}
            src={"/team4.jpg"}
            alt={"team"}
          ></Image>
          <div className="bg-[#ffffff79] items-center  z-1 ease-in duration-300 inset-0 opacity-0 hover:opacity-100 absolute h-[250px] w-[250px]">
            <Socials />
          </div>
          <div className="w-[250px] mt-2 flex flex-col items-center">
            <span className="name mt-2  font-bold text-[20px] block">
              Alicia Woods
            </span>
            <sh6 className="post mt-2  font-semibold  block">
              Office Manager
            </sh6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
