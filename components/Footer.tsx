import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='pt-4 mx-8 lg:mx-72 mb-12 flex flex-col gap-6 justify-between border-t border-brand-grey-500 text-sm text-brand-grey-700'>
      <p>Branding designed by 
        <Link 
          href={"https://www.asiasonline.com/"}
          className='pl-1 text-brand-primary-green-700'
          >
            asiasOnline
        </Link>
      </p>
      <p className='text-right'>Last modified on July 22, 2026</p>
    </div>
  )
}

export default Footer