
'use client'

import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="text-black dark:text-white  space-y-6">
      <h1 className="text-3xl font-bold">Shivam Durgude</h1>
      <p>📞 9604363960 • 📧 shivamdurgude1@gmail.com • 🔗 SD191100</p>

      <section>
        <h2 className="text-2xl font-semibold underline">Technical Skills</h2>
        <p>
          <strong>Languages:</strong> JavaScript, TypeScript, C++, Python, Bash, SQL, HTML<br />
          <strong>Technologies:</strong> React, Next.js, Node.js, MongoDB, AWS, Docker, Kubernetes, Terraform, Ansible<br />
          <strong>Tools & Concepts:</strong> Git, CI/CD, Proxmox, Virtualization, Linux, Networking, Cloud Computing
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Experience</h2>
        <h3 className="text-xl font-medium mt-2">Diproma Tech <span className="text-sm">— Cloud Intern</span></h3>
        <p className="italic">March 2023 - May 2023 | Nashik, Maharashtra</p>
        <ul className="list-disc ml-6">
          <li>Hands-on experience in virtualization, automation, and DevOps with a team of 5+ engineers.</li>
          <li>Built a WhatsApp chatbot using AWS that handled 500+ daily requests, improving communication by 30%.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Projects</h2>

        <h3 className="text-xl font-medium mt-2">
          <Link href="https://blog-virid-phi.vercel.app/" target="_blank" className="text-blue-400 underline">Tech Blog</Link>
        </h3>
        <ul className="list-disc ml-6">
          <li>Built with Next.js, deployed on Vercel with GitHub CI/CD, loading in under 1 second for 100+ users.</li>
          <li>Mastered isomorphic JavaScript, SSR, and automated deployments with GitHub Actions.</li>
        </ul>

        <h3 className="text-xl font-medium mt-4">AI-Generated Image Detection Tool</h3>
        <ul className="list-disc ml-6">
          <li>Used Transfer Learning in TensorFlow & Keras to detect AI-generated images.</li>
          <li>Frontend: React, Backend: Flask, training done on Google Colab.</li>
        </ul>

        <h3 className="text-xl font-medium mt-4">Automated Deployment for Scalable Web App</h3>
        <ul className="list-disc ml-6">
          <li>Full-stack To-Do app using Express.js, React.js, MongoDB, hosted on AWS EC2.</li>
          <li>CI/CD with Jenkins & GitHub Webhooks; Dockerized and orchestrated via Kubernetes.</li>
          <li>Prometheus used for monitoring in production.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Education</h2>
        <p><strong>MET BKC Institute of Engineering</strong> — B.E. in Computer, 7.9 CGPA</p>
        <p>2020 - 2024 | Nashik, Maharashtra</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Certifications</h2>
        <div>
          <strong>Full Stack Web Development</strong> – Udemy<br />
          Topics: HTML, CSS, JS, Node.js, Express.js, React, MongoDB, Solana, jQuery<br />
          <Link href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-17fdcd51-212a-4307-bfed-54e2c80161a1.pdf" className="text-blue-400 underline" target="_blank">View Certificate</Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Achievements</h2>
        <div>
          <strong>Technical Head Advisory</strong> – Students Association of Computer, MET BKC IOE
          <ul className="list-disc ml-6">
            <li>Designed and deployed a registration & event platform for METASTORM-2024.</li>
            <li>Led competitive & technical event management.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold underline">Links</h2>
        <ul className="list-disc ml-6">
          <li>
            <Link href="mailto:shivamdurgude1@gmail.com" className="text-blue-400 underline">shivamdurgude1@gmail.com</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/shivam-durgude-490088231" target="_blank" className="text-blue-400 underline">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://github.com/sd191100" target="_blank" className="text-blue-400 underline">GitHub</Link>
          </li>
          <li>
            <Link href="https://blog-virid-phi.vercel.app/" target="_blank" className="text-blue-400 underline">Blog</Link>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold underline">Resume Download</h2>
        <Link
          href="https://drive.google.com/file/d/1hnNV1Mmn2-vcImFLNTqzRB1dUZHDf6mn/view?usp=sharing"
          target="_blank"
          className="text-blue-400 underline"
        >
          Click here to view the original PDF resume
        </Link>
      </section>
    </div>
  );
}

