import React from 'react'
import Navbar from '@/components/Navbar'

const BrandingHomePage = () => {
  return (
    <div>
      <div className="w-full h-220 bg-brand-black/40 bg-[url('/images/holding-hands.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
        <Navbar />
      </div>
    </div>
  )
}

export default BrandingHomePage