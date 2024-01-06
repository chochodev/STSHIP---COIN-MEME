import React from 'react'
import { Tweet } from 'react-tweet'

const Latest = () => {
 
  return (
    <div id='latest' className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">LATEST UPDATES</h1>
      <div className="flex flex-col items-center gap-[5rem] lg:gap-[8rem] ">
        <Tweet id={'1738106896777699464'} />
        <Tweet id={'1726387267869012119'} />
      </div>
      
    </div>
  )
}

export default Latest