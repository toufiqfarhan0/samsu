import React from "react";
import { InfiniteMovingCardsDemo } from "./InfinieCards";

const Content = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-6 md:py-12">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold">
          What do we offer?
        </h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Content;
