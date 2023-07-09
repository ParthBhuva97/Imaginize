import React from "react";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-[2rem]">
      <div className="flex justify-between ">
        <span>S</span>
        <span>A</span>
        <span>T</span>
        <span>U</span>
        <span>R</span>
        <span>D</span>
        <span>A</span>
        <span>Y</span>
        <span>,</span>
        <span>&nbsp;</span>
        <span>J</span>
        <span>U</span>
        <span>L</span>
        <span>Y</span>
        <span>&nbsp;</span>
        <span>8</span>
        <span>,</span>
        <span>&nbsp;</span>
        <span>2</span>
        <span>0</span>
        <span>2</span>
        <span>3</span>
      </div>
      <div className="font-header w-full flex items-center justify-center text-[3rem] md:text-[6rem] lg:text-[10rem]">IMAGINIZE</div>
      <div className="w-full flex justify-center">
        <div className="md:w-[55%] font-subHeader text-center md:text-[1rem] lg:text-[1.25rem]">WELCOME TO IMAGINIZE, THE WORLD OF AI-POWERED IMAGE GENERATION! UNLEASH YOUR CREATIVITY, AND LET OUR AI TURN YOUR PROMPT INTO STUNNING VISUALS.</div>
      </div>
      <div className="w-full flex justify-center">
      <Link className="py-[0.625rem] font-subHeader text-white px-[0.9375rem] bg-[#05668D] rounded-lg uppercase" to='/generate'>Get Started</Link>

      </div>
    </div>
  );
};

export default Home;
