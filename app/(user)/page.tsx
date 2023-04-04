import React from 'react'
import "../../styles/globals.css"
import {previewData} from "next/headers" 
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PreviewBlogList'
import BlogList from '../../components/BlogList'

export const revalidate = 30; 

const query = groq`
  *[_type == "post"] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)

`

async function HomePage() {

  if (previewData()) {
    return (
      <PreviewSuspense fallback={
        <div role="status">
          <p className='text-center text-lg animate-pulse text-[#DEAD4F]'> Loading... </p>
        </div>

      }>
        <PreviewBlogList query = {query} />
      </PreviewSuspense>
    )
  }

  const posts =  await client.fetch(query)
  console.log(posts)

  return (
    <BlogList posts={posts} />
  )
}

export default HomePage