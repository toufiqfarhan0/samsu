import React from "react";
import { InfiniteMovingCardsDemo } from "./InfinieCards";

const Content = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-semibold">What do we offer?</h1>
      </div>
      <div className="flex items-center justify-center">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default Content;
