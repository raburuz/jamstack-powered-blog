import { MDXRemote } from 'next-mdx-remote'
import { Seo } from "@/projects/common"
import { IBlogPost } from '../lib/mdx'
import { Sidebar } from "../components/Sidebar"
import { LBlog } from "../layout/LBlog"

export const PostEntry = ({ data, content }:IBlogPost) => {
  const proseStyle = `
    prose lg:prose-xl 
    prose-p:my-1
    prose-h1:my-5
    prose-h2:my-5
    prose-pre:my-2
    prose-ol:my-2
  `
  return (
    <>
    <Seo title={data.title} desc={data.description}></Seo>
    <LBlog style='@animation-fadeInLeft'>
      <Sidebar></Sidebar>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className={`flex flex-col gap-2 mx-2 pb-40 pt-14 ${proseStyle}`}>
          <MDXRemote 
            {...content} 
          ></MDXRemote>
        </div>

      </div>
    </LBlog>
    </> 
  )
}
