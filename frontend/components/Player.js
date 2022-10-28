import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Aside from "./Aside";

const Players = () => {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, [ReactPlayer]);
  return (
    <>
      {isSSR == false && (
        <div className="bg-[#f1f2f6] pb-4 flex  flex-col items-center justify-around">
          <h1 className="md:text-[72px] md:font-[700] text-[45px] font-[600]">
            WATCH & SHOP
          </h1>
          <div className="player relative items-center bg-center md:py-12 w-[90%] m-auto cursor-pointer flex justify-around md:flex-row flex-col">
            <div className="md:w-[720px] w-[350px]">
              <ReactPlayer
                className={"bg-center"}
                controls={true}
                light={"/source.jpg"}
                height={"500px"}
                width={"100%"}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U "
              />
            </div>

            <Aside />
          </div>
        </div>
      )}
    </>
  );
};

export default Players;
