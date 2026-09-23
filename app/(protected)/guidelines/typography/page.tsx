import React from 'react'

const TypographyGuidelines = () => {
  return (
    <div>
      <h1>Typography</h1>
      <p>Typography needs to be properly selected to reflect an organization’s messaging  and set the tone. Before reading a single word, the font choice needs to portray both credibility and warmth while  ensuring accessibility and staying consistent with the brand’s personality. To achieve this balance two fonts were chosen for the 211 Wealth branding: Aleo and Google Sans Flex.</p>
      <hr className='section-divider my-8'/>
      <div id='heading-fonts'>
        <h2>Heading Fonts</h2>
        <p className='my-4'>Aleo is a contemporary, semi-rounded, slab serif font. The slender lines help make it easy to read, while the serifs provide a professionalism that avoids being too rigid. Aleo should be utilized exclusively for headlines and section titles.</p>
        <div className='flex gap-20
        '>
          <div className='font-bold'>
          <p className='text-xl pb-2'>Aleo - Bold | Weight: 700</p>
          <div className='flex gap-4 font-heading'>
            <div>
              <p className='text-7xl'>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
          <div className='font-semibold'>
          <p className='text-xl pb-2'>Aleo - Semibold | Weight: 500</p>
          <div className='flex gap-4 font-heading'>
            <div>
              <p className='text-7xl '>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='body-fonts'>
        <h2>Body Fonts</h2>
        <p className='pt-4'>DM Sans  is a geometric, sans serif typeface making it low-contrast and giving it ample amounts of space. This font was chosen because it’s clean and consistent, making it an ideal choice for those who may be reading under duress, on a mobile device, or those with English as a second language.</p>
        <p className='py-4'>It’s a professional choice that avoids coming off as lifeless or corporate  and versatile enough to be used in a variety of contexts and sizes.</p>
        <div className='flex gap-20
        '>
          <div className='font-bold'>
          <p className='text-xl pb-2'>DM Sans - Bold | Weight: 700</p>
          <div className='flex gap-4'>
            <div>
              <p className='text-7xl'>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
          <div>
          <p className='text-xl pb-2'>DM Sans - Regular | Weight: 400</p>
          <div className='flex gap-4'>
            <div>
              <p className='text-7xl '>Aa</p>
            </div>
            <div>
              <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              <p>abcdefghijklmnopqrstuvwxyz</p>
              <p>1234567890(,.;:?!$%#@&*-)</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='text-color'>
        <h2>Text Color</h2>
        <p>Neutral colors (Coffee Bean Black, Linen Grey, and Porcelain White) should be used for most text. This helps to limit confusion and will provide the most predictable contrast. However, for functional purposes colors will be used sparingly. A variation of Sage Green will be used for hyperlinks while a variation of Autumn Leaf Orange will be used explicitly for warnings and error messaging.</p>
        <div className='flex'>
          <div className='w-1/3'>
            <div className='text-sm'>
              <p>Coffee Black Body Text </p>
              <p>Linen Gray 700 Secondary Text</p>
              <p>Sage Green 700 Hyperlink</p>
              <p>Porcelain White Background</p>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='text-sm'>
              <p>Coffee Black Body Text </p>
              <p>Linen Gray 700 Secondary Text</p>
              <p>Sage Green 700 Hyperlink</p>
              <p>Porcelain White Background</p>
            </div>
          </div>
          <div className='w-1/3'>
            <div className='text-sm'>
              <p>Coffee Black Body Text </p>
              <p>Linen Gray 700 Secondary Text</p>
              <p>Sage Green 700 Hyperlink</p>
              <p>Porcelain White Background</p>
            </div>
          </div>
        </div>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>General Text Guidelines</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>Emphasis Applications</h2>
      </div>
      <hr className='section-divider my-8'/>
      <div id='general-text-guidelines'>
        <h2>Fallback Font</h2>
      </div>
    </div>
  )
}

export default TypographyGuidelines