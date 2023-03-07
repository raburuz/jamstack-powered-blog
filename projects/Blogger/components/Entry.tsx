import Link from 'next/link'
import React from 'react'
import { IData } from '../lib/mdx'

export const Entry = ({title,createAt,slug,description,readTime,showDesc}:IData) => {
  return (
    <>
    {
      !showDesc ? (
        <Link href={`/post/${slug}`} className='select-none min-h-[30px] flex flex-col items-start gap-2 ml-10'>
            <div className='w-full flex gap-4 justify-between items-center pr-5'>
              <span className='font-monospace font-semibold text-xs'>
                {title}
              </span>
              <div className='flex flex-col gap-px'>
                <span className='font-monospace font-medium text-[11px] whitespace-nowrap'>{createAt}</span>
                <span className='font-monospace font-medium text-[10px] whitespace-nowrap'>Read: {readTime}</span>
              </div>
            </div>
            <span className='font-monospace font-medium text-[11px]'>→ /{slug}</span>
        </Link>
      ) : (
        <>
          <Link href={`/post/${slug}`} className={`
            select-none min-h-[30px] ml-4 p-6 
            flex flex-col items-start gap-2
            bg-[#0a0a0a]
            border border-solid border-gray-800 rounded-xl
          `}>
            <div className='w-full flex gap-4 justify-between items-center'>
              <span className='font-monospace font-semibold text-xs'>
                {title}
              </span>
              <div className='flex flex-col gap-px'>
                <span className='font-monospace font-medium text-[11px] whitespace-nowrap '>{createAt}</span>
                <span className='font-monospace font-medium text-[9px] whitespace-nowrap '>Read: {readTime}</span>
              </div>
            </div>
            <span className='font-monospace font-medium text-[11px] max-w-3xl'>{description}</span>
          </Link>
        </>
      )
    }
    </>
  )
}
