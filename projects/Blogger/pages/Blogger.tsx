import { config } from '@/projects/environment'
import React from 'react'
import { Entry } from '../components/Entry'
import { Navbar } from '../components/Navbar'
import { Sidebar } from '../components/Sidebar'
import { LBlog } from '../layout/LBlog'
import { IBlogPost } from '../lib/mdx'

interface Props{
  docs:IBlogPost[]
}

export const Blogger = ({docs}:Props) => {

  const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

  return (
    <LBlog style='@animation-fadeInRight'>

        {/* Aside */}
        <Sidebar/>

        {/* Content */}
        <div className='relative w-full lg:px-10 box-content'>
          <Navbar/>
          <div className={`
            relative
            mx-2 pb-40 pt-14  
            flex flex-col gap-4 
            border-l-[1px] border-solid border-white 
            
          `}>
            {/* Current month / year */}
              <div className='relative cursor-pointer'>

                <div className='absolute -left-1 z-10 mt-1 shadow-xl'>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute -left-px -top-[2px] z-10 inline-flex w-[10px] h-[10px] rounded-full bg-primary opacity-75"></span>
                    <span style={{boxShadow: "rgb(0 0 0) 0px 0px 0px 6px"}} className="relative inline-flex rounded-full  w-[7px] h-[7px] bg-primary"></span>
                  </span>  
                </div>
                <div className='min-h-[30px] flex flex-row items-start gap-2 pl-10'>
                  <span className='font-monospace font-semibold text-primary text-xs'>{month[new Date().getMonth()]}{' '}{new Date().getFullYear()}</span>
                </div>
              </div>

            {/* Post list */}
            {
              docs.map(({data})=>{
                return (
                  <div className='relative' key={data.slug}>
                    <span style={{boxShadow: "rgb(0 0 0) 0px 0px 0px 6px"}} className={`
                      absolute -left-1 z-10 
                      bg-white w-[7px] h-[7px] rounded-full shadow-xl
                      ${data.showDesc ? 'mt-7': 'mt-1'}
                    `}></span>
                    <Entry {...data}/>
                  </div>
                )
              })
            }
          </div>
          <div className='fixed bottom-0 z-10 bg-transparent-bottom w-full h-28 flex items-end p-6' >
            <div className='select-none font-familjen flex gap-1 items-start'>
              <span className='text-[9px] font-black tracking-widest'>{config.app.name}</span>
              <span className='text-[6px] opacity-50'>{config.app.label}</span>
            </div>
          </div>
        </div>
    
    </LBlog>
  )
}
