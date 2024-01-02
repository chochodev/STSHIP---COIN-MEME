import React, { useState } from 'react';
import { RiCheckFill, RiFileCopy2Line } from 'react-icons/ri';


const CopyToClipboardButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <button onClick={handleCopyClick} className='bg-tertiary2/10 rounded-tr-[8px] rounded-br-[8px] p-[.5rem]'>
      {!isCopied ? <RiFileCopy2Line className='text-tertiary2 text-[1.25rem]' /> : <RiCheckFill className='text-secondary text-[1.25rem]' />}
    </button>
  );
};

export default CopyToClipboardButton;