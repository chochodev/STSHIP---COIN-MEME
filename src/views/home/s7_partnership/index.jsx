import React from 'react'

const Partnership = () => {
  const items = [
    {
      image: 'assets/images/partnership.jpg',
      title: 'Elevate Yourself with $STSHIP Partnership!',
      text_1: 'Our innovative roadmap promises exciting ventures, such as PWA site upgrades, network expansions, and milestones in DeFi and NFTs.',
      text_2: 'Join $STSHIP for a collaboration that goes beyond the ordinary, where innovation meets community spirit, and together we soar to new heights.',
      extra_style: 'flex-col-reverse lg:flex-row',
    },
  ]
  return (
    <div id='partnership' className='w-full flex flex-col gap-[3rem] lg:pt-[5rem] pb-[10rem] '>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">PARTNERSHIP ANNOUNCEMENT</h1>
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

export default Partnership