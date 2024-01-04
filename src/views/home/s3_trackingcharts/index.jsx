import React from 'react';
import { HiOutlineChevronRight } from "react-icons/hi";

const Charts = () => {
  const items = [
    {
      name: 'Dexscreener',
      link: 'https://www.dextools.io/widget-chart/en/solana/pe-light/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ?theme=light&chartType=2&chartResolution=30&drawingToolbars=false'
    },
    {
      name: 'Dextools',
      link: 'https://www.dextools.io/app/en/solana/pair-explorer/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ'
    },
    {
      name: 'BirdEye',
      link: 'https://birdeye.so/token/GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j?chain=solana'
    },
    {
      name: 'CoinGecko',
      link: 'https://www.coingecko.com/en/coins/starship-4'
    },
    {
      name: 'CoinGecko Terminal',
      link: 'https://www.geckoterminal.com/solana/pools/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ'
    },
    {
      name: 'Others',
      link: 'https://www.geckoterminal.com/solana/pools/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ'
    },
  ]
  return (
    <div className='w-full flex flex-col gap-[3rem] py-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">TRACKING CHARTS</h1>
      <div className="flex w-full justify-evenly flex-wrap">
        {items.map((item, index) => (
          <a href={item.link} key={index} target="_blank" rel="noopener noreferrer" className='flex justify-between text-center items-center w-[45%] max-w-[35rem] h-[3.5rem] px-[1rem] mb-[2rem] bg-secondary-dark border-solid border-secondary-dim border-[1px] rounded-[8px]'>
            <p className="text-[.875rem] md:text-[1.25rem] text-secondary">{item.name}</p>
            <HiOutlineChevronRight className='text-[.875rem] md:text-[2rem] text-secondary'/>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Charts;