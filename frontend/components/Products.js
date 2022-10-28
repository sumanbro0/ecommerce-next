import React from "react";
import Image from "next/image";
import Link from "next/link";
const Products = (props) => {
  let product = props.product;
  return (
    <div
      className="bg-[#f1f2f6] h-auto pt-16 flex flex-col  
        "
    >
      <div className="head flex mx-auto ">
        <h1
          className={`text-[45px] font-[600] md:text-[72px] ${
            props.hidden ? "hidden" : ""
          } md:font-[700]`}
        >
          OUR PRODUCTS
        </h1>
      </div>
      <div
        className={`w-[95%] m-auto cursor-pointer prod grid md:gap-4 grid-cols-1 md:grid-cols-5  md:py-8`}
      >
        {product &&
          product.map((e) => (
            <div
              key={e.id}
              className="relative h-[280px] w-[280px] flex mx-auto mt-2"
            >
              <Image
                className="rounded-[0.5rem] absolute flex mx-auto mt-2"
                src={e.product_image[0].image}
                alt={"pic"}
                width={"250px"}
                height={"250px"}
              ></Image>
              <Link href={`/product/${e.slug}`}>
                <a>
                  <div
                    className="absolute flex flex-col inset-0 opacity-0 ease-out duration-300 hover:opacity-100 items-center py-8 
                     z-10 w-full h-full bg-[#ffffffc9] rounded-[0.5rem] "
                  >
                    <h1 className="text-xl font-bold pt-8">{e.title}</h1>
                    <span className="text-[#ac7c2d] pt-4 text-lg">
                      ${e.regular_price}
                    </span>
                    <p className="text-[40px]">↓</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

// This gets called on every request

export default Products;
