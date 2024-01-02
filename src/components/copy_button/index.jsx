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
    <button onClick={handleCopyClick}>
      {isCopied ? <RiFileCopy2Line className='text-tertiary2 text-[2rem]' /> : <RiCheckFill className='text-secondary text-[2rem]' />}
    </button>
  );
};

export default CopyToClipboardButton;