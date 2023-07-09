import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import { FcAddImage } from "react-icons/fc";

const GetImage = () => {
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleChange(e) {
    const string = e.target.value;
    const prompt = string.replace(/ /g, "%20");
    setUrl("https://image.pollinations.ai/prompt/" + prompt);
  }

  console.log(url);

  async function getImage(url) {
    console.log("Clicked");
    setLoading(true);
    const response = await fetch(url);
    const data = await response.blob();

    console.log(data);
    setImageUrl(URL.createObjectURL(data));
    console.log(URL.createObjectURL(data));
    setLoading(false);
  }
  return (
    <div className="w-full bg-black grid place-items-center pt-[5rem] gap-0">
      <div className="grid grid-rows-2 w-[70%] h-fit">
        <div className="font-header text-[#00A896] text-[1.5rem] lg:text-[4rem] text-left">
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#00A896] relative inline-block">
            <span class="relative text-white">Generate Images</span>
          </span>
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-5">
        <div className="flex gap-[2rem] bg-white w-full ring-4 ring-offset-2 ring-blue-500 rounded-lg overflow-hidden">
          <img src="/star.svg" alt="" height={30} width={30} />
          <input
            className="placeholder:font-subHeader font-subHeader text-black outline-none w-[90%]"
            type="text"
            placeholder="Enter Prompt Here"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="w-full flex justify-center">
          <button
            className="py-[0.625rem] font-subHeader text-white px-[0.9375rem] bg-gradient-to-br from-teal-400 to-cyan-800 hover:shadow-lg hover:scale-105 duration-300 rounded-lg uppercase"
            onClick={() => {
              getImage(url);
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="hidden w-[70%] md:flex items-center justify-between bg-white border border-gray-300 rounded-lg py-2 px-4 ring-2 ring-offset-8 ring-blue-500 ">
        <div className="flex gap-[2rem] w-[85%]">
          <img src="/star.svg" alt="" height={30} width={30} />
          <input
            className="placeholder:font-subHeader font-subHeader text-black outline-none w-[90%]"
            type="text"
            placeholder="Enter Prompt Here"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <button
            className="py-[0.625rem] font-subHeader text-white px-[0.9375rem] bg-gradient-to-br from-teal-400 to-cyan-800 hover:shadow-lg hover:scale-105 duration-300 rounded-lg uppercase"
            onClick={() => {
              getImage(url);
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <div className="w-[70%] h-[15rem] md:h-[30rem] lg:h-[37.5rem] overflow-hidden bg-gradient-to-br from-teal-900 via-teal-500 to-lime-300  my-[5rem] rounded-lg flex items-center justify-center font-subHeader lg:text-[2rem]">
        {isLoading ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        ) : imageUrl ? (
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt="Image"
          />
        ) : (
          <div className="w-full flex flex-col items-center px-2 text-center">
            <FcAddImage className="h-[100px] w-[100px]"/>
            <p>Your Image will be loaded here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetImage;
