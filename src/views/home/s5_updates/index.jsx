import React from 'react';
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import TwitterContainer from 'components/twitter_container';

const Update = () => {
 
  return (
    <div id='updates' className='w-full flex flex-col gap-[3rem] items-center lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">RECENT UPDATES</h1>
      <div className="max-w-[55rem] ">
      {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName="StarShip_Sol"
        options={{tweetLimit: '3'}}
      /> */}
      <TwitterContainer />
      </div>
    </div>
  );
};

export default Update;