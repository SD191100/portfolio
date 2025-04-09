'use client';

import Link from "next/link";

export default function Postman() {
  return (
    <div className="text-gray-800 dark:text-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">📬 Postman – API Testing & Automation</h1>

      <p>
        Postman is one of my essential tools for working with APIs. Whether I&apos;m building a 
        <span className="font-semibold text-blue-500"> RESTful backend</span> or 
        <span className="font-semibold text-purple-500"> microservices</span> architecture, Postman helps me test, debug, and document endpoints efficiently.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔍 How I Use It</h2>
      <ul className="list-disc list-inside ml-4">
        <li>🛠 Test HTTP requests (GET, POST, PUT, DELETE) for all my APIs</li>
        <li>🧪 Simulate different environments (local, staging, prod) using variables</li>
        <li>📂 Organize requests into collections for each project</li>
        <li>📝 Share and sync collections across devices using my Postman account</li>
        <li>🧾 Generate auto-documentation for backend APIs</li>
      </ul>

      <p>
        This helps me move quickly when I’m building APIs with 
        <span className="font-semibold text-yellow-400"> .NET</span> or 
        <span className="font-semibold text-green-400"> Node.js</span>. 
        I can inspect responses, test error handling, and even mock services during frontend development.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">⚙️ Postman CLI (`newman`)</h2>
      <p>
        For automation and CI pipelines, I use the Postman CLI tool, 
        <Link href="https://www.npmjs.com/package/newman" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">newman</Link>. 
        It lets me run Postman collections directly from the command line or inside my 
        <span className="font-semibold text-pink-400"> GitHub Actions</span> and 
        <span className="font-semibold text-orange-400"> Docker-based</span> CI/CD pipelines.
      </p>

      <pre className="bg-neutral-900 text-green-300 p-4 rounded-md overflow-x-auto text-sm">
        newman run ./collections/my-api.postman_collection.json -e ./environments/dev.postman_environment.json
      </pre>

      <p>
        This ensures my APIs are tested during every deployment or code push. Failures are caught early,
        and I can even generate reports in HTML or JSON format.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">💻 Local + Cloud Sync</h2>
      <p>
        I use the desktop version for development and the web dashboard to sync and manage collections remotely.
        I can log in from any machine—my main desktop, a VM, or even my laptop—and instantly continue where I left off.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Useful Links</h2>
      <ul className="list-disc list-inside ml-4">
        <li><Link href="https://www.postman.com/downloads/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Postman Desktop App</Link></li>
        <li><Link href="https://www.postman.com/docs/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Postman Docs</Link></li>
        <li><Link href="https://www.npmjs.com/package/newman" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Newman CLI</Link></li>
      </ul>
    </div>
  );
}
