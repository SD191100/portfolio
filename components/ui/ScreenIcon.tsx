"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Icon = ({ link, alt, title, forward, className }: { link: string; alt: string; title: string, forward: string, className?: string }) => {
  const [selected, setSelected] = React.useState(false);
  const iconRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Link href={`/this-pc/my-tools${forward}`}>
      <div
        //className="flex flex-col items-center text-center text-white space-y-2 my-10"
        ref={iconRef}
        className={`flex flex-col items-center text-center space-y-2 my-10 p-2 rounded-lg transition-all ${className} ${selected ? "bg-black/30 backdrop-blur-md" : "hover:bg-gray-500/20"
          }`}
        onClick={() => setSelected(true)}
      >
        <Image src={`/icons/${link}`} alt={alt} height={50} width={50} className="select-none" />
        <span className="select-none">{title}</span>
      </div>
    </Link>
  )
}

const HomeIcon = ({ link, alt, title, forward, className }: { link: string; alt: string; title: string, forward: string, className?: string }) => {
  const [selected, setSelected] = React.useState(false);
  const iconRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (iconRef.current && !iconRef.current.contains(event.target as Node)) {
        setSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Link href={`${forward}`}>
      <div
        //className="flex flex-col items-center text-center text-white space-y-2 my-10"
        ref={iconRef}
        className={`flex flex-col items-center text-center space-y-2 my-10 p-2 rounded-lg transition-all ${className} ${selected ? "bg-black/30 backdrop-blur-md" : "hover:bg-gray-500/20"
          }`}
        onClick={() => setSelected(true)}
      >
        <Image src={`/icons/${link}`} alt={alt} height={50} width={50} className="select-none" />
        <span className="select-none">{title}</span>
      </div>
    </Link>
  )
}

export {
  Icon, HomeIcon
};
