
// app/folder/my-tools/vscode/page.tsx

import Link from "next/link";

export default function VSCode() {
  return (
    <div className="text-gray-800 dark:text-white space-y-10 mx-auto">
      <h1 className="text-5xl font-bold text-black dark:text-white">🧠 Visual Studio Code</h1>

      <p className="text-lg leading-relaxed">
        <span className="font-semibold text-blue-600 dark:text-blue-400">Visual Studio Code (VSCode)</span> is my daily driver for writing and managing code across all my development environments. Its lightweight design, robust extensions ecosystem, and seamless integration with remote systems make it indispensable for my workflow.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔌 Remote - SSH Integration</h2>
      <p className="text-lg leading-relaxed">
        One of the most powerful features I rely on is the{" "}
        <Link
          href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"
          className="text-blue-500 underline"
          target="_blank"
        >
          Remote - SSH extension
        </Link>. It allows me to connect directly to my VMs (running on my{" "}
        <Link href="/folder/my-tools/proxmox" className="text-purple-500 underline">Proxmox server</Link>) over SSH and work on code remotely as if it were local. This is especially helpful for isolating environments for microservices, running resource-heavy tasks on better hardware, and testing distributed systems.
      </p>

      <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-2">📡 How I Use It</h3>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Configure SSH for each VM in the <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">~/.ssh/config</code> file.</li>
          <li>Use <code className="bg-neutral-200 dark:bg-neutral-700 px-1 rounded">Remote - SSH</code> in the command palette to connect directly.</li>
          <li>Edit files, run servers, manage containers inside each remote session.</li>
          <li>Boost productivity by separating dev environments by project or stack.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔧 Favorite Extensions</h2>
      <ul className="list-disc pl-5 text-lg space-y-1">
        <li><span className="font-semibold text-green-600">Prettier</span> – Consistent code formatting</li>
        <li><span className="font-semibold text-purple-600">Tailwind CSS IntelliSense</span> – Supercharged Tailwind productivity</li>
        <li><span className="font-semibold text-yellow-600">GitLens</span> – Deep git insights</li>
        <li><span className="font-semibold text-pink-600">Remote - SSH</span> – My bridge to every dev VM</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Useful Links</h2>
      <ul className="list-inside list-disc text-lg space-y-2">
        <li>
          <Link
            href="https://code.visualstudio.com/"
            target="_blank"
            className="text-blue-500 underline"
          >
            Official VSCode Website
          </Link>
        </li>
        <li>
          <Link
            href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh"
            target="_blank"
            className="text-blue-500 underline"
          >
            Remote - SSH Extension
          </Link>
        </li>
        <li>
          <Link
            href="https://code.visualstudio.com/docs/remote/ssh"
            target="_blank"
            className="text-blue-500 underline"
          >
            Getting Started with Remote - SSH
          </Link>
        </li>
      </ul>
    </div>
  );
}
