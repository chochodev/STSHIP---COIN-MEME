import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

const QACard = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full'>
      <button className={`${isOpen? 'rounded-tr-[8px] rounded-tl-[8px]' : 'rounded-[8px]'} flex justify-between items-center text-center w-full p-[1rem] bg-secondary-dark border-solid border-[1px] border-secondary`} onClick={()=>setIsOpen(!isOpen)}>
        <p className='text-[.875rem] md:text-[1.25rem]'>{question}</p>
        <HiOutlineChevronDown className='text-secondary text-[1.5rem]' />
      </button>
      <div className={`${isOpen? 'h-max visible rounded-br-[8px] rounded-bl-[8px] py-[1.5rem]' : 'h-0 invisible'} flex w-full px-[1rem] bg-secondary-dark border-solid border-[1px] border-secondary`}>
        <p className={`${isOpen? 'opacity-1 select-auto' : 'opacity-0 select-none'} text-[.875rem] md:text-[1.25rem] text-secondary font-inter`}>{answer}</p>
      </div>
    </div>
  )
}

const QA = () => {
  return (
    <div className='w-full flex flex-col gap-[3rem] py-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">COMMON QUESTIONS</h1>
      <div className='flex flex-col gap-[1rem] w-full'> 
        <QACard 
          question={'How can I buy $STSHIP tokens?'} 
          answer={'You can purchase $STSHIP tokens on platforms like Raydium, Jupiter, and Birdaye. Simply follow the links provided in the "How to Buy" section on our website.'} 
        />
        <QACard 
          question={' What is the total supply of $STSHIP tokens?'} 
          answer={'The total supply of $STSHIP tokens is same as the burned tokens totalling at 120 billion.'} 
        />
        <QACard 
          question={'How often is the website updated with new information?'} 
          answer={' We strive to keep our website regularly updated with the latest information, especially regarding tokenomics, partnerships, roadmap, and how to buy.'} 
        />
        <QACard 
          question={'How can I get involved in community rewards and contests?'} 
          answer={'Keep an eye on our announcements and social media channels for information on upcoming community rewards, contests, and ventures. Participation details will be shared in advance.'} 
        />
        <a href="https://twitter.com/StarShip_Sol/status/1736638321101582399" rel="noreferrer" target='_blank' className='w-[90%] max-w-[30rem] mx-auto p-[.5rem] bg-secondary/20 active:bg-secondary/30 hover:bg-tertiary2/30 text-secondary text-center rounded-[5px] transition-all duration-200 ease-in-out'>For more questions: goto the official Q&A page.</a>
      </div>
    </div>
  )
}

export default QA