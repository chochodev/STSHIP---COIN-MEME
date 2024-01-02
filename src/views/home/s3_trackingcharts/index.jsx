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
    <div className='w-full flex flex-col gap-[3rem] py-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">TRACKING CHARTS</h1>
      <div className="flex w-full justify-evenly flex-wrap">
        {items.map((item, index) => (
          <div>
            <iframe id="dextools-widget"
              title="DEXTools Trading Chart"
              className=""
              src="https://www.dextools.io/widget-chart/en/solana/pe-light/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"></iframe>
            <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} className='flex justify-between text-center items-center w-[45%] max-w-[35rem] h-[3.5rem] px-[1rem] mb-[2rem] bg-secondary-dark border-solid border-secondary-dim border-[1px] rounded-[8px]'>
              <p className="text-[.875rem] md:text-[1.25rem] text-secondary">{item.name}</p>
              <HiOutlineChevronRight className='text-[.875rem] md:text-[2rem] text-secondary'/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Charts;