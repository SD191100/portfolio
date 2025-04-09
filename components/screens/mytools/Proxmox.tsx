import Link from 'next/link'
import React from 'react'

const Proxmox = () => {
  return (
    <div className="text-gray-800 dark:text-white space-y-6">
      <h1 className="text-4xl font-bold text-black dark:text-white">🖥️ ProxMox in My Homelab</h1>

      <p className="text-lg leading-relaxed">
        <span className="font-semibold">ProxMox VE</span> is the backbone of my HomeLab infrastructure. It’s an open-source virtualization platform that lets me efficiently run multiple virtual machines and containers on a single physical server.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🧠 Why I Use ProxMox</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>💾 Host VMs like <span className="font-semibold">NAS, Samba, MSSQL, and Docker containers</span>.</li>
        <li>📦 Run lightweight containers with <span className="font-semibold">LXC</span> for faster performance.</li>
        <li>📈 Built-in web UI makes managing VMs seamless.</li>
        <li>🔄 Easily take <span className="font-semibold">snapshots</span> and restore when testing risky setups.</li>
        <li>🔌 Helps me practice real-world infrastructure concepts like backups, networking, and failover.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔧 My Setup</h2>
      <p className="text-lg leading-relaxed">
        I installed ProxMox on an old computer dedicated for virtualization. It hosts several services that power my development and entertainment workflow.
        The <span className="font-semibold">VM 100</span> runs my <span className="italic">Samba Server</span>, and others are assigned to databases like MSSQL and MongoDB.
      </p>

      <p className="text-lg leading-relaxed">
        I also run Docker and Portainer inside a container to manage other containers with a GUI. ProxMox gives me full control over CPU, RAM, and storage allocation—perfect for learning production-level deployment strategies.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">🔗 Useful Links</h2>
      <ul className="list-disc list-inside text-lg space-y-2">
        <li>
          🌐 Official Site:{" "}
          <Link
            href="https://www.proxmox.com/en/proxmox-ve"
            target="_blank"
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ProxMox VE
          </Link>
        </li>
        <li>
          📘 Great Guide:{" "}
          <Link
            href="https://pve.proxmox.com/wiki/Main_Page"
            target="_blank"
            className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ProxMox Wiki
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Proxmox
