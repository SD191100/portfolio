import React from 'react'
import { Icon } from '../ui/ScreenIcon'

const MyToolsContent = () => {
  const icons = [
    {
      index: 1,
      alt: "file",
      title: "Linux",
      link: "arch.svg",
      forward: "/linux"
    },
    {
      index: 2,
      alt: "folder",
      title: "Neovim",
      link: "neovim.svg",
      forward: "/neovim"
    },
    {
      index: 3,
      alt: "folder",
      title: "VSCode",
      link: "vscode.svg",
      forward: "/vscode"
    },
    {
      index: 4,
      alt: "file",
      title: "tmux",
      link: "tmux.svg",
      forward: "/tmux"
    },
    {
      index: 5,
      alt: "folder",
      title: "Postman",
      link: "postman.svg",
      forward: "/postman"
    },

    {
      index: 6,
      alt: "folder",
      title: "Docker",
      link: "docker.svg",
      forward: "/docker"
    },
    {
      index: 7,
      alt: "folder",
      title: "ProxMox",
      link: "proxmox.svg",
      forward: "/proxmox"
    },

  ]
  return (
    <div className='text-gray-800 dark:text-white max-h-full'>
      <div className="mx-10 flex space-x-20 items-center flex-wrap">
        {icons.map((icon) => (
          <Icon key={icon.index} link={icon.link} alt={icon.alt} title={icon.title} forward={icon.forward} className='text-black dark:text-white dark:hover:bg-neutral-300/20' />
        ))}
      </div>

    </div>
  )
}

export default MyToolsContent
