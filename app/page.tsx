'use client';
import LargeTable from '@/components/LargeTable';
import MobileTable from '@/components/MobileTable';
import { ArrowRight, Link } from 'lucide-react';
import { useActionState, useEffect, useState, useTransition } from 'react';
import { shorten } from './action/shorten';
import { useFormState } from 'react-dom';
import { useURLContext } from './context/URLProvider';

export default function Home() {
  const [focus, setFocus] = useState(false);
  const [url, setUrl] = useState('');
  const [state, action, pending] = useFormState(shorten, null);
  const { addUrlState } = useURLContext();

  useEffect(() => {
    if (state) {
      const { key, date, originalUrl } = state;
      const newUrlState = {
        shortenedUrl: key,
        originalUrl,
        date: new Date(date).toLocaleDateString(),
      };
      addUrlState(newUrlState);
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className='mx-[30px] min-h-[100dvh]'>
      <header className='text-[20px] gradient-header text-center py-5'>
        Ukeme
      </header>
      <h1 className='text-[40px] text-center md:text-[50px] text-pink-300 font-bold gradient-header'>
        Shorten your long links
      </h1>
      <h4 className='text-[#C9CED6] text-center text-sm md:text-lg py-4'>
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </h4>
      <div className='flex justify-center my-4'>
        <form
          action={action}
          className={`rounded-full ${
            focus ? 'border-blue-800' : 'border-transparent'
          } flex justify-between items-center pr-1 py-1 relative bg-[#181E29] border border-[#353C4A] max-w-[300px] w-[min(50vw,550px)] md:max-w-[700px]`}
        >
          <div className={`flex items-center `}>
            <div className='px-3'>
              <Link className='text-white' />
            </div>
            <div className='w-[calc(100%-40px)] md:w-[calc(100%-135px)] pl-[2.7rem] absolute'>
              <input
                name='url'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                type='text'
                style={{ border: 'none', outline: 'none' }}
                className={`min-[556px]:w-full w-[calc(100%-7px)] md:max-w-[600px] text-white bg-[#181E29] py-2`}
                placeholder='Enter your long link here'
              />
            </div>
          </div>
          <button
            type='submit'
            className='flex md:hidden relative justify-center shadow-button button-resize-corrector p-2 items-center  bg-[#144EE3] rounded-full'
          >
            <ArrowRight className='text-white' />
          </button>
          <button
            type='submit'
            className='md:flex text-white hidden  justify-center big-button-shadow items-center px-4 py-3 bg-[#144EE3] rounded-full'
          >
            Shorten Now
          </button>
        </form>
      </div>

      {/*  */}
      <div className='my-10'>
        <MobileTable className='sm:hidden' />
        <LargeTable className='sm:block hidden' />
      </div>
    </div>
  );
}
