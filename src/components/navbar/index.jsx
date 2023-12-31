import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex gap-[.25rem]  '>
          <h2 className='text-[2.1875rem] font-montserrat font-[800]  '>$tarship</h2>
          <img className='h-[4.0625rem] w-[4.0625rem] object-fit ' src='assets/images/logo-lg.png' alt='LOGO' />
        </div>
      </div>
    </div>
  )
}

export default Navbar