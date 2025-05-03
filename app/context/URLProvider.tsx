'use client';

import { createContext, useContext, useState } from 'react';

// Create a context for the URL state

type URLState = {
  shortenedUrl: string;
  originalUrl: string;
  date: string;
};

const contextState: URLContextType = {
  urlState: [] as URLState[],
  addUrlState: (newUrlState: URLState) => {},
};
type URLContextType = {
  urlState: URLState[];
  addUrlState: (newUrlState: URLState) => void;
};
const URLContext = createContext<URLContextType>(contextState);

const URLProvider = ({ children }: { children: React.ReactNode }) => {
  const initialUrlState = localStorage.getItem('urlState');
  console.log(initialUrlState, 'initialUrlState');
  const [urlState, setUrlState] = useState<URLState[]>(
    JSON.parse(initialUrlState || '[]')
  );

  const addUrlState = (newUrlState: URLState) => {
    setUrlState((prevState) => {
      localStorage.setItem(
        'urlState',
        JSON.stringify([...prevState, newUrlState])
      );
      return [...prevState, newUrlState];
    });
  };

  return (
    <URLContext.Provider value={{ urlState, addUrlState }}>
      <div className='text-white'>{children}</div>
    </URLContext.Provider>
  );
};

export const useURLContext = () => {
  const context = useContext(URLContext);
  if (!context) {
    throw new Error('useURLContext must be used within a URLProvider');
  }
  return context;
};

export default URLProvider;
