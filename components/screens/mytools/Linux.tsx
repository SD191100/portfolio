import Link from 'next/link'
import React from 'react'

const Linux = () => {
  return (
    <div className="text-neutral-800 dark:text-white space-y-6 text-lg">
      <h1 className="text-4xl font-bold">🧠 Arch Linux</h1>

      <p>
        I use <span className="font-semibold text-blue-600">Arch Linux</span> as my main OS for its flexibility and minimalism. 
        It helped me understand Linux internals deeply because of the manual installation process.
      </p>

      <p>
        I’ve customized my setup using <span className="font-semibold">i3 window manager</span>, 
        <span className="font-semibold"> Polybar</span>, and <span className="font-semibold">Picom</span> for a lightweight yet beautiful tiling workflow.
      </p>

      <p>
        Installing i3 taught me a lot about systemd, window managers, and improved my keyboard workflow significantly.
      </p>

      <div className="space-x-4">
        <Link 
          href="https://wiki.archlinux.org/" 
          target="_blank" 
          className="underline text-blue-500"
        >
          Arch Wiki
        </Link>
        <Link 
          href="https://github.com/shivamdurgude/dotfiles" 
          target="_blank" 
          className="underline text-purple-500"
        >
          My Dotfiles
        </Link>
      </div>
    </div>
  )
}

export default Linux
