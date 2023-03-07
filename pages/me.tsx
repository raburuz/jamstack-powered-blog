import React from 'react'
import { Me } from '@/projects/blogger'
import { Seo } from '@/projects/common'

export default function MePage() {
  return (
    <>
       <Seo 
        title='Δrkift About me' 
        desc='About me'
        />
      <main>
        <Me/>
      </main>
    </>
  )
}
