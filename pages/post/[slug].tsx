import { PostEntry } from "@/projects/blogger";
import { getAllSlugs, getDocBySlug, IBlogPost } from '../../projects/blogger/lib/mdx';

export default function Post({ data, content }:IBlogPost){
  return (
    <>
      <PostEntry data={data} content={content}/>
    </>
  )
}

/**
 * Register all paths "slugs" in our application
 */
export async function getStaticPaths(){
  const slugs = getAllSlugs();
  return {
    paths: slugs.map((slug) => { return {
      params: {
        slug
      }
     }}),
    fallback: false, // can also be true or 'blocking'
  }
}

/**
 * Render Individual Page when is called 
 */
export async function getStaticProps(context:any) {
  // MDX text - can be from a local file, database, anywhere
  const { slug } = context.params;
  const { data, content } = await getDocBySlug(slug);
  return {
    // Passed to the page component as props
    props: { data, content },
  }
}