import React, { useState } from "react";
import Hero2 from "./Hero2";
import Footer from './Footer';
import { FcAddImage } from "react-icons/fc";
import { PiMagicWandDuotone } from "react-icons/pi";
import { GiMagicHat } from "react-icons/gi";
import CircleLoader from "./../../node_modules/react-spinners/esm/CircleLoader";

const GetImage2 = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setLoading] = useState(false);

  function handleChange(e) {
    setPrompt(e.target.value);
  }

  console.log(prompt);

  async function getImage(prompt) {
    console.log("Clicked");
    setLoading(true);
    // const response = await fetch(
    //   "https://da54-34-29-68-15.ngrok-free.app/generate_image",
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({ prompt: prompt }),
    //     method: "POST",
    //   }
    // );
    const response = await fetch(
      "https://image.pollinations.ai/prompt/" + prompt
    );
    const data = await response.blob();

    console.log(data);
    setImageUrl(URL.createObjectURL(data));
    console.log(URL.createObjectURL(data));
    setLoading(false);
  }
  return (
    <div className="w-full bg-black flex items-center justify-center">
      <div className="flex flex-col gap-10">
        <div className="py-20 md:py-32 flex justify-center bg-gradient-to-t from-black to-teal-900">
          <Hero2 />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-[80%] lg:w-[60%] md:grid grid-cols-2 mt-10">
            <div className="font-header2 text-[3rem] text-teal-500">
              Unleash Creativity!
            </div>
            <div className="font-subHeader text-white text-xl">
              Welcome to the AI-powered platform! Discover limitless
              possibilities to generate breathtaking images using
              state-of-the-art technology. Just a few steps and your ideas will
              transform into visual spectacles.
            </div>
          </div>
        </div>
        <div className="w-full mt-10 py-10 flex flex-col items-center justify-center">
          <div className="w-[90%] lg:w-[55%] font-header2 text-center text-[2rem] lg:text-[3rem] text-teal-500">
            Ready to start? Enter your prompt below!{" "}
            <PiMagicWandDuotone className="inline" />{" "}
            <GiMagicHat className="inline" />
          </div>
          <div className="w-[80%] flex justify-center p-10">
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
                    getImage(prompt);
                  }}
                >
                  Generate
                </button>
              </div>
            </div>
          </div>
          {/* Input For smaller screens */}
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
                  getImage(prompt);
                }}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[20rem] md:h-[37.5rem] flex items-center justify-center mb-10">
          <div className="md:w-[80%] h-[100%] bg-gradient-to-tl from-black to-teal-900 flex items-center justify-center rounded-lg overflow-hidden">
            {isLoading ? (
              <CircleLoader color="#36d7b7" />
            ) : imageUrl ? (
              <img
                className="w-full h-full object-fit"
                src={imageUrl}
                alt="Image"
              />
            ) : (
              <div className="w-full flex flex-col items-center gap-5 px-2 text-center font-header2 text-xl text-white">
                <FcAddImage className="h-[100px] w-[100px]" />
                <p>Your Image will be loaded here</p>
              </div>
            )}
          </div>
        </div>
        <div className="cards mt-10 bg-black flex items-center justify-center">
          <div className="w-[70%] lg:h-96 flex flex-col lg:grid grid-cols-3 gap-10">
            <div className="rounded-3xl bg-[#0d0d0d] flex items-start justify-between flex-col">
              <div className="about">
                <div className="p-10 w-full">
                  <img
                    class="w-12 h-12 rounded-full object-cover"
                    src="https://framerusercontent.com/images/AsH6Ju49a4D9586br57cczPXI.jpg?scale-down-to=512"
                    alt="Rounded avatar"
                  />
                </div>
                <div className="px-10 text-white text-xl w-full font-subHeader">
                  Imaginize blew my mind!
                </div>
              </div>
              <div className="p-10 text-white text-md w-full font-subHeader">
                John Parker
              </div>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] flex items-start justify-between flex-col">
              <div className="about">
                <div className="p-10 w-full">
                  <img
                    class="w-12 h-12 rounded-full object-cover"
                    src="https://framerusercontent.com/images/mqjZUMwI5vwxD6Vw7Q7IavHW7Fg.jpg?scale-down-to=512"
                    alt="Rounded avatar"
                  />
                </div>
                <div className="px-10 text-white text-xl w-full font-subHeader">
                  Best Image Generation Tool ever!
                </div>
              </div>
              <div className="p-10 text-white text-md w-full font-subHeader">
                Olivia Smith
              </div>
            </div>
            <div className="rounded-3xl bg-[#0d0d0d] flex items-start justify-between flex-col">
              <div className="about">
                <div className="p-10 w-full">
                  <img
                    class="w-12 h-12 rounded-full object-cover"
                    src="https://framerusercontent.com/images/4Ek6RyK1M6W4EKMeAt75KdyK1oA.jpg?scale-down-to=512"
                    alt="Rounded avatar"
                  />
                </div>
                <div className="px-10 text-white text-xl w-full font-subHeader">
                  I'm never going back to manual design.
                </div>
              </div>
              <div className="p-10 text-white text-md w-full font-subHeader">
                Tom Richardson
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-50px] pb-10">
        <Footer/>
        </div>
      </div>
    </div>
  );
};

export default GetImage2;
