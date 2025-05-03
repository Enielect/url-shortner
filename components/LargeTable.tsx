'use client';
import React from 'react';
import CopyButon from './ui/CopyButon';
import useCopyText from '@/app/hooks/copy-text';
import { useURLContext } from '@/app/context/URLProvider';
import { YoutubeIcon } from '@/lib/social.icons';
import ShowIcon from './ShowIcon';
import { identifySocialPlatform } from '@/lib/utils';
const LargeTable = ({ className }: { className: string }) => {
  const { urlState } = useURLContext();
  return (
    <div className={`text-white rounded-t-md overflow-hidden ${className}`}>
      <div className='overflow-x-auto'>
        <table className='w-full rounded-t-xl overflow-hidden max-w-[1024px] mx-auto border-separate border-spacing-y-1'>
          <thead className='bg-[#181E29] text-left  h-10 text-sm '>
            <tr>
              <th className='pl-4 w-[18rem]'>Short Link</th>
              <th className='w-[20rem] max-[802px]:pl-4'>Original Link</th>
              <th className='w-[12rem] max-[802px]:pl-4  min-w-[12rem]'>
                Date
              </th>
              <th className='w-[12rem]  min-w-[12rem]'>Actions</th>
              {/* specigying a min width here was very important to it taking the width specified */}
            </tr>
          </thead>
          <tbody className='text-sm  [&>tr]:mb-2'>
            {urlState.map((url, index) => (
              <TableRow
                key={index}
                originalUrl={url.originalUrl}
                shortenedUrl={url.shortenedUrl}
                date={url.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function TableRow({
  originalUrl,
  shortenedUrl,
  date,
}: {
  originalUrl: string;
  shortenedUrl: string;
  date: string;
}) {
  const { textElementToCopy, copyButton, isClicked, setIsClicked } =
    useCopyText();
  return (
    <tr className='h-[3rem]  backdrop-blur-md  bg-[#181E29]/20'>
      <td className='pl-4 h-full'>
        <div className='flex items-center h-full gap-3 mr-3'>
          <span className='text-sm hidden' ref={textElementToCopy}>
            {shortenedUrl}
          </span>
          <span className='text-sm'>
            {shortenedUrl.slice(0, 10)}
            {shortenedUrl.length > 10 ? '...' : ''}
          </span>
          <CopyButon
            buttonRef={copyButton}
            onClick={() => setIsClicked(true)}
          />
        </div>
      </td>
      <td className='relative max-[802px]:pl-4'>
        <span className='flex items-center gap-3 mr-4'>
          {/* <span> */}
          <ShowIcon socialName={identifySocialPlatform(originalUrl)} />
          {/* </span> */}
          <span>{originalUrl}</span>
        </span>
      </td>
      <td className='max-sm:pl-8 max-[802px]:pl-4'>{date}</td>
      <td className='space-x-2 '>
        <button className='p-2 bg-[#181E29] border-[#353C4A] border rounded-full'>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            className='w-4 h-4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.84375 11.7812C1.9375 11.4688 2.09375 11.1562 2.28125 10.9062V10.875H2.3125C2.375 10.7812 2.46875 10.6875 2.53125 10.625L12.0312 1.125C12.8125 0.34375 14.0938 0.34375 14.875 1.125L16.0938 2.34375C16.1875 2.4375 16.2812 2.5625 16.3438 2.65625C16.875 3.4375 16.7812 4.5 16.0938 5.1875L6.59375 14.6875C6.5625 14.7188 6.5 14.75 6.46875 14.8125C6.4375 14.8438 6.375 14.875 6.34375 14.9062V14.9375H6.3125C6.0625 15.125 5.75 15.2812 5.4375 15.375L3 16.0938L1.65625 16.5C1.40625 16.5625 1.125 16.5 0.9375 16.2812C0.71875 16.0938 0.65625 15.8125 0.75 15.5625L1.125 14.2188L1.84375 11.7812ZM12.6875 6.46875L10.75 4.53125L4.9375 10.3438L5.3125 11.9062L6.875 12.2812L12.6875 6.46875ZM3.75 11.7188L3.375 11.9688C3.34375 12.0312 3.3125 12.125 3.28125 12.2188L3.0625 12.9375L2.5625 14.6562L4.28125 14.1562L5 13.9375C5.09375 13.9062 5.1875 13.875 5.25 13.8438L5.5 13.5L4.53125 13.25C4.25 13.1875 4.03125 12.9688 3.96875 12.6875L3.75 11.7188ZM10.5625 7.34375L7.5625 10.3438C7.375 10.5312 7.03125 10.5312 6.84375 10.3438C6.65625 10.1562 6.65625 9.84375 6.84375 9.65625L9.84375 6.65625C10.0312 6.4375 10.375 6.4375 10.5625 6.65625C10.75 6.84375 10.75 7.15625 10.5625 7.34375Z'
              fill='white'
            />
          </svg>
        </button>
        <button className='p-2 bg-[#181E29] border-[#353C4A] border rounded-full'>
          <svg
            width='15'
            height='17'
            viewBox='0 0 15 17'
            className='w-4 h-4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.25 2C6.15625 2 6.09375 2.0625 6.03125 2.125L5.4375 3H9.96875L9.375 2.125C9.34375 2.0625 9.25 2 9.15625 2H6.25ZM11.7812 3H12.1875H13.7188H13.9688C14.375 3 14.7188 3.34375 14.7188 3.75C14.7188 4.1875 14.375 4.5 13.9688 4.5H13.5938L12.8438 14.6562C12.75 15.7188 11.9062 16.5 10.8438 16.5H4.5625C3.5 16.5 2.65625 15.7188 2.5625 14.6562L1.8125 4.5H1.46875C1.03125 4.5 0.71875 4.1875 0.71875 3.75C0.71875 3.34375 1.03125 3 1.46875 3H1.71875H3.21875H3.625L4.78125 1.28125C5.09375 0.8125 5.65625 0.5 6.25 0.5H9.15625C9.75 0.5 10.3125 0.8125 10.625 1.28125L11.7812 3ZM12.0938 4.5H3.3125L4.0625 14.5625C4.09375 14.8125 4.3125 15 4.5625 15H10.8438C11.0938 15 11.3125 14.8125 11.3438 14.5625L12.0938 4.5Z'
              fill='white'
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default LargeTable;
