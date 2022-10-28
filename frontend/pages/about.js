import Script from "next/script";
import React from "react";
import Achieve from "../components/Achieve";
import EsofAtt from "../components/EsofAtt";
import Header from "../components/Header";
import Joy from "../components/Joy";
import Team from "../components/Team";
const About = () => {
  return (
    <div>
      <Header path={"About"} />
      <Team />
      <EsofAtt />
      <Joy />
      {/* <Achieve /> */}
    </div>
  );
};

export default About;
