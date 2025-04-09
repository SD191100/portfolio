import React from 'react'
import BlogHeader from '../ui/BlogHeader';
import { getAllPosts } from '@/lib/Posts';

const BlogContent = async () => {
  const posts = await getAllPosts();
  return (
    <div className="overflow-x-auto text-xl">
      <table className="min-w-full  shadow-md ">
        <thead className=" rounded-lg divide-x divide-cyan-700 ">
          <tr>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Name</span>
                <span className='text-gray-500'>|</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Category</span>
                <span className='text-gray-500'>|</span>
              </div>
            </th>
            <th className="px-6 py-3 text-left text-xl font-semibold text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span >Date</span>
                <span className='text-gray-500'>|</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-black">
          {posts.map((post, index) => (
            <BlogHeader key={index} name={post.title} category={post.tags[1]} date={post.date} slug={post.slug} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BlogContent
