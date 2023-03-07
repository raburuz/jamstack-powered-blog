import { config } from '@/projects/environment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { LBlog } from '../layout/LBlog'

export const Me = () => {
  return (
    <LBlog style='@animation-fadeInLeft'>
      <Sidebar/>
      <div className={`
        relative w-full p-10
        after:bg-transparent-bottom after:w-full after:fixed after:bottom-0 after:h-16 after:z-10
      `}>
        <Link href={'/'} className={`
          fixed left-0 top-16 px-4 mb-5 lg:pl-0 
          rounded-b-md rounded-l-none border border-t-0 border-l-0 border-solid border-gray-800  
          flex gap-2 items-center 
          bg-base-100 text-xs
          lg:border-0 lg:sticky lg:top-0 
        `}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.64645 11.6464C4.45118 11.8417 4.45118 12.1583 4.64645 12.3536L7.82843 15.5355C8.02369 15.7308 8.34027 15.7308 8.53553 15.5355C8.7308 15.3403 8.7308 15.0237 8.53553 14.8284L5.70711 12L8.53553 9.17157C8.7308 8.97631 8.7308 8.65973 8.53553 8.46447C8.34027 8.2692 8.02369 8.2692 7.82843 8.46447L4.64645 11.6464ZM19 11.5L5 11.5L5 12.5L19 12.5L19 11.5Z" fill="white"></path></svg>
          <span>Return to blog</span>
        </Link>

        <div className='flex flex-col gap-10 lg:my-8'>
          <h1 className='text-4xl font-black font-familjen mb-5'>About Me</h1>

          <div className='flex flex-col gap-44'>
            {/* Jean */}
            <div className='flex flex-col gap-5 max-w-xl'>
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-semibold font-familjen'>{config.owner.name}</h1>
                <p className='text-base'>{config.owner.description}</p>
              </div>
              
              <div className='max-w-xl flex flex-col gap-3'>
                <div className='flex flex-col lg:flex-row gap-5'>
                  <Image className='w-auto lg:w-32 rounded-full' width={400} height={400} src={config.owner.photo_url} alt='Picture from Jean Ramirez'></Image>
                  <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex gap-2 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      <a href={`https://twitter.com/${config.owner.twitter}`} target="_blank" rel='noopener noreferrer'>@{config.owner.twitter}</a>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      <a href={`https://github.com/${config.owner.github}`} target="_blank" rel='noopener noreferrer'>@{config.owner.github}</a>
                    </div>

                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  {
                    config.owner.content.map((content)=><p className='text-base' key={content}>{content}</p>)
                  }
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </LBlog>
  )
}
