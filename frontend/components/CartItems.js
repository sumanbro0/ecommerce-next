import React, { useState, useEffect } from "react";
import Image from "next/image";

const CartItems = ({ props, tot }) => {
  let item = props;
  const [quantity, setQuantity] = useState(item.quantity);
  let handleIncrease = async (id, price) => {
    setQuantity(quantity + 1);
    let data = await fetch("http://localhost:8000/cart/carts/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id: id, quantity: quantity + 1 }),
    });

    let res = await data.json();
    tot(res.total);
    console.log(res);
  };
  let handleDecrease = async (id, price) => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity);
    let data = await fetch("http://localhost:8000/cart/carts/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id: id, quantity: quantity - 1 }),
    });
    let res = await data.json();
    tot(res.total);
  };
  let handleDel = async (id) => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity);
    let data = await fetch("http://localhost:8000/cart/carts/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id: id }),
    });
    window.location.reload();
  };

  return (
    <div>
      <div
        key={item.id}
        className="card flex md:flex-row flex-col relative border w-[100%] px-8 py-4 my-8 border-black"
      >
        <span
          onClick={() => handleDel(item.id)}
          className="text-lg absolute pr-4 cursor-pointer inset-0 p-[0.2rem] w-4 h-8 text-white bg-[#ac7c2d]"
        >
          X
        </span>
        <Image
          src={`http://127.0.0.1:8000${item.product.product_image[0].image}`}
          height={"150px"}
          width={"150px"}
          alt={"prod"}
          objectFit={"contain"}
        ></Image>
        <div className="flex mx-12 flex-col cursor-pointer">
          <h1 className="bold text-2xl py-1 font-semibold duration-300 ease-linear hover:text-[#ac7c2d]">
            {item.title}
          </h1>
          <p className="py-1">
            {item.product.product_type.size} /{" "}
            {item.product.product_type.fragnance} /{" "}
            {item.product.product_type.name}
          </p>
          <p className="font-semibold py-1 text-lg">
            ${item.product.regular_price}
          </p>
          <div className="flex reletive select-none">
            <button
              onClick={(e) =>
                handleDecrease(item.id, item.product.regular_price * quantity)
              }
              className="px-[0.6rem]  z-3 py-[0.2rem] border border-gray-800 hover:bg-black hover:text-white ease-linear duration-200"
            >
              -
            </button>
            <input
              rows={1}
              value={quantity}
              readOnly
              className="w-[2rem] text-center outline-none border border-gray-800 box-border"
            />
            <button
              onClick={(e) =>
                handleIncrease(item.id, item.product.regular_price * quantity)
              }
              className=" z-3 border border-gray-800 hover:bg-black hover:text-white ease-linear py-[0.2rem] px-[0.6rem]  duration-200"
            >
              +
            </button>
          </div>
          <p className="font-semibold pt-1 pb-4 text-lg">
            Total : ${item.product.regular_price * quantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
