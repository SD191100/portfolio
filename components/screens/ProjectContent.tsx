import React from 'react'
import { getAllProjects } from '@/lib/Projects';
import ProjectHeader from '../ui/ProjectHeader';

const ProjectContent = async () => {
  const projects = await getAllProjects();
  console.log(projects)
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
          {projects.map((project, index) => (
            <ProjectHeader key={index} name={project.title} category={project.tags[1]} date={project.date} slug={project.slug} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProjectContent
