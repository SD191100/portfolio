import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ProjectHeader = ({ name, category, date, slug }: { name: string; category: string; date: string; slug: string }) => {
  return (
    <tr className="hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors gap-2">
      <td className="px-6 py-4 text-xl text-black">
        <Link href={`/this-pc/projects/${slug}`} className='text-black dark:text-white  no-underline  hover:text-inherit flex space-x-4 '>
          <Image src={`/icons/txtFile.svg`} alt='txt' height={30} width={30} />
          <span>
            {name}.txt
          </span>
        </Link>
      </td>
      <td className="px-6 py-4 text-xl text-gray-600 dark:text-gray-300">
        {category}
      </td>
      <td className="px-6 py-4 text-xl text-gray-500 dark:text-gray-400">
        {date}
      </td>
    </tr>
  )
}

export default ProjectHeader
