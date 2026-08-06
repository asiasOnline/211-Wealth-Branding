import React from 'react'
import GuidelineCard from '@/components/GuidelineCard'

const GuidelinesPage = () => {
  return (
    <div className='text-brand-black'>
      <div>
        <h1>Introduction</h1>
        <div className='flex flex-col gap-4 pt-4'>
          <p>Branding can be very tedious, especially during an organization’s conception. There’s a lot of little decisions all feeding into a system that can be difficult to visualize, and when there’s already so much to take care of, it can feel incredibly overwhelming. </p>
          <p>But this is when establishing that system matters the most. Taking time to understand the elements that make up your organization, and then translating those elements into a visual identity is not only worthwhile from a business perspective but it can be encouraging. </p>
          <p>Seeing something you’re passionate about, something you’ve poured so much time, energy, and resources into, seeing that finally come together into something observable can help feed that momentum to continue when things inevitably get difficult. </p>
          <p>I hope these guidelines can help act as a reminder to not only your brand’s mission, but as a marker of how much you’ve put in, and how much growth you’re bound to see in the future.</p>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div>
        <h2>Table of Contents</h2>
        <p className='py-4'>It is recommended that all stakeholders and those involved in the creation of any marketing material read through this brand guide in its entirety. While individually, each brand element works on its own, going through the entirety of the guide will provide important context to how elements work with one another. Afterwards, or for anyone who simply needs to reference a specific element, explore each section to find in-depth explanations and usage guidelines.</p>
      </div>
      <div className='w-screen max-w-360'>
        <div className='flex flex-col justify-center lg:justify-start gap-6 lg:gap-12 md:flex-row md:flex-wrap'>
          <GuidelineCard />
        </div>
      </div>
    </div>
  )
}

export default GuidelinesPage