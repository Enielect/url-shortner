'use client';
import React from 'react';
import CopyButon from './ui/CopyButon';
import useCopyText from '@/app/hooks/copy-text';

const MobileTable = ({ className }: { className: string }) => {
  return (
    <div className={`text-white rounded-t-md ${className}`}>
      <header className='bg-[#181E29] text-sm capitalize rounded-t-md py-3 pl-4 mb-1 text-semibold'>
        Shortened link
      </header>
      <div className='space-y-1'>
        {Array(4)
          .fill(null)
          .map((ele, i) => (
            <Row key={i} />
          ))}
      </div>
    </div>
  );
};

const Row = () => {
  const { textElementToCopy, copyButton, isClicked, setIsClicked } =
    useCopyText();
  return (
    <div
      role='Row'
      className='flex py-2 bg-[#181E29]/25 justify-between backdrop-blur-md items-center pl-4 pr-3'
    >
      <div className='space-x-3 flex items-center'>
        <span className='text-sm' ref={textElementToCopy}>
          shortened link...
        </span>
        <CopyButon buttonRef={copyButton} onClick={() => setIsClicked(true)} />
      </div>
      <button className='bg-[#1C283F] w-7 h-7 flex justify-center items-center rounded-full'>
        <svg
          width='13'
          height='8'
          viewBox='0 0 13 8'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.82227 6.97656C6.64648 7.15234 6.32422 7.15234 6.14844 6.97656L0.523438 1.35156C0.347656 1.17578 0.347656 0.853516 0.523438 0.677734C0.699219 0.501953 1.02148 0.501953 1.19727 0.677734L6.5 5.98047L11.7734 0.677734C11.9492 0.501953 12.2715 0.501953 12.4473 0.677734C12.623 0.853516 12.623 1.17578 12.4473 1.35156L6.82227 6.97656Z'
            fill='#C9CED6'
          />
        </svg>
      </button>
    </div>
  );
};



export default MobileTable;
