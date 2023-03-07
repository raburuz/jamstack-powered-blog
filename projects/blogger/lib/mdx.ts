import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from 'next-mdx-remote/serialize'

/**
 * If You want change the directory name from your markdown documents
 * please remember change your variable 
 */
const markdown_document_directory = 'docs';
const docsDirectory = join( process.cwd(), markdown_document_directory );

/** 
 * Get all docs with all data available 
 */
export const getAllDocsWithData= async () => {
  const slugs = getAllSlugs();
  const promises = slugs.map(async (slug) => await getDocBySlug(slug));
  return await Promise.all(promises);
}

/**
 * Order array documents by date  
 */
export const orderDataByDate = (data:IBlogPost[]) => {
  return data.sort((a,b)=>{
    const date1 = new Date(b.data.createAt).getTime();
    const date2 = new Date(a.data.createAt).getTime();
    return date1 - date2
  })
}

/**
 * Get all slug from our documents
 */
export const getAllSlugs = () => {
  const files = readdirSync(docsDirectory);
  return files.map((name) => name.replace(/\.mdx$/, ''))
}

/** 
 * Get Individual data from markdown that we need
 */
export const getDocBySlug = async( slug: string ) => {
  const fullPath = join(docsDirectory, `${slug}.mdx`);

  const fileContents = readFileSync(fullPath, 'utf8');

  const { data:metadata, content: source } = matter(fileContents);
  const content = await dataSerialize(source);

  return { data: {...metadata, slug } as IData, content };
}

/**
 *  Data Serialize, here you can add your MDX plugins,
 *  To see more please visit: https://www.npmjs.com/package/next-mdx-remote
 */
const dataSerialize= async (source:string) => {
  return await serialize(source);
}

export interface IBlogPost{
  content:MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>, 
  data:IData
} 


/**
 * MetaData Interface
 * Here you can change the properties that you want to show
 * in your Blog Post.
 *  - Remember add all this properties to the markdown document
 *    - The markdown document need to be extension *.mdx
 */
export interface IData{
  title:string;
  author:string,
  description:string;
  createAt:string; //Format MM/DD/YYYY
  readTime:string; 
  slug:string;
  showDesc:boolean; //Show the description
}