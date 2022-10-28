import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const wishlist = () => {
  const [wishList, setWishlist] = useState([]);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      fetch("http://127.0.0.1:8000/cart/wishes/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${sessionStorage.getItem("token")}`,
        },
      })
        .then((data) => data.json())
        .then((res) => {
          let a = [];
          res.forEach((element) => {
            a.push(element.product);
          });
          setWishlist(a);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  console.log(wishList);
  return (
    <div>
      <Header path={"your wishlist"} />
      <div>
        {wishList &&
          wishList.map((e) => (
            <div key={e.id} className="relative h-[300px] w-[300px]">
              <Link href={`/product/${e.slug}`}>
                <a>
                  <div
                    className="absolute flex flex-col opacity-0 ease-out duration-300 hover:opacity-100 items-center py-8 
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
              <Image
                className="rounded-[0.5rem]"
                src={`http://127.0.0.1:8000${e.product_image[0].image}`}
                alt={"pic"}
                width={"250px"}
                height={"250px"}
              ></Image>
            </div>
          ))}
      </div>
    </div>
  );
};

export default wishlist;
