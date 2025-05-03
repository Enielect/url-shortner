'use server';

import { baseUrl, siteBaseUrl } from '@/lib/baseUrl';
import { /*checkIfUrlExists, */ isValidURL } from '@/lib/validUrl';

export const shorten = async (prevState: unknown, formState: FormData) => {
  const url = formState.get('url') as string;

  // const activeUrl = await checkIfUrlExists(url);
  try {
    if (isValidURL(url)) {
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
        created: true,
        key: siteBaseUrl + '/' + result.key,
        date: Date.now(),
        originalUrl: url,
      };
    }
    console.log('This is not a valid url');
  } catch (err) {
    console.error(err);
    return { created: false, key: '', date: '', originalUrl: '' };
  }

  //   return '';
};
