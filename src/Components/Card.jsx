import React from "react";

function Card() {
  return (
    <div>
      <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            UI/UX Review Check
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            Because it's about motivating the doers. Because I'm here to follow
            my dreams and inspire others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
