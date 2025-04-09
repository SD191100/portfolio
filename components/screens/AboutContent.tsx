import React from 'react'

const AboutContent = () => {
  return (
    <div className="text-gray-800 dark:text-white space-y-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">Hello, I&apos;m Shivam Durgude 👋</h1>
      <p className="text-lg leading-relaxed">
        I&apos;m a passionate <span className="text-blue-500 font-semibold">Web Developer</span> and
        <span className="text-purple-500 font-semibold"> HomeLab Enthusiast</span>.
        My journey in tech started with a curiosity to break things and understand how they work.
        Now, I build, deploy, and optimize scalable applications with cutting-edge technologies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">💡 What I Do</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>🚀 Build full-stack web applications using <span className="font-semibold">Next.js, TypeScript, and .NET</span>.</li>
        <li>☁️ Manage cloud & DevOps workflows with <span className="font-semibold">Kubernetes, Docker, Terraform, and AWS</span>.</li>
        <li>🔧 Run my own <span className="font-semibold">HomeLab</span> with self-hosted services & automation.</li>
        <li>📚 Love learning & sharing knowledge through <span className="font-semibold">tech blogs</span>.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🛠 Tech Stack</h2>
      <div className="flex flex-wrap gap-3 text-lg">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md">Next.js</span>
        <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-md">TypeScript</span>
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-md">Node.js</span>
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-md">Golang</span>
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-md">Docker</span>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-md">Kubernetes</span>
      </div>

    </div>

  )
}

export default AboutContent
