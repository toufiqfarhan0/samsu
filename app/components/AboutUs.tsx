import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[60vw] mb-20 gap-4">
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-semibold">About Us</h1>
      </div>
      <div className="flex items-center justify-center text-lg font-medium">
        <p>
          Welcome to <span className="font-bold bg-gradient-to-b from-purple-400 to-purple-700 bg-clip-text text-transparent">Samsu</span> a dynamic hub where creativity meets connectivity,
          and commerce flourishes. At Samsu, we're dedicated to empowering
          creators of all kinds, providing them with the tools, support, and
          community they need to thrive. Through strategic partnerships and
          collaborations, we're forging meaningful connections that amplify
          voices and drive impact. With a passionate team of innovators at our
          helm, we're committed to redefining the digital landscape and shaping
          the future of expression. Join us at Samsu, where every story matters,
          and every dream has the power to inspire.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
