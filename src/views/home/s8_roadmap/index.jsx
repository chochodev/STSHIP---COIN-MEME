import React, { useState } from 'react'

const Roadmap = () => {
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div id='roadmap' className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[5rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">ROADMAP</h1>
      <div className='flex flex-col gap-[1rem] w-[90%] max-w-[50rem] mx-auto'>
        <h2 className='text-[1.15rem] md:text-[1.375rem] mx-auto font-semibold'>$STSHIP 2024 Roadmap Highlights</h2>
        <ol className='flex flex-col gap-[.5rem] mx-auto text-[#ffffff]'>
          <li className="text-[1.05rem]">1. 2024 Goals Unleashed.</li>
          <li className="text-[1.05rem]">2. PWA Site Upgrade.</li>
          <li className="text-[1.05rem]">3. ETH & AVAX Expansion.</li>
          <li className="text-[1.05rem]">4. DeFi & NFT Milestones.</li>
        </ol>

        <p className="text-center">Experience our vision for 2024, including ambitious goals, a sleek PWA upgrade, expansion to Ethereum (ETH) and Avalanche (AVAX), and exciting milestones in DeFi and NFTs. Stay tuned for more surprises!</p>
      </div>
      <button className="text-[1.25rem] text-[#ffffff] h-[2.5rem] w-full max-w-[12rem] mx-auto bg-tertiary rounded-[8px] hover:text-[#ffc8c5] active:text-[#4b0804] shadow-[2px_4px_25px_10px_rgba(255,108,100,0.25)] transition-all duration-200 ease-in-out " onClick={()=>setShowRoadmap(true)}>See more</button>

      <div className={`${showRoadmap? 'opacity-1 select-auto transform translate-x-0 z-[100] bg-background/80': 'opacity-0 select-none transform translate-x-[2rem] z-[-2] bg-[#00000000]'} fixed top-0 left-0 flex justify-center p-[3vw] w-full h-screen transition-all duration-300 ease-in-out`} onClick={()=>setShowRoadmap(false)}>
        {/* <div className={`${showRoadmap? 'block' : 'hidden'} relative flex justify-center w-full h-full`}> */}
          <div className={`${showRoadmap? 'z-[105] block' : 'z-[-2] hidden'} absolute top-0 left-0 h-full w-full bg-background/20`}></div>
          <img
            src="assets/images/roadmap.jpg"
            alt="ROADMAP"
            className={`${showRoadmap ? 'z-[110] block cursor-pointer' : 'z-[-2] hidden'} absolute h-full max-h-[60rem] w-auto object-contain`}
            onClick={toggleZoom}
            style={{ cursor: isZoomed ? 'zoom-out' : 'zoom-in' }}
          />        
        {/* </div> */}
      </div>
    </div>
  )
}

export default Roadmap