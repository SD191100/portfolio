import ProjectPage from '@/components/ui/ProjectPage';
import { getProjectBySlug } from '@/lib/Projects';
import { tParams } from '@/types/PostTypes';
import { notFound } from 'next/navigation';
import React from 'react'

const page = async (props: { params: tParams }) => {
  const { slug } = await props.params;
  console.log(slug)
  const project = await getProjectBySlug(slug);

  if (!project) return notFound();
  return (
  <ProjectPage project={project} />
  )
}

export default page
