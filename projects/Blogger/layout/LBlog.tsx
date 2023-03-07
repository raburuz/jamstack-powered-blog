import React from 'react'

interface Props {
  children: React.ReactNode
  style?: string
}

export const LBlog = ({children, style = ''}:Props) => {
  return (
    <div className='max-w-[1764px] mx-auto'>
       <div className={`w-full h-auto flex flex-col lg:flex-row gap-4 ${style}`}>
          {children}
       </div>
    </div>
  )
}
