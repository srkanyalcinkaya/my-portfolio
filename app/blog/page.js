import Link from 'next/link'
import React from 'react'
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
import formatDate from '@/utlis/formatDate'
export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

export default function page() {


  const files = fs.readdirSync(path.join(process.cwd(), 'posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)


    return {
      frontmatter: data,
      slug: filename.split('.')[0],
    }
  })


  

  return (
    <section className='mt-20'>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">read my blog</h1>
      {posts.sort((a, b) => {
          if (new Date(a.frontmatter.publishedAt) > new Date(b.frontmatter.publishedAt)) {
            
            return -1;
            
          }
          return 1;
        }).map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/blog/${post.slug}`}
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-100 tracking-tight">
              {post.frontmatter.title}
            </p>
            <p className="text-neutral-500">
              {post.frontmatter.summary}
            </p>
            <p className="text-neutral-300 text-sm">
              {formatDate(post.frontmatter.publishedAt)}
            </p>

          </div>
        </Link>
      ))}
    </section>
  )
}



