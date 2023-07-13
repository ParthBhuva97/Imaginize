import React from "react";
import { Link } from 'react-router-dom';

const Hero2 = () => {
  return (
    <div className="w-[90%] grid md:gap-0 lg:grid-rows-4 place-items-center">
      <div className="w-full h-auto grid row-span-3 md:row-span-1 lg:grid-cols-12 md:grid-cols-6 grid-cols-3">
        <div className="col-span-3 flex items-center justify-center font-header2 text-white text-[3.5rem]">
          <Link to="/" className="hover:scale-105 duration-300 ">Imaginize</Link>
        </div>
        <div className="col-span-1">
          <div className="circle">
            <svg viewBox="0 0 220 220" fill="none">
              <circle
                cx="110"
                cy="110"
                r="70"
                fill="rgb(240, 243, 189)"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="triangle">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M101.34 65C105.189 58.3333 114.811 58.3333 118.66 65L170.622 155C174.471 161.667 169.66 170 161.962 170H58.0385C50.3405 170 45.5292 161.667 49.3782 155L101.34 65Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc2">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
      </div>
      {/* Row 2 */}

      <div className="w-full h-auto hidden lg:grid grid-cols-12">
        <div className="col-span-1">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(240, 243, 189)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(240, 243, 189)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="hexagon">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="blob">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="70"
                y="40"
                width="80"
                height="140"
                rx="40"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="half">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M60 110C60 145.277 86.0956 176.957 120.036 182.231C125.493 183.079 130 178.523 130 173V53C130 47.4772 125.501 42.9296 120.024 43.6404C86.0893 48.0449 60 74.727 60 110Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(240, 243, 189)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(240, 243, 189)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Row 3 */}
      <div className="w-full h-auto hidden lg:grid grid-cols-12">
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(2, 195, 154)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(2, 195, 154)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc2">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M96.587 170.018C95.9376 175.502 91.5229 180 86 180L50 180C44.4772 180 39.9629 175.508 40.3517 169.999C45.2467 100.65 100.65 45.2467 169.999 40.3517C175.508 39.9629 180 44.4772 180 50V86C180 91.5229 175.502 95.9376 170.018 96.587C131.605 101.135 101.135 131.605 96.587 170.018Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="blob">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="70"
                y="40"
                width="80"
                height="140"
                rx="40"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="hexagon">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M105 42.8867C108.094 41.1004 111.906 41.1004 115 42.8868L165.622 72.1133C168.716 73.8996 170.622 77.2008 170.622 80.7735V139.227C170.622 142.799 168.716 146.1 165.622 147.887L115 177.113C111.906 178.9 108.094 178.9 105 177.113L54.3782 147.887C51.2842 146.1 49.3782 142.799 49.3782 139.226V80.7735C49.3782 77.2008 51.2842 73.8996 54.3782 72.1132L105 42.8867Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="quarter">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M170 180C175.523 180 180 175.523 180 170V50C180 44.4772 175.508 39.9629 169.999 40.3517C100.65 45.2467 45.2467 100.65 40.3517 169.999C39.9629 175.508 44.4772 180 50 180H170Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="blob">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="70"
                y="40"
                width="80"
                height="140"
                rx="40"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(2, 195, 154)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1">
          <div className="circle">
            <svg viewBox="0 0 220 220" fill="none">
              <circle
                cx="110"
                cy="110"
                r="70"
                fill="rgb(240, 243, 189)"
              ></circle>
            </svg>
          </div>
        </div>
      </div>
      {/* Row 4 */}

      <div className="w-full md:h-[100%] h-[20%] grid lg:grid-cols-12 md:grid-cols-6 grid-cols-4">
        <div className="col-span-1 hidden md:block">
          <div className="arc1">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9703 40.7046C79.5028 39.925 75 44.4771 75 50L75 70C75 75.5228 79.6 79.8368 84.819 81.6437C96.5654 85.7105 105 96.8702 105 110C105 123.13 96.5654 134.289 84.819 138.356C79.6 140.163 75 144.477 75 150L75 170C75 175.523 79.5028 180.075 84.9703 179.295C118.908 174.456 145 145.275 145 110C145 74.725 118.908 45.5442 84.9703 40.7046Z"
                fill="rgb(240, 243, 189)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(2, 195, 154)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(2, 195, 154)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(240, 243, 189)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(240, 243, 189)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(2, 195, 154)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(2, 195, 154)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="circle">
            <svg viewBox="0 0 220 220" fill="none">
              <circle
                cx="110"
                cy="110"
                r="70"
                fill="rgb(240, 243, 189)"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="square">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="40"
                y="40"
                width="140"
                height="140"
                rx="10"
                fill="rgb(2, 195, 154)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="blob">
            <svg viewBox="0 0 220 220" fill="none">
              <rect
                x="70"
                y="40"
                width="80"
                height="140"
                rx="40"
                fill="rgb(240, 243, 189)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="col-span-1 hidden md:block">
          <div className="outlined">
            <svg viewBox="0 0 220 220" fill="none">
              <path
                d="M40 107C40 142.277 66.0956 173.957 100.036 179.231C105.493 180.079 110 175.523 110 170V50C110 44.4772 105.501 39.9296 100.024 40.6404C66.0893 45.0449 40 71.727 40 107Z"
                fill="rgb(2, 195, 154)"
              ></path>
              <circle
                cx="110"
                cy="110"
                r="66"
                stroke="rgb(2, 195, 154)"
                stroke-width="8"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-center text-[2rem] md:text-[2.5rem] text-white font-header2">
            <p>Bring Ideas to Life</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
