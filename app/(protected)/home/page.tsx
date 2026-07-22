import React from 'react'
import Navbar from '@/components/Navbar'
import GuidelineCard from '@/components/GuidelineCard'

const BrandingHomePage = () => {
  return (
    <div className='w-full text-brand-black overflow-x-hidden'>
      <div className="w-full h-140 md:h-220 relative bg-brand-black/40 bg-[url('/images/holding-hands.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay border-b-8 border-brand-primary-green-500">
        <Navbar variant='light'/>
         <div className='absolute bottom-0 text-brand-white pl-4 pb-6 md:pl-16 md:pb-24'>
            <p className='font-heading font-bold text-xl md:text-3xl'>Welcome to the...</p>
            <h1 className='font-bold text-5xl md:text-8xl pt-4 md:pt-16 leading-14'>211 Wealth Brand Guide</h1>
         </div>
      </div>
      <div className='p-8'>
        <div className='border-b border-brand-grey-600'>
        <p>The 211 Wealth branding is built on the same values that guide the work of the organization and that’s a commitment to community, family, grace, and stewardship. This guide translates those values into a visual and verbal identity that reflects who we are and those we serve.</p>
        <p className='py-4'>Utilize the sections below to quickly navigate to what you need or explore the entire guide to build confidence and consistency for all types of brand application.</p>
      </div>
      <div>
        <h2 className='text-3xl font-bold py-8'>Guideline Contents</h2>
      </div>
      </div>
    </div>
  )
}

export default BrandingHomePage