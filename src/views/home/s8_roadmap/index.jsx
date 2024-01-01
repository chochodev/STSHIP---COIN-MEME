import React from 'react'

const Roadmap = () => {
  const items = [
    {
      image: 'assets/images/proof_01.jpg',
      title: 'Exciting Update for the $STSHIP Communinty',
      text_1: 'We’re thrilled to announce a significant milestone: The ownership of our contract has been officially transferred to a dead wallet, fulfuling our promise. ',
      text_2: 'Stay tuned for more updates as we collectively shape the future of $STSHIP!',
      extra_style: 'flex-col-reverse lg:flex-row',
    },
  ]
  return (
    <div className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">ROADMAP</h1>
      <div className="flex flex-col gap-[8rem] lg:gap-[15rem] ">
        {items.map((item, index) => (
          <div className={`${item.extra_style} flex justify-evenly gap-y-[3rem] w-full`} key={index}>
            <img src={item.image} alt='PROOF' className='w-full lg:w-[48%] h-[34rem] xl:h-[37.8125rem] my-auto rounded-[20px] object-cover' />
            <div className='flex flex-col gap-[2rem] w-full lg:w-[45%] h-full '>
              <h3 className='text-[1.5rem] lg:text-[1.875rem] xl:text-[2.1875rem] uppercase text-secondary font-montserrat font-semibold '>{item.title}</h3>
              <p className='text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] font-inter leading-[1.25]'>{item.text_1}<br/><br/>{item.text_2}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Roadmap