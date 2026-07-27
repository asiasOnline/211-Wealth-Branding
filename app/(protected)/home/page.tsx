import React from 'react'
import Navbar from '@/components/Navbar'
import GuidelineCard from '@/components/GuidelineCard'
import Footer from '@/components/Footer'

const BrandingHomePage = () => {
  return (
    <div className='w-full text-brand-black overflow-x-hidden'>
      <div className="w-full h-140 md:h-220 relative bg-brand-black/40 bg-[url('/images/holding-hands.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay border-b-8 border-brand-primary-green-500">
        <Navbar variant='light'/>
         <div className='absolute bottom-0 left-8 text-brand-white pb-6 md:pl-16 md:pb-24'>
            <p className='font-heading font-bold text-xl md:text-3xl'>Welcome to the...</p>
            <h1 className='font-bold text-5xl md:text-8xl pt-4 md:pt-8 leading-14 md:leading-24'>211 Wealth Brand Guide</h1>
         </div>
      </div>
      <div className='p-8 md:px-12 lg:px-32'>
        <div className='border-b border-brand-grey-600'>
        <p>The 211 Wealth branding is built on the same values that guide the work of the organization and that’s a commitment to community, family, grace, and stewardship. This guide translates those values into a visual and verbal identity that reflects who we are and those we serve.</p>
        <p className='py-4'>Utilize the sections below to quickly navigate to what you need or explore the entire guide to build confidence and consistency for all types of brand application.</p>
      </div>
      <div>
        <h2 className='text-3xl font-bold pt-8 pb-4 ml-4'>Guideline Contents</h2>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center gap-6 lg:gap-12 md:flex-row md:flex-wrap'>
            <GuidelineCard />
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default BrandingHomePage