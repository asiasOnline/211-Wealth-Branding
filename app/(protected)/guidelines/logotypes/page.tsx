import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DropDownSection from '@/components/DropDownSection'

const LogotypesGuidelines = () => {
  return (
    <div>
      <h1>Logotypes</h1>
      <div className='flex flex-col gap-4'>
        <p>The 211 Wealth logo consists of a tree and the brand name in uppercase.</p>
        <p>The number 211 has two coincidental meanings. It represents both the combined ages of the founders at the time of the organization’s conception, and a nationally recognized helpline number that connects those in crisis to resources and support. </p>
        <p>The word ‘Wealth’ is a deliberate reframing, rather than a focus on financial prosperity, instead it’s a reference to the prosperity gained from fostering a community that’s safe and stable.</p>
        <p>While the tree which acts as the visual component of the logo speaks to the hope of flourishing after hardship and a commitment to acknowledging and understanding the underlying roots of crisis.</p>
        <p>Need to download any of these logos for 211 Wealth, check out your complete 
          <Link
            href="/assets"
            className='pl-1 text-brand-primary-green-700 font-bold hover:underline'
          >
            Asset Library
          </Link>
          .</p>
        <hr className='section-divider my-8'/>
        <div id='logo-anatomy'>
          <h2>Anatomy of the Logo</h2>
          <div id='logo-variants'>
            <h3 className='py-4'>Logo Variants</h3>
            <div className='flex flex-col gap-4'>
              <p>The 211 Wealth logo has five variations.</p>
              <p> The logos below are  listed in order of which one should be used by default. This means, the primary logo should be used for the most part; however, if spacing is more of a concern than the secondary logo, if visual imagery must be limited use the wordmark logo variations as applicable, and if text would become illegible use the submark.</p>
              <p>All logo variations also come in three color varieties. The primary color option should only be used on plain, solid, white or off-white backgrounds and should be used by default. If utilizing the color option is not possible, or the logo will be used on a light colored, patterned background the black variation should be employed. Finally, if the logo will be used on a dark colored background the white variation should be applied.</p>
            </div>
            <div className='my-6 flex flex-col gap-8'>
              <DropDownSection heading='1. Primary Logo'>
                <p>The entirety of the logo icon (both tree and roots)  paired with an integrated, fully horizontal version of the wordmark. </p>
                <div className='flex gap-4'>
                  <div className='bg-white flex border rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-color-logo-png.png'
                      alt='211 Wealth Primary Logo - Color Variant'
                      width={200}
                      height={200}
                    />
                    <Image 
                      src='/logos/211-Wealth-primary-black-logo-png.png'
                      alt='211 Wealth Primary Logo - Black Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className='bg-brand-black rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-white-logo-png.png'
                      alt='211 Wealth Primary Logo - White Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </DropDownSection>
              <DropDownSection heading='2. Secondary Logo'>
                <p>The entirety of the logo icon (both tree and roots)  paired with an integrated, fully horizontal version of the wordmark. </p>
                <div className='flex gap-4'>
                  <div className='bg-white flex border rounded'>
                    <Image 
                      src='/logos/211-Wealth-secondary-color-logo-png.png'
                      alt='211 Wealth Secondary Logo - Color Variant'
                      width={257}
                      height={100}
                    />
                    <Image 
                      src='/logos/211-Wealth-secondary-black-logo-png.png'
                      alt='211 Wealth Secondary Logo - Black Variant'
                      width={257}
                      height={100}
                    />
                  </div>
                  <div className='bg-brand-black rounded'>
                    <Image 
                      src='/logos/211-Wealth-secondary-white-logo-png.png'
                      alt='211 Wealth Secondary Logo - White Variant'
                      width={257}
                      height={100}
                    />
                  </div>
                </div>
              </DropDownSection>
              <DropDownSection heading='3. Wordmark Horizontal Logo'>
                <p>A horizontal version of the wordmark with minimal reference to the logo icon (leaves only).</p>
                <div className='flex gap-4'>
                  <div className='bg-white flex border rounded'>
                    <Image 
                      src='/logos/211-Wealth-horizontal-wordmark-color-logo-png.png'
                      alt='211 Wealth Horizontal Wordmark Logo - Color Variant'
                      width={288}
                      height={72}
                    />
                    <Image 
                      src='/logos/211-Wealth-horizontal-wordmark-black-logo-png.png'
                      alt='211 Wealth Horizontal Wordmark Logo - Black Variant'
                      width={288}
                      height={72}
                    />
                  </div>
                  <div className='bg-brand-black rounded'>
                    <Image 
                      src='/logos/211-Wealth-horizontal-wordmark-white-logo-png.png'
                      alt='211 Wealth Horizontal Wordmark Logo - White Variant'
                      width={288}
                      height={72}
                    />
                  </div>
                </div>
              </DropDownSection>
              <DropDownSection heading='4. Wordmark Vertical Logo'>
                <p>A stacked version of the wordmark with minimal reference to the logo icon (leaves only).</p>
                <div className='flex gap-4'>
                  <div className='bg-white flex border rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-color-logo-png.png'
                      alt='211 Wealth Primary Logo - Color Variant'
                      width={200}
                      height={200}
                    />
                    <Image 
                      src='/logos/211-Wealth-primary-black-logo-png.png'
                      alt='211 Wealth Primary Logo - Black Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className='bg-brand-black rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-white-logo-png.png'
                      alt='211 Wealth Primary Logo - White Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </DropDownSection>
              <DropDownSection heading='5. Submark Logo'>
                <p>The entirety of the logo icon (both tree and roots)  paired with an integrated, fully horizontal version of the wordmark. </p>
                <div className='flex gap-4'>
                  <div className='bg-white flex border rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-color-logo-png.png'
                      alt='211 Wealth Primary Logo - Color Variant'
                      width={200}
                      height={200}
                    />
                    <Image 
                      src='/logos/211-Wealth-primary-black-logo-png.png'
                      alt='211 Wealth Primary Logo - Black Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className='bg-brand-black rounded'>
                    <Image 
                      src='/logos/211-Wealth-primary-white-logo-png.png'
                      alt='211 Wealth Primary Logo - White Variant'
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </DropDownSection>
            </div>
          </div>
          <hr className='sub-section-divider my-6'/>
          <div id='logo-spacing'>
            <h3>Logo Spacing</h3>
            <p>All logo variants required a certain amount of clear space surrounding the logo to ensure there is no competition for attention.</p>
          </div>
        </div>
        <hr className='section-divider my-8'/>
        <div id='logo-usage-guidelines'>
            <h2>Logo Usage Guidelines</h2>
          </div>
      </div>
    </div>
  )
}

export default LogotypesGuidelines