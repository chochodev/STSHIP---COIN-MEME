import { useState, useEffect } from 'react'
import { RiCloseLine } from 'react-icons/ri';

const Disclaimer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const hasAcceptedDisclaimer = localStorage.getItem('hasAcceptedDisclaimer');
    if (!hasAcceptedDisclaimer) {
      setIsModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('hasAcceptedDisclaimer', 'true');
  };

  return (
    <div className={`${isModalOpen? 'transform translate-y-0 delay-500 opacity-1' : 'transform translate-y-[3rem] opacity-0'} fixed top-0 left-0 z-[200] flex flex-col justify-start w-full h-full bg-[#000000]/40 overflow-auto transition duration-200 ease-in-out`}>
      <div className="flex justify-end p-[1rem] h-[20%] min-h-[5rem] w-full" onClick={handleCloseModal}>
        <RiCloseLine className='text-[2rem] text-[#ffffff]'/>
      </div>
      <p className="text-[.875rem] md:text-[1rem] lg:text-[1.25rem] text-secondary-dark bg-[#ffffff] p-[2rem] px-[5%] rounded-tr-[2rem] rounded-tl-[2rem]">
        <b>Disclaimer:</b> The information provided on this website about StarShip Token ($STSHIP) and any other content is for informational and entertainment purposes only. It does not constitute financial, investment, legal, or other types of advice. We do not offer investment advice or advocate the purchase, holding, or sale of any security or investment by any specific individual. We are not registered as an investment adviser with any federal or state regulatory agency. The content on this site should not be relied upon as a basis for investment decisions. We strongly recommend you to consult with a licensed and qualified professional before making any investment decisions. Any decisions made based on information published here are done at your own risk.
      </p>
      <button className='w-full flex-1 h-[5rem] flex justify-end p-[2rem] bg-[#ffffff]' onClick={handleCloseModal}>
        <p className='text-secondary-dark flex items-center font-[600] text-[.7rem] md:text-[1rem] h-[1.875rem] md:h-[2.5rem] px-[1.5rem] bg-secondary-light rounded-[5px] hover:bg-secondary active:text-[#ffffff]'>Close</p>
      </button>
    </div>
  )
}

export default Disclaimer