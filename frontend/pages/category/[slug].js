import React, { useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import ProdAside from "../../components/ProdAside";
import Bestsell from "../../components/Bestsell";
import Link from "next/link";
import Error from "next/error";
import { GoSettings } from "react-icons/go";

const ProdView = (props) => {
  if (!props.prod) {
    return <Error statusCode={404} />;
  }
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
            <ProdAside cat={props.category} parent={props.parent} />

            <div className="md:flex hidden">
              <Bestsell />
            </div>
          </div>
          <div
            className={`flex 
            flex-col md:w-[75%] md:mx-8 justify-center md:justify-start  flex-wrap md:flex-row`}
          >
            {props.prod.map((e) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params, res }) {
  try {
    let data = await fetch(`http://127.0.0.1:8000/api/category/${params.slug}`);
    let prod = await data.json();
    let res1 = await fetch("http://127.0.0.1:8000/api/category/");
    let category = await res1.json();
    let res2 = await fetch("http://127.0.0.1:8000/api/parent/");
    let parent = await res2.json();

    return {
      props: { prod, category, parent },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
}

export default ProdView;
