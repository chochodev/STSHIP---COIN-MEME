import React from 'react';
import CopyToClipboardButton from 'components/copy_button';

const HowToBuy = () => {
  const items = [
    {
      image: 'assets/images/raydium-logo2.png',
      text: 'Buy using Raydium',
      name: 'RAYDIUM',
      image_style: '',
      link: 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j&fixed=in'
    },
    {
      image: 'assets/images/jupiter2.jpg',
      text: 'Buy using Jupiter',
      name: 'JUPITER',
      image_style: '',
      link: 'https://jup.ag/swap/SOL-STSHIP_GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j'
    },
    {
      image: 'assets/images/birdeye2.jpg',
      text: 'Buy using Birdeye',
      name: 'BIRDEYE',
      image_style: '',
      link: 'https://birdeye.so/token/GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j?chain=solana'
    }
  ]
  return (
    <div id='howtobuy' className='w-full flex flex-col pb-[8rem] gap-[3rem] '>
      <>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center ">SOLANA TOKEN</h1>
      <div className='flex flex-col gap-[1rem] p-[.5rem] sm:p-[1rem] w-full md:w-[90%] mx-auto bg-background rounded-[8px] border-solid border-[1px] border-secondary'>
        <div className='flex justify-between items-center gap-[1rem] md:gap-[3.5rem] '>
          <p className='text-tertiary2 text-[.75rem] md:text-[1.25rem] select-none'>Token name:</p>
          <p className='text-[.875rem] sm:text-[1rem] md:text-[1.15rem]'>StarShip(STSHIP)</p>
        </div>
        <div className='flex justify-between items-center gap-[1rem] md:gap-[3.5rem] '>
          <p className='text-tertiary2 text-[.75rem] md:text-[1.25rem] select-none'>Solana profile:</p>
          <a href="https://solscan.io/token/GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j" target="_blank" rel="noopener noreferrer" className='text-[.875rem] sm:text-[1rem] md:text-[1.15rem] text-[#ffffff] hover:text-secondary active:text-secondary-dark transition-all duration-200 ease-in-out'>StarShip_Profile</a>
        </div>
        <div className='flex justify-between items-center gap-[1rem] md:gap-[3.5rem] '>
          <p className='text-tertiary2 text-[.75rem] md:text-[1.25rem] select-none'>Liquidity Burned:</p>
          <p className='text-[.875rem] sm:text-[1rem] md:text-[1.15rem]'>120 billions</p>
        </div>
        <div className='flex justify-between items-center gap-[1rem] md:gap-[3.5rem] '>
          <p className='text-tertiary2 text-[.75rem] md:text-[1.25rem] select-none'>Contract reannounced:</p>
          <p className='text-[.875rem] sm:text-[1rem] md:text-[1.15rem]'>0% tax</p>
        </div>
        <p className='text-tertiary2 text-[.75rem] md:text-[1.25rem] select-none'>Copy contract below:</p>
        <div className='flex items-center gap-[.5rem] w-max mx-auto pl-[.5rem] rounded-[8px] bg-tertiary2/10'>
          <p className='text-[.875rem] lg:text-[1.05rem] max-w-[11rem] md:max-w-max text-secondary truncate'>GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j</p>
          <CopyToClipboardButton text='GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j' />
        </div>
      </div>
      </>

      <>
      <h1 className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center mt-[2rem]">HOW TO BUY</h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-y-[4rem] items-center w-full">
        {items.map((item, index) => (
          <div className="flex flex-col gap-[1rem] w-[80%] max-w-[25rem] lg:w-[22%] min-w-[18rem]" key={index}>
            <div className="flex flex-col items-center bg-secondary-dark rounded-[8px] border-solid border-secondary-dim border-[1px] ">
              <img src={item.image} alt={item.name} className={`${item.image_style} h-[18.75rem] w-full object-cover rounded-tl-[8px] rounded-tr-[8px]`} />
              <p className="text-[1.25rem] text-center font-semibold font-inter text-secondary-dark bg-[#BEF4C3] w-max px-[1.5rem] py-[.875rem] rounded-[8px] transform translate-y-[-1rem]">{item.text}</p>
            </div>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className='text-secondary text-[1.15rem] md:text-[1.5625rem] font-montserrat font-semibold text-center py-[.875rem] bg-secondary-dark hover:text-secondary-light hover:border-secondary-light active:border-[#ffffff] rounded-[8px] border-solid border-secondary-dim border-[1px] transition-all duration-200 ease-in-out'>BUY NOW</a>
          </div>
        ))}
      </div>
      </>
      
      <>
      <h1 id='aboutus' className="text-[1.25rem] text-[#ffffff] font-semibold font-montserrat tracking-[15%] w-full text-center mt-[2rem] mb-[-2rem]">ABOUT US</h1>
      <div className='flex flex-col justify-center lg:justify-evenly gap-y-[1rem] md:gap-y-[2rem] items-center md:text-center w-full max-w-[45rem] mx-auto p-[2%]'>
        <h2 className='text-secondary text-[1.15rem] md:text-[1.25rem] lg:text-[1.5rem] w-full md:text-center font-semibold'>STARSHIP🚀 - $STSHIP MEME TOKEN</h2>
        <p className='text-[1.05rem] md:text-[1.15rem] lg:text-[1.35rem]'>
          $STSHIP is a meme-centric cryptocurrency token inspired by Elon Musk's SpaceX Starship rocket development. This unique Solana meme coin is community-driven and combines the excitement of space exploration with the popular appeal of memes.
          <br/><br/>
          The token is designed to capture the viral nature of its theme and is part of the broader narrative of successful meme tokens.
        </p>
      </div>
      </>

    </div>
  );
};

export default HowToBuy;