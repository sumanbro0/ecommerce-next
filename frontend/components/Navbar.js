import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
const Navbar = () => {
  const [length, setLength] = useState([]);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/cart/carts/", {
      method: "GET",
      headers: {
        Authorization: `token ${sessionStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLength(res.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <nav className="cursor-pointer sticky top-0 z-50 p-4 bg-[#ffffffe8] md:flex md:items-center md:justify-between shadow">
        <div className="logo  cursor-pointer flex justify-between">
          <Image
            className="bg-transparent inline "
            src="/logo.jpg"
            alt="logo"
            width={"191px"}
            height={"53px"}
          />
          <span onClick={() => setOpen(!open)} className="mt-2 md:hidden">
            {open ? (
              <GrClose className="text-4xl" />
            ) : (
              <FiMenu className="text-4xl" />
            )}
          </span>
        </div>
        <ul
          onClick={() => setOpen(false)}
          className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full md:w-auto md:mt-0 left-0 md:pl-0 pl-7   transition-all ease-in duration-500 bg-white md:bg-transparent ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <Link href={"/"}>
            <li
              className={
                router.pathname == "/" ? "text-[#ac7c2d]" : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4 my-3 md:my-0  ease duration-100  hover:text-[#ac7c2d]">
                HOME
              </a>
            </li>
          </Link>
          <Link href={"/products"}>
            <li
              className={
                router.pathname == "/products"
                  ? "text-[#ac7c2d]"
                  : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4 my-3 md:my-0  ease duration-100  hover:text-[#ac7c2d]">
                PRODUCTS
              </a>
            </li>
          </Link>
          <Link href={"/about"}>
            <li
              className={
                router.pathname == "/about"
                  ? "text-[#ac7c2d]"
                  : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4 my-3 md:my-0  ease duration-100  hover:text-[#ac7c2d]">
                ABOUT
              </a>
            </li>
          </Link>
          <Link href={"/services"}>
            <li
              className={
                router.pathname == "/services"
                  ? "text-[#ac7c2d]"
                  : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4  my-3 md:my-0 ease duration-100  hover:text-[#ac7c2d]">
                SERVICES
              </a>
            </li>
          </Link>
          <Link href={"/blog"}>
            <li
              className={
                router.pathname == "/blog"
                  ? "text-[#ac7c2d]"
                  : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4 my-3 md:my-0  ease duration-100  hover:text-[#ac7c2d]">
                BLOGS
              </a>
            </li>
          </Link>
          <Link href={"/faq"}>
            <li
              className={
                router.pathname == "/faq" ? "text-[#ac7c2d]" : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4  my-3 md:my-0 ease duration-100  hover:text-[#ac7c2d]">
                {"FAQ'S"}
              </a>
            </li>
          </Link>
          <Link href={"/contact"}>
            <li
              className={
                router.pathname == "/contact"
                  ? "text-[#ac7c2d]"
                  : " text-[#1a1a1a]"
              }
            >
              <a className="text-lg md:mx-4 my-3 md:my-0  ease duration-100  hover:text-[#ac7c2d]">
                CONTACT US
              </a>
            </li>
          </Link>
        </ul>
        <div
          onClick={() => {
            setOpen(false);
          }}
          className={`buttons  cursor-pointer flex absolute md:static z-[-1] md:z-auto mt-[22.5rem] w-full md:w-auto md:mt-0 left-0 md:pl-0 pl-7  transition-all ease-in duration-500  bg-transparent ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          <div className="bag">
            <Link href="/cart">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#1a1a1a]  ease duration-100 hover:text-[#ac7c2d] font-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="absolute translate-x-6 -translate-y-5 text-sm bg-black pl-1 pr-1 rounded-[50%] text-white">
                  {length}
                </span>
              </a>
            </Link>
          </div>
          <Link href="/signin">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#1a1a1a]  ease duration-100 hover:text-[#ac7c2d] font-light "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#1a1a1a]  ease duration-100 hover:text-[#ac7c2d] font-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
