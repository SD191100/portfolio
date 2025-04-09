"use client";
import { HomeIcon } from '@/components/ui/ScreenIcon';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  const icons = [
    {
      index: 1,
      alt: "folder",
      title: "projects",
      link: "blue-folder.svg",
      forward: "/this-pc/projects"
    },
    {
      index: 2,
      alt: "folder",
      title: "My Tools",
      link: "blue-folder.svg",
      forward: "/this-pc/my-tools"
    },
    {
      index: 3,
      alt: "file",
      title: "about.txt",
      link: "txtFile.svg",
      forward: "/this-pc/about"
    },
    {
      index: 4,
      alt: "folder",
      title: "Blogs",
      link: "blue-folder.svg",
      forward: "/this-pc/blogs"
    },
    {
      index: 5,
      alt: "file",
      title: "resume.pdf",
      link: "pdf.svg",
      forward: "/this-pc/resume"
    },

  ]
  return (
    <div className='flex justify-between items-center'>

      <div className="text-white my-20 mx-32  animate-slide-up">
        <h3 className="text-blue-300 text-xl md:text-xl mb-4">
          Welcome, My Name is
        </h3>
        <h1 className="font-bold text-blue-50 text-5xl md:text-5xl flex items-center gap-2 mb-6">
          Shivam Durgude
        </h1>
        <h2 className="text-blue-300 text-2xl md:text-2xl leading-snug">
          a <Typewriter
            words={['Web Developer', 'Devops Engineer', 'Homelab Enthusiast']}
            cursor
            cursorStyle='█'
            typeSpeed={50}
            delaySpeed={1000}
            loop
          />
        </h2>
      </div>
      <div className=" mr-10">
        {icons.map((icon) => (
          <HomeIcon key={icon.index} link={icon.link} alt={icon.alt} title={icon.title} forward={icon.forward} className="text-white" />
        ))}
      </div>
    </div>
  );
}
/* <div className='text-white mx-20 flex flex-col justify-end'>
      <h3 className='text-blue-300 text-2xl mb-8'>Welcome, My Name is </h3>
      <h1 className='font-bold text-blue-50 text-5xl mb-5'>Shivam Durgude_</h1>
      <h2 className='text-blue-100 text-3xl leading-10 mb-10'>I am a Web Developer and  <br />HomeLab Enthuiast.</h2>
    </div>  

          <span className="animate-blink">_</span>
    */



