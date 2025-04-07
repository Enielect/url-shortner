import { useEffect, useRef, useState } from 'react';

export default function useCopyText() {
  const [isClicked, setIsClicked] = useState(false);
  const copyButton = useRef<HTMLButtonElement>(null);
  const textElementToCopy = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let textToCopy = textElementToCopy.current?.innerHTML as string;

    copyButton?.current?.addEventListener('click', () => {
      navigator.clipboard.writeText(textToCopy);
    });

    if (isClicked) {
      const interval = setTimeout(() => {
        setIsClicked(false);
      }, 3000);
    }
  }, [isClicked]);
  return {
    copyButton,
    textElementToCopy,
    isClicked,
    setIsClicked,
  };
}
