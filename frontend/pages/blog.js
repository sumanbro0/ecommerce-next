import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Bestsell from "../components/Bestsell";
import { FaRegUserCircle, FaRegCalendarAlt } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <Header path={"News"} />
      <div className="w-[80%]   flex justify-between mx-auto pt-12 h-auto">
        <div className="md:flex flex-col hidden">
          <h1>RECENT ARTICLES</h1>
          <div className="recent grid grid-cols-1  content-start divide-y w-[300px] divide-[#ac7c2d]">
            <div className="blog-item my-2 cursor-pointer  flex">
              <div className="w-[150px] mt-2 h-[100px]">
                <Image
                  src={"/blog.jpg"}
                  height={"100px"}
                  alt={"blog"}
                  objectFit={"cover"}
                  width={"150px"}
                ></Image>
              </div>
              <div className="td ml-2 flex flex-col items-start">
                <h1 className="hover:text-[#ac7c2d] font-bold text-lg ">
                  REVEAL THE WOMAN WITHIN
                </h1>
                <p className="font-extralight">
                  Ruis curabitur ligula sapien, tincidunt non,.
                </p>
              </div>
            </div>
            <div className="blog-item cursor-pointer  flex">
              <div className="w-[150px] mt-2 h-[100px]">
                <Image
                  src={"/blog1.jpg"}
                  height={"100px"}
                  alt={"blog"}
                  objectFit={"cover"}
                  width={"150px"}
                ></Image>
              </div>
              <div className="td ml-2 flex flex-col items-start">
                <h1 className="hover:text-[#ac7c2d] font-bold text-lg ">
                  REVEAL THE WOMAN WITHIN
                </h1>
                <p className="font-extralight">
                  Ruis curabitur ligula sapien, tincidunt non,.
                </p>
              </div>
            </div>
            <div className="my-4">
              <Bestsell size={"4rem"} />
            </div>
          </div>
        </div>
        <div>
          <div className="blogs mb-8 mt-4  flex flex-col">
            <div className="">
              <Image
                src={"/blog.jpg"}
                objectFit={"contain"}
                height={"364px"}
                width={"740px"}
                alt={"blog"}
              ></Image>
            </div>
            <div className="flex items-start">
              <div className="by py-2 flex justify-between">
                <FaRegUserCircle size={"1.2em"} color={"#ac7c2d"} />
                <p className="px-2 md:px-4">By Ramamoorthi M</p>
                <span className="text-[#ac7c2d] px-4">|</span>
                <FaRegCalendarAlt size={"1.2em"} color={"#ac7c2d"} />
                <p className="px-2 md:px-4">December 4, 2020</p>
              </div>
            </div>
            <div className="news flex cursor-pointer flex-col my-2">
              <h1 className="my-2 hover:text-[#ac7c2d] text-xl font-semibold">
                REVEAL THE WOMAN WITHIN
              </h1>
              <p className="font-light text-sm">
                Ruis curabitur ligula sapien, tincidunt non, euismod vitae,
                posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat
                at massa. Sed cursus t...
              </p>
            </div>
          </div>
          <div className="blogs mb-8 mt-4  flex flex-col">
            <div className="">
              <Image
                src={"/blog1.jpg"}
                objectFit={"contain"}
                height={"364px"}
                width={"740px"}
                alt={"blog"}
              ></Image>
            </div>
            <div className="flex items-start">
              <div className="by py-2 flex justify-between">
                <FaRegUserCircle size={"1.2em"} color={"#ac7c2d"} />
                <p className="px-2 md:px-4">By Ramamoorthi M</p>
                <span className="text-[#ac7c2d] px-4">|</span>
                <FaRegCalendarAlt size={"1.2em"} color={"#ac7c2d"} />
                <p className="px-2 md:px-4">October 7, 2020</p>
              </div>
            </div>
            <div className="news flex cursor-pointer flex-col my-2">
              <h1 className="my-2 hover:text-[#ac7c2d] text-xl font-semibold">
                SECRET FRAGRANCES FOR WOMEN
              </h1>
              <p className="font-light text-sm">
                Cames cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, preti...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
