"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

type NavbarProps = {
  variant?: 'light' | 'dark'
}

const Navbar = ({variant = 'dark'}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    {name: "Home", href:"/home"},
    {name: "Guidelines", href:"/guidelines"},
    {name: "Assets", href:"/assets"},
    {name: "Support", href:"/support"}
  ];
  const isLight = variant === 'light'

  return (
    <nav className='w-full relative flex items-center justify-between pl-4 md:pl-10 pr-10 md:pr-20 py-4 md:py-6'>
      <Link href='/home' className='z-30'>
        <Image 
            src={isLight
              ? "/logos/211-Wealth-primary-white-logo-png.png"
              : "/logos/211-Wealth-primary-color-logo-png.png"}
            width={120}
            height={120}
            alt="211 Wealth Logo"
            loading="eager"
          />
      </Link>
      
      {/* Desktop Navigation */}
        <div className='hidden md:flex gap-10'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
              key={link.name}
              href={link.href}
              className={`w-24 text-center ${
                isActive 
                ? 'underline' 
                : 'hover:font-semibold'
                }

                ${isLight 
                ? 'text-brand-white' 
                : 'text-brand-black'
                }  
                `}
              >
                {link.name}
              </Link>
              )
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className=' flex md:hidden'>
          <button
            className={`[&_svg]:size-6 z-30
                ${
                isLight
                ? 'text-brand-white'
                : 'text-brand-black'
                }
              `}
            aria-label='menu'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen 
            ? <FiX size={24}/> 
            : <FiMenu size={24}/>}
          </button>
        </div>

        {/* Mobile Drawer */}
        <div className={`md:hidden 
        
          ${isOpen 
          ? "w-screen h-screen z-20 absolute top-0 right-0" 
          : "hidden"}
        
          ${isLight
          ? "bg-brand-black"
          : "bg-brand-white"
          }`
        }
          >
          <div className='h-full flex items-center'>
            <div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block p-4
                      ${
                        isActive 
                        ? 'underline' 
                        : 'hover:font-semibold'
                        }

                        ${isLight
                        ? "text-brand-white"
                        : "text-brand-black"
                        }
                      `}
                  >
                    {link.name}
                  </Link>
                  )
                })}
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar