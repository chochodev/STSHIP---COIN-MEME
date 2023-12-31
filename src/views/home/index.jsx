import React from 'react'
import Hero from './s1_hero';
import HowToBuy from './s2_howtobuy';
import Charts from './s3_trackingcharts';
import Tokenomic from './s4_tokenomics';
import Update from './s5_updates';

const Home = () => {
  return (
    <>
    <Hero />
    <HowToBuy />
    <Charts />
    <Tokenomic />
    <Update />
    </>
  )
}

export default Home;