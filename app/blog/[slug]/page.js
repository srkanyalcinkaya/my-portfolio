
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm'
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from 'next/image'
import formatDate from '@/utlis/formatDate'
import Head from "next/head"
export async function generateStaticParams() {

  const files = fs.readdirSync(path.join("posts"))

  const paths = files.map(filename => ({
    slug: filename.replace(".mdx", "")
  }))


  return paths
}


const components = { Image,SyntaxHighlighter }



function getPost({ slug }) {

  const markdownFile = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8")

  const { data: fontMatter, content } = matter(markdownFile)

  return {
    fontMatter,
    slug,
    content
  }
}






export default function Page({ params }) {
  const props = getPost(params)
  
  
  const content = props.content
  

  return (
    <div>
    
    <article className="mt-20 space-y-10 prose prose-quoteless prose-neutral dark:prose-invert">
      <h1 className="font-bold text-2xl tracking-tighter max-w-[650px]">{props.fontMatter.title}</h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(props.fontMatter.publishedAt)}</p>
      <MDXRemote source={content} components={components} />
     
    </article>
    </div>
  )
}

