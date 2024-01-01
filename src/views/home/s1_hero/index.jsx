import React from 'react';
import { RiLinkedinFill, RiTelegramFill, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Hero = () => {
  const button_style = 'font-montserrat font-[600] h-[3.5rem] text-[1.05rem] xl:text-[1.25rem] px-[3.5rem] items-center flex text-center text-[#ffffff] rounded-[8px] transition-all ease-in-out duration-200';
  return (
    <div className='relative flex w-full'>
      <div className="flex flex-col p-[3.75rem] gap-[2.75rem] w-full">
        <h1 className="text-[4.0625rem] font-montserrat font-[500] max-w-[45rem]  ">Explore top Crypto and SpaceX with <br/> $STSHIP</h1>
        <div className="flex gap-[2rem] ">
          <Link 
            to='' 
            smooth={true} 
            spy={false} 
            duration={500} 
            className={`${button_style} bg-primary rounded-[8px] hover:text-[#aeeaff] active:text-[#063065] shadow-[2px_4px_25px_10px_rgba(0,95,230,0.25)] transition-all ease-in-out duration-200`} 
          >
            Get Insights
          </Link>
          <Link 
            to='' 
            smooth={true} 
            spy={false} 
            duration={500} 
            className={`${button_style} bg-tertiary rounded-[8px] hover:text-[#ffc8c5] active:text-[#4b0804] shadow-[2px_4px_25px_10px_rgba(255,108,100,0.25)] transition-all ease-in-out duration-200`} 
          >
            Learn More
          </Link>
        </div>
        <div className="flex justify-end text-center items-center gap-[.5rem] w-full pt-[4rem] ">
          <a href="#" className='h-[2rem] border-r-[2px]'>
            <RiLinkedinFill className='text-[1.25rem] text-tertiary2' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#" className='h-[2rem] border-r-[2px]'>
            <RiTwitterFill className='text-[1.25rem] text-tertiary2' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#" className='h-[2rem]'>
            <RiTelegramFill className='text-[1.25rem] text-tertiary2' />
          </a>
        </div>
      </div>
      <div className='absolute right-0 z-[-1] bg-gradient '>
        <img src='assets/images/starship.webp' alt='STSHIP' className='h-[40rem] max-w-[45rem] object-cover' />
      </div>
      
    </div>
  )
}

export default Hero;