'use client';

import React, { useEffect } from 'react';

const RedirectComponent = ({ url }: { url: string }) => {
  useEffect(() => {
    if (url) {
      window.location.href = url;
    }
  }, [url]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <a
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        style={{
          fontSize: '1.5rem',
          color: '#0070f3',
          textDecoration: 'none',
          marginBottom: '1rem',
        }}
      >
        Redirect to URL
      </a>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        Click the link above to visit the URL.
      </p>
      <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '0.5rem' }}>
        URL: {url}
      </p>
    </div>
  );
};

export default RedirectComponent;
