import React from 'react';
import { FaUsers, FaChartLine, FaLightbulb, FaGlobe } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { BsFire, BsFillDatabaseFill } from "react-icons/bs";

const Tokenomic = () => {
  const common_style = 'flex flex-col gap-[1rem] w-[90%] md:w-[45%] pr-0 p-[1.5rem] md:pr-[1.5] lg:p-[3rem] pl-[5%] lg:pl-[8%] border-solid border-0 md:border-[1px] border-secondary';
  return (
    <div id='tokenomics' className='w-full flex flex-col gap-[3rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">TOKENOMICS INFO</h1>
      <div className="flex flex-wrap justify-center w-full">
        <div className={`${common_style} md:border-l-0 md:border-t-0`}>
          <FaUsers className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Limited Partnership Partners</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>16 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Fueling the early journey.</p>
          </div>
        </div>
        
        <div className={`${common_style} transform md:translate-y-[3.5rem] md:border-r-0 md:border-b-0`}>
          <FaChartLine className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Liquidity Pool</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>16 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Committed to enhancing value.</p>
          </div>
        </div>
        
        <div className={`${common_style} md:border-l-0 md:border-r-0 md:border-t-0`}>
          <IoMdMegaphone className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Marketing</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>12 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Spreading the word across the galaxy.</p>
          </div>
        </div>
        
        <div className={`${common_style} transform md:translate-y-[3.5rem] md:border-r-0 md:border-b-0`}>
          <FaLightbulb className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Development</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>8 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Innovating for a stellar future.</p>
          </div>
        </div>
        
        <div className={`${common_style} md:border-l-0 md:border-r-0 md:border-t-0`}>
          <BsFire className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Token Burn Reserve</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>24 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Enhancing long-term value.</p>
          </div>
        </div>
        
        <div className={`${common_style} transform md:translate-y-[3.5rem] md:border-r-0 md:border-b-0`}>
          <BsFillDatabaseFill className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Others</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>44 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter">Allocated for community rewards, contests, ventures, and more.</p>
          </div>
        </div>
        
        <div className={`flex flex-col gap-[1rem] p-[1rem] md:p-[3rem] md:items-center w-[90%] transform md:translate-y-[3.5rem] `}>
          <FaGlobe className='text-[4.5rem] md:text-[6.5rem] text-tertiary2  ' />
          <div className="w-full flex flex-col md:items-center gap-[.25rem]">
            <h3 className="text-[1rem] lg:text-[1.375rem] font-semibold uppercase">Current Supply</h3>
            <p className="text-[1rem] lg:text-[1.25rem] font-inter text-tertiary2 font-semibold">Burned tokens - <span className='text-secondary'>120 billions</span></p>
            <p className="text-[#BEF4C3] text-[1rem] lg:text-[1.25rem] font-inter max-w-[20rem] md:text-center">Contract renounced: 0% tax buy & sell.</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Tokenomic