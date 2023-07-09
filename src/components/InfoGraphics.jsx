import React from 'react'

const InfoGraphics = () => {
  return (
    <div className='flex flex-col gap-20 lg:gap-[3rem]'>
        {/* Grid - 1 */}
        <div className="lg:grid grid-cols-2 flex flex-col gap-10">
            <div className='lg:px-[2rem]'>
                <img className='w-full h-[30rem] object-cover grayscale rounded-3xl' src="https://framerusercontent.com/images/dF6Unm8rHc0yXKHwdjTH26AEnM.jpg" alt="" />
            </div>
            <div className='lg:px-[2rem] flex flex-col items-center justify-center lg:gap-[2rem]'>
                <div className="font-header text-[2rem] text-[#02C39A]">
                Create fantastic creatures with unmatched precision.
                </div>
                <div className="font-subHeader text-[1rem]">
                Fall in love with your invented characters as our AI crafts every stunning detail, bringing your characters to visual reality.
                </div>
            </div>
        </div>
        {/* Grid - 2 */}
        <div className="lg:grid grid-cols-2 flex flex-col gap-10">
            <div className='lg:px-[2rem] flex flex-col items-center justify-center lg:gap-[2rem]'>
                <div className="font-header text-[2rem] text-[#02C39A]">
                Generate breathtaking landscapes beyond imagination.
                </div>
                <div className="font-subHeader text-[1rem]">
                Transform the wildest ideas into stunning landscapes with just a prompt. Witness the most awe-inspiring visions materialize before your eyes.
                </div>
            </div>
            <div className='lg:px-[2rem]'>
                <img className='w-full h-[30rem] object-cover grayscale rounded-3xl' src="https://framerusercontent.com/images/hedAlyZxIhiBfJlGhak6f6RlCls.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default InfoGraphics