import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-evenly w-full'>
      <div className=''>
        <div className='flex gap-[1rem] md:gap-[1.5625rem] justify-center '>
            <h2 className='text-[1.5rem] md:text-[2.1875rem] font-montserrat font-[800] select-none '>$tarship</h2>
            <img className='h-[2.5rem] w-[2.5rem] md:h-[4.0625rem] md:w-[4.0625rem] object-fit ' src='assets/images/logo.svg' alt='LOGO' />
        </div>
      </div>
    </div>
  )
}

export default Footer