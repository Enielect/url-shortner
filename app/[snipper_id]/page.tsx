import { baseUrl } from '@/lib/baseUrl';
import { checkIfUrlExists, isValidURL } from '@/lib/validUrl';
import React from 'react';
import { redirect } from 'next/navigation';
import RedirectComponent from './RedirectComponent';

async function getSnipper(snipper_id: string) {
  try {
    const res = await fetch(`${baseUrl}/api/expand/${snipper_id}`, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const { url } = await res.json();
    console.log(url, 'data');

    try {
      const isUrl = await checkIfUrlExists(url);

      if (isValidURL(url) && isUrl) {
        return url;
      }
    } catch (err: any) {
      throw new Error('Invalid URL format: ' + err.message);
    }
  } catch (err) {
    console.log(err);
  }
}

const InterceptorPage = async ({
  params,
}: {
  params: { snipper_id: string };
}) => {
  const { snipper_id } = await params;
  const url = await getSnipper(snipper_id);

  return (
    <div>
      <RedirectComponent url={url} />
    </div>
  );
};

export default InterceptorPage;
