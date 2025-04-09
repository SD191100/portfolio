
import Content from "@/components/ui/Content";
import { Project } from "@/lib/Projects";
import React from "react";




const ProjectPage = ({ project }: { project: Project }) => {
  //console.log(post);
  return (
    <div className="container max-w-5xl mx-auto min-h-screen py-6 px-5">
      <div className="flex gap-3 pb-7">
        {project.tags.map((tag) => (
          <div
            key={tag}
            //href={`/tags/${tag}`}
            className="bg-neutral-700 py-0.5 px-3 rounded-2xl text-neutral-300 hover:text-white text-xl"
          >
            {tag}
          </div>
        ))}
      </div>
      <h1 className="text-6xl font-bold px-2 mb-5">{project.title}</h1>
      <p className="text-xl text-neutral-400 mx-3">{project.date}</p>
      <div className="my-14 px-5">
        <Content content={project.content} />
      </div>
    </div>
  );
};

export default ProjectPage;
