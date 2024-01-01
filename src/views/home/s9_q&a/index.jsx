import React, { useState } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";

const QACard = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='w-full'>
      <button className={`${isOpen? 'rounded-tr-[8px] rounded-tl-[8px]' : 'rounded-[8px]'} flex justify-between items-center text-center w-full p-[1rem] bg-secondary-dark border-solid border-[1px] border-secondary`} onClick={()=>setIsOpen(!isOpen)}>
        <p className='text-[1.25rem]'>{question}</p>
        <HiOutlineChevronDown className='text-secondary text-[1.5rem]' />
      </button>
      <div className={`${isOpen? 'h-max visible rounded-br-[8px] rounded-bl-[8px] py-[1.5rem]' : 'h-0 invisible'} flex w-full px-[1rem] bg-secondary-dark border-solid border-[1px] border-secondary`}>
        <p className={`${isOpen? 'opacity-1 select-auto' : 'opacity-0 select-none'} text-[1.25rem] text-secondary font-inter`}>{answer}</p>
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
          question={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.o illo?'} 
          answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi provident quos at ut voluptatem sunt obcaecati numquam consectetur? Corporis architecto cumque sapiente nemo illo?'} 
        />
        <QACard 
          question={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.o illo?'} 
          answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi provident quos at ut voluptatem sunt obcaecati numquam consectetur? Corporis architecto cumque sapiente nemo illo?'} 
        />
        <QACard 
          question={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.o illo?'} 
          answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi provident quos at ut voluptatem sunt obcaecati numquam consectetur? Corporis architecto cumque sapiente nemo illo?'} 
        />
        <QACard 
          question={'Lorem, ipsum dolor sit amet consectetur adipisicing elit.o illo?'} 
          answer={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi provident quos at ut voluptatem sunt obcaecati numquam consectetur? Corporis architecto cumque sapiente nemo illo?'} 
        />
      </div>
    </div>
  )
}

export default QA