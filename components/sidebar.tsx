"use client"

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
  const pathname = usePathname();
  const subLinks = [
    {name: "Introduction", href: "/guidelines"},
    {name: "The Foundation", href: "/guidelines/foundation"},
    {name: "Logotypes", href: "/guidelines/logotypes"},
    {name: "Colors", href: "/guidelines/colors"},
    {name: "Typography", href:"/guidelines/typography"},
    {name: "Graphics & Patterns", href:"/guidelines/graphics-patterns"},
    {name: "Photography", href:"/guidelines/photography"},
    {name: "Layout", href:"/guidelines/layout"},
    {name: "Iconography", href:"/guidelines/iconography"},
  ]

  return (
    <div className='hidden md:flex flex-col gap-8 w-1/4 max-w-60 h-fit p-4 mx-8 rounded-lg bg-brand-primary-green-100'>
      {subLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
              key={link.name}
              href={link.href}
              className={`${
                isActive 
                ? 'font-bold' 
                : 'hover:font-semibold'
                }

                `}
              >
                {link.name}
              </Link>
              )
          })}
    </div>
  )
}

export default Sidebar