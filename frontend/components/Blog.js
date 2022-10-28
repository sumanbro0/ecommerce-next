import React from "react";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="bg-[#f1f2f6] py-20 h-auto flex flex-col">
      <h1 className="md:text-[72px] py-8 mx-auto  md:font-[700] text-[45px] font-[600]">
        NEWS
      </h1>
      <div className=" relative news flex flex-col md:flex-row items-center mx-8 md:justify-around">
        <div className="relative h-[450px] md:m-0 m-4">
          <Image
            className="absolute"
            src={"/blog.jpg"}
            alt={"blog"}
            height={"400px"}
            width={"610px"}
          ></Image>
          <div className="absolute bg-[#00000088] items-start  justify-center px-8 md:px-24 h-auto inset-0 flex flex-col">
            <h1 className="text-white font-[600] duration-200 ease-in text-xl cursor-pointer my-2 hover:text-[#ac7c2d]">
              REVEAL THE WOMAN WITHIN
            </h1>
            <div className="text-white block text-sm font-[300] my-2">
              <span className="">By Ramamoorthi M</span>
              <span className="mx-4">| </span>
              <span>December 4, 2020 </span>
              <span className="mx-4">| </span>
            </div>
            <span className="border-2  my-2 border-x-[1.5rem]"></span>
            <p className="text-white text-sm font-[300]  my-2">
              Ruis curabitur ligula sapien, tincidunt non, euismod vitae,
              posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat
              at massa. Sed cursus t...
            </p>
          </div>
        </div>
        <div className="relative h-[450px] md:m-0 m-4">
          <Image
            className="absolute"
            src={"/blog.jpg"}
            alt={"blog"}
            height={"400px"}
            width={"610px"}
          ></Image>
          <div className="absolute bg-[#00000088] items-start  justify-center px-8 md:px-24 h-auto inset-0 flex flex-col">
            <h1 className="text-white font-[600] duration-200 ease-in text-xl cursor-pointer my-2 hover:text-[#ac7c2d]">
              REVEAL THE WOMAN WITHIN
            </h1>
            <div className="text-white block text-sm font-[300] my-2">
              <span className="">By Ramamoorthi M</span>
              <span className="mx-4">| </span>
              <span>December 4, 2020 </span>
              <span className="mx-4">| </span>
            </div>
            <span className="border-2  my-2 border-x-[1.5rem]"></span>
            <p className="text-white text-sm font-[300]  my-2">
              Ruis curabitur ligula sapien, tincidunt non, euismod vitae,
              posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat
              at massa. Sed cursus t...
            </p>
          </div>
        </div>
      </div>
      <div className="button m-auto">
        <Link href="/blog">
          <a>
            <button className="p-4 md:mt-16  bg-black text-white text-lg ease-out duration-300 hover:bg-[#ac7c2d]">
              READ MORE
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
