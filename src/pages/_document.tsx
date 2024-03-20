import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='preload'>
        <style>
          {`
            body {
              height: 100vh!important
              background-color: transparent;
              transition: background-color .3s,
            }
            
            body.preload {
              background-color: #1b1c1d;
            }
          `}
        </style>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
