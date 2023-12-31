import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <div className='flex gap-[.25rem]  '>
          <h2 className='text-xl font-inter'>$tarship</h2>
          <img className='h-[4.06rem] w-[4.06rem] object-fit ' src='assets/images/logo-lg.png' alt='LOGO' />
        </div>
      </div>
    </div>
  )
}

export default Navbar