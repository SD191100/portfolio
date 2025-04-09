

'use client';

import Link from "next/link";

export default function Neovim() {
  return (
    <div className="text-gray-800 dark:text-white space-y-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">🧠 Neovim – My Dev Brain</h1>

      <p>
        Neovim isn’t just a text editor for me — it&apos;s where I spend most of my dev hours. I’ve supercharged it with 
        <span className="text-blue-500 font-semibold"> NvChad </span>, an advanced yet minimal Neovim config built on top of Lua. 
        It gives me a fast, modern, and highly customizable experience while still being blazing fast.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🛠 Powered by NvChad</h2>
      <p>
        I chose <Link href="https://nvchad.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">NvChad</Link> 
        because it offers the perfect blend of prebuilt features and freedom. I customized the theme, added modules for better LSP support, 
        and tuned my startup for lightning speed.
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>⏱️ Lazy-loading for faster startup</li>
        <li>🎨 Customized colorschemes (TokyoNight Dark FTW)</li>
        <li>🧩 Mason + LSPConfig for powerful language support</li>
        <li>🧪 Added Treesitter for rich syntax highlighting</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">💬 LSPConfig & Mason</h2>
      <p>
        Language Server Protocol is a must for modern development. Using 
        <Link href="https://github.com/neovim/nvim-lspconfig" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">LSPConfig</Link> 
        and <Link href="https://github.com/williamboman/mason.nvim" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Mason</Link>,
        I easily manage and install language servers for Go, TypeScript, Python, and more.
      </p>
      <p>
        It provides autocompletion, hover docs, diagnostics, formatting, and everything you’d expect from a modern IDE — 
        without the bloat. The Lua-based config makes it super hackable too.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">📦 Custom Modules</h2>
      <p>
        I created some modules for:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>🌐 Toggling between light/dark themes on the fly</li>
        <li>⚙️ Project-specific configs using Lua conditionals</li>
        <li>🧹 Auto-format on save with Prettier & Black</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🧑‍💻 Why Neovim?</h2>
      <p>
        With Neovim, I feel completely in control. It’s fast, keyboard-driven, and integrates seamlessly with my Tmux sessions 
        across multiple VMs (thanks to SSH + Tmux + Neovim = bliss 😌).
      </p>
      <p>
        Whether I’m working on a full-stack web app or tweaking a Kubernetes config, Neovim has become my go-to editor across all machines.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Resources</h2>
      <ul className="list-disc list-inside ml-4">
        <li><Link href="https://nvchad.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">NvChad Website</Link></li>
        <li><Link href="https://github.com/williamboman/mason.nvim" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Mason.nvim GitHub</Link></li>
        <li><Link href="https://github.com/neovim/nvim-lspconfig" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">nvim-lspconfig</Link></li>
      </ul>
    </div>
  );
}

