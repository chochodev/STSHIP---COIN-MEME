import React from 'react';
import { RiLinkedinFill, RiTelegramFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='flex justify-evenly w-full'>
      <div className='flex flex-col gap-[2rem]'>
        <div className='flex gap-[1rem] md:gap-[1.5625rem] justify-center '>
            <h2 className='text-[1.5rem] md:text-[2.1875rem] font-montserrat font-[800] select-none '>$tarship</h2>
            <img className='h-[2.5rem] w-[2.5rem] md:h-[4.0625rem] md:w-[4.0625rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
        <div className="flex">
          <p className='text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] font-inter leading-[1.25]'>Embark on a Memorable Crypto Adventure.</p>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] font-semibold">Quick links</h2>
        <div className="flex flex-col gap-[.5rem]">
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Privacy Policy</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Follow Us</a>
          <a href="#" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Partnership</a>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] font-semibold">Contact Us</h2>
        <div className="flex justify-center text-center items-center gap-[.5rem] w-full ">
          <a href="#" className='h-[2rem] border-r-[2px]'>
            <RiLinkedinFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#" className='h-[2rem] border-r-[2px]'>
            <RiTwitterFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#" className='h-[2rem]'>
            <RiTelegramFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] font-semibold">Newsletter</h2>
      </div>
    </div>
  )
}

export default Footer