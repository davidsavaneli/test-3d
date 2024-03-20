import React, { memo } from 'react'
import Head from 'next/head'

const Seo = () => {
  return (
    <Head>
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='site_name' />
      <meta name='resource-type' content='document' />
      <meta name='theme-color' content='#000000' />
      <meta name='msapplication-navbutton-color' content='#000000' />
      <meta name='apple-mobile-web-app-status-bar-style' content='#000000' />
      <link rel='shortcut icon' type='image/x-icon' href='./favicon.ico' />
      <link rel='apple-touch-icon' sizes='180x180' href='./icon-180x180.png' />
      <link rel='manifest' href='./manifest.json' />

      <title>Techzy</title>
      <meta
        name='description'
        content='Innovating software solutions for limitless growth. Customer-focused, quality-driven, and team-centric. Revolutionizing the digital landscape.'
      />
      <meta property='og:title' content='Techzy' />
      <meta
        property='og:description'
        content='Innovating software solutions for limitless growth. Customer-focused, quality-driven, and team-centric. Revolutionizing the digital landscape.'
      />
      <meta property='og:url' content='https://techzy.app' />
      <meta property='og:image' content='./share-photo.jpeg' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='675' />
      <link rel='canonical' href='https://techzy.app' />
    </Head>
  )
}

export default memo(Seo)
