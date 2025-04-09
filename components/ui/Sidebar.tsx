"use client";
import Image from "next/image";
import Link from "next/link";
const folderItems = [
  { title: "Projects", link: "blue-folder.svg", size: 30, forward: "/projects" },
  { title: "Blogs", link: "blue-folder.svg", size: 30, forward: "/blogs" },
  { title: "My Tools", link: "blue-folder.svg", size: 30, forward: "/my-tools" },
]

const fileItems = [
  { title: "about.txt", link: "txtFile.svg", size: 30, forward: "/about" },
  { title: "resume.pdf", link: "pdf.svg", size: 30, forward: "/resume" },
]

const contactItems = [
  { title: "Email me", link: "email.svg", size: 30, forward: "/contact" }
]

export default function Sidebar() {
  //const [selected, setSelected] = useState("");

  return (
    <div>
      <div className='text-black dark:text-white pt-3 '>
        <Link href={`/`} className=''>
          <button className='relative rounded-full bg-red-400 p-3 mr-2 group transition transform ' >
            <span className='hidden text-white group-hover:block text-xs absolute top-1 left-2'>x</span>
          </button>
        </Link>
        <button className='rounded-full bg-yellow-400 p-3 mr-2'></button>
        <button className='rounded-full bg-green-400 p-3'></button>
      </div>
      <div className=' mt-14 space-y-10'>
        <div>
          <span className='font-thin text-neutral-400 text-xl mb-2'  >Folders</span>
          {folderItems.map((item, index) => (
            <FolderItem forward={item.forward} title={item.title} link={item.link} size={item.size} key={index} />
          ))}
        </div>
        <div>
          <span className='font-thin text-neutral-400 text-xl mb-2'  >Files</span>
          {fileItems.map((item, index) => (
            <FolderItem forward={item.forward} title={item.title} link={item.link} size={item.size} key={index} />
          ))}
        </div>
        <div>
          <span className='font-thin text-neutral-400 text-xl mb-2'  >Contact</span>
          {contactItems.map((item, index) => (
            <FolderItem forward={item.forward} title={item.title} link={item.link} size={item.size} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const FolderItem = ({ link, title, size, forward }: { link: string; title: string; size: number, forward: string }) => {
  return (
    <Link href={`/this-pc${forward}`} className='font-normal rounded-lg text-black dark:text-white text-xl flex items-center gap-4 mb-2 backdrop-blur-lg hover:bg-neutral-300 dark:hover:bg-neutral-600 px-4 py-2 mr-3'>
      <Image src={`/icons/${link}`} alt='folder' width={size} height={size} />
      {title}
    </Link>
  )
}
