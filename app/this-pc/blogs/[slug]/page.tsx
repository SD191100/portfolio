import BlogPage from '@/components/ui/BlogPage';
import { getPostBySlug } from '@/lib/Posts';
import { tParams } from '@/types/PostTypes';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  console.log(slug)
  const post = await getPostBySlug(slug);

  if (!post) return notFound();
  return (
  <BlogPage post={post} />
  )
}

export default page
