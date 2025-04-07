import React, { ButtonHTMLAttributes, RefObject } from 'react';

const CopyButon = ({
  buttonRef,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonRef: RefObject<HTMLButtonElement>;
}) => {
  function handleCopyToClipBoard() {}
  return (
    <button
      ref={buttonRef}
      {...props}
      onClick={handleCopyToClipBoard}
      className='bg-[#1C283F] w-8 h-8 flex justify-center items-center rounded-full'
    >
      <CopyIcon />
    </button>
  );
};

const CopyIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-5'
      //   class='lucide lucide-files-icon lucide-files'
    >
      <path d='M20 7h-3a2 2 0 0 1-2-2V2' />
      <path d='M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z' />
      <path d='M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8' />
    </svg>
  );
};
export default CopyButon;
