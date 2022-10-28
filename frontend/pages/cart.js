import Image from "next/image";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CartItems from "../components/CartItems";
import Link from "next/link";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/cart/carts/", {
      method: "GET",
      headers: {
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setTotal(res[0].cart.total_price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [total, setTotal] = useState(0);
  let tot = (t) => {
    setTotal(t);
  };
  if (data.length == undefined) {
    return (
      <>
        <Header path={"Your cart"} />
        <div className="bg-[#f1f2f6]">
          <div className="flex w-[80%] justify-between mx-auto py-16">
            <div className="prod w-[60%]">
              <h1 className="text-5xl font-semibold">Products</h1>
              <h1 className="text-lg m-4 text-center">
                Please login to see your cart
              </h1>
              <button
                className="p-4 bg-[#ac7c2d] text-white text-lg ease duration-200 hover:bg-black"
                type="submit"
              >
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (data.length == 0) {
    return (
      <>
        <Header path={"Your cart"} />
        <div className="bg-[#f1f2f6]">
          <div className="flex w-[80%] justify-between mx-auto py-16">
            <div className="prod w-[60%]">
              <h1 className="text-5xl font-semibold">Products</h1>
              <h1 className="text-lg m-4 text-center">
                Please continue shopping your cart is empty
              </h1>
              <Link href={"/products"}>
                <a>
                  <button className="p-4 bg-[#ac7c2d] text-sm  text-white font-semibold ease duration-200 hover:bg-black uppercase">
                    Continue shopping
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <Header path={"Your cart"} />
      <div className="bg-[#f1f2f6] ">
        <div className="flex w-[80%] justify-between items-center md:flex-row flex-col mx-auto py-16">
          <div className="prod w-[60%]">
            <h1 className="text-5xl font-semibold">Products</h1>
            {data.map((e) => (
              <CartItems tot={tot} key={e.id} props={e} />
            ))}
            <div className="flex justify-between">
              <button className="p-3 mx-2 md:p-4 bg-[#ac7c2d] text-sm  text-white font-semibold ease duration-200 hover:bg-black uppercase">
                Continue shopping
              </button>
              <button
                onClick={() => window.location.reload()}
                className="p-3 mx-2 md:p-4 bg-[#ac7c2d] text-sm  text-white font-semibold ease duration-200 hover:bg-black uppercase"
              >
                update cart
              </button>
            </div>
          </div>
          <div className="summary py-8 md:w-[37%]">
            <h1 className="md:text-5xl text-4xl text-center font-semibold">
              Order Summary
            </h1>
            <div className="my-4 p-4 flex flex-col md:items-start items-center">
              <h1 className="bold text-sm py-1 font-semibold">
                Subtotal : ${total}
              </h1>
              <button className="p-4 my-4 bg-[#ac7c2d]  text-white text-lg ease-linear duration-200 hover:bg-black">
                Add a note to your order
              </button>
              <p className="text-sm font-light italic">
                Shipping, taxes, and discounts will be calculated at checkout.
              </p>
              <button className="p-4 mt-4 w-full bg-[#ac7c2d]  text-white text-lg ease-linear duration-200 hover:bg-black">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
        <div className="summary"></div>
      </div>
    </div>
  );
};

export default Cart;
