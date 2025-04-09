'use client';

import Link from "next/link";

export default function Docker() {
  return (
    <div className="text-gray-800 dark:text-gray-100 space-y-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">🐳 Docker – My App Container Factory</h1>

      <p>
        Docker is at the heart of how I manage and deploy applications across my HomeLab and development environments.
        I use a dedicated <span className="font-semibold text-blue-500">Proxmox VM</span> as my Docker host, which serves as a centralized container management system.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🏗️ My Setup</h2>
      <p>
        Inside my Proxmox cluster, I’ve provisioned a lightweight VM (Debian-based) that runs the Docker engine. 
        This VM is always online, and it&apos;s where I deploy:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>🧾 Self-hosted services (e.g., Pi-hole, Jellyfin, Nginx)</li>
        <li>🧪 Dev containers for testing new apps</li>
        <li>📦 Shared tools like Redis, PostgreSQL, MongoDB</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🖥️ Portainer for Visual Management</h2>
      <p>
        I manage most of my containers using 
        <Link href="https://www.portainer.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">Portainer</Link>, 
        which runs as a Docker container itself. It provides a clean web UI to:
      </p>
      <ul className="list-disc list-inside ml-4">
        <li>✅ Start/Stop/Restart containers easily</li>
        <li>🔍 View logs, stats, and terminal access</li>
        <li>📊 Monitor container health and resource usage</li>
        <li>🚀 Deploy new stacks using docker-compose in the browser</li>
      </ul>
      <p>
        I access Portainer using my internal network via 
        <span className="font-semibold text-green-400"> http://192.168.1.8:9000</span>.
        It&apos;s fast, lightweight, and makes container management smooth even from my phone.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">📁 Project-Based Containers</h2>
      <p>
        For each project, I spin up services in isolated Docker containers using a `docker-compose.yml` file.
        This ensures every app has a clean, reproducible environment. I also bind custom ports and volumes 
        to manage persistent data and networking.
      </p>
      <p className="italic text-gray-600 dark:text-gray-400">
        Example: My OCR service runs in a dedicated container and exposes an API on port 5000, used by other services in my home network.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔐 Secure & Efficient</h2>
      <p>
        The Docker VM is only accessible via SSH, and I expose only necessary ports to the local network. 
        I also back up important container volumes weekly using cron jobs.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Useful Links</h2>
      <ul className="list-disc list-inside ml-4">
        <li><Link href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Docker Documentation</Link></li>
        <li><Link href="https://www.portainer.io/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Portainer.io</Link></li>
        <li><Link href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Docker Hub</Link></li>
      </ul>
    </div>
  );
}
