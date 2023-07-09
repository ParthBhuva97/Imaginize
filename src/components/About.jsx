import React from "react";

const About = () => {
  return (
    <div className="w-full md:grid grid-cols-2 flex flex-col gap-10">
      <div>
        <img
          className="w-[10rem] h-[10rem] object-cover grayscale p-1 rounded-full ring-gray-300 dark:ring-gray-500"
          src="https://framerusercontent.com/images/kGC8CB2JfoBN02rkDLJLHEf3V4.jpg"
          alt="Bordered avatar"
        />
      </div>
      <div className="flex items-start flex-col gap-[1rem] md:px-[2rem]">
        <div className="font-header text-[2rem] lg:text-[3rem]">
        Revolutionize
        </div>
        <div className="font-subHeader text-[1rem] lg:text-[1.25rem] text-[#F0F3BD]">
        Our AI image generator brings your ideas to life, whether you want to experiment with abstract patterns, explore vibrant landscapes, or create extraordinary creatures. It’s time to dive into a world of endless imaginative possibilities!
        </div>
      </div>
    </div>
  );
};

export default About;
