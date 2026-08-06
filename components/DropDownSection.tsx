"use client"

import { useState } from 'react'
import React from 'react'
import { LuChevronDown } from "react-icons/lu";
import { LuChevronRight } from "react-icons/lu";

type DropDownSectionProps = {
    heading: string;
    children: React.ReactNode;
}

const DropDownSection = ({heading, children}: DropDownSectionProps) => {
const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
        <div className='flex items-center gap-2'>
            <p className='text-xl font-bold'>{heading}</p>
            <button
                className={`[&_svg]:size-5`}
                aria-label='menu'
                onClick={() => setIsOpen(!isOpen)}
                >
                {isOpen 
                ? <LuChevronDown size={24}/> 
                : <LuChevronRight size={24}/>}
                </button>
        </div>
        <div className={`${isOpen ? "flex flex-col gap-4 pt-4" : "hidden"}`}>
            {children}
        </div>
    </div>
  )
}

export default DropDownSection