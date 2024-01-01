import React from 'react'
import Hero from './s1_hero';
import HowToBuy from './s2_howtobuy';
import Charts from './s3_trackingcharts';
import Tokenomic from './s4_tokenomics';
import Update from './s5_updates';
import Video from './s6_videos';
import Partnership from './s7_partnership';
import Roadmap from './s8_roadmap';
import QA from './s9_q&a';

const Home = () => {
  return (
    <>
    <div className='px-[.65rem] sm:px-[1rem] md:px-[2.5rem] xl:px-[3.75rem]'>
      <Hero />
      <HowToBuy />
      <Charts />
      <Tokenomic />
      <Update />
      <Video />
      <Partnership />
      <Roadmap />
      <QA />
    </div>
    
    </>
  )
}

export default Home;