import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Rating from "@mui/material/Rating";

const Services = () => {
  return (
    <div>
      <Header path={"Services"} />
      <div className="frag bg-[#f1f2f6] pb-16 h-auto">
        <div className=" w-[85%]  mx-auto justify-center flex flex-col">
          <h1 className="text-[45px] md:text-[72px] font-[600] text-center mt-28">
            HIGHER FRAGRANCE
          </h1>
          <div className="img py-8  cursor-pointer flex md:flex-row flex-col items-center mt-4 justify-between">
            <div className="relative scale-100 ease-linear duration-300 hover:scale-105">
              <Image
                className=""
                src={"/frag.jpg"}
                height={"550px"}
                width={"525px"}
                alt={"img"}
              ></Image>
              <div
                className="absolute flex justify-center items-center inset-0 bg-[#f1f2f68e]
                            m-auto ease-linear duration-300 opacity-0 hover:opacity-100"
              >
                <h1 className="font-bold md:text-5xl text-4xl  ">ATTRACTION</h1>
              </div>
            </div>
            <div className="relative py-8   scale-100 ease-linear duration-300 hover:scale-105">
              <Image
                className=""
                src={"/frag1.jpg"}
                height={"550px"}
                width={"525px"}
                alt={"img"}
              ></Image>
              <div
                className="absolute flex justify-center items-center inset-0 bg-[#f1f2f68e]
                            m-auto ease-linear duration-300 opacity-0 hover:opacity-100"
              >
                <h1 className="font-bold md:text-5xl text-4xl ">NICE SMELL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ind h-[90vh] flex flex-col   bg-black">
        <div className="text-white text-center py-8">
          <h1 className="font-bold md:text-[72px] text-[30px] ">
            NATURAL INGREDIENTS
          </h1>
          <p>Hac habitasse platea dictumst quisque sagittis purus sit</p>
        </div>
        <div className="bg-white h-auto mx-auto w-[90%] md:ml-[8rem] ml-20 flex flex-col md:flex-row justify-center items-center ">
          <div className="md:p-12 p-4 flex flex-col w-[90%] justify-around">
            <h1 className="font-bold md:text-[36px] text-[28px]  ">
              HIGHLY VERSATILE FRAGRANCE
            </h1>
            <p>
              Nec feugiat in fermentum posuere urna. Convallis convallis tellus
              id interdum velit laoreet. Et malesuada fames ac turpis egestas
              sed tempus. Vulputate mi sit amet mauris commodo quis. Quis
              viverra nibh cras pulvinar mattis. Tincidunt arcu non sodales
              neque.
            </p>
          </div>
          <div className="">
            <button className="md:px-4 md:py-2 p-2 m-4  bg-[#ac7c2d] text-white text-lg ease-linear duration-300 hover:bg-black">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-auto py-8 justify-center">
        <h1 className="font-[600] md:text-[72px] text-[45px] text-center mx-auto ">
          OUR CLIENTS WORDS
        </h1>
        <div className="comment flex flex-col md:flex-row mx-auto my-8 w-[85%]">
          <div className="bg-black m-[1.5rem] flex flex-col p-8 text-white">
            <p className="font-light text-sm">
              Feugiat pretium nibh ipsum consequat nisl. Erat imperdiet sed
              euismod.Sed cras ornare arcu dui vivamus arcu. Ultrices vitae
              auctor eu augue ut. Rhoncus dolor purus non enim praesent
              elementum facilisis aliquam fames..
            </p>
            <Rating
              className="my-4"
              name="half-rating-read"
              defaultValue={3}
              precision={0.5}
              readOnly
            />
            <div className="flex align-middle h-[98px]">
              <Image
                src={"/clientt.jpg"}
                height={"98px"}
                width={"75px"}
                alt={"clients"}
              ></Image>
              <div className="name p-4 pt-8">
                Hannah Stocking{" "}
                <span
                  className="text-[#ac7c2d]
                            "
                >
                  -Musician
                </span>{" "}
              </div>
            </div>
          </div>
          <div className="bg-black m-[1.5rem] flex flex-col p-8 text-white">
            <p className="font-light text-sm">
              Feugiat pretium nibh ipsum consequat nisl. Erat imperdiet sed
              euismod.Sed cras ornare arcu dui vivamus arcu. Ultrices vitae
              auctor eu augue ut. Rhoncus dolor purus non enim praesent
              elementum facilisis aliquam fames..
            </p>
            <Rating
              className="my-4"
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
            <div className="flex align-middle h-[98px]">
              <Image
                src={"/clientt1.jpg"}
                height={"98px"}
                width={"75px"}
                alt={"clients"}
              ></Image>
              <div className="name p-4 pt-8">
                Freda Casey
                <span
                  className="text-[#ac7c2d]
                            "
                >
                  -Journalist
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
