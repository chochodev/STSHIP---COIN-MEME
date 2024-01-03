import React from 'react'
import { Tweet } from 'react-tweet'

const Update = () => {
 
  return (
    <div id='updates' className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">RECENT UPDATES</h1>
      <div className="flex flex-col items-center gap-[8rem] lg:gap-[15rem] ">
        <Tweet tweetId={'1738276406537187814'} />
        <Tweet tweetId={'1738258931804152307'} />
        <Tweet tweetId={'1738248502864396695'} />
      </div>
      
    </div>
  )
}

export default Update