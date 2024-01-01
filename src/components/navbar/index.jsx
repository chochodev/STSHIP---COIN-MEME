import { useState } from 'react'
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseFill  } from "react-icons/ri";

const Navbar = () => {
  const [openSmallNav, setOpenSmallNav] = useState(false);

  const navlink_style = 'text-tertiary2 text-[1rem] xl:text-[1.15rem] py-[.25rem] font-inter rounded-[5px] hover:text-[#ffffff] hover:underline decoration-[#1b7a26] decoration-[2px] underline-offset-[5px] active:text-secondary transition-all duration-200 ease-in-out ';
  return (
    <div className='relative h-max'>
      <div className='flex justify-between px-[3.75rem] py-[.5rem] '>
        <div className='flex gap-[1.5625rem] justify-center '>
          <h2 className='text-[2.1875rem] font-montserrat font-[800] select-none '>$tarship</h2>
          <img className='h-[4.0625rem] w-[4.0625rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
        <div className="hidden lg:flex justify-center items-center gap-[2.125rem] xl:gap-[2.8125rem]">
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >About Us</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Insights</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Partnership</Link>
        </div>
        <div className="hidden lg:flex h-[4.1875rem] items-center">
          <a href="#" className="font-montserrat font-[700] h-[3.5rem] text-[1.05rem] xl:text-[1.25rem] px-[1.5rem] items-center flex text-center text-[#ffffff] bg-[#545454] rounded-[8px] hover:bg-secondary-light hover:text-secondary-dark transition-all ease-in-out duration-200" id="">Get Started</a>
        </div>
        <button onClick={()=>setOpenSmallNav(!openSmallNav)} className='lg:hidden'>
          {!openSmallNav? 
            <RiMenuLine className='bg-tertiary2/10 hover:bg-tertiary2/20 rounded-[8px] p-[.45rem] text-tertiary2 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
            : <RiCloseFill  className='bg-tertiary2/10 hover:bg-tertiary2/20 rounded-[8px] p-[.45rem] text-tertiary2 active:text-[#ffffff] text-[2.75rem] transition-all ease-in-out duration-200 ' />
          }
        </button>
      </div>
      <div className={`absolute ${openSmallNav? 'top-[100%] right-[.5rem] opacity-[100%] select-auto' : 'top-[200%] right-0 opacity-0 select-none'} lg:hidden flex flex-col justify-center items-center h-max w-[17.5rem] gap-[2.125rem] xl:gap-[2.8125rem] bg-background px-[2rem] py-[3.5rem] shadow-[0_2px_25px_-5px_rgba(100,100,100,0.03)] shadow-tertiary2/50 rounded-[16px] transition-all ease-in-out duration-200 `}>
        <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
        <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >About Us</Link>
        <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Insights</Link>
        <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Partnership</Link>
      </div>
    </div>
  )
}

export default Navbar