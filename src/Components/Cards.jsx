import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="pt-36 grid md:grid-cols-2 md:pt-96 md:gap-8">
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
