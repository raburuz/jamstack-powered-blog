import type { AppProps } from 'next/app'
import { Space_Mono, Familjen_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'

const mono = Space_Mono({
  weight:'400', 
  subsets: ['latin'],
})
const familjen = Familjen_Grotesk({
  weight:['400','500'],
  subsets:['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <style jsx global>
        {`
            :root {
              --font-monospace: ${mono.style.fontFamily};
              --font-familjen: ${familjen.style.fontFamily};
            }
        `}
      </style>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
