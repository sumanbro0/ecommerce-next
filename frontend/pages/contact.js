import React from "react";
import Header from "../components/Header";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#f1f2f6]">
      <Header path={"Contact"} />
      <div className=" py-16 w-[80%] flex flex-col mx-auto ">
        <div className="add flex justify-between flex-col md:flex-row">
          <div className="mapouter ">
            <div className="gmap_canvas h-[600px] md:w-[700px] w-[90%] flex mx-auto">
              <iframe
                width="80%"
                height="100%"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
              <a href="https://123movies-to.org"></a>
              <br />
              <a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>
          <div className="cards py-8 flex flex-col  mx-auto md:py-0">
            <div className="card hover:outline-none duration-100 ease-in cursor-pointer bg-white flex h-[11rem] mb-8 w-[22rem] outline outline-2 items-center ">
              <FaPhoneAlt
                size={"3em"}
                className="text-white ml-8 mr-4 items-center bg-black p-2"
              />
              <div className="data flex flex-col items-start justify-around">
                <h1 className="font-semibold pb-4 text-xl">Phone</h1>
                <p className="font-[300]">
                  <span className="font-bold">Toll-Free:</span>0123 - 456 - 789
                </p>
                <p className="font-[300]">
                  <span className="font-bold">Fax: </span>0123 - 456 - 789
                </p>
              </div>
            </div>
            <div className="card hover:outline-none duration-100 ease-in cursor-pointer bg-white flex h-[11rem] mb-8 w-[22rem] outline outline-2 items-center ">
              <MdEmail
                size={"3em"}
                className="text-white ml-8 mr-4 items-center bg-black p-2"
              />
              <div className="data flex flex-col items-start justify-around">
                <h1 className="font-semibold pb-4 text-xl">Phone</h1>
                <p className="font-[300]">
                  <span className="font-bold"></span>mail@example.com
                </p>
                <p className="font-[300]">
                  <span className="font-bold"></span>support@example.com
                </p>
              </div>
            </div>
            <div className="card hover:outline-none duration-100 ease-in cursor-pointer bg-white flex h-[11rem] mb-8 w-[22rem] outline outline-2 items-center ">
              <FaTelegramPlane
                size={"3em"}
                className="text-white ml-8 mr-4 items-center bg-black p-2"
              />
              <div className="data flex flex-col items-start justify-around">
                <h1 className="font-semibold pb-4 text-xl">Phone</h1>
                <p className="font-[300]">
                  <span className="font-bold"></span>No: 58 A, East Madison
                  Street,
                </p>
                <p className="font-[300]">
                  <span className="font-bold"></span>Baltimore, MD, USA 4508
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-7xl text-[72px] font-extrabold title-font mb-4 text-black">
                Contact Us
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify.
              </p>
            </div>
            <form action="">
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap md:flex-row flex-col -m-2">
                  <div className="p-2 md:w-1/2 ">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-black"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 md:w-1/2 ">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-black"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white focus:black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-black"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-black focus:bg-white   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="p-4 mx-auto my-4 bg-black text-white text-lg ease duration-200 hover:bg-[#ac7c2d]"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
