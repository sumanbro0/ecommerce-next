import React from "react";
import Image from "next/image";
const Clients = () => {
  return (
    <div className="flex flex-col h-auto mb-20 w-[100%] ">
      <h1 className="md:text-[72px] text-[45px] mx-auto my-8 font-[600] md:font-[700]">
        OUR CLIENTS
      </h1>
      <div className="grid cursor-pointer grid-cols-1 md:grid-cols-4 gap-[30px] mx-auto my-8  w-[90%] ">
        <div className="bg-[#f1f2f6] m-auto p-8">
          <Image
            src={"/client1.jpg"}
            alt={"client"}
            height={"45px"}
            width={"200px"}
          ></Image>
        </div>
        <div className="bg-[#f1f2f6]  m-auto p-8">
          <Image
            src={"/client2.jpg"}
            alt={"client"}
            height={"45px"}
            width={"200px"}
          ></Image>
        </div>
        <div className="bg-[#f1f2f6] m-auto p-8">
          <Image
            src={"/client3.jpg"}
            alt={"client"}
            height={"45px"}
            width={"200px"}
          ></Image>
        </div>
        <div className="bg-[#f1f2f6] m-auto p-8">
          <Image
            src={"/client4.jpg"}
            alt={"client"}
            height={"45px"}
            width={"200px"}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Clients;
