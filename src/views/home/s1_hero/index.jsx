import React from 'react';
import { RiTelegramFill, RiTwitterFill } from 'react-icons/ri';
import { Link } from 'react-scroll';

const Hero = () => {
  const button_style = 'font-montserrat font-[600] h-[2.25rem] sm:h-[3rem] lg:h-[3.5rem] text-[.65rem] sm:text-[1.05rem] xl:text-[1.25rem] px-[1.75rem] sm:px-[2rem] md:px-[2.75rem] lg:px-[3.5rem] items-center flex text-center text-[#ffffff] rounded-[8px] transition-all ease-in-out duration-200';
  return (
    <div id='home' className='relative flex w-full'>
      <div className="flex flex-col py-[3.75rem] gap-[2.75rem] w-full">
        <h1 className="text-[2.75rem] text-center sm:text-left sm:text-[3.5rem] lg:text-[4.0625rem] font-montserrat font-[500] max-w-[45rem]  ">Explore top Crypto and SpaceX with <br/> $STSHIP</h1>
        <div className="flex justify-evenly sm:justify-start sm:gap-[2rem] ">
          <Link 
            to='updates' 
            smooth={true} 
            spy={false} 
            duration={500} 
            className={`${button_style} relative z-[10] bg-primary rounded-[8px] hover:text-[#aeeaff] active:text-[#063065] shadow-[2px_4px_25px_10px_rgba(0,95,230,0.25)] transition-all ease-in-out duration-200`} 
          >
            Get Insights
          </Link>
          <Link 
            to='roadmap' 
            smooth={true} 
            spy={false} 
            duration={500} 
            className={`${button_style} relative z-[10] bg-tertiary rounded-[8px] hover:text-[#ffc8c5] active:text-[#4b0804] shadow-[2px_4px_25px_10px_rgba(255,108,100,0.25)] transition-all ease-in-out duration-200`} 
          >
            Learn More
          </Link>
        </div>
        <div className="flex justify-center md:justify-end text-center items-center gap-[.5rem] md:gap-[.875rem] w-full pt-[4rem] ">
          <a href="https://twitter.com/StarShip_Sol" className='h-[3rem] border-r-[2px]'>
            <RiTwitterFill className='text-[1.875rem] md:text-[2.95rem] text-tertiary2' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://t.me/StarShip_sol" className='h-[3rem]'>
            <RiTelegramFill className='text-[1.9rem] md:text-[2.95rem] text-tertiary2' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://www.coingecko.com/en/coins/starship-4" className='h-[3rem] overflow-hidden'>
            <img src='assets/images/coin_gecko.png' alt='COIN-GECKO' className='h-[1.875rem] md:h-[2.875rem] w-[1.875rem] md:w-[2.875rem] rounded-[20rem] object-contain' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://www.dextools.io/app/en/solana/pair-explorer/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ" className='h-[3rem] overflow-hidden'>
            <img src='assets/images/dextool.png' alt='DEXTOOL' className='h-[1.875rem] md:h-[2.875rem] w-[1.875rem] md:w-[2.875rem] rounded-[20rem] object-contain' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://www.geckoterminal.com/solana/pools/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ" className='h-[3rem] overflow-hidden'>
            <img src='assets/images/gecko_terminal.png' alt='GECKO-TERMINAL' className='h-[1.875rem] md:h-[2.875rem] w-[1.875rem] md:w-[2.875rem] rounded-[20rem] object-contain' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://www.dextools.io/widget-chart/en/solana/pe-light/AtNmDy6pkhQeeD72j5cRa7cy7MoFs759XRre3tA7uDpJ?theme=light&chartType=2&chartResolution=30&drawingToolbars=false" className='h-[3rem] overflow-hidden'>
            <img src='assets/images/dexscreener.png' alt='DEXSCREENER' className='h-[1.875rem] md:h-[2.875rem] w-[1.875rem] md:w-[2.875rem] rounded-[20rem] object-contain' />
          </a>
          {/* <p className="text-[1.5rem] text-tertiary2 pb-2 ">|</p> */}
          <a href="https://birdeye.so/token/GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j?chain=solana" className='h-[3rem] overflow-hidden'>
            <img src='assets/images/birdeye_chart.png' alt='BIRDEYE' className='h-[1.875rem] md:h-[2.875rem] w-[1.875rem] md:w-[2.875rem] rounded-[20rem] object-contain' />
          </a>
        </div>
      </div>
      <div className='absolute right-0 z-[-1] '>
        <div className="absolute right-0 top-0 radial_frame h-full w-full "></div>
        <img src='assets/images/starship.webp' alt='STSHIP' className='h-[40rem] w-full  max-w-[45rem] object-cover' />
      </div>
      
    </div>
  )
}

export default Hero;