import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";

const Charts = () => {
  const items = [
    {
      name: 'Dexscreener',
      link: '#'
    },
    {
      name: 'Dextools',
      link: '#'
    },
    {
      name: 'BirdEye',
      link: '#'
    },
    {
      name: 'CoinGecko',
      link: '#'
    },
    {
      name: 'CoinGecko Terminal',
      link: '#'
    },
    {
      name: 'Others',
      link: '#'
    },
  ]
  return (
    <div className='w-full flex flex-col gap-[3rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">TRACKING CHARTS</h1>
      <div className="flex">
        {items.map((item, index) => (
          <a href={item.link} target="_blank" className=''>
            <p className="text">{item.name}</p>
            <HiOutlineChevronRight className='text-[2rem] text-secondary'/>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Charts;