import { useState } from 'react'
import Link from 'next/link'
import { useOutside } from '@/projects/hooks';
import { config } from '@/projects/environment';

export const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutside(setIsOpen);

  return (
    <>
      <div className={`
        ${isOpen ? 'fixed': 'hidden'} top-0 lg:hidden w-full h-screen bg-black opacity-70 z-[41]
        transition-all duration-500
      `}></div>
      <div ref={ref} className='sticky top-0 z-50'>
        <div className='@animation-fadeInLeft bg-base-100 lg:hidden sticky top-0 text-xs font-familjen text-white mx-2 py-6 flex justify-between'>
          <div className='select-none font-familjen flex gap-1 items-start'>
            <span className='font-black tracking-widest'>{config.app.name}</span>
            <span className='text-[9px] opacity-50'>{config.app.label}</span>
          </div>
          <span className='cursor-pointer select-none' onClick={()=>setIsOpen(!isOpen)}>Menu</span>
        </div>       
        <div className={`
          ${!isOpen && 'hidden'}
          absolute
          lg:block lg:sticky 
          @animation-fadeInRight
          top-0 h-screen 
          pl-10 pr-2 py-6 lg:py-10 
          z-50 bg-base-100 w-72
          `}>
          <aside className='h-full flex flex-col justify-between'>
            {/* pre */}
            <div className='flex flex-col gap-10'>
              <div className='select-none text-white font-familjen flex gap-1 items-start'>
                <span className='text-xl font-black tracking-widest'>Δrkift</span>
                <span className='text-xs opacity-50'>blog</span>
              </div>
              <div className='flex flex-col gap-3 font-monospace text-xs'>
                <p>{config.app.welcomeMessage}</p>
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <div>
                <p className='text-xs font-monospace opacity-70'>
                  {config.app.description}
                </p>
              </div>
              <div className='flex items-center gap-5 text-xs text-white'>
                <Link href="/">Home</Link>
                <span className='w-px h-px bg-white rounded-full'></span>
                <Link href="/me">About Me</Link>
                <span className='w-px h-px bg-white rounded-full'></span>
                <Link className='font-black font-familjen tracking-widest' href={config.app.domain} >{config.app.name}.com</Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
