"use client"

import { useState } from 'react'

const Sidebar = () => {
  const subLinks = [
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
    <div className='hidden md:block'>
      Sidebar
    </div>
  )
}

export default Sidebar