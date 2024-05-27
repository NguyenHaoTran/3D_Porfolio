import React from "react";
import Cards from "./Cards";

function HomeContent() {
  return (
    <div
      className="absolute pT-20 top-40 left-0 right-0 z-10 
            flex items-center justify-center flex-col"
    >
      <h1 className="text-3xl">
        Hi, I'm <span className="font-semibold">Nguyên Hào Trần</span>
      </h1>
      <p className="pt-8">Frontend-dev in HCM city VietNam</p>
      <Cards />
    </div>
  );
}

export default HomeContent;
