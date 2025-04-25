'use server';

import { baseUrl, siteBaseUrl } from '@/lib/baseUrl';
import { checkIfUrlExists, isValidURL } from '@/lib/validUrl';

export const shorten = async (prevState: unknown, formState: FormData) => {
  const url = formState.get('url') as string;

  const activeUrl = await checkIfUrlExists(url);
  try {
    if (isValidURL(url) && activeUrl) {
      const response = await fetch(`${baseUrl}/api/shorten`, {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result, 'result');
      return {
        key: siteBaseUrl + '/' + result.key,
        date: Date.now(),
        originalUrl: url,
      };
    }
  } catch (err) {
    console.error(err);
  }

  //   return '';
};
