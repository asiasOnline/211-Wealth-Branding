"use client"

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from "react-icons/fi";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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
          ? "w-screen h-screen z-20 fixed top-0 left-0 overflow-hidden" 
          : "hidden"}
        
          ${isLight
          ? "bg-brand-black"
          : "bg-brand-white"
          }`
        }
          >
          <div className='h-full flex items-center px-8'>
            <div>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block p-4
                      ${
                        isActive 
                        ? 'underline' 
                        : ''
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