import React from "react";

const Hero = () => {
  return (
    <div
      id="Main"
      className="bg-grey text-grey py-40"
      style={{
        backgroundImage: "url('src/assets/test.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-lora text-white">
          Welcome
        </h1>
        <p className="mt-4 text-lg font-serif md:text-xl text-white">
          Find any item badminton u want
        </p>
        <div className="mt-8">
        </div>
      </div>
    </div>
  );
};

export default Hero;
