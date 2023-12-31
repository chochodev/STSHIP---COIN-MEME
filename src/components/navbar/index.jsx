import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const navlink_style = 'text-tertiary2 text-[1.25rem] py-[.25rem] px-[.75rem] font-inter rounded-[5px] hover:text-[#ffffff] hover:underline hover:decoration-secondary hover:underline-offset-[5px] active:text-secondary transition-all duration-200 ease-in-out ';
  return (
    <div>
      <div className='flex justify-between px-[3.75rem] py-[.5rem] '>
        <div className='flex gap-[1.5625rem] justify-center '>
          <h2 className='text-[2.1875rem] font-montserrat font-[800]  '>$tarship</h2>
          <img className='h-[4.0625rem] w-[4.0625rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
        <div className="flex justify-center items-center gap-[1.8125rem]">
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >About Us</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Insights</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Partnership</Link>
        </div>
        <div className="flex h-[4.1875rem] items-center">
          <a href="#" className="font-montserrat h-[3.5rem] leading-[1.25rem] text-[1.25rem] px-[1.5rem] items-center flex text-center text-[#ffffff] bg-[#545454] rounded-[8px]" id="">Get Started</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar