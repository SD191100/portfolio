"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ThemeSwitcher from './ThemeSwitcher';
import { Explore } from './Explore';
import Link from 'next/link';

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "long",
    day: "numeric"
  };

  const datePart = new Intl.DateTimeFormat("en-US", options).format(time);
  const timePart = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
  return (
    <div className='bg-slate-500/10 border-slate-600 backdrop-blur-sm mb-2 px-4' >
      <div className='flex items-center justify-between ' >
        <div className='flex items-center '>
          <Link href={`/`}>
            <Image src={`/logos/apple-orig.svg`} alt='apple' height={30} width={30} className=' shadow-2xl shadow-red-300 mr-8 ' />
          </Link>
          <div className='flex font-bold text-white text-sm'>
            <span className='font-bold text-sm mx-1'>
              <Explore />
            </span>
          </div>
        </div>
        <div className='flex items-center'>
          <Image src={`/logos/battery.svg`} alt='battery' width={40} height={40} className='mx-3' />
          <Image src={`/logos/wifi.svg`} alt='wifi' width={40} height={40} className='mx-3' />
          <span className='text-white text-sm mx-3 cursor-pointer'>
            <ThemeSwitcher />
          </span>
          <span className='text-white font-normal text-sm mx-3'>{datePart + " " + timePart}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar

