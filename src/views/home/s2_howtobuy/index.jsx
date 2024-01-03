import React from 'react'
import CopyToClipboardButton from 'components/copy_button'

const HowToBuy = () => {
  const items = [
    {
      image: 'assets/images/radium.jpg',
      text: 'Buy using Radium',
      name: 'RADIUM',
      image_style: '',
      link: '#'
    },
    {
      image: 'assets/images/jupiter.jpg',
      text: 'Buy using Jupiter',
      name: 'JUPITER',
      image_style: 'object-left',
      link: '#'
    },
    {
      image: 'assets/images/birdeye.png',
      text: 'Buy using Birdeye',
      name: 'BIRDEYE',
      image_style: '',
      link: '#'
    }
  ]
  return (
    <div id='howtobuy' className='w-full flex flex-col gap-[3rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">HOW TO BUY</h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-y-[4rem] items-center w-full">
        {items.map((item, index) => (
          <div className="flex flex-col gap-[1rem] w-[80%] max-w-[25rem] lg:w-[22%] min-w-[18rem]" key={index}>
            <div className="flex flex-col items-center bg-secondary-dark rounded-[8px] border-solid border-secondary-dim border-[1px] ">
              <img src={item.image} alt={item.name} className={`${item.image_style} h-[16.75rem] w-full object-cover rounded-tl-[8px] rounded-tr-[8px]`} />
              <p className="text-[1.25rem] text-center font-semibold font-inter text-secondary-dark bg-[#BEF4C3] w-max px-[1.5rem] py-[.875rem] rounded-[8px] transform translate-y-[-1rem]">{item.text}</p>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-secondary text-[1.15rem] md:text-[1.5625rem] font-montserrat font-semibold text-center py-[.875rem] bg-secondary-dark hover:text-secondary-light hover:border-secondary-light active:border-[#ffffff] rounded-[8px] border-solid border-secondary-dim border-[1px] transition-all duration-200 ease-in-out'>BUY NOW</a>
          </div>
        ))}
      </div>
        
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">SOLANA TOKEN</h1>
      <div className='flex flex-col gap-[1rem] p-[1rem] w-[90%] max-w-[45rem] mx-auto bg-background rounded-[8px] border-solid border-[1px] border-secondary'>
        <div className='flex justify-between items-center gap-[3.5rem] itemsw-full'>
          <p className='text-tertiary2 text-[.875rem] md:text-[1.25rem] select-none'>Token name:</p>
          <p className='text-[1.15rem] md:text-[1.5rem]'>StarShip(STSHIP)</p>
        </div>
        <div className='flex justify-between items-center gap-[3.5rem] itemsw-full'>
          <p className='text-tertiary2 text-[.875rem] md:text-[1.25rem] select-none'>Solana profile:</p>
          <a href="https://solscan.io/token/GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j" target="_blank" rel="noopener noreferrer" className='text-[1.15rem] md:text-[1.5rem] text-[#ffffff] hover:text-secondary active:text-secondary-dark transition-all duration-200 ease-in-out'>StarShip_Profile</a>
        </div>
        <p className='text-tertiary2 text-[.875rem] md:text-[1.25rem] select-none'>Copy contract below:</p>
        <div className='flex items-center gap-[.5rem] w-max mx-auto pl-[.5rem] rounded-[8px] bg-tertiary2/10'>
          <p className='text-[.875rem] lg:text-[1.05rem] max-w-[11rem] md:max-w-max text-secondary truncate'>GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j</p>
          <CopyToClipboardButton text='GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j' />
        </div>
      </div>
    </div>
  )
}

export default HowToBuy