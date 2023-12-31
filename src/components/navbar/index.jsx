import React from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const navlink_style = 'color-tertiary text-[1.375rem] hover:color-secondary transition-all duration-200 ease-in-out ';
  return (
    <div>
      <div className='flex'>
        <div className='flex gap-[1.5625rem] justify-center '>
          <h2 className='text-[2.1875rem] font-montserrat font-[800]  '>$tarship</h2>
          <img className='h-[4.0625rem] w-[4.0625rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
        <div className="flex justify-center items-center gap-[2.8125rem]">
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
          <Link to='' smooth={true} spy={false} duration={500} className={navlink_style} >Home</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar