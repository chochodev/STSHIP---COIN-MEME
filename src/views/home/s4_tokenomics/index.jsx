import React from 'react';
import { FaUsers, FaChartLine, FaLightbulb, FaGlobe } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { BsFire, BsFillDatabaseFill } from "react-icons/bs";

const Tokenomic = () => {
  const common_style = 'flex flex-col gap-[.25rem] w-[45%] p-[1.5rem] lg:p-[3rem] pl-[6%] lg:pl-[8%] border-solid border-[1px] border-secondary';
  return (
    <div className='w-full flex flex-col gap-[3rem] pb-[8rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">TOKENOMICS INFO</h1>
      <div className="flex flex-wrap justify-center w-full">
        <div className={`${common_style} border-l-0 border-t-0`}>
          <FaUsers className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Limited Partnership Partners</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>16 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Fueling the early journey.</p>
        </div>
        
        <div className={`${common_style} transform translate-y-[3.5rem] border-r-0 border-b-0`}>
          <FaChartLine className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Liquidity Pool</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>16 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Committed to enhancing value.</p>
        </div>
        
        <div className={`${common_style} border-l-0 border-r-0 border-t-0`}>
          <IoMdMegaphone className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Marketing</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>12 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Spreading the word across the galaxy.</p>
        </div>
        
        <div className={`${common_style} transform translate-y-[3.5rem] border-r-0 border-b-0`}>
          <FaLightbulb className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Development</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>8 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Innovating for a stellar future.</p>
        </div>
        
        <div className={`${common_style} border-l-0 border-r-0 border-t-0`}>
          <BsFire className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Token Burn Reserve</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>24 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Enhancing long-term value.</p>
        </div>
        
        <div className={`${common_style} transform translate-y-[3.5rem] border-r-0 border-b-0`}>
          <BsFillDatabaseFill className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Others</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Tokens - <span className='text-secondary'>44 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter">Allocated for community rewards, contests, ventures, and more.</p>
        </div>
        
        <div className={`flex flex-col p-[3rem] items-center w-full transform translate-y-[3.5rem] `}>
          <FaGlobe className='text-[6.5rem] text-tertiary2  ' />
          <h3 className="text-[1.375rem] font-semibold uppercase">Current Supply</h3>
          <p className="text-[1.25rem] font-inter text-tertiary2 font-semibold">Burned tokens - <span className='text-secondary'>120 billions</span></p>
          <p className="text-[#BEF4C3] text-[1.25rem] font-inter max-w-[20rem] text-center">Contract renounced: 0% tax buy & sell.</p>
        </div>
        
      </div>
    </div>
  )
}

export default Tokenomic