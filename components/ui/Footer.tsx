import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <div className='w-full flex items-center justify-center'>
      <div className="backdrop-blur-sm bg-neutral-500/10 border-[0.5px] border-gray-400 px-4 py-2 rounded-2xl flex items-center gap-5">
        <a target='_blank' href={`https://github.com/sd191100`}>
          <Image src={`/icons/github.png`} alt='mail' width={50} height={50} className="hower:scale-105 transition-all" />
        </a>
        <a target='_blank' href={`https://discord.gg/AQKFjrJR`}>
          <Image src={`/icons/discord.png`} alt='mail' width={50} height={50} />
        </a>
        <a target='_blank' href={`https://www.linkedin.com/in/shivam-durgude-490088231/`}>
          <Image src={`/icons/linked.svg`} alt='mail' width={43} height={43} />
        </a>
        <a target='_blank' href={`https://twitter.com`}>
          <Image src={`/icons/twitter.svg`} alt='twitter' width={43} height={43} />
        </a>
        <div className='border border-gray-400 text-white p-0 h-10'></div>
        <Link href={`/this-pc/contact`} ><Image src={`/icons/mail.svg`} alt='mail' width={47} height={47} /></Link>
        <Link href={`/`}>
          <Image src={`/icons/settings-10.png`} alt='settings' width={52} height={52} />
        </Link>
      </div>
    </div>
  )
}

export default Footer
