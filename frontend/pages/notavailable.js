import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import ProdAside from "../components/ProdAside";
import Image from "next/image";
import Bestsell from "../components/Bestsell";
import Link from "next/link";
import { GoSettings } from "react-icons/go";

const Instock = ({ data, category, parent }) => {
  const product = data;
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-[#f1f2f6] select-none">
        <Header path={"products"} />
        <span
          onClick={() => setOpen(!open)}
          className="md:hidden flex cursor-pointer ml-4 mt-4"
        >
          <GoSettings className="text-3xl" />
        </span>
        <div className="w-[90%] mx-auto justify-center pt-12 flex ">
          <div
            onClick={() => setOpen(false)}
            className={`md:flex z-20  px-4 md:relative md:px-0 md:left-auto md:w-auto absolute bg-white ml-4 md:ml-0 md:bg-transparent ease-in duration-500 transition-all ${
              open ? "left-0" : "left-[-490px]"
            } md:flex-col cursor-pointer`}
          >
            <ProdAside
              className=""
              data={data}
              cat={category}
              parent={parent}
            />
            <div className="md:flex hidden">
              <Bestsell />
            </div>
          </div>
          <div
            className={`flex 
          flex-col md:w-[75%] md:mx-8 justify-center md:justify-start  flex-wrap md:flex-row`}
          >
            {product.map((e) =>
              !e.is_active ? (
                <div key={e.id} className=" relative h-[300px] w-[300px]">
                  <Link href={`/product/${e.slug}`}>
                    <a>
                      <div
                        className="absolute flex inset-0 flex-col opacity-0 ease-out duration-300 hover:opacity-100 items-center justify-center py-8 
                   z-10 h-[90%] w-[90%] md:h-[100%] bg-[#ffffffc9] rounded-[0.5rem] "
                      >
                        <h1 className="md:text-xl font-bold md:pt-8 text-center">
                          {e.title}
                        </h1>
                        <span className="text-[#ac7c2d] pt-4 text-lg">
                          ${e.regular_price}
                        </span>
                        <p className="text-[40px]">↓</p>
                      </div>
                    </a>
                  </Link>
                  <Image
                    className="rounded-[0.5rem]"
                    src={e.product_image[0].image}
                    alt={"pic"}
                    width={"250px"}
                    height={"250px"}
                  ></Image>
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps(context) {
  let res = await fetch("http://127.0.0.1:8000/api/");
  let data = await res.json();
  let res1 = await fetch("http://127.0.0.1:8000/api/category/");
  let category = await res1.json();
  let res2 = await fetch("http://127.0.0.1:8000/api/parent/");
  let parent = await res2.json();
  return {
    props: { data, category, parent }, // will be passed to the page component as props
  };
}

export default Instock;
