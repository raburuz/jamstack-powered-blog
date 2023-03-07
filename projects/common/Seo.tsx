import Head from 'next/head'
import React from 'react'
import { config } from '@/projects/environment';
interface Props {
  title:string;
  desc:string
}

export const Seo = ({ title, desc }:Props) => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={config.app.icon} />
    </Head>
  )
}
