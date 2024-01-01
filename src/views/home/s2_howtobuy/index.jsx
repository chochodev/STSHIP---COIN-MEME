import React from 'react'

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
    <div className='w-full flex flex-col gap-[3rem] '>
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
    </div>
  )
}

export default HowToBuy