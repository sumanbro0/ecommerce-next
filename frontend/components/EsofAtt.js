import React from "react";
import Image from "next/image";
const EsofAtt = () => {
  return (
    <div className="py-16 flex flex-col bg-[#f1f2f6]">
      <h1 className="md:font-[700] font-[600] text-[45px] md:text-[74px] text-center">
        ESSENCE OF ATTRACTION{" "}
      </h1>
      <div className="grid w-[80%] mx-auto  grid-cols-1 md:grid-cols-3 ">
        <div className="desc content-center pt-4 text-sm ">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam erat volutpat. Praesent imperdiet
          felis id consectetur imperdiet. In quis ornare magna. Duis interdum
          orci vitae sapien suscipit, sit amet vestibulum risus tempus. Cras et
          sapien purus. Sed ultrices ipsum a pharetra pretium. Quisque non
          auctor elit.
        </div>
        <div className="w-[340px] h-[250px] flex mx-auto content-center">
          <Image
            width={"300px"}
            height={"250px"}
            src={"/Drako.png"}
            alt={"drako"}
          ></Image>
        </div>
        <div className="marker:text-[#ac7c2d]  list-outside  desc content-between p-4">
          <ul className="list-disc">
            <li className="pt-4">Extreme Performance</li>
            <li className="pt-4">Higher Fragrance Concentration</li>
            <li className="pt-4">Less Alcohol</li>
            <li className="pt-4">Elaborately Prepared</li>
            <li className="pt-4">Packing & Branding</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EsofAtt;
