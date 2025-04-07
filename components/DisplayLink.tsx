'use client';

import useCopyText from '@/app/hooks/copy-text';
import wait from '@/lib/wait';
import React, { useEffect, useRef, useState } from 'react';

const DisplayLink = () => {
  const { textElementToCopy, copyButton, isClicked, setIsClicked } =
    useCopyText();
  return (
    <div className='flex'>
      <div className='bg-white py-3 px-4'>
        <span className='text-to-copy' ref={textElementToCopy}>
          http.facebook.com
        </span>
      </div>
      <div className=''>
        <button
          ref={copyButton}
          onClick={() => setIsClicked(true)}
          className={`w-full max-w-[100px] transition-all relative text-white bg-[#144EE3]  h-full px-4 ${
            isClicked ? 'button-animate' : ''
          }`}
        >
          {isClicked ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default DisplayLink;
