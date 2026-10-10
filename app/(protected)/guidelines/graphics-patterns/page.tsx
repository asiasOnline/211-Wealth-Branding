import React from 'react'
import Image from 'next/image'

const GraphicsPatternsGuidelines = () => {
  return (
    <div>
      <h1>Graphics & Patterns</h1>
      <p className='pb-4'>Graphics and patterns help to provide a tactile element, which helps provide both structure and a way to incorporate some distinctiveness. When used with intention and restraint, these elements can help 211 Wealth bring life to their branding material without the risk of competition with the important content provided.</p>
      <p>The graphic library is organized into three categories, each with its own elements and role within the design system.</p>
      <hr className='section-divider my-8'/>
      <div id='botanicals'>
        <h2>Botanicals</h2>
        <p className='mt-4'>The botanical elements provide a direct visual connection to the tree which is the central visual element of 211 Wealth’s logo.</p>
        <div className='flex'>
          <div className='w-1/3'>
            <p><strong>Rounded Tear Drop Leaf</strong></p>
            <Image 
              src='/typography-examples/typography-examples1.png'
              alt='Typography example showing a heading, main text, and secondary text with a link in light mode.'
              width={300}
              height={189}
              className='border rounded my-2'
            />
            <div className='text-sm'>
              <p>Use for beneficiary-facing materials (brochures, welcome packets, and in-house content).</p>
            </div>
          </div>
          <div className='w-1/3'>
            <p><strong>Rounded Tear Drop Leaf</strong></p>
            <Image 
              src='/typography-examples/typography-examples1.png'
              alt='Typography example showing a heading, main text, and secondary text with a link in light mode.'
              width={300}
              height={189}
              className='border rounded my-2'
            />
            <div className='text-sm'>
              <p>Use for beneficiary-facing materials (brochures, welcome packets, and in-house content).</p>
            </div>
          </div>
          <div className='w-1/3'>
            <p><strong>Rounded Tear Drop Leaf</strong></p>
            <Image 
              src='/typography-examples/typography-examples1.png'
              alt='Typography example showing a heading, main text, and secondary text with a link in light mode.'
              width={300}
              height={189}
              className='border rounded my-2'
            />
            <div className='text-sm'>
              <p>Use for beneficiary-facing materials (brochures, welcome packets, and in-house content).</p>
            </div>
          </div>
        </div>
        <div className='pl-8'>
            <ul className='list-disc'>
              <li>Framing for a photo</li>
              <li>Framing device for quotes or callout text</li>
              <li>Borders and section dividers</li>
              <li>Background element (should only be used at low opacity)</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default GraphicsPatternsGuidelines