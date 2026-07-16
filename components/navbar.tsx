"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    {name: "Home", href:"/home"},
    {name: "Guidelines", href:"/guidelines"},
    {name: "Assets", href:"/assets"},
    {name: "Support", href:"/support"}
  ];

  return (
    <nav className='w-full flex justify-between px-12 py-6'>
      <Link href='/home'>
        <Image 
            src="/logos/211-Wealth-primary-white-logo-png.png"
            width={120}
            height={120}
            alt="211 Wealth Logo"
            loading="eager"
          />
      </Link>
      {/* Desktop Nav */}
        <div className='hidden md:flex gap-10'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
              key={link.name}
              href={link.href}
              className={` text-brand-white ${
                isActive 
                ? 'underline' 
                : 'text-brand-white hover:font-semibold'
                }`}
              >
                {link.name}
              </Link>
              )
          })}
        </div>
    </nav>
  )
}

export default Navbar