import React from 'react';
import { RiLinkedinFill, RiTelegramFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-x-[5%] gap-y-[3rem] w-full px-[10%] sm:px-[1rem] md:px-[2.5rem] xl:px-[3.75rem] py-[1rem]'>
      <div className='flex flex-col gap-[2rem]'>
        <div className='flex gap-[.5rem] lg:gap-[1.5625rem] '>
            <h2 className='text-[1.5rem] lg:text-[2.1875rem] font-montserrat font-[800] select-none '>$tarship</h2>
            <img className='h-[2.25rem] w-[2.25rem] lg:h-[3rem] lg:w-[3rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
        <div className="flex">
          <p className='text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] font-inter leading-[1.25]'>Embark on a Memorable Crypto Adventure.</p>
        </div>
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-[1.5rem] font-semibold">Quick links</h2>
        <div className="flex flex-col gap-[.5rem]">
          <a href="#updates" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Updates</a>
          <a href="#home" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Follow Us</a>
          <a href="#partnership" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] font-[600] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out'>Partnership</a>
        </div>
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-[1.5rem] font-semibold">Contact Us</h2>
        <div className="flex items-center gap-[.5rem] w-full ">
          <a href="#home" className='h-[2rem] border-r-[2px]'>
            <RiLinkedinFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#home" className='h-[2rem] border-r-[2px]'>
            <RiTwitterFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
          <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p>
          <a href="#home" className='h-[2rem]'>
            <RiTelegramFill className='text-[1.25rem] text-primary hover:text-tertiary active:text-secondary transition-all duration-200 ease-in-out' />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <h2 className="text-[1.5rem] font-semibold">Email Us</h2>
        <p className="text-[.75rem] text-tertiary font-inter">loremmailofauser@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
