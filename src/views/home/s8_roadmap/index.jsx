import React, { useState } from 'react'

const Roadmap = () => {
  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <div className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">ROADMAP</h1>
      <div className='flex flex-col gap-[1rem]'>
        <h2 className='text-[1.15rem] md:text-[1.375rem] font-semibold'>$STSHIP 2024 Roadmap Highlights</h2>
        <ol className='flex flex-col gap-[.5rem]'>
          <li className="text-[1.05rem]">2024 Goals Unleashed</li>
          <li className="text-[1.05rem]">2024 Goals Unleashed</li>
          <li className="text-[1.05rem]">2024 Goals Unleashed</li>
          <li className="text-[1.05rem]">2024 Goals Unleashed</li>
        </ol>

        <p className="text">Experience our vision for 2024, including ambitious goals, a sleek PWA upgrade, expansion to Ethereum (ETH) and Avalanche (AVAX), and exciting milestones in DeFi and NFTs. Stay tuned for more surprises!</p>
      </div>
      <button className="text-[1.25rem] text-[#ffffff] h-[2.5rem] w-full max-w-[12rem] mx-auto bg-tertiary rounded-[8px] hover:bg-background transition-all duration-200 ease-in-out " onClick={()=>setShowRoadmap(true)}>See more</button>

      <div className={`${showRoadmap? 'opacity-1 select-auto transform translate-x-0 z-[-50]': 'opacity-0 select-none transform translate-x-[2rem] z-[100]'} fixed top-0 left-0 flex justify-center p-[3vw] w-full h-screen`}>
        <div className='fixed top-0 left-0 z-[100] h-full w-full bg-background/20' onClick={()=>setShowRoadmap(false)}></div>
        <img src="assets/images/roadmap.jpg" alt="ROADMAP" className='relative z-[101] h-[90vw] max-h-[60rem] w-full object-contain' />
      </div>
    </div>
  )
}

export default Roadmap